import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Users, BookOpen } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 lg:pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/modern-school-students.png"
          alt="Kalulini Boy's High School Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block mb-4 px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full border border-accent/30">
            <span className="text-accent text-sm font-medium">Established 1985 • 40 Years of Excellence</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 text-balance leading-tight">
            Kalulini Boy's High School
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed max-w-2xl">
            Empowering young men to become leaders, scholars, and responsible citizens through academic excellence,
            character development, and holistic education.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" variant="secondary" className="text-base">
              Apply for Admission
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Take a Virtual Tour
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <div className="text-2xl lg:text-3xl font-bold text-primary-foreground">800+</div>
              <div className="text-sm text-primary-foreground/80">Students</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <BookOpen className="w-8 h-8 text-accent" />
              </div>
              <div className="text-2xl lg:text-3xl font-bold text-primary-foreground">98%</div>
              <div className="text-sm text-primary-foreground/80">Pass Rate</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <div className="text-2xl lg:text-3xl font-bold text-primary-foreground">50+</div>
              <div className="text-sm text-primary-foreground/80">Awards</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
