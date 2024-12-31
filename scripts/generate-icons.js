const sharp = require('sharp');
const path = require('path');

async function generateIcons() {
  // Create a colorful background with text
  const width = 1024;
  const height = 1024;
  
  // Main icon SVG
  const mainIconSvg = `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FF6B6B"/>
          <stop offset="50%" stop-color="#4ECDC4"/>
          <stop offset="100%" stop-color="#45B7D1"/>
        </linearGradient>
        <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FFD93D"/>
          <stop offset="100%" stop-color="#FF9A3D"/>
        </linearGradient>
      </defs>
      
      <!-- Background -->
      <circle cx="${width/2}" cy="${height/2}" r="${width/2}" fill="url(#bgGradient)"/>
      
      <!-- Decorative circle -->
      <circle cx="${width/2}" cy="${height/2}" r="${width/2 - 62}" 
        fill="none" stroke="#ffffff" stroke-width="20" opacity="0.3"/>
      
      <!-- Playful arc -->
      <path d="M200,${height/2} A312,312 0 1,1 824,${height/2}"
        fill="none" stroke="#ffffff" stroke-width="25" 
        stroke-linecap="round" opacity="0.4"/>
      
      <!-- Stars -->
      ${[45, 135, 225, 315].map(angle => {
        const x = width/2 + 380 * Math.cos(angle * Math.PI / 180);
        const y = height/2 + 380 * Math.sin(angle * Math.PI / 180);
        return `
          <path d="M${x},${y-20} L${x+10},${y-5} L${x+25},${y-10} L${x+15},${y+5} 
            L${x+20},${y+20} L${x},${y+10} L${x-20},${y+20} L${x-15},${y+5} 
            L${x-25},${y-10} L${x-10},${y-5} Z"
            fill="#FFD93D" opacity="0.9"/>
        `;
      }).join('')}
      
      <!-- Text -->
      <text x="${width/2}" y="460" font-size="140" font-weight="bold" 
        fill="url(#textGradient)" text-anchor="middle" font-family="Arial-BoldMT">
        GAME
      </text>
      <text x="${width/2}" y="600" font-size="160" font-weight="bold" 
        fill="#ffffff" text-anchor="middle" font-family="Arial-BoldMT">
        BUDDY
      </text>
    </svg>
  `;

  // Splash screen SVG with lilac theme
  const splashSvg = `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="splashGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#E0B0FF"/>
          <stop offset="50%" stop-color="#C8A2C8"/>
          <stop offset="100%" stop-color="#967BB6"/>
        </linearGradient>
        <linearGradient id="splashTextGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FFFFFF"/>
          <stop offset="100%" stop-color="#F8F0FF"/>
        </linearGradient>
      </defs>
      
      <!-- Background -->
      <rect width="${width}" height="${height}" fill="url(#splashGradient)"/>
      
      <!-- Decorative elements -->
      <circle cx="${width/2}" cy="${height/2}" r="${width/2 - 100}" 
        fill="none" stroke="#ffffff" stroke-width="3" opacity="0.2"/>
      <circle cx="${width/2}" cy="${height/2}" r="${width/2 - 150}" 
        fill="none" stroke="#ffffff" stroke-width="2" opacity="0.15"/>
      
      <!-- Stars -->
      ${[0, 90, 180, 270].map(angle => {
        const x = width/2 + 300 * Math.cos(angle * Math.PI / 180);
        const y = height/2 + 300 * Math.sin(angle * Math.PI / 180);
        return `
          <circle cx="${x}" cy="${y}" r="8" fill="#ffffff" opacity="0.6"/>
        `;
      }).join('')}
      
      <!-- Text -->
      <text x="${width/2}" y="460" font-size="140" font-weight="bold" 
        fill="url(#splashTextGradient)" text-anchor="middle" font-family="Arial-BoldMT">
        GAME
      </text>
      <text x="${width/2}" y="600" font-size="160" font-weight="bold" 
        fill="url(#splashTextGradient)" text-anchor="middle" font-family="Arial-BoldMT">
        BUDDY
      </text>
    </svg>
  `;

  // Generate main icon files
  const iconFiles = {
    'icon.png': mainIconSvg,
    'adaptive-icon.png': mainIconSvg,
    'favicon.png': mainIconSvg
  };

  for (const [filename, svg] of Object.entries(iconFiles)) {
    const size = filename === 'favicon.png' ? 48 : 1024;
    await sharp(Buffer.from(svg))
      .resize(size, size)
      .toFile(path.join('assets', filename));
    
    console.log(`Generated ${filename} (${size}x${size})`);
  }

  // Generate splash screen
  await sharp(Buffer.from(splashSvg))
    .resize(1024, 1024)
    .toFile(path.join('assets', 'splash.png'));
  
  console.log('Generated splash.png (1024x1024)');
}

generateIcons().catch(console.error);
