# Portfolio Blueprint — Srinivas Dharavath

**Prepared:** 22 Sep 2026
**Based on:** `srinivas_full_portfolio.md` as it stood on this date
**Scope:** v1 of the portfolio. Items from `Next.txt.` are future plans, parked in section 14.
**Research:** 20 AI engineers' sites · 12 IIT & Indian AI profiles · 2026 hiring and AI-search data
**Live version (with design mockup):** https://claude.ai/artifact/8rshMEhp4vLCNNtfTAeNhc
**Companion:** [portfolio_global_plan_2026-09-22.md](portfolio_global_plan_2026-09-22.md) adds the layer for winning clients globally: offers, trust, regions and lead channels. Its section 9 lists what changes in this blueprint.

> **Your work is top-tier. The page isn't yet.**
>
> The portfolio .md holds real production work, more than most AI engineers can show: agents, RAG, real-time voice, a fine-tuned LLaMA, cloud infrastructure, a startup, and teaching. But it runs to 5,400 words in 36 sections, and much of it is repeated three times. A hiring manager skimming for 30 seconds sees a list of skills, not a senior engineer.

### The shift at a glance

| | Before (22 Sep 2026) | Target |
|---|---|---|
| Sections | 36 | 9 homepage blocks + 4 case-study pages |
| Homepage words | 5,400 | ~1,200 |
| Diagrams | 20 ASCII | 4 drawn |
| Outcome numbers | 6, each repeated 3× | 15+ with baselines |

---

## 1. The verdict — scorecard

Scored against the profiles in the research, on nine things reviewers check. "Now" is the portfolio as of 22 Sep 2026; "After" is where it should land after the 30-day plan.

| Dimension | Now | After | Why |
|---|:---:|:---:|---|
| Substance of the work | 8 | 9 | Production systems in healthcare, risk & compliance, legal and enterprise, plus fine-tuning and voice. Rare range. |
| Technical depth on the page | 6 | 9 | Features are listed but decisions aren't. The best profiles explain trade-offs. |
| Positioning clarity | 4 | 9 | Ten identities in the opening. A reader keeps one. |
| Proof of impact | 4 | 8 | Six outcome numbers, each repeated three times, most without a baseline. |
| Evals & quality measurement | 2 | 8 | No project says how quality was measured, yet evals appear in 59.7% of AI-first job posts. |
| Public proof | 1 | 7 | No GitHub, writing, talks or demos linked. Capped at 7 in 30 days: this builds over months. |
| Social proof | 3 | 5 | v1 has logos and named employers. Testimonials come later, and that's where the rest of this score comes from. |
| Editing & scannability | 3 | 9 | 5,400 words, 36 sections, 20 ASCII diagrams. |
| Findable by search & AI | 2 | 9 | No site, structured data or llms.txt yet, and you run a GEO company. |
| **Average** | **3.7** | **8.1** | |

- **Where you already beat most AI portfolios:** the range of real, shipped systems. A fine-tuned model, a live voice agent, MCP automation, and a startup, all backed by cloud infrastructure you set up yourself, is rare at four years of experience.
- **Where you lose ground:** the page never says what quality looked like or how you measured it. There is no public trace of your thinking (writing, code, demos), and no one else vouches for you. None of these gaps needs new work, only surfacing what you already did.

---

## 2. What the top AI profiles have in common

I studied the sites of 15 well-known AI practitioners (Chip Huyen, Eugene Yan, Hamel Husain, Andrej Karpathy, Simon Willison and others), 5 working AI engineers whose sites did well on Hacker News, 12 IIT and Indian AI profiles, and hiring data from 2025–26.

### A one-sentence mission, not a job title plus a stack
- Chip Huyen: *"I work to bring AI into production."*
- Eugene Yan: *"…help build safe, reliable AI systems that scale."*
- Karthik Narasimhan (IIT Madras, co-author of the first GPT paper): *"I develop intelligent autonomous agents that interact with and adapt to complex, real-world environments."*
- Average portfolios open with "Software Engineer".
- **For you:** "I make LLM systems behave in production." (See Positioning.)

### They own one idea
- Hamel Husain owns "evals". swyx owns "Learn in Public". Jay Alammar owns "visualizing machine learning". One idea repeated for years became the name.
- **For you:** two ideas you can credibly own: **LLM reliability in production** (contracts, fallbacks, cost) and **AI visibility** through MentionNow. Choose one as the theme of your writing, and let the other support it.

### Writing is the portfolio
- 12 of the 15 well-known sites put essays on the homepage.
- Jason Liu closed a $140K, three-month engagement after three sales calls, because the founder kept seeing his posts shared in their team Slack.
- Several sites have a "Start here" list of their 3–5 best pieces.
- **For you:** no writing today. Four posts you've already lived are in Stand-out moves. Start with one.

### Numbers about adoption and business, with context
- Philipp Schmid: revenue *"from $0 to ~$100 million in 4 years"*.
- Shreya Shankar: *"3.7k+ GitHub stars, used by public defenders, climate scientists"*.
- Laszlo Bock's résumé formula: *"Accomplished [X] as measured by [Y], by doing [Z]"*. Pair every percentage with an absolute number and a baseline.
- **For you:** your ~70%, ~40% and ~30% have no baseline or scale behind them. See Numbers to find.

### Evals and cost decide who reads as senior
- Across 6,964 AI engineering job posts (Feb–Aug 2026):
  - eval skills appear in 59.7% of AI-first roles, and agents in 71.6%;
  - **MCP rose from 9.9% to 17.6%**, and **LangGraph from 7.4% to 17.2%**;
  - **fine-tuning fell from 17.1% to 12.7%**.
- Husain and Shankar call error analysis *"the most important activity in evals"*.
- Interviews test cost and latency arithmetic, and when *not* to use RAG or fine-tuning.
- **For you:** you already have the rising skills: agents, MCP, LangGraph and cost tracking. What's missing is an eval story. Present the LLaMA fine-tune as judgment (when fine-tuning beats RAG), not as the headline.

