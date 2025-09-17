import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './project-detail.module.css';

const projectData = {
  title: 'Chimoney API Documentation',
  subtitle: 'Complete API documentation suite for payment platform',
  overview: 'Comprehensive API documentation for Chimoney, a digital payment platform that enables seamless money transfers and wallet management. This project involved creating developer-friendly documentation from OpenAPI specifications, including interactive examples and clear getting-started guides.',
  challenge: 'The challenge was to transform complex payment API endpoints into accessible, developer-friendly documentation that would reduce integration time and support developer success.',
  solution: 'Created a complete documentation suite including OpenAPI specifications, interactive API reference, getting started guides, and practical code examples. Implemented clear navigation structure and comprehensive error handling documentation.',
  technologies: [
    'OpenAPI 3.0',
    'Docusaurus',
    'Markdown',
    'YAML',
    'JSON Schema'
  ],
  features: [
    'Interactive API reference with live examples',
    'Comprehensive getting started guide',
    'Detailed endpoint documentation',
    'Error handling and status codes',
    'Authentication and security guides',
    'SDK integration examples'
  ],
  deliverables: [
    {
      title: 'OpenAPI Specification',
      description: 'Complete OpenAPI 3.0 specification file',
      link: '/docs/api-documentation/chimoney-spec.yaml',
      type: 'YAML'
    },
    {
      title: 'Getting Started Guide',
      description: 'Step-by-step developer onboarding',
      link: '/docs/api-documentation/getting-started',
      type: 'Guide'
    },
    {
      title: 'API Reference',
      description: 'Complete endpoint documentation',
      link: '/docs/api-documentation/reference/chimoney/',
      type: 'Reference'
    }
  ],
  metrics: {
    endpoints: '15+',
    pages: '10+',
    examples: '25+'
  },
  github: 'https://github.com/CBID2/writetech-accelerator-portfolio-christinebelzie/blob/main/docs/api-documentation/getting-started.md', // Add your GitHub link
  liveDemo: '/docs/api-documentation/getting-started'
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
                <span className={styles.featureIcon}>✅</span>
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
            <div key={idx} className="col col--4">
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
            <h2>Project Metrics</h2>
          </div>
        </div>
        <div className="row">
          <div className="col col--4">
            <div className={styles.metricCard}>
              <div className={styles.metricNumber}>{metrics.endpoints}</div>
              <div className={styles.metricLabel}>API Endpoints Documented</div>
            </div>
          </div>
          <div className="col col--4">
            <div className={styles.metricCard}>
              <div className={styles.metricNumber}>{metrics.pages}</div>
              <div className={styles.metricLabel}>Documentation Pages</div>
            </div>
          </div>
          <div className="col col--4">
            <div className={styles.metricCard}>
              <div className={styles.metricNumber}>{metrics.examples}</div>
              <div className={styles.metricLabel}>Code Examples</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ApiDocumentationProject() {
  return (
    <Layout
      title={projectData.title}
      description={projectData.subtitle}>
      <ProjectHeader {...projectData} />
      <main>
        <ProjectOverview {...projectData} />
        <KeyFeatures features={projectData.features} />
        <ProjectDeliverables deliverables={projectData.deliverables} />
        <ProjectMetrics metrics={projectData.metrics} />
        
        <section className={styles.navigation}>
          <div className="container">
            <div className="row">
              <div className="col col--6">
                <Link
                  className="button button--secondary button--outline"
                  to="/projects">
                  ← Back to Projects
                </Link>
              </div>
              <div className="col col--6" style={{textAlign: 'right'}}>
                <Link
                  className="button button--primary"
                  to="/projects/ai-documentation">
                  Next Project: AI Documentation →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}