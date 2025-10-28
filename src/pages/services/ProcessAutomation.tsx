import SEOHead from "@/components/SEOHead";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const ProcessAutomation = () => {
  return (
    <>
            <SEOHead
                title="Process Automation | Zardan Systems"
                description="Automate repetitive workflows across departments to reduce manual work, eliminate errors, and accelerate processing time."
            />

            <div className="bg-[#F9FAFB] text-slate-800 min-h-screen py-20 relative overflow-hidden">
                {/* ===== HEADER ===== */}
                <section className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
                    <h1 className="text-4xl font-bold text-[#0F172A] mb-3 tracking-tight">
                        Process Automation
                    </h1>
                    <div className="w-20 h-px bg-slate-300 mx-auto mb-4"></div>
                    <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                        Automate repetitive workflows to eliminate errors and accelerate
                        operations across departments.
                    </p>
                </section>

                {/* ===== MAIN CONTENT ===== */}
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-10 md:p-16">
                        <div className="space-y-8 sm:space-y-12 md:space-y-16">
                            {/* Problem Block - Left */}
                            <AnimatedSection delay={100} animationType="slide" direction="left">
                                <div className="bg-slate-50 rounded-xl p-6 sm:p-8 border border-slate-200">
                                    <h3 className="text-lg sm:text-xl font-semibold text-[#0D1E40] mb-3 sm:mb-4">
                                        Problem
                                    </h3>
                                    <ul className="space-y-2 text-slate-600 list-disc pl-4 sm:pl-5">
                                        <li>High-volume manual tasks consume staff time</li>
                                        <li>Human error in data entry and approvals</li>
                                        <li>Delays in cross-departmental workflows</li>
                                    </ul>
                                </div>
                            </AnimatedSection>

                            {/* Control Block - Right */}
                            <AnimatedSection delay={200} animationType="slide" direction="right">
                                <div className="bg-slate-50 rounded-xl p-6 sm:p-8 border border-slate-200">
                                    <h3 className="text-lg sm:text-xl font-semibold text-[#0D1E40] mb-3 sm:mb-4">
                                        Control
                                    </h3>
                                    <ul className="space-y-2 text-slate-700 list-disc pl-4 sm:pl-5">
                                        <li>We take ownership of your operational workflows.</li>
                                        <li>Processes run automatically, monitored and auditable.</li>
                                        <li>No idle steps — every task executed with precision.</li>
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
                                        <li>• 80% reduction in manual processing time</li>
                                        <li>• 99.8% accuracy in automated tasks</li>
                                        <li>• 40% faster workflow completion speed</li>
                                    </ul>
                                    <p className="text-slate-600 italic">
                                        Automation isn't about replacing people — it's about removing delay and friction from every process.
                                    </p>
                                </div>
                            </AnimatedSection>

                            {/* Gear Animation Block - Right */}
                            <AnimatedSection delay={400} animationType="slide" direction="right">
                                <div className="bg-slate-50 rounded-xl p-6 sm:p-8 border border-slate-200 flex flex-col items-center justify-center">
                                    <div className="relative w-[260px] h-[260px] flex items-center justify-center mb-6">
                                        {/* Static Outer Circle */}
                                        <div className="absolute w-[240px] h-[240px] border border-[#93C5FD] rounded-full"></div>

                                        {/* Central Gear */}
                                        <div
                                            className="absolute w-[170px] h-[170px] flex items-center justify-center"
                                            style={{
                                                animation: "gearRotateReverse 12s linear infinite",
                                            }}
                                        >
                                            <img
                                                src="/assets/gear.svg"
                                                alt="Automation Gear"
                                                className="w-full h-full"
                                                style={{
                                                    filter:
                                                        "brightness(0) saturate(100%) invert(29%) sepia(98%) saturate(2245%) hue-rotate(212deg) brightness(97%) contrast(94%)",
                                                }}
                                            />
                                        </div>

                                        {/* Orbiting Dots */}
                                        {[0, 90, 180, 270].map((_, i) => (
                                            <div
                                                key={i}
                                                className="absolute w-4 h-4 bg-[#2563EB] rounded-full"
                                                style={{
                                                    transformOrigin: "50% 50%",
                                                    animation: `orbitDot${i} 10s linear infinite, pulseGlow 2.5s ease-in-out infinite`,
                                                    boxShadow: "0 0 20px 6px rgba(37,99,235,0.45), 0 0 35px 12px rgba(37,99,235,0.25)",
                                                }}
                                            ></div>
                                        ))}
                                    </div>

                                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-center max-w-sm">
                                        Precision isn't a feature — it's a policy.
                                    </p>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </div>

                {/* === Animations === */}
                <style>{`
          /* Gear rotation */
          @keyframes gearRotateReverse {
            from { transform: rotate(0deg); }
            to { transform: rotate(-360deg); }
          }

          /* Dots orbiting clockwise */
          @keyframes orbitDot0 {
            from { transform: rotate(0deg) translate(120px) rotate(0deg); }
            to { transform: rotate(360deg) translate(120px) rotate(-360deg); }
          }
          @keyframes orbitDot1 {
            from { transform: rotate(90deg) translate(120px) rotate(-90deg); }
            to { transform: rotate(450deg) translate(120px) rotate(-450deg); }
          }
          @keyframes orbitDot2 {
            from { transform: rotate(180deg) translate(120px) rotate(-180deg); }
            to { transform: rotate(540deg) translate(120px) rotate(-540deg); }
          }
          @keyframes orbitDot3 {
            from { transform: rotate(270deg) translate(120px) rotate(-270deg); }
            to { transform: rotate(630deg) translate(120px) rotate(-630deg); }
          }

          /* Glow pulse for dots */
          @keyframes pulseGlow {
            0%, 100% {
              box-shadow: 0 0 10px rgba(37,99,235,0.3), 0 0 20px rgba(37,99,235,0.15);
            }
            50% {
              box-shadow: 0 0 25px rgba(37,99,235,0.55), 0 0 45px rgba(37,99,235,0.35);
            }
          }

          /* Halo pulse around gear */
          @keyframes gearGlowPulse {
            0%, 100% {
              opacity: 0.3;
              transform: scale(1);
              box-shadow: 0 0 20px rgba(37,99,235,0.4);
            }
            50% {
              opacity: 0.55;
              transform: scale(1.15);
              box-shadow: 0 0 45px rgba(37,99,235,0.7);
            }
          }
        `}</style>
            </div>
        </>
    );
};

export default ProcessAutomation;
