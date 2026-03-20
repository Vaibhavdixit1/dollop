# VOYAGE

VOYAGE is a luxury travel marketing website built with Next.js App Router, React, TypeScript, Tailwind CSS v4, and Framer Motion. The project presents a premium editorial-style brand experience across destinations, packages, experiences, gallery, blog, and lead-generation pages.

## Overview

This repository currently represents a frontend-first product shell for a high-end travel brand. The site is composed of reusable visual sections and mostly static content, with lightweight client-side interactions for navigation, animations, gallery browsing, and form feedback.

The project is best understood as:

- A polished marketing site
- A reusable component-driven landing page system
- A static blog powered by local data
- A prototype foundation for future backend integration

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion
- ESLint

## Project Structure

```text
.
├── app/                  # App Router pages and global app shell
├── components/           # Reusable UI sections and interactive components
├── lib/                  # Local data sources and shared utilities
├── public/               # Static assets
├── package.json          # Scripts and dependencies
├── tsconfig.json         # TypeScript configuration
├── next.config.ts        # Next.js configuration
└── eslint.config.mjs     # ESLint configuration
```

## Folder Guide

### `app/`

Contains route-level pages using the Next.js App Router.

- `layout.tsx`: Global app shell, metadata, fonts, and shared `ScrollToTop`
- `page.tsx`: Homepage assembled from multiple reusable sections
- `about/`, `destinations/`, `experiences/`, `packages/`, `gallery/`, `contact/`: Main marketing pages
- `login/`, `signup/`: Auth-themed UI pages
- `blog/page.tsx`: Blog listing page
- `blog/[slug]/page.tsx`: Static blog detail route generated from local data
- `globals.css`: Global styles and Tailwind theme variables

### `components/`

Contains the visual building blocks used across routes.

Examples:

- Layout/navigation: `Header`, `Footer`, `ScrollToTop`
- Homepage sections: `Hero`, `Partners`, `Features`, `HowItWorks`, `CTA`, `Newsletter`
- Editorial/brand sections: `Philosophy`, `Testimonials`, `Timeline`, `TeamSection`
- Commerce-inspired sections: `FeaturedPackages`, `PackageTiers`
- Content discovery: `DestinationGrid`, `RegionCategories`, `TravelGallery`, `BlogExplorer`

Many of these are self-contained presentation components with embedded static content.

### `lib/`

Contains local content and shared logic.

- `blog-data.ts`: In-memory blog post dataset used by blog list and slug pages

### `public/`

Contains static SVG assets generated with the initial Next.js setup.

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Brand-focused homepage with multiple promotional sections |
| `/about` | Company story, mission, founder narrative, team, timeline |
| `/destinations` | Destination discovery page |
| `/experiences` | Curated luxury experiences showcase |
| `/packages` | Membership and package presentation |
| `/gallery` | Visual gallery with lightbox interaction |
| `/blog` | Blog listing page |
| `/blog/[slug]` | Static blog article page |
| `/contact` | Inquiry page with client-side form interaction |
| `/login` | Login UI mockup |
| `/signup` | Signup UI mockup |

## Architecture Notes

### Rendering model

- The app uses the Next.js App Router
- Most pages are static or server-rendered without dynamic data fetching
- Interactive sections use client components where needed

### Content model

- Most copy and media references are embedded directly inside page or component files
- Blog posts are stored locally in `lib/blog-data.ts`
- There is no CMS or external API integration yet

### Styling approach

- Tailwind utility classes define most of the visual system
- `app/globals.css` adds minimal global tokens and shared animation helpers
- Typography and spacing are intentionally bold and editorial in tone

### Motion and interactivity

Framer Motion is used for:

- Entrance animations
- Scroll-based progress indicators
- Mobile menu transitions
- Gallery lightbox behavior
- In-view reveal effects

## Current Functional Status

The project is visually complete in many areas, but functionally still frontend-only.

Implemented:

- Multi-page navigation
- Responsive layouts
- Scroll-based UI enhancements
- Static blog generation
- Gallery lightbox interaction
- Basic client-side form state handling

Not implemented yet:

- Real authentication
- API routes or backend services
- Database or persistent storage
- CMS integration
- Form submission handling
- Search, filtering, or booking workflows
- Payment or membership logic

## Local Development

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run start
```

Lint the project:

```bash
npm run lint
```