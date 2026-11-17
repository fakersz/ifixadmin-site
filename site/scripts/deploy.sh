#!/usr/bin/env bash
# Deploy do site iFix Admin: lint -> build (export estático) -> sincroniza para public/
# Não altera Nginx, Certbot, DNS ou firewall. Faz backup de public/ antes de sobrescrever.
set -euo pipefail

SITE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PROJECT_DIR="$(dirname "$SITE_DIR")"
PUBLIC_DIR="$PROJECT_DIR/public"
BACKUP_DIR="$PROJECT_DIR/backups"
TIMESTAMP="$(date +%Y%m%d-%H%M%S)"

cd "$SITE_DIR"

echo "==> [1/5] Lint"
npm run lint

echo "==> [2/5] Build (next build --output export)"
npm run build

echo "==> [3/5] Verificando saída da build (site/out)"
if [ ! -f "$SITE_DIR/out/index.html" ]; then
  echo "Erro: site/out/index.html não encontrado. Abortando deploy." >&2
  exit 1
fi

echo "==> [4/5] Backup de public/ antes de sobrescrever"
mkdir -p "$BACKUP_DIR"
if [ -d "$PUBLIC_DIR" ] && [ -n "$(ls -A "$PUBLIC_DIR" 2>/dev/null)" ]; then
  tar -czf "$BACKUP_DIR/public-$TIMESTAMP.tar.gz" -C "$PROJECT_DIR" public
  echo "Backup salvo em: $BACKUP_DIR/public-$TIMESTAMP.tar.gz"
else
  echo "public/ vazia ou inexistente, nada para copiar no backup."
fi

echo "==> [5/5] Sincronizando site/out/ -> public/"
mkdir -p "$PUBLIC_DIR"
rsync -a --delete "$SITE_DIR/out/" "$PUBLIC_DIR/"
find "$PUBLIC_DIR" -type d -exec chmod 755 {} +
find "$PUBLIC_DIR" -type f -exec chmod 644 {} +

echo ""
echo "Deploy concluído. O Nginx já serve public/ diretamente, nenhum reload é necessário."
echo "Confira em: https://ifixadmin.site"
