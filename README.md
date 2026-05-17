# Luis Mañez — Personal Website

Luis Mañez personal website hosted on GitHub Pages at [luismanez.com](https://luismanez.com).

Built with **Vite + React + TypeScript**. The source code lives in the `v2` branch; the `master` branch contains only the compiled output served by GitHub Pages. **You never touch `master` manually** — deployment is fully automated via GitHub Actions.

---

## Branch structure

| Branch | Purpose |
|--------|---------|
| `v2` | Source code. This is where you work. |
| `master` | Built output only. Served by GitHub Pages. Do not edit manually. |
| `dev` | Old source (kept for reference, do not use). |

---

## Local development

```bash
# 1. Make sure you are on the v2 branch
git checkout v2

# 2. Install dependencies (only needed the first time, or after pulling new changes)
npm install

# 3. Start the dev server
npm run dev
```

The site will be available at **http://localhost:5173** with hot module reload.

---

## Making changes

1. Edit files under `src/` — components are in `src/components/`, one folder per section.
2. The dev server reloads automatically on save.
3. When done, commit and push to `v2`:

```bash
git add -A
git commit -m "describe what you changed"
git push origin v2
```

That's it. Pushing to `v2` triggers GitHub Actions automatically.

---

## How publishing works (automated)

The file `.github/workflows/deploy.yml` defines the pipeline:

1. **Trigger:** any push to `v2`
2. **Build:** runs `npm run build` → output goes to `dist/`
3. **Deploy:** pushes `dist/` to `master` (including the `CNAME` file for the custom domain)
4. **GitHub Pages:** serves `master` → available at luismanez.com in ~1 minute

You can monitor the pipeline at: https://github.com/luismanez/luismanez.github.io/actions

---

## Project structure

```
src/
  App.tsx                  ← root component, assembles all sections
  App.css                  ← all component styles
  index.css                ← CSS variables, reset
  components/
    Navigation/            ← sticky top nav with scroll links
    Hero/                  ← intro section (name, stats, CTAs)
    About/                 ← about me + tech grid
    Journey/               ← career timeline
    Expertise/             ← expertise cards
    Articles/              ← selected articles
    Speaking/              ← community & speaking links
    Contact/               ← contact CTA
    Footer/                ← footer
public/
  CNAME                    ← custom domain (luismanez.com)
.github/workflows/
  deploy.yml               ← GitHub Actions deploy pipeline
```

---

## Useful commands

| Command | What it does |
|---------|-------------|
| `npm run dev` | Start local dev server on port 5173 |
| `npm run build` | Build for production into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
