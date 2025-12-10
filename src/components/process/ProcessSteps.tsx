import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Search, GitBranch, Activity } from 'lucide-react';

export const ProcessSteps: React.FC = () => {
  const { t } = useTranslation();

  const steps = [
    {
      icon: Search,
      key: 'discovery',
    },
    {
      icon: GitBranch,
      key: 'integration',
    },
    {
      icon: Activity,
      key: 'monitoring',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
      {steps.map((step, index) => (
        <Card key={step.key} className="shadow-md hover-lift">
          <CardHeader className="p-4 md:p-6">
            <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
              <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary text-primary-foreground">
                <step.icon className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div className="text-sm md:text-sm font-semibold text-muted-foreground">
                {t('process.step', { number: index + 1 })}
              </div>
            </div>
            <CardTitle className="text-lg md:text-xl mb-2">
              {t(`process.steps.${step.key}.title`)}
            </CardTitle>
            <CardDescription className="text-sm md:text-base">
              {t(`process.steps.${step.key}.description`)}
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4 md:p-6 pt-0">
            <ul className="space-y-1 md:space-y-2 text-sm md:text-sm text-muted-foreground">
              {(
                t(`process.steps.${step.key}.details`, { returnObjects: true }) as string[]
              ).map((detail: string, idx: number) => (
                <li key={idx} className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

