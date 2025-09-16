// src/pages/index.js
import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout>
      <header className={styles.heroBanner}>
        <div className="container text--center">
          <img 
            src="/img/logo.svg" 
            alt="Site Logo" 
            className={styles.heroLogo} 
          />
          <h1 className="hero__title">Christine Belzie</h1>
          <p className="hero__subtitle">Technical Writer • Open Source Contributor • Educator</p>
          <div className={styles.buttons}>
            <Link 
              className="button button--primary button--lg" 
              to="/docs/portfolio"
            >
              View My Work →
            </Link>
            <Link 
              className="button button--secondary button--lg" 
              to="/docs/about me"
            >
              Learn More →
            </Link>
          </div>
        </div>
      </header>
    </Layout>
  );
}
