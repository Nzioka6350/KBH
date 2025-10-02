import { Card } from "@/components/ui/card"

export function FacilitiesSection() {
  const facilities = [
    {
      title: "Modern Classrooms",
      description: "Spacious, well-lit classrooms equipped with modern teaching aids and technology.",
      image: "/modern-school-classroom.png",
    },
    {
      title: "Science Laboratories",
      description: "Fully equipped labs for Biology, Chemistry, and Physics practical sessions.",
      image: "/science-laboratory-equipment.jpg",
    },
    {
      title: "Library & Resource Center",
      description: "Extensive collection of books, journals, and digital resources for research.",
      image: "/school-library-with-books.jpg",
    },
    {
      title: "Sports Facilities",
      description: "Football field, basketball court, volleyball court, and athletics track.",
      image: "/school-sports-field.png",
    },
    {
      title: "Computer Lab",
      description: "Modern computer lab with high-speed internet for ICT education.",
      image: "/computer-lab-students.jpg",
    },
    {
      title: "Dormitories",
      description: "Comfortable boarding facilities with modern amenities and 24/7 security.",
      image: "/school-dormitory-room.jpg",
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 text-balance">World-Class Facilities</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Our state-of-the-art facilities provide students with the best environment for learning, growth, and
            development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility) => (
            <Card key={facility.title} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={facility.image || "/placeholder.svg"}
                  alt={facility.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{facility.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{facility.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
