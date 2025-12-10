import { createBrowserRouter, Navigate } from 'react-router-dom';
import { RouteConfig } from '@/types';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import AppLayout from '@/components/AppLayout';

// Direct imports for better SEO and faster loading
import Home from '@/pages/root/Home';
import Product from '@/pages/product/Product';
import Services from '@/pages/services/Services';
import SystemIntegration from '@/pages/services/SystemIntegration';
import ProcessAutomation from '@/pages/services/ProcessAutomation';
import AIIntegration from '@/pages/services/AIIntegration';
import CaseStudies from '@/pages/content/CaseStudies';
import NovalendCase from '@/pages/content/case-studies/Novalend';
import NexuCase from '@/pages/content/case-studies/Nexu';
import UkraineMfiCase from '@/pages/content/case-studies/UkraineMfi';
import AgrotepCase from '@/pages/content/case-studies/Agrotep';
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
    path: '/product',
    element: Product,
    title: 'ZIC Product | Zardan Systems',
    description: 'ZIC for MFIs. Recovers 20–35% of applications you lose due to timeouts. Reduces BKI timeouts by 30–50%. Eliminates adapter delays during peak hours.',
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
    path: '/case-studies/novalend',
    element: NovalendCase,
    title: 'Novalend Case Study | Zardan Systems',
    description: 'How ZIC stabilized Novalend\'s scoring flow during peak hours, reducing losses from 20-28% to 2-4% and increasing throughput by 45-60%.',
  },
  {
    path: '/case-studies/nexu',
    element: NexuCase,
    title: 'Nexu Case Study | Zardan Systems',
    description: 'How ZIC stabilized Nexu\'s AntiFraud chain and reduced scoring delays, improving conversion by 12-18% during peak hours.',
  },
  {
    path: '/case-studies/ukraine-mfi',
    element: UkraineMfiCase,
    title: 'Ukrainian MFI Case Study | Zardan Systems',
    description: 'How ZIC stabilized UBKI, PVBKI, and AntiFraud for a Ukrainian MFI, reducing application losses from 18-26% to 2-5%.',
  },
  {
    path: '/case-studies/agrotep',
    element: AgrotepCase,
    title: 'Agrotep Case Study | Zardan Systems',
    description: 'How Agrotep transitioned to microservices architecture and stabilized logistics integrations, reducing GPS queues from 18-25k to less than 2k.',
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

// Helper function to create localized routes
const createLocalizedRoutes = () => {
  const languages = ['en', 'ua'];
  const routes: any[] = [];

  languages.forEach((lang) => {
    routeConfig.forEach((route) => {
      const basePath = route.path === '/' ? '' : route.path;
      const localizedPath = `/${lang}${basePath}`;
      
      routes.push({
        path: localizedPath,
        element: (
          <ErrorBoundary>
            <route.element />
          </ErrorBoundary>
        ),
      });
    });
  });

  return routes;
};

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      // Redirect root to default language
      {
        index: true,
        element: <Navigate to="/en" replace />,
      },
      // Localized routes
      ...createLocalizedRoutes(),
      // Legacy routes without language prefix (redirect to /en)
      ...routeConfig
        .filter((route) => route.path !== '/')
        .map((route) => ({
          path: route.path,
          element: <Navigate to={`/en${route.path}`} replace />,
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
