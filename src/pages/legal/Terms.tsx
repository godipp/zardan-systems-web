import SEOHead from "@/components/SEOHead";
import { Container } from "@/components/ui/Container";

const Terms = () => {
  return (
    <>
            <SEOHead
                title="Terms of Service | Zardan Systems"
                description="Terms of service for Zardan Systems website and services."
            />

            <div className="py-20">
                <Container padding="lg">
                    {/* ===== HEADER ===== */}
                    <section className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-[#0F172A] mb-3 tracking-tight">
                        Terms of Service
                    </h1>
                    <div className="w-20 h-px bg-slate-300 mx-auto mb-4"></div>
                    <p className="text-sm text-slate-500">Last updated: 2025</p>
                    </section>

                    {/* ===== MAIN CONTENT CONTAINER ===== */}
                    <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-10 md:p-16 relative overflow-hidden">
                        {/* ===== TEXT CONTENT ===== */}
                        <div className="space-y-10 relative z-10">
                            {/* Service Agreement */}
                            <section>
                                <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                                    Service Agreement
                                </h2>
                                <p className="text-slate-600 mb-2">
                                    Access to this website constitutes acceptance of these terms.
                                </p>
                                <p className="text-slate-600">
                                    Services provided by Zardan Systems are subject to separate written agreements.
                                </p>
                            </section>

                            {/* Intellectual Property */}
                            <section>
                                <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                                    Intellectual Property
                                </h2>
                                <p className="text-slate-600 mb-2">
                                    All content on this website is property of Zardan Systems.
                                </p>
                                <p className="text-slate-600">
                                    Reproduction or distribution requires written permission.
                                </p>
                            </section>

                            {/* Service Descriptions */}
                            <section>
                                <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                                    Service Descriptions
                                </h2>
                                <p className="text-slate-600">
                                    Information provided on services is for general reference. Actual deliverables are defined in project agreements.
                                </p>
                            </section>

                            {/* Limitation of Liability */}
                            <section>
                                <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                                    Limitation of Liability
                                </h2>
                                <p className="text-slate-600 mb-2">
                                    Zardan Systems is not liable for indirect or consequential damages arising from website use.
                                </p>
                                <p className="text-slate-600">
                                    Service liability is governed by individual project contracts.
                                </p>
                            </section>

                            {/* Governing Law */}
                            <section>
                                <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                                    Governing Law
                                </h2>
                                <p className="text-slate-600">
                                    These terms are governed by the laws of England and Wales. Disputes are subject to the jurisdiction of UK courts.
                                </p>
                            </section>

                            {/* Contact */}
                            <section>
                                <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                                    Contact
                                </h2>
                                <p className="text-slate-600">
                                    Legal questions:{" "}
                                    <a href="mailto:contact@zardansystems.com" className="text-[#1E40AF] font-medium hover:underline">
                                        contact@zardansystems.com
                                    </a>
                                </p>
                            </section>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default Terms;
