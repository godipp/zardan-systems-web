import SEOHead from "@/components/SEOHead";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Truck, Factory, TrendingUp } from "lucide-react";

const CaseStudies = () => {
    const cases = [
        {
            industry: "Fintech",
            marker: "marker-fintech",
            title: "Payment Processing Automation",
            problem:
                "Manual reconciliation of 50,000+ monthly transactions created bottlenecks and error risk.",
            solution:
                "Deployed automated reconciliation system with real-time matching algorithms and exception routing.",
            results: [
                "80% reduction in manual reconciliation work",
                "99.7% accuracy in transaction matching",
                "Processing time reduced from 5 days to 4 hours",
            ],
            diagram: "/assets/api-gateway-diagram.png",
            trustText: "Clients from Germany trust us",
            flag: "/assets/Flag_of_Germany.png",
        },
        {
            industry: "Logistics",
            icon: Truck,
            marker: "marker-logistics",
            title: "Warehouse Management Integration",
            problem:
                "Disconnected WMS, TMS, and ERP systems required duplicate data entry and delayed inventory visibility.",
            solution:
                "Built unified integration layer with real-time inventory synchronization and automated order routing.",
            results: [
                "35% faster order fulfillment",
                "92% reduction in data entry errors",
                "Real-time inventory accuracy across all channels",
            ],
            diagram: "/assets/logistics-diagram.png",
            trustText: "Clients from Austria trust us",
            flag: "/assets/Flag_of_Austria.png",
        },
        {
            industry: "Manufacturing",
            icon: Factory,
            marker: "marker-manufacturing",
            title: "Production Planning Optimization",
            problem:
                "Manual production scheduling caused inefficiencies and material waste due to poor demand forecasting.",
            solution:
                "Implemented ML-driven demand forecasting with automated production scheduling and material ordering.",
            results: [
                "25% reduction in material waste",
                "40% improvement in production efficiency",
                "15% decrease in inventory carrying costs",
            ],
            diagram: "/assets/manufacturing-diagram.png",
            trustText: "Clients from Germany trust us",
            flag: "/assets/Flag_of_Germany.png",
        },
    ];

    const schema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Case Studies",
        description:
            "Integration and automation case studies across finance, logistics, and manufacturing sectors",
        breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
                {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://zardan-systems.com",
                },
                {
                    "@type": "ListItem",
                    position: 2,
                    name: "Case Studies",
                    item: "https://zardan-systems.com/case-studies",
                },
            ],
        },
    };

    return (
        <>
            <SEOHead
                title="Case Studies | Zardan Systems"
                description="Real-world integration and automation outcomes across fintech, logistics, and manufacturing sectors with quantified results."
                schema={schema}
            />

            <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-12 sm:py-16">
                <div className="max-w-3xl mb-8 sm:mb-10 md:mb-12">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-[#0D1E40]">Case Studies</h1>
                    <p className="text-sm sm:text-base md:text-xl text-[#475569] mb-4 sm:mb-6">
                        Our projects demonstrate measurable impact across industries.
                    </p>
                </div>

                <div className="space-y-8 sm:space-y-10 md:space-y-12">
                    {cases.map((caseStudy, index) => (
                        <AnimatedSection
                            key={index}
                            delay={100 + index % 2 * 150}
                            duration={800}
                            animationType="slide"
                            direction="left"
                        >
                            <Card
                                className={`shadow-none border-none ${caseStudy.marker} transition-all duration-300`}
                            >
                            <CardContent className="p-4 sm:p-6 md:p-8">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center">
                                    {/* LEFT COLUMN */}
                                    <div>
                                        <CardHeader className="p-0 mb-4 sm:mb-5 md:mb-6">
                                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3 sm:mb-4">
                                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 md:gap-6">
                                                    <Badge
                                                        variant="outline"
                                                        className="flex items-center gap-1.5 sm:gap-2 border-[#1E3A8A]/40 text-[#1E3A8A] text-sm sm:text-base md:text-lg font-semibold px-3 sm:px-4 py-1"
                                                    >
                                                        <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
                                                        {caseStudy.industry}
                                                    </Badge>

                                                    {/* Trust Indicator Block */}
                                                    <div className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base md:text-[18px] text-[#0D1E40] font-semibold">
                                                        <span>{caseStudy.trustText}</span>
                                                        <img
                                                            src={caseStudy.flag}
                                                            alt="Country flag"
                                                            className="w-8 h-5 sm:w-10 sm:h-6 md:w-12 md:h-7 rounded-sm shadow-sm"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <CardTitle className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-[#0D1E40]">
                                                {caseStudy.title}
                                            </CardTitle>
                                        </CardHeader>

                                        <div className="space-y-4 sm:space-y-5 md:space-y-6">
                                            <div>
                                                <h3 className="font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base md:text-lg text-[#0D1E40]">
                                                    Problem
                                                </h3>
                                                <p className="text-sm sm:text-sm md:text-base text-[#475569] leading-relaxed">{caseStudy.problem}</p>
                                            </div>

                                            <div>
                                                <h3 className="font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base md:text-lg text-[#0D1E40]">
                                                    Solution
                                                </h3>
                                                <p className="text-sm sm:text-sm md:text-base text-[#475569] leading-relaxed">{caseStudy.solution}</p>
                                            </div>

                                            <div>
                                                <h3 className="font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base md:text-lg text-[#0D1E40]">
                                                    Results
                                                </h3>
                                                <ul className="space-y-1.5 sm:space-y-2">
                                                    {caseStudy.results.map((result, idx) => (
                                                        <li key={idx} className="flex items-start">
                                                            <span className="text-[#1E3A8A] mr-1.5 sm:mr-2 text-sm sm:text-sm">•</span>
                                                            <span className="text-sm sm:text-sm md:text-base text-[#475569] leading-relaxed">{result}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* RIGHT COLUMN (Diagram) */}
                                    <div className="relative flex flex-col items-center justify-center group overflow-visible">
                                        {/* Light halo behind the image */}
                                        <div
                                            aria-hidden
                                            className="absolute -inset-8 pointer-events-none z-0
                                                       bg-[radial-gradient(closest-side,rgba(30,58,138,0.06),transparent_70%)]"
                                        />

                                        {/* Subtle animated pulse */}
                                        <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
                                            <div className="w-[320px] h-[320px] animate-data-pulse absolute rounded-full bg-[rgba(30,58,138,0.05)] blur-2xl" />
                                            <div className="w-[200px] h-[200px] animate-data-pulse-delay absolute rounded-full bg-[rgba(30,58,138,0.04)] blur-xl" />
                                        </div>

                                        {/* Diagram — crystal clear */}
                                        <img
                                            src={caseStudy.diagram}
                                            alt={`${caseStudy.title} Diagram`}
                                            className="relative z-10 w-full max-w-md select-none border-none shadow-none
                                                       transition-transform duration-700 group-hover:scale-[1.015]"
                                        />

                                        <p
                                            className={`relative z-10 text-[15px] text-slate-500 italic ${
                                                caseStudy.industry === "Manufacturing"
                                                    ? "mt-6"
                                                    : caseStudy.industry === "Fintech"
                                                        ? "mt-1"
                                                        : "mt-3"
                                            }`}
                                        >
                                            Architecture snapshot — simplified view of data synchronization layer.
                                        </p>


                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </>
    );
};

export default CaseStudies;
