# Site prototype — step 1: the homepage

A plain HTML + CSS prototype of the client-facing portfolio homepage, so you can see and feel the design before the Next.js build. It follows `../portfolio_blueprint_2026-09-22.md` (design, content) and `../portfolio_global_plan_2026-09-22.md` (offers, trust, regions).

## Open it

- **Quickest:** double-click `index.html`.
- **Or serve it locally.** Run the server from the **Portfolio** folder, not from `site-prototype`, because the logos are loaded from `../logos`:
  ```bash
  cd ~/Documents/cnu/Portfolio
  python3 -m http.server 8000
  # then open http://localhost:8000/site-prototype/
  ```

The sun button in the header switches between the dark ("deep water") and light ("drafting film") themes. The page remembers your choice.

## Files

```
site-prototype/
  index.html      all homepage content, section by section (search for "=====")
  css/styles.css  the design system: colour tokens at the top, then one block per section
  js/main.js      theme toggle, mobile menu, prototype form message (the page works without it)
```

Logos come straight from `../logos/` (the same files as your logo library), so there's only one copy of each.

## Homepage sections, in order

Hero → Worked with → What I can build for you → Selected work (5 case studies + more) → How I build → Ways to work together (offers) → How I work → Working hours → About (+ photo, timeline, tools) → Contact

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
| Contact | your Cal.com (or Calendly) booking link, in the `data-placeholder` button |
| Testimonials | real quotes only, with written permission |

## Before anything goes public

- [ ] Employment: written consent from Bridgetown for outside consulting, or a leaving date (global plan, section 2)
- [ ] Anya: written permission from Bridgetown to show it as a case study
- [ ] Client logos and names: permission from Walker Sands / Balihans, and from Atlas and Bridgetown for their logos
- [ ] MentionNow co-founders agree to the free AI Visibility Snapshot offer
- [ ] Replace `YOUR-DOMAIN` in the structured data in `<head>`
- [ ] Connect the contact form (it only shows a message in this prototype)

## Next steps

1. **You review this page.** Tell me what to change: colours, copy, order, density.
2. **Step 2:** one full case-study page (Anya or MCP tickets) in the layered format: business story on top, engineering underneath.
3. **Step 3:** a Services page and a How I work page.
4. **Step 4:** rebuild in Next.js with content in files (one file per project, offer and testimonial), a live contact form and booking.
