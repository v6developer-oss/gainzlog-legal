# GainzLog — Legal

Public hosting for the GainzLog app's legal documents, served via GitHub Pages.

- **Privacy Policy** — `/privacy/` (RU + EN)
- **Terms of Service** — `/terms/` (RU + EN)

Live: https://v6developer-oss.github.io/gainzlog-legal/

## Structure

```
index.html          landing → links to both docs
style.css           shared styles (light/dark, responsive)
lang.js             RU/EN language toggle (no dependencies)
privacy/index.html  Privacy Policy
terms/index.html    Terms of Service
```

## Publishing

GitHub Pages is set to **Deploy from a branch → `main` → `/ (root)`**.
Any push to `main` republishes automatically. No build step — plain static HTML.

The app (private `GainzLog` repo) links to these pages via
`GZLegalFooter.default{Privacy,Terms}URL`.
