import React from 'react';
import SEOHead from '@/components/SEOHead';
import { Container } from '@/components/ui/Container';
import { ProcessHeader } from '@/components/process/ProcessHeader';
import { ProcessSteps } from '@/components/process/ProcessSteps';
import { ProcessWhyWorks } from '@/components/process/ProcessWhyWorks';

const Process = () => {
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

export default Process;
