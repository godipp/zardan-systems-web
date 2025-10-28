import SEOHead from "@/components/SEOHead";

const Privacy = () => {
  return (
    <>
            <SEOHead
                title="Privacy Policy | Zardan Systems"
                description="Privacy policy for Zardan Systems. Learn how we collect, use, and protect your data."
            />

            <div className="bg-[#F9FAFB] text-slate-800 min-h-screen py-20">
                {/* ===== HEADER ===== */}
                <section className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
                    <h1 className="text-4xl font-bold text-[#0F172A] mb-3 tracking-tight">
                        Privacy Policy
                    </h1>
                    <div className="w-20 h-px bg-slate-300 mx-auto mb-4"></div>
                    <p className="text-sm text-slate-500">Last updated: 2025</p>
                </section>

                {/* ===== MAIN CONTENT CONTAINER ===== */}
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-10 md:p-16 relative overflow-hidden">
                        {/* Vertical Accent Bar */}
                        <div className="absolute top-0 left-0 h-full w-[6px] bg-[#1E40AF] rounded-l-3xl"></div>

                        {/* ===== TEXT CONTENT ===== */}
                        <div className="space-y-10 relative z-10">
                            {/* Data Collection */}
                            <section>
                                <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                                    Data Collection
                                </h2>
                                <p className="text-slate-600 mb-2">
                                    Zardan Systems collects contact information (name, email, company) submitted through website forms.
                                </p>
                                <p className="text-slate-600">
                                    Technical data (IP address, browser type, visit duration) is logged for security and analytics purposes.
                                </p>
                            </section>

                            {/* Data Usage */}
                            <section>
                                <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                                    Data Usage
                                </h2>
                                <p className="text-slate-600 mb-2">
                                    Contact information is used solely to respond to inquiries and provide requested services.
                                </p>
                                <p className="text-slate-600">
                                    Technical data informs website optimization and security monitoring.
                                </p>
                            </section>

                            {/* Data Storage */}
                            <section>
                                <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                                    Data Storage
                                </h2>
                                <p className="text-slate-600 mb-2">
                                    Data is stored on secure servers within the European Union.
                                </p>
                                <p className="text-slate-600">
                                    Contact records are retained for 24 months unless deletion is requested.
                                </p>
                            </section>

                            {/* Data Sharing */}
                            <section>
                                <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                                    Data Sharing
                                </h2>
                                <p className="text-slate-600">
                                    Zardan Systems does not sell or share personal data with third parties. Data may be disclosed if required by law.
                                </p>
                            </section>

                            {/* User Rights */}
                            <section>
                                <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                                    User Rights
                                </h2>
                                <p className="text-slate-600 mb-2">
                                    Users may request access to, correction of, or deletion of their personal data.
                                </p>
                                <p className="text-slate-600">
                                    Requests should be sent to <a href="mailto:contact@zardansystems.com" className="text-[#1E40AF] font-medium hover:underline">contact@zardansystems.com</a> and will be processed within 30 days.
                                </p>
                            </section>

                            {/* Cookies */}
                            <section>
                                <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                                    Cookies
                                </h2>
                                <p className="text-slate-600">
                                    This website uses essential cookies for functionality. No third-party tracking cookies are deployed.
                                </p>
                            </section>

                            {/* Contact */}
                            <section>
                                <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                                    Contact
                                </h2>
                                <p className="text-slate-600">
                                    Privacy questions:{" "}
                                    <span className="text-[#1E40AF] font-medium">
                                        <a href="mailto:contact@zardansystems.com" className="text-[#1E40AF] font-medium hover:underline">contact@zardansystems.com</a>
                                    </span>
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Privacy;
