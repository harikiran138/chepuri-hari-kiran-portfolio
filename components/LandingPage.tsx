"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import About from "@/components/About";
// import WebGPUScene from "@/components/WebGPUScene"; // Removed as per request
import Achievements from "@/components/Achievements";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,

  Github,
  Mail,
  Linkedin,
  Globe,
} from "lucide-react";
import { NeonOrbs } from "@/components/NeonOrbs";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";



export default function LandingPage() {
  const [scrollY, setScrollY] = useState(0);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["Systems", "AI Agents", "Platforms", "Solutions"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitleNumber((prev) => (prev === titles.length - 1 ? 0 : prev + 1));
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" as const } 
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  return (
    <div className="min-h-screen text-foreground selection:bg-primary/10 selection:text-primary relative font-sans">
      <NeonOrbs />

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrollY > 50 ? "bg-background/80 backdrop-blur-md border-b shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight font-mono">
            CHK_
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {["About", "Projects", "Experience", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-wider"
              >
                {item}
              </button>
            ))}
            <Button onClick={() => scrollToSection("contact")} size="sm">
              Hire Me
            </Button>
          </div>
        </div>
      </motion.nav>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center pt-20">
          <div className="container mx-auto px-6">
            <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] text-center">
              <div className="max-w-4xl space-y-8 z-20 relative">
                <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-6">
                  {/* System Online Removed */}
                  
                  <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
                    Building AI-powered <br />
                    <span className="relative flex justify-center w-full overflow-hidden h-[1.2em] md:h-[1.1em] text-primary">
                      {titles.map((title, index) => (
                        <motion.span
                          key={index}
                          className="absolute"
                          initial={{ opacity: 0, y: "100%" }}
                          animate={titleNumber === index ? { y: 0, opacity: 1 } : { y: titleNumber > index ? "-100%" : "100%", opacity: 0 }}
                          transition={{ type: "spring", stiffness: 50 }}
                        >
                          {title}
                        </motion.span>
                      ))}
                    </span>
                    that scale beyond demos.
                  </motion.h1>

                  <motion.p variants={fadeIn} className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    Full-stack & AI developer crafting real-world products, smart platforms, and intelligent systems.
                  </motion.p>

                  <motion.div variants={fadeIn} className="flex items-center justify-center gap-4 pt-4">
                    <Button size="lg" onClick={() => scrollToSection("projects")} className="gap-2 px-8">
                      View Projects <ArrowRight className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="lg" asChild className="gap-2 px-8">
                      <a href="/resume.pdf" download>
                        Download Resume
                      </a>
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
          
          <motion.div style={{ opacity }} className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full p-1">
              <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce mx-auto" />
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <About />

        {/* Skills Grid */}
        <section id="skills" className="py-24 bg-secondary/5">
          <div className="container mx-auto px-6 max-w-6xl">
             <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <h2 className="text-3xl font-bold mb-12 text-center">Tech Stack</h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeIn}
                    whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.2 } }}
                    className="flex flex-col items-center justify-center p-6 bg-background/50 backdrop-blur-sm border border-border rounded-xl hover:border-primary/50 transition-colors group"
                  >
                    <div className="p-3 bg-secondary rounded-lg mb-3 text-primary group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <span className="font-medium text-sm text-center">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24">
          <div className="container mx-auto px-6 max-w-7xl">
            <motion.div
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               variants={staggerContainer}
             >
              <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-bold mb-16 text-center">
                Featured Projects
              </motion.h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeIn}
                    whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
                    className="group flex flex-col h-full bg-card border border-border rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300"
                  >
                    <div className="p-8 flex flex-col flex-grow">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                        <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                      
                      <div className="mt-auto pt-6 space-y-6">
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((t) => (
                            <span key={t} className="text-[10px] uppercase tracking-wider px-2 py-1 bg-secondary rounded text-secondary-foreground font-semibold">
                              {t}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                           <a href={project.links.code} className="text-sm font-medium flex items-center gap-2 hover:text-primary transition-colors">
                             <Github className="w-4 h-4" /> Code
                           </a>
                           {project.links.demo !== "#" && (
                              <a href={project.links.demo} className="text-sm font-medium flex items-center gap-2 hover:text-primary transition-colors">
                                <Globe className="w-4 h-4" /> Live Demo
                              </a>
                           )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience & Achievements */}
        <Experience />
        <Achievements />
        <Certifications />

        {/* Contact Section */}
        <section id="contact" className="py-32 relative overflow-hidden">
           <div className="absolute inset-0 bg-primary/5 -skew-y-3 transform origin-bottom-right z-0" />
           <div className="container mx-auto px-6 relative z-10">
             <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="max-w-2xl mx-auto text-center"
            >
              <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Collaborate?
              </motion.h2>
              <motion.p variants={fadeIn} className="text-xl text-muted-foreground mb-12">
                I&apos;m currently looking for internships and full-time opportunities.
                Let&apos;s build something scalable together.
              </motion.p>
              
              <motion.div variants={fadeIn} className="flex flex-col md:flex-row gap-4 justify-center items-center">
                 <Button size="lg" className="w-full md:w-auto px-8 py-6 text-lg rounded-full" asChild>
                   <a href="mailto:contact@chepuriharikiran.com">
                     <Mail className="w-5 h-5 mr-2" />
                     Send me an email
                   </a>
                 </Button>
                 <div className="flex gap-4">
                    <Button variant="outline" size="icon" className="w-12 h-12 rounded-full" asChild>
                       <a href="https://github.com/harikiran138" target="_blank" rel="noopener noreferrer">
                         <Github className="w-5 h-5" />
                       </a>
                    </Button>
                    <Button variant="outline" size="icon" className="w-12 h-12 rounded-full" asChild>
                       <a href="https://www.linkedin.com/in/chepuri-hari-kiran" target="_blank" rel="noopener noreferrer">
                         <Linkedin className="w-5 h-5" />
                       </a>
                    </Button>
                 </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t bg-background/50 backdrop-blur-sm">
          <div className="container mx-auto px-6 text-center">
            <p className="text-sm text-muted-foreground">
              Built with Next.js, Tailwind, and Framer Motion by <span className="text-foreground font-medium">Chepuri Hari Kiran</span>.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
