# PLANO DO PROJETO: sk-editor-source

> Gerado automaticamente pelo SK Code Editor em 12/07/2026, 20:29:32
> **361 arquivo(s)** | **~85.805 linhas de codigo**

---

## RESUMO EXECUTIVO

- **Tipo de aplicacao:** Aplicacao Web Frontend (React)
- **Frontend / Stack principal:** React, TypeScript

**Para rodar o projeto:**
```bash
# Abra index.html no Preview (botao Play)
```

---

## ESTRUTURA DE ARQUIVOS

```
sk-editor-source/
├── api-server/
│   ├── .replit-artifact/
│   │   └── artifact.toml
│   ├── src/
│   │   ├── lib/
│   │   │   └── logger.ts
│   │   ├── routes/
│   │   │   ├── ai-chat.ts
│   │   │   ├── ai-forward.ts
│   │   │   ├── config.ts
│   │   │   ├── db.ts
│   │   │   ├── drive.ts
│   │   │   ├── exec.ts
│   │   │   ├── github.ts
│   │   │   ├── health.ts
│   │   │   ├── index.ts
│   │   │   ├── legal-ai.ts
│   │   │   ├── pages.ts
│   │   │   ├── proxy.ts
│   │   │   ├── search.ts
│   │   │   ├── twa.ts
│   │   │   ├── upload.ts
│   │   │   ├── voice.ts
│   │   │   └── workspace.ts
│   │   ├── app.ts
│   │   └── index.ts
│   ├── build.mjs
│   ├── package.json
│   ├── pty_helper.c
│   └── tsconfig.json
├── code-editor/
│   ├── .github/
│   │   └── workflows/
│   │       ├── build-apk.yml
│   │       └── deploy.yml
│   ├── .replit-artifact/
│   │   └── artifact.toml
│   ├── dist-pronto/
│   │   ├── assets/
│   │   │   ├── index-CszvMv4M.css
│   │   │   ├── vendor-fs-BeamS8bA.js
│   │   │   ├── vendor-highlight-Bu9o_ty_.js
│   │   │   ├── vendor-highlight-DOOs4slz.css
│   │   │   ├── vendor-lucide-NZRTcJIq.js
│   │   │   ├── vendor-markdown-CM6-e2rl.js
│   │   │   ├── vendor-misc-COW7C1HQ.js
│   │   │   ├── vendor-monaco-CS9w1txC.js
│   │   │   ├── vendor-react-D8m3Uig9.js
│   │   │   ├── vendor-react-dom-CdNyEL3a.js
│   │   │   ├── vendor-webcontainer-BPoiPq3D.js
│   │   │   ├── vendor-xterm-CT6HrMBF.js
│   │   │   └── vendor-xterm-DDGTF8rc.css
│   │   ├── favicon.svg
│   │   ├── guia-completo-apk.md
│   │   ├── index.html
│   │   ├── manifest.json
│   │   ├── manual-dev.md
│   │   ├── MANUAL-SK-CODE-EDITOR.md
│   │   └── sw.js
│   ├── dist-standalone/
│   │   ├── .github/
│   │   │   └── workflows/
│   │   │       └── build-apk.yml
│   │   ├── assets/
│   │   │   ├── index-CcSMgIUa.css
│   │   │   ├── vendor-fs-BeamS8bA.js
│   │   │   ├── vendor-highlight-Bu9o_ty_.js
│   │   │   ├── vendor-highlight-DOOs4slz.css
│   │   │   ├── vendor-lucide-BSwgyeoM.js
│   │   │   ├── vendor-markdown-CM6-e2rl.js
│   │   │   ├── vendor-misc-COW7C1HQ.js
│   │   │   ├── vendor-monaco-CS9w1txC.js
│   │   │   ├── vendor-react-D8m3Uig9.js
│   │   │   ├── vendor-react-dom-CdNyEL3a.js
│   │   │   ├── vendor-xterm-CT6HrMBF.js
│   │   │   └── vendor-xterm-DDGTF8rc.css
│   │   ├── favicon.svg
│   │   ├── GERAR-APK.md
│   │   ├── guia-completo-apk.md
│   │   ├── index.html
│   │   ├── manifest.json
│   │   ├── manual-dev.md
│   │   ├── MANUAL-SK-CODE-EDITOR.md
│   │   └── sw.js
│   ├── public/
│   │   ├── favicon.svg
│   │   ├── guia-completo-apk.md
│   │   ├── manifest.json
│   │   ├── manual-dev.md
│   │   ├── MANUAL-SK-CODE-EDITOR.md
│   │   └── sw.js
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/
│   │   │   │   ├── accordion.tsx
│   │   │   │   ├── alert-dialog.tsx
│   │   │   │   ├── alert.tsx
│   │   │   │   ├── aspect-ratio.tsx
│   │   │   │   ├── avatar.tsx
│   │   │   │   ├── badge.tsx
│   │   │   │   ├── breadcrumb.tsx
│   │   │   │   ├── button-group.tsx
│   │   │   │   ├── button.tsx
│   │   │   │   ├── calendar.tsx
│   │   │   │   ├── card.tsx
│   │   │   │   ├── carousel.tsx
│   │   │   │   ├── chart.tsx
│   │   │   │   ├── checkbox.tsx
│   │   │   │   ├── collapsible.tsx
│   │   │   │   ├── command.tsx
│   │   │   │   ├── context-menu.tsx
│   │   │   │   ├── dialog.tsx
│   │   │   │   ├── drawer.tsx
│   │   │   │   ├── dropdown-menu.tsx
│   │   │   │   ├── empty.tsx
│   │   │   │   ├── field.tsx
│   │   │   │   ├── form.tsx
│   │   │   │   ├── hover-card.tsx
│   │   │   │   ├── input-group.tsx
│   │   │   │   ├── input-otp.tsx
│   │   │   │   ├── input.tsx
│   │   │   │   ├── item.tsx
│   │   │   │   ├── kbd.tsx
│   │   │   │   ├── label.tsx
│   │   │   │   ├── menubar.tsx
│   │   │   │   ├── navigation-menu.tsx
│   │   │   │   ├── pagination.tsx
│   │   │   │   ├── popover.tsx
│   │   │   │   ├── progress.tsx
│   │   │   │   ├── radio-group.tsx
│   │   │   │   ├── resizable.tsx
│   │   │   │   ├── scroll-area.tsx
│   │   │   │   ├── select.tsx
│   │   │   │   ├── separator.tsx
│   │   │   │   ├── sheet.tsx
│   │   │   │   ├── sidebar.tsx
│   │   │   │   ├── skeleton.tsx
│   │   │   │   ├── slider.tsx
│   │   │   │   ├── sonner.tsx
│   │   │   │   ├── spinner.tsx
│   │   │   │   ├── switch.tsx
│   │   │   │   ├── table.tsx
│   │   │   │   ├── tabs.tsx
│   │   │   │   ├── textarea.tsx
│   │   │   │   ├── toast.tsx
│   │   │   │   ├── toaster.tsx
│   │   │   │   ├── toggle-group.tsx
│   │   │   │   ├── toggle.tsx
│   │   │   │   └── tooltip.tsx
│   │   │   ├── AIChat.tsx
│   │   │   ├── APKBuilderPanel.tsx
│   │   │   ├── AssistenteJuridico.tsx
│   │   │   ├── CampoLivre.tsx
│   │   │   ├── CodeEditor.tsx
│   │   │   ├── CombinarApps.tsx
│   │   │   ├── DriveBackupPanel.tsx
│   │   │   ├── EditorLayout.tsx
│   │   │   ├── FileTree.tsx
│   │   │   ├── GitHubPanel.tsx
│   │   │   ├── Manual.tsx
│   │   │   ├── PackageSearch.tsx
│   │   │   ├── Preview.tsx
│   │   │   ├── QuickPrompt.tsx
│   │   │   ├── RealTerminal.tsx
│   │   │   ├── StreamTerminal.tsx
│   │   │   ├── SystemStatusPanel.tsx
│   │   │   ├── TemplateSelector.tsx
│   │   │   ├── Terminal.tsx
│   │   │   ├── VoiceCard.tsx
│   │   │   ├── VoiceMode.tsx
│   │   │   ├── VSCodeWebPanel.tsx
│   │   │   └── WebContainerTerminal.tsx
│   │   ├── hooks/
│   │   │   ├── use-mobile.tsx
│   │   │   └── use-toast.ts
│   │   ├── lib/
│   │   │   ├── ai-service.ts
│   │   │   ├── github-service.ts
│   │   │   ├── projects.ts
│   │   │   ├── store.ts
│   │   │   ├── templates.ts
│   │   │   ├── tts-service.ts
│   │   │   ├── utils.ts
│   │   │   ├── virtual-fs.ts
│   │   │   └── zip-service.ts
│   │   ├── App.tsx
│   │   ├── index.css
│   │   └── main.tsx
│   ├── components.json
│   ├── index.html
│   ├── INSTALAR.md
│   ├── package-standalone.json
│   ├── package.json
│   ├── SYSTEM_DOCS.md
│   ├── tsconfig.json
│   ├── vite.config.standalone.ts
│   └── vite.config.ts
├── mockup-sandbox/
│   ├── .replit-artifact/
│   │   └── artifact.toml
│   ├── src/
│   │   ├── .generated/
│   │   │   └── mockup-components.ts
│   │   ├── components/
│   │   │   └── ui/
│   │   │       ├── accordion.tsx
│   │   │       ├── alert-dialog.tsx
│   │   │       ├── alert.tsx
│   │   │       ├── aspect-ratio.tsx
│   │   │       ├── avatar.tsx
│   │   │       ├── badge.tsx
│   │   │       ├── breadcrumb.tsx
│   │   │       ├── button-group.tsx
│   │   │       ├── button.tsx
│   │   │       ├── calendar.tsx
│   │   │       ├── card.tsx
│   │   │       ├── carousel.tsx
│   │   │       ├── chart.tsx
│   │   │       ├── checkbox.tsx
│   │   │       ├── collapsible.tsx
│   │   │       ├── command.tsx
│   │   │       ├── context-menu.tsx
│   │   │       ├── dialog.tsx
│   │   │       ├── drawer.tsx
│   │   │       ├── dropdown-menu.tsx
│   │   │       ├── empty.tsx
│   │   │       ├── field.tsx
│   │   │       ├── form.tsx
│   │   │       ├── hover-card.tsx
│   │   │       ├── input-group.tsx
│   │   │       ├── input-otp.tsx
│   │   │       ├── input.tsx
│   │   │       ├── item.tsx
│   │   │       ├── kbd.tsx
│   │   │       ├── label.tsx
│   │   │       ├── menubar.tsx
│   │   │       ├── navigation-menu.tsx
│   │   │       ├── pagination.tsx
│   │   │       ├── popover.tsx
│   │   │       ├── progress.tsx
│   │   │       ├── radio-group.tsx
│   │   │       ├── resizable.tsx
│   │   │       ├── scroll-area.tsx
│   │   │       ├── select.tsx
│   │   │       ├── separator.tsx
│   │   │       ├── sheet.tsx
│   │   │       ├── sidebar.tsx
│   │   │       ├── skeleton.tsx
│   │   │       ├── slider.tsx
│   │   │       ├── sonner.tsx
│   │   │       ├── spinner.tsx
│   │   │       ├── switch.tsx
│   │   │       ├── table.tsx
│   │   │       ├── tabs.tsx
│   │   │       ├── textarea.tsx
│   │   │       ├── toast.tsx
│   │   │       ├── toaster.tsx
│   │   │       ├── toggle-group.tsx
│   │   │       ├── toggle.tsx
│   │   │       └── tooltip.tsx
│   │   ├── hooks/
│   │   │   ├── use-mobile.tsx
│   │   │   └── use-toast.ts
│   │   ├── lib/
│   │   │   └── utils.ts
│   │   ├── App.tsx
│   │   ├── index.css
│   │   └── main.tsx
│   ├── components.json
│   ├── index.html
│   ├── mockupPreviewPlugin.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── vite.config.ts
└── SK-Editor-v3-Source (1)/
    ├── db-local/
    │   ├── COMO-USAR.txt
    │   ├── index.html
    │   ├── package.json
    │   └── server.js
    ├── electron/
    │   ├── main.cjs
    │   └── preload.cjs
    ├── public/
    │   └── manifest.webmanifest
    ├── src/
    │   ├── components/
    │   │   ├── ui/
    │   │   │   ├── accordion.tsx
    │   │   │   ├── alert-dialog.tsx
    │   │   │   ├── alert.tsx
    │   │   │   ├── aspect-ratio.tsx
    │   │   │   ├── avatar.tsx
    │   │   │   ├── badge.tsx
    │   │   │   ├── breadcrumb.tsx
    │   │   │   ├── button-group.tsx
    │   │   │   ├── button.tsx
    │   │   │   ├── calendar.tsx
    │   │   │   ├── card.tsx
    │   │   │   ├── carousel.tsx
    │   │   │   ├── chart.tsx
    │   │   │   ├── checkbox.tsx
    │   │   │   ├── collapsible.tsx
    │   │   │   ├── command.tsx
    │   │   │   ├── context-menu.tsx
    │   │   │   ├── dialog.tsx
    │   │   │   ├── drawer.tsx
    │   │   │   ├── dropdown-menu.tsx
    │   │   │   ├── empty.tsx
    │   │   │   ├── field.tsx
    │   │   │   ├── form.tsx
    │   │   │   ├── hover-card.tsx
    │   │   │   ├── input-group.tsx
    │   │   │   ├── input-otp.tsx
    │   │   │   ├── input.tsx
    │   │   │   ├── item.tsx
    │   │   │   ├── kbd.tsx
    │   │   │   ├── label.tsx
    │   │   │   ├── menubar.tsx
    │   │   │   ├── navigation-menu.tsx
    │   │   │   ├── pagination.tsx
    │   │   │   ├── popover.tsx
    │   │   │   ├── progress.tsx
    │   │   │   ├── radio-group.tsx
    │   │   │   ├── resizable.tsx
    │   │   │   ├── scroll-area.tsx
    │   │   │   ├── select.tsx
    │   │   │   ├── separator.tsx
    │   │   │   ├── sheet.tsx
    │   │   │   ├── sidebar.tsx
    │   │   │   ├── skeleton.tsx
    │   │   │   ├── slider.tsx
    │   │   │   ├── sonner.tsx
    │   │   │   ├── spinner.tsx
    │   │   │   ├── switch.tsx
    │   │   │   ├── table.tsx
    │   │   │   ├── tabs.tsx
    │   │   │   ├── textarea.tsx
    │   │   │   ├── toast.tsx
    │   │   │   ├── toaster.tsx
    │   │   │   ├── toggle-group.tsx
    │   │   │   ├── toggle.tsx
    │   │   │   └── tooltip.tsx
    │   │   ├── AIChat.tsx
    │   │   ├── AssistenteJuridico.tsx
    │   │   ├── BuildPanel.tsx
    │   │   ├── CampoLivre.tsx
    │   │   ├── CodeEditor.tsx
    │   │   ├── CombinarApps.tsx
    │   │   ├── DatabasePanel.tsx
    │   │   ├── DeployPanel.tsx
    │   │   ├── DriveBackupPanel.tsx
    │   │   ├── EditorLayout.tsx
    │   │   ├── ElectronTerminal.tsx
    │   │   ├── FileScanner.tsx
    │   │   ├── FileTree.tsx
    │   │   ├── GitHubPanel.tsx
    │   │   ├── HTMLPlayground.tsx
    │   │   ├── Manual.tsx
    │   │   ├── PackageSearch.tsx
    │   │   ├── Preview.tsx
    │   │   ├── QuickPrompt.tsx
    │   │   ├── RealTerminal.tsx
    │   │   ├── SiteExtractor.tsx
    │   │   ├── SKTerminal.tsx
    │   │   ├── StreamTerminal.tsx
    │   │   ├── SystemStatusPanel.tsx
    │   │   ├── TemplateSelector.tsx
    │   │   ├── Terminal.tsx
    │   │   ├── VoiceCard.tsx
    │   │   ├── VoiceMode.tsx
    │   │   ├── WebContainerTerminal.tsx
    │   │   └── XTermConnector.tsx
    │   ├── hooks/
    │   │   ├── use-mobile.tsx
    │   │   └── use-toast.ts
    │   ├── lib/
    │   │   ├── ai-service.ts
    │   │   ├── github-service.ts
    │   │   ├── idb-storage.ts
    │   │   ├── projects.ts
    │   │   ├── store.ts
    │   │   ├── templates.ts
    │   │   ├── tts-service.ts
    │   │   ├── utils.ts
    │   │   ├── virtual-fs.ts
    │   │   └── zip-service.ts
    │   ├── App.tsx
    │   ├── index.css
    │   └── main.tsx
    ├── index.html
    ├── package.json
    ├── pnpm-workspace.yaml
    ├── README-SK-EDITOR-V3.md
    ├── replit.md
    ├── replit.nix
    ├── server.cjs
    ├── tsconfig.json
    └── vite.config.ts
```

