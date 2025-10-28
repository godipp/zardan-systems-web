// Core application types
export interface SEOProps {
  title: string;
  description: string;
  schema?: object;
}

export interface NavigationItem {
  path: string;
  label: string;
  icon?: React.ComponentType<{ className?: string; strokeWidth?: number }>;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  path: string;
  icon?: React.ComponentType<{ className?: string; strokeWidth?: number }>;
}

export interface CaseStudy {
  id: string;
  industry: string;
  title: string;
  problem: string;
  solution: string;
  results: string[];
  diagram?: string;
  trustText: string;
  flag?: string;
  icon?: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  marker: string;
}

export interface ProcessStep {
  id: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  description: string;
  details: string[];
}

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  message: string;
}

export interface CompanyStats {
  years: number;
  specialists: number;
  industries: number;
  projects: number;
}

export interface CompanyInfo {
  name: string;
  description: string;
  founded: number;
  incorporated: number;
  address: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
  };
  contact: {
    email: string;
    linkedin?: string;
  };
  stats: CompanyStats;
}

// Component prop types
export interface PageProps {
  children?: React.ReactNode;
}

export interface LayoutProps {
  children: React.ReactNode;
}

// Layout component types
export interface RootLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
  container?: boolean;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
}

export interface ContentLayoutProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  background?: 'default' | 'muted' | 'card' | 'transparent';
}

export interface SectionLayoutProps {
  children: React.ReactNode;
  className?: string;
  spacing?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  background?: 'default' | 'muted' | 'card' | 'transparent';
  container?: boolean;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

// Animation and styling types
export interface AnimationConfig {
  duration: number;
  delay?: number;
  easing?: string;
}

export interface ColorScheme {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  foreground: string;
  muted: string;
  border: string;
}

// API and data types
export interface EmailTemplateParams {
  name: string;
  company: string;
  email: string;
  message: string;
  reply_to: string;
  [key: string]: string;
}

export interface EmailResponse {
  status: number;
  text: string;
}

// Route types
export interface RouteConfig {
  path: string;
  element: React.ComponentType;
  title: string;
  description: string;
  protected?: boolean;
}

// Theme types
export interface ThemeConfig {
  colors: ColorScheme;
  fonts: {
    primary: string;
    secondary?: string;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  breakpoints: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}
