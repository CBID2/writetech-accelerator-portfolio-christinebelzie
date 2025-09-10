---
sidebar_position: 4
---

# GPT-4 Frequently Asked Questions

## Model Overview

**Q: What is GPT-4?**

A: GPT-4 is a large model that accepts both image and text inputs and emits text outputs. It represents the latest milestone in OpenAI's effort in scaling up deep learning and displaying human-level performance on various professional and academic benchmarks.

**Q: How does GPT-4 compare to GPT-3.5?**

A: GPT-4 is more reliable, creative, and able to handle much more nuanced instructions than GPT-3.5. The difference becomes even more apparent when task complexity reaches a sufficient threshold.

**Q: What makes GPT-4 different from previous GPT models?**

A: Unlike previous text-only GPT models, GPT-4 processes both text and images to generate text outputs. This enables image description, screenshot analysis, and visual problem-solving.

## Technical Specifications & Training

**Q: How was GPT-4 trained?**

A: GPT-4 uses the same training as previous GPT models: predicting the next word in documents. In contrast, it was trained on a more diverse mix of both public internet data and licensed content, including correct and incorrect math solutions, weak and strong reasoning examples, and content representing diverse ideologies and perspectives on specific topics.

**Q: What is the context length for GPT-4?**

A: GPT-4 offers two context lengths: the standard 8,192 tokens and GPT-4-32k with 32,768 tokens (approximately 50 pages of text) through limited access.

**Q: How did OpenAI ensure predictable scaling with GPT-4?**

A: OpenAI built systems that work predictably at different sizes, allowing them to estimate how well GPT-4 would perform by testing much smaller versions first.

## Multimodal Capabilities

**Q: What can GPT-4 do with images?**

A: GPT-4 accepts multimodal prompts (text and images) and generates text outputs, performing tasks like describing images, summarizing screenshots, and answering visual exam questions.

**Q: Are image inputs publicly available?**

A: Image inputs are still in research preview and not publicly available. OpenAI is currently collaborating with a single partner to make the image input capability available for a wider audience.

**Q: How does GPT-4 perform on visual benchmarks?**

A: GPT-4 scores 77.2% on VQAv2, 78.0% on TextVQA, 78.5% on ChartQA, and 88.4% on DocVQA.

## Performance & Capabilities

**Q: How well does GPT-4 perform on standardized tests?**

A: GPT-4 achieves strong performance across many exams, scoring in the 88th percentile on LSAT, 93rd percentile on SAT Reading & Writing, and 99th-100th percentile on USABO Semifinal Exam 2020.

**Q: How does GPT-4 perform in different languages?**

A: GPT-4 outperforms GPT-3.5 and other large language models in 24 of 26 languages tested on the translated MMLU benchmark, including low-resource languages like Latvian, Welsh, and Swahili.

**Q: What coding capabilities does GPT-4 have?**

A: GPT-4 achieves 67.0% on HumanEval Python coding tasks, significantly outperforming GPT-3.5's 48.1%, but scores below the 5th percentile on Codeforces Rating, showing limitations in competitive programming.

## Limitations & Risks

**Q: What are GPT-4's main limitations?**

A: GPT-4 still has similar limitations to earlier GPT models in that it that it is not fully reliable, "hallucinates" facts, makes reasoning errors, and generally lacks knowledge of events after September 2021. In contrast, GPT-4 exhibits distinctive issues like being confidently wrong in predictions and introducing security vulnerabilities into code it produces.

**Q: How does GPT-4's factual accuracy compare to previous models?**

A: In comparison to previous models like the latest GPT-3.5, GPT-4 significantly reduces hallucinations, scoring 40% higher on internal adversarial factuality evaluations in nine categories including learning, technology, writing, history, math, science, recommendation, code, and business.

**Q: What safety risks does GPT-4 pose?**

A: Similar to previous models, GPT-4 poses risks such as generating harmful advice, buggy code, or inaccurate information. However, its additional capabilities lead to new risk surfaces that require expertise in domains such as cybersecurity, AI alignment, and biorisk to evaluate.

## Safety & Alignment

**Q: What safety measures has OpenAI implemented for GPT-4?**

A: OpenAI used lessons from adversarial testing and ChatGPT, incorporating an additional safety reward signal during RLHF training.

**Q: How does GPT-4 handle sensitive requests?**

A: GPT-4 responds to sensitive requests (such as medical advice and self-harm) by declining to provide harmful information in accordance with OpenAI's safety guidelines.

**Q: Can GPT-4 still be "jailbroken"?**

A: Yes, OpenAI acknowledges that system messages are currently the easiest way to jailbreak the model. To fix this, they are working on a more robust system for model-level interventions.

## Access & Pricing

**Q: How can I access GPT-4?**

A: GPT-4 is available to ChatGPT Plus subscribers via chatgpt.com with usage limits, while API access requires signing up for the waitlist with gradual scaling based on capacity and demand.

**Q: What is the pricing for GPT-4 API access?**

A: It varies based on the model. For example, the pricing for the standard GPT-4 model is $0.03 per 1K prompt tokens and $0.06 per 1K completion tokens. For The 32K context version (GPT-4-32k), the pricing is $0.06 per 1K prompt tokens and $0.12 per 1K completion tokens, with default rate limits of 40K tokens per minute and 200 requests per minute.
