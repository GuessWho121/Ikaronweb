import { Hero } from "../components/ui/Hero"
import { TeamCard } from "../components/ui/TeamCard"
import { Users, Award, Globe, Lightbulb } from "lucide-react"

export function About() {
  const teamMembers = [
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

  const stats = [
    { icon: Users, label: "Team Members", value: "50+" },
    { icon: Award, label: "Awards Won", value: "25+" },
    { icon: Globe, label: "Countries Served", value: "30+" },
    { icon: Lightbulb, label: "Patents Filed", value: "15+" },
  ]

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="About RoboTech"
        subtitle="Pioneering the Future of Robotics"
        description="We are a team of passionate engineers, designers, and innovators dedicated to creating intelligent robotic solutions that make a positive impact on the world."
        backgroundImage="/placeholder.svg?height=800&width=1200"
      />

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary-600" />
                </div>
                <div className="font-heading font-bold text-3xl text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading font-bold text-4xl text-gray-900 mb-8">Our Story</h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="text-xl leading-relaxed mb-6">
                Founded in 2018, RoboTech emerged from a simple yet powerful vision: to bridge the gap between
                cutting-edge robotics research and practical, real-world applications that benefit humanity.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Our journey began in a small garage where our founders, driven by their passion for robotics and AI,
                started developing autonomous systems that could adapt and learn from their environment. Today, we've
                grown into a leading robotics company with a global presence.
              </p>
              <p className="text-lg leading-relaxed">
                We believe that the future belongs to intelligent machines that work alongside humans, enhancing our
                capabilities rather than replacing them. Every project we undertake is guided by this philosophy of
                human-robot collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The brilliant minds behind RoboTech's innovative solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamCard key={index} {...member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
