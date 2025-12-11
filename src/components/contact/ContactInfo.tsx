import React from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Mail, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '@/constants';

export const ContactInfo: React.FC = () => {
  const { t } = useTranslation();

  return (
    <AnimatedSection delay={300}>
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-slate-800">
            {t('contact.info.title')}
          </h2>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 text-[#1E40AF] mt-1" />
              <div>
                <p className="font-medium mb-1">{t('contact.info.email')}</p>
                <a
                  href={`mailto:${COMPANY_INFO.contact.email}`}
                  className="text-slate-600 hover:text-[#1E40AF] transition-colors"
                >
                  {COMPANY_INFO.contact.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-[#1E40AF] mt-1" />
              <div>
                <p className="font-medium mb-1">{t('contact.info.address')}</p>
                <a
                  href="https://www.google.com/maps/place/Zardan+Systems/@52.2036372,-3.0286611,17z/data=!3m1!4b1!4m6!3m5!1s0x4870250062fee58f:0x7714a17f5e71a1e3!8m2!3d52.2036372!4d-3.0286611!16s%2Fg%2F11ml43jgr1?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-[#1E40AF] transition-colors"
                >
                  {COMPANY_INFO.address.street}
                  <br />
                  {COMPANY_INFO.address.city}
                  <br />
                  {COMPANY_INFO.address.country}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
          <h3 className="font-semibold mb-2 text-slate-800">
            {t('contact.info.responseTime.title')}
          </h3>
          <p className="text-sm text-slate-600">{t('contact.info.responseTime.text')}</p>
        </div>
      </div>
    </AnimatedSection>
  );
};

