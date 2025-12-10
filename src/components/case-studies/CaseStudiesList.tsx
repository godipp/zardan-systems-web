import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Truck, TrendingUp } from 'lucide-react';
import { CaseStudyCard } from '@/components/case-studies/CaseStudyCard';

export const CaseStudiesList: React.FC = () => {

  const cases = [
    {
      industry: 'Fintech',
      marker: 'marker-fintech',
      title: 'Integration ZIC in Ukrainian MFO',
      problem:
        'Під навантаженням UBKI/PVBKI давали затримки до 5 с, запускали 4–7 дублюючих викликів і створювали переплату. AntiFraud блокувався чергами 900–1400 подій, ScoreEngine зростав до 17–25 с, dead integrations доходили до 8–12%.',
      solution:
        'Підключили ізоляційний шар без змін у скорингу: нормалізували UBKI/PVBKI (1 виклик + кеш), централізували retry, ізолювали AntiFraud від затримок БКІ та розблокували шлях до ScoreEngine.',
      results: [
        'Час до скорингу: 17–25 c → 9–13 c',
        'Втрати заявок: 18–26% → 2–5%',
        'Черги AntiFraud: 900–1400 → 200–350',
        'Dead integrations: 8–12% → <1%',
        'Повторні виклики БКІ: 4–7 → 1',
      ],
      logo: '/assets/mfoua.svg',
      trustTextKey: 'caseStudies.trustUkraine',
      flag: '/assets/Flag_of_Ukraine.svg',
      link: '/case-studies/ukraine-mfi',
    },
    {
      industry: 'Fintech',
      icon: TrendingUp,
      marker: 'marker-fintech',
      title: 'Integration ZIC in Novalend',
      problem:
        'Під навантаженням падав потік: затримки BIK до 3.8 с, 7–12 дублюючих запитів, черги до 2400 заявок, 20–28% втрат до скорингу.',
      solution:
        'Підключили ізоляційний шар: нормалізували BIK-виклики, централізували retry, розблокували fan-in та стабілізували потік без змін у скорингу.',
      results: [
        'Час скорингу скорочено: 12–18 c → 7–9 c',
        'Втрати заявок до скорингу: 20–28% → 2–4%',
        'Черги fan-in зменшені: 2400 → <300',
        'Дублюючі BIK-запити: 7–12 → 1',
        'Пропускна здатність у піку: +45–60%',
      ],
      logo: '/assets/novalend-logo-color.svg',
      trustTextKey: 'caseStudies.trustPoland',
      flag: '/assets/Flag_of_Poland.svg',
      link: '/case-studies/novalend',
    },
    {
      industry: 'Logistics',
      icon: Truck,
      marker: 'marker-logistics',
      title: 'GPS Tracking & ERP Integration',
      problem:
        "Моноліт не витримував навантаження: GPS-пакети приходили нерівномірно (5–90 c), черги виростали до 18–25 тис. записів. Інтеграції з перевізниками давали 1.2–4.8 c затримки, втрати callback'ів і до 14% хибних статусів. ERP чекала оновлення транспорту 20–40 хв, блокуючи документи.",
      solution:
        "Перехід на мікросервіси з інтеграційним шаром: винесли GPS у окремий сервіс з Kafka, уніфікували API перевізників, додали контрольований retry, відновлення callback'ів та подієву доставку для ERP.",
      results: [
        'GPS-черги: 18–25 тис. → <2 тис.',
        'Затримка статусів: 5–90 c → 3–7 c',
        'Хибні статуси: 14% → 1.5–2%',
        'ERP-затримки: 20–40 хв → 1–3 хв',
        "Втрачені callback'и: –85%",
      ],
      logo: '/assets/agrotep.svg',
      trustTextKey: 'caseStudies.trustUkraine',
      flag: '/assets/Flag_of_Ukraine.svg',
      link: '/case-studies/agrotep',
    },
    {
      industry: 'Fintech',
      icon: TrendingUp,
      marker: 'marker-fintech',
      title: 'Integration ZIC in Nexu',
      problem:
        'У піку KRD відповідав 1.2–5.4 с, BIG зависав >3 с, AntiFraud блокувався. Черги ScoreGate зростали до 800–1200, повторні виклики KRD/BIG давали 3–5× навантаження. Маршрут "вхід → скоринг" зростав до 14–20 с, конверсія падала.',
      solution:
        'Впровадили ізоляційний шар між KRD/BIG та AntiFraud: централізували retry, прибрали дублювання, ізолювали таймаути бюро й розблокували ScoreGateQueue без змін у скорингу.',
      results: [
        'Час до скорингу: 14–20 c → 8–11 c',
        'Повторні виклики KRD/BIG: 3–5× → 1×',
        'Черги ScoreGate: 800–1200 → <250',
        'AntiFraud-блокування: усунено',
        'Конверсія у піку: +12–18%',
      ],
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

