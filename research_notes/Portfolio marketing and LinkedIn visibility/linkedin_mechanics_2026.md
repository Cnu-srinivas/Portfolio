# LinkedIn distribution, formats and profile mechanics for an individual creator (state as of October 2026)

Scope: what decides reach and inbound for an individual (not a company page) who wants client projects, not a job. Author context: Hyderabad (IST, UTC+5:30), employed full time, cannot use "Open to Work".

Source-quality legend used throughout:
- **[LI]** LinkedIn itself (help pages, newsroom, named LinkedIn staff quotes).
- **[DATA]** Third-party dataset with a stated sample size and method (AuthoredUp 3M posts, MagicPost 287k–687k posts, Reachium 180k requests, Buffer 4.8M posts, Sprout ~2B engagements, ContentIn 100k posts, van der Blom 1.3M posts). All of these are still tool vendors; "DATA" means the sample and method are disclosed, not that the source is neutral.
- **[VENDOR]** Tool/agency blog with no disclosed sample or method. Treat as directional only.
- **[OLDER]** Figure from 2024 or earlier, or from the 2025 edition of a report.

Important caveat on Richard van der Blom's Algorithm Insights Report 2026: it is a paid report (corporate edition €1,500) and I could not read it directly. Every figure below attributed to it comes from his own LinkedIn posts (as transcribed by CaptureFlow), his June 2026 podcast interview, or secondary coverage. Numbers from different secondary sources conflict in places; those conflicts are flagged.

---

## Key question 1: 2026 ranking signals and what changed in 2025–2026

### Takeaway
The feed was rebuilt in March 2026 around LLM-based retrieval plus a transformer ranker that reads your interaction history, and LinkedIn publicly committed to reducing generic content, engagement bait, recycled posts and automated engagement. The practical consequence, per van der Blom's data, is that distribution moved from "who you are connected to" to "what topic you are known for" (his figures: connection-based share of initial distribution 70% in 2024 → 54% in 2025 → 10% in 2026; interest graph 5% → 21% → 50%), and reach for active creators fell roughly 60% over two years while engagement-per-view rose.

### Cited Findings

