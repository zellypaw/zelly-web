import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';

const IMG_ROOT = './public/images';

async function processDirectory(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    
    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else if (entry.name.match(/\.(png|jpg|jpeg)$/i)) {
      const name = path.parse(entry.name).name;
      const outputPath = path.join(directory, `${name}.webp`);

      console.log(`Optimizing: ${fullPath}...`);
      await sharp(fullPath)
        .webp({ quality: 80 })
        .resize(1200, null, { withoutEnlargement: true })
        .toFile(outputPath);
      
      console.log(`✅ Converted ${fullPath} to webp`);
    }
  }
}

async function optimize() {
  try {
    await processDirectory(IMG_ROOT);
    console.log('✨ Image optimization complete!');
  } catch (error) {
    console.error('❌ Error during optimization:', error);
    process.exit(1);
  }
}

optimize();
