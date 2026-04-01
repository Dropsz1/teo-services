import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverEffect?: boolean;
}

export function GlassCard({ children, className, hoverEffect = true, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass-panel rounded-2xl p-6 md:p-8",
        hoverEffect && "glass-card-hover",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
