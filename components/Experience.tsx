"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  type: "internship" | "community";
}

const experiences: ExperienceItem[] = [
  {
    company: "Nadimpalli Informatics LLP",
    role: "Intern – AI Application Design & Development",
    period: "Oct 2025 - Present",
    location: "Visakhapatnam, India",
    description: [
      "Designed and developed AI-driven applications and prototypes.",
      "Worked on data preprocessing, model selection, training, evaluation, and deployment.",
      "Collaborated with software teams, faculty mentors, and project leads.",
      "Built intelligent automation solutions for real use cases.",
      "Created technical documentation, workflow diagrams, and progress reports.",
      "Followed professional standards, confidentiality, and data governance policies."
    ],
    type: "internship"
  },
  {
    company: "Turtil",
    role: "Summer Intern",
    period: "May 2025 - Aug 2025",
    location: "Visakhapatnam, India",
    description: [
      "Contributed to company projects and tasks in alignment with turtil’s objectives.",
      "Gained practical experience with real-world business operations and strategic planning.",
      "Maintained strict confidentiality and adhered to professional conduct policies."
    ],
    type: "internship"
  },
  {
    company: "GeeksforGeeks",
    role: "Campus Mantri (Official Representative)",
    period: "May 2025 - Present",
    location: "Visakhapatnam, India",
    description: [
      "Promoting GeeksforGeeks initiatives and organizing tech events at NSRIT.",
      "Acting as a liaison between the company and the student community.",
      "Fostering a tech-driven learning environment and increasing student engagement."
    ],
    type: "community"
  },
  {
    company: "Demy Software Solutions",
    role: "Intern",
    period: "Jun 2024 - Jul 2024",
    location: "Visakhapatnam, India",
    description: [
      "Gained hands-on experience in Artificial Intelligence, HTML5, and CSS.",
      "Collaborated on projects leveraging AI to advance efficacy.",
      "Reinforced technical foundation and problem-solving acumen through real-world challenges."
    ],
    type: "internship"
  }
];

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse position for magnetic effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  // Transform for parallax on the large number
  const numberX = useTransform(x, [-200, 200], [-20, 20]);
  const numberY = useTransform(y, [-200, 200], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    }
  };

  const goNext = () => setActiveIndex((prev) => (prev + 1) % experiences.length);
  const goPrev = () => setActiveIndex((prev) => (prev - 1 + experiences.length) % experiences.length);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(goNext, 5000); // 5 seconds interval
    return () => clearInterval(timer);
  }, [isPaused]);

  const current = experiences[activeIndex];

  return (
    <section id="experience" className="py-24 overflow-hidden relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div 
          ref={containerRef} 
          className="relative w-full" 
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          
          {/* Oversized index number - positioned to bleed off left edge */}
          <motion.div
            className="absolute -left-20 top-0 text-[20rem] md:text-[28rem] font-bold text-foreground/[0.03] select-none pointer-events-none leading-none tracking-tighter"
            style={{ x: numberX, y: numberY }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                {String(activeIndex + 1).padStart(2, "0")}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          {/* Main content - asymmetric layout */}
          <div className="relative flex flex-col md:flex-row gap-12 md:gap-0">
            {/* Left column - vertical text */}
            <div className="hidden md:flex flex-col items-center justify-start pt-12 pr-16 border-r border-border min-h-[400px]">
              <motion.span
                className="text-xs font-mono text-muted-foreground tracking-widest uppercase"
                style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Experience
              </motion.span>

              {/* Vertical progress line */}
              <div className="relative h-32 w-px bg-border mt-8">
                <motion.div
                  className="absolute top-0 left-0 w-full bg-foreground origin-top"
                  animate={{
                    height: `${((activeIndex + 1) / experiences.length) * 100}%`,
                  }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </div>

            {/* Center - main content */}
            <div className="flex-1 md:pl-16 py-0 md:py-12 relative z-10">
              {/* Company badge */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4 }}
                  className="mb-8"
                >
                  <span className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground border border-border rounded-full px-3 py-1 bg-background/50 backdrop-blur-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {current.company} — {current.type}
                  </span>
                </motion.div>
              </AnimatePresence>

              {/* Role with character reveal */}
              <div className="relative mb-8 min-h-[80px]">
                <AnimatePresence mode="wait">
                  <motion.h3
                    key={activeIndex}
                    className="text-3xl md:text-5xl font-light text-foreground leading-[1.15] tracking-tight"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    {current.role.split(" ").map((word, i) => (
                      <motion.span
                        key={i}
                        className="inline-block mr-[0.25em]"
                        variants={{
                          hidden: { opacity: 0, y: 20, rotateX: 90 },
                          visible: {
                            opacity: 1,
                            y: 0,
                            rotateX: 0,
                            transition: {
                              duration: 0.5,
                              delay: i * 0.05,
                              ease: [0.22, 1, 0.36, 1],
                            },
                          },
                          exit: {
                            opacity: 0,
                            y: -10,
                            transition: { duration: 0.2, delay: i * 0.02 },
                          },
                        }}
                      >
                        {word}
                      </motion.span>
                    ))}
                  </motion.h3>
                </AnimatePresence>
              </div>

               {/* Description bullets */}
               <div className="mb-12 min-h-[100px]">
                <AnimatePresence mode="wait">
                  <motion.ul
                    key={activeIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="space-y-2"
                  >
                    {current.description.map((desc, i) => (
                      <li key={i} className="text-sm md:text-base text-muted-foreground flex items-start gap-3">
                         <span className="mt-2 w-1 h-1 rounded-full bg-primary/40 shrink-0" />
                         <span>{desc}</span>
                      </li>
                    ))}
                  </motion.ul>
                </AnimatePresence>
               </div>

              {/* Period & Location row */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-0">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="flex items-center gap-4"
                  >
                    {/* Animated line before name */}
                    <motion.div
                      className="w-8 h-px bg-foreground hidden md:block"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      style={{ originX: 0 }}
                    />
                    <div>
                      <p className="text-base font-medium text-foreground">{current.period}</p>
                      <p className="text-sm text-muted-foreground">{current.location}</p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation */}
                <div className="flex items-center gap-4">
                  <motion.button
                    onClick={goPrev}
                    className="group relative w-12 h-12 rounded-full border border-border flex items-center justify-center overflow-hidden hover:border-primary/50 transition-colors"
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-primary/10"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    <ArrowLeft className="w-5 h-5 relative z-10 text-foreground" />
                  </motion.button>

                  <motion.button
                    onClick={goNext}
                    className="group relative w-12 h-12 rounded-full border border-border flex items-center justify-center overflow-hidden hover:border-primary/50 transition-colors"
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-primary/10"
                      initial={{ x: "100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    <ArrowRight className="w-5 h-5 relative z-10 text-foreground" />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom ticker - subtle repeating company names */}
          <div className="absolute -bottom-20 left-0 right-0 overflow-hidden opacity-[0.03] pointer-events-none select-none">
            <motion.div
              className="flex whitespace-nowrap text-6xl md:text-8xl font-bold tracking-tight"
              animate={{ x: [0, -1000] }}
              transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              {[...Array(6)].map((_, i) => (
                <span key={i} className="mx-8">
                  {experiences.map((t) => t.company).join(" • ")} •
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
