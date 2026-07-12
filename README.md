# Udit Krishna Portfolio

A premium, modern personal portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. The site is designed to feel polished, editorial, and brand-driven while remaining easy to update through content-driven sections.

## What has been built

This project includes:

- A polished landing experience with animated hero content
- A refined about section with a personal brand narrative
- Experience, skills, projects, certifications, achievements, and roadmap sections
- A premium motion layer with scroll progress, cursor glow, and reveal animations
- A centralized asset management system for images, illustrations, logos, resume files, and future media
- A graceful fallback image system so missing assets never break the layout
- A resume download flow connected through a shared asset utility

## Tech stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Project structure

- app/ — app router pages and layout
- components/ — reusable UI and motion components
- config/ — site metadata and centralized asset configuration
- content/ — content-driven portfolio data
- sections/ — major landing page sections
- public/ — static assets such as images, illustrations, icons, logos, and resume files
- utils/ — helper utilities such as resume path handling

## Main features

### Premium UI and experience
- Dark premium visual system
- Smooth section transitions
- Ambient lighting and layered backgrounds
- Strong typography hierarchy and card-based section design

### Content-driven portfolio
- Section content is separated from presentation for easier updates
- Resume and asset paths are centralized for future replacements

### Asset management system
- All image and media paths now flow through a single configuration file
- Replacing files later only requires updating the asset config and/or the file in public/
- Missing assets gracefully render placeholder states

## Running locally

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser at:
   ```text
   http://localhost:3000
   ```

## Build

To create a production build:

```bash
npm run build
```

## Asset management notes

The portfolio now uses centralized asset references from the file:

- config/assets.ts

This file exports core paths for:
- profile image
- hero illustration
- background assets
- project images
- certification images
- achievement images
- logos
- social icons
- Lottie assets
- resume PDF

## Notes for future updates

You can continue expanding the portfolio by:
- replacing placeholder media with real assets
- adding more project visuals and logos
- enriching the roadmap and experience content
- adding more animations and interactive sections

## Summary

What you now have is a strong foundation for a modern personal brand site that is:
- visually polished
- modular
- easy to maintain
- ready for future content and design upgrades
