import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "accent" | "subtle";
}

export function Badge({ children, className, variant = "accent", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold font-heading tracking-wide transition-colors",
        variant === "accent" && "bg-[#00d4ff]/10 text-[#00d4ff] border border-[#00d4ff]/30 shadow-[0_0_10px_rgba(0,212,255,0.2)]",
        variant === "subtle" && "bg-white/5 text-slate-300 border border-white/10",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
