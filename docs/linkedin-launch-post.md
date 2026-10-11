# LinkedIn launch: the first post and the two weeks after it

*Drafted 9 Oct 2026. Goal: project leads from founders, product owners, hiring and project managers, and the freelance/fractional communities, without the post reading as "available for hire". The site at https://www.srinivasdharavath.com does that part.*

## What the feed rewards right now (research, Oct 2026)

- **Links.** A bare link in the post body still starts slower; a link that adds information is tolerated. Safest pattern: value-first post, link in the first comment.
- **Hashtags.** One to three, specific, at the end. More than three measurably hurts. Generic tags (#AI, #Leadership) confuse classification.
- **Tagging.** Only people likely to respond, and no more than five. A tagged person who ignores the post is a negative signal; one who replies substantively is a strong positive. Mass tagging is penalised.
- **Copy.** LinkedIn now reads posts semantically and checks whether the author's profile supports the topic. Formulaic, AI-sounding copy gets roughly half the reach of plain first-person writing. Engagement bait ("comment YES") is downranked.
- **Timing.** Timing drives the first hour; relevance drives the next week. Reply to every comment in the first 60 minutes.

## The post (v3, 9 Oct 2026, superseded: see `docs/linkedin-how-clients-find-you.md` for the research and the v4 lesson post; the paste-ready copy is `docs/linkedin-post-1.md`)

```
Where AI agents actually are in 2026, by the numbers:

• 53% of large US companies have deployed AI agents. 18% have agents working together across a workflow. (KPMG, June 2026)
• 62% of companies are experimenting with agents. 23% have scaled one in at least one function. (McKinsey, State of AI)
• In a survey of 1,300 practitioners, more than half of primary agent deployments do one of two jobs: customer service (26.5%) or research and data analysis (24.4%). (LangChain, State of Agent Engineering 2026)
• Gartner expects over 40% of agentic AI projects to be cancelled by the end of 2027, citing cost, unclear value and weak risk controls.

One thing stands out in the deployments that did scale: they are built from the same skeleton, whatever the industry.

Intake → validate → classify or score → decide or route → a person reviews the exceptions.

Insurers run it for claims. Banks run it for loan applications and KYC. Support teams run it for tickets. Recruiters run it for applications. Hospitals run it on inbound calls, where vendor case studies report 54 to 65% of calls deflected from staff.

What changes between industries is the layer around the skeleton: the data sources, the integrations, the regulator, the escalation threshold, the tone. What stays the same is the engineering underneath: structured outputs, evaluation sets, a fallback when a model fails, a cost per task, and a handover the operating team can run.

McKinsey's findings point the same way. Its high performers are three times more likely than their peers to redesign the workflow around AI rather than add an agent to the existing process.

Four years of building these in different industries, and that matches what I've seen. The pattern travels. The data, the rules and the risk don't.

Which of these is your industry seeing first?
```

About 290 words. No product, employer, client or personal case named; the "four years" sentence is the only reference to the author.

Fact check, each against the report or its own release:
- KPMG Q2 2026 AI Pulse, 24 June 2026, 204 US leaders at $1B+ companies: 53% deploying agents, 18% orchestrating multiple agents across workflows.
- McKinsey, The State of AI 2026 (published 25 Aug 2026, 1,719 respondents in 97 countries): large organisations scaling agents in at least one function 40%, up from 27%; smaller organisations 22%, unchanged. The 2025 edition's 62%/23% and the workflow-redesign finding were dropped because the linked page now carries the 2026 edition.
- LangChain, State of Agent Engineering 2026, 1,300+ practitioners, Nov–Dec 2025, single-choice "primary use case": customer service 26.5%, research & data analysis 24.4%.
- Gartner, 25 June 2025: over 40% of agentic AI projects cancelled by end of 2027; reasons quoted as escalating costs, unclear business value, inadequate risk controls.
- Healthcare call deflection: Relatient/Raleigh Orthopaedic 54%, Avaamo health-system deployment 61%, ActiumHealth 65%. All vendor-reported, and the post says so. Deflected is not resolved, which is why the post uses "deflected".

## Hashtags

Research across four 2026 datasets says the same thing: more than three hashtags measurably lowers reach, and generic ones (#AI, #Success) confuse topic classification. The global reach you want comes from the first hour's comments and from the text itself, which LinkedIn now reads semantically. So: the first five below go in the post, the rest are optional in the first comment, where they do little harm and a little discovery.

In the post (pick five):
`#AIAgents #AgenticAI #LLM #EnterpriseAI #AIAutomation`

In the first comment, after the link (optional, by audience):
- Topic: `#GenerativeAI #RAG #VoiceAI #DocumentAI #MachineLearning #ArtificialIntelligence`
- Buyers: `#DigitalTransformation #AIStrategy #ProductManagement #Founders #Startups #CustomerExperience`
- Industries: `#Healthtech #Insurtech #Fintech #Legaltech #HRTech #Recruitment`
- Regions where the site's hours chart points: `#TechInIndia #DubaiTech #UKTech #EuropeTech #USTech`

## The first comment (post it within a minute of the post)

```
I wrote up how I build these, including an interactive run of an assistant through a bad day: primary model times out, every model down, red-flag case. The decisions behind each build and the numbers are there too: https://www.srinivasdharavath.com/?utm_source=linkedin&utm_medium=post&utm_campaign=launch

Happy to compare notes with anyone running one in production. If a call is easier, there's a 30-minute slot on the site.
```

One link only. The site carries the Calendly button on every section, so a second link here would only look like a pitch.

## Replying to answers (the part that produces the leads)

Reply publicly to every answer with something useful first; the booking link comes second, and only when the person has described a real problem.

| They say | You reply |
|---|---|
| "It retries" / "we fall back to a smaller model" | "That's the right shape. The two things I'd check: does the fallback keep the same output contract, and do you log which model answered? The second one is what makes the cost dashboard honest." |
| "The user sees an error" | "That's the honest default, and better than a silent guess. The next step is a deterministic fallback for the top five intents, so the common questions still get an answer at zero model cost." |
| "We don't know" | "Most teams don't until the first outage. A quick way to find out is to run the assistant against a replay of last week's conversations with the primary model disabled. If you want, I can walk you through it in 30 minutes, the slot is on my site." |
| A recruiter | "Thanks for reaching out. Everything about how I work is on the site; happy to talk there." |

Anyone who answers with a real problem gets a DM the same day: two questions (what happens today, what would "working" look like) and then the Calendly link: https://calendly.com/dsrinivas360/30min?utm_source=linkedin

## Image

Attach `web/images/og.png` (the share card: "AI systems that work after the demo."). An image post with the link in the comment outperforms a link preview. Alternative for post 3: a 20-second screen recording of the simulator.

## Who to tag (at most five, only people who will reply)

Fill in names. The rule: tag someone only if the post genuinely touches their work and you expect a comment within the hour.

| Slot | Who | Why they'll reply |
|---|---|---|
| 1 | A MentionNow co-founder | Shared venture, will comment on the AI-visibility angle |
| 2 | Your lead at Masai School | Teaching credibility, large student network |
| 3 | One former manager or tech lead (Atlas or Bluekyte) who would vouch | A "I saw this ship" comment is worth more than ten likes |
| 4 | One IIT Madras batchmate who now runs a company | Founder audience, and the naval-architecture story lands with them |
| 5 | Leave empty, or a Walker Sands / Balihans contact only if the engagement allows it | Client-side voice |

Do not tag: hiring managers you don't know, LangChain / OpenAI / Anthropic / Vercel, or "AI influencers". Company pages (@Masai School, @MentionNow) are fine as mentions in a reply comment, not in the post.

Ask three of these five, by message, an hour before posting, to leave a real comment, not a like. That is not a pod; it is telling the people in the story that the story is up.

## When

Tuesday, Wednesday or Thursday, 5:30 pm IST. That is 8 am New York, 1 pm London, 2 pm Berlin, and still working hours in Hyderabad and Dubai. One slot covers every region on the site's hours chart.

## The first hour

1. Post, then the first comment with the link, then attach nothing else and do not edit the post for an hour.
2. Reply to every comment with a sentence that adds something, not "thanks".
3. If someone asks a real question, answer it in full in the comments. Comment threads are the content.
4. Three to five genuine comments in the first hour is the target. Reactions matter less.

## Before posting: the profile

- Headline, the same line as the site: `Senior AI Engineer · AI systems that work after the demo · Agents, RAG, voice AI · IIT Madras · Co-founder, MentionNow`
- Website field: `https://www.srinivasdharavath.com`
- Featured section: pin the site link; LinkedIn pulls the share card.
- About: the first two lines should match the hero and the site's bio paragraph, so search and AI engines see one person.

## The two weeks after (one post every three or four days)

| # | Post | Ends with |
|---|---|---|
| 2 | The support-ticket case: before and after, and why deduplication came first (automation floods a queue without it) | "What does your team retype by hand?" |
| 3 | "Every model is down": a 20-second recording of the simulator's outage run, and what the fallback actually did | "What happens to your assistant when the API returns 503?" |
| 4 | The voice agent: what broke on live calls (turn detection, interruptions) and what fixed it | "Has anyone shipped voice to real callers? What surprised you?" |
| 5 | Terms, not sales: "Built in your cloud. Code is yours. No training on your data. NDA first." Why every build ships with evals and a cost dashboard | "What do you ask a contractor before sharing data?" |
| 6 | The industry filter: screenshot of the eight systems with "Healthcare" selected. "4 of 8 fit healthcare teams" | "Pick your industry. Which of the eight is your week?" |

Each post: one idea, one question, link in the first comment with `utm_campaign=post-N`.

## Handling what comes in

- A comment or DM with a real problem: reply with two questions (what happens today, what would "working" look like), then offer the 30-minute slot: https://calendly.com/dsrinivas360/30min?utm_source=linkedin
- A recruiter about a full-time role: thank them, point to the site, keep the conversation on the work.
- Anyone asking "how did you measure the 70%": the support team's reported reduction after rollout. Say so plainly.

## Measuring

- UTM on every link; the site's Calendly links carry `utm_source=portfolio`, LinkedIn ones `utm_source=linkedin`, so bookings show their origin.
- LinkedIn post analytics after 48 hours: impressions, comments, profile views, and "where viewers work".
- MentionNow on your own name before post 1 and after post 6.

## Sources

- LangChain, State of Agent Engineering 2026: https://langchain.com/state-of-agent-engineering
- KPMG Q2 2026 AI Quarterly Pulse (press release, 24 June 2026): https://kpmg.com/us/en/media/news/q2-ai-pulse-2026.html
- McKinsey, The State of AI 2025 (62% experimenting with agents, 23% scaled; high performers 3x more likely to redesign workflows), via the AppliedAI partnership release: https://www.consultancy-me.com/news/13490/mckinsey-company-partners-with-appliedai-to-drive-agentic-ai-in-regulated-sectors
- Gartner, 25 June 2025 prediction on agentic AI cancellations (via secondary reporting): https://www.beri.net/article/ai-agent-adoption-enterprise-2026-gartner-idc
- Healthcare call deflection, vendor case studies: https://www.relatient.com/case-study-patient-access-contact-center-performance-lp/ · https://avaamo.ai/how-a-top-10-health-system-reclaimed-time-for-care-with-digital-innovation/ · https://www.actiumhealth.com/case-studies/leading-academic-medical-center
- Horizontal vs vertical agents and the shared intake/validate/route/review skeleton: https://www.multimodal.dev/post/horizontal-vs-vertical-ai-agents and https://gethesperai.com/blog/agentic-ai-insurance-claims-beyond-fnol/
- Menlo Ventures, 2025 State of Generative AI in the Enterprise ($37B spend; 59% internal, 41% customer-facing use cases): https://menlovc.com/perspective/2025-the-state-of-generative-ai-in-the-enterprise/
- Sprout Social, "How the LinkedIn Algorithm Works [2026]": https://sproutsocial.com/insights/linkedin-algorithm/
- SocialPilot, "How the LinkedIn Algorithm Works: September 2026 Update": https://www.socialpilot.co/blog/linkedin-algorithm
- Hootsuite, "How the LinkedIn algorithm works in 2026": https://blog.hootsuite.com/linkedin-algorithm/
- Melanie Goodman, "LinkedIn Algorithm 2026: Why Your Reach Dropped": https://melaniegoodmanlinkedinconsultant.substack.com/p/linkedin-algorithm-2026-reach-topic-authority
- Upwork, "In-Demand Skills 2026" (4 Feb 2026; top AI skills +109%, AI integration +178%): https://investors.upwork.com/news-releases/news-release-details/upworks-demand-skills-2026-demand-top-ai-skills-more-doubles-ai
- Gartner, June 2025: over 40% of agentic AI projects will be cancelled by end of 2027 (via secondary reporting): https://www.beri.net/article/ai-agent-adoption-enterprise-2026-gartner-idc
- MIT NANDA, "The GenAI Divide" (2025), 95% of enterprise GenAI pilots with no measurable P&L impact (via secondary reporting): https://ai2.work/blog/mit-says-95-of-ai-pilots-fail-the-enterprise-reality-check-explained
