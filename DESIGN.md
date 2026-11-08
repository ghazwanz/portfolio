# Portfolio Design System & Visual Specification
> **Style Archetype:** Neo-Brutalist x 90s-00s Pixel Nostalgia x WebGL Dither Art  
> **Reference Inspiration:** [sethlukin.com](https://sethlukin.com)  
> **Target Framework:** Astro + Tailwind CSS + Native WebGL (GLSL)

---

## 1. Design Tokens & Color Palette

### A. Surfaces & Canvas
| Token | Hex / Value | Usage |
| :--- | :--- | :--- |
| `surface-canvas-dark` | `#0A0A0B` | Hero background container (underneath WebGL canvas) |
| `surface-canvas-light` | `#F4F4F0` | Main content body background (warm paper / retro desktop) |
| `surface-card` | `#FFFFFF` | Project frame content, stamp inner background |
| `surface-badge` | `#E8E8E2` | Micro badges, tech tags container |

### B. Typography & Ink
| Token | Hex / Value | Usage |
| :--- | :--- | :--- |
| `text-primary-dark` | `#FFFFFF` | Hero display text & primary elements on dark canvas |
| `text-primary-light` | `#111113` | Headings, project titles, main body ink |
| `text-muted` | `#66666E` | Monospace metadata, roles, subtitles, dates |
| `border-hard` | `#111113` | 2px–3px brutalist frame borders, dividers |
| `border-subtle` | `rgba(0, 0, 0, 0.12)` | Subtle grid guides, container margins |

### C. Playful Accents (Pixel & Indicators)
| Token | Hex / Value | Usage |
| :--- | :--- | :--- |
| `accent-green` | `#22C55E` | Live status pulse indicator, verified badges |
| `accent-orange` | `#FF5722` | Postage stamp background, hover highlights |
| `accent-yellow` | `#FFD54F` | Pixel flower petals, coin sparkles |
| `accent-red` | `#EF4444` | Pixel cross markers (`❌`) |
| `accent-blue` | `#3B82F6` | Hyperlinks, tech tags highlight |

---

## 2. Typography Hierarchy

| Role | Font Family | Size / Leading | Style Notes |
| :--- | :--- | :--- | :--- |
| **Hero Title** | `Syne` / `Clash Display` / `Space Grotesk` | `text-6xl` to `text-8xl`, `leading-[0.85]` | Extra bold (800), all-caps, tracking-tight |
| **Section Title** | `Syne` / `Space Grotesk` | `text-4xl` to `text-6xl`, `leading-tight` | Heavy bold (700/800), all-caps |
| **Skills / Keywords** | `Syne` / `Space Grotesk` | `text-xl` to `text-3xl`, `leading-snug` | Bold uppercase, centered alignment |
| **System & Metadata** | `JetBrains Mono` / `Space Mono` | `text-xs` to `text-sm`, `tracking-widest` | Monospace, all-caps, system labels |
| **Pixel Dialogue** | `Silkscreen` / `Press Start 2P` | `text-xs` to `text-sm` | Pixelated speech bubble (`HI THERE!`) |

---

## 3. Structural Layout & Section Flow

```
┌────────────────────────────────────────────────────────┐
│  HEADER: Meta Bar (Email Link, LinkedIn, Roles)        │
│                                                        │
│  HERO CANVAS (Dark Mode + WebGL Dither Shader):        │
│  "OUR [PIXEL_AVATAR] ONII" + Speech Bubble             │
│  Subtitle & Down Arrow "▼"                             │
└───────────────────────────┬────────────────────────────┘
                            │ (Rounded-t-[48px] Cutout)
┌───────────────────────────▼────────────────────────────┐
│  LIGHT BODY CANVAS (#F4F4F0)                           │
│                                                        │
│  LANDSCAPE TRANSITION:                                 │
│  - Pixel Clouds & Mountain Silhouette Layer            │
│  - Floating Micro-Stickers (Flowers, Thumbs Up, Cross) │
│                                                        │
│  SECTION 01: FEATURED WORK                             │
│  - Asymmetric 2-3 Column Staggered Grid                │
│  - Solid 2.5px Black Borders + Image Preview           │
│  - Monospace Project Title Tag Below Each Frame        │
│                                                        │
│  SECTION 02: 5 YEARS IN TECH / SKILLS MATRIX           │
│  - Centered Stacked Skill Headings                     │
│  - Flanking Postage Stamp Badges (Tilted ±12deg)       │
│  - Pixel Zigzag Strips (▼▼▼▼▼) & Coin Glyphs           │
│                                                        │
│  FOOTER: Minimalist Direct Connect                     │
│  - Large CTA, Social Links, Live WIB Clock             │
└────────────────────────────────────────────────────────┘
```

---

## 4. WebGL Background Shader Specification (Hero)

- **Technology:** Native WebGL (GLSL Fragment Shader via HTML5 `<canvas>`).
- **Zero Library Overhead:** Direct `<script>` mounting inside Astro component (~2KB payload).
- **Visual Behavior:**
  - **Color Gradient:** Dark indigo/obsidian base with chromatic ripple waves.
  - **Dither Grid Filter:** Bayer matrix or ordered dither algorithm overlay to mimic retro VGA/CRT displays.
  - **Interactivity:** Subtle wave distortion reacting to mouse movement (`u_mouse` coordinate uniforms) with smooth damping.

---

## 5. Asset & SVG Inventory

### A. Pixel Art Assets (Custom SVGs)
1. `avatar-character.svg`: 8-bit/16-bit standing pixel developer character.
2. `speech-bubble-pixel.svg`: Angular pixelated dialogue box containing "HI THERE!".
3. `cloud-pixel-lg.svg` & `cloud-pixel-sm.svg`: Tiered line-art clouds with solid black outlines.
4. `mountain-range-pixel.svg`: Horizon silhouette for section transition.
5. `sticker-flower.svg`: Pixel yellow flower with dark outline.
6. `sticker-thumbs-up.svg`: Pixel thumbs-up hand icon.
7. `sticker-cross.svg`: 8-bit red cross marker.
8. `sticker-coin.svg`: Retro arcade coin icon (`🪙`).

### B. Neo-Brutalist & Stamp Assets
1. `postage-stamp-frame.svg`: Perforated edge rectangle (teeth pattern along borders).
2. `badge-academic.svg`: Circular emblem / starburst badge for university / lab affiliation.
3. `border-zigzag.svg`: Repeating triangle tooth strip (`▼▼▼▼▼`).
4. `arrow-down-solid.svg`: Inverted solid triangle chevron (`▼`).
5. `arrow-up-right.svg`: Clean geometric external link arrow (`↗`).

### C. Social & Platform Glyphs
1. `github.svg`, `linkedin.svg`, `kaggle.svg`, `mail.svg` (Clean 2px stroke, brutalist-ready).

---

## 6. Micro-Interactions & Styling Rules

- **Hover on Project Cards:**
  - Scale image by `1.03` inside `overflow-hidden`.
  - Shift project label `translate-x-1.5` with CSS transition `200ms cubic-bezier(0.16, 1, 0.3, 1)`.
- **Floating Stickers Behavior:**
  - Subtle infinite vertical floating keyframes (`translateY(-4px)` to `translateY(4px)`) with staggered animation delays (`0.2s`, `0.5s`, `0.8s`).
- **Borders & Shadows:**
  - Hard shadows: `box-shadow: 4px 4px 0px #000000;` (no blurry diffusion).
  - Borders: strictly solid `2px` or `2.5px` black ink `#111113`.
