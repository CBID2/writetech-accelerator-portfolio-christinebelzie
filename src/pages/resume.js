import React from 'react';
import Layout from '@theme/Layout';
import { Download, MapPin, Mail, Phone, Linkedin, Github, Calendar, Award, BookOpen } from 'lucide-react';

export default function Resume() {
  return (
    <Layout
      title="Resume"
      description="Christine Belzie's professional resume - Technical Writer & Documentation Specialist"
    >
      <div className="container margin-vert--lg">
        {/* Header Section */}
        <div className="row margin-bottom--xl">
          <div className="col col--8 col--offset-2">
            <div className="card">
              <div className="card__body text--center">
                <h1 className="margin-bottom--sm">Christine Belzie</h1>
                <h2 className="text--muted margin-bottom--lg">Technical Writer & Documentation Specialist</h2>
                
                <div className="row margin-bottom--lg">
                  <div className="col col--6">
                    <p className="margin-bottom--xs">
                      <MapPin size={16} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                      New York, NY
                    </p>
                    <p className="margin-bottom--xs">
                      <Mail size={16} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                      christine@example.com
                    </p>
                  </div>
                  <div className="col col--6">
                    <p className="margin-bottom--xs">
                      <Linkedin size={16} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                      linkedin.com/in/christinebelzie
                    </p>
                    <p className="margin-bottom--xs">
                      <Github size={16} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                      github.com/CBID2
                    </p>
                  </div>
                </div>
                
                <a href="#" className="button button--primary button--lg">
                  <Download size={16} style={{ marginRight: '8px' }} />
                  Download PDF Resume
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="row margin-bottom--xl">
          <div className="col col--8 col--offset-2">
            <div className="card">
              <div className="card__header">
                <h2 className="card__title">Professional Summary</h2>
              </div>
              <div className="card__body">
                <p>
                  Experienced Technical Writer and Documentation Specialist with 5+ years of expertise in creating 
                  developer-focused documentation, API guides, and user manuals. Proven track record of transforming 
                  complex technical concepts into clear, actionable content that improves user experience and reduces 
                  support tickets. Skilled in modern documentation tools, automation workflows, and collaborative 
                  development processes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="row margin-bottom--xl">
          <div className="col col--8 col--offset-2">
            <div className="card">
              <div className="card__header">
                <h2 className="card__title">Professional Experience</h2>
              </div>
              <div className="card__body">
                {/* Job 1 */}
                <div className="margin-bottom--lg">
                  <div className="row margin-bottom--sm">
                    <div className="col col--8">
                      <h3 className="margin-bottom--xs">Senior Technical Writer</h3>
                      <h4 className="text--muted margin-bottom--xs">TechCorp Solutions</h4>
                    </div>
                    <div className="col col--4 text--right">
                      <span className="badge badge--primary">
                        <Calendar size={14} style={{ marginRight: '4px' }} />
                        2022 - Present
                      </span>
                    </div>
                  </div>
                  <ul>
                    <li>Led documentation strategy for 3 flagship products, resulting in 40% reduction in support tickets</li>
                    <li>Created comprehensive API documentation using OpenAPI specifications and interactive examples</li>
                    <li>Implemented docs-as-code workflow using GitHub Actions, improving content accuracy by 60%</li>
                    <li>Collaborated with engineering teams to establish documentation standards and review processes</li>
                    <li>Mentored junior writers and conducted documentation workshops for cross-functional teams</li>
                  </ul>
                </div>

                {/* Job 2 */}
                <div className="margin-bottom--lg">
                  <div className="row margin-bottom--sm">
                    <div className="col col--8">
                      <h3 className="margin-bottom--xs">Technical Writer</h3>
                      <h4 className="text--muted margin-bottom--xs">DataFlow Systems</h4>
                    </div>
                    <div className="col col--4 text--right">
                      <span className="badge badge--secondary">
                        <Calendar size={14} style={{ marginRight: '4px' }} />
                        2020 - 2022
                      </span>
                    </div>
                  </div>
                  <ul>
                    <li>Developed user guides and technical documentation for cloud-based analytics platform</li>
                    <li>Created video tutorials and interactive onboarding materials, improving user adoption by 35%</li>
                    <li>Established content review process and style guide for consistent documentation quality</li>
                    <li>Worked closely with UX designers to improve information architecture and user flows</li>
                  </ul>
                </div>

                {/* Job 3 */}
                <div>
                  <div className="row margin-bottom--sm">
                    <div className="col col--8">
                      <h3 className="margin-bottom--xs">Junior Technical Writer</h3>
                      <h4 className="text--muted margin-bottom--xs">StartupTech Inc.</h4>
                    </div>
                    <div className="col col--4 text--right">
                      <span className="badge badge--secondary">
                        <Calendar size={14} style={{ marginRight: '4px' }} />
                        2019 - 2020
                      </span>
                    </div>
                  </div>
                  <ul>
                    <li>Created and maintained technical documentation for mobile and web applications</li>
                    <li>Collaborated with developers to document new features and API endpoints</li>
                    <li>Conducted user research to identify documentation gaps and improvement opportunities</li>
                    <li>Contributed to knowledge base articles and FAQ sections</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="row margin-bottom--xl">
          <div className="col col--4 col--offset-2">
            <div className="card h-100">
              <div className="card__header">
                <h3 className="card__title">Technical Skills</h3>
              </div>
              <div className="card__body">
                <div className="margin-bottom--md">
                  <h4 className="margin-bottom--sm">Documentation Tools</h4>
                  <div className="margin-bottom--sm">
                    <span className="badge badge--outline margin-right--xs margin-bottom--xs">Docusaurus</span>
                    <span className="badge badge--outline margin-right--xs margin-bottom--xs">GitBook</span>
                    <span className="badge badge--outline margin-right--xs margin-bottom--xs">Notion</span>
                    <span className="badge badge--outline margin-right--xs margin-bottom--xs">Confluence</span>
                  </div>
                </div>
                
                <div className="margin-bottom--md">
                  <h4 className="margin-bottom--sm">Programming & Markup</h4>
                  <div className="margin-bottom--sm">
                    <span className="badge badge--outline margin-right--xs margin-bottom--xs">Markdown</span>
                    <span className="badge badge--outline margin-right--xs margin-bottom--xs">HTML/CSS</span>
                    <span className="badge badge--outline margin-right--xs margin-bottom--xs">JavaScript</span>
                    <span className="badge badge--outline margin-right--xs margin-bottom--xs">YAML</span>
                  </div>
                </div>

                <div>
                  <h4 className="margin-bottom--sm">Automation & Tools</h4>
                  <div>
                    <span className="badge badge--outline margin-right--xs margin-bottom--xs">GitHub Actions</span>
                    <span className="badge badge--outline margin-right--xs margin-bottom--xs">Vale</span>
                    <span className="badge badge--outline margin-right--xs margin-bottom--xs">Spectral</span>
                    <span className="badge badge--outline margin-right--xs margin-bottom--xs">OpenAPI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col col--4">
            <div className="card h-100">
              <div className="card__header">
                <h3 className="card__title">Core Competencies</h3>
              </div>
              <div className="card__body">
                <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                  <li className="margin-bottom--xs">✅ API Documentation</li>
                  <li className="margin-bottom--xs">✅ Developer Experience</li>
                  <li className="margin-bottom--xs">✅ Information Architecture</li>
                  <li className="margin-bottom--xs">✅ Content Strategy</li>
                  <li className="margin-bottom--xs">✅ User Research</li>
                  <li className="margin-bottom--xs">✅ Process Documentation</li>
                  <li className="margin-bottom--xs">✅ Cross-team Collaboration</li>
                  <li className="margin-bottom--xs">✅ Quality Assurance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="row">
          <div className="col col--4 col--offset-2">
            <div className="card h-100">
              <div className="card__header">
                <h3 className="card__title">
                  <BookOpen size={20} style={{ marginRight: '8px' }} />
                  Education
                </h3>
              </div>
              <div className="card__body">
                <div className="margin-bottom--md">
                  <h4 className="margin-bottom--xs">Bachelor of Arts in English</h4>
                  <p className="text--muted margin-bottom--xs">State University</p>
                  <span className="badge badge--secondary">2015 - 2019</span>
                </div>
                
                <div>
                  <h4 className="margin-bottom--xs">Technical Writing Certificate</h4>
                  <p className="text--muted margin-bottom--xs">Professional Writing Institute</p>
                  <span className="badge badge--secondary">2019</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col col--4">
            <div className="card h-100">
              <div className="card__header">
                <h3 className="card__title">
                  <Award size={20} style={{ marginRight: '8px' }} />
                  Certifications
                </h3>
              </div>
              <div className="card__body">
                <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                  <li className="margin-bottom--sm">
                    <strong>Google Technical Writing Certification</strong>
                    <br />
                    <small className="text--muted">2023</small>
                  </li>
                  <li className="margin-bottom--sm">
                    <strong>Society for Technical Communication (STC) Member</strong>
                    <br />
                    <small className="text--muted">2020 - Present</small>
                  </li>
                  <li className="margin-bottom--sm">
                    <strong>Information Architecture Certification</strong>
                    <br />
                    <small className="text--muted">2022</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}