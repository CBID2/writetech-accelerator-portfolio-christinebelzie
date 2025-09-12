import React from "react";
import styles from "./index.module.css";
import Link from "@docusaurus/Link";
import { BookOpen, Lightbulb, Handshake, Linkedin, Twitter, Github, PenTool, Rocket } from "lucide-react";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          {/* Add floating animation */}
          <div className={styles.heroIcon}>
            <Rocket size={48} />
          </div>
          
          {/* Add speech bubble */}
          <div className={styles.speechBubble}>
            "Show me what you've got in technical writing."
          </div>
          
          {/* Hero Card - like Mariam's personal intro */}
          <div className={styles.heroCard}>
            <h1 className={styles.title}>Christine Belzie</h1>
            <p className={styles.subtitle}>
              Technical Writer & Documentation Specialist
            </p>
            <p className={styles.tagline}>
              Docs shouldn't feel like a puzzle with missing pieces. I turn 
              complexity into clarity, so your users leave with 'aha!' 💡 moments, 
              not 'ugh' 😤 headaches.
            </p>
            
            <div className={styles.buttons}>
              <Link className={styles.primaryBtn} to="/docs/intro">
                🚀 Explore Portfolio
              </Link>
              <Link className={styles.secondaryBtn} to="/docs/api-documentation">
                📚 API Documentation
              </Link>
              <Link className={styles.secondaryBtn} to="/docs/ai-documentation/intro">
                ⚡ AI Documentation
              </Link>
              <a 
                className={styles.secondaryBtn} 
                href="https://your-resume-link-here.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                📄 Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className={styles.values}>
        <div className={styles.valueCard}>
          <div className={styles.featureIcon} style={{backgroundColor: '#f0f9ff'}}>
            <BookOpen className={styles.icon} color="#0ea5e9" />
          </div>
          <h3>Bridge complexity with clarity</h3>
          <p>
            Whether you're tackling satellite tech, or other complex concepts, I deliver documentation that's 
            easy to follow and thoughtfully structured.
          </p>
        </div>
        
        <div className={styles.valueCard}>
          <div className={styles.featureIcon} style={{backgroundColor: '#fffbeb'}}>
            <Lightbulb className={styles.icon} color="#f59e0b" />
          </div>
          <h3>Write with intent and impact</h3>
          <p>
            From technical tutorials to informative articles, my writing always starts with "Who am I helping, 
            and what do they need?"
          </p>
        </div>
        
        <div className={styles.valueCard}>
          <div className={styles.featureIcon} style={{backgroundColor: '#f0fdf4'}}>
            <Handshake className={styles.icon} color="#22c55e" />
          </div>
          <h3>User-Centric Editing</h3>
          <p>
            I ensure documentation works for all users, whether that means simplifying jargon, adding 
            visuals, or sharing process notes to explain how solutions were crafted.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.socials}>
            <a href="https://www.linkedin.com/in/christinebelzie" target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} /> LinkedIn
            </a>
            <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
              <Twitter size={20} /> Twitter
            </a>
            <a href="https://github.com/CBID2" target="_blank" rel="noopener noreferrer">
              <Github size={20} /> GitHub
            </a>
          </div>
          <p className={styles.copyright}>
            © 2025 Built by Christine Belzie – WriteTech Accelerator Programme 2025.
          </p>
        </div>
      </footer>
    </main>
  );
}