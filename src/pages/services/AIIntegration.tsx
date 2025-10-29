import SEOHead from "@/components/SEOHead";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";
import { ServiceLayout } from "@/layouts/ServiceLayout";

const AIIntegration = () => {
    return (
        <ServiceLayout>
            <SEOHead
                title="AI Integration | Zardan Systems"
                description="Enhance decision-making with integrated AI modules that provide intelligent automation and predictive analytics."
            />

            <div className="py-20 relative overflow-hidden">
                <Container padding="lg">
                    {/* ===== HEADER ===== */}
                    <section className="text-center mb-16">
                        <h1 className="text-4xl font-bold text-[#0F172A] mb-3 tracking-tight">
                            AI Integration
                        </h1>
                        <div className="w-20 h-px bg-slate-300 mx-auto mb-4"></div>
                        <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                            Integrated AI modules that enhance decision-making and automate
                            complex processes.
                        </p>
                    </section>

                    {/* ===== MAIN CONTENT ===== */}
                    <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-10 md:p-16">
                        <div className="space-y-8 sm:space-y-12 md:space-y-16">
                            {/* Problem Block - Left */}
                            <AnimatedSection delay={100} animationType="slide" direction="left">
                                <div className="bg-slate-50 rounded-xl p-6 sm:p-8 border border-slate-200">
                                    <h3 className="text-lg sm:text-xl font-semibold text-[#0D1E40] mb-3 sm:mb-4">
                                        Problem
                                    </h3>
                                    <ul className="space-y-2 text-slate-600 list-disc pl-4 sm:pl-5">
                                        <li>Manual processes limit scalability and increase errors</li>
                                        <li>Decision-making relies on historical data without predictive insights</li>
                                        <li>Complex workflows require human intervention at every step</li>
                                    </ul>
                                </div>
                            </AnimatedSection>

                            {/* Approach Block - Right */}
                            <AnimatedSection delay={200} animationType="slide" direction="right">
                                <div className="bg-slate-50 rounded-xl p-6 sm:p-8 border border-slate-200">
                                    <h3 className="text-lg sm:text-xl font-semibold text-[#0D1E40] mb-3 sm:mb-4">
                                        Approach
                                    </h3>
                                    <ul className="space-y-2 text-slate-600 list-disc pl-4 sm:pl-5">
                                        <li>Deploy machine learning models for pattern recognition and forecasting</li>
                                        <li>Integrate AI-powered automation for intelligent workflow orchestration</li>
                                        <li>Build recommendation engines and predictive analytics dashboards</li>
                                    </ul>
                                </div>
                            </AnimatedSection>

                            {/* Deliverables Block - Left */}
                            <AnimatedSection delay={300} animationType="slide" direction="left">
                                <div className="bg-slate-50 rounded-xl p-6 sm:p-8 border border-slate-200">
                                    <h3 className="text-lg sm:text-xl font-semibold text-[#0D1E40] mb-3 sm:mb-4">
                                        Deliverables
                                    </h3>
                                    <ul className="space-y-2 text-slate-600 list-disc pl-4 sm:pl-5">
                                        <li>Trained ML models integrated with existing systems</li>
                                        <li>AI-powered decision support tools and dashboards</li>
                                        <li>Automated intelligent workflows with continuous learning</li>
                                    </ul>
                                </div>
                            </AnimatedSection>

                            {/* AI Module Animation Block - Right */}
                            <AnimatedSection delay={400} animationType="slide" direction="right">
                                <div className="bg-slate-50 rounded-xl p-6 sm:p-8 border border-slate-200 flex flex-col items-center justify-center">
                                    <div className="relative w-[320px] h-[200px] flex items-center justify-center mb-6">
                                        {/* Central Module */}
                                        <div
                                            className="relative z-10 w-[110px] h-[110px] bg-white border-2 border-[#1E40AF] rounded-2xl flex items-center justify-center shadow-md"
                                            style={{
                                                animation: "pulseGlow 4s ease-in-out infinite",
                                            }}
                                        >
                                            <span className="text-3xl font-bold text-[#1E40AF] tracking-tight">
                                                AI
                                            </span>
                                        </div>

                                        {/* Left & Right Connectors */}
                                        <div className="absolute left-0 right-0 flex items-center justify-between w-full">
                                            <div className="relative w-[100px] h-[2px] bg-[#1E40AF]/40">
                                                <div className="absolute top-1/2 -translate-y-1/2 left-0 w-4 h-4 bg-[#1E40AF] rounded-full animate-neuronLeft"></div>
                                            </div>

                                            <div className="relative w-[100px] h-[2px] bg-[#1E40AF]/40">
                                                <div className="absolute top-1/2 -translate-y-1/2 right-0 w-4 h-4 bg-[#1E40AF] rounded-full animate-neuronRight"></div>
                                            </div>
                                        </div>

                                        {/* Top & Bottom Connectors */}
                                        <div className="absolute top-0 bottom-0 flex flex-col justify-between h-full">
                                            <div className="relative w-[2px] h-[80px] bg-[#1E40AF]/40">
                                                <div className="absolute left-1/2 -translate-x-1/2 top-0 w-4 h-4 bg-[#1E40AF] rounded-full animate-neuronDown"></div>
                                            </div>
                                            <div className="relative w-[2px] h-[80px] bg-[#1E40AF]/40">
                                                <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-4 h-4 bg-[#1E40AF] rounded-full animate-neuronUp"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-center max-w-sm">
                                        Every signal refines the system — every cycle strengthens your business stability.
                                    </p>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </Container>
            </div>

            {/* ===== Animations ===== */}
            <style>{`
                    @keyframes pulseGlow {
                        0%, 100% {
                            box-shadow: 0 0 10px rgba(30, 64, 175, 0.15), 0 0 25px rgba(30, 64, 175, 0.1);
                        }
                        50% {
                            box-shadow: 0 0 25px rgba(30, 64, 175, 0.4), 0 0 60px rgba(30, 64, 175, 0.25);
                        }
                    }
                    @keyframes neuronLeft {
                        0% { left: 0; opacity: 0; }
                        20% { opacity: 1; }
                        100% { left: 100px; opacity: 0; }
                    }
                    @keyframes neuronRight {
                        0% { right: 0; opacity: 0; }
                        20% { opacity: 1; }
                        100% { right: 100px; opacity: 0; }
                    }
                    @keyframes neuronDown {
                        0% { top: 0; opacity: 0; }
                        20% { opacity: 1; }
                        100% { top: 80px; opacity: 0; }
                    }
                    @keyframes neuronUp {
                        0% { bottom: 0; opacity: 0; }
                        20% { opacity: 1; }
                        100% { bottom: 80px; opacity: 0; }
                    }
                    .animate-neuronLeft { animation: neuronLeft 2.8s ease-in-out infinite; }
                    .animate-neuronRight { animation: neuronRight 2.8s ease-in-out infinite; animation-delay: 1.4s; }
                    .animate-neuronDown { animation: neuronDown 3s ease-in-out infinite; }
                    .animate-neuronUp { animation: neuronUp 3s ease-in-out infinite; animation-delay: 1.5s; }
                `}</style>
    </ServiceLayout >
  );
};

export default AIIntegration;
