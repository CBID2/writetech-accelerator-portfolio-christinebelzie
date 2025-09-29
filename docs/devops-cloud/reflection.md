---
sidebar_position: 6
---

# Reflection

## What I Learned

- **Good documentation requires testing every single step.** I couldn't just write from memory—I had to follow my own instructions from scratch. This caught issues like forgetting to mention committing changes before pushing or not explaining what the `--force` flag does.

- **Structure matters as much as content.** My first draft was one long page that would've been overwhelming. Breaking it into separate files (setup, step-by-step, troubleshooting, summary) made the information more digestible.

- **Documentation architecture is a real thing.** How you organize information affects how usable it is. Users rarely read linearly—they jump to what they need, so navigation and structure are crucial.

- **Writing for people who can't ask follow-up questions is different.** In conversations, you can clarify information on the spot. With documentation, you get one chance to be clear, which made me reconsider almost every sentence.

## Challenges

- **Writing the troubleshooting section meant deliberately breaking things.** I had to anticipate user problems by testing different failure scenarios. The sidebar configuration error I hit became perfect material, but I also had to test wrong build commands and missing dependencies.

- **Keeping the tone consistent across all pages took multiple passes.** Some sections came out too stiff, others too chatty. Finding that balance of formal and plain language took a lot of trial and error.

- **Choosing the right format for different types of information.** I initially put everything in bullet points, but some content works better as tables (deployment settings) or code blocks. Learning when to use admonitions (tip/warning boxes) versus regular text took experimentation.

- **Anticipating questions was harder than expected.** Every step needed context and explanation, not just commands. I had to constantly ask myself "what would someone wonder about this?" to add the right amount of detail.

- **Fighting the urge to be too verbose.** My first drafts were way too detailed, so I had to cut back on the content to keep it readable.

## Key Takeaways

- **Always test your own instructions.** If you can't follow your own docs from start to finish, neither can anyone else. Walking through my guide caught so many missing steps.

- **Error messages are documentation gold.** Real problems with real solutions (like my sidebar configuration error) are more valuable than hypothetical scenarios. Users searching for errors want exact matches.

- **Visual hierarchy increases readability.** Strategic use of headings, bold text, code blocks, and admonitions makes docs scannable. People jump to what they need rather than reading everything.

- **Audience definition shapes everything.** At first, I was not sure who the audience was, but then I remembered it was supposed to user-friendly and developer-focused. From there, my decisions about detail level, tone, and what to explain became much easier.

