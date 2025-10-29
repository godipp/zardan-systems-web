import { NavigationItem, Service, CaseStudy, ProcessStep, CompanyInfo } from '@/types';
import { 
  Network, 
  CircuitBoard, 
  Brain, 
  Search, 
  GitBranch, 
  Activity,
  Truck,
  Factory
} from 'lucide-react';

// Navigation configuration
export const NAVIGATION_ITEMS: NavigationItem[] = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/case-studies', label: 'Case Studies' },
  { path: '/about', label: 'About' },
  { path: '/process', label: 'Process' },
  { path: '/contact', label: 'Contact' },
];

// Services configuration
export const SERVICES: Service[] = [
  {
    id: 'system-integration',
    title: 'System Integration',
    description: 'Connect ERP, CRM, and legacy systems through secure API architecture used to cut manual workflows and improve control.',
    path: '/services/system-integration',
    icon: Network,
  },
  {
    id: 'process-automation',
    title: 'Process Automation',
    description: 'Automate repetitive workflows across departments to reduce manual intervention, eliminate errors, and accelerate processing time.',
    path: '/services/process-automation',
    icon: CircuitBoard,
  },
  {
    id: 'ai-integration',
    title: 'AI Integration',
    description: 'Enhance decision-making with integrated AI modules that provide intelligent automation and predictive analytics.',
    path: '/services/ai-integration',
    icon: Brain,
  },
];

// Process steps configuration
export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 'discovery',
    icon: Search,
    title: 'Discovery',
    description: 'Requirements analysis and system audit to identify integration points and automation opportunities.',
    details: [
      'Stakeholder interviews and workflow mapping',
      'Technical assessment of existing systems',
      'Documentation of integration requirements',
    ],
  },
  {
    id: 'integration',
    icon: GitBranch,
    title: 'Integration',
    description: 'Design and deployment of secure integration architecture with testing protocols.',
    details: [
      'API design and data flow architecture',
      'Development and staging environment setup',
      'Integration testing and validation',
    ],
  },
  {
    id: 'monitoring',
    icon: Activity,
    title: 'Monitoring',
    description: 'Post-deployment support with performance monitoring and continuous optimization.',
    details: [
      'Real-time monitoring dashboards',
      'Issue detection and resolution',
      'Performance optimization and scaling',
    ],
  },
];

// Case studies configuration
export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'fintech-payment-processing',
    industry: 'Fintech',
    marker: 'marker-fintech',
    title: 'Payment Processing Automation',
    problem: 'Manual reconciliation of 50,000+ monthly transactions created bottlenecks and error risk.',
    solution: 'Deployed automated reconciliation system with real-time matching algorithms and exception routing.',
    results: [
      '80% reduction in manual reconciliation work',
      '99.7% accuracy in transaction matching',
      'Processing time reduced from 5 days to 4 hours',
    ],
    diagram: '/assets/api-gateway-diagram.webp',
    trustText: 'Clients from Germany trust us',
    flag: '/assets/Flag_of_Germany.webp',
  },
  {
    id: 'logistics-warehouse-management',
    industry: 'Logistics',
    icon: Truck,
    marker: 'marker-logistics',
    title: 'Warehouse Management Integration',
    problem: 'Disconnected WMS, TMS, and ERP systems required duplicate data entry and delayed inventory visibility.',
    solution: 'Built unified integration layer with real-time inventory synchronization and automated order routing.',
    results: [
      '35% faster order fulfillment',
      '92% reduction in data entry errors',
      'Real-time inventory accuracy across all channels',
    ],
    diagram: '/assets/logistics-diagram.webp',
    trustText: 'Clients from Austria trust us',
    flag: '/assets/Flag_of_Austria.webp',
  },
  {
    id: 'manufacturing-production-optimization',
    industry: 'Manufacturing',
    icon: Factory,
    marker: 'marker-manufacturing',
    title: 'Production Optimization',
    problem: 'Manual production scheduling and inventory management led to 15% efficiency loss and stockouts.',
    solution: 'Implemented AI-driven production planning with real-time demand forecasting and automated scheduling.',
    results: [
      '25% improvement in production efficiency',
      '40% reduction in inventory carrying costs',
      'Zero stockouts in 6 months',
    ],
    diagram: '/assets/manufacturing-diagram.webp',
    trustText: 'Clients from Baltic region trust us',
    flag: '/assets/Flag_of_Austria.webp', // Placeholder
  },
];

// Company information
export const COMPANY_INFO: CompanyInfo = {
  name: 'Zardan Systems',
  description: 'System integration, process automation, and data analytics for enterprise clients',
  founded: 2018,
  incorporated: 2025,
  address: {
    street: '61 Bridge Street',
    city: 'Kington, HR5 3DJ',
    postalCode: 'HR5 3DJ',
    country: 'United Kingdom',
  },
  contact: {
    email: 'contact@zardansystems.com',
    linkedin: 'https://linkedin.com/company/zardan-systems',
  },
  stats: {
    years: 7,
    specialists: 10,
    industries: 3,
    projects: 15,
  },
};

// API configuration
export const API_CONFIG = {
  emailjs: {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  },
};

// Animation configurations
export const ANIMATIONS = {
  fadeInUp: {
    duration: 600,
    easing: 'ease-out',
  },
  stagger: {
    delay: 100,
  },
  gear: {
    duration: 12000,
    easing: 'linear',
  },
  orbit: {
    duration: 10000,
    easing: 'linear',
  },
};

// Color scheme
export const COLORS = {
  primary: '#1E3A8A',
  primaryHover: '#3B82F6',
  secondary: '#0D1E40',
  accent: '#3B82F6',
  background: '#F9FAFB',
  foreground: '#1A1A1A',
  muted: '#EEF1F6',
  border: '#E0E3E9',
} as const;

// Breakpoints
export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
} as const;
