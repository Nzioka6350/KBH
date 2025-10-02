import { Card } from "@/components/ui/card"
import { Target, Heart, Lightbulb, Trophy } from "lucide-react"

export function AboutSection() {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for the highest standards in academics, sports, and character development.",
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "We cultivate honesty, responsibility, and ethical behavior in all our students.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace modern teaching methods and technology to enhance learning.",
    },
    {
      icon: Trophy,
      title: "Leadership",
      description: "We develop confident leaders who make positive contributions to society.",
    },
  ]

  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              About Kalulini Boy's High School
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded in 1985, Kalulini Boy's High School has been a beacon of academic excellence and character
                development for nearly four decades. Our institution is dedicated to nurturing young men into
                responsible, educated, and ethical leaders.
              </p>
              <p>
                Located in a serene environment conducive to learning, our school combines traditional values with
                modern educational approaches. We believe in holistic education that develops not just the mind, but
                also the body and spirit.
              </p>
              <p>
                With a dedicated faculty, state-of-the-art facilities, and a proven track record of academic success,
                Kalulini Boy's High continues to be the school of choice for families seeking quality education for
                their sons.
              </p>
            </div>
          </div>

          <div className="relative">
            <img src="/classroom-learning.png" alt="Students in classroom" className="rounded-lg shadow-2xl" />
          </div>
        </div>

        {/* Core Values */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-4xl font-bold text-foreground mb-4">Our Core Values</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at Kalulini Boy's High School
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-2">{value.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
