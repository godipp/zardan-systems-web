import React from 'react';
import { useTranslation } from 'react-i18next';
import SEOHead from '@/components/SEOHead';
import { PageHeader } from '@/components/ui/PageHeader';
import { ContentCard } from '@/components/ui/ContentCard';
import { ContactForm } from '@/components/contact/ContactForm';
import { ContactInfo } from '@/components/contact/ContactInfo';

export const ContactPage: React.FC = () => {
  const { t } = useTranslation();

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Zardan Systems',
  };

  return (
    <>
      <SEOHead
        title="Contact | Zardan Systems"
        description="Get in touch with Zardan Systems for consultation on system integration and process automation."
        schema={schema}
      />

      <div className="py-20">
        <PageHeader
          title={t('contact.title')}
          description={t('contact.description')}
        />

        <ContentCard>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </ContentCard>
      </div>
    </>
  );
};

