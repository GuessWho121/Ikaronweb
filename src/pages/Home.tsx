import { Hero } from "../components/ui/Hero"
import { ProjectCard } from "../components/ui/ProjectCard"
import { Button } from "../components/ui/Button"
import { ArrowRight, Target, Eye, Zap } from "lucide-react"

export function Home() {
  const projects = [
    {
      title: "Autonomous Delivery Drone",
      description:
        "Advanced AI-powered drone system for last-mile delivery solutions with obstacle avoidance and GPS navigation.",
      image: "/placeholder.svg?height=300&width=400",
      status: "completed" as const,
      technologies: ["AI", "Computer Vision", "GPS"],
      date: "2024",
    },
    {
      title: "Industrial Robot Arm",
      description:
        "Precision manufacturing robot with 6-axis movement and advanced sensor integration for quality control.",
      image: "/placeholder.svg?height=300&width=400",
      status: "in-progress" as const,
      technologies: ["Robotics", "Sensors", "Manufacturing"],
      date: "2024",
    },
    {
      title: "Smart Home Assistant",
      description: "Voice-controlled home automation system with machine learning capabilities and IoT integration.",
      image: "/placeholder.svg?height=300&width=400",
      status: "upcoming" as const,
      technologies: ["IoT", "Machine Learning", "Voice Recognition"],
      date: "2025",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="The Future of Robotics"
        subtitle="Innovation Meets Intelligence"
        description="Pioneering advanced robotics solutions that transform industries and enhance human capabilities through cutting-edge AI and automation technology."
        primaryAction={{ text: "Explore Projects", href: "/projects" }}
        secondaryAction={{ text: "Learn More", href: "/about" }}
        backgroundImage="/placeholder.svg?height=800&width=1200"
      />

      {/* Vision & Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                  <Eye className="w-6 h-6 text-primary-600" />
                </div>
                <h2 className="font-heading font-bold text-3xl text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                To create a world where intelligent robotics seamlessly integrates with human life, enhancing
                productivity, safety, and quality of life across all industries and communities.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-accent-600" />
                </div>
                <h2 className="font-heading font-bold text-3xl text-gray-900">Our Mission</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                To develop innovative robotic solutions that solve real-world challenges through advanced AI, precision
                engineering, and sustainable technology practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Zap className="w-8 h-8 text-primary-600 mr-3" />
              <h2 className="font-heading font-bold text-4xl text-gray-900">Featured Projects</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our latest innovations in robotics and AI technology that are shaping the future
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="group">
              View All Projects
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
