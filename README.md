# debajyotimaz.github.io

Personal academic site. Plain HTML/CSS/JS, no build step.

- Content (papers, news, experience, honors, teaching): edit `data.js`
- Layout and styles: `index.html`
- CV: `cv.pdf`, kept in sync with `cv.tex` in the private repo https://github.com/debajyotimaz/resume_job_appl by `.github/workflows/sync-cv.yml` (runs on every push to that repo, daily, and on demand)

Pushing to `main` deploys via `.github/workflows/pages.yml`.
The previous Next.js version is kept on the `legacy-nextjs` branch.
