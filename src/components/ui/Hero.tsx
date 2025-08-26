import type { ReactNode } from "react"
import { Button } from "./Button"

interface HeroProps {
  title: string
  subtitle: string
  description: string
  primaryAction?: {
    text: string
    href: string
  }
  secondaryAction?: {
    text: string
    href: string
  }
  backgroundImage?: string
  children?: ReactNode
}

export function Hero({
  title,
  subtitle,
  description,
  primaryAction,
  secondaryAction,
  backgroundImage,
  children,
}: HeroProps) {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient">
        {backgroundImage && (
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        )}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-4 font-medium">{subtitle}</p>
          <p className="text-lg text-blue-200 mb-8 max-w-2xl mx-auto leading-relaxed">{description}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {primaryAction && (
              <Button size="lg" className="bg-accent-500 hover:bg-accent-600">
                {primaryAction.text}
              </Button>
            )}
            {secondaryAction && (
              <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                {secondaryAction.text}
              </Button>
            )}
          </div>

          {children}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
