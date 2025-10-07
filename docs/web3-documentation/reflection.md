---
sidebar_position: 6
---

# Reflection

## What I Learned

- **Web3 documentation requires a completely different mental model.** Writing about Lens meant shifting from "accounts" to "Profile NFTs" and "sharing" to "mirroring." This wasn't just terminology—users need to understand ownership, permanence, and decentralization before they can use the features. I had to front-load significantly more educational content than traditional software docs.

- **The setup process is the hardest part to document.** Users need wallets, blockchain networks, gas fees, and token transfers configured before touching the actual product. This forced me to create a funnel: explain why it matters, what you need, how to get it, then finally how to use it. You can't skip to features like traditional app docs.

- **Writing for Web3 newcomers means addressing fear, not just confusion.** Users aren't just learning—they're scared of expensive mistakes. "What if I lose my recovery phrase?" "What if I send funds wrong?" This changed everything. I added explicit cost estimates, safety warnings throughout, and an FAQ focused on "is it safe?" rather than just "how does it work?"

- **Testing everything yourself is non-negotiable.** I set up MetaMask, bought MATIC, claimed a profile, and tested every feature. Only by seeing actual transaction times, MetaMask prompts, and real errors could I write accurately. Secondhand research would have produced misleading guidance about costs and timing.

## Challenges

- **Explaining blockchain concepts without overwhelming beginners.** How do you explain "Profile NFT" to someone who doesn't know what NFTs are? I used layered explanations: simple analogies first, basic glossary for essentials, deeper context when needed. I cut an entire section on Layer 2 scaling because it was technically accurate but would scare off most readers.

- **Balancing technical accuracy with accessibility.** The correct explanation of gas fees involves validators, block space, and EIP-1559. Beginners just need: "You pay $0.01-$0.10 per transaction, varies with network traffic." I struggled with oversimplifying, but decided successful onboarding trumped complete technical precision. I linked to deeper resources for those wanting more.

- **Finding reliable, current Lens information.** The protocol evolves rapidly—features change, apps disappear, costs fluctuate. I found conflicting information everywhere. To ensure accuracy, I cross-referenced official docs, Discord, Twitter, and most importantly, tested everything myself. Every claim was validated through actual usage.

- **Organizing for non-linear user journeys.** Users don't follow docs sequentially. My first outline was linear (intro → setup → features), but users jump around. I restructured to make each section self-contained with cross-references. Troubleshooting needed to be findable from anywhere. This took three rewrites.

- **Handling security concerns without inducing panic.** Web3 has real risks: irrevocable transactions, phishing, permanent data. I needed warnings without making beginners too afraid to start. I integrated calm, factual warnings into relevant sections with ⚠️ icons, avoiding alarmist language. The goal was informed caution, not fear.

## Key Takeaways

- **Front-load the "why" before the "how."** Users need motivation to overcome Web3's friction. My introduction explaining profile ownership became the most important section—it gives users a reason to tolerate wallet setup complexity. People push through difficult onboarding if they understand the payoff.

- **Cost transparency builds trust.** Vague "small fees apply" destroys credibility. Including specific costs ("$0.50-$2 for claiming," "$0.01-$0.10 per post") made the guide honest and useful. Next time I'd add a "Total Cost Estimate" callout: "Expect $5-10 to set up and test Lens."

- **Test first, outline second, write third.** Testing revealed nuances text alone couldn't capture: exact MetaMask wording, visual differences between networks, where buttons actually appear. Writing from research alone produces docs that sound right but break when users follow them.

- **Web3 docs need a maintenance plan.** Lens has already migrated versions and changed features. My guide will be outdated within months. Web3 docs should include "last updated" dates, version numbers, and community contribution options. Static documentation dies quickly in Web3.

---

## Optional: Process Notes

### What Went Well
- Modular structure made expanding sections easy
- Testing the entire flow caught errors research would have missed
- Glossary tables kept terminology consistent
- Real cost estimates added credibility over vague "fees apply"

### What Could Be Improved
- Need more visual aids and annotated screenshots
- Advanced features section feels rushed compared to setup
- Some sections got too technical despite accessibility goals
- Didn't fully explore all Lens apps (Lenstube, Buttrfly)

### Tools & Resources That Helped
- Hey.xyz for primary testing
- MetaMask for all transactions
- Polygonscan.com to verify gas costs
- Lens Discord for technical questions
- Official Lens docs for feature accuracy

### If I Did This Again, I Would...
- Take screenshots at every step before writing
- Create a gas cost spreadsheet to update easily
- Watch a complete beginner follow my guide
- Add a "Quick Start" section for impatient users
- Include mobile-specific troubleshooting
- Test with 2-3 people before considering it final