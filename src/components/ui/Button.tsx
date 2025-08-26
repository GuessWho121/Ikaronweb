import { type ButtonHTMLAttributes, forwardRef } from "react"
import { cn } from "../utils"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
          {
            "bg-primary-600 hover:bg-primary-700 text-white focus:ring-primary-500": variant === "primary",
            "bg-accent-500 hover:bg-accent-600 text-white focus:ring-accent-500": variant === "secondary",
            "border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 focus:ring-primary-500":
              variant === "outline",
            "hover:bg-gray-100 text-gray-700 focus:ring-primary-500": variant === "ghost",
          },
          {
            "px-3 py-2 text-sm": size === "sm",
            "px-4 py-2 text-base": size === "md",
            "px-6 py-3 text-lg": size === "lg",
          },
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)

Button.displayName = "Button"

export { Button }
