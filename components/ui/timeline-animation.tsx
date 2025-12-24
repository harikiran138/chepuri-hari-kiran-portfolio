"use client";

import React from "react";
import { motion, useInView, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface TimelineContentProps {
  as?: React.ElementType;
  animationNum: number;
  timelineRef: React.RefObject<HTMLElement | null>;
  customVariants?: Variants;
  className?: string;
  children: React.ReactNode;
}

const defaultVariants: Variants = {
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
  hidden: {
    opacity: 0,
    y: 20,
  },
};

export function TimelineContent({
  as: Component = "div",
  animationNum,
  timelineRef,
  customVariants = defaultVariants,
  className,
  children,
}: TimelineContentProps) {
  const MotionComponent = motion(Component as any);
  const isInView = useInView(timelineRef as React.RefObject<Element>, { once: true, margin: "-100px" });

  return (
    <MotionComponent
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={animationNum}
      variants={customVariants}
      className={cn(className)}
    >
      {children}
    </MotionComponent>
  );
}
