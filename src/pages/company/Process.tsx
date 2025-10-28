import SEOHead from "@/components/SEOHead";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Search, GitBranch, Activity } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: Search,
      title: "Discovery",
      description: "Requirements analysis and system audit to identify integration points and automation opportunities.",
      details: [
        "Stakeholder interviews and workflow mapping",
        "Technical assessment of existing systems",
        "Documentation of integration requirements"
      ]
    },
    {
      icon: GitBranch,
      title: "Integration",
      description: "Design and deployment of secure integration architecture with testing protocols.",
      details: [
        "API design and data flow architecture",
        "Development and staging environment setup",
        "Integration testing and validation"
      ]
    },
    {
      icon: Activity,
      title: "Monitoring",
      description: "Post-deployment support with performance monitoring and continuous optimization.",
      details: [
        "Real-time monitoring dashboards",
        "Issue detection and resolution",
        "Performance optimization and scaling"
      ]
    }
  ];

  return (
    <>
      <SEOHead
        title="Our Process | Zardan Systems"
        description="Structured approach to enterprise integration: Discovery, Integration, and Monitoring for reliable system automation."
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-3xl mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">Our Process</h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            A structured methodology that ensures reliable integration and automation delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          {steps.map((step, index) => (
            <Card key={step.title} className="shadow-md hover-lift">
              <CardHeader className="p-4 md:p-6">
                <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                  <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary text-primary-foreground">
                    <step.icon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div className="text-sm md:text-sm font-semibold text-muted-foreground">
                    Step {index + 1}
                  </div>
                </div>
                <CardTitle className="text-lg md:text-xl mb-2">{step.title}</CardTitle>
                <CardDescription className="text-sm md:text-base">
                  {step.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <ul className="space-y-1 md:space-y-2 text-sm md:text-sm text-muted-foreground">
                  {step.details.map((detail, idx) => (
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

        <div className="bg-muted rounded-lg p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">Why This Approach Works</h2>
          <div className="space-y-3 md:space-y-4 text-sm md:text-base text-muted-foreground">
            <p>
              Our three-phase methodology ensures technical accuracy and operational alignment at every stage.
            </p>
            <p>
              Each phase includes stakeholder review and sign-off before progression. This structured approach minimizes implementation risk and ensures delivery meets documented requirements.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Process;
