import * as React from "react";
import { cn } from "@/lib/utils";

export interface SkillCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SkillCard = React.forwardRef<HTMLDivElement, SkillCardProps>(
  ({ className, icon, title, description, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center gap-4 rounded-xl border bg-card/50 backdrop-blur-sm p-4 shadow-sm",
          "transition-all duration-300 ease-in-out hover:shadow-md hover:-translate-y-1 hover:border-primary/50",
          className
        )}
        {...props}
      >
        {/* Icon Slot */}
        <div className="flex-shrink-0 text-primary w-10 h-10 flex items-center justify-center bg-primary/5 rounded-lg">
          {icon}
        </div>

        {/* Text Content */}
        <div className="flex flex-col text-left">
          <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{title}</p>
          <p className="font-semibold text-card-foreground">{description}</p>
        </div>
      </div>
    );
  }
);
SkillCard.displayName = "SkillCard";

export { SkillCard };
