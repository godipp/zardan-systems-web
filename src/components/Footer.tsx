import { Link } from "react-router-dom";
import { Container } from "@/components/ui/Container";

const Footer = () => {
  return (
    <footer className="bg-[#0D1E40] text-white mt-16 sm:mt-20 md:mt-24 border-t border-[#1E3A8A]/20">
      <Container className="py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <p className="text-sm sm:text-sm text-gray-300 mb-3 sm:mb-4">
              Zardan Systems Ltd — enterprise system integration & automation partner.
            </p>
            <p className="text-sm sm:text-sm text-gray-400 mb-3 sm:mb-4">
              Trusted by SMEs across the EU and UK.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-8">
              <div className="text-sm sm:text-sm text-gray-300 space-y-0.5 sm:space-y-1">
                <a 
                  href="https://maps.google.com/?q=61+Bridge+Street,+Kington,+HR5+3DJ,+United+Kingdom"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  <p>61 Bridge Street</p>
                  <p>Kington, HR5 3DJ</p>
                  <p>United Kingdom</p>
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
                  aria-label="LinkedIn"
                >
                  {/*<Linkedin size={20} />*/}
                  {/*<span>LinkedIn</span>*/}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm sm:text-sm font-semibold mb-3 sm:mb-4 text-white">Services</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-sm">
              <li>
                <Link to="/services/system-integration" className="text-gray-300 hover:text-white transition-colors">
                  System Integration
                </Link>
              </li>
              <li>
                <Link to="/services/process-automation" className="text-gray-300 hover:text-white transition-colors">
                  Process Automation
                </Link>
              </li>
              <li>
                <Link to="/services/ai-integration" className="text-gray-300 hover:text-white transition-colors">
                  AI Integration
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm sm:text-sm font-semibold mb-3 sm:mb-4 text-white">Company</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-sm">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/process" className="text-gray-300 hover:text-white transition-colors">
                  Process
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-gray-300 hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2025 Zardan Systems. All rights reserved.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export { Footer };
export default Footer;
