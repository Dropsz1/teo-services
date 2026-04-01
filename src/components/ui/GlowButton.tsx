import * as React from "react"
import { cn } from "@/lib/utils"

export interface GlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost"
  size?: "sm" | "md" | "lg"
}

export const GlowButton = React.forwardRef<HTMLButtonElement, GlowButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center rounded-full font-heading font-medium transition-all duration-300",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4ff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0f1e]",
          "disabled:opacity-50 disabled:pointer-events-none",
          
          size === "sm" && "px-4 py-2 text-sm",
          size === "md" && "px-6 py-3 text-base",
          size === "lg" && "px-8 py-4 text-lg",
          
          variant === "primary" && [
            "bg-[#00d4ff]/10 text-[#00d4ff]",
            "border border-[#00d4ff]/50",
            "hover:bg-[#00d4ff]/20 hover:text-white hover:border-[#00d4ff]",
            "shadow-[0_0_15px_rgba(0,212,255,0.2)] hover:shadow-[0_0_25px_rgba(0,212,255,0.5)]"
          ],
          
          variant === "ghost" && [
            "text-slate-300 hover:text-white",
            "hover:bg-white/5",
          ],
          
          className
        )}
        {...props}
      />
    )
  }
)
GlowButton.displayName = "GlowButton"
