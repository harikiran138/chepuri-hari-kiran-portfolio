"use client";
import React from "react";
import { motion } from "framer-motion";

interface VerticalCutRevealProps {
  children: React.ReactNode;
  splitBy?: "words" | "characters" | "lines";
  staggerDuration?: number;
  staggerFrom?: "first" | "last" | "center" | number;
  reverse?: boolean;
  transition?: any;
}

export const VerticalCutReveal = ({ 
  children, 
  splitBy = "words", 
  staggerDuration = 0.1, 
  staggerFrom = "first", 
  reverse = false, 
  transition = { type: "spring", stiffness: 200, damping: 20 }
}: VerticalCutRevealProps) => {
  const text = typeof children === "string" ? children : "";
  const words = text.split(" ");
  
  // Simple implementation using framer motion to reveal text vertically
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: staggerDuration, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: transition,
    },
    hidden: {
      opacity: 0,
      y: 20, // Slide up effect
    },
  };

  return (
    <motion.span
      style={{ display: "inline-block", overflow: "hidden" }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={{ display: "inline-block", marginRight: "5px" }}
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};
