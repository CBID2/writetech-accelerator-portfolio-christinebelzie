---
sidebar_position: 3
title: AI Output
---

# GPT-4 Frequently Asked Questions

## Model Overview

**Q: What is GPT-4?**
A: GPT-4 is a large multimodal model developed by OpenAI that accepts both image and text inputs and emits text outputs. It represents the latest milestone in OpenAI's effort in scaling up deep learning and exhibits human-level performance on various professional and academic benchmarks.

**Q: How does GPT-4 compare to GPT-3.5?**
A: While the distinction between GPT-3.5 and GPT-4 can be subtle in casual conversation, GPT-4 is more reliable, creative, and able to handle much more nuanced instructions than GPT-3.5. The difference becomes apparent when task complexity reaches a sufficient threshold.

**Q: What makes GPT-4 different from previous GPT models?**
A: GPT-4 is a large multimodal model developed by OpenAI that accepts both image and text inputs and emits text outputs. It represents the latest milestone in OpenAI's effort in scaling up deep learning and exhibits human-level performance on various professional and academic benchmarks.

**Q: How does GPT-4 compare to GPT-3.5?**
A: While the distinction between GPT-3.5 and GPT-4 can be subtle in casual conversation, GPT-4 is more reliable, creative, and able to handle much more nuanced instructions than GPT-3.5. The difference becomes apparent when task complexity reaches a sufficient threshold.

**Q: What makes GPT-4 different from previous GPT models?**
A: GPT-4 is the first GPT model to be multimodal, meaning it can process both text and images as input while generating text outputs. This enables capabilities like describing images, analyzing screenshots, and answering exam questions containing diagrams.

## Technical Specifications & Training

**Q: How was GPT-4 trained?**
A: Like previous GPT models, GPT-4 was trained to predict the next word in a document using publicly available data (such as internet data) and licensed data. The training involved a web-scale corpus including correct and incorrect solutions to math problems, weak and strong reasoning, and representing a variety of ideologies and ideas.

**Q: What is the context length for GPT-4?**
A: The standard GPT-4 has a context length of 8,192 tokens. OpenAI also provides limited access to GPT-4-32k, which has a 32,768-token context (about 50 pages of text).

**Q: How did OpenAI ensure predictable scaling with GPT-4?**
A: Like previous GPT models, GPT-4 was trained to predict the next word in a document using publicly available data (such as internet data) and licensed data. The training involved a web-scale corpus including correct and incorrect solutions to math problems, weak and strong reasoning, and representing a variety of ideologies and ideas.

**Q: What is the context length for GPT-4?**
A: The standard GPT-4 has a context length of 8,192 tokens. OpenAI also provides limited access to GPT-4-32k, which has a 32,768-token context (about 50 pages of text).

**Q: How did OpenAI ensure predictable scaling with GPT-4?**
A: OpenAI developed infrastructure and optimization with predictable behavior across multiple scales. They accurately predicted GPT-4's final loss by extrapolating from models trained using the same methodology but with 10,000x less compute, making their first large model whose training performance they could predict ahead of time.

## Multimodal Capabilities

**Q: What can GPT-4 do with images?**
A: GPT-4 can accept prompts containing both text and images, generating text outputs in response. It can describe humor in images, summarize text from screenshots, answer exam questions with diagrams, and exhibit similar capabilities to text-only inputs across domains including documents with text and photographs.

**Q: Are image inputs publicly available?**
A: No, image inputs are still in research preview and not publicly available. OpenAI is collaborating with a single partner to prepare the image input capability for wider availability.

**Q: How does GPT-4 perform on visual benchmarks?**
A: GPT-4 shows strong performance on academic vision benchmarks, including 77.2% on VQAv2, 78.0% on TextVQA, 78.5% on ChartQA, and 88.4% on DocVQA, often achieving 0-shot performance competitive with specialized models.

## Performance & Capabilities

