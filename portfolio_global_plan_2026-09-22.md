# Global Client Plan — Srinivas Dharavath

**Prepared:** 22 Sep 2026
**Builds on:** [portfolio_blueprint_2026-09-22.md](portfolio_blueprint_2026-09-22.md) (the v1 design plan)
**Goal:** make the portfolio win clients globally (US, UK, EU, UAE, Saudi Arabia, Singapore, Australia): founders and companies across industries
**Research:** buyer surveys · regional regulation · consultant websites · India cross-border rules
**Live version (with charts):** https://claude.ai/artifact/VVW4Qs2dk2CQG1MPNcx62U

> **Ready to impress engineers. Not yet ready to win clients.**
>
> The v1 blueprint makes you credible anywhere: the production proof, the design and the AI-search readiness all travel to the US, UK, Europe and the Gulf. But it was written for someone deciding whether to *hire* you, not a founder deciding whether to *buy* from you. The research is also blunt about websites: **70% of consultants get zero leads from theirs in a typical month.** The site's job is to convert. Other channels have to bring people to it. This plan adds both layers.

*This is general information, not legal or tax advice. Items marked **[CA]** need a chartered accountant; items marked **[Lawyer]** need a lawyer.*

---

## 1. The verdict

### Travels globally as-is
- **Production proof with numbers.** Buyers rank a shortlist before first contact 94% of the time, and 95% buy from their day-one shortlist. Case studies are how you get on it.
- **Reliability, evals and cost.** Quality is the #1 barrier to putting agents into production (33%), and only 52% of teams run evals. Your positioning targets that fear directly.
- **AI-search readiness.** 51% of B2B software buyers now start research in AI chatbots, up from 29% in April 2025. Your MentionNow edge matters more for clients than for hiring.
- **The design.** The naval "lines plan" style carries no regional baggage and reads as premium everywhere.
- **English.** It's the business language in every target market. Arabic only matters later, and mostly for Saudi Arabia.

### Missing for global clients
- **What you sell.** No offers, no scope, no prices. Buyers can't say yes to "Senior AI Engineer".
- **Proof in buyer language.** Hours saved, money, time to launch, not just p95 latency.
- **How to start.** No booking link, no process, no time-zone overlap.
- **Cross-border trust.** Contracts, data handling, a business entity, invoicing currency.
- **Social proof.** Testimonials were parked for v1. For client work, that's the gap that costs most: referrals and reviews are how 55–65% of buyers vet providers.
- **A way to reach strangers.** The site alone won't bring them. That needs channels.

### Client-readiness scorecard (0–10)

| Dimension | Blueprint v1 | After this plan | Why |
|---|:---:|:---:|---|
| Engineering proof | 7 | 9 | Real shipped systems with numbers. Travels everywhere. |
| A clear offer | 1 | 8 | Nothing to buy yet: no scope, no price, no way in. |
| Proof in business terms | 3 | 8 | Engineering outcomes, not hours or money saved. |
| Cross-border trust | 1 | 8 | No contracts, data-handling statement, entity or invoicing info. |
| Social proof | 3 | 7 | Logos only in v1. Named testimonials move this most. |
| Regional fit | 2 | 8 | No time-zone overlap, currency or tone choices. |
| Findable by buyers & AI | 3 | 8 | Needs service pages and FAQs, not just case studies. |
| Lead channels beyond the site | 1 | 7 | Most consultants get zero leads from their site alone. |
| **Average** | **2.6** | **7.9** | |

---

## 2. Clear this first — your employment contract decides what's allowed

### Your employer sells the same thing you want to sell
Bridgetown Consulting Group is a US recruitment consulting firm, and its own website also offers custom AI development, NLP, chatbots, predictive modelling and computer vision, focused on healthcare, finance, e-commerce and logistics. Selling AI services to clients of your own competes with it directly. That makes this the first thing to settle, before the site says "Book a call".

- **Your contract decides, not a law.** India has no law banning moonlighting by office employees. But Indian courts generally enforce non-compete, non-solicit and confidentiality duties while you're employed, and a 3-year client non-solicit clause has been upheld even after exit (Madras High Court).
- **If your contract is governed by New Jersey law**, the NJ Supreme Court has held that an employee may not solicit the employer's customers or secretly compete while still employed.
- **Work made as an employee belongs to the employer** (Copyright Act s.17). Depending on your IP clause, that can include after-hours work.
- **PTBuddy, the HRMS and the ATS are all Bridgetown work.** Using any of them as a case study to sell your own services needs Bridgetown's written permission, and the internal systems are more sensitive than the app: name the business units only if Bridgetown agrees. Describe Atlas and Bluekyte work at résumé level, with clients anonymised and no confidential detail.
- **It gets noticed.** Wipro fired about 300 staff for moonlighting in 2022. Parallel jobs show up in provident-fund (EPFO/UAN) records. Infosys now allows outside work only with prior manager and HR consent, in personal time, and never for competitors or clients.

