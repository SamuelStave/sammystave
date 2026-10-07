
# Sammystave Official Website - Multipage Professional

This is the full multipage build, not just a portfolio prototype.

## Stack
- React + TypeScript + Vite
- React Router (multipage)
- Tailwind CSS
- Content-driven via src/data/content.json

## Pages
- / = Home (hero, selected music, ventures teaser)
- /music = Full discography + embeds (Spotify, YouTube, TikTok, IG)
- /ventures = Stave Industries Inc., RGPN, Spelbum + partnership form + ecosystem diagram
- /ventures/:id = Dedicated page per venture (pitch-ready)
- /about = Short + full bio, roles
- /contact = Booking + collaboration form

## Color Fix
Old prototype used bright amber #f59e0b on black — too harsh. New palette:
- bg: #0E0E0C (warm black)
- surface: #171614
- surface2: #201E1B
- text: #F5F3EF (warm white)
- muted: #A8A29A
- gold: #C9A86A (muted, premium gold) — not neon

## How to run
npm install
npm run dev
npm run build (outputs to dist/ -> deploy to Vercel/Netlify)

## How to make it real (no dummies)
Edit src/data/content.json:
- Replace all REPLACE_ME with real links
- Add your photo to /public/images/sammystave.jpg
- Add covers to /public/covers/*.jpg (create folder)
- Add YouTube video IDs to embeds.youtubeIds

## What you need for zero dummy sections
See FULL_CHECKLIST.md