**What LinkedIn itself says (primary sources)**
- LinkedIn Help's "How the Feed works" groups ranking signals into Identity ("Your profile details such as location, workplace, and skills"), Content (language of the post, whether it is from "someone you follow or are connected to", "How often a post is viewed or engaged with", "How recent the content is", "How constructive or professional the conversation is", "Tagged people, companies, or topics") and Activity ("Content you spend the most time viewing", "What you've reacted to, commented on, or shared", "Topics you've shown interest in", "People who follow you"). It says algorithms "filter out or taper distribution of low-quality and unsafe content". It does not mention links, hashtags (beyond "topics"), AI content, engagement bait or posting frequency. Page last updated "6 months ago" as of Oct 2026. **[LI]** — [LinkedIn Help: How the Feed works](https://www.linkedin.com/help/linkedin/answer/a1339724)
- LinkedIn Newsroom, 12 March 2026, "Improving the Feed": "Less generic content and engagement bait" (defined as "'comment to agree' prompts or videos that don't match the text"); "We're reducing recycled and click-driven posts"; "We're working to make engagement pods ineffective and curb comment automation"; LLMs are used so the ranker can "better understand what a post is actually about"; "This isn't about limiting reach or discouraging participation"; "We want the Feed to be relevant to your interests, not a popularity contest." No accuracy figures, no mention of AI-assisted writing, links, formats or frequency. **[LI]** — [LinkedIn Newsroom: Improving the Feed](https://news.linkedin.com/2026/ImprovingTheFeed)
- Same day (12 March 2026) LinkedIn Engineering published a post (by Hristo Danchev) describing the move from five separate retrieval pipelines (chronological network activity, trending-by-geography, collaborative filtering, several embedding retrievers) to one LLM-embedding retrieval system plus a transformer-based "Generative Recommender" ranker that reads 1,000+ of a member's past interactions; LLM embeddings infer interests from profile data alone for cold-start members; engagement counts are fed as percentile buckets, not raw numbers. I could not open the primary post; these details are from secondary coverage. — [ppc.land coverage](https://ppc.land/linkedin-rebuilds-its-feed-from-scratch-with-llms-and-gpu-powered-ranking/); [herdl coverage](https://herdl.com/linkedin-is-rebuilding-its-feed-using-an-llm-based-retrieval-system/)
- "360Brew" is a January 2025 LinkedIn research paper (150B-parameter decoder-only model, arXiv 2501.16450, since withdrawn). The March 2026 engineering post does not use the word "360Brew"; claims that "360Brew now runs the feed" are vendor interpretation, not LinkedIn confirmation. — [media-all.in: 360Brew, what LinkedIn actually confirmed](https://media-all.in/en/blog/linkedin-360brew-ai-algorithm-explained/); [suma-ai: 360Brew confirmed vs guesswork](https://www.suma-ai.com/en/blog/360brew-linkedin-algorithm)
- LinkedIn staff quoted by Buffer (article dated 19 Dec 2025): three stated signals are relevance (match to a defined audience's interests), expertise (demonstrated subject knowledge) and engagement (comments from people who usually engage with the topic). Alice Xiong (Director of Product Management): "Think about what kind of knowledge you have to offer to help people." Laura Lorenzetti (Senior Director, LinkedIn News): headlines appear next to posts in the feed and shape how credibility is judged. LinkedIn infers each user's interests from profile and activity to decide which expertise is relevant to them. **[LI quotes via Buffer]** — [Buffer: How LinkedIn's algorithm works, according to the LinkedIn team](https://buffer.com/resources/linkedin-algorithm/)
- 30 July 2026: LinkedIn CPO Hari Srinivasan announced a "seems like AI slop" report option (initially on posts, coming to comments), new classifiers "to identify if a post is AI slop or other low-quality content" which "would reduce the amount of slop you'd see in suggested content recommendations from outside your network", private dashboard flags to authors whose content readers mark as inauthentic, replacement of the "enhance your post" AI rewriter with a proofreading tool that keeps the author's voice, and that LinkedIn blocks "hundreds of thousands" of automated comment attempts daily. Quote: "People come to LinkedIn to connect with real people and share their real perspectives, ideas, and expertise." **[LI via TechCrunch]** — [TechCrunch, 30 Jul 2026](https://techcrunch.com/2026/07/30/linkedin-adds-a-button-to-report-ai-generated-slop/)
- Suggested posts (out-of-network distribution): LinkedIn says it tries "to serve only suggested content that is valuable to people outside the original poster's network", that it should "provide context for the topic being discussed", should not be "overly promotional in nature", and that all parts of a post (text, images, video) should relate to one another. Signals include "comments, reactions, time spent" plus profile details. Help page last updated "3 years ago". **[LI, OLDER page but still live]** — [LinkedIn Help: Suggested posts in feed](https://www.linkedin.com/help/linkedin/answer/a1499047)

**Van der Blom Algorithm Insights 2026 (7th edition; 1.3M posts, 1,400+ research hours; podcast says 50,000 creators)**
- Report basis: 200+ pages, 6 chapters, 100+ tactics, 1.3M posts analysed, 1,400+ hours, 7th edition. **[DATA, via his own posts]** — [CaptureFlow teardown of van der Blom's posts](https://captureflow.ai/playbooks/richard-van-der-blom)
- Share of initial distribution going to connections vs the Interest Graph, per his post "Your connections don't matter anymore": 2024: 70% connections / 5% interest graph; 2025: 54% / 21%; 2026: 10% / 50%. **[DATA, via his own post]** — [CaptureFlow](https://captureflow.ai/playbooks/richard-van-der-blom)
- Conflicting feed-composition figure: "Only about 31% of the average LinkedIn feed now comes from first-degree connections", ~25% from 2nd/3rd degree, ~10% Suggested Posts (Melanie Goodman, May 2026, source unnamed). DemandBird attributes "72% in 2024 to 31% in 2026" to its own 2026 analysis. These measure feed composition, not initial distribution, so they are not the same metric as the 10%/50% split above; neither can be checked against the report. **[VENDOR]** — [Melanie Goodman, The Link Tank, 7 May 2026](https://melaniegoodmanlinkedinconsultant.substack.com/p/linkedin-algorithm-2026-reach-topic-authority); [DemandBird](https://demandbird.com/resources/linkedin-algorithm/)
- Reach is down about 60% over two years for active creators on average, but the bottom ~60% of members (low-activity) saw reach gains of roughly 10–15%; engagement is down 20–25%, so engagement per view rose. Suggested posts are ~9% of the feed. Van der Blom says LinkedIn has told him it does not want people to go viral but to become "more relevant and more impactful". **[DATA, van der Blom in interview]** — [Creator Science ep. 307, 2 Jun 2026](https://creatorscience.com/podcast/richard-van-der-blom-2/)
- "Topic fingerprinting": LinkedIn learns who you are from profile + posts. His self-test: paste your last 20 posts into an AI tool and ask for the two main topics; if it cannot name two, or finds four or five, you are "out of lane". Target ~80% of content on one main topic plus two or three related subtopics. After rewriting his own profile in Feb 2026 he saw an uptick in profile visits and reach within three weeks. **[DATA/practitioner]** — [Creator Science ep. 307](https://creatorscience.com/podcast/richard-van-der-blom-2/)
- Pod detection: LinkedIn is ~97% accurate at detecting pods (figure cited from the report by the host). He gets 20–30 comments in the first five minutes of a post and estimates ~80% are AI-written. — [Creator Science ep. 307](https://creatorscience.com/podcast/richard-van-der-blom-2/)
- Post lifespan ("Rocket" pattern, "after analysing 1.3M posts"): 45% of posts are Rockets; they get 40% of their reach within 4 hours and 70% within day one. **[DATA, via his own post]** — [CaptureFlow](https://captureflow.ai/playbooks/richard-van-der-blom)
- Mid-2026 trend post (12,000+ creators tracked since March 2026): his own reach down 22%; across 40,000+ carousel posts, average carousel reach down 40% and engagement down 30%. **[DATA, via his own post]** — [CaptureFlow](https://captureflow.ai/playbooks/richard-van-der-blom)
- Van der Blom 2025 edition figures, as relayed by vendors (conflicting): SocialPilot says views −47%, engagement −39%, follower growth −42%, fully AI-generated posts ~2.8x less reach and ~5x less engagement, saves raise the chance of appearing in suggested feeds by 60%+; Dataslayer says views −50%, engagement −25%, follower growth −59%. Same report, different numbers; treat both as unverified. **[OLDER, VENDOR-relayed]** — [SocialPilot, Sept 2026 update](https://www.socialpilot.co/blog/linkedin-algorithm); [Dataslayer](https://www.dataslayer.ai/blog/linkedin-algorithm-february-2026-whats-working-now)

**Dwell time**
- LinkedIn Help names "Content you spend the most time viewing" as an Activity signal (see above). **[LI]** — [LinkedIn Help](https://www.linkedin.com/help/linkedin/answer/a1339724)
- The LiRank paper and an Oct 2024 LinkedIn Engineering post describe a binary "Long Dwell" classifier predicting whether a post exceeds a context-dependent dwell-time percentile; LinkedIn publishes no seconds threshold. The "30 seconds" and "8 seconds" thresholds circulating in 2026 guides are folk benchmarks; "61+ seconds yields 15.6% engagement" appears only in vendor blogs with no dataset. **[OLDER primary; VENDOR thresholds]** — [linkedinpreview: dwell time 2026](https://linkedinpreview.com/blog/linkedin-dwell-time-2026); [SocialPilot](https://www.socialpilot.co/blog/linkedin-algorithm)
- Saves: Hootsuite (14 Jul 2026) cites AuthoredUp's 3M-post analysis that a save drives around five times the reach of a like and roughly twice that of a comment. **[DATA via Hootsuite]** — [Hootsuite: LinkedIn algorithm 2026](https://blog.hootsuite.com/linkedin-algorithm/)

**AI-generated copy detection (measured effect)**
- MagicPost AI Writing Study: 287,120 posts from ~6,000 authors (English and French, text and image posts), 78,281 of them published since Jan 2026, reach measured within-author against each author's own baseline. Before 2026 the link between AI-marked phrasing and reach was near zero in English and weak in French; in the 2026 cohort it is clear in both languages. Effect is concentrated in the most heavily AI-marked 5% of posts: −3.4% (English) and −13.4% (French) vs the author's usual reach. The study measures phrasing families, not AI use itself; observational. **[DATA]** — [MagicPost AI Writing Study](https://magicpost.in/resources/linkedin-ai-writing-study)
- MagicPost's companion analysis: posts with no concrete detail and no lived experience ran 13% below their author's average between 1 Apr and 26 Jul 2026 and 23% below since; a post rated 30 points more "AI-sounding" at equal substance got ~9% fewer impressions before 27 Jul 2026 and no detectable extra cost since. **[DATA]** — [MagicPost: Does LinkedIn penalize AI content?](https://magicpost.in/blog/does-linkedin-penalize-ai-content)
- Scale of the problem: detection vendor Pangram estimated 41% of long-form and 30% of short-form LinkedIn posts were likely AI-generated (July 2026). **[VENDOR estimate, via press]** — [TechCrunch](https://techcrunch.com/2026/07/30/linkedin-adds-a-button-to-report-ai-generated-slop/)
- Widely repeated "30% less reach / 55% less engagement for low-effort AI posts" has no traceable primary study. **[VENDOR, unverified]** — [SocialPilot](https://www.socialpilot.co/blog/linkedin-algorithm)

**Engagement bait**
- MagicPost (~684,000 posts): posts ending in a "Comment KEYWORD" line fell to about half of the author's average reach. **[DATA]** — [MagicPost links study, updated 5 Jun 2026](https://magicpost.in/blog/linkedin-external-links-reach)
- Polls: AuthoredUp 3M posts (Mar 2025–Feb 2026): 1.78x reach but 0.37x engagement vs the profile's own median; poll share of content fell from 1.57% to 1.16%. Dataslayer claims polls fell to a 0.07% engagement rate after a "March 2026 Authenticity Update" (no method). **[DATA; VENDOR]** — [AuthoredUp](https://authoredup.com/blog/best-performing-content-on-linkedin); [Dataslayer](https://www.dataslayer.ai/blog/linkedin-algorithm-february-2026-whats-working-now)

**Tooling context**
- Shield (analytics) shut down in late May 2026; Use Aware (curated feed tool) shut down in Nov 2025, per van der Blom. — [Creator Science ep. 307](https://creatorscience.com/podcast/richard-van-der-blom-2/)

### Inferences
- The single biggest 2026 change for a technical builder is that topic consistency on the profile and in the last ~20 posts now does what connection count used to do. A profile that reads "senior AI engineer at [employer]" while posts are about building client systems will fingerprint inconsistently; headline, About and Featured should name the same two topics the posts are about.
- Because out-of-network distribution ("Suggested") is the growth channel and LinkedIn explicitly excludes "overly promotional" content from it, posts that read as a sales pitch will reach only first-degree connections; posts that teach ("provide context for the topic") can leave the network.
- The measured AI penalty is small on average and large only for the most template-like 5% of posts; the bigger measured cost is lack of concrete detail (−13% to −23%). Writing with specifics (numbers, names of components, what broke) matters more than whether an LLM helped draft.

### Gaps
- The Algorithm Insights 2026 report itself is paywalled; the 10%/50% distribution split, the 97% pod-detection figure and the "reach −60%" figure could not be checked against the report text.
- No LinkedIn source quantifies the weight of any signal (dwell, comments, saves) in 2026; all multipliers are third-party.
- Van der Blom's 2025 and 2026 figures are relayed inconsistently by vendors (e.g., follower growth −42% vs −59%); I could not resolve which is correct.

---

## Key question 2: Format performance in 2026 and the best format for a technical builder

### Takeaway
On the largest disclosed dataset (AuthoredUp, 3M+ personal-profile posts, Mar 2025–Feb 2026, within-profile multipliers), document/carousel posts lead on reach (1.39x) and images lead on engagement (1.33x) with carousels close behind (1.30x); video is below the profile median (0.86x reach) unless it runs 90 seconds or longer (3 min+: 1.21x reach); articles (0.69x) and plain reposts (0.29x) are the weakest. For the 1K–5K follower tier specifically, images are the top format (1.06x reach, 1.16x engagement). Van der Blom's mid-2026 trend data shows carousel reach down 40% as the format saturates, and he himself avoids polls, video and text-only.

### Cited Findings

**AuthoredUp (3M+ posts, personal profiles only, Mar 2025–Feb 2026; multipliers relative to each profile's own median; page updated 2 Sep 2026)** **[DATA]** — [AuthoredUp: Best performing content on LinkedIn](https://authoredup.com/blog/best-performing-content-on-linkedin)
- Document (carousel): 1.39x reach, 1.30x engagement, 4.88% of posts. Top-5% profiles: 1.72x reach, 1.63x engagement. Documents are 12.92% of all saved posts. Best caption length 0–100 characters (1.28x reach). Recommended 6–8 slides, 1080×1350.
- Image: 1.20x reach, 1.33x engagement, 57.16% of posts. Portrait images 2.83% median engagement rate vs 2.54% square vs 2.14% landscape (368,489 single-image posts). Caption sweet spot 800–900 characters (1.04x); over 1,000 characters adds nothing.
- Poll: 1.78x reach, 0.37x engagement, 1.16% of posts ("reach trap").
- Text-only: 1.07x reach, 0.78x engagement, 11.59% of posts. Top-5% profiles 1.26x. 1,000+ characters: 1.18x reach and engagement; under 300 characters: 0.88x; 20+ sentences: 1.14x reach / 1.18x engagement; under 5 sentences: 0.64x.
- Video: 0.86x reach, 0.93x engagement, 10.61% of posts. Median video reach fell 36% year over year (34% for top performers). Top-5% profiles: 0.78x reach. Duration (36,946 videos, Oct 2025–Mar 2026): 0–30s 0.96x reach; 30–60s 0.95x; 60–90s 0.97x; 90s–3min 1.07x; 3min+ 1.21x reach / 1.17x engagement. Native video outperforms YouTube links (qualitative).
- Article: 0.69x reach, 0.44x engagement, 6.00% of posts.
- Reshare (repost): 0.29x reach, 0.22x engagement, 7.69% of posts; lowest format.
- Best format by follower tier (Oct 2025–Mar 2026): 0–1K: Image (1.10x reach / 1.18x engagement); 1K–5K: Image (1.06x / 1.16x); 5K–20K: Poll for reach (1.20x), Image for engagement (1.17x); 20K–50K: Document (1.30x); 50K+: Document (1.49x / 1.21x); video is the weakest format at 50K+ (0.74x).

**Other datasets**
- MagicPost (1.2M posts): median reach carousel 1,031, video 708, text-only 664; carousels with 13–20 slides earn 2.6x the likes of short ones; in 2026 video overtook image posts on median likes for the first time. **[DATA, limited method disclosure]** — [MagicPost: Best LinkedIn post format](https://magicpost.in/blog/best-linkedin-post-format)
- LinkHub (57,809 posts): video 146 average likes, image 127, carousel 100, text-only 65; the only large sample where carousels do not lead. Uses averages (outlier-sensitive). **[DATA, averages]** — [LinkHub format study](https://linkhub.gg/en/blog/format-post-linkedin-engagement)
- Buffer (45M+ posts across platforms): carousel median engagement rate 21.77% on LinkedIn, 196% above video and 585% above text. Buffer's cross-platform engagement-rate definition is not comparable to AuthoredUp/ContentIn impression-based rates. Buffer's separate 1M-post LinkedIn analysis: PDF carousels earn nearly 3x the engagement of videos, 3x images, nearly 6x text-only. **[DATA, different denominator]** — [Buffer: best content format, 45M posts](https://buffer.com/resources/data-best-content-format-social-media/); [Buffer algorithm article](https://buffer.com/resources/linkedin-algorithm/)
- Van der Blom mid-2026 (40,000+ carousel posts): average carousel reach −40%, engagement −30%. **[DATA via his post]** — [CaptureFlow](https://captureflow.ai/playbooks/richard-van-der-blom)
- Van der Blom's own three-post week: text+image, carousel, text+image. He avoids polls, video and text-only; text-only's reach advantage "disappears when the top 5% of creators are removed" and "requires a hell of a copywriter"; video "only if you enjoy it", since weak video can harm authority. Standalone articles perform at ~0.4x. — [Creator Science ep. 307](https://creatorscience.com/podcast/richard-van-der-blom-2/)
- Video supply is rising: LinkedIn reported a third straight quarter of double-digit growth in video uploads in Q1 2026 (per Hootsuite). **[LI via Hootsuite]** — [Hootsuite](https://blog.hootsuite.com/linkedin-algorithm/)
- Dataslayer (vendor): documents 6.60% average engagement, native 30–90s video 5.60%, text ~2%; document posts show ~5x the CTR of image posts and 10x that of link posts on its own Pages data; "91% watch muted" (unsourced). **[VENDOR]** — [Dataslayer](https://www.dataslayer.ai/blog/linkedin-algorithm-february-2026-whats-working-now)

**Newsletters**
- Van der Blom: newsletters outperform posts on reach, engagement and conversion; ~80% of his LinkedIn-related conversions come from his newsletter; when someone follows him LinkedIn prompts them to subscribe and ~60% do (he cites ~130,000 subscribers); ~100 people/week move from his LinkedIn newsletter to his email list; newsletters now show opens and per-link click tracking; newsletter content is being quoted by Claude, ChatGPT and Perplexity. He publishes weekly (Sunday). **[practitioner, large account]** — [Creator Science ep. 307](https://creatorscience.com/podcast/richard-van-der-blom-2/)
- Each edition triggers an email, a push notification and an in-app alert; on first edition LinkedIn auto-invites all connections and followers. Open-rate benchmarks quoted by vendors range 25–42% but LinkedIn measures "clicks to read", so they are not comparable to email. **[VENDOR]** — [growleads newsletter pros/cons](https://growleads.io/blog/linkedin-newsletter-pros-and-cons-2026/); [connectsafely newsletters guide](https://connectsafely.ai/articles/linkedin-newsletters-marketing-guide-2026)
- Newsletters are now available to all members, not gated behind the retired Creator Mode. **[VENDOR]** — [Waalaxy: Creator mode 2026](https://www.waalaxy.com/blog/linkedin-platform-knowledge/linkedin-creator-mode)

### Inferences
- For a builder showing architecture diagrams: a single portrait (4:5) image with an 800–900-character explanation is the best-supported choice at 1K–5K followers (top tier format on AuthoredUp), and it avoids the carousel saturation van der Blom measured in 2026. Use carousels for multi-step walkthroughs (6–8 slides, short caption) rather than as the default.
- For screen recordings and demos: short clips (under 90s) are below the profile median on every dataset; either go long (3 min+ walkthrough, 1.21x) or post the demo as a sequence of annotated stills. If posting video, upload natively, caption it, and keep the text post substantive since video posts are judged on text too.
- A monthly or fortnightly newsletter is the one format with evidence of converting (80% of van der Blom's conversions), gets pushed by email and notification regardless of feed ranking, and is indexed by AI assistants; it is a strong fit for "deep dive on one build" content.
- Avoid polls (reach without engagement, and the "Authenticity" changes target low-substance formats), plain reposts (0.29x), and LinkedIn articles (0.4–0.69x). A repost with your own commentary is not isolated in any dataset I found.

### Gaps
- No dataset isolates "repost with commentary" from plain reshares.
- No 2026 dataset reports newsletter reach or subscriber-growth benchmarks for accounts under 10K followers.
- Carousel findings conflict (AuthoredUp 1.39x vs van der Blom's −40% trend vs LinkHub's last-place ranking); the most likely reconciliation is that carousels still beat an author's own median but the median itself has fallen as the format saturated.

---

## Key question 3: Posting frequency, commenting on others' posts, and the "golden hour"

### Takeaway
Two to four posts a week is the convergent recommendation (van der Blom 2026, Buffer 2M posts, AuthoredUp); AuthoredUp's table shows impressions per post rising through 6–7 posts/week (959) then collapsing at 8+/week (586 impressions, 1.79% engagement). The early window is real but shorter and less mystical than "golden hour" lore: van der Blom's lifespan data puts 40% of a typical post's reach in the first 4 hours and 70% in day one; his personal routine is ~15 minutes replying after publishing plus 5–10 on-topic comments a day on 2nd/3rd-degree posts, and he calls "30 comments a day" a myth.

### Cited Findings

**Frequency**
- AuthoredUp (3M posts): posts/week → % of profiles / median engagement rate / median impressions per post: 1 → 79.80% / 2.40% / 679; 2–3 → 13.17% / 2.58% / 741; 4–5 → 4.45% / 2.60% / 870; 6–7 → 1.61% / 2.54% / 959; 8+ → 0.97% / 1.79% / 586. **[DATA]** — [AuthoredUp](https://authoredup.com/blog/best-performing-content-on-linkedin)
- Van der Blom: optimal frequency dropped from 5–6/week to 2–4; "two to three is enough for the average creator"; he posts ~6/week himself. — [Creator Science ep. 307](https://creatorscience.com/podcast/richard-van-der-blom-2/)
- Buffer (2M+ posts): 2–5 posts/week associated with better impressions and engagement; the biggest gain is from 1 to 5 posts/week. Scheduling is not penalised; abandoning scheduled content is. **[DATA]** — [Buffer algorithm article](https://buffer.com/resources/linkedin-algorithm/)
- Buffer (4.8M posts, Sep 2026): 2–5/week "where most creators and brands start seeing results"; 6–10/week can push impressions further. **[DATA]** — [Buffer best time to post](https://buffer.com/resources/best-time-to-post-on-linkedin/)
- Melanie Goodman (sources unnamed): moving from 1 to 2–4 posts/week adds ~1,234 impressions per post; daily posting brings a 26% drop in average reach per post and −45% over time from fatigue. **[VENDOR]** — [Melanie Goodman](https://melaniegoodmanlinkedinconsultant.substack.com/p/linkedin-algorithm-2026-reach-topic-authority)
- Van der Blom 2025 guide via DowSocial: 1–3 posts/week "sweet spot". **[OLDER]** — [DowSocial](https://www.dowsocial.com/linkedin-algorithm-2026/)
- Hootsuite: "LinkedIn data shows weekly posting leads to a 2x lift in engagement" (an old LinkedIn Pages claim). **[LI, OLDER]** — [Hootsuite](https://blog.hootsuite.com/linkedin-algorithm/)
- Creator (vendor): below 2 posts/week "the algorithm deprioritises distribution"; daily posting "cannibalises reach". **[VENDOR]** — [getcreator.io](https://www.getcreator.io/stats/linkedin-follower-growth-rate)

**Commenting on others' posts**
- Van der Blom's routine: 25–30 minutes/day total; ~15 minutes after publishing replying on his own post, plus 5–10 external comments/day on a second- and third-degree feed. Internal replies matter as much as external comments; likes and comments from 2nd/3rd-degree connections are a "strong signal"; off-topic comments do nothing because comments now shape your interest-graph fingerprint; "30 comments a day" is "a big myth". — [Creator Science ep. 307](https://creatorscience.com/podcast/richard-van-der-blom-2/)
- Van der Blom 2025 guide via DowSocial: engaging 15–30 minutes before and after posting improves reach by up to 20%. **[OLDER, VENDOR-relayed]** — [DowSocial](https://www.dowsocial.com/linkedin-algorithm-2026/)
- Buffer (72,000 posts): replying to comments on your own post boosted engagement by 30%. **[DATA]** — [Buffer algorithm article](https://buffer.com/resources/linkedin-algorithm/)
- SocialPilot: top 1% of creators reply to comments 741% more often than average creators (source unstated). **[VENDOR]** — [SocialPilot](https://www.socialpilot.co/blog/linkedin-algorithm)
- Creator (vendor, "1,000+ B2B founders" tracked): ~60% of outbound-driven follower growth comes from commenting; meaningful comments drive ~4x more profile visits than likes. **[VENDOR]** — [getcreator.io](https://www.getcreator.io/stats/linkedin-follower-growth-rate)
- An unnamed "Q1 2026" dataset reports a 0.412 correlation between commenting activity and follower growth. **[VENDOR, unverifiable]** — [Sales and Marketing Engineers](https://www.salesandmarketingengineers.co.uk/the-ultimate-linkedin-posting-guide-for-2026)
- LinkedIn is actively blocking automated comments ("hundreds of thousands" daily) and will flag AI-sounding comments; a "seems like AI slop" report option is coming to comments. **[LI via TechCrunch]** — [TechCrunch](https://techcrunch.com/2026/07/30/linkedin-adds-a-button-to-report-ai-generated-slop/)

**Early window ("golden hour")**
- Van der Blom lifespan analysis (1.3M posts): 45% of posts follow the "Rocket" pattern, getting 40% of reach within 4 hours and 70% within day one. **[DATA via his post]** — [CaptureFlow](https://captureflow.ai/playbooks/richard-van-der-blom)
- Van der Blom 2025 guide via DowSocial: most reach determined within the first 90 minutes. **[OLDER]** — [DowSocial](https://www.dowsocial.com/linkedin-algorithm-2026/)
- Dataslayer: new posts tested with 2–5% of the network first; "only 5% of underperforming posts recover in the first hour" (no source). **[VENDOR]** — [Dataslayer](https://www.dataslayer.ai/blog/linkedin-algorithm-february-2026-whats-working-now)
- Posts can resurface: Hootsuite says posts 2–3 weeks old can reappear (a mid-2025 change); LinkedIn's Suggested Posts resurface older high-quality posts to new audiences. **[VENDOR; LI help]** — [Hootsuite](https://blog.hootsuite.com/linkedin-algorithm/); [LinkedIn Help: Suggested posts](https://www.linkedin.com/help/linkedin/answer/a1499047)
- Claims such as "70% of total reach is decided in the first 60 minutes" or "early comments multiply visibility 10x" have no traceable dataset. **[VENDOR, unverified]** — [LinkedCraft golden hour](https://linkedcraft.io/blog/best-time-comment-linkedin-golden-hour)

### Inferences
- For a full-time employee, 2–3 posts/week is both the evidence-backed optimum and the sustainable one; the AuthoredUp numbers show a profile posting 2–3/week gets ~9% more impressions per post than one posting weekly, and 8+/week is actively worse.
- The commenting budget that the data supports is small and targeted: ~15 minutes replying on your own post in the first hour or two (where 40% of reach forms), then 5–10 substantive on-topic comments per day on posts by people two or three degrees out in your niche (AI systems, data engineering, founders who buy such work). Comments on unrelated viral posts now actively blur your topic fingerprint.
- Because a post keeps 30% of its reach after day one and can be resurfaced, evergreen "how I built X" posts are worth more than news reactions.

### Gaps
- No dataset quantifies the reach effect of N external comments per day; all figures are practitioner routines or vendor estimates.
- No 2026 source measures what happens to a post if the author is absent for the first hour (e.g., posting at 6:30 pm IST and being unable to reply until 9 pm).

---

## Key question 4: Best posting times from IST for US, UK, EU and Gulf readers; weekday differences in 2026

### Takeaway
The three large datasets agree on Tuesday–Thursday and disagree on the hour: Sprout (~2B engagements, Nov 2025–Feb 2026) says 11 am–4/5 pm local; ReactIn (50K B2B posts) says 8–10 am local in the US/UK and 9–11 am in the Gulf; Buffer (4.8M posts) says 3–8 pm local with Wednesday 4 pm best. MagicPost's 220,220 Indian posts put India's own peak at 8–10 am IST Monday/Wednesday. Converted to IST, the US-morning window is 5:30–7:30 pm IST during US daylight time and 6:30–8:30 pm IST from 1 November 2026; the UK/EU morning window is 12:30–2:30 pm IST; the Gulf morning is 10:30 am–12:30 pm IST.

### Cited Findings
- Sprout Social (nearly 2 billion engagements across 307,000 profiles, 27 Nov 2025–27 Feb 2026, local time; published 31 Mar 2026; sample skews to brand pages): LinkedIn best windows Mon 1–2 pm; Tue 11 am–5 pm; Wed 11 am–4 pm; Thu 11 am and 1–5 pm; Fri 11 am and 1–2 pm; avoid weekends entirely; Tue–Thu show the most consistent and prolonged peaks. **[DATA, brand-heavy]** — [Sprout Social best times LinkedIn](https://sproutsocial.com/insights/best-times-to-post-on-linkedin/)
- Buffer (4.8M+ posts sent through Buffer, ~2 years, normalised to the poster's local time; published 9 Sep 2026): peak 3–8 pm weekdays; top slots Wed 4 pm, Fri 3 pm, Fri 4 pm; best day Wednesday then Thursday, Friday; Monday weakest; mornings (6–11 am) underperform afternoons/evenings; weekends drop significantly. **[DATA, creator-heavy]** — [Buffer best time to post on LinkedIn](https://buffer.com/resources/best-time-to-post-on-linkedin/)
- ReactIn (50,000+ posts from B2B founders, GTM, agencies and 5,000+ consultants; normalised to CET; published 18 Mar 2026; no date window): day index Tue 100, Wed 95, Thu 91, Mon 73, Fri 62, Sat 31, Sun 28; Tue–Thu = 68% of engagement; weekday posts average 3.2x the impressions of weekend posts (4.1x for B2B); engagement rate 4.8% weekday vs 3.1% weekend. Local-time windows: US East Tue–Thu 8–10 am and 12 pm; US West Tue–Wed 7–9 am and 11 am; UK Tue–Thu 8–10 am and 12–1 pm; EU (CET) Tue 9–11 am, Wed 9 am, Thu 10 am, 12–1 pm lunch spike; Middle East (GST) Sun–Thu 9–11 am, avoid Fri/Sat (no sample size given for the region). **[DATA, vendor; regional sub-samples undisclosed]** — [ReactIn best time to post](https://www.reactin.io/blog/best-time-to-post-on-linkedin)
- MagicPost India (220,220 Indian posts through May 2026, IST, within-author relative scoring 0–100): Monday 9 am = 100; Monday 8 am 96; Wednesday 8 am 96; Friday 8 am 88; Monday 10 am 88; best hour overall 8 am; evenings and afternoons ~62–63; best weekend slot Sunday noon (79); "the hour matters more than the day for India". **[DATA, vendor]** — [MagicPost best time India](https://magicpost.in/blog/best-time-to-post-on-linkedin-india)
- Hootsuite's own research: 4–6 am Tue/Wed (no sample size); other summaries report 8–9 am; inconsistent across write-ups. **[VENDOR]** — [Hootsuite](https://blog.hootsuite.com/linkedin-algorithm/)
- Reachium (connection requests, not posts): first replies cluster 09:00–18:00 UTC (51.5% of 18,718 first replies); weekend reply volume 42% below weekdays. **[DATA]** — [Reachium benchmarks 2026](https://www.reachium.io/research/linkedin-outreach-benchmarks-2026)

**IST conversions (my arithmetic; DST rules: US daylight time ends 1 Nov 2026, UK/EU summer time ends 25 Oct 2026; Gulf has no DST)**
- US ET 8–10 am (ReactIn) = 5:30–7:30 pm IST until 31 Oct; 6:30–8:30 pm IST from 1 Nov.
- US ET 11 am–4 pm (Sprout) = 8:30 pm–1:30 am IST (summer) / 9:30 pm–2:30 am IST (winter).
- US ET 3–8 pm (Buffer) = 12:30–5:30 am IST next day; not usable from India.
- US PT 7–9 am (ReactIn) = 7:30–9:30 pm IST (summer) / 8:30–10:30 pm IST (winter).
- UK 8–10 am = 12:30–2:30 pm IST (BST) / 1:30–3:30 pm IST (GMT).
- EU CET 9–11 am = 12:30–2:30 pm IST (CEST) / 1:30–3:30 pm IST (CET).
- Gulf GST 9–11 am = 10:30 am–12:30 pm IST, Sunday–Thursday.
- The existing one-slot compromise, Tue–Thu 5:30 pm IST, equals 8:00 am ET / 1:00 pm BST / 2:00 pm CEST / 4:00 pm GST in summer, and 7:00 am ET / noon GMT / 1:00 pm CET / 4:00 pm GST in winter.

### Inferences
- The 5:30 pm IST slot is well placed for US-East mornings only until 31 October 2026; from 1 November it lands at 7 am ET, before ReactIn's 8 am window, so shift the US-targeted slot to 6:30 pm IST in winter. It remains mid-afternoon for UK/EU (acceptable, past their morning peak) and late afternoon for the Gulf (weak).
- If two weekly slots are feasible, the evidence supports Tue/Wed ~1:00 pm IST (UK/EU morning, Gulf late morning) and Tue/Thu ~6:30 pm IST (US-East morning, US-West early). India's own peak (8–10 am IST) is irrelevant unless Indian readers are a target.
- Weekends are consistently weak in every dataset (Sprout: avoid; ReactIn: 31% of weekday impressions). The Gulf's Sunday–Thursday week means a Thursday post hits their last workday and a Sunday post hits their first; a Tuesday post is safe for all regions.

### Gaps
- No dataset splits results by author time zone versus audience time zone, so none can say whether a post published at 6:30 pm IST and seen by US readers at 8 am ET behaves like a US-posted 8 am post.
- ReactIn's Gulf window has no stated sample size; I found no other Gulf-specific 2026 data.
- Buffer and Sprout/ReactIn disagree by roughly six hours on the best local hour; the most likely explanation is sample mix (creators scheduling via Buffer vs brand pages in Sprout), but no source reconciles them.

---

## Key question 5: Links (body vs first comment vs edited in later), hashtags, tagging

### Takeaway
Links in the body cost reach on every dataset (van der Blom 2026: −18.8% median for one link; MagicPost same-author: −21% since mid-May 2026; single-author tests: −45%), and the first-comment workaround now also costs something but less (MagicPost: −16% since mid-May 2026, up from −8%; Sesto test: −15%; AuthoredUp still recommends it; Forbes/Dataslayer claim it is fully patched). Hashtags are "a nice to have, not a need to have" per LinkedIn's Laura Lorenzetti and carry a small measured penalty when used (van der Blom 2026 via Goodman: no-hashtag posts outperform by 5–10%). Tagging is only useful when the tagged person engages; "10+ tags = −47%" is widely repeated but untraceable.

### Cited Findings

**Links**
- LinkedIn's Laura Lorenzetti: "Our algorithm is really focusing on the value and content that's being shared in the post"; links are not penalised if the post itself adds value. Buffer's own data: link posts get less engagement, and links in comments do not appear to hurt. **[LI quote; Buffer data]** — [Buffer algorithm article](https://buffer.com/resources/linkedin-algorithm/)
- Van der Blom 2026 (1.3M posts): one external link in the post body reduces median reach by 18.8%. Goodman also states comments containing external links can see visibility reduced by up to 80% (unattributed). **[DATA via Goodman; second figure VENDOR]** — [Melanie Goodman](https://melaniegoodmanlinkedinconsultant.substack.com/p/linkedin-algorithm-2026-reach-topic-authority)
- MagicPost (pooled 566,957 posts in the 12 months to June 2026; same-author comparisons from a ~687,000-post study; updated 5 Jun 2026): pooled medians: typed URL in body 858 impressions (n=69,166) vs 786 no-link (n=464,864); attached link card 414 (n=32,927). Same-author effect before mid-May 2026 → since mid-May 2026: URL in body −12% → −21%; first-comment link −8% → −16%; attached link card −39% → −19%. Posts with a "link in the comments" line sit ~11% below the author's average both before and after late July 2026. Edited-in-later links: not measured. Domain effects (YouTube vs own site): not measured. Share of posts with attached cards fell from 12.2% (2022) to 5.6% (2026). **[DATA]** — [MagicPost: Do external links kill your LinkedIn reach?](https://magicpost.in/blog/linkedin-external-links-reach)
- Kristen Sesto's controlled test (summarised by Chad Wyatt): ~−45% for a link in the body, ~−15% for a first-comment link by the author; the comment-link post still underperformed the no-link version. **[single-author test]** — [Chad Wyatt: Do links impact LinkedIn post performance?](https://chad-wyatt.com/social-media/do-links-impact-linkedin-post-performance/)
- Forbes (Jodie Cook, 30 Jul 2026): in-body link cut ~60%; moving the link to the first comment "now incurs the same penalty". I could not read the article (HTTP 403); figures are from secondary summaries and Forbes names no dataset in those summaries. **[press, unverified basis]** — [Forbes](https://www.forbes.com/sites/jodiecook/2026/07/30/the-linkedin-link-penalty-cutting-your-reach-by-60/)
- Dataslayer: ~60% less reach for external links; first-comment workaround "also penalized since early 2026" (no data). SocialPilot: same 60% figure cited to DigitalApplied; "LinkedIn patched the first-comment workaround in early 2026". **[VENDOR]** — [Dataslayer](https://www.dataslayer.ai/blog/linkedin-algorithm-february-2026-whats-working-now); [SocialPilot](https://www.socialpilot.co/blog/linkedin-algorithm)
- Gromming (vendor): in-body −40% to −50%, first comment −5% to −10%. **[VENDOR]** — [Gromming](https://gromming.com/blog/linkedin-external-links-penalty)
- AuthoredUp (Sep 2026 update) still recommends putting links in the first comment and says native video beats YouTube links; no numeric link data. **[DATA source, qualitative on links]** — [AuthoredUp](https://authoredup.com/blog/best-performing-content-on-linkedin)
- Counter-signal: a Saywhat Q1 2026 analysis of nearly 400,000 posts found posts with multiple external links performed "considerably better" than posts with none (no multiplier given; likely confounded by author type). **[DATA, via Goodman]** — [Melanie Goodman](https://melaniegoodmanlinkedinconsultant.substack.com/p/linkedin-algorithm-2026-reach-topic-authority)
- LinkedIn removed the plain website hyperlink from profiles but "will continue to support website links with the custom button feature through the Premium Business plan". **[LI via Social Media Today]** — [Social Media Today](https://www.socialmediatoday.com/news/linkedin-removes-custom-cta-button-for-profiles/749089/)

**Hashtags**
- Laura Lorenzetti (LinkedIn): hashtags are "a nice to have, not a need to have"; use three or fewer. **[LI quote]** — [Buffer algorithm article](https://buffer.com/resources/linkedin-algorithm/)
- LinkedIn removed hashtag following in 2024, so hashtags now function as a search/categorisation signal rather than a distribution channel. **[OLDER change, VENDOR report]** — [ContentIn: Do hashtags work on LinkedIn?](https://contentin.io/blog/do-hashtags-work-on-linkedin/)
- Van der Blom 2026 via Goodman: posts without hashtags outperform those with them by 5–10%; default 0–3; 10+ hashtags risk a 30–50% visibility penalty; targeted event hashtags can lift performance up to 25%. **[DATA attribution unclear; VENDOR]** — [Melanie Goodman](https://melaniegoodmanlinkedinconsultant.substack.com/p/linkedin-algorithm-2026-reach-topic-authority)
- MagicPost (large sample, medians): one hashtag 35 median likes vs 32 with none vs 15 with five hashtags; more tags → lower median impressions. **[DATA]** — [MagicPost hashtags](https://magicpost.in/blog/linkedin-hashtag-generator-are-hashtags-still-useful-on-linkedin)
- Conflicting vendor claims ("3–5 hashtags = +30% reach"; ">3 hashtags = −71%") have no traceable datasets. **[VENDOR]** — [eclincher](https://www.eclincher.com/articles/linkedin-hashtags-101-everything-you-need-to-know-in-2026); [Sales and Marketing Engineers](https://www.salesandmarketingengineers.co.uk/the-ultimate-linkedin-posting-guide-for-2026)

**Tagging**
- Mechanics: tagged members get a notification (and email unless disabled); you can tag non-connections but LinkedIn may limit it; caps reported as 25 people per text post and 30 per photo post; tags can be added after publishing except on photos. **[VENDOR, consistent across sources]** — [Waalaxy: tagging 2026](https://www.waalaxy.com/blog/linkedin-platform-knowledge/linkedin-tag); [SalesRobot: how to tag](https://www.salesrobot.co/blogs/how-to-tag-someone-on-linkedin)
- "Tagging more than 10 people causes a 47% drop in reach" is attributed by one blog to "500+ B2B profiles" and by another to "621,000 posts"; neither names the study. **[VENDOR, unverified]** — [BrewBrand](https://www.brewbrand.ai/blog/how-to-tag-someone-in-a-linkedin-post)
- Practitioner consensus: a tag only helps if the tagged person engages; a tagged executive who ignores or reports the tag yields "a notification-driven blip and nothing else" and can cost the relationship. — [SignalPosts: tagging executives](https://www.signalposts.com/blog/tagging-executives-in-your-linkedin-post-boosts-reach-for-an-hour-and-costs-you-)
- LinkedIn Help lists "Tagged people, companies, or topics" as a Content signal. **[LI]** — [LinkedIn Help](https://www.linkedin.com/help/linkedin/answer/a1339724)

### Inferences
- The "link in first comment" rule from earlier work is now a smaller-but-real cost (roughly −8% to −16% vs no link on the best data) rather than free; the pre-2026 "zero penalty" belief is out of date. For portfolio traffic the better 2026 pattern is: post with no link at all, keep the website in the headline/About/custom button, and add the URL in a reply only when someone asks, or post the link in a comment some hours later once the first 4-hour window (40% of reach) has passed. The latter is untested in any dataset; it is an inference from the lifespan data.
- The specific phrase "link in the comments" inside the post is itself measured as −11%; if a link must be mentioned, do not use that phrase.
- Hashtags: zero to one is the evidence-based default in 2026, not 1–3; the only measured upside is for event or campaign tags.
- Tag at most two or three people who contributed to the work and will reply; never tag for reach.

### Gaps
- No source measures links edited into the post after publishing.
- No source measures link domain effects (own portfolio domain vs GitHub vs YouTube) in 2026.
- The Forbes "first-comment loophole closed" claim could not be checked against its basis.

---

## Key question 6: Profile features for an independent consultant in 2026

### Takeaway
The free "Add services" section shows only a preview of your services description; the "Request services" button, media in the services section and the Services Showcase require Premium Business (or Sales Navigator / Recruiter Lite). The Premium custom button is now the only way to put a clickable website link on a profile, and its clicks are reported per post. Creator Mode no longer exists as a toggle (its features are on every profile), the gold "Community Top Voice" badge was retired in October 2024 and the blue Top Voice badge is invitation-only, and identity verification has LinkedIn-claimed profile-view and engagement lifts but no confirmed feed boost.

### Cited Findings

**Services section ("Providing services")**
- LinkedIn Help ("Offer services on LinkedIn with your personal profile", last updated "1 year ago"): path is Me → View Profile → Add profile section → Add services. Fields: services offered, optional About, work location with remote checkbox, optional starting hourly rate or "Contact for pricing" ("Starting price is intended to show buyers the minimum amount you charge"), media (documents, photos, videos, websites; requires Premium), and an optional checkbox to let buyers message you regardless of connection degree. Without Premium "the Services section shows only a preview of your services description". With Premium Business, Sales Navigator or Recruiter Lite you get a Services Showcase (description preview, ratings, most recent 4–5-star review) and a "Request services" button at the top of the profile, in feed posts, in messages and in search results. You cannot later move services between profile and Company Page. **[LI]** — [LinkedIn Help: Offer services with your personal profile](https://www.linkedin.com/help/linkedin/answer/a569554)
- LinkedIn's Service Pages topic describes them as free landing pages that "operate on a request and proposal model", discoverable in search by members in and outside your network depending on public-profile visibility; prospects answer qualifying questions before requesting a proposal. **[LI]** — [LinkedIn Help: Service Pages topic](https://www.linkedin.com/help/linkedin/topic/a190032)
- Perception vs "Open to Work": a LinkedIn-expert guide advises freelancers/consultants against the #OpenToWork badge because "it looks like you need work", and points to Providing Services as the alternative that frames you as a provider; Fortune (Sep 2024) reported recruiters saying the Open-to-Work banner can make candidates look "desperate". I found no study comparing how clients perceive the Services badge. **[opinion; OLDER press]** — [LinkedIn Pulse: Open to Work feature](https://www.linkedin.com/pulse/how-activate-open-work-feature-your-linkedin-); [Fortune](https://www.fortune.com/2024/09/05/linkedin-opentowork-badge-recruiters-job-search)
- A 2026 vendor guide claims leaving the consultation toggle off "roughly halves inbound"; no data. **[VENDOR]** — [connectsafely: Providing Services guide](https://connectsafely.ai/articles/linkedin-providing-services-section-guide-2026)
- Service categories must be picked from LinkedIn's list (up to 10); a common complaint is that the list is restrictive. **[VENDOR]** — [TBD Marketing](https://www.tbdmarketing.co.uk/adding-services-to-your-linkedin-profile/)

**Custom button and Premium Business**
- Premium custom profile CTA buttons (added 2023) let you pick from label options such as "Visit my website" / "Visit my store" and attach a URL; LinkedIn removed the plain profile hyperlink and says it "will continue to support website links with the custom button feature through the Premium Business plan". Post analytics now show custom-button clicks per post ("Link engagement"), including repeat clicks; destination types tracked include website, portfolio, appointment booking, newsletter and services. **[LI via Social Media Today]** — [SMT: LinkedIn removes custom CTA button for profiles](https://www.socialmediatoday.com/news/linkedin-removes-custom-cta-button-for-profiles/749089/); [SMT: post analytics](https://www.socialmediatoday.com/news/linkedin-adds-more-data-insights-to-post-analytics/749211/)
- Reviewers call the button "solid for personal brand-building and visibility, not a sales tool"; Premium Business is quoted at $59.99/month and judged "rarely worth it for lead generation" on its own. **[VENDOR opinion]** — [FirstLines: Sales Navigator vs Premium](https://firstlines.ai/blog/sales-navigator-vs-linkedin-premium)
- Sales Navigator pricing in 2026 reviews ranges from $99/month (Core) to $119.99/month list ($89.99 annual), Advanced $149–159.99; 50 InMails/month, 50+ filters, lead lists, alerts; 30-day trial; one reviewer's rule: under ~50 outreaches/month, Premium Business suffices. The "312% ROI" figure is attributed inconsistently to LinkedIn's own calculator and to Forrester. **[VENDOR]** — [JoinValley review](https://www.joinvalley.co/blog/is-linkedin-sales-navigator-worth-it-in-2026-honest-review); [SmartReach pricing](https://smartreach.io/blog/linkedin-sales-navigator-cost-and-plans/)
- Van der Blom: when someone follows him, LinkedIn prompts them to subscribe to his newsletter and ~60% do; newsletters now report opens and per-link clicks. — [Creator Science ep. 307](https://creatorscience.com/podcast/richard-van-der-blom-2/)

**Creator tools, badges, verification**
- Creator Mode toggle is gone (phased out from early 2024); Follow button, Featured section, audience analytics and newsletters are available on all profiles; creator analytics live under Me → View Profile → Analytics → Show all. **[VENDOR, consistent]** — [Waalaxy: Creator mode 2026](https://www.waalaxy.com/blog/linkedin-platform-knowledge/linkedin-creator-mode); [valueyournetwork](https://www.valueyournetwork.com/en/linkedin-creator-mode-2026/)
- Gold "Community Top Voice" badge (from collaborative articles) was retired, announced 8 Oct 2024; the blue Top Voice badge is invitation-only, selected by LinkedIn's editorial team, with no application; under newer rules an invited member keeps it for at least six months and can be renewed. **[OLDER change; VENDOR/press]** — [Insidea: gold badge is over](https://insidea.com/blog/linkedin/linkedin-community-top-voice-gold-badge-is-over); [Blog du Modérateur](https://www.blogdumoderateur.com/linkedin-revoit-politique-concernant-badges-top-voice/)
- Verification: LinkedIn's own marketing claim is that verified members get 60% more profile views and 50% more engagement; no confirmed algorithmic feed boost; vendor claims of "+35% acceptance" are unsourced. LinkedIn expanded profile and page verification tools in July 2026. **[LI claim via vendor; LI via TechCrunch]** — [SalesRobot: verified profiles](https://www.salesrobot.co/blogs/linkedin-verified-profiles-outreach-acceptance-rates); [TechCrunch](https://techcrunch.com/2026/07/30/linkedin-adds-a-button-to-report-ai-generated-slop/)
- Headline: 220-character limit; roughly the first 70 characters show in mobile previews; LinkedIn's Lorenzetti notes the headline appears beside every post and shapes credibility. The "+40% profile views" and "40% of consultants open with 'I help'" figures are unsourced. **[LI quote; VENDOR figures]** — [Buffer algorithm article](https://buffer.com/resources/linkedin-algorithm/); [Derrick: headline limits](https://derrick-app.com/linkedin/profile/headline)
- Van der Blom on profile: rewriting his profile to match his two topics produced more profile visits and reach within three weeks (Feb 2026), consistent with profile text feeding the topic fingerprint. — [Creator Science ep. 307](https://creatorscience.com/podcast/richard-van-der-blom-2/)
- Third-party roundups claim consultants can add booking/payment links to profiles and that verified profiles get engagement priority; I could not confirm either against LinkedIn. **[VENDOR, unverified]** — [SocialPilot new features](https://www.socialpilot.co/blog/new-linkedin-features-and-updates)

### Inferences
- For someone employed full time who wants client work, the Services section is the badge that signals "available for projects" without signalling "looking for a job"; on a free account it is a text preview only, so its value is mostly in search discoverability and the message-anyone checkbox. Pick two or three narrow categories that match the posting topics so the profile fingerprint stays coherent.
- The Premium custom button ("Visit my website") is now the only clickable profile link; given the measured link penalties in posts, it is the cheapest way to route profile visitors to the portfolio, and its per-post click analytics make it measurable. Premium Business is justified only for the button, the "Request services" button and the Services Showcase; Sales Navigator only if doing weekly outbound.
- Verification is free and worth doing for trust; do not expect reach from it.
- Featured section: pin the best diagram post, the newsletter and the portfolio card (image + link) since it is where profile visitors from Suggested posts land.

### Gaps
- No data on how many enquiries the Services section generates for consultants, or on conversion of "Request services".
- No LinkedIn source confirms the "Open to providing services" photo-frame treatment or its current visibility rules; the help page uses "Add services" and does not mention a frame.
- No data on About-section length vs profile clicks in 2026.
- I could not confirm any genuinely new 2026 profile feature beyond the July 2026 verification expansion and post-level custom-button click analytics.

---

## Key question 7: Connection growth with evidence (acceptance rates, invite limits, follow vs connect, interest graph)

### Takeaway
On the two largest disclosed datasets, a note does not raise acceptance (Belkins/Expandi 20M+: 26.42% with vs 26.37% without; Reachium 180,155 matured requests: pooled 22.6% with vs 27.7% without, reversed within accounts, so "inconclusive") but roughly doubles replies after acceptance (Reachium: 47.8% vs 25.5%; Belkins: 9.36% vs 5.44% of sent). Typical acceptance for cold outreach is 26–30%; it rises with sender network size (34.9% at 5,000+ connections) and falls when sending more than ~20 invites a day. The weekly invite cap is not published; vendors converge on ~100 per rolling 7 days.

### Cited Findings

**Acceptance and notes**
- Belkins study on Expandi's platform (20M+ outreach attempts, year unstated): acceptance 26.42% with a personalised note vs 26.37% without; reply rate 9.36% vs 5.44% (72% lift). Expandi Connector campaigns H1 2026: 29.61% average acceptance; "healthy band" 25–30%. **[DATA, automation platform]** — [Expandi: connection message templates](https://expandi.io/blog/linkedin-connection-message-templates/)
- Reachium (441,965 sequences; 204,847 requests sent 8 Jan 2025–6 Aug 2026; matured cohort 180,155; 10 largest customers = 76.19% of requests): accepted 27.11% of sent; replied 27.55% of accepted (7.47% of sent); meeting booked 1.99% of accepted (0.54% of sent). With note vs without (19,516 vs 160,639): acceptance 22.60% vs 27.66% pooled, but within the three accounts with enough volume in both groups the gap was +8.74, +0.81 and −9.89 points (Simpson's paradox), so the study calls acceptance "inconclusive"; replies among accepted 47.80% vs 25.54% (gap held at 15–28 points in all three paired accounts); replies per sent 10.80% vs 7.06%; meetings per accepted 1.29% vs 2.06% (weak evidence, 57 bookings). Note content and length not analysed. **[DATA]** — [Reachium: Do connection notes work?](https://www.reachium.io/research/do-connection-notes-work); [Reachium benchmarks 2026](https://www.reachium.io/research/linkedin-outreach-benchmarks-2026)
- Reachium other cuts: acceptance by sender network size (98,500 requests) 34.9% at 5,000+ connections vs 23.2% at 500–999 (author notes causality likely runs the other way); by daily volume (180,155) 32.0% at 10–19 invites/day vs 26.7% at 20–29; by company size 18.9% at 1–10 employees vs 25.9% at 10,001+; by industry 19.8% (Energy) to 30.9% (Business Services); 2025 → 2026 acceptance 26.3% → 28.1% while replies as share of accepted fell 32.2% → 22.0%; weekend sends within 0.27 points of weekdays; median time to acceptance 25.4 hours, 46.7% within a day, 92.0% within 30 days; median send-to-meeting 5.83 days. **[DATA]** — [Reachium benchmarks 2026](https://www.reachium.io/research/linkedin-outreach-benchmarks-2026)
- ReactIn (80,000+ automated requests, 2024–2025): 55–68% acceptance without a note vs 28–45% with; Botdog (16,492 invitations): 37% overall, blank requests accepted more. Both are templated-automation samples where notes read as pitches. **[DATA, automation-biased]** — [ReactIn](https://www.reactin.io/blog/linkedin-connection-request-with-or-without-note); [Botdog](https://www.botdog.co/blog-posts/linkedin-acceptance-rates)

**Invite limits**
- LinkedIn publishes no number. Vendor guides converge on ~100 invitations per rolling 7-day window (reset seven days after the first invite of the cycle, not on a calendar day), with claims of up to 150–200 for high-SSI or Sales Navigator accounts and ~80 for new or low-acceptance accounts; withdrawing pending invites does not restore quota; LinkedIn also restricts accounts with many pending/ignored invites. Spread sends at 15–20/day. **[VENDOR, consistent]** — [Snov.io invitation limit](https://snov.io/blog/linkedin-invitation-limit/); [JoinValley invitation limit](https://www.joinvalley.co/blog/linkedin-invitation-limit-in-2025-weekly-limits-more); [Cleverly](https://www.cleverly.co/blog/bypass-linkedin-weekly-invitation-limit)

**Follow vs connect; interest graph**
- Connections are capped at 30,000; followers are unlimited; both see your public posts; connecting is two-way (feeds and messaging), following is one-way. **[VENDOR, mechanics]** — [linkedinpreview: follow vs connect 2026](https://linkedinpreview.com/blog/linkedin-follow-vs-connect-2026)
- Van der Blom: connection-based share of initial distribution fell to 10% in 2026 while the interest graph rose to 50%; comments you leave now shape which topics you are shown for; likes/comments from 2nd/3rd-degree members are a strong signal. **[DATA via his posts/interview]** — [CaptureFlow](https://captureflow.ai/playbooks/richard-van-der-blom); [Creator Science ep. 307](https://creatorscience.com/podcast/richard-van-der-blom-2/)
- LinkedIn Help: "People who follow you" and "Topics you've shown interest in" are Activity signals; posts from "someone you follow or are connected to" are a Content signal. **[LI]** — [LinkedIn Help](https://www.linkedin.com/help/linkedin/answer/a1339724)
- Reachium: 51.5% of first replies arrive 09:00–18:00 UTC; weekend reply volume 42% below weekdays. **[DATA]** — [Reachium benchmarks 2026](https://www.reachium.io/research/linkedin-outreach-benchmarks-2026)

### Inferences
- For client-hunting rather than mass outreach, send a short, specific note: it does not change acceptance but roughly doubles the chance the person replies, which is the outcome that matters. Keep volume at 10–19 invites/day at most (acceptance drops above that), and since 92% of acceptances arrive within 30 days, withdraw invitations older than that to avoid the pending-invite restriction.
- Because distribution is now interest-based, connecting with 500 people in your topic (AI/data leaders, founders) does more than connecting with 500 random accepters: their engagement teaches the interest graph who else should see your posts. Connections outside the topic add feed noise and dilute the fingerprint.
- Cross-region connection requests should be sent during the recipient's working hours (09:00–18:00 UTC covers UK/EU and the US morning) since that is when replies happen.

### Gaps
- No 2025–2026 dataset reports acceptance rates for non-automated, individually written requests from a personal account; all large samples are from outreach platforms.
- No source gives acceptance by sender country or for India-to-US requests.
- No LinkedIn confirmation of the weekly invitation cap or its variation by account.

---

## Key question 8: Benchmarks (impressions per post at 1K–5K followers, good engagement rate, time from 1K to 5K)

### Takeaway
Across tool datasets the median post gets 400–800 impressions (ContentIn: 412; AuthoredUp: 679–959 depending on frequency; MagicPost: 786 for no-link posts), and the median impression-based engagement rate for 1K–5K-follower accounts is 2.2–2.9% (ContentIn 2.19–2.42%; AuthoredUp 2.68%; MagicPost 2.87%), with ~4.9% (MagicPost 75th percentile) to 7.65% (ContentIn 90th percentile) counting as strong. Time from 1K to 5K is not measured anywhere; applying Creator's median monthly growth rates (5–10%/month at 500–2,500 followers, 3–6% at 2,500–10,000) gives roughly 18–30 months at median performance, and 9–12 months at top-quartile performance.

### Cited Findings
- AuthoredUp (372,812 posts, Sep 2025–Feb 2026): median engagement rate by followers: 0–1,000 2.56% (17,238 posts); 1,001–5,000 2.68% (132,021); 5,001–20,000 2.53%; 20,001–50,000 2.38%; 50,001–100,000 1.78%; 100,001+ 1.53%. Median impressions per post by frequency: 679 (1/wk), 741 (2–3/wk), 870 (4–5/wk), 959 (6–7/wk), 586 (8+/wk). **[DATA]** — [AuthoredUp](https://authoredup.com/blog/best-performing-content-on-linkedin)
- ContentIn (100,459–100,572 posts from ~1,055 accounts, 2023–Aug 2026; engagement rate on 93,696 posts with impressions; medians; updated 25 Aug 2026): overall median impressions 412 per post; engagement rate by followers: under 1,000 2.17% (median 5 engagements); 1,000–2,499 2.19% (7); 2,500–4,999 2.42% (9); 5,000–9,999 2.24% (10); 10,000+ 1.77% (13). Overall median 2.29%, mean 3.62%, 90th percentile "strong post" 7.65%. By format: text-only 1.54%, image 2.94%, video 2.78%, document 2.67%. Follower-gained data has been empty since July 2026 (LinkedIn stopped exposing it to the tool). **[DATA]** — [ContentIn engagement benchmarks](https://contentin.io/blog/linkedin-engagement-benchmarks/)
- MagicPost (~501,000 posts): median view-based engagement rate 2.63% overall; for 1K–5K followers typical 2.87%, "good" (75th percentile) 4.85%; follower-based median for 1K–5K is 0.74% (different denominator). Pooled median impressions 786 for no-link posts (n=464,864). **[DATA]** — [MagicPost average engagement rate](https://magicpost.in/blog/average-engagement-rate-on-linkedin); [MagicPost links study](https://magicpost.in/blog/linkedin-external-links-reach)
- Van der Blom 2025 guide via DowSocial: average post reach 8–12% of followers, down from 15–20% a year earlier (i.e., 160–240 impressions for a 2,000-follower account). **[OLDER, VENDOR-relayed]** — [DowSocial](https://www.dowsocial.com/linkedin-algorithm-2026/)
- Outx rule of thumb: a post reaches ~5–10% of follower count; "good" for an established personal networker is 500–1,500 impressions per post. **[VENDOR]** — [Outx](https://www.outx.ai/blog/good-number-linkedin-impressions)
- Creator (tracked "1,000+ B2B founders and agency clients", updated May 2026): median monthly follower growth 8–15% at 0–500 followers, 5–10% at 500–2,500, 3–6% at 2,500–10,000, 2–4% at 10,000–25,000; top quartile 15–25% (500–2,500) and 8–14% (2,500–10,000); "stalling" below 2% and 1.5% respectively. Milestones for a new account posting 3–5×/week with 30 min/day engagement: 1,000 followers in 60–90 days, 5,000 in 6–9 months (these milestones imply faster growth than the same page's median rates). Outlier posts at 3–5× normal reach can add 50–200 followers in a day. **[VENDOR, partial method]** — [Creator: follower growth benchmarks](https://www.getcreator.io/stats/linkedin-follower-growth-rate)
- Van der Blom: follower growth across the platform is down year over year (2025 report: −42% per SocialPilot, −59% per Dataslayer). **[OLDER, conflicting relays]** — [SocialPilot](https://www.socialpilot.co/blog/linkedin-algorithm); [Dataslayer](https://www.dataslayer.ai/blog/linkedin-algorithm-february-2026-whats-working-now)
- Company-page context (not individuals): Metricool found average impressions on company pages down 10% year over year while clicks per post rose 5%; one analysis says company pages now reach ~1.6% of followers. **[DATA via press; VENDOR]** — [NetInfluencer on Metricool](https://www.netinfluencer.com/linkedin-engagement-shifts-toward-clicks-as-visible-metrics-decline-study-finds/); [Cleverly](https://www.cleverly.co/blog/linkedin-impressions-vs-members-reached)

### Inferences
- Compound-growth arithmetic on Creator's medians: at 7%/month, 1K→5K takes ~24 months; at 10%/month ~17 months; at 20%/month (top quartile) ~9 months. For an account posting 2–3 times a week (below the 3–5×/week assumed in Creator's milestones) and commenting modestly, 18–30 months is the realistic median expectation; the fast path depends on a few outlier posts and consistent commenting.
- Impressions benchmarks from tool datasets are biased upward (users of scheduling tools post more and more deliberately); 300–800 impressions per post is a reasonable "normal" band for a 1K–5K account in 2026, and the 8–12%-of-followers rule gives the floor.
- Measure engagement rate as (reactions + comments + reposts + saves) / impressions and compare to 2.5% (median) and 5% (strong) for this tier; follower-based rates are not comparable.

### Gaps
- No source directly measures time from 1K to 5K followers; the estimate above is derived.
- Tool datasets do not report median impressions by follower tier (only overall medians and engagement rates by tier).
- LinkedIn stopped exposing followers-gained-per-post to at least one analytics tool in July 2026, so 2026 follower-growth benchmarks are thin.

---

## Key question 9: Does LinkedIn treat author location, or penalise posting from India for a US audience?

### Takeaway
LinkedIn names the viewer's location (under Identity) and the post's language (under Content) as ranking signals, but nothing from LinkedIn or any dataset indicates a penalty on the author's country; the geography-based retrieval source (trending-by-geography) was one of five pipelines replaced in March 2026 by the unified LLM retrieval. Practically, location affects you through (a) who your early engagers are, since first-degree connections and the test audience skew to your own region and time zone, and (b) the interest graph, which now accounts for ~50% of initial distribution and is topic-based, not location-based.

### Cited Findings
- LinkedIn Help: Identity signals include "Your profile details such as location, workplace, and skills"; Content signals include "The language of the post". No statement about author location. **[LI]** — [LinkedIn Help](https://www.linkedin.com/help/linkedin/answer/a1339724)
- The pre-2026 feed had a dedicated "trending posts by geography" retrieval source; the March 2026 rebuild replaced the five sources with one LLM-embedding retriever that matches posts to inferred interests. **[LI engineering via coverage]** — [ppc.land](https://ppc.land/linkedin-rebuilds-its-feed-from-scratch-with-llms-and-gpu-powered-ranking/)
- Van der Blom: interest graph ~50% of initial distribution in 2026 vs connections ~10%; LinkedIn selects audiences by topic relevance and expertise. **[DATA via his posts]** — [CaptureFlow](https://captureflow.ai/playbooks/richard-van-der-blom)
- Buffer/LinkedIn staff: the initial audience is connections and followers, then knowledge-rich posts reach beyond the network based on inferred interests. **[LI via Buffer]** — [Buffer algorithm article](https://buffer.com/resources/linkedin-algorithm/)
- Single first-hand anecdote (Reddit, Dec 2025): a Premium user reported impressions falling from 1,000+ to under 100 per post after moving from Europe to the US, with no explanation from LinkedIn support; two comments, no corroboration. **[anecdote]** — [Reddit snapshot](https://reddit.sentinel-team.org/posts/1pptpyf/snapshots/2025-12-19T04%3A00%3A31.95132Z)
- Market size: the US is the largest LinkedIn market (~230–250M members) and India second (~135–161M members, but an estimated 40–45M monthly actives, ~30% activity, vs ~45–50% in the US). **[VENDOR estimates]** — [Countly: users by country](https://countly.net/linkedin-users-by-country-2026-updated-global-numbers-insights); [Sales So: statistics by country](https://salesso.com/blog/linkedin-statistics-by-country/)
- ContentIn's "engagement by region" page (updated May 2026) carries 2024 figures with no method and reuses numbers across claims; not usable as evidence. **[OLDER, VENDOR]** — [ContentIn region page](https://contentin.io/blog/linkedin-engagement-by-region-2025-data/)
- ReactIn tracks audience location (US, EU, Global) but publishes no author-location split. **[DATA, no relevant cut]** — [ReactIn best time](https://www.reactin.io/blog/best-time-to-post-on-linkedin)

### Inferences
- There is no evidence of an India-origin penalty. The real mechanism is composition: if most first-degree connections are Indian, the first wave of impressions and comments will be Indian and in IST working hours, which then shapes the interest-graph audience. Deliberately building connections and comment relationships with US/UK/EU practitioners in the same topic, posting in their morning, and writing in English about problems they recognise is what moves distribution toward them; the location field itself is a viewer-side signal.
- The language signal matters: posts in English with US/UK terminology will be matched to English-language interest clusters; mixing Indian-market idioms is a mild negative for a global audience.

### Gaps
- No dataset compares reach by author country vs audience country in 2025–2026; the question of whether a Hyderabad-based author is disadvantaged with US readers is unanswered by data.
- No source explains whether the "location" Identity signal is used to localise Suggested posts.
