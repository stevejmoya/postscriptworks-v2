import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import pngToIco from 'png-to-ico';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure exports directory exists
const exportsDir = path.join(__dirname, 'exports');
if (!fs.existsSync(exportsDir)) {
  fs.mkdirSync(exportsDir, { recursive: true });
}

async function generateAssets() {
  console.log('🎨 Generating Postscriptworks brand assets...\n');
  
  // Paths to source SVGs
  const srcDir = path.join(__dirname, 'src');
  const logomarkPath = path.join(srcDir, 'postscriptworks-mark.master.svg');
  const logoPath = path.join(srcDir, 'postscriptworks-logo.master.svg');
  const monoBlackPath = path.join(srcDir, 'postscriptworks-logo.mono-black.svg');
  const monoWhitePath = path.join(srcDir, 'postscriptworks-logo.mono-white.svg');

  try {
    // Generate logomark PNGs (square format)
    console.log('📐 Generating logomark PNGs...');
    const logomarkSizes = [128, 192, 256, 512, 1024];
    
    for (const size of logomarkSizes) {
      await sharp(logomarkPath)
        .png({ quality: 100 })
        .resize(size, size)
        .toFile(path.join(exportsDir, `postscriptworks-mark-${size}.png`));
      console.log(`  ✓ postscriptworks-mark-${size}.png`);
    }

    // Generate horizontal logo PNGs
    console.log('\n📏 Generating horizontal logo PNGs...');
    
    // Standard UI sizes
    await sharp(logoPath)
      .png({ quality: 100 })
      .resize(160, 40)
      .toFile(path.join(exportsDir, 'postscriptworks-logo-160x40.png'));
    console.log('  ✓ postscriptworks-logo-160x40.png');

    await sharp(logoPath)
      .png({ quality: 100 })
      .resize(320, 80)
      .toFile(path.join(exportsDir, 'postscriptworks-logo-320x80.png'));
    console.log('  ✓ postscriptworks-logo-320x80.png');

    await sharp(logoPath)
      .png({ quality: 100 })
      .resize(640, 160)
      .toFile(path.join(exportsDir, 'postscriptworks-logo-640x160.png'));
    console.log('  ✓ postscriptworks-logo-640x160.png');

    // Dark mode variant
    await sharp(monoWhitePath)
      .png({ quality: 100 })
      .resize(320, 80)
      .toFile(path.join(exportsDir, 'postscriptworks-logo-dark-320x80.png'));
    console.log('  ✓ postscriptworks-logo-dark-320x80.png');

    // Generate favicon set
    console.log('\n🌟 Generating favicon set...');
    const faviconSizes = [16, 32, 48, 128];
    
    for (const size of faviconSizes) {
      await sharp(logomarkPath)
        .png({ quality: 100 })
        .resize(size, size)
        .toFile(path.join(exportsDir, `favicon-${size}.png`));
      console.log(`  ✓ favicon-${size}.png`);
    }

    // Generate apple-touch-icon
    await sharp(logomarkPath)
      .png({ quality: 100 })
      .resize(180, 180)
      .toFile(path.join(exportsDir, 'apple-touch-icon.png'));
    console.log('  ✓ apple-touch-icon.png');

    // Generate multi-size ICO file
    console.log('\n💎 Generating favicon.ico...');
    
    // Create individual sizes for ICO
    const icoBuffer16 = await sharp(logomarkPath).png().resize(16, 16).toBuffer();
    const icoBuffer32 = await sharp(logomarkPath).png().resize(32, 32).toBuffer();
    const icoBuffer48 = await sharp(logomarkPath).png().resize(48, 48).toBuffer();
    
    // Create proper multi-size ICO file
    const icoBuffer = await pngToIco([icoBuffer16, icoBuffer32, icoBuffer48]);
    fs.writeFileSync(path.join(exportsDir, 'favicon.ico'), icoBuffer);
    console.log('  ✓ favicon.ico (multi-size ICO: 16, 32, 48)');

    // Generate social media assets
    console.log('\n📱 Generating social media assets...');
    
    // Social icon (square)
    await sharp(logomarkPath)
      .png({ quality: 100 })
      .resize(1080, 1080)
      .toFile(path.join(exportsDir, 'social-icon-1080.png'));
    console.log('  ✓ social-icon-1080.png');

    // Social header (brand ribbon)
    console.log('\n🎯 Creating social header...');
    const socialHeaderSvg = `
      <svg width="1500" height="500" viewBox="0 0 1500 500" xmlns="http://www.w3.org/2000/svg">
        <!-- Off-white background -->
        <rect width="1500" height="500" fill="#F8FAFC"/>
        
        <!-- Logo mark positioned left with safe margins -->
        <g transform="translate(96, 178) scale(0.144)">
          <!-- Soft square background -->
          <rect x="64" y="64" width="896" height="896" rx="179.2" ry="179.2" 
                fill="#F8FAFC" stroke="#E6E8EC" stroke-width="2"/>
          
          <!-- Left quote mark -->
          <path d="M 350 420 C 350 380, 380 350, 420 350 C 460 350, 490 380, 490 420 C 490 460, 460 490, 420 490 L 420 520 C 420 580, 380 620, 320 620 C 280 620, 250 590, 250 550 C 250 510, 280 480, 320 480 C 330 480, 340 482, 350 485 Z" fill="#14B8A6"/>
          
          <!-- Right quote mark -->
          <path d="M 534 420 C 534 380, 564 350, 604 350 C 644 350, 674 380, 674 420 C 674 460, 644 490, 604 490 L 604 520 C 604 580, 564 620, 504 620 C 464 620, 434 590, 434 550 C 434 510, 464 480, 504 480 C 514 480, 524 482, 534 485 Z" fill="#14B8A6"/>
        </g>
        
        <!-- Wordmark positioned to the right -->
        <g transform="translate(300, 210) scale(2.5)" fill="#0F172A">
          <!-- P -->
          <path d="M 0 14 L 0 66 L 6 66 L 6 43 L 16 43 C 24 43, 28 39, 28 31 C 28 23, 24 19, 16 19 L 0 19 Z M 6 24 L 6 38 L 15 38 C 19 38, 22 36, 22 31 C 22 26, 19 24, 15 24 Z"/>
          <!-- o -->
          <path d="M 34 34 C 34 26, 38 22, 46 22 C 54 22, 58 26, 58 34 C 58 42, 54 46, 46 46 C 38 46, 34 42, 34 34 Z M 40 34 C 40 39, 42 41, 46 41 C 50 41, 52 39, 52 34 C 52 29, 50 27, 46 27 C 42 27, 40 29, 40 34 Z"/>
          <!-- s -->
          <path d="M 64 39 C 64 43, 67 46, 72 46 C 77 46, 80 43, 80 39 C 80 36, 78 34, 75 33 L 69 31 C 65 30, 62 27, 62 23 C 62 18, 66 15, 72 15 C 78 15, 82 18, 82 23 L 76 23 C 76 20, 74 19, 72 19 C 70 19, 68 20, 68 23 C 68 25, 70 26, 73 27 L 79 29 C 83 30, 86 33, 86 39 C 86 44, 82 47, 72 47 C 66 47, 62 44, 62 39 Z"/>
          <!-- t -->
          <path d="M 92 14 L 92 22 L 102 22 L 102 27 L 92 27 L 92 40 C 92 42, 93 43, 95 43 L 102 43 L 102 45 L 95 45 C 90 45, 86 42, 86 37 L 86 27 L 82 27 L 82 22 L 86 22 L 86 14 Z"/>
          <!-- s -->
          <path d="M 108 39 C 108 43, 111 46, 116 46 C 121 46, 124 43, 124 39 C 124 36, 122 34, 119 33 L 113 31 C 109 30, 106 27, 106 23 C 106 18, 110 15, 116 15 C 122 15, 126 18, 126 23 L 120 23 C 120 20, 118 19, 116 19 C 114 19, 112 20, 112 23 C 112 25, 114 26, 117 27 L 123 29 C 127 30, 130 33, 130 39 C 130 44, 126 47, 116 47 C 110 47, 106 44, 106 39 Z"/>
          <!-- c -->
          <path d="M 136 34 C 136 26, 140 22, 148 22 C 154 22, 158 25, 158 30 L 152 30 C 152 28, 150 27, 148 27 C 144 27, 142 29, 142 34 C 142 39, 144 41, 148 41 C 150 41, 152 40, 152 38 L 158 38 C 158 43, 154 46, 148 46 C 140 46, 136 42, 136 34 Z"/>
          <!-- r -->
          <path d="M 164 22 L 170 22 L 170 26 C 172 23, 175 22, 178 22 L 178 28 C 177 28, 176 28, 175 28 C 172 28, 170 30, 170 33 L 170 45 L 164 45 Z"/>
          <!-- i -->
          <path d="M 184 14 L 190 14 L 190 19 L 184 19 Z M 184 22 L 190 22 L 190 45 L 184 45 Z"/>
          <!-- p -->
          <path d="M 196 22 L 202 22 L 202 26 C 204 23, 207 22, 211 22 C 218 22, 222 26, 222 34 C 222 42, 218 46, 211 46 C 207 46, 204 45, 202 42 L 202 52 L 196 52 Z M 202 34 C 202 29, 204 27, 208 27 C 212 27, 216 29, 216 34 C 216 39, 212 41, 208 41 C 204 41, 202 39, 202 34 Z"/>
          <!-- t -->
          <path d="M 228 14 L 234 14 L 234 22 L 244 22 L 244 27 L 234 27 L 234 40 C 234 42, 235 43, 237 43 L 244 43 L 244 45 L 237 45 C 232 45, 228 42, 228 37 L 228 27 L 224 27 L 224 22 L 228 22 Z"/>
          <!-- w -->
          <path d="M 250 22 L 256 22 L 260 38 L 264 22 L 270 22 L 274 38 L 278 22 L 284 22 L 278 45 L 270 45 L 266 29 L 262 45 L 254 45 Z"/>
          <!-- o -->
          <path d="M 290 34 C 290 26, 294 22, 302 22 C 310 22, 314 26, 314 34 C 314 42, 310 46, 302 46 C 294 46, 290 42, 290 34 Z M 296 34 C 296 39, 298 41, 302 41 C 306 41, 308 39, 308 34 C 308 29, 306 27, 302 27 C 298 27, 296 29, 296 34 Z"/>
          <!-- r -->
          <path d="M 320 22 L 326 22 L 326 26 C 328 23, 331 22, 334 22 L 334 28 C 333 28, 332 28, 331 28 C 328 28, 326 30, 326 33 L 326 45 L 320 45 Z"/>
          <!-- k -->
          <path d="M 340 14 L 346 14 L 346 31 L 354 22 L 362 22 L 352 33 L 362 45 L 354 45 L 348 37 L 346 39 L 346 45 L 340 45 Z"/>
          <!-- s -->
          <path d="M 368 39 C 368 43, 371 46, 376 46 C 381 46, 384 43, 384 39 C 384 36, 382 34, 379 33 L 373 31 C 369 30, 366 27, 366 23 C 366 18, 370 15, 376 15 C 382 15, 386 18, 386 23 L 380 23 C 380 20, 378 19, 376 19 C 374 19, 372 20, 372 23 C 372 25, 374 26, 377 27 L 383 29 C 387 30, 390 33, 390 39 C 390 44, 386 47, 376 47 C 370 47, 366 44, 366 39 Z"/>
        </g>
      </svg>
    `;
    
    await sharp(Buffer.from(socialHeaderSvg))
      .png({ quality: 100 })
      .resize(1500, 500)
      .toFile(path.join(exportsDir, 'social-header-1500x500.png'));
    console.log('  ✓ social-header-1500x500.png');

    console.log('\n✅ All brand assets generated successfully!');
    console.log('\n📊 Generated files:');
    
    // List all generated files with their sizes
    const files = fs.readdirSync(exportsDir);
    files.sort().forEach(file => {
      const filePath = path.join(exportsDir, file);
      const stats = fs.statSync(filePath);
      const sizeKB = Math.round(stats.size / 1024);
      console.log(`  ${file} (${sizeKB}KB)`);
    });
    
    console.log(`\n🎉 Generated ${files.length} brand assets in /brand/exports/`);

  } catch (error) {
    console.error('❌ Error generating assets:', error);
    process.exit(1);
  }
}

// Run the generation
generateAssets();