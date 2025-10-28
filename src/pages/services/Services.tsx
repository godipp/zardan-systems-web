import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';
import { PageHeader } from '@/components/ui/PageHeader';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '@/constants';

const Services: React.FC = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'System Integration and Process Automation',
    provider: {
      '@type': 'Organization',
      name: 'Zardan Systems',
    },
    areaServed: ['EU', 'UK'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Integration Services',
      itemListElement: SERVICES.map((service) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: service.title },
      })),
    },
  };

  return (
    <>
      <SEOHead
        title="Services | Zardan Systems"
        description="System integration, process automation, and data analytics services for enterprise organizations in finance, logistics, and manufacturing."
        schema={schema}
      />

      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-12 sm:py-16">
        <PageHeader
          title="Services"
          description="Enterprise integration and automation solutions designed for operational efficiency."
          className="max-w-3xl mb-8 sm:mb-10 md:mb-12"
        />
        <p className="text-sm sm:text-sm md:text-base text-[#4B5563] mb-6 sm:mb-8 md:mb-12">
          We deliver integration and automation systems trusted by organizations across the EU and UK.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 items-stretch">
          {SERVICES.map((service, index) => (
            <AnimatedSection key={service.id} animationType="slide" direction="up" delay={index * 150}>
              <Card
                className="
                  group flex flex-col h-full shadow-md rounded-xl border border-[#1E3A8A]
                  bg-[#1E3A8A] text-white transition-all duration-300 ease-out
                  hover:bg-white hover:text-[#0D1E40] hover:shadow-lg hover:-translate-y-1
                "
              >
                <CardHeader className="flex-1 p-2.5 sm:p-3 md:p-6 transition-colors duration-300">
                  <CardTitle
                    className="
                      mb-1.5 sm:mb-2 md:mb-3 text-sm sm:text-base md:text-xl lg:text-2xl font-semibold text-white
                      group-hover:text-[#0D1E40] transition-colors duration-300
                    "
                  >
                    {service.title}
                  </CardTitle>
                  <CardDescription
                    className="
                      text-sm sm:text-sm md:text-base leading-relaxed text-white/90
                      group-hover:text-[#4B5563] transition-colors duration-300
                    "
                  >
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <div className="px-2.5 sm:px-3 md:px-6 pb-2.5 sm:pb-3 md:pb-6 mt-auto">
                  <Link to={service.path}>
                    <Button
                      variant="outline"
                      className="
                        w-full rounded-md border border-white text-[#1E3A8A] bg-white
                        group-hover:border-[#1E3A8A] group-hover:bg-[#1E3A8A] group-hover:text-white
                        transition-all duration-300 hover:brightness-105
                        text-sm sm:text-sm py-2 sm:py-2.5
                      "
                    >
                      Learn More
                      <ArrowRight className="ml-1.5 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