### Two safe paths
- **Get written consent** from your manager and HR. It should name the scope of work, exclude all Bridgetown clients, prospects and competing lines, confirm you'll use no company time, devices or data, and confirm you own your IP, including MentionNow.
- **Or build everything that isn't selling now**, and take clients from the day you leave. That means the site, writing, testimonials, network and legal setup.

Either way, **[Lawyer]** have a lawyer read the contract. Your existing side roles (Masai, ShaktyAI, Balihans, MentionNow) may need the same disclosure. Keep the consulting business on your own laptop, email and accounts, including AI tools.

---

## 3. Positioning for buyers — don't sell to "all industries"; sell the problems every industry has

"AI engineer for all industries" is what every agency on Clutch says, and most of them anchor at $25–49 an hour. Buyers pay more for specialists. MIT's 2025 study found that projects run with specialist partners reached deployment about twice as often as internal builds. So lead with **use cases you've already shipped**, each of which fits many industries. Then go deep in the three or four industries where you have real proof.

| What you build for them | Your proof | Industries it fits |
|---|---|---|
| Email & ticket automation agents | MCP + LangGraph over Outlook and SharePoint, ~70% less manual work | Customer support, IT services, logistics, insurance, B2B SaaS |
| Document intelligence | OCR + Document Intelligence; GPT-4o/Claude metadata extraction; 10+ formats | Finance, insurance, legal, healthcare admin, real estate |
| Knowledge assistants over company documents | Department-level RAG over Google Drive (Walker Sands); enterprise multimodal RAG | Agencies, consulting, legal, any document-heavy team |
| Voice agents | Outbound survey caller on Twilio + OpenAI Realtime, tuned for interruptions | Healthcare, market research, real estate, hospitality, collections |
| Customer-facing AI products with guardrails | PTBuddy: an assistant that escalates to a doctor, a JSON contract, failover, cost per call | Healthtech, wellness, edtech, fintech apps |
| Risk & compliance review agents | Six-stage TPRM crew with a QA agent | Fintech, banks, SaaS vendors, procurement |
| Multi-channel engagement automation | Kollect AI: SMS, WhatsApp, email, IVR on AWS; ~30% faster | Collections, retail, FMCG; WhatsApp-heavy markets such as the Gulf |
| Recruitment & HR automation | An AI-enabled ATS (60 users, 200 candidates tracked) and an HRMS for 600 employees across five business units | Staffing and recruitment firms, HR teams, multi-entity groups |
| AI visibility (GEO) | MentionNow, with clients in the US and Malaysia | Any brand, in any market |

### Hero for the site: one small change
> **I make AI systems behave in production.**

Swap "LLM" for "AI" on the website: founders and business owners outside tech don't all read "LLM". Keep "LLM" on LinkedIn, where your readers are engineers.

**Sub-line:** "Senior AI engineer (IIT Madras). I design, build and run AI agents, voice agents and document automation for founders and companies in the US, UK, Europe and the Gulf, measured and monitored after launch."

### Industries to go deep on
These are where you have shipped proof and where spending is highest. Healthcare ($1.5B) and legal (~$650M) lead vertical AI spend, per Menlo Ventures 2025.
1. **Healthcare & wellness**: PTBuddy, voice agents
2. **Risk, compliance & fintech**: TPRM, document intelligence
3. **Legal**: LLaMA fine-tune, Counsello, document chat
4. **Agencies & professional services**: Walker Sands knowledge platform, MentionNow
5. **Recruitment & HR tech**: the ATS and HRMS you are building now

Build an industry page only once it has a real case study behind it. Google penalises thin template pages ("scaled content abuse"). While you're employed, healthcare and finance overlap with Bridgetown's own focus (see section 2).

---

## 4. Offers — a ladder buyers can say yes to

Successful AI boutiques use the same shape: a paid way in, a fixed-scope build, then an ongoing relationship, with the founder as the direct contact. Parlance Labs, Ionio and Iwana Labs all work this way.

**Your decision, 24 Sep 2026: no prices on the website.** The offers below keep their shape and scope, and the numbers stay in proposals and calls. The trade-off: 51% of buyers say transparent pricing is what they most wish vendors had, and only 12% of consultants publish fees, so publishing would have set you apart. Against that, prices on the page invite comparison with $25/hr agencies and would have to be revised as you raise them, and Indian and Gulf buyers often expect a quote rather than a rate card. Revisit once you have three delivered engagements at the rates you want.

| Offer | Duration | Price | What's in it | Market anchors |
|---|---|---|---|---|
| **AI Opportunity Sprint** (way in) | 2 weeks | from $3,000, credited against a build | Map one workflow and its cost today; prototype the riskiest part; cost model per task or conversation; go/no-go and a build plan | $2–5K for a discovery sprint credited toward the build; $3–8K for a two-week sprint with a prototype |
| **Production-Readiness Audit** (way in, your signature) | 2 weeks | from $4,500, fixed scope | Failure taxonomy from real conversations; evals baseline with pass/fail judges; failover and guardrail review; cost and latency cuts, ranked | A UK boutique sells this at £5,500 for two weeks; an eval system alone sells for $20K |
| **Agent Pilot** (build) | 6 weeks in two-week loops | $15–30K, scoped in the Sprint | One agent (email/tickets, voice, documents or a knowledge assistant) to a monitored pilot; working software every two weeks; evals and a cost dashboard; runs in the client's cloud; handover docs and training | $5–25K for a single-workflow MVP, $25–75K for multi-workflow; 6–8 weeks is the usual shape |
| **Fractional AI Engineer** (ongoing) | monthly | from $4,000/mo (about 1 day a week) | Monthly roadmap and review; eval and cost monitoring; architecture and hiring help | $4–8K for about 2 days a month; $8–15K for about 1 day a week |

