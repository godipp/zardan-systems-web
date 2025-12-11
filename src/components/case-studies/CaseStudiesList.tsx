import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Truck, TrendingUp } from 'lucide-react';
import { CaseStudyCard } from '@/components/case-studies/CaseStudyCard';
import { useTranslation } from 'react-i18next';

export const CaseStudiesList: React.FC = () => {
  const { t } = useTranslation();

  const ukraineMfi = t('caseStudies.listItems.ukraineMfi', { returnObjects: true }) as {
    problem: string;
    solution: string;
    results: string[];
  };
  const novalend = t('caseStudies.listItems.novalend', { returnObjects: true }) as {
    problem: string;
    solution: string;
    results: string[];
  };
  const agrotep = t('caseStudies.listItems.agrotep', { returnObjects: true }) as {
    problem: string;
    solution: string;
    results: string[];
  };
  const nexu = t('caseStudies.listItems.nexu', { returnObjects: true }) as {
    problem: string;
    solution: string;
    results: string[];
  };

  const cases = [
    {
      industry: 'Fintech',
      marker: 'marker-fintech',
      title: t('caseStudies.listTitles.ukraineMfi'),
      problem: ukraineMfi.problem,
      solution: ukraineMfi.solution,
      results: ukraineMfi.results,
      logo: '/assets/mfoua.svg',
      trustTextKey: 'caseStudies.trustUkraine',
      flag: '/assets/Flag_of_Ukraine.svg',
      link: '/case-studies/ukraine-mfi',
    },
    {
      industry: 'Fintech',
      icon: TrendingUp,
      marker: 'marker-fintech',
      title: t('caseStudies.listTitles.novalend'),
      problem: novalend.problem,
      solution: novalend.solution,
      results: novalend.results,
      logo: '/assets/novalend-logo-color.svg',
      trustTextKey: 'caseStudies.trustPoland',
      flag: '/assets/Flag_of_Poland.svg',
      link: '/case-studies/novalend',
    },
    {
      industry: 'Logistics',
      icon: Truck,
      marker: 'marker-logistics',
      title: t('caseStudies.listTitles.agrotep'),
      problem: agrotep.problem,
      solution: agrotep.solution,
      results: agrotep.results,
      logo: '/assets/agrotep.svg',
      trustTextKey: 'caseStudies.trustUkraine',
      flag: '/assets/Flag_of_Ukraine.svg',
      link: '/case-studies/agrotep',
    },
    {
      industry: 'Fintech',
      icon: TrendingUp,
      marker: 'marker-fintech',
      title: t('caseStudies.listTitles.nexu'),
      problem: nexu.problem,
      solution: nexu.solution,
      results: nexu.results,
      logo: '/assets/nexupl.svg',
      trustTextKey: 'caseStudies.trustPoland',
      flag: '/assets/Flag_of_Poland.svg',
      link: '/case-studies/nexu',
    },
  ];

  return (
    <div className="space-y-8 sm:space-y-10 md:space-y-12">
      {cases.map((caseStudy, index) => (
        <AnimatedSection
          key={index}
          delay={100 + (index % 2) * 150}
          duration={800}
          animationType="slide"
          direction="left"
        >
          <CaseStudyCard caseStudy={caseStudy} />
        </AnimatedSection>
      ))}
    </div>
  );
};

