# ✨ Glass Profile

An Apple glassmorphism **profile page** built with **React (Next.js) + CSS Modules**,
organized with a **modular monolith** frontend architecture.

## 🏗️ Architecture — Modular Monolith

```
src/
├── app/                      # Composition root (Next.js app router)
│   ├── layout.js             #   HTML shell + metadata
│   ├── page.js               #   Page = Background + Header + Profile + Footer
│   ├── globals.css           #   Reset, page frame
│   ├── css/variables.css     #   Design tokens (dark/light themes)
│   └── components/           #   App-level shell components
│       ├── Background/       #     Animated gradient blobs
│       ├── Header/           #     Sticky glass nav + theme toggle
│       └── Footer/
├── shared/                   # Cross-module primitives & hooks
│   ├── ui/                   #   Button, GlassCard, Section
│   ├── hooks/                #   useTheme, useInView, useCountUp
│   └── index.js              #   Public API of the shared kernel
└── modules/                  # Business-feature modules
    └── profile/              #   The profile feature (self-contained)
        ├── index.js          #     Module boundary — re-exports <Profile />
        ├── Profile.js        #     Composes the feature sections
        ├── data/profileData.js  #  All content in one editable file
        └── components/
            ├── hero/         #     Portrait, email/WhatsApp actions, socials
            ├── about/        #     Bio, contact details + animated stat counters
            ├── skills/       #     Animated skill bars
            ├── timeline/     #     Journey timeline
            └── projects/     #     Project cards with repo links
```

**Rules**

- `app/` only composes; it holds no feature logic.
- Each module under `modules/` owns its data and components, and exposes a
  single entry (`index.js`).
- Reusable UI/hooks live in `shared/`; features import from `@/shared`.

## 📦 Features

- 🍎 Apple-style glass: frosted blur panels, inner top-highlight, soft glow
- 🌗 Dark / light theme toggle (persisted in `localStorage`)
- 🫧 Animated floating gradient blobs behind the glass
- 📊 Count-up stats + scroll-triggered skill bars (IntersectionObserver)
- 📇 Contact card with copy-email-to-clipboard
- 🔗 Project cards linking to GitHub repositories
- 📱 Fully responsive (mobile / tablet / desktop)
- ♿ Accessible markup: aria labels, semantic sections, reduced-motion support

## 🚀 Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

## 📤 Deploy to GitHub Pages

1. In `next.config.mjs` set `basepath: '/<your-repo-name>'` (output is already
   `export`, so `npm run build` produces static files in `out/`).
2. Run `npm run build`.
3. Push the `out/` folder using [actions/deploy-pages](https://github.com/actions/deploy-pages)
   or any static host (Netlify/Cloudflare Pages work too).

## ✏️ Customizing content

Everything the page shows is in **`src/modules/profile/data/profileData.js`** —
edit name, bio, skills, timeline, and projects there. No component changes needed.
The portrait lives at **`public/avatar.jpg`** — replace that file to change the photo
(any square image works).
