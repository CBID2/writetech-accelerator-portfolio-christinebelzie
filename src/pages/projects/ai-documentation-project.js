import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './project-detail.module.css';

const projectData = {
  title: 'AI Documentation Project',
  subtitle: 'Comprehensive documentation for AI/ML models and systems',
  overview: 'A comprehensive documentation project focused on AI and machine learning systems, including model cards, prompt engineering guides, and best practices for documenting AI systems. This project explores the unique challenges of documenting AI models and provides practical frameworks for technical writers in the AI space.',
  challenge: 'AI and ML systems present unique documentation challenges - how do you document systems that learn and change? How do you explain complex models to different audiences? This project tackled creating clear, actionable documentation for AI systems.',
  solution: 'Developed a comprehensive documentation framework including model cards, prompt engineering guides, and reflection pieces on AI documentation best practices. Created templates and guidelines that can be adapted for various AI/ML projects.',
  technologies: [
    'AI/ML Documentation',
    'Model Cards',
    'Prompt Engineering',
    'Technical Writing',
    'Documentation Strategy',
    'Markdown'
  ],
  features: [
    'Complete model card documentation',
    'Prompt engineering best practices',
    'AI system architecture documentation',
    'Performance metrics and evaluation',
    'Ethical considerations and limitations',
    'User guidance and implementation notes'
  ],
  deliverables: [
    {
      title: 'Model Card Documentation',
      description: 'Comprehensive model card with performance metrics',
      link: '/docs/ai-documentation/model_card',
      type: 'Documentation'
    },
    {
      title: 'Final Documentation',
      description: 'Complete AI system documentation',
      link: '/docs/ai-documentation/final_doc',
      type: 'Guide'
    },
    {
      title: 'Prompt Engineering Guide',
      description: 'Detailed prompt engineering methodology',
      link: '/docs/ai-documentation/prompt_used',
      type: 'Guide'
    },
    {
      title: 'Reflection & Best Practices',
      description: 'Insights on AI documentation challenges',
      link: '/docs/ai-documentation/reflection',
      type: 'Analysis'
    }
  ],
  metrics: {
    sections: '6+',
    pages: '5+',
    frameworks: '2+'
  },
  github: '#', // Add your GitHub link
  liveDemo: '/docs/ai-documentation/'
};

function ProjectHeader({title, subtitle, technologies}) {
  return (
    <header className={styles.projectHeader}>
      <div className="container">
        <div className="row">
          <div className="col col--8">
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.subtitle}>{subtitle}</p>
            <div className={styles.techStack}>
              {technologies.map((tech, idx) => (
                <span key={idx} className={styles.techTag}>{tech}</span>
              ))}
            </div>
          </div>
          <div className="col col--4">
            <div className={styles.projectActions}>
              <Link
                className="button button--primary button--lg"
                to={projectData.liveDemo}>
                📖 View Documentation
              </Link>
              <Link
                className="button button--secondary button--outline button--lg"
                to={projectData.github}>
                💻 GitHub Repository
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function ProjectOverview({overview, challenge, solution}) {
  return (
    <section className={styles.overview}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <h2>Project Overview</h2>
            <p className={styles.overviewText}>{overview}</p>
          </div>
        </div>
        <div className="row" style={{marginTop: '2rem'}}>
          <div className="col col--6">
            <div className={styles.card}>
              <h3>🎯 Challenge</h3>
              <p>{challenge}</p>
            </div>
          </div>
          <div className="col col--6">
            <div className={styles.card}>
              <h3>💡 Solution</h3>
              <p>{solution}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function KeyFeatures({features}) {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <h2>Key Features</h2>
          </div>
        </div>
        <div className="row">
          {features.map((feature, idx) => (
            <div key={idx} className="col col--6">
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>🤖</span>
                <span>{feature}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectDeliverables({deliverables}) {
  return (
    <section className={styles.deliverables}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <h2>Project Deliverables</h2>
          </div>
        </div>
        <div className="row">
          {deliverables.map((deliverable, idx) => (
            <div key={idx} className="col col--6">
              <div className={styles.deliverableCard}>
                <div className={styles.deliverableType}>{deliverable.type}</div>
                <h3>{deliverable.title}</h3>
                <p>{deliverable.description}</p>
                <Link
                  className="button button--primary button--sm"
                  to={deliverable.link}>
                  View {deliverable.type}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectMetrics({metrics}) {
  return (
    <section className={styles.metrics}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <h2>Project Impact</h2>
          </div>
        </div>
        <div className="row">
          <div className="col col--4">
            <div className={styles.metricCard}>
              <div className={styles.metricNumber}>{metrics.sections}</div>
              <div className={styles.metricLabel}>Documentation Sections</div>
            </div>
          </div>
          <div className="col col--4">
            <div className={styles.metricCard}>
              <div className={styles.metricNumber}>{metrics.pages}</div>
              <div className={styles.metricLabel}>Comprehensive Pages</div>
            </div>
          </div>
          <div className="col col--4">
            <div className={styles.metricCard}>
              <div className={styles.metricNumber}>{metrics.frameworks}</div>
              <div className={styles.metricLabel}>Documentation Frameworks</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SpecialInsights() {
  const insights = [
    {
      title: 'Model Cards as Documentation',
      description: 'Explored how model cards serve as both technical documentation and ethical accountability tools.',
      icon: '📊'
    },
    {
      title: 'Prompt Engineering Documentation',
      description: 'Developed frameworks for documenting prompt engineering processes and methodologies.',
      icon: '🎯'
    },
    {
      title: 'AI System Limitations',
      description: 'Created clear documentation patterns for communicating AI system limitations and boundaries.',
      icon: '⚠️'
    }
  ];

  return (
    <section className={styles.insights}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <h2>Key Insights</h2>
            <p className={styles.insightsSubtitle}>
              Special considerations and learnings from documenting AI systems
            </p>
          </div>
        </div>
        <div className="row">
          {insights.map((insight, idx) => (
            <div key={idx} className="col col--4">
              <div className={styles.insightCard}>
                <div className={styles.insightIcon}>{insight.icon}</div>
                <h3>{insight.title}</h3>
                <p>{insight.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function AiDocumentationProject() {
  return (
    <Layout
      title={projectData.title}
      description={projectData.subtitle}>
      <ProjectHeader {...projectData} />
      <main>
        <ProjectOverview {...projectData} />
        <KeyFeatures features={projectData.features} />
        <SpecialInsights />
        <ProjectDeliverables deliverables={projectData.deliverables} />
        <ProjectMetrics metrics={projectData.metrics} />
        
        <section className={styles.navigation}>
          <div className="container">
            <div className="row">
              <div className="col col--6">
                <Link
                  className="button button--secondary button--outline"
                  to="/projects/api-documentation">
                  ← Previous: API Documentation
                </Link>
              </div>
              <div className="col col--6" style={{textAlign: 'right'}}>
                <Link
                  className="button button--primary"
                  to="/projects">
                  Back to Projects →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}