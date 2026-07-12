import { Router } from "express";
import OpenAI from "openai";
import { logger } from "../lib/logger";

const router = Router();

function getClient() {
  const baseURL = process.env["AI_INTEGRATIONS_OPENAI_BASE_URL"];
  const apiKey  = process.env["AI_INTEGRATIONS_OPENAI_API_KEY"];
  if (!baseURL || !apiKey) throw new Error("IA não configurada no servidor.");
  return new OpenAI({ apiKey, baseURL });
}

router.get("/ai/chat", (_req, res) => { res.status(405).json({ error: "Use POST" }); });
router.head("/ai/chat", (_req, res) => { res.status(405).end(); });

router.post("/ai/chat", async (req, res) => {
  const controller = new AbortController();
  const timeoutId  = setTimeout(() => controller.abort(), 110_000);
  const cleanup    = () => { clearTimeout(timeoutId); res.off("close", onClose); };
  const onClose    = () => { if (!res.writableEnded) controller.abort(); };
  res.on("close", onClose);

  try {
    const { messages, system, systemPrompt, stream } = req.body as {
      messages: { role: string; content: string }[];
      system?: string; systemPrompt?: string; stream?: boolean;
    };

    const client = getClient();
    const resolvedSystem = system || systemPrompt;
    const finalMessages: OpenAI.ChatCompletionMessageParam[] = [
      ...(resolvedSystem ? [{ role: "system" as const, content: resolvedSystem }] : []),
      ...messages.map(m => ({ role: m.role as "user" | "assistant", content: m.content })),
    ];

    if (stream) {
      res.setHeader("Content-Type", "text/event-stream");
      res.setHeader("Cache-Control", "no-cache");
      res.setHeader("Connection", "keep-alive");
      const s = await client.chat.completions.create({
        model: "gpt-4o", messages: finalMessages, stream: true, max_tokens: 8192,
      }, { signal: controller.signal });
      for await (const chunk of s) {
        const text = chunk.choices[0]?.delta?.content || "";
        if (text) res.write(`data: ${JSON.stringify({ content: text })}\n\n`);
      }
      res.write("data: [DONE]\n\n");
      res.end(); cleanup(); return;
    }

    const resp = await client.chat.completions.create({
      model: "gpt-4o", messages: finalMessages, max_tokens: 8192,
    }, { signal: controller.signal });
    const content = resp.choices[0]?.message?.content ?? "";
    cleanup(); res.json({ content });

  } catch (err: any) {
    cleanup();
    logger.error({ err }, "Erro chat IA");
    if (!res.headersSent) res.status(500).json({ error: err.message || String(err) });
  }
});

export default router;
