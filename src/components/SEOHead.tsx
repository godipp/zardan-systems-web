import { useSEO } from '@/hooks/useSEO';
import { SEOProps } from '@/types';

const SEOHead = ({ title, description, schema }: SEOProps) => {
  useSEO({ title, description, schema });
  return null;
};

export default SEOHead;
