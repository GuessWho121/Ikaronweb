import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./Card"
import { Button } from "./Button"
import { ExternalLink, Calendar } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  date?: string
  status?: "completed" | "in-progress" | "upcoming"
  technologies?: string[]
  link?: string
}

export function ProjectCard({ title, description, image, date, status, technologies, link }: ProjectCardProps) {
  const statusColors = {
    completed: "bg-green-100 text-green-800",
    "in-progress": "bg-blue-100 text-blue-800",
    upcoming: "bg-yellow-100 text-yellow-800",
  }

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="aspect-video overflow-hidden rounded-t-xl">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="text-xl group-hover:text-primary-600 transition-colors">{title}</CardTitle>
          {status && (
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[status]}`}>
              {status.replace("-", " ")}
            </span>
          )}
        </div>
        {date && (
          <div className="flex items-center text-sm text-gray-500">
            <Calendar size={14} className="mr-1" />
            {date}
          </div>
        )}
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base mb-4">{description}</CardDescription>
        {technologies && (
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech) => (
              <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium">
                {tech}
              </span>
            ))}
          </div>
        )}
        {link && (
          <Button variant="outline" size="sm" className="w-full bg-transparent">
            <ExternalLink size={16} className="mr-2" />
            View Project
          </Button>
        )}
      </CardContent>
    </Card>
  )
}
