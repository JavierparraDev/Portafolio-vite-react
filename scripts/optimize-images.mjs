import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

const PUBLIC = 'public';
const SOURCES = 'scripts/sources';

const jobs = [
  {
    input: `${SOURCES}/javier-parra.png`,
    output: `${PUBLIC}/javier-parra.webp`,
    width: 256,
    height: 256,
    fit: 'cover',
    opts: { quality: 82 }
  },
  {
    input: `${SOURCES}/logo.png`,
    output: `${PUBLIC}/favicon.png`,
    width: 96,
    height: 96,
    fit: 'contain',
    opts: { quality: 85 }
  },
  {
    input: `${SOURCES}/logo.png`,
    output: `${PUBLIC}/icon-192.png`,
    width: 192,
    height: 192,
    fit: 'contain',
    opts: { quality: 90 }
  },
  {
    input: `${SOURCES}/logo.png`,
    output: `${PUBLIC}/icon-512.png`,
    width: 512,
    height: 512,
    fit: 'contain',
    opts: { quality: 90 }
  }
];

const ogImage = async () => {
  const width = 1200;
  const height = 630;
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#1e3a8a"/>
          <stop offset="100%" stop-color="#0891b2"/>
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#bg)"/>
      <rect width="${width}" height="${height}" fill="url(#bg)" opacity="0.92"/>
      <text x="60" y="300" font-family="monospace" font-size="34" fill="#7dd3fc">// javier@portfolio ~</text>
      <text x="60" y="380" font-family="sans-serif" font-weight="700" font-size="72" fill="#ffffff">Javier Parra</text>
      <text x="60" y="452" font-family="sans-serif" font-size="36" fill="#e0f2fe">Backend &amp; Full Stack Developer</text>
    </svg>`;

  const base = await sharp(Buffer.from(svg)).png().toBuffer();
  const avatar = await sharp(`${SOURCES}/javier-parra.png`)
    .resize(220, 220, { fit: 'cover' })
    .composite([
      {
        input: Buffer.from(
          `<svg width="220" height="220" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="110" r="110" fill="none"/></svg>`
        ),
        blend: 'dest-in'
      }
    ])
    .png()
    .toBuffer();

  await sharp(base)
    .composite([
      {
        input: avatar,
        left: width - 300,
        top: 200
      }
    ])
    .png({ compressionLevel: 9 })
    .toFile(`${PUBLIC}/og-image.png`);
};

const run = async () => {
  await mkdir(PUBLIC, { recursive: true });
  for (const job of jobs) {
    await sharp(job.input)
      .resize(job.width, job.height, { fit: job.fit, position: 'centre' })
      [job.output.endsWith('.webp') ? 'webp' : 'png'](job.opts)
      .toFile(job.output);
    console.log(`✓ ${job.output}`);
  }
  await ogImage();
  console.log('✓ og-image.png');
};

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
