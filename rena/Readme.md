# MENA Esports Platform - Internal Roadmap

## Executive Summary

A **community-focused esports competition platform** for the MENA region, launching first in **Tunisia**. Inspired by Challengermode, we're building a unified ecosystem that connects **Brands**, **Tournament Organizers**, and **Players** around PC esports competitions. Our competitive advantage: deep local relationships and a community-first approach in an underserved market.

---

## Core Concept

### What We're Building

A **tournament-centric esports platform** that:

- Provides professional tournament management tools
- Connects local brands with esports audiences
- Builds a thriving competitive gaming community
- Starts lean, grows with the community

### Why Tunisia First

| Factor | Opportunity |
|--------|-------------|
| **Underserved Market** | No dominant regional platform |
| **Young Population** | 60%+ under 30, digital natives |
| **Gaming Growth** | PC esports culture expanding rapidly |
| **Our Advantage** | Strong existing network of organizers, teams, venues |
| **Gateway Position** | Tunisia as launchpad to Maghreb, then broader MENA |

### Our Differentiator: Community First

We're not building a product and hoping people come. We're **building with the community we already know**:

- Partner with existing organizers from day one
- Involve local teams in platform feedback
- Create value for the scene before extracting value from it

---

## Platform Features

### For Players

| Feature | Description |
|---------|-------------|
| **Tournament Discovery** | Browse competitions by game, date, prize pool, skill level |
| **Team Management** | Create teams, manage rosters, track team stats |
| **Rankings & Ladders** | ELO-based rankings, seasonal leaderboards |
| **Match History** | Full history with stats and replays links |
| **Profiles** | Player cards, achievements, social connections |

### For Organizers

| Feature | Description |
|---------|-------------|
| **Tournament Engine** | Single/double elimination, Swiss, round-robin, leagues |
| **Automation** | Bracket generation, seeding, scheduling, check-ins |
| **Customization** | Rules, entry requirements, prize structures |
| **Participant Management** | Registration, communication, dispute handling |
| **Analytics** | Participation stats, engagement metrics |

### For Brands/Sponsors

| Feature | Description |
|---------|-------------|
| **Sponsored Tournaments** | Branded competitions with logo placement |
| **Visibility Options** | Banner ads, naming rights, social mentions |
| **Audience Access** | Direct reach to engaged gaming demographic |
| **Activation Support** | Help designing esports marketing campaigns |

---

## Supported Games (Launch)

| Game | Why |
|------|-----|
| **Valorant** | Fastest growing tactical shooter, huge in MENA |
| **CS2** | Legacy esports title, established competitive scene |
| **League of Legends** | Largest MOBA, strong team-based competition |
| **Dota 2** | Dedicated competitive community |
| **Rocket League** | Accessible, growing scene |

### Future Expansion
- FIFA/FC (massive football gaming culture)
- Mobile titles (PUBG Mobile, Free Fire) for broader reach

---

## Business Model (High-Level)

### Revenue Streams

```
                    ┌─────────────────────┐
                    │   REVENUE SOURCES   │
                    └─────────────────────┘
                              │
        ┌─────────────────────┼─────────────────────┐
        ▼                     ▼                     ▼
┌───────────────┐     ┌───────────────┐     ┌───────────────┐
│    BRANDS     │     │   PLAYERS     │     │  ORGANIZERS   │
├───────────────┤     ├───────────────┤     ├───────────────┤
│ • Sponsorship │     │ • Premium     │     │ • Pro tools   │
│   packages    │     │   membership  │     │   subscription│
│ • Branded     │     │ • Entry fees  │     │ • Commission  │
│   tournaments │     │   (commission)│     │   on paid     │
│ • Advertising │     │ • Cosmetics   │     │   tournaments │
└───────────────┘     └───────────────┘     └───────────────┘
```

### Payment Approach: Hybrid Model

| Type | How It Works |
|------|--------------|
| **Platform-Managed** | We handle entry fees, escrow, and payouts for verified tournaments |
| **Organizer-Managed** | Organizers handle their own prizes; we provide tools only |

This gives flexibility: small community tournaments stay simple, while larger events get full platform support.

### Monetization Philosophy

**Phase 1 (Bootstrap):** Free tools, build community, no monetization
**Phase 2 (Traction):** Introduce premium features, first brand deals
**Phase 3 (Scale):** Full revenue model activation

---

## Go-to-Market Strategy

### Phase 1: Community Building (Months 1-4)

**Goal:** Become the default platform for Tunisia's PC esports scene

- Launch MVP with core tournament features
- Onboard 5-10 organizers from our network
- Run weekly free tournaments (Valorant, CS2)
- Partner with gaming cafes for offline-online hybrid events
- **Target:** 2,000 registered players, 15 active organizers

### Phase 2: Monetization (Months 5-8)

**Goal:** Prove revenue model works

- Introduce premium memberships
- Launch first sponsored tournament series
- Add paid entry fee tournaments (with prize pools)
- **Target:** First paying customers (players + 1-2 brands)

### Phase 3: Regional Expansion (Months 9-12+)

**Goal:** Expand beyond Tunisia

- Launch in Algeria, Morocco
- Develop mobile app
- Enterprise features for larger organizers
- **Target:** 10,000+ players across Maghreb

---

## Competitive Advantage

| Our Strength | vs. Global Platforms |
|--------------|----------------------|
| **Local Network** | Existing relationships with TN esports scene |
| **Community Trust** | Known faces, not faceless corporation |
| **Regional Focus** | Dedicated to MENA, not afterthought |
| **Lean & Fast** | Can adapt quickly to community needs |
| **Understands Culture** | Arabic context, local payment methods, regional timing |

---

