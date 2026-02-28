import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Translate, { translate } from "@docusaurus/Translate";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">
          <Translate id="homepage.tagline">
            Stable locators. Low flakiness. Scalable UI test design.
          </Translate>
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            <Translate id="homepage.readGuide">Read the Guide</Translate>
          </Link>
          <Link
            className="button button--outline button--lg"
            to="/docs/checklists"
          >
            <Translate id="homepage.jumpChecklist">Jump to Checklist</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={translate({
        id: "homepage.metaDescription",
        message:
          "A concise, practical UI automation principles handbook based on ELEMENT.",
      })}
    >
      <HomepageHeader />
      <main>
        <section className={styles.summarySection}>
          <div className="container">
            <div className="row">
              <div className={clsx("col col--4", styles.summaryCard)}>
                <Heading as="h3">
                  <Translate id="homepage.fastAdoptionTitle">
                    Fast Adoption
                  </Translate>
                </Heading>
                <p>
                  <Translate id="homepage.fastAdoptionDesc">
                    Start with a 5-step flow and apply immediately in daily test
                    work.
                  </Translate>
                </p>
              </div>
              <div className={clsx("col col--4", styles.summaryCard)}>
                <Heading as="h3">
                  <Translate id="homepage.lowFlakinessTitle">
                    Low Flakiness
                  </Translate>
                </Heading>
                <p>
                  <Translate id="homepage.lowFlakinessDesc">
                    Use semantic and stable selectors, plus meaningful wait
                    strategy.
                  </Translate>
                </p>
              </div>
              <div className={clsx("col col--4", styles.summaryCard)}>
                <Heading as="h3">
                  <Translate id="homepage.scaleReadyTitle">
                    Scale Ready
                  </Translate>
                </Heading>
                <p>
                  <Translate id="homepage.scaleReadyDesc">
                    Centralized mappings and review checklists for consistent
                    team quality.
                  </Translate>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
