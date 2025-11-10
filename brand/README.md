# Postscriptworks Brand Kit

A comprehensive logo kit and brand system for Postscriptworks, featuring vector masters, raster exports, favicons, social media assets, and Gmail-friendly banners.

## Brand Guidelines

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| **Ink** (Primary Text) | `#0F172A` | Primary text, monochrome logos |
| **Teal** (Quote Marks) | `#14B8A6` | Quote marks, brand accent |
| **Mint** (Alt Accent) | `#10B981` | Secondary accent, dark mode |
| **Off-white** (Tile Background) | `#F8FAFC` | Backgrounds, social headers |
| **Slate** (Subtle Stroke) | `#E6E8EC` | Borders, subtle details |

### Typography

- **Primary Font**: Inter (or system UI fallback)
- **Weight**: 600 (Semi-bold) for wordmark
- **Tracking**: Slightly tight spacing for professional look
- **SVG Text**: All text is outlined (no font dependencies)

### Logo System

#### Logomark (Quote Mark Icon)
- **Format**: Soft square with 20% rounded corners
- **Symbol**: Two stylized quote marks in Teal (#14B8A6)
- **Background**: Off-white (#F8FAFC) with subtle Slate stroke (#E6E8EC)
- **Minimum Size**: 32px × 32px
- **Usage**: Favicons, social icons, app icons

#### Wordmark (Horizontal Lockup)
- **Format**: Logomark + "Postscriptworks" text
- **Spacing**: 16px gap between mark and wordmark
- **Alignment**: Baseline-aligned for consistency
- **Minimum Size**: 120px wide on web
- **Usage**: Headers, signatures, business cards, websites

### Clear Space Rules

- **Minimum Clear Space**: Height of one quote mark in all directions
- **Safe Area**: Never place other elements within the clear space
- **Background Contrast**: Ensure adequate contrast on all backgrounds

### Usage Guidelines

#### ✅ Correct Usage
- Use provided assets without modification
- Maintain proper clear space
- Use appropriate variant for background color
- Scale proportionally only

#### ❌ Incorrect Usage
- No skewing or distortion
- No drop shadows or effects
- No recoloring outside brand palette
- No separating logomark from wordmark in horizontal lockup
- No placing on low-contrast backgrounds

## Asset Directory

### Source Files (`/src/`)
| File | Description |
|------|-------------|
| `postscriptworks-mark.master.svg` | Square logomark (1024×1024) |
| `postscriptworks-logo.master.svg` | Horizontal lockup (640×80) |
| `postscriptworks-logo.mono-black.svg` | Black monochrome version |
| `postscriptworks-logo.mono-white.svg` | White monochrome version |

### Exported Assets (`/exports/`)

#### Logomark PNGs (Square)
- `postscriptworks-mark-128.png` - Small UI elements
- `postscriptworks-mark-192.png` - Web manifest icon
- `postscriptworks-mark-256.png` - Medium displays
- `postscriptworks-mark-512.png` - Web manifest icon, high-DPI
- `postscriptworks-mark-1024.png` - Print, large displays

#### Horizontal Logo PNGs
- `postscriptworks-logo-160x40.png` - Email signatures, small UI
- `postscriptworks-logo-320x80.png` - Standard web headers, Gmail
- `postscriptworks-logo-640x160.png` - High-DPI displays (@2x)
- `postscriptworks-logo-dark-320x80.png` - Dark backgrounds

#### Favicon Set
- `favicon-16.png`, `favicon-32.png`, `favicon-48.png`, `favicon-128.png`
- `favicon.ico` - Multi-size ICO file
- `apple-touch-icon.png` - iOS home screen (180×180)

#### Social Media Assets
- `social-icon-1080.png` - Profile pictures, square posts (1080×1080)
- `social-header-1500x500.png` - Twitter headers, LinkedIn banners

### Configuration
- `site.webmanifest` - Progressive Web App manifest

## Usage by Platform

### Website/Web App
```html
<!-- Standard logo -->
<img src="/brand/exports/postscriptworks-logo-320x80.png" alt="Postscriptworks" />

<!-- High-DPI logo -->
<img src="/brand/exports/postscriptworks-logo-320x80.png" 
     srcset="/brand/exports/postscriptworks-logo-640x160.png 2x" 
     alt="Postscriptworks" />

<!-- Dark mode logo -->
<img src="/brand/exports/postscriptworks-logo-dark-320x80.png" alt="Postscriptworks" />
```

### Favicon Implementation
```html
<!-- Standard favicons -->
<link rel="icon" type="image/x-icon" href="/brand/exports/favicon.ico">
<link rel="icon" type="image/png" sizes="32x32" href="/brand/exports/favicon-32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/brand/exports/favicon-16.png">

<!-- Apple touch icon -->
<link rel="apple-touch-icon" sizes="180x180" href="/brand/exports/apple-touch-icon.png">

<!-- Web manifest -->
<link rel="manifest" href="/brand/site.webmanifest">
```

### Email Signatures (Gmail, Outlook)
```html
<!-- Gmail-optimized -->
<img src="/brand/exports/postscriptworks-logo-160x40.png" 
     alt="Postscriptworks" 
     style="display: block; height: 40px;" />

<!-- Standard email clients -->
<img src="/brand/exports/postscriptworks-logo-320x80.png" 
     alt="Postscriptworks" 
     width="160" height="40" 
     style="display: block;" />
```

### Social Media
- **Profile Pictures**: Use `social-icon-1080.png`
- **Header/Cover Images**: Use `social-header-1500x500.png`
- **Twitter**: 1500×500 header works perfectly
- **LinkedIn**: 1500×500 banner (may crop slightly on mobile)
- **Facebook**: Use square `social-icon-1080.png` for profile

## Technical Specifications

### File Formats
- **Masters**: SVG (vector, infinitely scalable)
- **Exports**: PNG (lossless, transparent backgrounds)
- **Favicon**: ICO (multi-size, legacy browser support)

### Color Profiles
- **Color Space**: sRGB
- **Bit Depth**: 8-bit per channel
- **Compression**: PNG with optimal compression
- **Transparency**: Alpha channel for transparent backgrounds

### Export Settings
- **Quality**: 100% (no compression artifacts)
- **Anti-aliasing**: Smooth (optimized for screens)
- **Background**: Transparent (except social header)

## Rebuilding Assets

### Prerequisites
```bash
npm install
```

### Generate All Assets
```bash
npm run brand:export
```

*Note: If the npm script is not available, run directly:*
```bash
node brand/export.js
```

### What Gets Generated
The export script creates:
- 5 logomark PNG sizes (128px to 1024px)
- 4 horizontal logo PNGs (including dark variant)
- 5 favicon files (PNG + ICO)
- 1 Apple touch icon
- 2 social media assets (square icon + header banner)

All files are generated in `/brand/exports/` with optimized compression and proper naming conventions.

## File Management

### Version Control
- **Include in Git**: All source SVG files, README.md, export.js, webmanifest
- **Git Ignore**: `/exports/` folder (generated files)
- **Deployment**: Run `npm run brand:export` during build process

### File Naming Convention
- **Descriptive**: `postscriptworks-[type]-[size].png`
- **Consistent**: Lowercase, hyphen-separated
- **Predictable**: Size included in filename for easy reference

## Support

For questions about brand usage or custom asset needs:
- Review these guidelines first
- Check the /exports/ folder for available sizes
- Regenerate assets if needed: `npm run brand:export`
- All source files are editable SVGs in `/src/`

---

**Brand Kit Version**: 1.0  
**Last Updated**: September 2025  
**Generated Assets**: See export.js for complete list