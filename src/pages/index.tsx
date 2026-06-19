import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

type GuideLink = {
  title: string;
  label: string;
  description: string;
  to: string;
};

type ColorToken = {
  name: string;
  hex: string;
  tone: 'blue' | 'yellow' | 'red';
};

type FeaturedAsset = {
  name: string;
  src: string;
  tone?: 'dark';
};

const guideLinks: GuideLink[] = [
  {
    title: 'University Seals',
    label: 'Logo library',
    description: 'Official seal, wordmark, department, and campus life artwork.',
    to: '/docs/Carolina%20University%20Branding/University%20Seals',
  },
  {
    title: 'Color Standards',
    label: 'Brand system',
    description: 'Primary CU blue plus approved yellow and red accent colors.',
    to: '/docs/Carolina%20University%20Branding/Colors',
  },
  {
    title: 'Logo Standards',
    label: 'Usage rules',
    description: 'Spacing, sizing, modification rules, and approval guidance.',
    to: '/docs/Branding%20Guidelines/Logo%20Standards',
  },
  {
    title: 'Athletic Brand Management',
    label: 'Bruins athletics',
    description: 'Primary athletics marks and rules for team-facing materials.',
    to: '/docs/Branding%20Guidelines/Athletic%20Brand%20Management',
  },
];

const colorTokens: ColorToken[] = [
  {name: 'CU Blue', hex: '#002868', tone: 'blue'},
  {name: 'CU Yellow', hex: '#FFCA00', tone: 'yellow'},
  {name: 'CU Red', hex: '#BF0A30', tone: 'red'},
];

const featuredAssets: FeaturedAsset[] = [
  {
    name: 'University Seal',
    src: '/img/cu-logo-assets/seal.png',
  },
  {
    name: 'Horizontal Lockup',
    src: '/img/cu-logo-assets/Seal%20and%20Text%20Logo_Horizontal_Dark.svg',
  },
  {
    name: 'CU Text Mark',
    src: '/img/cu-logo-assets/CU%20Text%20Logo_blue.svg',
  },
  {
    name: 'Bruins Mark',
    src: '/img/cu-logo-assets/bruins-main.png',
  },
];

function GuideCard({title, label, description, to}: GuideLink) {
  return (
    <Link className={styles.guideCard} to={to}>
      <span className={styles.cardLabel}>{label}</span>
      <Heading as="h3">{title}</Heading>
      <p>{description}</p>
      <span className={styles.cardAction}>Open guide</span>
    </Link>
  );
}

function ColorChip({name, hex, tone}: ColorToken) {
  return (
    <div className={styles.colorChip}>
      <span className={styles.swatch} data-tone={tone} />
      <span>
        <strong>{name}</strong>
        <code>{hex}</code>
      </span>
    </div>
  );
}

function AssetTile({name, src, tone}: FeaturedAsset) {
  return (
    <div className={styles.assetTile}>
      <span className={styles.assetPreview} data-tone={tone}>
        <img src={src} alt={name} />
      </span>
      <span className={styles.assetName}>{name}</span>
    </div>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Carolina University Marketing Guidelines"
      description="Carolina University brand, logo, color, typography, and athletics marketing guidelines.">
      <main className={styles.homeMain}>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <p className={styles.eyebrow}>Carolina University</p>
            <Heading as="h1" className={styles.heroTitle}>
              Marketing Guidelines
            </Heading>
            <p className={styles.heroLead}>
              A polished home for CU logos, colors, typography, seals, email
              signatures, and Bruins athletics standards.
            </p>
            <div className={styles.heroActions}>
              <Link
                className={styles.getStartedAction}
                to="/docs/Branding%20Guidelines/Athletic%20Brand%20Management">
                Get Started
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.guideSection}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionKicker}>Guideline Library</p>
          </div>
          <div className={styles.guideGrid}>
            {guideLinks.map((guide) => (
              <GuideCard key={guide.title} {...guide} />
            ))}
          </div>
        </section>

        <section className={styles.brandSection}>
          <div className={styles.brandIntro}>
            <p className={styles.sectionKicker}>Core Identity</p>
            <Heading as="h2">A consistent CU system across every channel.</Heading>
            <p>
              Keep the official marks, colors, and athletics identity close at
              hand when creating university materials.
            </p>
          </div>

          <div className={styles.brandPanel}>
            <div className={styles.colorGrid}>
              {colorTokens.map((color) => (
                <ColorChip key={color.hex} {...color} />
              ))}
            </div>

            <div className={styles.assetGrid}>
              {featuredAssets.map((asset) => (
                <AssetTile key={asset.name} {...asset} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
