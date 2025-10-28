import { createBrowserRouter } from 'react-router-dom';
import { RouteConfig } from '@/types';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import AppLayout from '@/components/AppLayout';

// Direct imports for better SEO and faster loading
import Home from '@/pages/root/Home';
import Services from '@/pages/services/Services';
import SystemIntegration from '@/pages/services/SystemIntegration';
import ProcessAutomation from '@/pages/services/ProcessAutomation';
import AIIntegration from '@/pages/services/AIIntegration';
import CaseStudies from '@/pages/content/CaseStudies';
import About from '@/pages/company/About';
import Process from '@/pages/company/Process';
import Contact from '@/pages/company/Contact';
import Privacy from '@/pages/legal/Privacy';
import Terms from '@/pages/legal/Terms';
import NotFound from '@/pages/root/NotFound';

export const routeConfig: RouteConfig[] = [
  {
    path: '/',
    element: Home,
    title: 'Zardan Systems | Enterprise Integration & Automation',
    description: 'System integration, process automation, and data analytics for finance, logistics, and manufacturing across EU and UK.',
  },
  {
    path: '/services',
    element: Services,
    title: 'Services | Zardan Systems',
    description: 'System integration, process automation, and data analytics services for enterprise organizations.',
  },
  {
    path: '/services/system-integration',
    element: SystemIntegration,
    title: 'System Integration | Zardan Systems',
    description: 'We take ownership of data consistency across systems — full visibility, predictable integrations, and no blind spots.',
  },
  {
    path: '/services/process-automation',
    element: ProcessAutomation,
    title: 'Process Automation | Zardan Systems',
    description: 'Automate repetitive workflows across departments to reduce manual work, eliminate errors, and accelerate processing time.',
  },
  {
    path: '/services/ai-integration',
    element: AIIntegration,
    title: 'AI Integration | Zardan Systems',
    description: 'Enhance decision-making with integrated AI modules that provide intelligent automation and predictive analytics.',
  },
  {
    path: '/case-studies',
    element: CaseStudies,
    title: 'Case Studies | Zardan Systems',
    description: 'Real-world examples of successful system integration and process automation projects across various industries.',
  },
  {
    path: '/about',
    element: About,
    title: 'About | Zardan Systems',
    description: 'Founded in 2018, Zardan Systems provides enterprise integration and automation solutions trusted by European clients.',
  },
  {
    path: '/process',
    element: Process,
    title: 'Process | Zardan Systems',
    description: 'Our structured approach to system integration and process automation: Discovery, Integration, and Monitoring.',
  },
  {
    path: '/contact',
    element: Contact,
    title: 'Contact | Zardan Systems',
    description: 'Get in touch with Zardan Systems for consultation on system integration and process automation.',
  },
  {
    path: '/privacy',
    element: Privacy,
    title: 'Privacy Policy | Zardan Systems',
    description: 'Privacy policy and data protection information for Zardan Systems.',
  },
  {
    path: '/terms',
    element: Terms,
    title: 'Terms of Service | Zardan Systems',
    description: 'Terms of service and legal information for Zardan Systems.',
  },
];

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      ...routeConfig.map((route) => ({
        path: route.path,
        element: (
          <ErrorBoundary>
            <route.element />
          </ErrorBoundary>
        ),
      })),
      {
        path: '*',
        element: (
          <ErrorBoundary>
            <NotFound />
          </ErrorBoundary>
        ),
      },
    ],
  },
]);