---

## STACK TECNOLOGICO DETECTADO

- **Frontend:** React, TypeScript

---

## ROTAS DA API (endpoints detectados automaticamente)

```
GET    /api/items  (em SK-Editor-v3-Source (1)/src/lib/templates.ts)
GET    /api/items/:id  (em SK-Editor-v3-Source (1)/src/lib/templates.ts)
POST   /api/items  (em SK-Editor-v3-Source (1)/src/lib/templates.ts)
GET    /api/health  (em SK-Editor-v3-Source (1)/src/lib/templates.ts)
USE    /api/auth  (em SK-Editor-v3-Source (1)/src/lib/templates.ts)
USE    /api/usuarios  (em SK-Editor-v3-Source (1)/src/lib/templates.ts)
POST   /register  (em SK-Editor-v3-Source (1)/src/lib/templates.ts)
POST   /login  (em SK-Editor-v3-Source (1)/src/lib/templates.ts)
GET    /perfil  (em SK-Editor-v3-Source (1)/src/lib/templates.ts)
GET    /api/provedores  (em SK-Editor-v3-Source (1)/src/lib/templates.ts)
POST   /api/chat  (em SK-Editor-v3-Source (1)/src/lib/templates.ts)
GET    /health  (em SK-Editor-v3-Source (1)/src/lib/templates.ts)
POST   /auth/login  (em SK-Editor-v3-Source (1)/src/lib/templates.ts)
POST   /auth/registro  (em SK-Editor-v3-Source (1)/src/lib/templates.ts)
GET    /clientes  (em SK-Editor-v3-Source (1)/src/lib/templates.ts)
GET    /clientes/:id  (em SK-Editor-v3-Source (1)/src/lib/templates.ts)
POST   /clientes  (em SK-Editor-v3-Source (1)/src/lib/templates.ts)
PUT    /clientes/:id  (em SK-Editor-v3-Source (1)/src/lib/templates.ts)
GET    /processos  (em SK-Editor-v3-Source (1)/src/lib/templates.ts)
GET    /processos/:id  (em SK-Editor-v3-Source (1)/src/lib/templates.ts)
POST   /processos  (em SK-Editor-v3-Source (1)/src/lib/templates.ts)
GET    /audiencias  (em SK-Editor-v3-Source (1)/src/lib/templates.ts)
POST   /audiencias  (em SK-Editor-v3-Source (1)/src/lib/templates.ts)
GET    /prazos/proximos  (em SK-Editor-v3-Source (1)/src/lib/templates.ts)
GET    /dashboard  (em SK-Editor-v3-Source (1)/src/lib/templates.ts)
GET    /api/registros  (em SK-Editor-v3-Source (1)/src/lib/templates.ts)
GET    /api/registros/:id  (em SK-Editor-v3-Source (1)/src/lib/templates.ts)
POST   /api/registros  (em SK-Editor-v3-Source (1)/src/lib/templates.ts)
PUT    /api/registros/:id  (em SK-Editor-v3-Source (1)/src/lib/templates.ts)
DELETE /api/registros/:id  (em SK-Editor-v3-Source (1)/src/lib/templates.ts)
USE    /api  (em api-server/src/app.ts)
GET    /ai/chat  (em api-server/src/routes/ai-chat.ts)
POST   /ai/chat  (em api-server/src/routes/ai-chat.ts)
POST   /ai/forward  (em api-server/src/routes/ai-forward.ts)
GET    /config  (em api-server/src/routes/config.ts)
POST   /db/neon/create  (em api-server/src/routes/db.ts)
GET    /db/neon/projects  (em api-server/src/routes/db.ts)
POST   /db/neon/credentials  (em api-server/src/routes/db.ts)
POST   /db/execute  (em api-server/src/routes/db.ts)
POST   /db/test-connection  (em api-server/src/routes/db.ts)
GET    /drive/list  (em api-server/src/routes/drive.ts)
POST   /drive/upload  (em api-server/src/routes/drive.ts)
DELETE /drive/delete/:fileId  (em api-server/src/routes/drive.ts)
POST   /exec/npm-install  (em api-server/src/routes/exec.ts)
POST   /exec/run-node  (em api-server/src/routes/exec.ts)
POST   /exec/run-node-vfs  (em api-server/src/routes/exec.ts)
POST   /db/query  (em api-server/src/routes/exec.ts)
POST   /projects/:projectId/exec-stdin  (em api-server/src/routes/exec.ts)
POST   /projects/:projectId/exec-stream  (em api-server/src/routes/exec.ts)
GET    /github/user  (em api-server/src/routes/github.ts)
GET    /github/repos  (em api-server/src/routes/github.ts)
POST   /github/repos  (em api-server/src/routes/github.ts)
POST   /github/push  (em api-server/src/routes/github.ts)
DELETE /github/repos/:owner/:repo  (em api-server/src/routes/github.ts)
GET    /healthz  (em api-server/src/routes/health.ts)
USE    /voice  (em api-server/src/routes/index.ts)
POST   /legal/process  (em api-server/src/routes/legal-ai.ts)
POST   /legal/refine  (em api-server/src/routes/legal-ai.ts)
POST   /pages/deploy  (em api-server/src/routes/pages.ts)
GET    /search  (em api-server/src/routes/search.ts)
GET    /search-images  (em api-server/src/routes/search.ts)
GET    /npm-search  (em api-server/src/routes/search.ts)
GET    /pwa-check  (em api-server/src/routes/twa.ts)
GET    /twa-files  (em api-server/src/routes/twa.ts)
GET    /twa-package  (em api-server/src/routes/twa.ts)
POST   /upload/extract-text  (em api-server/src/routes/upload.ts)
POST   /transcribe  (em api-server/src/routes/voice.ts)
POST   /speak  (em api-server/src/routes/voice.ts)
GET    /workspace/info  (em api-server/src/routes/workspace.ts)
POST   /workspace/write  (em api-server/src/routes/workspace.ts)
GET    /workspace/read  (em api-server/src/routes/workspace.ts)
GET    /workspace/list  (em api-server/src/routes/workspace.ts)
POST   /workspace/delete  (em api-server/src/routes/workspace.ts)
POST   /workspace/install  (em api-server/src/routes/workspace.ts)
POST   /workspace/run  (em api-server/src/routes/workspace.ts)
POST   /workspace/sync  (em api-server/src/routes/workspace.ts)
GET    /api/items  (em code-editor/src/lib/templates.ts)
GET    /api/items/:id  (em code-editor/src/lib/templates.ts)
POST   /api/items  (em code-editor/src/lib/templates.ts)
GET    /api/health  (em code-editor/src/lib/templates.ts)
USE    /api/auth  (em code-editor/src/lib/templates.ts)
USE    /api/usuarios  (em code-editor/src/lib/templates.ts)
POST   /register  (em code-editor/src/lib/templates.ts)
POST   /login  (em code-editor/src/lib/templates.ts)
GET    /perfil  (em code-editor/src/lib/templates.ts)
GET    /api/provedores  (em code-editor/src/lib/templates.ts)
POST   /api/chat  (em code-editor/src/lib/templates.ts)
GET    /health  (em code-editor/src/lib/templates.ts)
POST   /auth/login  (em code-editor/src/lib/templates.ts)
POST   /auth/registro  (em code-editor/src/lib/templates.ts)
GET    /clientes  (em code-editor/src/lib/templates.ts)
GET    /clientes/:id  (em code-editor/src/lib/templates.ts)
POST   /clientes  (em code-editor/src/lib/templates.ts)
PUT    /clientes/:id  (em code-editor/src/lib/templates.ts)
GET    /processos  (em code-editor/src/lib/templates.ts)
GET    /processos/:id  (em code-editor/src/lib/templates.ts)
POST   /processos  (em code-editor/src/lib/templates.ts)
GET    /audiencias  (em code-editor/src/lib/templates.ts)
POST   /audiencias  (em code-editor/src/lib/templates.ts)
GET    /prazos/proximos  (em code-editor/src/lib/templates.ts)
GET    /dashboard  (em code-editor/src/lib/templates.ts)
GET    /api/registros  (em code-editor/src/lib/templates.ts)
GET    /api/registros/:id  (em code-editor/src/lib/templates.ts)
POST   /api/registros  (em code-editor/src/lib/templates.ts)
PUT    /api/registros/:id  (em code-editor/src/lib/templates.ts)
DELETE /api/registros/:id  (em code-editor/src/lib/templates.ts)
```

