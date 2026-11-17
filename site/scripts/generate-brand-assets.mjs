// Gera versões otimizadas/redimensionadas da logo a partir dos arquivos-fonte
// em public/brand/. Rodar com: node scripts/generate-brand-assets.mjs
import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const iconSource = path.join(root, "public/brand/icon-transparent.png");
const logoFullSource = path.join(root, "public/brand/logo-full.png");

async function run() {
  // Ícone (fundo transparente) para header/footer, em 2x para telas retina.
  await sharp(iconSource)
    .resize(96, 96)
    .png({ quality: 90, compressionLevel: 9 })
    .toFile(path.join(root, "public/brand/icon-96.png"));

  // Favicon (convenção do App Router: src/app/icon.png)
  await sharp(iconSource)
    .resize(256, 256)
    .png({ quality: 90, compressionLevel: 9 })
    .toFile(path.join(root, "src/app/icon.png"));

  // Apple touch icon (convenção do App Router: src/app/apple-icon.png)
  await sharp(iconSource)
    .resize(180, 180)
    .flatten({ background: "#ffffff" })
    .png({ quality: 90, compressionLevel: 9 })
    .toFile(path.join(root, "src/app/apple-icon.png"));

  // Imagem de Open Graph (1200x630), logo completa centralizada em fundo branco.
  const logoResized = await sharp(logoFullSource)
    .resize(620, 620, { fit: "inside" })
    .toBuffer();

  await sharp({
    create: {
      width: 1200,
      height: 630,
      channels: 3,
      background: "#ffffff",
    },
  })
    .composite([{ input: logoResized, gravity: "center" }])
    .png({ quality: 90, compressionLevel: 9 })
    .toFile(path.join(root, "src/app/opengraph-image.png"));

  console.log("Assets de marca gerados com sucesso.");
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
