"use client";

import { cn } from "@/lib/utils";
import { PlusIcon } from "lucide-react";
import Image from "next/image";
import { useMemo } from "react";

type TechItem = {
  name: string;
  slug: string;
};

const techStack: TechItem[] = [
  { name: "TypeScript", slug: "typescript" },
  { name: "JavaScript", slug: "javascript" },
  { name: "Java", slug: "java" },
  { name: "React", slug: "react" },
  { name: "Next.js", slug: "nextdotjs" },
  { name: "Android", slug: "android" },
  { name: "HTML5", slug: "html5" },
  { name: "CSS3", slug: "css3" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "Express", slug: "express" },
  { name: "Prisma", slug: "prisma" },
  { name: "AWS", slug: "amazonaws" },
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "Firebase", slug: "firebase" },
  { name: "Nginx", slug: "nginx" },
  { name: "Vercel", slug: "vercel" },
  { name: "Docker", slug: "docker" },
  { name: "Git", slug: "git" },
  { name: "GitHub", slug: "github" },
  { name: "GitLab", slug: "gitlab" },
  { name: "VS Code", slug: "visualstudiocode" },
  { name: "Figma", slug: "figma" },
  { name: "Android Studio", slug: "androidstudio" },
  { name: "Jira", slug: "jira" },
  { name: "Testing Library", slug: "testinglibrary" },
  { name: "Jest", slug: "jest" },
  { name: "Cypress", slug: "cypress" },
  { name: "SonarQube", slug: "sonarqube" },
];

export function TechLogoCloud() {
  // Split into two rows for the marquee effect
  const firstRow = techStack.slice(0, Math.ceil(techStack.length / 2));
  const secondRow = techStack.slice(Math.ceil(techStack.length / 2));

  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden py-10 w-full">
      <div className="flex w-full flex-col overflow-hidden">
        <Marquee pauseOnHover className="[--duration:40s]">
          {firstRow.map((tech) => (
            <TechCard key={tech.slug} tech={tech} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:40s] mt-[-1px]">
          {secondRow.map((tech) => (
            <TechCard key={tech.slug} tech={tech} />
          ))}
        </Marquee>
      </div>
      
      {/* Gradients removed as requested for "noboder" look */}
    </div>
  );
}

function TechCard({ tech }: { tech: TechItem }) {
  return (
    <div
      className={cn(
        "relative flex h-32 w-48 flex-col items-center justify-center gap-2 border bg-background/50 hover:bg-secondary/20 transition-colors",
        "border-r-0 border-t-0 border-l border-b", // Try to mimic the grid look with shared borders
      )}
    >
      <div className="relative h-12 w-12">
         {/* Using simpleicons CDN for consistent tech logos */}
        <img
          src={`https://cdn.simpleicons.org/${tech.slug}`}
          alt={tech.name}
          className="h-full w-full object-contain dark:invert"
        />
      </div>
      <span className="text-sm font-medium text-muted-foreground">{tech.name}</span>
      
      {/* Decorative Plus Icons - placed to mock the grid intersections */}
      <PlusIcon
        className="absolute -left-3 -top-3 h-6 w-6 text-muted-foreground/20"
        strokeWidth={1}
      />
    </div>
  );
}

function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  [key: string]: any;
}) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className,
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
              "animate-scroll-left flex-row": !vertical && !reverse,
              "animate-scroll-right flex-row": !vertical && reverse,
              "animate-scroll-up flex-col": vertical && !reverse,
              "animate-scroll-down flex-col": vertical && reverse,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
