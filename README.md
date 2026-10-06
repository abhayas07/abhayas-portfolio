# Abhay A S — Full-Stack Developer Portfolio

A responsive portfolio for a full-stack Python developer, built with Next.js (App Router) and Tailwind CSS. The hero is styled as a JSON response from a web back end, and the green and yellow palette nods to Django and Python. Dark mode is the default, with a light-mode toggle. No API keys or environment variables are needed.

## Animations
- Hero headline slides up word by word, then the JSON response types in line by line.
- `components/RequestFlow.js`: a looping SVG animation of a request going browser, server, database and back. Edit the labels in the `nodes` array.
- `components/ScrollProgress.js`: thin progress bar at the top of the page.
- All animation is disabled when the visitor has "reduce motion" turned on.

## Tech stack
- Next.js 14 (App Router, JavaScript)
- Tailwind CSS 3
- System font stacks (no external font downloads, so it runs offline)

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000. For a production build: `npm run build && npm start`.

## Customize the content
All text lives in `data/portfolio.js`:
- `profile`: name, title, positioning line, contact details. Add your `github` URL and a `resume` PDF path (put the PDF in `/public`).
- `projects`: each has `problem`, `solution`, `contribution`, `outcome` and `link` fields. They are empty now and only appear once you fill them in. Add real details only.
- `experience`, `skills`, `education`: edit or add entries.

Colors are in `tailwind.config.js`; layout lives in `components/`.

## Structure
```
app/         layout, page, global styles
components/  Header, Hero, About, Projects, Experience, Skills, Education, Contact, Footer, Section, ThemeToggle
data/        portfolio.js (all content)
public/      static files (resume PDF, images)
```

## Deploy
Push to GitHub and import the repo into Vercel (or any Next.js host).
