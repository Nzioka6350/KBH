import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle, Calendar, FileText, Users } from "lucide-react"

export function AdmissionsSection() {
  const steps = [
    {
      icon: FileText,
      title: "Submit Application",
      description: "Complete and submit the online application form with required documents.",
    },
    {
      icon: Calendar,
      title: "Entrance Exam",
      description: "Attend the scheduled entrance examination at our campus.",
    },
    {
      icon: Users,
      title: "Interview",
      description: "Participate in a brief interview with our admissions team.",
    },
    {
      icon: CheckCircle,
      title: "Admission Decision",
      description: "Receive your admission decision within two weeks.",
    },
  ]

  const requirements = [
    "Completed application form",
    "Birth certificate (original and copy)",
    "KCPE certificate and results slip",
    "Transfer certificate from previous school",
    "Recent passport-size photographs (4 copies)",
    "Medical examination report",
    "Recommendation letter from primary school head teacher",
  ]

  return (
    <section id="admissions" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 text-balance">Admissions Process</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Join the Kalulini Boy's High School family. Our admissions process is straightforward and transparent.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => (
            <Card key={step.title} className="p-6 text-center relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-sm">
                {index + 1}
              </div>
              <div className="flex justify-center mb-4 mt-2">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
            </Card>
          ))}
        </div>

        {/* Requirements and CTA */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <Card className="p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Required Documents</h3>
            <ul className="space-y-3">
              {requirements.map((req) => (
                <li key={req} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{req}</span>
                </li>
              ))}
            </ul>
          </Card>

          <div className="lg:sticky lg:top-24">
            <Card className="p-8 bg-primary text-primary-foreground">
              <h3 className="text-2xl font-bold mb-4">Ready to Apply?</h3>
              <p className="mb-6 text-primary-foreground/90 leading-relaxed">
                Applications for the 2025 academic year are now open. Don't miss this opportunity to join one of the
                leading boys' schools in the region.
              </p>
              <div className="space-y-4">
                <Button size="lg" variant="secondary" className="w-full">
                  Start Your Application
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  Download Prospectus
                </Button>
              </div>
              <div className="mt-6 pt-6 border-t border-primary-foreground/20">
                <p className="text-sm text-primary-foreground/80 mb-2">Need help with your application?</p>
                <p className="font-semibold">Call: +254 700 123 456</p>
                <p className="font-semibold">Email: admissions@kaluliniboys.ac.ke</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
