"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { SkillCard } from "@/components/ui/skill-card";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowRight,
  Github,
  Mail,
  Linkedin,
  Twitter,
  ExternalLink,
  Code2,
  Database,
  Layout,
  Terminal,
  MoveRight,
  PhoneCall,
  Zap,
  Rocket,
  Brain,
  Globe,
  Cpu,
  Monitor,
  Server,
  Cloud,
  Settings,
  Wind,
  Smartphone,
  Square,
  Lock,
  ShieldCheck,
  BrainCircuit,
  Camera,
  Bot,
  Container,
  GitMerge,
  TrendingUp,
  RefreshCcw,
  Bug,
  Code,
  Send,
  Atom,
  ScanFace,
  Settings2,
} from "lucide-react";
import { NeonOrbs } from "@/components/NeonOrbs";

// SVG Logos
const TypeScriptIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 256 256" className={className} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
    <path d="M20 0h216c11.046 0 20 8.954 20 20v216c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0Z" fill="#3178C6"/>
    <path d="M150.518 200.475v27.62c4.492 2.302 9.805 4.028 15.938 5.179 6.133 1.151 12.597 1.726 19.393 1.726 6.622 0 12.914-.633 18.874-1.899 5.96-1.266 11.187-3.352 15.678-6.257 4.492-2.906 8.048-6.704 10.669-11.394 2.62-4.689 3.93-10.486 3.93-17.391 0-5.006-.749-9.394-2.246-13.163a30.748 30.748 0 0 0-6.479-10.055c-2.821-2.935-6.205-5.567-10.149-7.898-3.945-2.33-8.394-4.531-13.347-6.602-3.628-1.497-6.881-2.949-9.761-4.359-2.879-1.41-5.327-2.848-7.342-4.316-2.016-1.467-3.571-3.021-4.665-4.661-1.094-1.64-1.641-3.495-1.641-5.567 0-1.899.489-3.61 1.468-5.135s2.362-2.834 4.147-3.927c1.785-1.094 3.973-1.942 6.565-2.547 2.591-.604 5.471-.906 8.638-.906 2.304 0 4.737.173 7.299.518 2.563.345 5.14.877 7.732 1.597a53.669 53.669 0 0 1 7.558 2.719 41.7 41.7 0 0 1 6.781 3.797v-25.807c-4.204-1.611-8.797-2.805-13.778-3.582-4.981-.777-10.697-1.165-17.147-1.165-6.565 0-12.784.705-18.658 2.115-5.874 1.409-11.043 3.61-15.506 6.602-4.463 2.993-7.99 6.805-10.582 11.437-2.591 4.632-3.887 10.17-3.887 16.615 0 8.228 2.375 15.248 7.127 21.06 4.751 5.811 11.963 10.731 21.638 14.759a291.458 291.458 0 0 1 10.625 4.575c3.283 1.496 6.119 3.049 8.509 4.66 2.39 1.611 4.276 3.366 5.658 5.265 1.382 1.899 2.073 4.057 2.073 6.474a9.901 9.901 0 0 1-1.296 4.963c-.863 1.524-2.174 2.848-3.93 3.97-1.756 1.122-3.945 1.999-6.565 2.632-2.62.633-5.687.95-9.2.95-5.989 0-11.92-1.05-17.794-3.151-5.875-2.1-11.317-5.25-16.327-9.451Zm-46.036-68.733H140V109H41v22.742h35.345V233h28.137V131.742Z" fill="#FFF"/>
  </svg>
);

const PythonIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 256 256" className={className} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
    <path d="M127.154 0C110.125 0 102.39 0 88.086 0c-25.5 0-47.53 17.53-47.53 43.1v23.47h47.53V101.4h64.71V43.1C152.8 17.53 130.77 0 105.27 0Zm-41.56 15.8c4.32 0 7.82 3.5 7.82 7.82 0 4.32-3.5 7.82-7.82 7.82-4.32 0-7.82-3.5-7.82-7.82 0-4.32 3.5-7.82 7.82-7.82Zm41.56 101.4c-25.5 0-47.53 17.53-47.53 43.1v23.47h47.53v34.93c0 25.57 22.03 43.1 47.53 43.1h21.94c25.5 0 47.53-17.53 47.53-43.1v-23.47H198.8v-34.93c0-25.57-22.03-43.1-47.53-43.1H127.15Zm41.56 124.4c4.32 0 7.82 3.5 7.82 7.82 0 4.32-3.5 7.82-7.82 7.82-4.32 0-7.82-3.5-7.82-7.82 0-4.32 3.5-7.82 7.82-7.82Z" fill="#3776AB"/>
  </svg>
);

const DockerIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg" fill="#008fe2">
    <path d="M13.983 11.078h2.119c.695 0 1.259.564 1.259 1.259 0 .694-.564 1.259-1.259 1.259h-2.119c-.695 0-1.259-.564-1.259-1.259 0-.695.564-1.259 1.259-1.259zm-4.417 1.259c0 .694.564 1.259 1.259 1.259h2.118c.695 0 1.259-.564 1.259-1.259 0-.695-.564-1.259-1.259-1.259h-2.118c-.695 0-1.259.564-1.259 1.259zm-4.417 0c0 .694.564 1.259 1.259 1.259h2.119c.695 0 1.259-.564 1.259-1.259 0-.695-.564-1.259-1.259-1.259h-2.119c-.695 0-1.259.564-1.259 1.259zm0-4.417h2.119c.695 0 1.259.564 1.259 1.259 0 .695-.564 1.259-1.259 1.259h-2.119c-.695 0-1.259-.564-1.259-1.259 0-.695.564-1.259 1.259-1.259zm4.417 0h2.118c.695 0 1.259.564 1.259 1.259 0 .695-.564 1.259-1.259 1.259h-2.118c-.695 0-1.259-.564-1.259-1.259 0-.695.564-1.259 1.259-1.259zm0-4.417h2.118c.695 0 1.259.564 1.259 1.259 0 .695-.564 1.259-1.259 1.259h-2.118c-.695 0-1.259-.564-1.259-1.259 0-.695.564-1.259 1.259-1.259zm4.417 4.417h2.119c.695 0 1.259.564 1.259 1.259 0 .695-.564 1.259-1.259 1.259h-2.119c-.695 0-1.259-.564-1.259-1.259 0-.695.564-1.259 1.259-1.259zm0-4.417h2.119c.695 0 1.259.564 1.259 1.259 0 .695-.564 1.259-1.259 1.259h-2.119c-.695 0-1.259-.564-1.259-1.259 0-.695.564-1.259 1.259-1.259zm4.417 4.417h2.12c.695 0 1.259.564 1.259 1.259 0 .695-.564 1.259-1.259 1.259h-2.12c-.695 0-1.259-.564-1.259-1.259 0-.695.564-1.259 1.259-1.259zM23.935 12.103c.118.575.185 1.173.185 1.787 0 5.484-4.445 9.93-9.93 9.93-5.38 0-9.761-4.288-9.921-9.63l-.009-.3h2.378c.22 3.016 2.73 5.402 5.808 5.402 3.207 0 5.807-2.6 5.807-5.807 0-3.207-2.6-5.807-5.807-5.807H0v.482c0-.528.016-1.054.048-1.579.131-2.138.653-4.14 1.488-5.957l.076-.164C3.064 1.442 5.484 0 8.163 0c2.812 0 5.341 1.597 6.467 4.148l.058.136c.64 1.493 1.012 3.125 1.056 4.818.591.077 1.16.146 1.714.208 3.513.4 5.923 3.396 6.477 6.793z"/>
  </svg>
);

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const skillCategories = [
  {
    title: "Core Development",
    icon: <Terminal className="w-5 h-5 text-blue-500" />,
    skills: [
      { name: "JavaScript (ES6+)", icon: <Code2 className="w-5 h-5" /> },
      { name: "TypeScript", icon: <TypeScriptIcon className="w-5 h-5" /> },
      { name: "Python", icon: <PythonIcon className="w-5 h-5" /> },
      { name: "REST APIs", icon: <Globe className="w-5 h-5" /> },
      { name: "System Design Basics", icon: <Cpu className="w-5 h-5" /> },
    ],
  },
  {
    title: "Frontend",
    icon: <Layout className="w-5 h-5 text-purple-500" />,
    skills: [
      { name: "React / Next.js", icon: <Atom className="w-5 h-5" /> },
      { name: "HTML5 & CSS3", icon: <Monitor className="w-5 h-5" /> },
      { name: "Tailwind CSS", icon: <Wind className="w-5 h-5" /> },
      { name: "Shadcn UI", icon: <Square className="w-5 h-5" /> },
      { name: "Responsive Design", icon: <Smartphone className="w-5 h-5" /> },
    ],
  },
  {
    title: "Backend",
    icon: <Server className="w-5 h-5 text-green-500" />,
    skills: [
      { name: "Node.js / Express", icon: <Server className="w-5 h-5" /> },
      { name: "FastAPI", icon: <Zap className="w-5 h-5" /> },
      { name: "Authentication", icon: <Lock className="w-5 h-5" /> },
      { name: "API Security", icon: <ShieldCheck className="w-5 h-5" /> },
      { name: "Database Design", icon: <Database className="w-5 h-5" /> },
    ],
  },
  {
    title: "AI / ML",
    icon: <Brain className="w-5 h-5 text-orange-500" />,
    skills: [
      { name: "Machine Learning", icon: <BrainCircuit className="w-5 h-5" /> },
      { name: "OpenCV", icon: <Camera className="w-5 h-5" /> },
      { name: "MediaPipe", icon: <ScanFace className="w-5 h-5" /> },
      { name: "Model Training", icon: <Cpu className="w-5 h-5" /> },
      { name: "AI Integration", icon: <Bot className="w-5 h-5" /> },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="w-5 h-5 text-cyan-500" />,
    skills: [
      { name: "AWS (EC2, S3)", icon: <Cloud className="w-5 h-5" /> },
      { name: "Docker", icon: <DockerIcon className="w-5 h-5" /> },
      { name: "Linux Server", icon: <Terminal className="w-5 h-5" /> },
      { name: "Nginx", icon: <Globe className="w-5 h-5" /> },
      { name: "CI/CD Basics", icon: <GitMerge className="w-5 h-5" /> },
    ],
  },
  {
    title: "Databases",
    icon: <Database className="w-5 h-5 text-yellow-500" />,
    skills: [
      { name: "PostgreSQL", icon: <Database className="w-5 h-5" /> },
      { name: "MongoDB", icon: <Database className="w-5 h-5" /> },
      { name: "Redis", icon: <Zap className="w-5 h-5" /> },
      { name: "Query Optimization", icon: <TrendingUp className="w-5 h-5" /> },
    ],
  },
  {
    title: "Tools & Workflow",
    icon: <Settings2 className="w-5 h-5 text-rose-500" />,
    skills: [
      { name: "Git & GitHub", icon: <Github className="w-5 h-5" /> },
      { name: "VS Code", icon: <Code className="w-5 h-5" /> },
      { name: "Postman", icon: <Send className="w-5 h-5" /> },
      { name: "Agile Workflow", icon: <RefreshCcw className="w-5 h-5" /> },
      { name: "Debugging", icon: <Bug className="w-5 h-5" /> },
    ],
  },
];

export default function LandingPage() {
  const [scrollY, setScrollY] = useState(0);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["Web", "AI", "Cloud", "Education", "Automation", "Startups", "Real People"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const aboutRef = useRef<HTMLDivElement>(null);

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.3,
        duration: 0.7,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: 40,
      opacity: 0,
    },
  };

  const textVariants = {
    visible: (i: number) => ({
      filter: "blur(0px)",
      opacity: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      opacity: 0,
    },
  };

  return (
    <div className="min-h-screen text-foreground selection:bg-primary/10 selection:text-primary relative">
      {/* Background */}
      <NeonOrbs />

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrollY > 50
            ? "bg-background/80 backdrop-blur-md border-b shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight">
            CHK
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {item}
              </button>
            ))}
            <Button onClick={() => scrollToSection("contact")}>
              Hire Me
            </Button>
          </div>
        </div>
      </motion.nav>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center pt-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl space-y-8 text-left">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="space-y-6"
              >
                
                <motion.h1
                  variants={fadeIn}
                  className="text-5xl md:text-7xl font-bold tracking-tight leading-tight"
                >
                  I Build Intelligent Systems for a Changing
                  <span className="relative flex w-full overflow-hidden text-left h-[1.2em] md:h-[1.1em] text-primary">
                    {titles.map((title: string, index: number) => (
                      <motion.span
                        key={index}
                        className="absolute font-semibold"
                        initial={{ opacity: 0, y: "100%" }}
                        transition={{ type: "spring", stiffness: 50 }}
                        animate={
                          titleNumber === index
                            ? {
                                y: 0,
                                opacity: 1,
                              }
                            : {
                                y: titleNumber > index ? "-100%" : "100%",
                                opacity: 0,
                              }
                        }
                      >
                        {title}
                      </motion.span>
                    ))}
                  </span>
                </motion.h1>

                <motion.p
                   variants={fadeIn}
                   className="text-xl text-muted-foreground max-w-2xl"
                >
                  Hi, I'm Chepuri Hari Kiran. I craft scalable web applications and 
                  intuitive user interfaces using modern technologies.
                </motion.p>

                <motion.div
                  variants={fadeIn}
                  className="flex items-center gap-4 pt-4"
                >
                  <Button size="lg" onClick={() => scrollToSection("projects")} className="gap-2">
                    View Work <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="lg" asChild className="gap-2">
                    <a href="https://github.com/harikiran138" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" /> GitHub
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <motion.div
            style={{ opacity }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full p-1">
              <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce mx-auto" />
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 relative overflow-hidden">
          {/* Decorative Background Accents */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] -z-10" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column: Stylized Title & Visual */}
              <div className="lg:col-span-4 space-y-8">
                <div className="relative inline-block">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="absolute -bottom-2 left-0 h-3 bg-primary/20 -z-10"
                  />
                  <motion.h2 
                    variants={fadeIn} 
                    className="text-5xl md:text-6xl font-bold tracking-tighter"
                  >
                    The Story <br />
                    <span className="text-primary italic">So Far</span>
                  </motion.h2>
                </div>

                <motion.div 
                  variants={fadeIn}
                  className="relative group hidden lg:block"
                >
                  <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-2xl group-hover:bg-primary/30 transition-all duration-500 -z-10" />
                  <Image 
                    src="/Users/chepuriharikiran/.gemini/antigravity/brain/79ff0764-7f19-45fe-bf50-b9f833df4b88/about_me_bg_accent_1766541031573.png"
                    alt="Abstract Tech Accent"
                    width={400}
                    height={400}
                    className="rounded-3xl border border-white/10 shadow-2xl transition-transform duration-700 group-hover:scale-105 group-hover:rotate-2 opacity-60 mix-blend-lighten"
                  />
                </motion.div>
              </div>

              {/* Right Column: Content & CTA */}
              <div className="lg:col-span-8 space-y-12">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={stagger}
                  className="space-y-12"
                >
                  <div className="space-y-8 relative">
                    {/* Floating Quote-like indicator */}
                    <div className="absolute -left-8 top-0 text-7xl font-serif text-primary/10 select-none">“</div>
                    
                    <div className="space-y-6">
                      <div className="relative">
                        <TextGenerateEffect 
                          words="I’m a full-stack and AI-focused developer passionate about building intelligent systems that solve real-world problems. Working across web, AI, and cloud technologies, I turn ideas into scalable, reliable products—from smart classroom platforms like ClassNova to AI-powered academic and automation systems."
                          className="text-justify font-medium text-lg md:text-2xl leading-relaxed"
                        />
                      </div>
                      
                      <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <TextGenerateEffect 
                          words="I enjoy breaking down complex challenges, designing clean architectures, and continuously improving systems as they evolve. Driven by impact and constant learning, my goal is simple: build technology people can actually use and grow with—systems that adapt, scale, and stay relevant."
                          className="text-justify font-normal text-muted-foreground italic leading-relaxed"
                        />
                      </div>
                    </div>
                  </div>

                  <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center gap-6 pt-4">
                    <Button 
                      size="lg" 
                      onClick={() => scrollToSection("contact")}
                      className="rounded-full px-12 h-16 text-lg font-semibold shadow-2xl shadow-primary/20 transition-all hover:scale-110 active:scale-95 gap-3 group bg-primary hover:bg-primary/90"
                    >
                      <Brain className="w-6 h-6 group-hover:animate-pulse" />
                      Get In Touch
                    </Button>
                    
                    <div className="flex gap-4">
                      <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest flex items-center gap-2">
                        <span className="w-8 h-[1px] bg-muted-foreground/30" />
                        Available for Projects
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </div>

            </div>
          </div>
        </section>

        <section id="skills" className="py-24">
          <div className="container mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="max-w-6xl mx-auto"
            >
              <div className="text-center mb-16">
                <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-bold mb-4">
                  Technical Expertise
                </motion.h2>
                <motion.p variants={fadeIn} className="text-muted-foreground text-lg">
                  A comprehensive overview of my technical stack and professional capabilities.
                </motion.p>
              </div>
              
              <div className="relative mt-8">
                {/* Horizontal Marquee Container */}
                <div className="flex overflow-hidden py-10">
                  <motion.div
                    className="flex gap-6 whitespace-nowrap"
                    animate={{
                      x: [0, "-50%"],
                    }}
                    transition={{
                      x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 50, // Slower glide for better readability
                        ease: "linear",
                      },
                    }}
                    style={{ display: "flex", width: "fit-content" }}
                  >
                    {/* First set of skills */}
                    {skillCategories.flatMap(cat => cat.skills.map(s => ({ ...s, cat: cat.title }))).map((skill, i) => (
                      <SkillCard
                        key={`skill-1-${i}`}
                        icon={skill.icon}
                        title={skill.cat}
                        description={skill.name}
                        className="min-w-[240px] shadow-lg"
                      />
                    ))}
                    {/* Duplicate set for seamless loop */}
                    {skillCategories.flatMap(cat => cat.skills.map(s => ({ ...s, cat: cat.title }))).map((skill, i) => (
                      <SkillCard
                        key={`skill-2-${i}`}
                        icon={skill.icon}
                        title={skill.cat}
                        description={skill.name}
                        className="min-w-[240px] shadow-lg"
                      />
                    ))}
                  </motion.div>
                </div>
                
                {/* Gradient Masks for fade effect */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
              </div>

            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 bg-secondary/10 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="max-w-6xl mx-auto"
            >
               <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-12 text-center">
                Featured Projects
              </motion.h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((item) => (
                  <motion.div
                    key={item}
                    variants={fadeIn}
                    className="group relative bg-background/50 backdrop-blur-md rounded-2xl overflow-hidden border hover:border-primary/50 transition-colors"
                  >
                    <div className="aspect-video bg-muted/50 relative overflow-hidden">
                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                            <div className="flex gap-4">
                                <Button size="sm" variant="secondary" className="h-8">Demo</Button>
                                <Button size="sm" variant="secondary" className="h-8">Code</Button>
                            </div>
                       </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">Project Title {item}</h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        A brief description of the project and the technologies used to build it.
                        Solves a real-world problem.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {["Next.js", "Tailwind", "Postgres"].map((tag) => (
                          <span key={tag} className="text-xs px-2 py-1 bg-secondary rounded-md text-secondary-foreground font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24">
          <div className="container mx-auto px-6">
             <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="max-w-2xl mx-auto text-center"
            >
              <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-4">
                Let's work together
              </motion.h2>
              <motion.p variants={fadeIn} className="text-muted-foreground mb-12">
                Have a project in mind or just want to say hi? I'd love to hear from you.
              </motion.p>
              
              <motion.form variants={fadeIn} className="space-y-6 text-left">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <Input id="name" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                     <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                   <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <Textarea id="message" placeholder="Tell me about your project..." className="min-h-[150px]" />
                </div>
                <Button className="w-full" size="lg">Send Message</Button>
              </motion.form>

              <motion.div variants={fadeIn} className="mt-16 flex justify-center gap-8">
                 <a href="#" className="p-2 rounded-full hover:bg-secondary transition-colors">
                     <Github className="w-6 h-6" />
                 </a>
                 <a href="#" className="p-2 rounded-full hover:bg-secondary transition-colors">
                     <Linkedin className="w-6 h-6" />
                 </a>
                 <a href="mailto:hello@example.com" className="p-2 rounded-full hover:bg-secondary transition-colors">
                     <Mail className="w-6 h-6" />
                 </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t">
          <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Chepuri Hari Kiran. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
