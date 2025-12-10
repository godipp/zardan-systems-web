import React from 'react';
import SEOHead from '@/components/SEOHead';
import { Container } from '@/components/ui/Container';
import { CaseStudiesHeader } from '@/components/case-studies/CaseStudiesHeader';
import { CaseStudiesList } from '@/components/case-studies/CaseStudiesList';

export const CaseStudiesPage: React.FC = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Case Studies',
    description:
      'Integration and automation case studies across finance, logistics, and manufacturing sectors',
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://zardan-systems.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Case Studies',
          item: 'https://zardan-systems.com/case-studies',
        },
      ],
    },
  };

  return (
    <>
      <SEOHead
        title="Case Studies | Zardan Systems"
        description="Real-world integration and automation outcomes across fintech, logistics, and manufacturing sectors with quantified results."
        schema={schema}
      />

      <Container className="py-12 sm:py-16" padding="lg">
        <CaseStudiesHeader />
        <CaseStudiesList />
      </Container>
    </>
  );
};

