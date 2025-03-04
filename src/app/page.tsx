'use server';

import { ArrowRight } from 'lucide-react';
import { Link, PageTitle, Typography, Wrapper } from '@/components';

export default async function Home() {
  return (
    <>
      <PageTitle title="Professor" subtitle="PEOPLE" />
      <Wrapper>
        <div style={{ width: '100%', padding: '2rem 0' }}>
          <Typography as="h2">
            Topological Methods in Machine Learning
          </Typography>

          <Typography as="h3">2025</Typography>

          <Typography as="p">
            Topological techniques provide a powerful framework for
            understanding high-dimensional data structures in machine learning.
            Persistent homology, manifold learning, and topological data
            analysis (TDA) offer insights into data geometry and stability,
            enhancing interpretability and robustness in deep learning models.
            This research explores the integration of topological invariants
            with neural networks, focusing on applications in feature
            extraction, adversarial robustness, and structured representation
            learning.
          </Typography>

          <ul style={{ color: 'gray', padding: '1rem' }}>
            <Typography as="li">
              Kim et al., Persistent Homology for Feature Extraction in Deep
              Learning, arXiv
            </Typography>
            <Typography as="li">
              Lee et al., Manifold Learning for High-Dimensional Data
              Representations, ICML 2023 Park
            </Typography>
          </ul>

          <Link href="/test" icon={ArrowRight}>
            read further
          </Link>
        </div>
      </Wrapper>
    </>
  );
}
