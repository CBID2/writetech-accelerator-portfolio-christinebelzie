import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './projects.module.css';

const ProjectList = [
  {
    title: 'Chimoney API Documentation',
    slug: 'api-documentation',
    description: 'Complete API documentation suite with OpenAPI specifications, developer guides, and interactive examples for the Chimoney payment platform.',
    preview: '/img/api-docs-preview.png', // You can add this image later
    tags: ['API Documentation', 'OpenAPI', 'Developer Experience'],
    demoLink: '/docs/api-documentation/',
    githubLink: '#', // Add your GitHub link
    featured: true,
  },
  {
    title: 'AI Documentation Project',
    slug: 'ai-documentation',
    description: 'Comprehensive documentation for AI/ML models including model cards, prompt engineering guides, and reflection on AI documentation best practices.',
    preview: '/img/ai-docs-preview.png', // You can add this image later
    tags: ['AI/ML Documentation', 'Model Cards', 'Prompt Engineering'],
    demoLink: '/docs/ai-documentation/',
    githubLink: '#', // Add your GitHub link
    featured: true,
  },
  {
    title: 'Automation Workflows',
    slug: 'automation-workflows',
    description: 'Documentation for automated workflows, including OpenAPI specifications and sample implementations for streamlined development processes.',
    preview: '/img/automation-preview.png', // You can add this image later
    tags: ['Workflow Documentation', 'Automation', 'OpenAPI'],
    demoLink: '/docs/automation-workflows/',
    githubLink: '#', // Add your GitHub link
    featured: false,
  },
  {
    title: 'Documentation Tooling',
    slug: 'documentation-tooling',
    description: 'User guides and installation documentation for developer tools, including browser extensions, PWAs, and quick-start guides.',
    preview: '/img/tooling-preview.png', // You can add this image later
    tags: ['User Guides', 'Installation Docs', 'Developer Tools'],
    demoLink: '/docs/documentation-tooling/',
    githubLink: '#', // Add your GitHub link
    featured: false,
  },
];

function ProjectCard({title, slug, description, preview, tags, demoLink, githubLink, featured}) {
  return (
    <div className={clsx('col col--6', styles.projectCard, featured && styles.featured)}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <div className={styles.previewContainer}>
            {preview ? (
              <img src={preview} alt={`${title} preview`} className={styles.preview} />
            ) : (
              <div className={styles.previewPlaceholder}>
                <span>📄</span>
              </div>
            )}
          </div>
          {featured && <div className={styles.featuredBadge}>Featured</div>}
        </div>
        <div className={styles.cardBody}>
          <h3 className={styles.cardTitle}>{title}</h3>
          <p className={styles.cardDescription}>{description}</p>
          <div className={styles.tags}>
            {tags.map((tag, idx) => (
              <span key={idx} className={styles.tag}>{tag}</span>
            ))}
          </div>
        </div>
        <div className={styles.cardFooter}>
          <Link
            className={clsx('button button--primary', styles.button)}
            to={demoLink}>
            View Documentation
          </Link>
          <Link
            className={clsx('button button--secondary button--outline', styles.button)}
            to={`/projects/${slug}`}>
            Project Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Projects"
      description="Technical writing projects and documentation deliverables by Christine">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Technical Writing Projects</h1>
          <p className="hero__subtitle">
            A showcase of documentation projects, API guides, and technical content I've created
          </p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="#featured-projects">
              Explore Projects
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.projects} id="featured-projects">
          <div className="container">
            <div className="row">
              <div className="col col--12">
                <h2 className={styles.sectionTitle}>Featured Projects</h2>
                <p className={styles.sectionSubtitle}>
                  Highlighting key technical writing deliverables across API documentation, 
                  AI/ML documentation, and developer experience.
                </p>
              </div>
            </div>
            <div className="row">
              {ProjectList.filter(project => project.featured).map((props, idx) => (
                <ProjectCard key={idx} {...props} />
              ))}
            </div>
            
            <div className="row" style={{marginTop: '2rem'}}>
              <div className="col col--12">
                <h3 className={styles.sectionTitle}>Additional Projects</h3>
              </div>
            </div>
            <div className="row">
              {ProjectList.filter(project => !project.featured).map((props, idx) => (
                <ProjectCard key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>

        <section className={styles.stats}>
          <div className="container">
            <div className="row">
              <div className="col col--3">
                <div className={styles.statCard}>
                  <h3>4+</h3>
                  <p>Documentation Projects</p>
                </div>
              </div>
              <div className="col col--3">
                <div className={styles.statCard}>
                  <h3>API</h3>
                  <p>Specifications Written</p>
                </div>
              </div>
              <div className="col col--3">
                <div className={styles.statCard}>
                  <h3>Multiple</h3>
                  <p>Documentation Tools</p>
                </div>
              </div>
              <div className="col col--3">
                <div className={styles.statCard}>
                  <h3>Open Source</h3>
                  <p>Contributions</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}