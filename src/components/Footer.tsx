import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Container } from "@/components/ui/Container";
import { useLocalizedPath } from "@/hooks/useLocalizedPath";

const Footer = () => {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocalizedPath();
  return (
    <footer className="bg-[#0D1E40] text-white border-t border-[#1E3A8A]/20">
      <Container className="py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <p className="text-sm sm:text-sm text-gray-300 mb-3 sm:mb-4">
              {t('footer.companyDescription')}
            </p>
            <p className="text-sm sm:text-sm text-gray-400 mb-3 sm:mb-4">
              {t('footer.trustText')}
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-8">
              <div className="text-sm sm:text-sm text-gray-300 space-y-0.5 sm:space-y-1">
                <a 
                  href="https://maps.google.com/?q=61+Bridge+Street,+Kington,+HR5+3DJ,+United+Kingdom"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  <p>{t('ui.footer.address.street')}</p>
                  <p>{t('ui.footer.address.city')}</p>
                  <p>{t('ui.footer.address.country')}</p>
                </a>
              </div>
              <div className="text-sm sm:text-sm text-gray-300">
                <a 
                  href="mailto:contact@zardansystems.com"
                  className="hover:text-white transition-colors"
                >
                  contact@zardansystems.com
                </a>
                <a
                  href="https://linkedin.com/company/zardan-systems"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-3 text-gray-300 hover:text-white transition-colors"
                  aria-label={t('ui.footer.linkedIn')}
                >
                  {/*<Linkedin size={20} />*/}
                  {/*<span>LinkedIn</span>*/}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm sm:text-sm font-semibold mb-3 sm:mb-4 text-white">{t('footer.services')}</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-sm">
              <li>
                <Link to={getLocalizedPath("/services/system-integration")} className="text-gray-300 hover:text-white transition-colors">
                  {t('ui.footer.links.systemIntegration')}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath("/services/process-automation")} className="text-gray-300 hover:text-white transition-colors">
                  {t('ui.footer.links.processAutomation')}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath("/services/ai-integration")} className="text-gray-300 hover:text-white transition-colors">
                  {t('ui.footer.links.aiIntegration')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Case Studies */}
          <div>
            <h4 className="text-sm sm:text-sm font-semibold mb-3 sm:mb-4 text-white">{t('footer.caseStudies')}</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-sm">
              <li>
                <Link to={getLocalizedPath("/case-studies/novalend")} className="text-gray-300 hover:text-white transition-colors">
                  Novalend
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath("/case-studies/nexu")} className="text-gray-300 hover:text-white transition-colors">
                  Nexu
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath("/case-studies/ukraine-mfi")} className="text-gray-300 hover:text-white transition-colors">
                  Ukrainian MFI
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath("/case-studies/agrotep")} className="text-gray-300 hover:text-white transition-colors">
                  Agrotep
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm sm:text-sm font-semibold mb-3 sm:mb-4 text-white">{t('footer.company')}</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-sm">
              <li>
                <Link to={getLocalizedPath("/product")} className="text-gray-300 hover:text-white transition-colors">
                  {t('ui.footer.links.product')}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath("/about")} className="text-gray-300 hover:text-white transition-colors">
                  {t('ui.footer.links.about')}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath("/process")} className="text-gray-300 hover:text-white transition-colors">
                  {t('ui.footer.links.process')}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath("/case-studies")} className="text-gray-300 hover:text-white transition-colors">
                  {t('ui.footer.links.caseStudies')}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath("/contact")} className="text-gray-300 hover:text-white transition-colors">
                  {t('ui.footer.links.contact')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
          <p>{t('footer.copyright')}</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <Link to={getLocalizedPath("/privacy")} className="hover:text-white transition-colors">
              {t('footer.privacy')}
            </Link>
            <Link to={getLocalizedPath("/terms")} className="hover:text-white transition-colors">
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export { Footer };
export default Footer;