### Door-opener: the AI Visibility Snapshot
A free, one-page report showing how ChatGPT, Claude and Perplexity describe a prospect's brand next to its competitors. It works for any company in any country, it's hard to ignore, and it proves you understand where buyers are now searching. Use it to start conversations, then offer the Sprint. MentionNow belongs to you and your co-founders, so agree on this use with them first.

### How to set the prices
- For reference: senior US AI engineers bill **$130–200/hr** on A.Team. The UK median for GenAI contracting is **£550/day**. India-based AI agencies on Clutch mostly charge **$25–49/hr**.
- Price the outcome, not the hours, so you're never compared with the $25/hr agencies. The prices above are starting points: sell three at these prices, collect testimonials, then raise them.
- Take a **50% deposit** on sprints and audits. Many B2B invoices are paid late: 43% in the US, 51% in the UK and 58% in the UAE.

---

## 5. Case studies — one page, two readers

Keep the blueprint's engineering case study and put a business layer on top of it. The layered format works for mixed buying groups: the key insight first, a business path for executives, then technical sections for engineers. 54% of buyers talk to an existing client before buying, so end each case with a quote as soon as you have one.

**Layer order:**
1. **Headline:** the outcome, plus time
2. **Snapshot box:** industry · region · problem · before → after · timeline · your role
3. **Three business paragraphs:** what hurt, what changed, what it means
4. **Under the hood:** the blueprint's engineering story (decisions, evals, cost)
5. **What I'd change**
6. **Quote + a button to the matching offer**

**Example: the top of the MCP ticket case**

> **Cut manual ticket work ~70% for a B2B support team in `[N] weeks`**
>
> | Industry | Region | Before → after | Timeline | My role |
> |---|---|---|---|---|
> | B2B services | `[US?]` | ~70% less manual triage | `[weeks]` | Architect & lead engineer |
>
> The support team read every email and call transcript by hand to open tickets under SLA. Now an AI workflow reads each message, files it, spots duplicates, links related tickets and drafts the reply, and people review instead of retyping. The time goes back into solving problems. And because the integrations are reusable, each new system took about 40% less effort to connect.

Then the "Under the hood" section from the blueprint. `[Brackets]` are facts only you have. Anonymise the client if the contract requires it.

---

## 6. Cross-border trust — a "How I work" page that answers the questions before they're asked

Offshore buyers worry about communication, rework and data. Answer all three in writing, and claim only what's true: you hold no SOC 2 or ISO 27001 certification, so the page offers to work inside the client's compliance setup instead.

- **Process**
  - 30-minute call, then a written proposal within 2 business days.
  - Sprint or Audit first; builds run in two-week loops with a demo at the end of each.
  - Handover with docs, dashboards and a recorded walkthrough.
- **Communication**
  - Reply within one business day; a written update every week.
  - The client's tools: Slack, Teams, email, or WhatsApp for Gulf clients.
  - Overlap hours published (see section 7).
- **Contracts & IP**
  - NDA before any details are shared.
  - MSA + statement of work per engagement; happy to sign the client's paper.
  - Code and IP are the client's once paid.
- **Client data**
  - Work happens in the client's own AWS or Azure account, in their region.
  - Sub-processors listed (the model APIs used); no training on client data.
  - Least-privilege access, removed at the end; data deleted on exit.
- **Compliance-aware**
  - Ready to sign, after a lawyer's review: a DPA with SCCs (EU), the IDTA/Addendum (UK), a HIPAA BAA if health data is involved, and Saudi standard clauses.
  - Chatbots and voice agents disclose they're AI (EU AI Act Art. 50, in force since 2 Aug 2026).
  - Human-review paths for automated decisions (UK, Colorado from 2027).
  - Will complete the client's security questionnaire.
- **Billing**
  - Invoices in USD, GBP, EUR or AED from a registered Indian business.
  - 50% to start sprints and audits; milestones for builds.
  - Standard international transfer or Wise.

**The one trust gap you can't paper over is testimonials.** In v1 they're parked. For client work, I recommend bringing 2–3 into v1 before outreach starts: from Walker Sands via Balihans, from Intellectyx for MentionNow, and from an Atlas or Bluekyte lead. Ask them to post the same words as a LinkedIn recommendation. You decide (see section 12).

---

## 7. Regions — where your working day meets theirs

Each region's 9:00–17:00 working day in Indian time (IST), as of late September 2026. Europe shifts one hour later from 25 Oct, the US from 1 Nov, and Sydney one hour earlier from 4 Oct.

