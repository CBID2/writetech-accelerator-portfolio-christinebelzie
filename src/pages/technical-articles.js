import React from 'react';
import Layout from '@theme/Layout';
import { BookOpen, ExternalLink, Calendar, Tag } from 'lucide-react';

const articlesData = [
  {
    title: "Building Developer-First API Documentation",
    platform: "Medium",
    date: "December 2024",
    tags: ["API Documentation", "Developer Experience"],
    summary: "A comprehensive guide to creating API documentation that developers actually want to use, covering best practices for structure, examples, and interactive elements.",
    link: "#",
    featured: true
  },
  {
    title: "Automating Documentation Quality with GitHub Actions",
    platform: "Dev.to",
    date: "November 2024", 
    tags: ["Automation", "CI/CD", "Documentation"],
    summary: "Learn how to set up automated workflows to catch documentation issues before they reach production, including linting, link checking, and style validation.",
    link: "#",
    featured: true
  },
  {
    title: "The Art of Technical Writing: Making Complex Simple",
    platform: "Technical Writing Blog",
    date: "October 2024",
    tags: ["Technical Writing", "Communication"],
    summary: "Exploring techniques for breaking down complex technical concepts into digestible, actionable content that serves both beginners and experts.",
    link: "#",
    featured: false
  },
  {
    title: "Documentation as Code: A Modern Approach",
    platform: "HashNode",
    date: "September 2024",
    tags: ["Docs-as-Code", "Version Control"],
    summary: "Why treating documentation like code revolutionizes how technical teams create, maintain, and collaborate on documentation projects.",
    link: "#",
    featured: false
  },
  {
    title: "Creating Inclusive Technical Documentation",
    platform: "Write the Docs",
    date: "August 2024",
    tags: ["Accessibility", "Inclusive Design"],
    summary: "Best practices for writing technical documentation that is accessible to users with diverse backgrounds, abilities, and experience levels.",
    link: "#",
    featured: false
  }
];

const topicAreas = [
  "API Documentation",
  "Developer Experience", 
  "Documentation Automation",
  "Technical Writing Best Practices",
  "Docs-as-Code Workflows",
  "Information Architecture",
  "User-Centered Design",
  "Accessibility in Documentation"
];

export default function TechnicalArticles() {
  const featuredArticles = articlesData.filter(article => article.featured);
  const otherArticles = articlesData.filter(article => !article.featured);

  return (
    <Layout
      title="Technical Articles"
      description="Explore Christine's technical writing articles covering API documentation, automation, and modern documentation practices."
    >
      <div className="container margin-vert--lg">
        {/* Header Section */}
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="text--center margin-bottom--xl">
              <h1 className="hero__title">
                <BookOpen size={40} style={{ marginRight: '12px', verticalAlign: 'middle' }} />
                Technical Articles
              </h1>
              <p className="hero__subtitle">
                Insights on documentation, developer experience, and technical communication
              </p>
            </div>
          </div>
        </div>

        {/* Featured Articles */}
        <div className="row margin-bottom--xl">
          <div className="col">
            <h2 className="margin-bottom--lg">Featured Articles</h2>
            <div className="row">
              {featuredArticles.map((article, index) => (
                <div key={index} className="col col--6 margin-bottom--lg">
                  <div className="card h-100">
                    <div className="card__header">
                      <h3 className="card__title">{article.title}</h3>
                      <div className="margin-bottom--sm">
                        <span className="badge badge--primary margin-right--sm">
                          <Calendar size={14} style={{ marginRight: '4px' }} />
                          {article.date}
                        </span>
                        <span className="badge badge--secondary">
                          {article.platform}
                        </span>
                      </div>
                    </div>
                    <div className="card__body">
                      <p>{article.summary}</p>
                      <div className="margin-top--sm">
                        {article.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="badge badge--outline margin-right--xs margin-bottom--xs">
                            <Tag size={12} style={{ marginRight: '2px' }} />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="card__footer">
                      <a href={article.link} className="button button--primary button--block">
                        Read Article
                        <ExternalLink size={14} style={{ marginLeft: '4px' }} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Other Articles */}
        <div className="row margin-bottom--xl">
          <div className="col">
            <h2 className="margin-bottom--lg">More Articles</h2>
            {otherArticles.map((article, index) => (
              <div key={index} className="card margin-bottom--md">
                <div className="card__body">
                  <div className="row">
                    <div className="col col--8">
                      <h3 className="margin-bottom--sm">{article.title}</h3>
                      <p className="margin-bottom--sm">{article.summary}</p>
                      <div>
                        {article.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="badge badge--outline margin-right--xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="col col--4 text--right">
                      <div className="margin-bottom--sm">
                        <small className="text--muted">
                          <Calendar size={12} style={{ marginRight: '4px' }} />
                          {article.date}
                        </small>
                        <br />
                        <small className="text--muted">{article.platform}</small>
                      </div>
                      <a href={article.link} className="button button--primary">
                        Read Article
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Topic Areas */}
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="card">
              <div className="card__header text--center">
                <h2 className="card__title">Topics I Write About</h2>
                <p className="card__subtitle">
                  Areas of expertise and interest in technical communication
                </p>
              </div>
              <div className="card__body">
                <div className="text--center">
                  {topicAreas.map((topic, index) => (
                    <span key={index} className="badge badge--info margin-right--sm margin-bottom--sm">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}