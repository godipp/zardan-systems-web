import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';
import { AnimatedSection, StaggerContainer } from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/Container';
import { SERVICES, COMPANY_INFO } from '@/constants';
import logo from '/assets/logo.webp';

const Home: React.FC = () => {
  const [showHero, setShowHero] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowHero(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: COMPANY_INFO.name,
    description: COMPANY_INFO.description,
    url: 'https://zardan-systems.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY_INFO.address.street,
      addressLocality: COMPANY_INFO.address.city,
      postalCode: COMPANY_INFO.address.postalCode,
      addressCountry: COMPANY_INFO.address.country,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: COMPANY_INFO.contact.email,
      contactType: 'Customer Service',
    },
  };

  return (
    <>
      <SEOHead
        title="Zardan Systems | Enterprise Integration & Automation"
        description="System integration, process automation, and data analytics for finance, logistics, and manufacturing across EU and UK."
        schema={schema}
      />

      {/* Hero Section */}
      <section className="relative py-8 sm:py-12 md:py-16 lg:py-20 bg-[#EEF1F6] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background/95"></div>

        <Container className="relative" padding="lg">
            <div
            className={`flex flex-col md:flex-row lg:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 transform transition-all duration-1000 ease-out ${
              showHero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {/* Left block — text */}
            <div className="max-w-3xl text-center md:text-left lg:text-left">
              <AnimatedSection animationType="slide" direction="up" delay={200} duration={500}>
                <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 md:mb-6 tracking-tight text-[#0D1E40] leading-tight">
                  Integration. Automation. Control.
                </h1>
              </AnimatedSection>
              <AnimatedSection animationType="slide" direction="up" delay={400} duration={500}>
                <p className="text-sm sm:text-sm md:text-lg lg:text-xl mb-3 sm:mb-4 md:mb-8 text-foreground/90 leading-relaxed">
                  We design and connect enterprise systems across finance, logistics, and manufacturing.
                </p>
              </AnimatedSection>
              <AnimatedSection animationType="scale" delay={600} duration={500}>
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="bg-[#1E3A8A] hover:bg-[#3B82F6] text-white rounded-md w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-2.5 sm:py-3 transform transition-transform duration-300 hover:scale-105 active:scale-95"
                  >
                    Request Consultation
                  </Button>
                </Link>
              </AnimatedSection>
            </div>

            {/* Right block — logo */}
            <AnimatedSection animationType="scale" delay={300} duration={500}>
              <div className="flex flex-col items-center justify-center -mt-1 sm:-mt-2 md:-mt-4 lg:-mt-6 space-y-2 sm:space-y-3 md:space-y-6 lg:space-y-8">
                <img
                  src={logo}
                  alt="Zardan Systems Logo"
                  className="w-[120px] sm:w-[180px] md:min-w-[250px] lg:min-w-[300px] h-auto object-contain transform transition-transform duration-300"
                />
                <span className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#0D1E40] tracking-wide leading-none">
                  {COMPANY_INFO.name}
                </span>
              </div>
            </AnimatedSection>
          </div>
        </Container>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-border"></div>
      </section>

      {/* What We Do Section */}
      <section className="section-spacing">
        <Container padding="lg">
            <AnimatedSection animationType="fade" delay={200}>
              <p className="text-center text-muted-foreground mb-6 sm:mb-8 md:mb-12 max-w-2xl mx-auto text-sm sm:text-sm md:text-base">
                Our integration frameworks are designed for operational efficiency and control.
              </p>
            </AnimatedSection>
            <StaggerContainer
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-10 lg:gap-12 items-stretch"
              baseDelay={100}
              animationType="slide"
              direction="up"
            >
              {SERVICES.map((service) => (
                <Link
                  key={service.id}
                  to={service.path}
                  className="group flex flex-col h-full text-center transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 active:scale-95"
                >
                  <div className="mx-auto inline-flex items-center justify-center w-14 h-14 sm:w-18 sm:h-18 md:w-24 md:h-24 rounded-lg bg-muted mb-2 sm:mb-3 md:mb-6 transition-all duration-500 group-hover:scale-110 group-hover:bg-primary/10 group-hover:shadow-lg">
                    {service.icon && (
                      <service.icon className="w-7 h-7 sm:w-9 sm:h-9 md:w-12 md:h-12 text-primary transition-colors duration-300 group-hover:text-primary/80" strokeWidth={1.5} />
                    )}
                  </div>
                  <h3 className="text-sm sm:text-sm md:text-lg font-semibold mb-1 sm:mb-2 md:mb-3 text-[#0D1E40] transition-colors duration-300 group-hover:text-primary">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-sm md:text-sm text-muted-foreground leading-relaxed flex-1 transition-colors duration-300 group-hover:text-foreground/80">
                    {service.description}
                  </p>
                </Link>
              ))}
            </StaggerContainer>
        </Container>
      </section>

      {/* Divider */}
      <div className="border-t border-border my-12"></div>

      {/* Trust Signal & CTA */}
      <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"></div>
        <div className="text-center relative">
            <AnimatedSection animationType="fade" delay={100}>
              <p className="text-sm sm:text-sm md:text-sm text-muted-foreground mb-3 sm:mb-4 md:mb-8">
                Trusted by SMEs across the EU and UK.
              </p>
            </AnimatedSection>
            <AnimatedSection animationType="slide" direction="up" delay={200}>
              <h2 className="text-base sm:text-lg md:text-2xl font-bold mb-2 sm:mb-2 md:mb-4 text-[#0D1E40]">
                Ready to optimize your operations?
              </h2>
            </AnimatedSection>
            <AnimatedSection animationType="fade" delay={300}>
              <p className="text-sm sm:text-sm md:text-base text-muted-foreground mb-3 sm:mb-4 md:mb-8 max-w-2xl mx-auto leading-relaxed">
                Schedule a consultation to discuss integration and automation requirements.
              </p>
            </AnimatedSection>
            <AnimatedSection animationType="scale" delay={400}>
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-[#1E3A8A] hover:bg-[#3B82F6] text-white rounded-md w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-2.5 sm:py-3 transform transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
                >
                  Discuss Your Project
                </Button>
              </Link>
            </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Home;
