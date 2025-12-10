import React from 'react';
import { useTranslation } from 'react-i18next';
import SEOHead from '@/components/SEOHead';
import { Container } from '@/components/ui/Container';
import { ProcessHeader } from '@/components/process/ProcessHeader';
import { ProcessSteps } from '@/components/process/ProcessSteps';
import { ProcessWhyWorks } from '@/components/process/ProcessWhyWorks';

export const ProcessPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEOHead
        title="Our Process | Zardan Systems"
        description="Structured approach to enterprise integration: Discovery, Integration, and Monitoring for reliable system automation."
      />

      <Container className="py-12 md:py-16" padding="lg">
        <ProcessHeader />
        <ProcessSteps />
        <ProcessWhyWorks />
      </Container>
    </>
  );
};