---

## VARIAVEIS DE AMBIENTE NECESSARIAS

Crie um arquivo `.env` na raiz com estas variaveis:

```env
PORT=seu_valor_aqui
ALLOWED_ORIGINS=seu_valor_aqui
JWT_SECRET=seu_valor_aqui
JWT_EXPIRES_IN=seu_valor_aqui
DATABASE_URL=seu_valor_aqui
GROQ_API_KEY=seu_valor_aqui
OPENAI_API_KEY=seu_valor_aqui
GEMINI_API_KEY=seu_valor_aqui
ANTHROPIC_API_KEY=seu_valor_aqui
XAI_API_KEY=seu_valor_aqui
OPENROUTER_API_KEY=seu_valor_aqui
PERPLEXITY_API_KEY=seu_valor_aqui
TELEGRAM_TOKEN=seu_valor_aqui
BASE_PATH=seu_valor_aqui
REPL_ID=seu_valor_aqui
LOG_LEVEL=seu_valor_aqui
AI_INTEGRATIONS_OPENAI_BASE_URL=seu_valor_aqui
AI_INTEGRATIONS_OPENAI_API_KEY=seu_valor_aqui
```

---

## ARQUIVOS PRINCIPAIS

- `SK-Editor-v3-Source (1)/db-local/index.html` — Arquivo principal
- `SK-Editor-v3-Source (1)/db-local/server.js` — Ponto de entrada do backend
- `SK-Editor-v3-Source (1)/index.html` — Arquivo principal
- `SK-Editor-v3-Source (1)/src/App.tsx` — Componente raiz do frontend
- `SK-Editor-v3-Source (1)/src/main.tsx` — Arquivo principal
- `api-server/src/app.ts` — Ponto de entrada do backend
- `api-server/src/index.ts` — Ponto de entrada do backend
- `api-server/src/routes/index.ts` — Ponto de entrada do backend
- `code-editor/dist-pronto/index.html` — Arquivo principal
- `code-editor/dist-standalone/index.html` — Arquivo principal

---

## GUIA COMPLETO — O QUE CADA PARTE DO PROJETO FAZ

> Esta secao explica, em linguagem simples, o que e para que serve cada pasta e cada arquivo.

### 📁 `api-server/`
> Pasta 'api-server' — agrupamento de arquivos relacionados.

**`build.mjs`** _(159 linhas)_
Arquivo MJS — parte do projeto.

**`package.json`** _(49 linhas)_
Registro de dependencias e scripts do projeto. Aqui ficam os comandos (npm run dev, npm start) e os pacotes instalados.

**`pty_helper.c`** _(138 linhas)_
Arquivo C — parte do projeto.

**`tsconfig.json`** _(18 linhas)_
Configuracao do TypeScript. Diz para o computador como interpretar o codigo .ts e .tsx.

---

### 📁 `code-editor/`
> Pasta 'code-editor' — agrupamento de arquivos relacionados.

