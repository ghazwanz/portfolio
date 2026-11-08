# Ghazwan Ababil — Front-end Developer Portfolio

> Retro 90s–00s pixel aesthetic meets modern WebGL fluid physics and Framer Motion interactions.

A front-end developer portfolio showcasing Framer template developments, responsive layouts, micro-interactions, and visual computing craft.

---

## ⚡ Tech Stack

- **Framework**: [Astro v5](https://astro.build/) (Static Site Generation)
- **UI & Components**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Animation & Physics**: [Framer Motion](https://www.framer.com/motion/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Shaders**: WebGL 1.0 (GLSL Fluid Liquid Mesh + 4x4 Bayer Matrix CRT Dither)
- **Typography**: Ubuntu Sans (Primary display, body, and technical mono)

---

## ✨ Key Features

1. **Sticky Hero with Liquid Mesh Shader**:
   - WebGL fluid simulation responsive to cursor and touch dragging.
   - Pinned viewport layer scaling down with scroll-linked opacity exit.
   - 1-bit pixel pill badge speech bubble and avatar.

2. **Parallax Meadow & Interactive Stickers**:
   - Loop-animated pixel clouds reactive to scroll velocity.
   - Multi-layer mountain silhouette parallax.
   - Physics-bound draggable meadow stickers with unclipped responsive pine trees.

3. **Featured Works & Retro Stepped Modal**:
   - Asymmetric 12-column masonry grid displaying Framer marketplace templates with natural aspect ratio.
   - Interactive project detail dialog with 1-bit stepped pixel border frame.
   - Decoupled data model in `src/data/projects.json`.

4. **Tech Stack & Tooling Archive**:
   - Centered skills list (`Framer`, `Webflow`, `Next.js`, `Laravel`, `Tailwind CSS`, `WordPress`, `Figma`) with hover spotlight focus.
   - Flanking square stepped-border cards featuring official tech vectors.

5. **Closing CTA Section**:
   - Smooth slide-up transition underlapping the main white card panel.
   - Direct action triggers (Email, WhatsApp) and SVG social profile links.

---

## 📁 Project Structure

```text
├── public/                  # Static assets & official tech vector logos
├── src/
│   ├── components/
│   │   ├── react/           # Interactive React islands (Framer Motion)
│   │   │   ├── CapabilitiesSectionMotion.tsx
│   │   │   ├── ClosingCTASection.tsx
│   │   │   ├── DraggableStickers.tsx
│   │   │   ├── HeroStickyContainer.tsx
│   │   │   ├── InteractiveCloudLandscape.tsx
│   │   │   ├── PixelLandscapeAssets.tsx
│   │   │   └── ProjectCardListMotion.tsx
│   │   ├── svg/             # Retro pixel SVG illustrations
│   │   └── HeroShader.astro # WebGL GLSL liquid canvas
│   ├── data/
│   │   └── projects.json    # Project details, deliverables, and links
│   ├── layouts/
│   │   └── Layout.astro     # Global HTML shell & metadata
│   ├── pages/
│   │   └── index.astro      # Main single-page portfolio
│   └── styles/
│       └── global.css       # Tailwind v4 configuration & font faces
└── astro.config.mjs
```

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/ghazwanzu/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start local development server
npm run dev

# Build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 📄 License

MIT © [Ghazwan Ababil](https://github.com/ghazwanzu)
