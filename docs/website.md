# The website (`web/`)

A plain HTML + CSS prototype of the client-facing portfolio homepage, so you can see and feel the design before the Next.js build. It follows `../portfolio_blueprint_2026-09-22.md` (design, content) and `../portfolio_global_plan_2026-09-22.md` (offers, trust, regions).

## Open it

- **Quickest:** double-click `web/index.html`.
- **Or serve it locally:**
  ```bash
  cd ~/Documents/cnu/Portfolio/web
  python3 -m http.server 8000
  # then open http://localhost:8000/
  ```

The page is light ("paper") by default. The sun button in the header switches to a dark ("deep forest") variant, and the page remembers that choice.

Colours (6 Oct 2026): the **Earthy Minimal** board. Deep forest `#2E3A2F` for headings, ink and primary buttons; sage `#6B7F5B` for assurance and live states; sand `#D9C9B2` for borders, chips and soft fills; terracotta `#C96F4F` as the single highlight (key words, numbers, traced paths); paper `#F8F6EE` as the page. Small terracotta and sage text use darker tints (`--accent-text`, `--sage-text`) so they pass contrast on paper. Tokens sit at the top of `css/styles.css`; the drafting grid, hull drawing and title block stay as the signature. Type: DM Sans for everything readable, IBM Plex Mono only for drawing labels and data. Motion follows the visitor's "reduce motion" setting: with it on, nothing animates and nothing is hidden.

## Files

```
web/                 ← everything here, and only this, is deployed
  index.html         all homepage content, section by section (search for "=====")
  css/styles.css     the design system: colour tokens at the top, then one block per section
  js/main.js         theme toggle, mobile menu, animations (scroll reveal, architecture trace,
                     hero waterline, count-ups), prototype form message
  images/profile.jpg your photo
  images/og.png      the 1200x630 preview card LinkedIn, Slack and WhatsApp show when the site is shared
                     (rebuild with: python3 tools/make_og_image.py)
  logos/             copies of the logos the page uses
  robots.txt         search engines and AI answer engines welcomed explicitly
  vercel.json        clean URLs, security headers, asset caching
```

`logos/` at the repo root stays the master library, with its manifests. After adding or swapping a logo on the page, run:

```bash
python3 tools/sync_logos.py
```

That copies the referenced logos into `web/logos/` and deletes any that the page no longer uses.

## Deploying to Vercel

Import the repo, then set **Root Directory: `web`**. Framework preset "Other", no build command, no output directory. Everything outside `web/` (your portfolio source, the plan documents, the logo library) is then never deployed and never reachable by URL.

Deploy a branch first to get a preview URL, and keep it unlisted until the permission questions below are settled.

## Navigation

Services (`#services`, the eight systems) · Work (`#work`) · How I build (`#principles`, the simulator and the six rules) · Engagements (`#engagements`, the offers) · Terms (`#terms`, how I work: contracts, data, billing) · About (`#about`) · Book a call (`#contact`). Each section's eyebrow repeats its nav label.

## Homepage sections, in order

Hero → Worked with → What I can build for you (with an industry filter: chips above the grid dim the systems that don't fit and count the ones that do; each card's `data-fits` attribute lists its industries, so adding one is a one-word edit) → Selected work (5 case studies + more) → How I build (an agent simulator: four scenarios run a PTBuddy-style assistant through its request path, with telemetry, a run log and the six rules that light up; the scenario data sits at the top of the simulator block in `js/main.js`) → Ways to work together (what every build ships with, then the offers) → How I work → Working hours → About (+ photo, timeline, tools) → Contact

Below the five cases, "Also built" lists the other systems one per row (sector, name, one line), so it takes any number of entries; add a `<li>` with a `<small>`, a `<b>` and a `<span>`.

Case studies run in trust order: the live, measured one first (support automation, ~70%), then PTBuddy, the ATS, the voice agent and the LLaMA fine-tune. Each card carries a status chip (Live / In testing / Delivered) and a "How I know" line saying how the result was measured.

Testimonials sit between Working hours and About, commented out until there are real quotes.

## Assumptions

Every claim on the page that you did not state outright is listed in section 37 of [`../srinivas_full_portfolio.md`](../srinivas_full_portfolio.md), marked as confirmed, assumed, a promise to decide, or missing. Read that before the site goes anywhere public.

## Yellow slots to fill in

These are facts only you have. Everything else on the page comes from your portfolio file.

| Where | What to add |
|---|---|
| PTBuddy card | p95 time to first token, cost per conversation, % of replies passing the JSON contract, number of testers |
| MCP ticket case | emails and transcripts per day |
| Voice AI case | calls completed, survey completion rate, median response time |
| LLaMA case | how you evaluated it (base → tuned score) |
| HRMS | the framework, database and cloud it runs on |
| Footer | business name and entity type |
| Testimonials | real quotes only, with written permission |
| Five "~" figures | the PTBuddy latency, cost and contract figures and the voice completion and response figures are expected values for the architecture, not measurements (portfolio source, section 37 G). The page carries no disclaimer about this, by your decision on 6 Oct 2026, so read the real numbers off CloudWatch and the call logs before LinkedIn traffic arrives: a client's first question is "how did you measure that?" |

## Before anything goes public

- [ ] Employment: written consent from Bridgetown for outside consulting, or a leaving date (global plan, section 2)
- [ ] Anya: written permission from Bridgetown to show it as a case study
- [ ] Client logos and names: permission from Walker Sands / Balihans, and from Atlas and Bridgetown for their logos
- [ ] MentionNow co-founders agree to the free AI Visibility Snapshot offer
- [ ] Replace `YOUR-DOMAIN` in the structured data and the Open Graph tags in `<head>` (og:image must be an absolute URL or LinkedIn shows no picture)
- [ ] After deploying, paste the URL into the LinkedIn Post Inspector (linkedin.com/post-inspector) once, so LinkedIn fetches the new preview card
- [x] Booking: every "Book a call" button opens `calendly.com/dsrinivas360/30min` in a new tab, tagged `utm_source=portfolio` so Calendly shows which bookings came from the site
- [ ] Connect the contact form (it only shows a message in this prototype)

## Next steps

1. **You review this page.** Tell me what to change: colours, copy, order, density.
2. **Step 2:** one full case-study page (Anya or MCP tickets) in the layered format: business story on top, engineering underneath.
3. **Step 3:** a Services page and a How I work page.
4. **Step 4:** rebuild in Next.js with content in files (one file per project, offer and testimonial), a live contact form and booking.
