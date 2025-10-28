import SEOHead from "@/components/SEOHead";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const SystemIntegration = () => {
  return (
    <>
            <SEOHead
                title="System Integration | Zardan Systems"
                description="We take ownership of data consistency across systems — full visibility, predictable integrations, and no blind spots."
            />

            <div className="bg-[#F9FAFB] text-slate-800 min-h-screen py-12 sm:py-16 md:py-20 relative overflow-hidden">

                {/* ===== PAGE HEADER ===== */}
                <section className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center mb-8 sm:mb-12 md:mb-16">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0F172A] mb-2 sm:mb-3 tracking-tight">
                        System Integration
                    </h1>
                    <div className="w-12 sm:w-16 md:w-20 h-px bg-slate-300 mx-auto mb-2 sm:mb-3 md:mb-4"></div>
                    <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                        Connecting enterprise systems through unified data flows.
                    </p>
                </section>

                {/* ===== MAIN CONTENT ===== */}
                <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg border border-slate-200 p-4 sm:p-6 md:p-10 lg:p-16">
                        <div className="space-y-8 sm:space-y-12 md:space-y-16">
                            {/* Problem Block - Left */}
                            <AnimatedSection delay={100} animationType="slide" direction="left">
                                <div className="bg-slate-50 rounded-xl p-6 sm:p-8 border border-slate-200">
                                    <h3 className="text-lg sm:text-xl font-semibold text-[#0D1E40] mb-3 sm:mb-4">
                                        Problem
                                    </h3>
                                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-3 sm:mb-4">
                                        Fragmented systems create data silos, inconsistencies, and endless reconciliation loops.
                                    </p>
                                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                                        Businesses lose visibility — data flows are uncontrolled, manual, and fragile.
                                    </p>
                                </div>
                            </AnimatedSection>

                            {/* Control Block - Right */}
                            <AnimatedSection delay={200} animationType="slide" direction="right">
                                <div className="bg-slate-50 rounded-xl p-6 sm:p-8 border border-slate-200">
                                    <h3 className="text-lg sm:text-xl font-semibold text-[#0D1E40] mb-3 sm:mb-4">
                                        Control
                                    </h3>
                                    <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-slate-700 list-disc pl-4 sm:pl-5">
                                        <li>We take ownership of data consistency across all systems.</li>
                                        <li>You get predictable, monitored, and fully auditable integrations.</li>
                                        <li>No blind spots — every transaction stream is visible.</li>
                                    </ul>
                                </div>
                            </AnimatedSection>

                            {/* Outcome Block - Left */}
                            <AnimatedSection delay={300} animationType="slide" direction="left">
                                <div className="bg-slate-50 rounded-xl p-6 sm:p-8 border border-slate-200">
                                    <h3 className="text-lg sm:text-xl font-semibold text-[#0D1E40] mb-3 sm:mb-4">
                                        Outcome
                                    </h3>
                                    <ul className="space-y-2 text-slate-700 mb-4">
                                        <li>• 95% reduction in data discrepancies</li>
                                        <li>• 60% faster month-end close processes</li>
                                        <li>• Single source of truth across all systems</li>
                                    </ul>
                                    <p className="text-slate-600 italic">
                                        Integration is not a project — it's an infrastructure layer we maintain for you.
                                    </p>
                                </div>
                            </AnimatedSection>

                            {/* Flow Animation Block - Right */}
                            <AnimatedSection delay={400} animationType="slide" direction="right">
                                <div className="bg-slate-50 rounded-xl p-6 sm:p-8 border border-slate-200 flex flex-col items-center justify-center">
                                    {/* Flow Animation */}
                                    <div className="relative w-full max-w-[440px] h-[2px] bg-gradient-to-r from-transparent via-[#93C5FD] to-transparent rounded-full overflow-visible mb-6">
                                        {/* Center Static Core */}
                                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-[#3B82F6] rounded-full shadow-[0_0_40px_10px_rgba(59,130,246,0.35)] z-20"></div>

                                        {/* Flowing circles from left */}
                                        {[...Array(8)].map((_, i) => (
                                            <div
                                                key={`left-${i}`}
                                                className="absolute bg-[#3B82F6] rounded-full opacity-80"
                                                style={{
                                                    width: `${5 + i * 0.3}px`,
                                                    height: `${5 + i * 0.3}px`,
                                                    top: "50%",
                                                    left: "0%",
                                                    transform: "translateY(-50%)",
                                                    animation: `circleFlowRight ${3 + i * 0.4}s linear infinite`,
                                                    animationDelay: `${i * 0.4}s`,
                                                }}
                                            ></div>
                                        ))}

                                        {/* Flowing circles from right */}
                                        {[...Array(8)].map((_, i) => (
                                            <div
                                                key={`right-${i}`}
                                                className="absolute bg-[#3B82F6] rounded-full opacity-80"
                                                style={{
                                                    width: `${5 + i * 0.3}px`,
                                                    height: `${5 + i * 0.3}px`,
                                                    top: "50%",
                                                    right: "0%",
                                                    transform: "translateY(-50%)",
                                                    animation: `circleFlowLeft ${3 + i * 0.4}s linear infinite`,
                                                    animationDelay: `${i * 0.4}s`,
                                                }}
                                            ></div>
                                        ))}
                                    </div>

                                    {/* Quote */}
                                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-center max-w-sm">
                                        Systems don't just connect — they align under one flow of control.
                                        Every event is traceable, every change accountable.
                                    </p>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </div>

                {/* Animations */}
                <style>{`
                    @keyframes circleFlowRight {
                        0% {
                            left: 0%;
                            opacity: 0;
                            transform: translateY(-50%) scale(0.6);
                        }
                        20% {
                            opacity: 1;
                        }
                        90% {
                            opacity: 1;
                        }
                        100% {
                            left: 50%;
                            opacity: 0;
                            transform: translate(-50%, -50%) scale(0.8);
                        }
                    }

                    @keyframes circleFlowLeft {
                        0% {
                            right: 0%;
                            opacity: 0;
                            transform: translateY(-50%) scale(0.6);
                        }
                        20% {
                            opacity: 1;
                        }
                        90% {
                            opacity: 1;
                        }
                        100% {
                            right: 50%;
                            opacity: 0;
                            transform: translate(50%, -50%) scale(0.8);
                        }
                    }
                `}</style>
            </div>
        </>
    );
};

export default SystemIntegration;
