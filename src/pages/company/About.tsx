import SEOHead from "@/components/SEOHead";
import { Container } from "@/components/ui/Container";

const About = () => {
    return (
        <>
            <SEOHead
                title="About | Zardan Systems"
                description="Founded in 2018, Zardan Systems provides enterprise integration and automation solutions trusted by European finance, logistics, and manufacturing clients."
            />

            <div className="py-12 sm:py-16 md:py-20">
                <Container padding="lg">
                    {/* ===== HEADER ===== */}
                    <section className="text-center mb-6 sm:mb-10 md:mb-16">
                    <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-[#0F172A] mb-2 sm:mb-2 md:mb-3 tracking-tight">
                        About Zardan Systems
                    </h1>
                    <div className="w-12 sm:w-16 md:w-20 h-px bg-slate-300 mx-auto mb-2 sm:mb-3 md:mb-4"></div>
                    <p className="text-sm sm:text-sm md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                        Established in 2018, Zardan Systems delivers enterprise integration and automation solutions across
                        Europe. Our expertise lies in connecting complex systems and transforming fragmented processes into
                        unified, measurable, and controllable environments.
                    </p>
                    </section>

                    {/* ===== MAIN CONTAINER ===== */}
                    <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg border border-slate-200 p-4 sm:p-6 md:p-10 lg:p-16 relative overflow-hidden">
                        {/* Vertical Accent Bar */}
                        <div className="absolute top-0 left-0 h-full w-[6px] bg-[#1E40AF] rounded-l-3xl"></div>

                        {/* ===== CONTENT ===== */}
                        <div className="space-y-10 sm:space-y-12 md:space-y-16 relative z-10">
                            {/* Scale & Presence */}
                            <section className="bg-slate-50 rounded-xl sm:rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-6 md:p-8">
                                <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-5 md:mb-6 text-slate-800">
                                    Scale & Presence
                                </h2>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                                    <div className="text-center">
                                        <div className="text-2xl sm:text-3xl font-bold text-[#1E40AF] mb-1">7+</div>
                                        <div className="text-sm sm:text-sm text-slate-600">
                                            Years delivering automation solutions
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl sm:text-3xl font-bold text-[#1E40AF] mb-1">10</div>
                                        <div className="text-sm sm:text-sm text-slate-600">Specialists</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl sm:text-3xl font-bold text-[#1E40AF] mb-1">3</div>
                                        <div className="text-sm sm:text-sm text-slate-600">Core industries</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl sm:text-3xl font-bold text-[#1E40AF] mb-1">15+</div>
                                        <div className="text-sm sm:text-sm text-slate-600">Completed projects</div>
                                    </div>
                                </div>
                                <p className="text-sm text-slate-500 text-center mt-4 sm:mt-5 md:mt-6">
                                    Figures updated annually — based on active project portfolio.
                                </p>
                            </section>

                            {/* Origin & Transformation */}
                            <section>
                                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 text-slate-800">
                                    Origin & Transformation
                                </h2>
                                <p className="text-sm sm:text-sm md:text-base text-slate-600 mb-2 sm:mb-3 leading-relaxed">
                                    Zardan Systems originated as a specialized engineering unit supporting enterprise
                                    operations within the German market. The team focused on critical system integration,
                                    automation, and process control within large-scale IT ecosystems.
                                </p>
                                <p className="text-sm sm:text-sm md:text-base text-slate-600 mb-2 sm:mb-3 leading-relaxed">
                                    Through consistent delivery and a structured approach to solution architecture,
                                    the company transitioned into an independent integration provider. Its evolution was
                                    driven by a demand for higher reliability, standardization, and transparent execution
                                    in complex enterprise environments.
                                </p>
                                <p className="text-sm sm:text-sm md:text-base text-slate-600 leading-relaxed">
                                    In 2025, Zardan Systems was formally incorporated in the United Kingdom to
                                    consolidate European operations and provide direct engagement with clients across the EU.
                                </p>
                            </section>

                            {/* Capability */}
                            <section>
                                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 text-slate-800">
                                    Capability
                                </h2>
                                <p className="text-sm sm:text-sm md:text-base text-slate-600 mb-2 sm:mb-3 leading-relaxed">
                                    Zardan Systems designs, implements, and maintains integration frameworks and
                                    automation layers for enterprise infrastructures. Our work spans financial systems,
                                    logistics platforms, and manufacturing control networks.
                                </p>
                                <p className="text-sm sm:text-sm md:text-base text-slate-600 mb-2 sm:mb-3 leading-relaxed">
                                    The company applies architectural rigor, strict development standards, and measurable
                                    KPIs in every delivery. Each integration follows a clear sequence: requirement
                                    analysis, architecture definition, implementation, validation, and operational transfer.
                                </p>
                                <p className="text-sm sm:text-sm md:text-base text-slate-600 leading-relaxed">
                                    Our goal is not rapid deployment — but sustainable automation, where every process is
                                    traceable, every dependency documented, and every outcome verifiable.
                                </p>
                            </section>

                            {/* Operating Principles */}
                            <section>
                                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 text-slate-800">
                                    Operating Principles
                                </h2>
                                <p className="text-sm sm:text-sm md:text-base text-slate-600 mb-2 sm:mb-3 leading-relaxed">
                                    We approach integration as an engineering discipline, not a service. Each system
                                    we design must be stable under load, transparent in execution, and predictable in
                                    maintenance.
                                </p>
                                <p className="text-sm sm:text-sm md:text-base text-slate-600 mb-2 sm:mb-3 leading-relaxed">
                                    Our processes emphasize auditability, accountability, and control. Documentation,
                                    monitoring, and performance baselines are established for every solution deployed.
                                </p>
                                <p className="text-sm sm:text-sm md:text-base text-slate-600 leading-relaxed">
                                    Zardan Systems operates under principles of precision, verification, and reliability —
                                    ensuring that each delivered system enhances operational integrity and long-term scalability.
                                </p>
                            </section>

                            {/* Service Regions */}
                            <section>
                                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 text-slate-800">
                                    Service Regions
                                </h2>
                                <p className="text-sm sm:text-sm md:text-base text-slate-600 mb-2 sm:mb-3 leading-relaxed">
                                    The company provides services primarily across the European Union and the United Kingdom,
                                    with project experience in Germany, Austria, and the Baltic region.
                                </p>
                                <p className="text-sm sm:text-sm md:text-base text-slate-600 leading-relaxed">
                                    Future development focuses on strengthening cooperation with European industrial
                                    and financial sectors through standardized integration frameworks and compliance-oriented
                                    automation solutions.
                                </p>
                            </section>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default About;