**`INSTALAR.md`** _(105 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`SYSTEM_DOCS.md`** _(292 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`components.json`** _(20 linhas)_
Arquivo de dados ou configuracao no formato JSON (chave: valor).

**`index.html`** _(98 linhas)_
Pagina HTML raiz do projeto. E o ponto de entrada que o browser carrega primeiro.

**`package-standalone.json`** _(42 linhas)_
Arquivo de dados ou configuracao no formato JSON (chave: valor).

**`package.json`** _(93 linhas)_
Registro de dependencias e scripts do projeto. Aqui ficam os comandos (npm run dev, npm start) e os pacotes instalados.

**`tsconfig.json`** _(23 linhas)_
Configuracao do TypeScript. Diz para o computador como interpretar o codigo .ts e .tsx.

**`vite.config.standalone.ts`** _(45 linhas)_
Arquivo de CONSTANTES/CONFIGURACAO — valores fixos usados em varios lugares do projeto.

**`vite.config.ts`** _(69 linhas)_
Configuracao do Vite (servidor de desenvolvimento). Define a porta, alias de caminhos e plugins usados.

---

### 📁 `mockup-sandbox/`
> Pasta 'mockup-sandbox' — agrupamento de arquivos relacionados.

**`components.json`** _(22 linhas)_
Arquivo de dados ou configuracao no formato JSON (chave: valor).

**`index.html`** _(32 linhas)_
Pagina HTML raiz do projeto. E o ponto de entrada que o browser carrega primeiro.

**`mockupPreviewPlugin.ts`** _(181 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`package.json`** _(75 linhas)_
Registro de dependencias e scripts do projeto. Aqui ficam os comandos (npm run dev, npm start) e os pacotes instalados.

**`tsconfig.json`** _(17 linhas)_
Configuracao do TypeScript. Diz para o computador como interpretar o codigo .ts e .tsx.

**`vite.config.ts`** _(73 linhas)_
Configuracao do Vite (servidor de desenvolvimento). Define a porta, alias de caminhos e plugins usados.

---

### 📁 `SK-Editor-v3-Source (1)/`
> Pasta 'SK-Editor-v3-Source (1)' — agrupamento de arquivos relacionados.

**`README-SK-EDITOR-V3.md`** _(25 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`index.html`** _(22 linhas)_
Pagina HTML raiz do projeto. E o ponto de entrada que o browser carrega primeiro.

**`package.json`** _(148 linhas)_
Registro de dependencias e scripts do projeto. Aqui ficam os comandos (npm run dev, npm start) e os pacotes instalados.

**`pnpm-workspace.yaml`** _(24 linhas)_
Arquivo YAML — parte do projeto.

**`replit.md`** _(32 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`replit.nix`** _(6 linhas)_
Arquivo NIX — parte do projeto.

**`server.cjs`** _(117 linhas)_
Arquivo CJS — parte do projeto.

**`tsconfig.json`** _(24 linhas)_
Configuracao do TypeScript. Diz para o computador como interpretar o codigo .ts e .tsx.

**`vite.config.ts`** _(89 linhas)_
Configuracao do Vite (servidor de desenvolvimento). Define a porta, alias de caminhos e plugins usados.

---

### 📁 `api-server/.replit-artifact/`
> Pasta '.replit-artifact' — agrupamento de arquivos relacionados.

**`artifact.toml`** _(33 linhas)_
Arquivo TOML — parte do projeto.

---

### 📁 `api-server/src/`
> Codigo-fonte principal do projeto. Nao apague esta pasta.

**`app.ts`** _(35 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`index.ts`** _(288 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

---

### 📁 `code-editor/.replit-artifact/`
> Pasta '.replit-artifact' — agrupamento de arquivos relacionados.

**`artifact.toml`** _(32 linhas)_
Arquivo TOML — parte do projeto.

---

### 📁 `code-editor/dist-pronto/`
> Pasta 'dist-pronto' — agrupamento de arquivos relacionados.

**`MANUAL-SK-CODE-EDITOR.md`** _(344 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`favicon.svg`** _(17 linhas)_
Imagem vetorial (icone ou ilustracao que nao perde qualidade ao ampliar).

**`guia-completo-apk.md`** _(949 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`index.html`** _(111 linhas)_
Pagina HTML raiz do projeto. E o ponto de entrada que o browser carrega primeiro.

**`manifest.json`** _(61 linhas)_
Manifesto do PWA — define nome, icone e configuracoes para instalar o app no celular.

**`manual-dev.md`** _(281 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`sw.js`** _(186 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `code-editor/dist-standalone/`
> Pasta 'dist-standalone' — agrupamento de arquivos relacionados.

**`GERAR-APK.md`** _(45 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`MANUAL-SK-CODE-EDITOR.md`** _(344 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`favicon.svg`** _(17 linhas)_
Imagem vetorial (icone ou ilustracao que nao perde qualidade ao ampliar).

**`guia-completo-apk.md`** _(949 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`index.html`** _(110 linhas)_
Pagina HTML raiz do projeto. E o ponto de entrada que o browser carrega primeiro.

**`manifest.json`** _(61 linhas)_
Manifesto do PWA — define nome, icone e configuracoes para instalar o app no celular.

**`manual-dev.md`** _(281 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`sw.js`** _(186 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `code-editor/public/`
> Arquivos estaticos: imagens, icones, fontes, arquivos publicos.

**`MANUAL-SK-CODE-EDITOR.md`** _(344 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`favicon.svg`** _(17 linhas)_
Imagem vetorial (icone ou ilustracao que nao perde qualidade ao ampliar).

**`guia-completo-apk.md`** _(949 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`manifest.json`** _(61 linhas)_
Manifesto do PWA — define nome, icone e configuracoes para instalar o app no celular.

**`manual-dev.md`** _(281 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`sw.js`** _(186 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `code-editor/src/`
> Codigo-fonte principal do projeto. Nao apague esta pasta.

**`App.tsx`** _(218 linhas)_
Componente RAIZ do frontend — e o pai de todos os outros componentes. Aqui ficam as rotas principais.

**`index.css`** _(221 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

**`main.tsx`** _(6 linhas)_
Ponto de entrada do React — monta o componente App na pagina HTML.

---

### 📁 `mockup-sandbox/.replit-artifact/`
> Pasta '.replit-artifact' — agrupamento de arquivos relacionados.

**`artifact.toml`** _(18 linhas)_
Arquivo TOML — parte do projeto.

---

### 📁 `mockup-sandbox/src/`
> Codigo-fonte principal do projeto. Nao apague esta pasta.

**`App.tsx`** _(147 linhas)_
Componente RAIZ do frontend — e o pai de todos os outros componentes. Aqui ficam as rotas principais.

**`index.css`** _(158 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

**`main.tsx`** _(6 linhas)_
Ponto de entrada do React — monta o componente App na pagina HTML.

---

### 📁 `SK-Editor-v3-Source (1)/db-local/`
> Pasta 'db-local' — agrupamento de arquivos relacionados.

**`COMO-USAR.txt`** _(59 linhas)_
Arquivo TXT — parte do projeto.

**`index.html`** _(494 linhas)_
Pagina HTML raiz do projeto. E o ponto de entrada que o browser carrega primeiro.

**`package.json`** _(13 linhas)_
Registro de dependencias e scripts do projeto. Aqui ficam os comandos (npm run dev, npm start) e os pacotes instalados.

**`server.js`** _(86 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `SK-Editor-v3-Source (1)/electron/`
> Pasta 'electron' — agrupamento de arquivos relacionados.

**`main.cjs`** _(515 linhas)_
Arquivo CJS — parte do projeto.

**`preload.cjs`** _(36 linhas)_
Arquivo CJS — parte do projeto.

---

### 📁 `SK-Editor-v3-Source (1)/public/`
> Arquivos estaticos: imagens, icones, fontes, arquivos publicos.

**`manifest.webmanifest`** _(25 linhas)_
Arquivo WEBMANIFEST — parte do projeto.

---

### 📁 `SK-Editor-v3-Source (1)/src/`
> Codigo-fonte principal do projeto. Nao apague esta pasta.

**`App.tsx`** _(232 linhas)_
Componente RAIZ do frontend — e o pai de todos os outros componentes. Aqui ficam as rotas principais.

**`index.css`** _(186 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

**`main.tsx`** _(6 linhas)_
Ponto de entrada do React — monta o componente App na pagina HTML.

---

### 📁 `api-server/src/lib/`
> Funcoes auxiliares reutilizaveis em varios lugares do projeto.

**`logger.ts`** _(21 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `api-server/src/routes/`
> Definicao das URLs e navegacao do app.

**`ai-chat.ts`** _(66 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`ai-forward.ts`** _(156 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`config.ts`** _(27 linhas)_
Arquivo de CONSTANTES/CONFIGURACAO — valores fixos usados em varios lugares do projeto.

**`db.ts`** _(362 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`drive.ts`** _(108 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`exec.ts`** _(381 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`github.ts`** _(107 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`health.ts`** _(12 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`index.ts`** _(39 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

**`legal-ai.ts`** _(328 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`pages.ts`** _(203 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`proxy.ts`** _(62 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`search.ts`** _(114 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`twa.ts`** _(618 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`upload.ts`** _(77 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`voice.ts`** _(88 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`workspace.ts`** _(318 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `code-editor/.github/workflows/`
> Pasta 'workflows' — agrupamento de arquivos relacionados.

**`build-apk.yml`** _(295 linhas)_
Arquivo YML — parte do projeto.

**`deploy.yml`** _(38 linhas)_
Arquivo YML — parte do projeto.

---

### 📁 `code-editor/dist-pronto/assets/`
> Arquivos estaticos: imagens, icones, fontes, arquivos publicos.

**`index-CszvMv4M.css`** _(2 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

**`vendor-fs-BeamS8bA.js`** _(3 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`vendor-highlight-Bu9o_ty_.js`** _(6 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`vendor-highlight-DOOs4slz.css`** _(2 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

**`vendor-lucide-NZRTcJIq.js`** _(2 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`vendor-markdown-CM6-e2rl.js`** _(30 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`vendor-misc-COW7C1HQ.js`** _(4 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`vendor-monaco-CS9w1txC.js`** _(12 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`vendor-react-D8m3Uig9.js`** _(2 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`vendor-react-dom-CdNyEL3a.js`** _(10 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`vendor-webcontainer-BPoiPq3D.js`** _(3 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`vendor-xterm-CT6HrMBF.js`** _(17 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`vendor-xterm-DDGTF8rc.css`** _(2 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

---

### 📁 `code-editor/dist-standalone/assets/`
> Arquivos estaticos: imagens, icones, fontes, arquivos publicos.

**`index-CcSMgIUa.css`** _(2 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

**`vendor-fs-BeamS8bA.js`** _(3 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`vendor-highlight-Bu9o_ty_.js`** _(6 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`vendor-highlight-DOOs4slz.css`** _(2 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

**`vendor-lucide-BSwgyeoM.js`** _(2 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`vendor-markdown-CM6-e2rl.js`** _(30 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`vendor-misc-COW7C1HQ.js`** _(4 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`vendor-monaco-CS9w1txC.js`** _(12 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`vendor-react-D8m3Uig9.js`** _(2 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`vendor-react-dom-CdNyEL3a.js`** _(10 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`vendor-xterm-CT6HrMBF.js`** _(17 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`vendor-xterm-DDGTF8rc.css`** _(2 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

---

### 📁 `code-editor/src/components/`
> Pecas visuais reutilizaveis da interface (botoes, cards, formularios...).

**`AIChat.tsx`** _(2450 linhas)_
Componente de CHAT/MENSAGENS — interface de conversa em tempo real.

**`APKBuilderPanel.tsx`** _(536 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`AssistenteJuridico.tsx`** _(1286 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`CampoLivre.tsx`** _(869 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`CodeEditor.tsx`** _(154 linhas)_
Componente EDITOR — area de edicao de texto, codigo ou conteudo rico.

**`CombinarApps.tsx`** _(359 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`DriveBackupPanel.tsx`** _(200 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`EditorLayout.tsx`** _(2759 linhas)_
Componente de LAYOUT — define a estrutura visual da pagina (cabecalho, sidebar, rodape). Envolve outros componentes.

**`FileTree.tsx`** _(400 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`GitHubPanel.tsx`** _(969 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`Manual.tsx`** _(1842 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`PackageSearch.tsx`** _(415 linhas)_
Componente de BUSCA — campo e logica para filtrar/encontrar conteudo.

**`Preview.tsx`** _(496 linhas)_
Componente de PAGINA/TELA — representa uma tela completa navegavel no app.

**`QuickPrompt.tsx`** _(274 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`RealTerminal.tsx`** _(724 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`StreamTerminal.tsx`** _(594 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`SystemStatusPanel.tsx`** _(341 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`TemplateSelector.tsx`** _(589 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`Terminal.tsx`** _(1528 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`VSCodeWebPanel.tsx`** _(314 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`VoiceCard.tsx`** _(427 linhas)_
Componente CARD (cartao) — exibe uma informacao em um bloco visual com borda e sombra. Muito usado para listas de items.

**`VoiceMode.tsx`** _(277 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`WebContainerTerminal.tsx`** _(333 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

---

### 📁 `code-editor/src/hooks/`
> Hooks React customizados — logica reutilizavel de estado e efeitos.

**`use-mobile.tsx`** _(20 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`use-toast.ts`** _(192 linhas)_
HOOK React personalizado para gerenciar estado/comportamento de '-toast'.

---

### 📁 `code-editor/src/lib/`
> Funcoes auxiliares reutilizaveis em varios lugares do projeto.

**`ai-service.ts`** _(433 linhas)_
Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.

**`github-service.ts`** _(237 linhas)_
Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.

**`projects.ts`** _(206 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`store.ts`** _(38 linhas)_
STORE de estado — gerencia o estado global do app (dados compartilhados entre telas).

**`templates.ts`** _(4532 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`tts-service.ts`** _(312 linhas)_
Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.

**`utils.ts`** _(7 linhas)_
Funcoes UTILITARIAS — ferramentas reutilizaveis de uso geral no projeto.

**`virtual-fs.ts`** _(200 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`zip-service.ts`** _(217 linhas)_
Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.

---

### 📁 `mockup-sandbox/src/.generated/`
> Pasta '.generated' — agrupamento de arquivos relacionados.

**`mockup-components.ts`** _(6 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `mockup-sandbox/src/hooks/`
> Hooks React customizados — logica reutilizavel de estado e efeitos.

**`use-mobile.tsx`** _(20 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`use-toast.ts`** _(190 linhas)_
HOOK React personalizado para gerenciar estado/comportamento de '-toast'.

---

### 📁 `mockup-sandbox/src/lib/`
> Funcoes auxiliares reutilizaveis em varios lugares do projeto.

**`utils.ts`** _(7 linhas)_
Funcoes UTILITARIAS — ferramentas reutilizaveis de uso geral no projeto.

---

### 📁 `SK-Editor-v3-Source (1)/src/components/`
> Pecas visuais reutilizaveis da interface (botoes, cards, formularios...).

**`AIChat.tsx`** _(2523 linhas)_
Componente de CHAT/MENSAGENS — interface de conversa em tempo real.

**`AssistenteJuridico.tsx`** _(1367 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`BuildPanel.tsx`** _(1248 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`CampoLivre.tsx`** _(763 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`CodeEditor.tsx`** _(154 linhas)_
Componente EDITOR — area de edicao de texto, codigo ou conteudo rico.

**`CombinarApps.tsx`** _(446 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`DatabasePanel.tsx`** _(993 linhas)_
Componente de ABAS — permite alternar entre diferentes secoes de conteudo com clique.

**`DeployPanel.tsx`** _(981 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`DriveBackupPanel.tsx`** _(200 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`EditorLayout.tsx`** _(2844 linhas)_
Componente de LAYOUT — define a estrutura visual da pagina (cabecalho, sidebar, rodape). Envolve outros componentes.

**`ElectronTerminal.tsx`** _(277 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`FileScanner.tsx`** _(282 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`FileTree.tsx`** _(400 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`GitHubPanel.tsx`** _(969 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`HTMLPlayground.tsx`** _(228 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`Manual.tsx`** _(2051 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`PackageSearch.tsx`** _(415 linhas)_
Componente de BUSCA — campo e logica para filtrar/encontrar conteudo.

**`Preview.tsx`** _(496 linhas)_
Componente de PAGINA/TELA — representa uma tela completa navegavel no app.

**`QuickPrompt.tsx`** _(274 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`RealTerminal.tsx`** _(724 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`SKTerminal.tsx`** _(454 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`SiteExtractor.tsx`** _(405 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`StreamTerminal.tsx`** _(594 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`SystemStatusPanel.tsx`** _(351 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`TemplateSelector.tsx`** _(589 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`Terminal.tsx`** _(1511 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`VoiceCard.tsx`** _(427 linhas)_
Componente CARD (cartao) — exibe uma informacao em um bloco visual com borda e sombra. Muito usado para listas de items.

**`VoiceMode.tsx`** _(277 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`WebContainerTerminal.tsx`** _(333 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`XTermConnector.tsx`** _(276 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

---

### 📁 `SK-Editor-v3-Source (1)/src/hooks/`
> Hooks React customizados — logica reutilizavel de estado e efeitos.

**`use-mobile.tsx`** _(20 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`use-toast.ts`** _(192 linhas)_
HOOK React personalizado para gerenciar estado/comportamento de '-toast'.

---

### 📁 `SK-Editor-v3-Source (1)/src/lib/`
> Funcoes auxiliares reutilizaveis em varios lugares do projeto.

**`ai-service.ts`** _(392 linhas)_
Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.

**`github-service.ts`** _(237 linhas)_
Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.

**`idb-storage.ts`** _(72 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`projects.ts`** _(191 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`store.ts`** _(38 linhas)_
STORE de estado — gerencia o estado global do app (dados compartilhados entre telas).

**`templates.ts`** _(4532 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`tts-service.ts`** _(316 linhas)_
Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.

**`utils.ts`** _(7 linhas)_
Funcoes UTILITARIAS — ferramentas reutilizaveis de uso geral no projeto.

**`virtual-fs.ts`** _(200 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`zip-service.ts`** _(217 linhas)_
Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.

---

### 📁 `code-editor/dist-standalone/.github/workflows/`
> Pasta 'workflows' — agrupamento de arquivos relacionados.

**`build-apk.yml`** _(115 linhas)_
Arquivo YML — parte do projeto.

---

### 📁 `code-editor/src/components/ui/`
> Componentes de UI (interface) basicos e genericos.

**`accordion.tsx`** _(56 linhas)_
Componente ACCORDION — secoes que abrem/fecham ao clicar, economizando espaco na tela.

**`alert-dialog.tsx`** _(140 linhas)_
Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').

**`alert.tsx`** _(60 linhas)_
Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').

**`aspect-ratio.tsx`** _(6 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`avatar.tsx`** _(51 linhas)_
Componente AVATAR — foto ou iniciais do usuario em formato circular.

**`badge.tsx`** _(44 linhas)_
Componente BADGE (etiqueta) — pequeno indicador com numero ou status (ex: '3 novas mensagens').

**`breadcrumb.tsx`** _(116 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`button-group.tsx`** _(84 linhas)_
Componente de BOTAO — elemento clicavel reutilizavel com estilo padrao do projeto.

**`button.tsx`** _(66 linhas)_
Componente de BOTAO — elemento clicavel reutilizavel com estilo padrao do projeto.

**`calendar.tsx`** _(214 linhas)_
Componente CALENDARIO/AGENDA — visualizacao e selecao de datas e eventos.

**`card.tsx`** _(77 linhas)_
Componente CARD (cartao) — exibe uma informacao em um bloco visual com borda e sombra. Muito usado para listas de items.

**`carousel.tsx`** _(261 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`chart.tsx`** _(368 linhas)_
Componente de GRAFICO — visualizacao de dados em forma de grafico (barras, linhas, pizza...).

**`checkbox.tsx`** _(29 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`collapsible.tsx`** _(12 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`command.tsx`** _(154 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`context-menu.tsx`** _(199 linhas)_
CONTEXT do React — mecanismo para compartilhar dados entre componentes sem passar por props.

**`dialog.tsx`** _(121 linhas)_
Componente DIALOG — caixa de dialogo que exige resposta do usuario (confirmar, cancelar...).

**`drawer.tsx`** _(117 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`dropdown-menu.tsx`** _(202 linhas)_
Componente de MENU/DROPDOWN — lista de opcoes que aparece ao clicar em um botao.

**`empty.tsx`** _(105 linhas)_
Componente de ESTADO VAZIO — exibido quando nao ha dados para mostrar (ex: 'Nenhum resultado encontrado').

**`field.tsx`** _(245 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`form.tsx`** _(177 linhas)_
Componente de FORMULARIO — campos de entrada de dados (texto, selecao, etc.) com validacao.

**`hover-card.tsx`** _(28 linhas)_
Componente CARD (cartao) — exibe uma informacao em um bloco visual com borda e sombra. Muito usado para listas de items.

**`input-group.tsx`** _(169 linhas)_
Componente de CAMPO DE ENTRADA — elemento de input com estilo personalizado.

**`input-otp.tsx`** _(70 linhas)_
Componente de CAMPO DE ENTRADA — elemento de input com estilo personalizado.

**`input.tsx`** _(23 linhas)_
Componente de CAMPO DE ENTRADA — elemento de input com estilo personalizado.

**`item.tsx`** _(194 linhas)_
Componente de ITEM — representa um elemento individual dentro de uma lista ou colecao.

**`kbd.tsx`** _(29 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`label.tsx`** _(27 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`menubar.tsx`** _(255 linhas)_
Componente de MENU/DROPDOWN — lista de opcoes que aparece ao clicar em um botao.

**`navigation-menu.tsx`** _(129 linhas)_
Componente de NAVEGACAO/CABECALHO — barra superior com logo, menu e links de navegacao.

**`pagination.tsx`** _(118 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`popover.tsx`** _(32 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`progress.tsx`** _(29 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`radio-group.tsx`** _(43 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`resizable.tsx`** _(46 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`scroll-area.tsx`** _(47 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`select.tsx`** _(160 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`separator.tsx`** _(30 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`sheet.tsx`** _(141 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`sidebar.tsx`** _(728 linhas)_
Componente de BARRA LATERAL — menu ou painel que aparece na lateral da tela.

**`skeleton.tsx`** _(16 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`slider.tsx`** _(27 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`sonner.tsx`** _(32 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`spinner.tsx`** _(17 linhas)_
Componente de CARREGAMENTO — animacao visual que aparece enquanto dados estao sendo buscados.

**`switch.tsx`** _(28 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`table.tsx`** _(121 linhas)_
Componente de TABELA — exibe dados em linhas e colunas.

**`tabs.tsx`** _(54 linhas)_
Componente de ABAS — permite alternar entre diferentes secoes de conteudo com clique.

**`textarea.tsx`** _(23 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`toast.tsx`** _(128 linhas)_
Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').

**`toaster.tsx`** _(34 linhas)_
Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').

**`toggle-group.tsx`** _(62 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`toggle.tsx`** _(44 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`tooltip.tsx`** _(33 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

---

### 📁 `mockup-sandbox/src/components/ui/`
> Componentes de UI (interface) basicos e genericos.

**`accordion.tsx`** _(56 linhas)_
Componente ACCORDION — secoes que abrem/fecham ao clicar, economizando espaco na tela.

**`alert-dialog.tsx`** _(140 linhas)_
Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').

**`alert.tsx`** _(60 linhas)_
Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').

**`aspect-ratio.tsx`** _(6 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`avatar.tsx`** _(51 linhas)_
Componente AVATAR — foto ou iniciais do usuario em formato circular.

**`badge.tsx`** _(38 linhas)_
Componente BADGE (etiqueta) — pequeno indicador com numero ou status (ex: '3 novas mensagens').

**`breadcrumb.tsx`** _(116 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`button-group.tsx`** _(84 linhas)_
Componente de BOTAO — elemento clicavel reutilizavel com estilo padrao do projeto.

**`button.tsx`** _(59 linhas)_
Componente de BOTAO — elemento clicavel reutilizavel com estilo padrao do projeto.

**`calendar.tsx`** _(214 linhas)_
Componente CALENDARIO/AGENDA — visualizacao e selecao de datas e eventos.

**`card.tsx`** _(77 linhas)_
Componente CARD (cartao) — exibe uma informacao em um bloco visual com borda e sombra. Muito usado para listas de items.

**`carousel.tsx`** _(261 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`chart.tsx`** _(366 linhas)_
Componente de GRAFICO — visualizacao de dados em forma de grafico (barras, linhas, pizza...).

**`checkbox.tsx`** _(29 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`collapsible.tsx`** _(12 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`command.tsx`** _(154 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`context-menu.tsx`** _(199 linhas)_
CONTEXT do React — mecanismo para compartilhar dados entre componentes sem passar por props.

**`dialog.tsx`** _(121 linhas)_
Componente DIALOG — caixa de dialogo que exige resposta do usuario (confirmar, cancelar...).

**`drawer.tsx`** _(117 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`dropdown-menu.tsx`** _(202 linhas)_
Componente de MENU/DROPDOWN — lista de opcoes que aparece ao clicar em um botao.

**`empty.tsx`** _(105 linhas)_
Componente de ESTADO VAZIO — exibido quando nao ha dados para mostrar (ex: 'Nenhum resultado encontrado').

**`field.tsx`** _(245 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`form.tsx`** _(177 linhas)_
Componente de FORMULARIO — campos de entrada de dados (texto, selecao, etc.) com validacao.

**`hover-card.tsx`** _(28 linhas)_
Componente CARD (cartao) — exibe uma informacao em um bloco visual com borda e sombra. Muito usado para listas de items.

**`input-group.tsx`** _(166 linhas)_
Componente de CAMPO DE ENTRADA — elemento de input com estilo personalizado.

**`input-otp.tsx`** _(70 linhas)_
Componente de CAMPO DE ENTRADA — elemento de input com estilo personalizado.

**`input.tsx`** _(23 linhas)_
Componente de CAMPO DE ENTRADA — elemento de input com estilo personalizado.

**`item.tsx`** _(194 linhas)_
Componente de ITEM — representa um elemento individual dentro de uma lista ou colecao.

**`kbd.tsx`** _(29 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`label.tsx`** _(27 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`menubar.tsx`** _(255 linhas)_
Componente de MENU/DROPDOWN — lista de opcoes que aparece ao clicar em um botao.

**`navigation-menu.tsx`** _(129 linhas)_
Componente de NAVEGACAO/CABECALHO — barra superior com logo, menu e links de navegacao.

**`pagination.tsx`** _(118 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`popover.tsx`** _(32 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`progress.tsx`** _(29 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`radio-group.tsx`** _(43 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`resizable.tsx`** _(46 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`scroll-area.tsx`** _(47 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`select.tsx`** _(160 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`separator.tsx`** _(30 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`sheet.tsx`** _(141 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`sidebar.tsx`** _(715 linhas)_
Componente de BARRA LATERAL — menu ou painel que aparece na lateral da tela.

**`skeleton.tsx`** _(16 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`slider.tsx`** _(27 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`sonner.tsx`** _(32 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`spinner.tsx`** _(17 linhas)_
Componente de CARREGAMENTO — animacao visual que aparece enquanto dados estao sendo buscados.

**`switch.tsx`** _(28 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`table.tsx`** _(121 linhas)_
Componente de TABELA — exibe dados em linhas e colunas.

**`tabs.tsx`** _(54 linhas)_
Componente de ABAS — permite alternar entre diferentes secoes de conteudo com clique.

**`textarea.tsx`** _(23 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`toast.tsx`** _(128 linhas)_
Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').

**`toaster.tsx`** _(34 linhas)_
Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').

**`toggle-group.tsx`** _(62 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`toggle.tsx`** _(44 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`tooltip.tsx`** _(33 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

---

### 📁 `SK-Editor-v3-Source (1)/src/components/ui/`
> Componentes de UI (interface) basicos e genericos.

**`accordion.tsx`** _(56 linhas)_
Componente ACCORDION — secoes que abrem/fecham ao clicar, economizando espaco na tela.

**`alert-dialog.tsx`** _(140 linhas)_
Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').

**`alert.tsx`** _(60 linhas)_
Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').

**`aspect-ratio.tsx`** _(6 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`avatar.tsx`** _(51 linhas)_
Componente AVATAR — foto ou iniciais do usuario em formato circular.

**`badge.tsx`** _(44 linhas)_
Componente BADGE (etiqueta) — pequeno indicador com numero ou status (ex: '3 novas mensagens').

**`breadcrumb.tsx`** _(116 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`button-group.tsx`** _(84 linhas)_
Componente de BOTAO — elemento clicavel reutilizavel com estilo padrao do projeto.

**`button.tsx`** _(66 linhas)_
Componente de BOTAO — elemento clicavel reutilizavel com estilo padrao do projeto.

**`calendar.tsx`** _(214 linhas)_
Componente CALENDARIO/AGENDA — visualizacao e selecao de datas e eventos.

**`card.tsx`** _(77 linhas)_
Componente CARD (cartao) — exibe uma informacao em um bloco visual com borda e sombra. Muito usado para listas de items.

**`carousel.tsx`** _(261 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`chart.tsx`** _(368 linhas)_
Componente de GRAFICO — visualizacao de dados em forma de grafico (barras, linhas, pizza...).

**`checkbox.tsx`** _(29 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`collapsible.tsx`** _(12 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`command.tsx`** _(154 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`context-menu.tsx`** _(199 linhas)_
CONTEXT do React — mecanismo para compartilhar dados entre componentes sem passar por props.

**`dialog.tsx`** _(121 linhas)_
Componente DIALOG — caixa de dialogo que exige resposta do usuario (confirmar, cancelar...).

**`drawer.tsx`** _(117 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`dropdown-menu.tsx`** _(202 linhas)_
Componente de MENU/DROPDOWN — lista de opcoes que aparece ao clicar em um botao.

**`empty.tsx`** _(105 linhas)_
Componente de ESTADO VAZIO — exibido quando nao ha dados para mostrar (ex: 'Nenhum resultado encontrado').

**`field.tsx`** _(245 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`form.tsx`** _(177 linhas)_
Componente de FORMULARIO — campos de entrada de dados (texto, selecao, etc.) com validacao.

**`hover-card.tsx`** _(28 linhas)_
Componente CARD (cartao) — exibe uma informacao em um bloco visual com borda e sombra. Muito usado para listas de items.

**`input-group.tsx`** _(169 linhas)_
Componente de CAMPO DE ENTRADA — elemento de input com estilo personalizado.

**`input-otp.tsx`** _(70 linhas)_
Componente de CAMPO DE ENTRADA — elemento de input com estilo personalizado.

**`input.tsx`** _(23 linhas)_
Componente de CAMPO DE ENTRADA — elemento de input com estilo personalizado.

**`item.tsx`** _(194 linhas)_
Componente de ITEM — representa um elemento individual dentro de uma lista ou colecao.

**`kbd.tsx`** _(29 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`label.tsx`** _(27 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`menubar.tsx`** _(255 linhas)_
Componente de MENU/DROPDOWN — lista de opcoes que aparece ao clicar em um botao.

**`navigation-menu.tsx`** _(129 linhas)_
Componente de NAVEGACAO/CABECALHO — barra superior com logo, menu e links de navegacao.

**`pagination.tsx`** _(118 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`popover.tsx`** _(32 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`progress.tsx`** _(29 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`radio-group.tsx`** _(43 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`resizable.tsx`** _(46 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`scroll-area.tsx`** _(47 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`select.tsx`** _(160 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`separator.tsx`** _(30 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`sheet.tsx`** _(141 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`sidebar.tsx`** _(728 linhas)_
Componente de BARRA LATERAL — menu ou painel que aparece na lateral da tela.

**`skeleton.tsx`** _(16 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`slider.tsx`** _(27 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`sonner.tsx`** _(32 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`spinner.tsx`** _(17 linhas)_
Componente de CARREGAMENTO — animacao visual que aparece enquanto dados estao sendo buscados.

**`switch.tsx`** _(28 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`table.tsx`** _(121 linhas)_
Componente de TABELA — exibe dados em linhas e colunas.

**`tabs.tsx`** _(54 linhas)_
Componente de ABAS — permite alternar entre diferentes secoes de conteudo com clique.

**`textarea.tsx`** _(23 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`toast.tsx`** _(128 linhas)_
Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').

**`toaster.tsx`** _(34 linhas)_
Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').

**`toggle-group.tsx`** _(62 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`toggle.tsx`** _(44 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`tooltip.tsx`** _(33 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

---

## CONTEXTO PARA IA (copie e cole para continuar o projeto)

> Use este bloco para explicar o projeto para qualquer IA ou desenvolvedor:

```
Projeto: sk-editor-source
Tipo: Aplicacao Web Frontend (React)
Stack: React, TypeScript
Arquivos: 361 | Linhas: ~85.805
Rotas API: 106 endpoint(s) detectado(s)
Variaveis de ambiente necessarias: PORT, ALLOWED_ORIGINS, JWT_SECRET, JWT_EXPIRES_IN, DATABASE_URL, GROQ_API_KEY, OPENAI_API_KEY, GEMINI_API_KEY, ANTHROPIC_API_KEY, XAI_API_KEY, OPENROUTER_API_KEY, PERPLEXITY_API_KEY, TELEGRAM_TOKEN, BASE_PATH, REPL_ID, LOG_LEVEL, AI_INTEGRATIONS_OPENAI_BASE_URL, AI_INTEGRATIONS_OPENAI_API_KEY

Estrutura principal:
  SK-Editor-v3-Source (1)/README-SK-EDITOR-V3.md
  SK-Editor-v3-Source (1)/db-local/COMO-USAR.txt
  SK-Editor-v3-Source (1)/db-local/index.html
  SK-Editor-v3-Source (1)/db-local/package.json
  SK-Editor-v3-Source (1)/db-local/server.js
  SK-Editor-v3-Source (1)/electron/main.cjs
  SK-Editor-v3-Source (1)/electron/preload.cjs
  SK-Editor-v3-Source (1)/index.html
  SK-Editor-v3-Source (1)/package.json
  SK-Editor-v3-Source (1)/pnpm-workspace.yaml
  SK-Editor-v3-Source (1)/public/manifest.webmanifest
  SK-Editor-v3-Source (1)/replit.md
  SK-Editor-v3-Source (1)/replit.nix
  SK-Editor-v3-Source (1)/server.cjs
  SK-Editor-v3-Source (1)/src/App.tsx
  SK-Editor-v3-Source (1)/src/components/AIChat.tsx
  SK-Editor-v3-Source (1)/src/components/AssistenteJuridico.tsx
  SK-Editor-v3-Source (1)/src/components/BuildPanel.tsx
  SK-Editor-v3-Source (1)/src/components/CampoLivre.tsx
  SK-Editor-v3-Source (1)/src/components/CodeEditor.tsx
  SK-Editor-v3-Source (1)/src/components/CombinarApps.tsx
  SK-Editor-v3-Source (1)/src/components/DatabasePanel.tsx
  SK-Editor-v3-Source (1)/src/components/DeployPanel.tsx
  SK-Editor-v3-Source (1)/src/components/DriveBackupPanel.tsx
  SK-Editor-v3-Source (1)/src/components/EditorLayout.tsx
  SK-Editor-v3-Source (1)/src/components/ElectronTerminal.tsx
  SK-Editor-v3-Source (1)/src/components/FileScanner.tsx
  SK-Editor-v3-Source (1)/src/components/FileTree.tsx
  SK-Editor-v3-Source (1)/src/components/GitHubPanel.tsx
  SK-Editor-v3-Source (1)/src/components/HTMLPlayground.tsx
  SK-Editor-v3-Source (1)/src/components/Manual.tsx
  SK-Editor-v3-Source (1)/src/components/PackageSearch.tsx
  SK-Editor-v3-Source (1)/src/components/Preview.tsx
  SK-Editor-v3-Source (1)/src/components/QuickPrompt.tsx
  SK-Editor-v3-Source (1)/src/components/RealTerminal.tsx
  SK-Editor-v3-Source (1)/src/components/SKTerminal.tsx
  SK-Editor-v3-Source (1)/src/components/SiteExtractor.tsx
  SK-Editor-v3-Source (1)/src/components/StreamTerminal.tsx
  SK-Editor-v3-Source (1)/src/components/SystemStatusPanel.tsx
  SK-Editor-v3-Source (1)/src/components/TemplateSelector.tsx
  SK-Editor-v3-Source (1)/src/components/Terminal.tsx
  SK-Editor-v3-Source (1)/src/components/VoiceCard.tsx
  SK-Editor-v3-Source (1)/src/components/VoiceMode.tsx
  SK-Editor-v3-Source (1)/src/components/WebContainerTerminal.tsx
  SK-Editor-v3-Source (1)/src/components/XTermConnector.tsx
  SK-Editor-v3-Source (1)/src/components/ui/accordion.tsx
  SK-Editor-v3-Source (1)/src/components/ui/alert-dialog.tsx
  SK-Editor-v3-Source (1)/src/components/ui/alert.tsx
  SK-Editor-v3-Source (1)/src/components/ui/aspect-ratio.tsx
  SK-Editor-v3-Source (1)/src/components/ui/avatar.tsx
  SK-Editor-v3-Source (1)/src/components/ui/badge.tsx
  SK-Editor-v3-Source (1)/src/components/ui/breadcrumb.tsx
  SK-Editor-v3-Source (1)/src/components/ui/button-group.tsx
  SK-Editor-v3-Source (1)/src/components/ui/button.tsx
  SK-Editor-v3-Source (1)/src/components/ui/calendar.tsx
  SK-Editor-v3-Source (1)/src/components/ui/card.tsx
  SK-Editor-v3-Source (1)/src/components/ui/carousel.tsx
  SK-Editor-v3-Source (1)/src/components/ui/chart.tsx
  SK-Editor-v3-Source (1)/src/components/ui/checkbox.tsx
  SK-Editor-v3-Source (1)/src/components/ui/collapsible.tsx
  SK-Editor-v3-Source (1)/src/components/ui/command.tsx
  SK-Editor-v3-Source (1)/src/components/ui/context-menu.tsx
  SK-Editor-v3-Source (1)/src/components/ui/dialog.tsx
  SK-Editor-v3-Source (1)/src/components/ui/drawer.tsx
  SK-Editor-v3-Source (1)/src/components/ui/dropdown-menu.tsx
  SK-Editor-v3-Source (1)/src/components/ui/empty.tsx
  SK-Editor-v3-Source (1)/src/components/ui/field.tsx
  SK-Editor-v3-Source (1)/src/components/ui/form.tsx
  SK-Editor-v3-Source (1)/src/components/ui/hover-card.tsx
  SK-Editor-v3-Source (1)/src/components/ui/input-group.tsx
  SK-Editor-v3-Source (1)/src/components/ui/input-otp.tsx
  SK-Editor-v3-Source (1)/src/components/ui/input.tsx
  SK-Editor-v3-Source (1)/src/components/ui/item.tsx
  SK-Editor-v3-Source (1)/src/components/ui/kbd.tsx
  SK-Editor-v3-Source (1)/src/components/ui/label.tsx
  SK-Editor-v3-Source (1)/src/components/ui/menubar.tsx
  SK-Editor-v3-Source (1)/src/components/ui/navigation-menu.tsx
  SK-Editor-v3-Source (1)/src/components/ui/pagination.tsx
  SK-Editor-v3-Source (1)/src/components/ui/popover.tsx
  SK-Editor-v3-Source (1)/src/components/ui/progress.tsx
  SK-Editor-v3-Source (1)/src/components/ui/radio-group.tsx
  SK-Editor-v3-Source (1)/src/components/ui/resizable.tsx
  SK-Editor-v3-Source (1)/src/components/ui/scroll-area.tsx
  SK-Editor-v3-Source (1)/src/components/ui/select.tsx
  SK-Editor-v3-Source (1)/src/components/ui/separator.tsx
  SK-Editor-v3-Source (1)/src/components/ui/sheet.tsx
  SK-Editor-v3-Source (1)/src/components/ui/sidebar.tsx
  SK-Editor-v3-Source (1)/src/components/ui/skeleton.tsx
  SK-Editor-v3-Source (1)/src/components/ui/slider.tsx
  SK-Editor-v3-Source (1)/src/components/ui/sonner.tsx
  SK-Editor-v3-Source (1)/src/components/ui/spinner.tsx
  SK-Editor-v3-Source (1)/src/components/ui/switch.tsx
  SK-Editor-v3-Source (1)/src/components/ui/table.tsx
  SK-Editor-v3-Source (1)/src/components/ui/tabs.tsx
  SK-Editor-v3-Source (1)/src/components/ui/textarea.tsx
  SK-Editor-v3-Source (1)/src/components/ui/toast.tsx
  SK-Editor-v3-Source (1)/src/components/ui/toaster.tsx
  SK-Editor-v3-Source (1)/src/components/ui/toggle-group.tsx
  SK-Editor-v3-Source (1)/src/components/ui/toggle.tsx
  SK-Editor-v3-Source (1)/src/components/ui/tooltip.tsx
  SK-Editor-v3-Source (1)/src/hooks/use-mobile.tsx
  SK-Editor-v3-Source (1)/src/hooks/use-toast.ts
  SK-Editor-v3-Source (1)/src/index.css
  SK-Editor-v3-Source (1)/src/lib/ai-service.ts
  SK-Editor-v3-Source (1)/src/lib/github-service.ts
  SK-Editor-v3-Source (1)/src/lib/idb-storage.ts
  SK-Editor-v3-Source (1)/src/lib/projects.ts
  SK-Editor-v3-Source (1)/src/lib/store.ts
  SK-Editor-v3-Source (1)/src/lib/templates.ts
  SK-Editor-v3-Source (1)/src/lib/tts-service.ts
  SK-Editor-v3-Source (1)/src/lib/utils.ts
  SK-Editor-v3-Source (1)/src/lib/virtual-fs.ts
  SK-Editor-v3-Source (1)/src/lib/zip-service.ts
  SK-Editor-v3-Source (1)/src/main.tsx
  SK-Editor-v3-Source (1)/tsconfig.json
  SK-Editor-v3-Source (1)/vite.config.ts
  api-server/.replit-artifact/artifact.toml
  api-server/build.mjs
  api-server/package.json
  api-server/pty_helper.c
  api-server/src/app.ts
  api-server/src/index.ts
  api-server/src/lib/logger.ts
  api-server/src/routes/ai-chat.ts
  api-server/src/routes/ai-forward.ts
  api-server/src/routes/config.ts
  api-server/src/routes/db.ts
  api-server/src/routes/drive.ts
  api-server/src/routes/exec.ts
  api-server/src/routes/github.ts
  api-server/src/routes/health.ts
  api-server/src/routes/index.ts
  api-server/src/routes/legal-ai.ts
  api-server/src/routes/pages.ts
  api-server/src/routes/proxy.ts
  api-server/src/routes/search.ts
  api-server/src/routes/twa.ts
  api-server/src/routes/upload.ts
  api-server/src/routes/voice.ts
  api-server/src/routes/workspace.ts
  api-server/tsconfig.json
  code-editor/.github/workflows/build-apk.yml
  code-editor/.github/workflows/deploy.yml
  code-editor/.replit-artifact/artifact.toml
  code-editor/INSTALAR.md
  code-editor/SYSTEM_DOCS.md
  code-editor/components.json
  code-editor/dist-pronto/MANUAL-SK-CODE-EDITOR.md
  code-editor/dist-pronto/assets/index-CszvMv4M.css
  code-editor/dist-pronto/assets/vendor-fs-BeamS8bA.js
  code-editor/dist-pronto/assets/vendor-highlight-Bu9o_ty_.js
  code-editor/dist-pronto/assets/vendor-highlight-DOOs4slz.css
  code-editor/dist-pronto/assets/vendor-lucide-NZRTcJIq.js
  code-editor/dist-pronto/assets/vendor-markdown-CM6-e2rl.js
  code-editor/dist-pronto/assets/vendor-misc-COW7C1HQ.js
  code-editor/dist-pronto/assets/vendor-monaco-CS9w1txC.js
  code-editor/dist-pronto/assets/vendor-react-D8m3Uig9.js
  code-editor/dist-pronto/assets/vendor-react-dom-CdNyEL3a.js
  code-editor/dist-pronto/assets/vendor-webcontainer-BPoiPq3D.js
  code-editor/dist-pronto/assets/vendor-xterm-CT6HrMBF.js
  code-editor/dist-pronto/assets/vendor-xterm-DDGTF8rc.css
  code-editor/dist-pronto/favicon.svg
  code-editor/dist-pronto/guia-completo-apk.md
  code-editor/dist-pronto/index.html
  code-editor/dist-pronto/manifest.json
  code-editor/dist-pronto/manual-dev.md
  code-editor/dist-pronto/sw.js
  code-editor/dist-standalone/.github/workflows/build-apk.yml
  code-editor/dist-standalone/GERAR-APK.md
  code-editor/dist-standalone/MANUAL-SK-CODE-EDITOR.md
  code-editor/dist-standalone/assets/index-CcSMgIUa.css
  code-editor/dist-standalone/assets/vendor-fs-BeamS8bA.js
  code-editor/dist-standalone/assets/vendor-highlight-Bu9o_ty_.js
  code-editor/dist-standalone/assets/vendor-highlight-DOOs4slz.css
  code-editor/dist-standalone/assets/vendor-lucide-BSwgyeoM.js
  code-editor/dist-standalone/assets/vendor-markdown-CM6-e2rl.js
  code-editor/dist-standalone/assets/vendor-misc-COW7C1HQ.js
  code-editor/dist-standalone/assets/vendor-monaco-CS9w1txC.js
  code-editor/dist-standalone/assets/vendor-react-D8m3Uig9.js
  code-editor/dist-standalone/assets/vendor-react-dom-CdNyEL3a.js
  code-editor/dist-standalone/assets/vendor-xterm-CT6HrMBF.js
  code-editor/dist-standalone/assets/vendor-xterm-DDGTF8rc.css
  code-editor/dist-standalone/favicon.svg
  code-editor/dist-standalone/guia-completo-apk.md
  code-editor/dist-standalone/index.html
  code-editor/dist-standalone/manifest.json
  code-editor/dist-standalone/manual-dev.md
  code-editor/dist-standalone/sw.js
  code-editor/index.html
  code-editor/package-standalone.json
  code-editor/package.json
  code-editor/public/MANUAL-SK-CODE-EDITOR.md
  code-editor/public/favicon.svg
  code-editor/public/guia-completo-apk.md
  code-editor/public/manifest.json
  code-editor/public/manual-dev.md
  code-editor/public/sw.js
  code-editor/src/App.tsx
  code-editor/src/components/AIChat.tsx
  code-editor/src/components/APKBuilderPanel.tsx
  code-editor/src/components/AssistenteJuridico.tsx
  code-editor/src/components/CampoLivre.tsx
  code-editor/src/components/CodeEditor.tsx
  code-editor/src/components/CombinarApps.tsx
  code-editor/src/components/DriveBackupPanel.tsx
  code-editor/src/components/EditorLayout.tsx
  code-editor/src/components/FileTree.tsx
  code-editor/src/components/GitHubPanel.tsx
  code-editor/src/components/Manual.tsx
  code-editor/src/components/PackageSearch.tsx
  code-editor/src/components/Preview.tsx
  code-editor/src/components/QuickPrompt.tsx
  code-editor/src/components/RealTerminal.tsx
  code-editor/src/components/StreamTerminal.tsx
  code-editor/src/components/SystemStatusPanel.tsx
  code-editor/src/components/TemplateSelector.tsx
  code-editor/src/components/Terminal.tsx
  code-editor/src/components/VSCodeWebPanel.tsx
  code-editor/src/components/VoiceCard.tsx
  code-editor/src/components/VoiceMode.tsx
  code-editor/src/components/WebContainerTerminal.tsx
  code-editor/src/components/ui/accordion.tsx
  code-editor/src/components/ui/alert-dialog.tsx
  code-editor/src/components/ui/alert.tsx
  code-editor/src/components/ui/aspect-ratio.tsx
  code-editor/src/components/ui/avatar.tsx
  code-editor/src/components/ui/badge.tsx
  code-editor/src/components/ui/breadcrumb.tsx
  code-editor/src/components/ui/button-group.tsx
  code-editor/src/components/ui/button.tsx
  code-editor/src/components/ui/calendar.tsx
  code-editor/src/components/ui/card.tsx
  code-editor/src/components/ui/carousel.tsx
  code-editor/src/components/ui/chart.tsx
  code-editor/src/components/ui/checkbox.tsx
  code-editor/src/components/ui/collapsible.tsx
  code-editor/src/components/ui/command.tsx
  code-editor/src/components/ui/context-menu.tsx
  code-editor/src/components/ui/dialog.tsx
  code-editor/src/components/ui/drawer.tsx
  code-editor/src/components/ui/dropdown-menu.tsx
  code-editor/src/components/ui/empty.tsx
  code-editor/src/components/ui/field.tsx
  code-editor/src/components/ui/form.tsx
  code-editor/src/components/ui/hover-card.tsx
  code-editor/src/components/ui/input-group.tsx
  code-editor/src/components/ui/input-otp.tsx
  code-editor/src/components/ui/input.tsx
  code-editor/src/components/ui/item.tsx
  code-editor/src/components/ui/kbd.tsx
  code-editor/src/components/ui/label.tsx
  code-editor/src/components/ui/menubar.tsx
  code-editor/src/components/ui/navigation-menu.tsx
  code-editor/src/components/ui/pagination.tsx
  code-editor/src/components/ui/popover.tsx
  code-editor/src/components/ui/progress.tsx
  code-editor/src/components/ui/radio-group.tsx
  code-editor/src/components/ui/resizable.tsx
  code-editor/src/components/ui/scroll-area.tsx
  code-editor/src/components/ui/select.tsx
  code-editor/src/components/ui/separator.tsx
  code-editor/src/components/ui/sheet.tsx
  code-editor/src/components/ui/sidebar.tsx
  code-editor/src/components/ui/skeleton.tsx
  code-editor/src/components/ui/slider.tsx
  code-editor/src/components/ui/sonner.tsx
  code-editor/src/components/ui/spinner.tsx
  code-editor/src/components/ui/switch.tsx
  code-editor/src/components/ui/table.tsx
  code-editor/src/components/ui/tabs.tsx
  code-editor/src/components/ui/textarea.tsx
  code-editor/src/components/ui/toast.tsx
  code-editor/src/components/ui/toaster.tsx
  code-editor/src/components/ui/toggle-group.tsx
  code-editor/src/components/ui/toggle.tsx
  code-editor/src/components/ui/tooltip.tsx
  code-editor/src/hooks/use-mobile.tsx
  code-editor/src/hooks/use-toast.ts
  code-editor/src/index.css
  code-editor/src/lib/ai-service.ts
  code-editor/src/lib/github-service.ts
  code-editor/src/lib/projects.ts
  code-editor/src/lib/store.ts
  code-editor/src/lib/templates.ts
  code-editor/src/lib/tts-service.ts
  code-editor/src/lib/utils.ts
  code-editor/src/lib/virtual-fs.ts
  code-editor/src/lib/zip-service.ts
  code-editor/src/main.tsx
  code-editor/tsconfig.json
  code-editor/vite.config.standalone.ts
  code-editor/vite.config.ts
  mockup-sandbox/.replit-artifact/artifact.toml
  mockup-sandbox/components.json
  mockup-sandbox/index.html
  mockup-sandbox/mockupPreviewPlugin.ts
  mockup-sandbox/package.json
  mockup-sandbox/src/.generated/mockup-components.ts
  mockup-sandbox/src/App.tsx
  mockup-sandbox/src/components/ui/accordion.tsx
  mockup-sandbox/src/components/ui/alert-dialog.tsx
  mockup-sandbox/src/components/ui/alert.tsx
  mockup-sandbox/src/components/ui/aspect-ratio.tsx
  mockup-sandbox/src/components/ui/avatar.tsx
  mockup-sandbox/src/components/ui/badge.tsx
  mockup-sandbox/src/components/ui/breadcrumb.tsx
  mockup-sandbox/src/components/ui/button-group.tsx
  mockup-sandbox/src/components/ui/button.tsx
  mockup-sandbox/src/components/ui/calendar.tsx
  mockup-sandbox/src/components/ui/card.tsx
  mockup-sandbox/src/components/ui/carousel.tsx
  mockup-sandbox/src/components/ui/chart.tsx
  mockup-sandbox/src/components/ui/checkbox.tsx
  mockup-sandbox/src/components/ui/collapsible.tsx
  mockup-sandbox/src/components/ui/command.tsx
  mockup-sandbox/src/components/ui/context-menu.tsx
  mockup-sandbox/src/components/ui/dialog.tsx
  mockup-sandbox/src/components/ui/drawer.tsx
  mockup-sandbox/src/components/ui/dropdown-menu.tsx
  mockup-sandbox/src/components/ui/empty.tsx
  mockup-sandbox/src/components/ui/field.tsx
  mockup-sandbox/src/components/ui/form.tsx
  mockup-sandbox/src/components/ui/hover-card.tsx
  mockup-sandbox/src/components/ui/input-group.tsx
  mockup-sandbox/src/components/ui/input-otp.tsx
  mockup-sandbox/src/components/ui/input.tsx
  mockup-sandbox/src/components/ui/item.tsx
  mockup-sandbox/src/components/ui/kbd.tsx
  mockup-sandbox/src/components/ui/label.tsx
  mockup-sandbox/src/components/ui/menubar.tsx
  mockup-sandbox/src/components/ui/navigation-menu.tsx
  mockup-sandbox/src/components/ui/pagination.tsx
  mockup-sandbox/src/components/ui/popover.tsx
  mockup-sandbox/src/components/ui/progress.tsx
  mockup-sandbox/src/components/ui/radio-group.tsx
  mockup-sandbox/src/components/ui/resizable.tsx
  mockup-sandbox/src/components/ui/scroll-area.tsx
  mockup-sandbox/src/components/ui/select.tsx
  mockup-sandbox/src/components/ui/separator.tsx
  mockup-sandbox/src/components/ui/sheet.tsx
  mockup-sandbox/src/components/ui/sidebar.tsx
  mockup-sandbox/src/components/ui/skeleton.tsx
  mockup-sandbox/src/components/ui/slider.tsx
  mockup-sandbox/src/components/ui/sonner.tsx
  mockup-sandbox/src/components/ui/spinner.tsx
  mockup-sandbox/src/components/ui/switch.tsx
  mockup-sandbox/src/components/ui/table.tsx
  mockup-sandbox/src/components/ui/tabs.tsx
  mockup-sandbox/src/components/ui/textarea.tsx
  mockup-sandbox/src/components/ui/toast.tsx
  mockup-sandbox/src/components/ui/toaster.tsx
  mockup-sandbox/src/components/ui/toggle-group.tsx
  mockup-sandbox/src/components/ui/toggle.tsx
  mockup-sandbox/src/components/ui/tooltip.tsx
  mockup-sandbox/src/hooks/use-mobile.tsx
  mockup-sandbox/src/hooks/use-toast.ts
  mockup-sandbox/src/index.css
  mockup-sandbox/src/lib/utils.ts
  mockup-sandbox/src/main.tsx
  mockup-sandbox/tsconfig.json
  mockup-sandbox/vite.config.ts
```

---

*Plano gerado pelo SK Code Editor — 12/07/2026, 20:29:32*