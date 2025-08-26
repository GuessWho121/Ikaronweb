import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./Card"
import { Linkedin, Mail, Twitter } from "lucide-react"

interface TeamCardProps {
  name: string
  role: string
  bio: string
  image: string
  social?: {
    linkedin?: string
    twitter?: string
    email?: string
  }
}

export function TeamCard({ name, role, bio, image, social }: TeamCardProps) {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
      <CardHeader>
        <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
          <img
            src={image || "/placeholder.svg"}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <CardTitle className="text-xl">{name}</CardTitle>
        <CardDescription className="text-primary-600 font-medium">{role}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">{bio}</p>
        {social && (
          <div className="flex justify-center space-x-3">
            {social.linkedin && (
              <a
                href={social.linkedin}
                className="text-gray-400 hover:text-blue-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </a>
            )}
            {social.twitter && (
              <a
                href={social.twitter}
                className="text-gray-400 hover:text-blue-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={20} />
              </a>
            )}
            {social.email && (
              <a href={`mailto:${social.email}`} className="text-gray-400 hover:text-gray-600 transition-colors">
                <Mail size={20} />
              </a>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
