import { Hero } from "../components/ui/Hero"
import { ProjectCard } from "../components/ui/ProjectCard"
import { Button } from "../components/ui/Button"
import { Filter } from "lucide-react"

export function Projects() {
  const featuredProjects = [
    {
      title: "Autonomous Delivery Drone",
      description:
        "Advanced AI-powered drone system for last-mile delivery solutions with obstacle avoidance and GPS navigation.",
      image: "/placeholder.svg?height=300&width=400",
      status: "completed" as const,
      technologies: ["AI", "Computer Vision", "GPS", "IoT"],
      date: "2024",
      link: "#",
    },
    {
      title: "Industrial Robot Arm",
      description:
        "Precision manufacturing robot with 6-axis movement and advanced sensor integration for quality control.",
      image: "/placeholder.svg?height=300&width=400",
      status: "in-progress" as const,
      technologies: ["Robotics", "Sensors", "Manufacturing", "AI"],
      date: "2024",
      link: "#",
    },
    {
      title: "Smart Home Assistant",
      description: "Voice-controlled home automation system with machine learning capabilities and IoT integration.",
      image: "/placeholder.svg?height=300&width=400",
      status: "upcoming" as const,
      technologies: ["IoT", "Machine Learning", "Voice Recognition"],
      date: "2025",
      link: "#",
    },
  ]

  const pastProjects = [
    {
      title: "Medical Surgery Robot",
      description: "Precision surgical assistant robot with haptic feedback and real-time imaging integration.",
      image: "/placeholder.svg?height=300&width=400",
      status: "completed" as const,
      technologies: ["Medical Tech", "Precision Control", "AI"],
      date: "2023",
      link: "#",
    },
    {
      title: "Agricultural Harvesting Bot",
      description: "Automated crop harvesting system with computer vision for fruit recognition and gentle handling.",
      image: "/placeholder.svg?height=300&width=400",
      status: "completed" as const,
      technologies: ["Agriculture", "Computer Vision", "Automation"],
      date: "2023",
      link: "#",
    },
    {
      title: "Warehouse Logistics Robot",
      description:
        "Intelligent inventory management system with autonomous navigation and package sorting capabilities.",
      image: "/placeholder.svg?height=300&width=400",
      status: "completed" as const,
      technologies: ["Logistics", "Navigation", "Sorting"],
      date: "2022",
      link: "#",
    },
    {
      title: "Underwater Exploration Drone",
      description: "Deep-sea research vehicle with advanced sonar mapping and environmental monitoring systems.",
      image: "/placeholder.svg?height=300&width=400",
      status: "completed" as const,
      technologies: ["Marine Tech", "Sonar", "Environmental"],
      date: "2022",
      link: "#",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Our Projects"
        subtitle="Innovation in Action"
        description="Explore our portfolio of cutting-edge robotics projects that are transforming industries and pushing the boundaries of what's possible."
        backgroundImage="/placeholder.svg?height=800&width=1200"
      />

      {/* Featured Projects Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our latest and most innovative robotics solutions currently in development or recently completed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Past Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl text-gray-900 mb-4">Past Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Successful robotics solutions we've delivered across various industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pastProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="group bg-transparent">
              <Filter className="mr-2 w-5 h-5" />
              View All Projects
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