| Region | Their 9:00–17:00 in IST | Overlap with a 9:30–18:30 IST day |
|---|---|---|
| UAE (Dubai), UTC+4, Mon–Fri | 10:30–18:30 | 8h: full day |
| Saudi Arabia (Riyadh), UTC+3, Sun–Thu | 11:30–19:30 | 7h |
| EU (Berlin, Amsterdam), CEST | 12:30–20:30 | 6h |
| UK (London), BST | 13:30–21:30 | 5h |
| US East (New York), EDT | 18:30–02:30 | none: your evening |
| US West (San Francisco), PDT | 21:30–05:30 | none: your night |
| Singapore, UTC+8 | 06:30–14:30 | 5h: your morning |
| Australia (Sydney), AEST | 04:30–12:30 | 3h: your early morning |

### India — home market
- **Why:** you're in it, you share the whole working day, you can meet clients in person, and payment is domestic (INR, no FEMA paperwork). AI/ML hiring in India grew 31% year on year, with Hyderabad fastest at +48%, and more than 1,200 global capability centres here now run AI.
- **How to reach them:** your own network, IIT Madras alumni, Hyderabad startup and GCC circles, LinkedIn, and referrals from the Masai community.
- **Tone:** relationship first, and a quote rather than a rate card.
- **Money:** INR; invoice from your Indian entity, with GST as applicable.
- **Watch:** Indian budgets are usually lower than US ones for the same work. Price by outcome, and keep your calendar for the higher-value engagements abroad.

