import { Card } from "@/components/ui/card"
import { BookOpen, Microscope, Calculator, Globe, Palette, Music } from "lucide-react"

export function AcademicsSection() {
  const departments = [
    {
      icon: BookOpen,
      name: "Languages & Literature",
      subjects: ["English", "Kiswahili", "Literature"],
    },
    {
      icon: Calculator,
      name: "Mathematics",
      subjects: ["Pure Mathematics", "Applied Mathematics"],
    },
    {
      icon: Microscope,
      name: "Sciences",
      subjects: ["Biology", "Chemistry", "Physics"],
    },
    {
      icon: Globe,
      name: "Humanities",
      subjects: ["History", "Geography", "Religious Studies"],
    },
    {
      icon: Palette,
      name: "Creative Arts",
      subjects: ["Art & Design", "Drama", "Crafts"],
    },
    {
      icon: Music,
      name: "Performing Arts",
      subjects: ["Music", "Dance", "Public Speaking"],
    },
  ]

  return (
    <section id="academics" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 text-balance">Academic Excellence</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Our comprehensive curriculum is designed to challenge and inspire students, preparing them for success in
            higher education and beyond.
          </p>
        </div>

        {/* Departments Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {departments.map((dept) => (
            <Card key={dept.name} className="p-6 hover:shadow-lg transition-shadow bg-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <dept.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{dept.name}</h3>
                  <ul className="space-y-1">
                    {dept.subjects.map((subject) => (
                      <li key={subject} className="text-sm text-muted-foreground">
                        • {subject}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Academic Achievements */}
        <div className="bg-primary text-primary-foreground rounded-2xl p-8 lg:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">98%</div>
              <div className="text-primary-foreground/80">KCSE Pass Rate</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">250+</div>
              <div className="text-primary-foreground/80">University Admissions Annually</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">15+</div>
              <div className="text-primary-foreground/80">National Awards</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
