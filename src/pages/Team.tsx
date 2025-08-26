import { Button } from "@/components/ui/button"
import { Hero } from "../components/ui/Hero"
import { TeamCard } from "../components/ui/TeamCard"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card"
import { Users, Award, Lightbulb, Target } from "lucide-react"

export function Team() {
  const leadership = [
    {
      name: "Ethan Carter",
      role: "CEO & Founder",
      bio: "Visionary leader with 15+ years in robotics and AI. Former MIT researcher passionate about transforming industries through innovation.",
      image: "/professional-engineer-portrait.png",
      social: {
        linkedin: "https://linkedin.com/in/ethancarter",
        email: "ethan@robotech.com",
      },
    },
    {
      name: "Olivia Bennett",
      role: "CTO",
      bio: "Expert in AI and machine learning with a PhD from Stanford. Leads our technical vision and product development initiatives.",
      image: "/female-hardware-engineer-portrait.png",
      social: {
        linkedin: "https://linkedin.com/in/oliviabennett",
        twitter: "https://twitter.com/oliviatech",
        email: "olivia@robotech.com",
      },
    },
    {
      name: "Noah Thompson",
      role: "Head of Design",
      bio: "Creative designer specializing in human-robot interaction. Ensures our products are both functional and user-friendly.",
      image: "/male-software-engineer-portrait.png",
      social: {
        linkedin: "https://linkedin.com/in/noahthompson",
        email: "noah@robotech.com",
      },
    },
  ]

  const engineers = [
    {
      name: "Dr. Sarah Chen",
      role: "Senior AI Engineer",
      bio: "Machine learning expert specializing in computer vision and autonomous systems. PhD in Computer Science from Carnegie Mellon.",
      image: "/male-ai-researcher-portrait.png",
      social: {
        linkedin: "https://linkedin.com/in/sarahchen",
        email: "sarah@robotech.com",
      },
    },
    {
      name: "Marcus Rodriguez",
      role: "Robotics Engineer",
      bio: "Mechanical engineer with expertise in robotic arm design and control systems. 10+ years in industrial automation.",
      image: "/professional-engineer-portrait.png",
      social: {
        linkedin: "https://linkedin.com/in/marcusrodriguez",
        email: "marcus@robotech.com",
      },
    },
    {
      name: "Dr. Aisha Patel",
      role: "Research Scientist",
      bio: "Leading researcher in swarm robotics and distributed systems. Published author with 50+ peer-reviewed papers.",
      image: "/female-hardware-engineer-portrait.png",
      social: {
        linkedin: "https://linkedin.com/in/aishapatel",
        twitter: "https://twitter.com/aishapatel",
        email: "aisha@robotech.com",
      },
    },
  ]

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We constantly push the boundaries of what's possible in robotics and AI technology.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe the best solutions come from diverse teams working together towards common goals.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from research to product delivery.",
    },
    {
      icon: Target,
      title: "Impact",
      description: "We focus on creating solutions that make a meaningful difference in people's lives and industries.",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Meet Our Team"
        subtitle="The Minds Behind the Innovation"
        description="Our diverse team of engineers, researchers, and designers are united by a shared passion for robotics and a commitment to building the future."
        backgroundImage="/placeholder.svg?height=800&width=1200"
      />

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced leaders guiding RoboTech's vision and strategic direction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((member, index) => (
              <TeamCard key={index} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl text-gray-900 mb-4">Engineering Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Brilliant engineers and researchers turning innovative ideas into reality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {engineers.map((member, index) => (
              <TeamCard key={index} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our work and define our culture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl mb-4">Join Our Team</h2>
          <p className="text-xl text-blue-100 mb-8">
            Are you passionate about robotics and AI? We're always looking for talented individuals to join our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              View Open Positions
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-primary-900"
            >
              Submit Resume
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