### No skills grids. Credibility goes in the sentences.
- None of the 15 well-known sites has a standalone skills section. Employers are named inside sentences ("core dev of NeMo" at NVIDIA).
- Skill-percentage bars and keyword lists are the mark of average portfolios.
- Anthropic's agent guide warns that frameworks *"obscure the underlying prompts and responses"*, so projects that are mostly framework calls read as shallow.
- **For you:** your four stack sections become one small logo group. Your section 26 ("single LLM, RAG, workflow, agent or multi-agent?") already shows that judgment, so put it up front.

### Top IIT alumni lead with the work. IIT comes second.
- Aravind Srinivas (IIT Madras) on LinkedIn: *"Cofounder & CEO, Perplexity"*, with no IIT.
- Rishabh Agarwal (IIT Bombay) mentions IIT in the last sentence of his bio.
- Creators with big followings put it second, e.g. *"MIT PhD | IIT Madras | Building Vizuara"*.
- IIT Madras also runs online BS and diploma programmes, so "IIT Madras" alone is now ambiguous.
- **For you:**
  - Write "IIT Madras (B.Tech + M.Tech)" near the end of your headline.
  - Turn on LinkedIn's "Show education in my intro".
  - Tell the naval-architect story in About and in a post, not in the headline. Non-CS-to-AI origin posts by IIT Madras alumni have drawn 2,000+ reactions.

### Something to try, and one human line
- Eugene Yan's AI-coach prototype has a phone number you can call.
- Chip Huyen's bio starts with *"chasing grasshoppers in a small rice-farming village in Vietnam"*.
- Karpathy's site is plain and fast (*"allergic to 500-pound websites"*).
- Each site has one clear call to action and states what the person is doing now.
- **For you:** a voice-survey demo people can call, or an "Ask my work" agent, is your version of Eugene's phone number. Add one sentence about yourself that isn't about work.

### The market you're selling into
- **Naukri JobSpeak, Aug 2026:** AI/ML hiring up 31% year on year, with **Hyderabad fastest at +48%**. Senior bands are growing fastest.
- **Remote work:**
  - about 85% of remote postings are limited to one country, and under 4% are open worldwide;
  - employer-of-record hiring into India grew 63.7% from the UK, 61.5% from Australia and 24.1% from the US.
- **Consulting:** sell the outcome: *"If you're losing customers because your app is hallucinating… I can help."*
- **For you:** win on provable specialisation, not price. Hyderabad GCCs and UK, EU and Australian employers are your best-growing markets. Your case studies double as consulting pitches if each one opens with the business problem.

---

## 3. Positioning — one sentence, one identity

The current opening names ten identities: Generative AI, Agentic AI, LLM Engineering, RAG, Multimodal, Fine-tuning, Backend, Cloud, MLOps and AI Product. A reader keeps one.

**The thread through your work.** What was hard in each project was never "calling an LLM". It was making the LLM *behave*:

| Project | What was actually hard |
|---|---|
| PTBuddy (Anya assistant) | Guardrails that escalate to a doctor, a JSON contract the UI can trust, and a fallback for when every model fails |
| TPRM | A QA agent that checks the other agents before the next stage runs |
| Voice survey | Turn detection and interruption handling so a live call doesn't break |
| MCP tickets | Deduplication and parent/child links so automation doesn't spam the queue |
| PTBuddy, again | Per-call token, latency and cost tracking, so you know what it costs to run |

### Your positioning

> **I make LLM systems behave in production.**
>
> A production AI engineer who ships agents, RAG, voice AI and fine-tuned models that stay reliable, measurable and affordable after launch, from the first requirement to the cost dashboard.

### Your signature: the naval architect
Right now IIT Madras sits at the bottom of the page as an unexplained line, "Naval Architecture & Ocean Engineering". That's a question mark where you could have a signature. Use it once, in About:

> "I trained as a naval architect at IIT Madras, where you design hulls to stay stable under loads you can't fully predict. I now do the same for LLM systems."

It explains the career switch, signals rigour, and gives the visual design its idea. No other AI engineer can use this story.

### Proof points to carry everywhere
1. Shipped LLM systems in **healthcare, risk & compliance and legal tech**
2. Fine-tuned **LLaMA 3 8B on 9.75M tokens** of Indian law
3. **~70% less manual work** from MCP-based ticket automation

Fine-tuning is falling in job posts (17.1% → 12.7%), so #2 is a depth signal, not your headline. Swap #3 for a stronger number once you collect them.

### Hero options for the homepage
- **Recommended: "I make LLM systems behave in production."** Sub-line: *Senior AI Engineer · IIT Madras. I've shipped agents, RAG, real-time voice AI and a fine-tuned LLaMA across healthcare, risk & compliance and legal tech, with the contracts, fallbacks and cost tracking that keep them running.*
- **"Agents that hold up after the demo."** Sharper and more memorable, but leans on "agents" alone and undersells the fine-tuning and voice work.
- **"From first requirement to the cost dashboard."** Leads with owning the whole lifecycle. Strong for consulting and client work, weaker for pure engineering roles.

### LinkedIn

**Headline** (142 / 220 characters):
```
Senior AI Engineer · Production agents, RAG & voice AI · LangGraph · MCP · AWS & Azure · Co-founder, MentionNow · IIT Madras (B.Tech + M.Tech)
```
Only the first ~70 characters show on mobile and in search, so the role and niche come first and IIT comes last. Adding "B.Tech + M.Tech" separates the campus degree from IIT Madras's online programmes.

**About**: the lines shown before "see more":
```
I make LLM systems behave in production: agents, RAG, voice AI and fine-tuned models that stay reliable, measurable and affordable after launch.

Right now I'm a Senior AI Engineer at Bridgetown Consulting Group, building PTBuddy, a physiotherapy app whose AI assistant runs on LangGraph + Gemini with streaming, failover and per-call cost tracking.
```

