# Portfolio — Srinivas Dharavath

Everything behind my portfolio website: the content, the research that shaped it, and the site itself.

| Path | What it is | Deployed? |
|---|---|---|
| `web/` | The website: HTML, CSS, a little JS, the photo and the logos it uses | **Yes — this folder only** |
| `srinivas_full_portfolio.md` | Full portfolio source: every project in detail, plus section 37 recording every assumption and open question | No |
| `portfolio_blueprint_2026-09-22.md` | How the portfolio was designed: positioning, structure, copy, 30-day plan | No |
| `portfolio_global_plan_2026-09-22.md` | Winning clients in India, the US, UK, Europe and the Gulf: offers, trust, regions, channels, operations | No |
| `logos/` | Master logo library with per-folder manifests and sources | No |
| `docs/website.md` | How to run and edit the site, what still needs filling, pre-launch checklist | No |
| `tools/sync_logos.py` | Copies the logos the page uses into `web/logos/` | No |

## Run the site locally

```bash
cd web && python3 -m http.server 8000   # then open http://localhost:8000/
```

## Deploy

Vercel → import this repo → **Root Directory: `web`** → framework "Other", no build command.
Nothing outside `web/` is uploaded, so the portfolio source and the plan documents stay private even if the repository is ever made public.
