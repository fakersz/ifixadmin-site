# iFix Admin — site

Site institucional da iFix Admin (`ifixadmin.site`), construído em Next.js (App Router) + TypeScript + Tailwind CSS, exportado como site estático.

## Arquitetura de deploy

O Nginx do servidor já está configurado e **não deve ser alterado**. Ele serve arquivos estáticos diretamente da pasta:

```
/var/www/<site>/public/
```

Este projeto (`site/`) é a fonte do código. O build gera um export estático em `site/out/`, que é sincronizado para `../public/` — a pasta que o Nginx já serve. Não há processo Node/PM2 em produção: é tudo HTML/CSS/JS estático.

## Comandos

```bash
npm run dev      # ambiente de desenvolvimento (http://localhost:3000)
npm run lint     # eslint
npm run build    # gera o export estático em site/out/
npm run preview  # serve site/out/ localmente para conferência
npm run deploy   # lint + build + backup de public/ + sincroniza out/ -> ../public/
```

Para publicar qualquer alteração no site em produção, rode:

```bash
npm run deploy
```

Isso faz backup de `../public/` (em `../backups/`) antes de sobrescrever, builda o projeto e sincroniza o resultado. Não reinicia nem recarrega o Nginx — não é necessário, pois o conteúdo é servido diretamente do disco.

## Estrutura

```
src/
  app/            rotas (App Router), layout raiz, robots/sitemap, ícone
  components/
    layout/       Header, Footer
    sections/     blocos da home (Hero, Services, Faq, ContactForm, ...)
    ui/           primitivos reutilizáveis (Button, Container, Accordion, Reveal, ...)
  config/         textos, navegação, serviços, FAQ e dados de contato centralizados
  lib/            utilitários
```

## Preparado para crescer

- Novas páginas (serviços, orçamento, chamados) podem ser adicionadas em `src/app/<rota>/page.tsx`.
- Dados de contato reais (telefone, e-mail, região) entram em `src/config/site.ts` (`contactInfo`) — enquanto estiverem `null`, os elementos correspondentes ficam ocultos no rodapé/formulário.
- Uma área administrativa e integração com PostgreSQL exigirão funcionalidades de servidor (rotas dinâmicas, API) que o modo `output: "export"` não suporta. Quando isso for necessário, será preciso reavaliar o modo de build (SSR) e, nesse momento, o Nginx precisará de um reverse proxy — uma mudança de infraestrutura que deve ser discutida e aprovada separadamente.