**Use the same name, title and one-line description everywhere** (site, LinkedIn, GitHub, X, MentionNow's team page). Consistent wording is what lets search engines and AI answer engines recognise you as one person.

---

## 4. Structure — from 36 sections to one homepage and four case studies

The homepage is a single scroll that answers, in order: who you are, whether to trust you, what you've built, how you think, and how to reach you. Depth goes on separate case-study pages that people open when they want it.

### Homepage blocks
1. **Hero:** positioning line, one-sentence sub-line, three proof numbers, and two buttons: See the work · Get in touch.
2. **Worked with:** one row of monochrome logos at equal height: employers, clients (with permission) and IIT Madras. No tech logos here.
3. **Selected work (four case-study cards):** PTBuddy · MCP ticket automation · Real-time voice AI · LLaMA 3 legal fine-tune. Each card has the outcome, one number, three decisions and stack tags, and links to its full case study.
4. **More work:** a compact grid of one-liners: Multi-agent TPRM, Enterprise multimodal RAG, Walker Sands knowledge platform, Document intelligence, Qwen 2.5 deployment, Kollect AI, ShaktyAI agents.
5. **How I build:** your six principles (section 26), one line each, plus the delivery lifecycle as one horizontal strip. This is where "end-to-end ownership" lives, stated once.
6. **Beyond the day job:** MentionNow (founder), Masai School (teaching 800+ students), writing and talks. Shows range without looking like five competing jobs.
7. **Experience:** a compact timeline of four roles, with pre-2022 internships on one line and IIT Madras at the root.
8. **Stack:** logos grouped by what you shipped with in production. No proficiency bars, no percentages.
9. **Contact:** email, LinkedIn, GitHub and a booking link; "Open to: Senior AI / LLM / Agentic AI roles · Hyderabad or remote".

### Separate pages
`/work/ptbuddy` · `/work/mcp-tickets` · `/work/voice-ai` · `/work/legal-llama` · `/now` · `/writing` · `/llms.txt`

### Where each of the 36 sections goes

| Current section | Action | Where / why |
|---|---|---|
| 01 About | REWRITE | A 100-word About with the naval-architect line. Drop the ten-item "intersection" list. |
| 02 What I build | CUT | The work cards show this better than a list of categories. |
| 03 How I deliver | MERGE | Becomes the one-line lifecycle strip inside "How I build". |
| 04 PTBuddy (with Anya) | KEEP | Case study #1, the flagship. The HRMS and the ATS become two more cards. |
| 05 Current work | MOVE | MentionNow, Masai and ShaktyAI go to "Beyond the day job". The Walker Sands RAG goes to More work. |
| 06 TPRM | KEEP | More work card. Promote it to a case study if you find a time-saved number. |
| 07 Enterprise RAG | KEEP | More work card. Replace "designed to support thousands" with a load-test result. |
| 08 Voice AI | KEEP | Case study #3. Voice is hot: 22% of a recent YC batch was building with voice (a16z). |
| 09 Doc processing | MERGE | One More work card. |
| 10 MCP tickets | KEEP | Case study #2. It already has the best numbers. |
| 11 LLaMA fine-tune | KEEP | Case study #4. It proves depth beyond API calls. Add how you evaluated it. |
| 12–13 Claude chatbot, metadata | MERGE | Two lines under the Bluekyte role. On their own they read as tutorial-sized. |
| 14 Qwen deployment | KEEP | More work card, with throughput and latency if you have them. |
| 15 Kollect AI | KEEP | More work card, the one with the ~30% number. |
| 16–17 DevOps, Django | CUT | Not projects. They show up in the stack and the experience lines. |
| 18, 19, 28, 36 Skills, tech map, stack, logos | MERGE | Four near-copies of the same list become one Stack section with logos. |
| 20, 21, 29 Experience, timeline | MERGE | One compact timeline. |
| 22 Industries | CUT | FinTech, FMCG and Recruitment have no project behind them. Show domains as tags on the cards instead. |
| 23 Education | MOVE | Into the timeline and the About hook. |
| 24 Certifications | CUT | The current five read as junior. Leave certifications out of v1 (see section 14). |
| 25 Metrics | MOVE | Into the hero proof row and each card, where they have context. |
| 26 Approach | KEEP | Becomes "How I build", compressed to six lines. |
| 27 Architecture showcase | MOVE | Each diagram goes into its own case study, redrawn. |
| 30, 32–35 Positioning, nav, hero, design, statement | CUT | These are notes to yourself. Keep them in a private file, off the site. |
| 31 Contact | KEEP | Contact section and footer. Add GitHub and a booking link. |

---

## 5. Crisp content — say what was hard, what you decided, and what changed

The current document uses "RAG" 37 times, "production" 22 times and "intelligent" 15 times. Repeating a word doesn't make it stick; one well-told decision does.

### Six rules for every line on the site
1. **Outcome first, then how.** "Cut manual ticket work ~70%" comes before "MCP + LangGraph".
2. **X as measured by Y, by doing Z.** "~70%" of what? Give the baseline (hours a week), the scale (emails a day) and how you measured it.
3. **Name the decision.** "I chose rolling summaries over full history because…" is what separates senior from mid-level.
4. **Say how you measured quality.** Evals, test sets, pass rates, human review. One line per project is enough.
5. **Separate "I" from "we".** Say what you personally owned. Hiring leads name overstated ownership as a red flag.
6. **Ban the filler words.** Intelligent, scalable, production-grade, cutting-edge, leveraging. Show them instead, and put the stack in a tag row.

### Before → after rewrites

`[brackets]` = numbers only you can fill in. Nothing here invents a metric.

#### Hero
- **Before:** "I build intelligent AI systems, teach AI/ML engineering, and build products that make AI useful in the real world."
- **After:** **I make LLM systems behave in production.**
- *Why:* three jobs in one sentence becomes one claim the rest of the page proves. Teaching and the startup still appear, lower down.

#### About (≈110 words)
- **Before:** "I am a Senior AI Engineer with hands-on experience designing and deploying intelligent systems across Healthcare, TPRM, LegalTech, FinTech, FMCG, and Recruitment Consulting. My work sits at the intersection of: Generative AI, Agentic AI, LLM Engineering, RAG…" (ten items)
- **After:**

> I trained as a naval architect at IIT Madras, where you design hulls to stay stable under loads you can't fully predict. I now do the same for LLM systems.
>
> In four years I've gone from AWS backends to fine-tuning LLaMA 3 on Indian law, then to shipping agents, RAG and real-time voice AI for healthcare, risk & compliance and enterprise clients. I own the whole path, from requirements and architecture to deployment and monitoring, and I track what matters after launch: latency, cost and failure rate.
>
> I also teach AI/ML to 800+ students at Masai School, and I co-founded MentionNow, which measures how AI engines talk about brands.

#### PTBuddy (with the Anya assistant)
- **Before:** twelve bullets (LangGraph agent, Gemini 2.5 Flash, checkpointing, rolling summarization, bounded memory, JSON contract, follow-up chips, SSE, failover, personalization, plan ranking, keyword fallback).
- **After:**

> **A physiotherapy app that knows when to say "see a doctor"**
>
> PTBuddy helps people in the US manage physiotherapy between doctor visits: an onboarding questionnaire sets the first weekly exercise program, a weekly pain check-in re-ranks the next one, and an in-app assistant called Anya answers with the user's own history in hand. Its first rule is to escalate anything beyond self-managed physio to a doctor. The app draws every reply, including the follow-up chips, from structured JSON, so a malformed response means a broken screen. I built the LangGraph agent around a strict response contract, used rolling summaries to keep memory inside a fixed token budget, and added multi-model failover that ends in a deterministic keyword-scoring fallback. Replies stream over SSE, and every LLM call is logged with its tokens, latency and cost.
>
> `[p95 time-to-first-token]` `[cost / conversation]` `[% passing JSON contract]` `[active users]`

- *Why:* twelve features become three decisions and the reason for each. Your own cost logs already hold most of the missing numbers.

#### MCP tickets
- **Before:** "Built an MCP-enabled intelligent ticket-management system integrating Outlook, SharePoint, ticket-management workflows, LangChain, LangGraph." Impact: ~70% manual effort reduction, ~40% coding effort reduction.
- **After:**

> **~70% less manual ticket work for a B2B support team**
>
> Support staff read every email and call transcript and opened tickets by hand, under SLA. I built MCP tools over Outlook and SharePoint and a LangGraph workflow that reads each message, then categorises, deduplicates, links parent and child tickets, and drafts the reply. Manual review and ticket creation fell about 70%. Because the MCP tools are reusable, each new integration took about 40% less code.
>
> `[emails + transcripts / day]` `[hours / week before → after]` `[duplicate rate caught]`

#### Voice AI
- **Before:** a list of 14 capabilities (outbound calls, caller ID, fallback URLs, call status, WebSocket, Realtime API, dynamic questioning, validation, interruption handling, turn detection, audio, voice, transcription, language).
- **After:**

> **A survey caller that sounds like a conversation, not an IVR**
>
> Twilio places the call and streams audio over WebSockets to the OpenAI Realtime API, which asks questions from a prompt-driven script and checks each answer. The hard part was live-call behaviour, so I tuned turn detection, interruption handling and transcription until respondents could talk over it and still be understood.
>
> `[calls completed]` `[completion rate]` `[median response latency]`

#### LLaMA fine-tune
- **Before:** "Fine-tuned a LLaMA 3 8B model for Indian legal-domain understanding." Dataset, training and infrastructure listed separately.
- **After:**

> **Teaching LLaMA 3 Indian law: 9.75M tokens, one A100**
>
> General models stumble on Indian legal language. I ran LoRA continual pre-training of LLaMA 3 8B on 9.75M tokens from 15 Indian law textbooks: 20+ hours on a single A100, with data preparation and tokenisation done in-house.
>
> `[how you evaluated: held-out perplexity? legal Q&A set?]` `[base → tuned score]`

- *Why:* a fine-tune without an evaluation is the first thing an interviewer asks about. Even a small before/after comparison on 50 legal questions turns this into a senior-level case study.

### Case-study template (each /work page, ≈600–900 words)
```
Title: the outcome in plain words
Role · team size · timeline · company or client (if permitted)

1. Context: who used it and what was at stake (2–3 sentences)
2. The hard part: the constraint that made this non-trivial
3. Architecture: one drawn diagram; hover a node to see what it does
4. Decisions & trade-offs: three, each "chose X over Y because Z"
5. How I measured it: eval set, pass rate, dashboards, human review
6. Results: numbers with baselines and units
7. What I'd do differently: one honest paragraph (reviewers love this)
8. Stack: tags
```

---

## 6. Numbers to find — your strongest numbers are still in your dashboards

You built cost observability, so you're in a better position than most to fill this in. Spend one evening collecting these. Wherever you only have an estimate, say "~" and how you estimated it.

| Project | Numbers to collect | Where they probably are |
|---|---|---|
| PTBuddy / Anya | p95 time-to-first-token · cost per conversation · tokens per month · JSON-contract pass rate · failover events · active users | The CloudWatch token and cost logs you built |
| MCP tickets | Emails and transcripts per day · tickets per month · duplicates caught · hours per week before and after (the basis of ~70%) | Ticket system, a before/after time study |
| Voice AI | Calls placed · completion rate · average call length · response latency | Twilio console, call logs |
| TPRM | Vendors assessed · hours per assessment before and after · agreement with analyst decisions | Project reports, the QA agent's logs |
| Enterprise RAG | Documents and pages indexed · GB ingested · chunks and vectors · p95 query latency · concurrency reached in load tests | Azure Container Apps metrics, load-test reports |
| Walker Sands RAG | Departments · Drive files connected · active users · queries per week | Supabase tables |
| Kollect AI | Messages per month per channel · callbacks tracked · response time before and after (the basis of ~30%) | Pinpoint, Twilio, Power BI |
| Qwen 2.5 deploy | Tokens per second · p95 latency · cost per 1,000 requests · autoscaling range | SageMaker endpoint metrics |
| MentionNow | Brands tracked · prompts × engines run · AI answers analysed · clients and countries | Your own database |
| Masai | 800+ students (have) · sessions taught · feedback score | Programme dashboards |

---

## 7. Design direction — "Lines plan": AI systems drawn like a naval architect

A **lines plan** is the drawing that defines a hull through stations, waterlines and a title block. Use its visual language:
- a faint drafting grid;
- hull curves in the hero;
- architecture diagrams drawn as engineering sheets;
- a title block on each case study.

It's quiet and technical, and only you can credibly use it. (See the live mockup in the artifact link at the top.)

### Hero mockup (content)
- Kicker: `SENIOR AI ENGINEER · IIT MADRAS`
- Headline: **I make LLM systems behave in production.**
- Sub: Agents, RAG, real-time voice AI and fine-tuned models, shipped across healthcare, risk & compliance and legal tech, with the contracts, fallbacks and cost tracking that keep them running.
- Proof row: **~70%** less manual ticket work · **9.75M** tokens of Indian law · **800+** students taught
- Buttons: See the work · Get in touch
- Title block in the corner: `DWG HOME · SHEET 01 · SCALE 1:1 · REV 2026.09`
- Below: "Worked with" logo row (monochrome), then case-study cards with a title block (`DWG 01 · HEALTHCARE · 2026 · BRIDGETOWN`), three metric slots, three decisions, stack tags and a small architecture drawing.

### Palette
| Name | Hex | Use |
|---|---|---|
| Deep water | `#0B1620` | Ground (dark default) |
| Drafting film | `#EEF2F2` | Ground (light) |
| Plate white | `#E3EBED` | Text on dark |
| Station cyan | `#5BC0DB` | Lines, links, diagram edges |
| Signal yellow | `#F2C14E` | Metrics only (and a nod to MentionNow) |

### Type
- **Display:** Archivo, expanded, weight ~720
- **Body:** IBM Plex Sans 400
- **Data & labels:** IBM Plex Mono (e.g. `DWG 01 · p95 1.2s · $0.004 / conv`)

### Motion: one moment, not twenty
- On first load, the hull lines draw themselves in about 1.2 seconds, then stay still.
- On case studies, hovering a diagram node lights up its path and shows one line about what it does.
- Nothing else moves, and all of it is off for anyone with reduced-motion turned on.

### Avoid: the AI-portfolio clichés
~~purple-blue gradient hero~~ · ~~neural-net particle background~~ · ~~robot / brain stock art~~ · ~~typing-effect headline~~ · ~~skill % bars~~ · ~~floating 3D sphere~~ · ~~"Passionate about AI"~~ · ~~40-logo tech cloud~~ · ~~bento grid for its own sake~~ · ~~auto-rotating testimonial carousel~~

---

## 8. Stand-out moves — things only you can do

Editing gets you to good. These get you remembered.

### 1. Make your portfolio the first MentionNow case study *(your unfair advantage · low effort)*
You sell AI visibility, so prove it on yourself:
- Make the site static so AI crawlers can read it, and allow them in `robots.txt`.
- Put every key fact in visible text, with numbers.
- Keep your name and one-line description identical everywhere.
- Add `/llms.txt` and structured data as cheap extras.
- Track what ChatGPT, Claude, Perplexity and Gemini say when asked about you, and show it on the site as "How AI engines describe me", updated monthly.

One move shows hiring managers you understand how AI search works, and gives clients a live MentionNow demo.

### 2. "Ask my work": a small agent over your case studies *(signature feature · medium effort)*
- A chat box that answers only from your own case studies, links to the section it used, and says "I don't know, here's how to reach me" to anything else.
- Signature detail: under each answer, show its **tokens, latency and cost**. That's your observability work, demonstrated live.
- Your whole portfolio is about 8k tokens, so skip the vector database and put it in a cached system prompt for a small model. That's the "when not to use RAG" judgment interviewers test for.
- Add rate limits from day one: one builder saw prompt-injection attempts "within hours" of launch.
- Keep it a side panel, not the hero.

### 3. Publish one eval *(seniority signal · medium effort)*
Use Hamel Husain's method:
1. Read 100 real conversations from one system and group the failures by type.
2. Write a binary pass/fail judge for the biggest failure type, and check it against your own labels.
3. Publish the method, the failure types and before/after results.

One honest eval does more for your seniority than ten framework logos.

### 4. Four posts you've already lived *(public proof · ongoing)*
- "Designing an LLM agent that never breaks its JSON contract"
- "Turn detection is the hard part of voice agents"
- "Fine-tune or RAG? What 9.75M tokens of Indian law taught me"
- "What we learned measuring brands inside ChatGPT answers"
- Plus one for LinkedIn: **"From designing ships at IIT Madras to designing AI agents"**. Non-CS-to-AI origin posts from IIT Madras alumni regularly pass 2,000 reactions.

Pin the best one in LinkedIn Featured.

### 5. 60–90 second demo videos *(shows it's real · low effort)*
A screen recording of PTBuddy's weekly program and the Anya assistant, and of a voice-survey call. Where client work can't be shown, rebuild a clean, anonymised version. Short videos get watched; architecture paragraphs get skimmed.

### 6. A /now page and a teaching clip *(keeps it current · low effort)*
- A /now page: what you're building, learning and testing this month, dated.
- Your case studies name Claude 3.5, GPT-4o and Gemini 2.5, which were right when you built them. /now shows you're on today's models.
- Add one 10-minute clip from a Masai tutorial: proof that you can explain things, which is half of a senior role.

### `/llms.txt`: starting point
```markdown
# Srinivas Dharavath
> Senior AI Engineer (IIT Madras). Builds production LLM
> systems: agents, RAG, real-time voice AI and fine-tuned
> models. Co-founder of MentionNow (AI visibility / GEO).

## Case studies
- [PTBuddy](https://DOMAIN/work/ptbuddy): physiotherapy
  app with a guardrailed assistant and cost tracking
- [MCP ticket automation](https://DOMAIN/work/mcp-tickets):
  ~70% less manual ticket work
- [Real-time voice AI](https://DOMAIN/work/voice-ai)
- [LLaMA 3 legal fine-tune](https://DOMAIN/work/legal-llama)

## About
- [About and experience](https://DOMAIN/#about)
```

### Structured data in `<head>`
```json
{ "@context": "https://schema.org", "@graph": [
  { "@type": "ProfilePage",
    "dateModified": "2026-10-01",
    "mainEntity": { "@id": "https://DOMAIN/#me" } },
  { "@type": "Person", "@id": "https://DOMAIN/#me",
    "name": "Srinivas Dharavath",
    "jobTitle": "Senior AI Engineer",
    "description": "(same sentence as the hero)",
    "worksFor": { "@type": "Organization",
      "name": "Bridgetown Consulting Group" },
    "alumniOf": { "@type": "CollegeOrUniversity",
      "name": "Indian Institute of Technology Madras" },
    "knowsAbout": ["Agentic AI", "RAG", "Voice AI",
      "LLM evaluation", "Model Context Protocol"],
    "sameAs": ["https://www.linkedin.com/in/…",
      "https://github.com/…"] },
  { "@type": "Organization", "name": "MentionNow",
    "url": "https://www.mentionnow.io",
    "founder": { "@id": "https://DOMAIN/#me" } }
] }
```

### What actually moves AI visibility, and what doesn't

**Works**
- **Static HTML.** GPTBot, ClaudeBot and PerplexityBot don't run JavaScript.
- **Allowing the AI search bots** (OAI-SearchBot, Claude-SearchBot, PerplexityBot). **Cloudflare has blocked AI crawlers by default on new domains since July 2025**, so opt in.
- **Bing.** In a 100-query study, 87% of ChatGPT search citations matched Bing's top results. Bing Webmaster Tools now reports your Copilot citations too.
- **Statistics and quotations.** The GEO paper (KDD 2024) measured up to ~40% more visibility in AI answers. Your quantified case studies are GEO content.

**Weak or don't**
- **llms.txt is weak.** Across 300k domains it showed no link to how often AI cites a site. Ship it because it costs nothing and fits your brand, not because it will bring citations.
- **Structured data alone is weak.** In tests, no chatbot picked up a fact that existed only in JSON-LD. Put every fact in visible text and let the markup repeat it.
- **Don't create a vanity Wikidata entry.** It needs serious public references.

**Measure:** MentionNow on your own name, plus Bing's AI Performance report.

---

## 9. Social proof in v1 — logos and named employers

Your logo library is already built, so v1 uses it. Testimonials and certifications are planned for later (section 14).

### Logos: rules that keep them credible
- The best-known AI sites rarely use logo walls; they name employers in sentences. So keep yours to one quiet row: monochrome, equal optical height, labelled **"Worked with"**, not "Trusted by". Put small logos in the experience timeline too, the way Karpathy does.
- Show client logos (Walker Sands, Intellectyx) only after checking your contracts or asking.
- Tech logos live only in the Stack section, grouped, about 25 of them rather than all 70.
- Your logo library and its manifest are already the right foundation. The site should read from the same manifest.

---

## 10. Fix before launch — things a careful reader will notice

| Issue | What to do |
|---|---|
| **Five concurrent roles** | Bridgetown, Masai, ShaktyAI, Balihans and MentionNow at once can read as divided focus to a full-time employer. Present one "day job" and a "Beyond the day job" group. Check your employer's policy on outside work before you publish the ShaktyAI and Balihans roles. |
| ~~A six-month gap, Feb–Aug 2024~~ **Resolved 24 Sep 2026** | There is no gap: Bluekyte ran Feb–Dec 2024, straight after Open Data Fabric ended in Feb 2024. The earlier portfolio file had the wrong start month. |
| **"Senior" for four months** | The title is real. Make the page show senior behaviour to back it: decisions and trade-offs, mentoring (your teaching), owning the full lifecycle, and measuring results. |
| **Soft performance claims** | "Designed to support thousands of concurrent users with sub-second response targets" is a goal, not a result. Replace it with what a load test actually measured, or label it clearly as a design target. |
| **Dated model names** | Keep them in case studies, with dates. They were accurate then. Make the Stack section name model families instead, and let /now show current work. |
| **Confidential details** | Architecture diagrams, client names and metrics may be covered by NDAs. Anonymise where needed ("a US B2B marketing agency"); it costs almost nothing in credibility. |
| **Stray markup in the .md** | Two broken link fragments, `urlShaktyAIhttps://…` and `urlIntellectyxhttps://…`, need to become proper links. Your LinkedIn URL `/in/srinivas77777` is worth changing to a name-based one if it's available. |

---

## 11. Build — a static site that AI crawlers can read

Build v1 as a static site. AI crawlers don't run JavaScript, so static pages are what let ChatGPT, Claude and Perplexity read you. Astro fits well: it ships no JavaScript by default, reaches near-perfect Lighthouse scores, and reads your content from one file per project, which also makes the later items easy to add.

### Content model
```
content/
  profile.yaml        name, headline, links, open-to
  work/
    anya.md           frontmatter: title, outcome,
    mcp-tickets.md      company, dates, domain,
    voice-ai.md         metrics[], stack[], featured,
    legal-llama.md      order · body = case study
    tprm.md           (featured: false → More work)
  experience.yaml     roles, dates, one-liners
  now.md              dated, rewritten monthly
logos/                your existing folders +
                      manifest.json (reused as-is)
```

### How it works day to day
- **New project:** add one Markdown file to `work/` and push. It appears on the homepage if `featured: true`.
- **New logo:** drop the file in and add it to `manifest.json`, exactly as you do today.
- **llms.txt:** generated at build time from the same files, so it always matches the site.
- **Checks:** schema validation fails the build if a project is missing an outcome or a metric's baseline.

### Stack
| Layer | Choice | Why |
|---|---|---|
| Framework | Astro, static output, MDX | Near-perfect Lighthouse scores by default; content collections with schemas catch bad entries at build time |
| Content | YAML + MDX files, one per item | Adding a project means adding a file. The build fails if a field is missing. |
| Diagrams | Hand-drawn SVG for the four flagships; rehype-mermaid for the rest | Rendered at build time, with no diagram JavaScript in the browser |
| Interactivity | Small islands: theme toggle (no flash), "Ask my work", optional ⌘K with a visible button | The rest of the page stays plain HTML |
| Ask my work | Cloudflare Worker → Claude Haiku 4.5, whole site in a cached system prompt, per-IP rate limit | Cheap, with no vector DB to run, and it shows your cost-engineering judgment |
| Hosting | Cloudflare Pages or Vercel, own domain, AI search bots allowed | Free tier, fast worldwide |
| Quality gates | Lighthouse CI 95+, WCAG 2.2 AA contrast, 24px targets, alt text on every logo, labels on icon links | 95.9% of home pages fail basic accessibility checks (WebAIM 2026). Reviewers notice. |

---

## 12. 30-day plan

### Week 1 — Numbers & permissions
- [ ] Collect the numbers in "Numbers to find"
- [ ] Fix the broken links and stray markup in the .md
- [ ] Check NDAs for client names and diagrams
- [ ] Lock the positioning line and headline

### Week 2 — Write
- [ ] Homepage copy, about 1,200 words
- [ ] Four case studies from the template
- [ ] Redraw four architecture diagrams
- [ ] Run one small eval (Anya or LLaMA)

### Week 3 — Build
- [ ] Site with content files and logos
- [ ] llms.txt and structured data; allow AI crawlers
- [ ] Own domain, Lighthouse 95+, mobile check
- [ ] Record two 90-second demos

### Week 4 — Launch & proof
- [ ] Publish the first technical post
- [ ] Update LinkedIn headline, About and Featured
- [ ] Track your own name in MentionNow
- [ ] Ask three people to review the site cold

---

## 13. Progress log — how the profile changed

Add a row whenever you change something, so you can look back later and see what moved the needle. Re-score the scorecard in section 1 every month or so.

| Date | What changed | Where (site / LinkedIn / .md) | Result or reaction |
|---|---|---|---|
| 2026-09-22 | Blueprint created. Starting point: 36 sections, 5,400 words, scorecard average 3.7/10 | `srinivas_full_portfolio.md` | — |
| 2026-09-22 | Global client plan added (companion file). Site becomes client-first: services, How I work, booking; employment contract to clear first | `portfolio_global_plan_2026-09-22.md` | — |
| 2026-10-05 | Design pass: signal-orange / sea-blue palette and hover + trace animations ported from the reference HTML | site | — |
| 2026-10-06 | Two interactions adopted from the reference HTML: an industry filter on the eight systems (chips dim the systems that don't fit and count the ones that do) and the agent simulator in How I build (four scenarios, pipeline, telemetry, run log, rules glow). The simulator note says plainly that it is an illustration, not a recording. | site | — |
| 2026-10-06 | SEO/GEO pass: third-person bio with search vocabulary, client FAQ with FAQPage markup, enriched structured data (WebSite, offers, worksFor, knowsAbout matched to visible text), canonical and robots tags, trimmed description, sitemap.xml, llms.txt, visible updated date, self-hosted fonts, image dimensions, Calendly booking on every call button. Domain still pending: `tools/site_meta.py --domain`. | site, `docs/website.md` | — |
| 2026-10-06 | Navigation adopted from the reference (Services · Work · How I build · Engagements · Terms · About). "Also built" list changed from a 3-column grid to one row per system. Estimate disclaimer under the cases removed at Srinivas's request ("sounds like I am faking"); the estimate status stays in portfolio section 37 G and docs/website.md. | site | — |
| 2026-10-06 | Trust pass for LinkedIn outreach. Palette switched to the Earthy Minimal board (paper, forest, sage, sand, terracotta), light by default. Hero rewritten to "AI systems that work after the demo"; proof row gains the 60-recruiter ATS figure. Cases reordered live-and-measured first, each with a status chip and a "How I know" line; metrics count up on scroll. "Every build ships with" strip above the offers. Honest wording on the estimate note. Open Graph tags + `images/og.png` share card for LinkedIn. Review scorecard below. | site, `docs/website.md` | — |
| | | | |

**Re-score, 6 Oct 2026** (same nine dimensions as section 1; judgement, not measurement): Substance 8 · Technical depth 8 (decisions and verification lines now on every card) · Positioning 8 (one line, one identity) · Proof of impact 6 (two measured figures, five still estimated) · Evals 5 (said, not yet shown) · Public proof 2 (GitHub linked, nothing published) · Social proof 4 (logos; no testimonials, no permissions yet) · Editing 8 · Findable 6 (structured data and share card ready; no domain, no llms.txt yet). **Average 6.1**, from 3.7. The next three points come from measured numbers, one published eval and three testimonials, not from more design.

---

## 14. Later — parked for the next version (not in v1)

These come from `Next.txt.`. They're kept out of v1 on purpose, and the research is saved here so it's ready when you get to them. Two items from that list are already done in this blueprint: the scoring (section 1) and the structure (section 4). The logos are already in your current portfolio, so they stay in v1.

### Testimonials: ask for five, publish three
Ask the people who saw your work up close:
- your Bridgetown lead
- your Atlas Systems manager
- the Walker Sands or Balihans stakeholder
- the MentionNow client at Intellectyx
- the ShaktyAI founder
- the Masai programme lead or a student

How to publish them:
- Only with **written permission**, with their real name, role, company and photo, and link each to their LinkedIn.
- Ask them to post the same words as a LinkedIn recommendation, so anyone can check them.
- Put them next to the work they refer to, or in one "What people say" row, as two or three sentences each and never in a rotating carousel.
- Never write one yourself or have AI draft it: fake testimonials are illegal under the FTC's 2024 rule.
- Disclose any connection, for example when the person is a MentionNow client.

**Request message (copy and personalise):**
```
Hi [Name], I'm putting together my portfolio and would really value a short testimonial from you about [project] — two or three sentences is perfect.

If it helps, anything on: the problem we were solving, what I owned, and what changed after it shipped (even a rough number).

I'll show it with your name, title and photo, and send you the exact wording before anything goes live. Happy to write one for you too.

Thanks!
Srinivas
```

### Certifications: remove the current five
EDA with Seaborn, crosstabs in Google Sheets and an intro to R time series are beginner guided projects. On a Senior AI Engineer's site they *lower* your level. Take them off the site (LinkedIn is fine).

If you want a certification, choose a current one that matches your stack:
- AWS retired the ML Specialty on 31 March 2026, and Microsoft retired AI-102 on 30 June 2026.
- The successors that fit you are the **AWS Certified Generative AI Developer – Professional** (Bedrock apps) and Microsoft's **AI-103 Azure AI App and Agent Developer Associate**.
- Show it in one compact row with a Credly verification link.

A published eval or post still counts for more than either.

### Download as .md, and easy editing
When you add it, a build-time endpoint joins every content file into `/srinivas-dharavath.md`, and the download button links to it so it's never out of date. Playwright in GitHub Actions can render a PDF résumé from the same files. The v1 build (one file per project) is already set up for both.

### About "make it look like I handled big data"
**Don't claim it. Show the scale you actually handled.**
- "Big data" invites follow-up questions (Spark? Kafka? terabytes a day?) within two minutes of an interview. A claim that collapses costs more than it ever earned.
- The term is also dated. What the 2026 AI market pays for is **data-intensive AI systems**: ingestion, chunking, embedding and retrieval at volume, and tokens processed under a cost budget.

Your real volumes are probably bigger than you think: documents indexed across two RAG platforms, messages across four channels, tokens per month through Anya, answers analysed at MentionNow. Collect them. If they're large, a "By the numbers" strip on the homepage says it for you, honestly.

---

## Sources

**AI practitioners' sites**
- [Chip Huyen](https://huyenchip.com)
- [Eugene Yan](https://eugeneyan.com) · [How to interview and hire ML/AI engineers](https://eugeneyan.com/writing/how-to-interview/)
- [Hamel Husain: Evals FAQ](https://hamel.dev/blog/posts/evals-faq/) · [A field guide to rapidly improving AI products (O'Reilly)](https://www.oreilly.com/radar/a-field-guide-to-rapidly-improving-ai-products/)
- [Jason Liu: consulting & writing](https://jxnl.co/writing/2024/10/31/consulting-writing/) · [Everything I know about consulting](https://jxnl.co/writing/2024/08/26/everything-i-know-about-consulting/)
- [Andrej Karpathy](https://karpathy.ai) · [Simon Willison](https://simonwillison.net)
- [swyx: Learn in Public](https://www.swyx.io/learn-in-public) · [The Rise of the AI Engineer](https://www.latent.space/p/ai-engineer)
- [Shreya Shankar](https://www.sh-reya.com) · [Philipp Schmid](https://www.philschmid.de/philipp-schmid)
- [Sebastian Raschka](https://sebastianraschka.com) · [Jay Alammar](https://jalammar.github.io)
- [Brittany Chiang](https://brittanychiang.com) · [Nirant Kasliwal](https://nirantk.com)

**IIT and Indian AI profiles, LinkedIn**
- [Karthik Narasimhan](https://karthikncode.github.io/) · [Rishabh Agarwal](https://agarwl.github.io/)
- [Aravind Srinivas on LinkedIn](https://www.linkedin.com/in/aravind-srinivas-16051987/)
- [LinkedIn: show education in your intro](https://www.linkedin.com/help/linkedin/answer/a547248)
- [Laszlo Bock: the X-Y-Z résumé formula](https://www.linkedin.com/pulse/20140929001534-24454816-my-personal-formula-for-a-better-resume)

**Hiring and market data**
- [AI engineering field guide: skills from 6,964 job posts](https://github.com/alexeygrigorev/ai-engineering-field-guide)
- [LangChain: State of Agent Engineering](https://www.langchain.com/state-of-agent-engineering)
- [Anthropic: Building effective agents](https://www.anthropic.com/engineering/building-effective-agents)
- [a16z: AI voice agents, 2025 update](https://a16z.com/ai-voice-agents-2025-update/)
- [Naukri JobSpeak, Aug 2026](https://www.tribuneindia.com/news/ai-roles/ai-ml-hiring-rises-31-pc-yoy-in-august-gcc-recruitment-grows-10-pc-naukri-jobspeak)
- [Jobgether: remote job market](https://jobgether.com/blog/remote-job-market-2025)
- [Deel global hiring report (India)](https://cxotoday.com/media-coverage/india-reconfirmed-as-a-global-talent-anchor-in-deels-2025-state-of-global-hiring-report/)

**AI search visibility (GEO)**
- [llms.txt specification](https://llmstxt.org/) · [SE Ranking: llms.txt study](https://seranking.com/blog/llms-txt/)
- [Google: ProfilePage structured data](https://developers.google.com/search/docs/appearance/structured-data/profile-page)
- [SearchVIU: what chatbots see of schema markup](https://www.searchviu.com/en/schema-markup-and-ai-in-2025-what-chatgpt-claude-perplexity-gemini-really-see/)
- [Vercel: the rise of the AI crawler](https://vercel.com/blog/the-rise-of-the-ai-crawler)
- [Cloudflare: AI crawlers blocked by default](https://www.cloudflare.com/press/press-releases/2025/cloudflare-just-changed-how-ai-crawlers-scrape-the-internet-at-large/)
- [Seer: ChatGPT citations vs Bing](https://www.seerinteractive.com/insights/87-percent-of-searchgpt-citations-match-bings-top-results)
- [GEO: Generative Engine Optimization (KDD 2024)](https://arxiv.org/abs/2311.09735)
- [Bing Webmaster Tools: AI Performance](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview)

**Building the site**
- [Cameron Rye: building a RAG portfolio chatbot](https://rye.dev/blog/building-ask-rag-portfolio-chatbot/)
- [OWASP Top 10 for LLM applications 2025](https://genai.owasp.org/resource/owasp-top-10-for-llm-applications-2025/)
- [Astro content collections](https://docs.astro.build/en/guides/content-collections/)
- [evanpurkhiser/resume: one source → HTML, MD, PDF](https://github.com/evanpurkhiser/resume)
- [Bento grids overused (critique)](https://uxskill.laithjunaidy.com/blog/ai-bento-grid-overused.html)
- [WebAIM Million 2026](https://webaim.org/projects/million/)

**Social proof and certifications**
- [FTC rule banning fake testimonials](https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials)
- [AWS ML Specialty retirement](https://aws.amazon.com/certification/certified-machine-learning-specialty/)
- [Microsoft AI-102 retirement (Q&A)](https://learn.microsoft.com/en-au/answers/questions/5893448/ai-102-retires-on-30th-june-2026)

---

*Scores are judgement calls against the profiles researched. `[Bracketed]` slots are numbers only you can supply; nothing in this blueprint invents a metric.*