## Technical Overview

### Core Stack (Recommended)

| Layer | Technology |
|-------|------------|
| **Frontend** | React/Next.js (Web), React Native (Mobile later) |
| **Backend** | Node.js with NestJS or Python with FastAPI |
| **Database** | PostgreSQL + Redis for caching |
| **Real-time** | WebSocket for live bracket updates |
| **Hosting** | Cloud provider with MENA region (AWS/GCP) |

### Key Integrations Needed

- **Game APIs:** Riot (Valorant, LoL), Steam (CS2, Dota 2) for match verification
- **Payments:** Local options (Flouci, D17) + international (Stripe)
- **Communication:** Discord integration for team/tournament coordination
- **Streaming:** Twitch/YouTube embed support

---

## Success Metrics

### Growth
- Monthly Active Users (MAU)
- New registrations per week
- Player retention (30-day, 90-day)

### Engagement
- Tournaments created per month
- Matches played per user
- Average participants per tournament

### Revenue (Phase 2+)
- Monthly Recurring Revenue (MRR)
- Conversion rate (free → paid)
- Brand deal value

### Community Health
- Organizer satisfaction
- Player NPS (Net Promoter Score)
- Community event participation

---

## Next Steps (Immediate Priorities)

### This Week
- [ ] Finalize founding team roles
- [ ] Validate MVP feature list with 3 organizer contacts
- [ ] Choose tech stack and development approach (build vs. adapt)

### This Month
- [ ] Design basic wireframes/mockups
- [ ] Start MVP development
- [ ] Create list of launch organizers and games
- [ ] Set up social media presence

### Before Launch
- [ ] Beta test with small group of trusted organizers
- [ ] Prepare first tournament calendar
- [ ] Create onboarding materials for organizers

---

## Appendix: Founders Discussion Questions

These are key strategic decisions to discuss with co-founders. Current choices are marked, but revisit as needed.

---

### 1. Primary Platform Focus

| Option | Description | Our Choice |
|--------|-------------|------------|
| **Tournament hosting** | Core focus on running competitions and brackets | **Selected** |
| Community building | Social features, teams, rankings, player networking | |
| Brand marketplace | Connecting sponsors with esports events | |
| All-in-one platform | Equal focus on all three aspects | |

**Discussion:** Should we narrow further or stay flexible?

---

### 2. Games at Launch

| Option | Description | Our Choice |
|--------|-------------|------------|
| Mobile-first | PUBG Mobile, Free Fire, Mobile Legends (higher reach) | |
| **PC esports** | Valorant, CS2, League of Legends, Dota 2 | **Selected** |
| Mixed mobile + PC | Both categories from the start | |
| FIFA/FC only | Focus on football gaming (huge in Tunisia) | |

**Discussion:** Are we missing opportunity by not including mobile/FIFA at launch?

---

### 3. Primary Paying Customer

| Option | Description | Our Choice |
|--------|-------------|------------|
| Brands/Sponsors | B2B focus - brands pay for activations | |
| Players | B2C focus - subscriptions, entry fees, premium | |
| Organizers | B2B2C - organizers pay for tools | |
| **Hybrid model** | Multiple revenue streams from all stakeholders | **Selected** |

**Discussion:** Should we pick ONE primary customer for initial focus?

---

### 4. Payment/Prize Handling

| Option | Description | Our Choice |
|--------|-------------|------------|
| Platform-managed | We collect fees, hold prizes, handle payouts (complex legally) | |
| Organizer-managed | Organizers handle their own prizes, we provide tools only | |
| **Hybrid approach** | Both options available depending on tournament type | **Selected** |

**Discussion:** What's minimum viable for launch? Legal implications?

---

### 5. Budget/Resources Reality

| Option | Description | Our Choice |
|--------|-------------|------------|
| **Bootstrap** | Self-funded, minimal budget, lean MVP | **Selected** |
| Small seed ($10-30K) | Some runway for development and launch | |
| Looking for investment | Need to pitch investors/partners | |
| Have funding ($50K+) | Ready to build properly | |

**Discussion:** Should we seek seed funding before building?

---

### 6. Key Differentiator

| Option | Description | Our Choice |
|--------|-------------|------------|
| Arabic-first | Deep localization, Arabic UI, local culture | |
| Best tools | Superior tournament management features | |
| **Community focus** | Building the regional esports community first | **Selected** |
| Brand connections | Making it easy for brands to sponsor local esports | |

**Discussion:** Is "community focus" concrete enough? How do we prove it?

---

### 7. Document Purpose (This Doc)

| Option | Description | Our Choice |
|--------|-------------|------------|
| **Internal roadmap** | For founders/team to align on vision | **Selected** |
| Partner pitch | To show potential organizers/brands | |
| Investor deck | To raise funding from investors | |
| All purposes | Comprehensive doc covering all angles | |

**Discussion:** Do we need separate documents for different audiences?

---

### 8. Business Model Detail Level

| Option | Description | Our Choice |
|--------|-------------|------------|
| **High-level only** | Revenue streams and general concepts | **Selected** |
| Specific pricing | Exact pricing tiers with numbers | |
| Financial projections | Include revenue forecasts and growth targets | |

**Discussion:** When should we define specific pricing?

---

### 9. Technical Requirements Detail

| Option | Description | Our Choice |
|--------|-------------|------------|
| No tech details | Focus on business and strategy only | |
| **Brief overview** | High-level tech stack and key integrations | **Selected** |
| Detailed specs | Full technical architecture and requirements | |

**Discussion:** Who's handling technical decisions? Do we need deeper specs?

---

*Document Version: 1.0*
*Created: January 2026*
*Status: Internal Roadmap - Founders Review*