**Q: How well does GPT-4 perform on standardized tests?**
A: GPT-4 passes a simulated bar exam with a score around the top 10% of test takers (compared to GPT-3.5's bottom 10%). It achieves strong performance across many exams, scoring in the 88th percentile on LSAT, 93rd percentile on SAT Reading & Writing, and 99th-100th percentile on USABO Semifinal Exam 2020.

**Q: How does GPT-4 perform in different languages?**
A: In 24 of 26 languages tested on the translated MMLU benchmark, GPT-4 outperforms the English-language performance of GPT-3.5 and other large language models, including for low-resource languages such as Latvian, Welsh, and Swahili.

**Q: What coding capabilities does GPT-4 have?**
A: GPT-4 passes a simulated bar exam with a score around the top 10% of test takers (compared to GPT-3.5's bottom 10%). It achieves strong performance across many exams, scoring in the 88th percentile on LSAT, 93rd percentile on SAT Reading & Writing, and 99th-100th percentile on USABO Semifinal Exam 2020.

**Q: How does GPT-4 perform in different languages?**
A: In 24 of 26 languages tested on the translated MMLU benchmark, GPT-4 outperforms the English-language performance of GPT-3.5 and other large language models, including for low-resource languages such as Latvian, Welsh, and Swahili.

**Q: What coding capabilities does GPT-4 have?** A: GPT-4 achieves 67.0% on HumanEval Python coding tasks (0-shot), significantly outperforming GPT-3.5's 48.1%. However, it still scores below the 5th percentile on Codeforces Rating, indicating limitations in competitive programming contexts.

## Limitations & Risks

**Q: What are GPT-4's main limitations?**
A: GPT-4 still has similar limitations to earlier GPT models. Most importantly, it is not fully reliable and "hallucinates" facts and makes reasoning errors. It generally lacks knowledge of events after September 2021, does not learn from experience, and can make simple reasoning errors or be overly gullible.

**Q: How does GPT-4's factual accuracy compare to previous models?**
A: GPT-4 significantly reduces hallucinations relative to previous models, scoring 40% higher than the latest GPT-3.5 on internal adversarial factuality evaluations across nine categories including learning, technology, writing, history, math, science, recommendation, code, and business.

**Q: What safety risks does GPT-4 pose?**
A: GPT-4 still has similar limitations to earlier GPT models. Most importantly, it is not fully reliable and "hallucinates" facts and makes reasoning errors. It generally lacks knowledge of events after September 2021, does not learn from experience, and can make simple reasoning errors or be overly gullible.

**Q: How does GPT-4's factual accuracy compare to previous models?**
A: GPT-4 significantly reduces hallucinations relative to previous models, scoring 40% higher than the latest GPT-3.5 on internal adversarial factuality evaluations across nine categories including learning, technology, writing, history, math, science, recommendation, code, and business.

**Q: What safety risks does GPT-4 pose?**
A: GPT-4 poses similar risks as previous models, such as generating harmful advice, buggy code, or inaccurate information. However, its additional capabilities lead to new risk surfaces. OpenAI engaged over 50 experts from domains like AI alignment, cybersecurity, and biorisk to adversarially test the model.

## Safety & Alignment

**Q: What safety measures has OpenAI implemented for GPT-4?**
A: OpenAI spent 6 months iteratively aligning GPT-4 using lessons from adversarial testing and ChatGPT, incorporating an additional safety reward signal during RLHF training. They decreased the model's tendency to respond to disallowed content by 82% compared to GPT-3.5.

**Q: How does GPT-4 handle sensitive requests?**
A: GPT-4 responds to sensitive requests (such as medical advice and self-harm) in accordance with OpenAI's policies 29% more often than GPT-3.5. The model is trained to refuse requests for harmful content as defined by usage guidelines.

**Q: Can GPT-4 still be "jailbroken"?**
A: OpenAI spent 6 months iteratively aligning GPT-4 using lessons from adversarial testing and ChatGPT, incorporating an additional safety reward signal during RLHF training. They decreased the model's tendency to respond to disallowed content by 82% compared to GPT-3.5.

**Q: How does GPT-4 handle sensitive requests?**
A: GPT-4 responds to sensitive requests (such as medical advice and self-harm) in accordance with OpenAI's policies 29% more often than GPT-3.5. The model is trained to refuse requests for harmful content as defined by usage guidelines.

**Q: Can GPT-4 still be "jailbroken"?**
A: Yes, there still exist "jailbreaks" to generate content that violates usage guidelines, though model-level interventions increase the difficulty of eliciting bad behavior. OpenAI acknowledges that system messages are currently the easiest way to jailbreak the model.

## Access & Pricing

**Q: How can I access GPT-4?**
A: GPT-4 is available through ChatGPT Plus with a usage cap, and via API access through a waitlist. ChatGPT Plus subscribers get access at chatgpt.com, while API access requires signing up for the waitlist with gradual scaling based on capacity and demand.

**Q: What is the pricing for GPT-4 API access?**
A: GPT-4 is available through ChatGPT Plus with a usage cap, and via API access through a waitlist. ChatGPT Plus subscribers get access at chatgpt.com, while API access requires signing up for the waitlist with gradual scaling based on capacity and demand.

**Q: What is the pricing for GPT-4 API access?**
A: For the standard GPT-4 model, pricing is $0.03 per 1K prompt tokens and $0.06 per 1K completion tokens. The 32K context version (GPT-4-32k) costs $0.06 per 1K prompt tokens and $0.12 per 1K completion tokens, with default rate limits of 40K tokens per minute and 200 requests per minute.
