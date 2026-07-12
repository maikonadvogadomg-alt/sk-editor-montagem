# Como gerar o APK do SK Code Editor

## Método mais fácil: GitHub Actions (automático, sem instalar nada)

### Passo 1 — Criar conta no GitHub
Se não tiver: https://github.com/signup (grátis)

### Passo 2 — Criar repositório novo
1. Abra https://github.com/new
2. Nome: `sk-code-editor`
3. Marque **Public**
4. Clique **Create repository**

### Passo 3 — Fazer upload dos arquivos
1. Dentro do repositório clique em **uploading an existing file**
2. Arraste TODOS os arquivos desta pasta (incluindo a pasta `.github`)
3. Clique **Commit changes**

### Passo 4 — Ativar GitHub Pages
1. Vá em **Settings** → **Pages**
2. Em "Source" escolha **GitHub Actions**
3. Salve

### Passo 5 — Aguardar o APK
1. Vá na aba **Actions** do repositório
2. Aguarde o workflow "Gerar APK Android" terminar (~5 minutos)
3. Clique no workflow concluído
4. Lá embaixo em **Artifacts** clique em **SK-Code-Editor-APK**
5. Baixe e instale no celular!

> No celular Android: Configurações → Segurança → Fontes desconhecidas → Permitir

---

## Método alternativo: PWABuilder (mais rápido, 1 minuto)

Após publicar no GitHub Pages (passo 4 acima):

1. Abra https://www.pwabuilder.com
2. Cole a URL do seu GitHub Pages: `https://SEU-USUARIO.github.io/sk-code-editor/`
3. Clique **Start**
4. Clique **Package for stores** → **Android**
5. Clique **Generate Package**
6. Baixe o APK e instale no celular
