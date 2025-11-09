# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a marketing website for JJSADR (Joseph Saltarelli ADR), built with Next.js 16.0.1. The site uses the App Router architecture and is designed as a front-facing marketing presence for professional Alternative Dispute Resolution services.

## Tech Stack

- **Framework**: Next.js 16.0.1 (App Router)
- **React**: 19.2.0
- **Styling**: Tailwind CSS v4 with PostCSS
- **TypeScript**: v5
- **Linting**: ESLint with Next.js config
- **Development**: Turbopack (default in Next.js 16)

## Development Commands

```bash
# Start development server (runs on http://localhost:3000 by default)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Architecture

### App Router Structure
- `app/layout.tsx` - Root layout with Geist fonts (Sans and Mono) configured
- `app/page.tsx` - Homepage/landing page
- `app/globals.css` - Global Tailwind styles

### Styling Approach
- Tailwind CSS v4 using the new PostCSS plugin (`@tailwindcss/postcss`)
- Custom fonts: Geist Sans and Geist Mono loaded via `next/font/google`
- Font variables available: `--font-geist-sans` and `--font-geist-mono`

### Current Page Structure
The landing page (`app/page.tsx`) uses a centered layout with:
- Gradient background: `from-slate-50 to-slate-100`
- Container-based responsive design
- Flexbox centering for hero content

## Important Notes

- This project uses Next.js 16 with Turbopack by default (no webpack)
- Tailwind CSS v4 configuration is minimal - it uses PostCSS plugin instead of traditional config file
- The site is currently single-page; future pages should be added as route folders under `app/`
- Metadata (title, description) should be updated in `app/layout.tsx` to reflect JJSADR branding