### United States — wave 1
- **Why:** $37B of enterprise GenAI spend in 2025; healthcare and legal lead vertical AI. You already have US ties: Bridgetown (NJ), Walker Sands (Chicago), Intellectyx.
- **How to reach them:** AI-search visibility, referrals, content, and small-volume personal outreach to founders. Founders reply to cold email more than C-level executives do (0.57% vs 0.42%), and companies with under 10 staff reply most (0.72%).
- **Tone:** direct and ROI-first. Put numbers in the headline.
- **Compliance:** a HIPAA BAA for health data; SOC 2 questionnaires; state laws (California and Texas now, Colorado's narrower law from 2027).
- **Money:** USD; 45-day terms are the average, and 43% of invoices are paid late.

### UAE — wave 1
- **Why:** #1 in the world for AI use (70% of working-age people). The government plans to run 50% of its sectors on agentic AI within two years. Full working-day overlap with you, and about a 4-hour flight.
- **How to reach them:** relationships first: LinkedIn, WhatsApp and in-person meetings. GITEX Global, 7–11 Dec 2026, Expo City Dubai. IIT alumni and the Indian business community are warm doors.
- **Tone:** courteous, with small talk before business and prompt replies. English is fine for business.
- **Compliance:** the federal data protection law is in force, but its regulations are still pending. DIFC Regulation 10 covers AI systems. Health data generally must stay in the UAE.
- **Money:** ~47-day terms and 58% paid late, so take deposits.

### United Kingdom — wave 2
- **Why:** 29% of businesses use AI (June 2026), up 8 points in a year. £550/day median for GenAI contractors. Afternoon-to-evening overlap with you.
- **How to reach them:** referrals and partners; London Tech Week (June). Public-sector work (G-Cloud 15) goes through UK partners.
- **Tone:** understated; salesy copy puts UK buyers off. Use UK spelling in UK outreach.
- **Compliance:** UK GDPR plus the IDTA or Addendum for data going to India. The Data (Use and Access) Act rules on automated decisions apply from Feb 2026.
- **Money:** GBP; 51% of B2B invoices are paid late.

### EU (Germany, Netherlands) — wave 2
- **Why:** 57% of German firms with 20+ staff now use AI, up from 36%. Northern Europe leads adoption.
- **How to reach them:** partners and events (Web Summit Lisbon, 9–12 Nov 2026). Fast, complete answers on compliance paperwork win deals.
- **Tone:** precise and documented. "GDPR compliant" on its own isn't believed.
- **Compliance:** a DPA (AVV in Germany) with technical-measures annex, SCCs and a transfer assessment, since India has no EU adequacy decision. AI Act Art. 50 disclosure applies now; high-risk deadlines moved to Dec 2027.
- **Money:** EUR; 60-day cap on B2B terms unless agreed otherwise.

### Saudi Arabia — wave 3
- **Why:** 2026 is the national "Year of AI"; 33% of businesses use AI, with finance at 53%.
- **How to reach them:** repeat visits, trust before business, through local partners. LEAP, 12–15 Apr 2027, Riyadh. The work week is Sun–Thu.
- **Tone:** of the Gulf markets, Arabic matters most here. Plan a bilingual landing page before this wave.
- **Compliance:** the data protection law is fully in force (fines up to SAR 5m); government data must stay in-Kingdom. Government contracts of SAR 1m+ require a regional headquarters, so go through partners.
- **Money:** SAR; 5–20% withholding tax on service fees to non-residents. **[CA]** Get tax advice first.

### Singapore & Australia — opportunistic
- **Singapore:** 63% AI use. Budget 2026 gives a 400% tax deduction on AI spend up to S$50K a year, a ready-made sales hook. Their day is your morning.
- **Australia:** 44% of SMEs are adopting AI. From 10 Dec 2026, privacy policies must disclose automated decision-making. Their day is your early morning.

---

## 8. Lead channels — the site converts; these bring people to it

In consultant surveys, more than half get 60% of their business from referrals, and 60% found their first client that way. Solo AI consultants report the same things working: referrals, content, growing existing clients, and direct outreach. Ranked for you:

1. **Your warm network, worldwide.** Former managers and colleagues (Atlas, Bluekyte, Open Data Fabric), Balihans, Walker Sands, Intellectyx, ShaktyAI, IIT Madras alumni in the US and the Gulf, and the Masai network. Write a list of 50 people and send each a personal note with your offers and one question: "Who do you know who's stuck taking an AI feature to production?" Leave Bridgetown's clients and prospects off the list.
2. **Agency partnerships (white-label).** You've already proved this works: your Walker Sands project came through Balihans. Many marketing agencies and dev shops in the US, UK and UAE sell AI but have no senior AI engineer. Add a Partners page with white-label terms and pitch 20 agencies. In consultant surveys, joint ventures bring in 12% of clients, three times LinkedIn outreach.
3. **Founder-led content on LinkedIn.** One post a week built on the blueprint's four post ideas plus the origin story. 90% of decision-makers say consistent thought leadership makes them more receptive to outreach, and Jason Liu's consulting ran on a content flywheel.
4. **Small, personal outreach with a door-opener.**
   - Benchmarks: cold email averages a 0.45% reply rate; well-personalised campaigns reach 5–10%. The first follow-up adds 40–50% more replies. On LinkedIn, 28.5% accept a connection request and 10.4% reply to a message.
   - So send 10 a day, not 1,000. Open each with the AI Visibility Snapshot or a 2-minute Loom on their AI feature, in 50–125 words.
5. **AI search and use-case pages.** 94% of buyers use AI chatbots while researching. Traffic from AI is small (0.5%) but converts about 3× better. Service pages, FAQs and case studies with numbers are what get cited. llms.txt now looks even weaker: 97% of llms.txt files get zero requests (Ahrefs). Keep it as a cheap extra.
6. **Two events a year, ideally with a talk.** GITEX Global (Dubai, 7–11 Dec 2026) for the UAE wave, then LEAP (Riyadh, Apr 2027) or London Tech Week (June). Research on management consultants found that "visible experts" who speak and publish bill 9–17× the average rate.
7. **One marketplace as a side pipeline.** A.Team (senior, US clients, $130–200/hr for senior AI engineers), Contra (0% commission) or Braintrust (0% fee for talent). Upwork's AI consulting category grew 51% in Q2 2026, but it takes a 0–15% fee and invites price comparison. Pick one and link it to your site. Don't build the business on it.

---

## 9. Site changes — what changes in the v1 blueprint

| Area | Blueprint v1 | For global clients |
|---|---|---|
| Navigation | Work · How I build · Writing · Now | Work · Services · How I work · Writing · **Book a call** |
| Hero | "I make LLM systems behave in production." | "I make AI systems behave in production." + buyer sub-line; primary button "Book a 30-min call" |
| New homepage blocks | n/a | What I can build for you (use-case grid) · Ways to work together (the offer ladder) · How engagements run (3 steps) · Working-hours strip · Trust strip ("NDA-first · your cloud · IP is yours · USD/GBP/EUR/AED") |
| New pages | /work, /now, /writing | + /services/[offer] · /how-i-work · /partners · /book · /use-cases/[x] (only with a real case) |
| Case studies | Engineering story | + business layer on top; filter by industry and use case |
| Contact | "Open to: Senior AI roles" | Remove job-seeking lines from the site. Use a form with at most 5 fields plus instant booking (Cal.com detects the visitor's time zone). Booking on the spot turns 66.7% of form fills into meetings, vs ~30% without it. |
| Social proof | Logos only; testimonials later | 2–3 named testimonials before outreach (your call) |
| "Ask my work" | Answers questions | Also suggests the right offer and the booking link |
| Language & money | Mixed spelling | US English sitewide (largest market); prices in USD, with invoices available in GBP/EUR/AED. A Saudi Arabic page comes in wave 3. |
| llms.txt | Cheap extra | Lower priority still. Service pages and FAQs matter more for AI citations. |

---

## 10. Operations — before your first global invoice

### India's export-of-services rules change on 1 October 2026
New FEMA regulations for exporting goods and services take effect on 1 Oct 2026. A single **Export Declaration Form (EDF)** replaces SOFTEX, filed through your bank, and payment must arrive within **15 months** of the invoice. Sources disagree on filing timing for non-software services, so **[CA]** confirm the process with your bank and CA before your first invoice.

### Business structure [CA]
- **Start as a proprietor.** It's the cheapest option (Udyam registration is free) and qualifies for presumptive tax. The catch is unlimited personal liability.
- **LLP or Private Limited** once revenue or risk grows. Both limit liability. A Pvt Ltd is best if you'll raise money; its name, CIN and registered office go on every invoice.
- **Skip a US LLC or UAE free-zone company** unless a client insists. They trigger overseas-investment (ODI) rules, a possible "managed from India" tax residency (POEM), and for a US LLC a $25,000 penalty per missed IRS Form 5472.

### Tax [CA]
- **GST:** exported services are zero-rated. Registration isn't required until turnover, including exports, passes ₹20L. Once registered, file an LUT (Form RFD-11) every year and endorse export invoices.
- **Income tax:** presumptive tax treats 50% of receipts as profit, up to ₹75L if almost all receipts are non-cash. Under the Income-tax Act 2025 it moved from s.44ADA to s.58 with the same limits. Advance tax is due by 15 March.

### Contracts & insurance [Lawyer]
- Mutual NDA; MSA plus a statement of work per project; explicit IP assignment on payment, with a carve-out for your pre-existing IP.
- Liability capped at 12 months' fees, the most common negotiated cap.
- DPA with EU Standard Contractual Clauses for GDPR clients; UK IDTA/Addendum.
- Professional indemnity and cyber cover from Indian insurers. Ask the broker for cover that includes **US and Canada**, which is often excluded.

### Getting paid

| Option | Fees and terms found | Notes |
|---|---|---|
| Skydo | $19 up to $2K; $29 for $2K–10K; 0.3% above $10K; plus GST | Claims zero FX margin and an instant FIRA |
| Wise Business | Account details in 8+ currencies; varying conversion fee; +$2 per payout for an automatic e-FIRC | Onboards proprietors, LLPs and Pvt Ltds; new Hyderabad hub |
| Payoneer | Local receiving free; conversion 1–4%; cards 2.9% + $0.49 | $29.95/yr if under $6K received in 12 months |
| Stripe | n/a | New Indian accounts are invite-only |
| Direct SWIFT | ~1.5–3% FX markup + $30–50 (third-party estimate) | Fine for large invoices |

### Put on the site
- Legal or trading name, entity type and city (plus CIN and GSTIN once you have them).
- Invoicing currencies and payment methods; "W-8BEN / W-8BEN-E on request" for US clients.
- "NDA before discovery"; MSA, SOW and DPA with SCCs available on request.
- The data-handling statement from section 6.
- A security page, with a pre-filled CAIQ-Lite questionnaire (free, 124 questions).
- Insurance, only once it's bought. No SOC 2 or ISO claims.

### Before the first global client
1. **[Lawyer]** Employment contract reviewed; written consent, or a leaving date.
2. Excluded clients and industries written down; separate laptop, email and accounts.
3. **[CA]** Structure chosen.
4. Business bank account; Udyam; GST and LUT when needed.
5. Payment rail chosen; e-FIRA and the new EDF process confirmed with the bank.
6. **[Lawyer]** Contract templates: NDA, MSA, SOW, DPA + SCCs, IP assignment.
7. Form W-8BEN ready.
8. Indemnity and cyber insurance quote, including US/Canada.
9. Privacy notice, data-handling statement, CAIQ-Lite.
10. **[CA]** Advance tax calendar.

---

## 11. 90-day plan — from portfolio to pipeline

It runs alongside the blueprint's 30-day build. The targets are goals to steer by, not forecasts.

### Days 1–15 — Clear the ground
- [ ] Read your employment contract; get written permission or set a switch date
- [ ] Decide: clients-first site, and your weekly capacity
- [ ] Meet a CA: entity, GST LUT, payments
- [ ] Ask for 3 testimonials

### Days 16–45 — Build the offer layer
- [ ] Services, How I work and Book pages live
- [ ] Business layer on the 4 case studies
- [ ] Contract pack drafted with a lawyer: NDA, MSA, SOW, DPA
- [ ] Warm list of 50 and partner list of 20 agencies

### Days 46–75 — Start conversations
- [ ] Personal notes to the warm list
- [ ] 10 personal outreach messages a day, each with a Snapshot or Loom
- [ ] 2 agency partner calls a week
- [ ] One LinkedIn post a week

### Days 76–90 — Convert & compound
- [ ] Goal: 8–12 discovery calls held
- [ ] Goal: 2 paid Sprints or Audits
- [ ] Book GITEX Dubai (7–11 Dec) if the UAE wave is on
- [ ] Turn the first engagement into a case study + testimonial

**Track monthly:** calls booked, show-up rate, proposals sent and won, pipeline by region, average deal size, and where each client came from (referral, partner, content, outreach, search). After three months, double down on whichever source produced the paid work.

---

## 12. Your decisions — seven calls only you can make

| # | Decision | Recommendation |
|---|---|---|
| 1 | What is the site for: clients or jobs? | **Clients.** A page that says both "hire me full-time" and "buy my services" convinces neither reader. Keep job signals on LinkedIn. |
| 2 | Your current employment | **Required before outreach.** Get written permission for outside consulting, or pick a date to go independent. Everything else waits on this. |
| 3 | Capacity: part-time or full-time independent? | **Shapes every offer.** Next to a full-time job you have perhaps 12–15 hours a week. That fits one Sprint, Audit or retainer at a time, not a 6-week pilot. Stretch the timelines, or go full-time. |
| 4 | Testimonials in v1? | **Yes, 2–3.** For client acquisition they're the strongest trust signal after referrals. |
| 5 | Brand: your name, or a studio name? | **Your name now.** Buyers are hiring you, and your name carries the IIT Madras and MentionNow story. A studio name can come when you hire. |
| 6 | MentionNow as a door-opener | **Agree with co-founders.** The AI Visibility Snapshot helps both businesses, but it's a shared company asset. |
| 7 | Spelling and currency | **US English.** Quote in USD abroad and INR at home; the site now says invoices in INR, USD, GBP, EUR or AED. |

---

## 13. Progress log

| Date | What changed | Result |
|---|---|---|
| 2026-09-22 | Global plan created. Starting point: client-readiness 2.6/10; no offers, no trust page, no lead channels | — |
| | | |

---

## Sources

**Buyers, pricing and consultant sites**
- [6sense: 2025 buyer experience report](https://6sense.com/science-of-b2b/buyer-experience-report-2025/)
- [G2: half of B2B software buyers start research in AI chatbots (Mar 2026)](https://www.prnewswire.com/news-releases/new-g2-research-half-of-b2b-software-buyers-now-start-their-research-with-ai-chatbots-302742807.html)
- [Hinge: how buyers buy professional services](https://hingemarketing.com/library/article/new_study_highlights_how_buyers_buy_professional_services)
- [Clutch: how businesses buy B2B services](https://clutch.co/report/b2b-buying-process-how-businesses-purchase-b2b-services-software) · [Clutch: AI development pricing](https://clutch.co/developers/artificial-intelligence/pricing)
- [Consulting Success: consulting statistics](https://www.consultingsuccess.com/consulting-statistics) · [marketing for consultants study](https://www.consultingsuccess.com/marketing-for-consultants-study)
- [TrustRadius: B2B buying disconnect](https://solutions.trustradius.com/vendor-blog/2024-b2b-buying-disconnect-the-year-of-the-brand-crisis/)
- [LangChain: State of Agent Engineering](https://www.langchain.com/state-of-agent-engineering)
- [Menlo Ventures: state of GenAI in the enterprise 2025](https://menlovc.com/perspective/2025-the-state-of-generative-ai-in-the-enterprise/)
- [MIT NANDA via Fortune](https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/)
- [Upwork Q2 2026 earnings call](https://www.investing.com/news/transcripts/earnings-call-transcript-upwork-tops-q2-2026-eps-estimates-but-stock-sinks-on-outlook-93CH-4850502)
- [A.Team: AI engineer rates](https://www.a.team/talent/guides/ai-engineer-rates) · [IT Jobs Watch: UK generative AI contract rates](https://www.itjobswatch.co.uk/contracts/uk/generative%20ai.do)
- [Parlance Labs services](https://parlance-labs.com/services.html) · [Ionio](https://www.ionio.ai/) · [Iwana Labs](https://iwanalabs.com) · [Revenant Systems audit](https://revenantsystems.co.uk/packages/ai-production-readiness-audit/)
- [Fractional AI: Zapier case study](https://www.fractional.ai/case-study/the-power-of-llm-evals-how-fractional-ai-partnered-with-zapier-to-reduce-hallucinations-by-over-80)
- [Layer3 Labs: AI consulting rates](https://www.layer3labs.io/guides/ai-consulting-rates-pricing) · [Iternal: fractional chief AI officer](https://iternal.ai/fractional-chief-ai-officer)
- [Jason Liu: everything I know about consulting](https://jxnl.co/writing/2024/08/26/everything-i-know-about-consulting/)

**Lead channels and conversion**
- [Belkins: cold email response rates](https://belkins.io/blog/cold-email-response-rates) · [Instantly: reply benchmarks](https://instantly.ai/blog/cold-email-reply-rate-benchmarks/)
- [Expandi: LinkedIn outreach benchmarks 2026](https://expandi.io/blog/linkedin-outreach-benchmarks-2026/)
- [Edelman–LinkedIn: B2B thought leadership 2024](https://www.edelman.com/expertise/Business-Marketing/2024-b2b-thought-leadership-report)
- [Hinge: the visible expert advantage](https://hingemarketing.com/blog/story/new-research-on-the-visible-expert-advantage-in-management-consulting)
- [Chili Piper: form conversion benchmarks](https://www.chilipiper.com/post/form-conversion-rate-benchmark-report)
- [Orbit Media: conversion rates from AI search](https://www.orbitmedia.com/blog/conversion-rates-ai-search/) · [Ahrefs: llms.txt study](https://ahrefs.com/blog/llmstxt-study/)
- [Google: spam policies](https://developers.google.com/search/docs/essentials/spam-policies)

**Regions and regulation**
- [Microsoft: global AI diffusion 2026](https://blogs.microsoft.com/on-the-issues/2026/05/07/the-state-of-global-ai-diffusion-in-2026/)
- [UAE Cabinet: agentic AI across 50% of government](https://uaecabinet.ae/en/news/under-directives-of-uae-president-and-in-world-first-mohammed-bin-rashid-reveals-new-uae-government-framework-to-deploy-agentic-ai-across-50-of-government-sectors-operations-within-two-years) · [GITEX Global 2026](https://www.gitex.com/gitex-global-2026)
- [trade.gov: UAE business travel](https://www.trade.gov/country-commercial-guides/united-arab-emirates-business-travel) · [Saudi Arabia business travel](https://www.trade.gov/country-commercial-guides/saudi-arabia-business-travel)
- [ONS: AI in UK businesses](https://www.ons.gov.uk/businessindustryandtrade/business/businessservices/articles/artificialintelligenceinukbusinesses/2023to2026) · [Bitkom (Sep 2026)](https://www.bitkom.org/Presse/Presseinformation/Erstmals-nutzt-Mehrheit-Unternehmen-KI)
- [European Commission: AI Omnibus enters into force](https://digital-strategy.ec.europa.eu/en/news/ai-omnibus-enters-force) · [EU AI Act Article 50](https://artificialintelligenceact.eu/article/50/)
- [ICO: international transfers](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/international-transfers/) · [Travers Smith: UK automated decision-making reforms](https://www.traverssmith.com/knowledge/knowledge-container/uks-data-protection-reforms-take-effect-a-new-era-for-automated-decision-making/)
- [Carpe Datum: Colorado AI reset](https://www.carpedatumlaw.com/2026/05/colorados-ai-reset-two-weeks-a-white-house-callout-and-a-pivot-away-from-the-eu-model/)
- [Morgan Lewis: UAE AI and data authority](https://www.morganlewis.com/pubs/2026/06/uae-establishes-federal-authority-for-artificial-intelligence-and-data)
- [King & Spalding: Saudi PDPL transfers](https://www.kslaw.com/news-and-insights/international-personal-data-transfers-under-saudi-arabias-data-protection-law) · [PwC: Saudi withholding taxes](https://taxsummaries.pwc.com/saudi-arabia/corporate/withholding-taxes)
- [Singapore Budget 2026: AI](https://www.singaporebudget.gov.sg/budget-speech/budget-statement/c-harness-ai-as-a-strategic-advantage)
- [Atradius: US payment practices 2025](https://group.atradius.com/dam/jcr:5609b617-ac29-4e30-8b01-0663a01d94bd/payment-practices-barometer-us-2025-en.pdf)

**Employment, tax, payments and contracts (India)**
- [Bridgetown Consulting Group](https://bcgnj.com/)
- [Mondaq: moonlighting in India](https://www.mondaq.com/india/contract-of-employment/1740468/moonlighting-and-dual-employment-misconduct-or-a-legitimate-economic-right) · [DLA Piper: restrictive covenants in India](https://knowledge.dlapiper.com/dlapiperknowledge/globalemploymentlatestdevelopments/india-enforcement-of-post-termination-restrictive-covenants-in-employment-contracts)
- [NJ Supreme Court: employee duty of loyalty (1999)](https://law.justia.com/cases/new-jersey/supreme-court/1999/a-121-97-opn.html)
- [Business Standard: Infosys allows gig work with consent](https://www.business-standard.com/article/companies/infosys-allows-employees-to-take-up-gig-work-with-managers-prior-consent-122102100014_1.html)
- [ClearTax: section 44ADA](https://cleartax.in/s/section-44ada) · [TaxGuru: s.58 replaces 44AD/44ADA](https://taxguru.in/income-tax/presumptive-taxation-simplified-income-tax-act-2025-merges-44ad-44ada-44ae.html)
- [EY: RBI export–import guidelines 2026](https://www.ey.com/en_in/technical/alerts-hub/2026/03/rbi-issues-exim-guidelines) · [TaxGuru: monthly EDF from Oct 2026](https://taxguru.in/rbi/service-exporters-file-monthly-edf-fema-export-regulations-october-2026.html)
- [IRS: Form W-8BEN](https://www.irs.gov/forms-pubs/about-form-w-8-ben) · [IRS: Form 5472](https://www.irs.gov/instructions/i5472)
- [Skydo](https://www.skydo.com/) · [Payoneer India pricing](https://www.payoneer.com/en-in/about/pricing/) · [Wise: Indian businesses](https://wise.com/help/articles/71lNXW0Ls3gEFhUH8PtodV/receiving-payments-for-indian-businesses) · [Stripe: invite-only in India](https://support.stripe.com/questions/stripe-accounts-are-invite-only-in-india)
- [Legal Evolution: market limitation of liability](https://www.legalevolution.org/2022/08/what-is-market-for-limitation-of-vendor-liability-a-look-at-the-data-322/)
- [European Commission: SCCs Q&A](https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection/new-standard-contractual-clauses-questions-and-answers-overview_en) · [CSA: what is CAIQ](https://cloudsecurityalliance.org/blog/2021/09/01/what-is-caiq)

---

*Prices and targets are starting points drawn from market data, not guarantees. Legal, tax and employment points are general information, not advice: confirm them with a chartered accountant and a lawyer.*
