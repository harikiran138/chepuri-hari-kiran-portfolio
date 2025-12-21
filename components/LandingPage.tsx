"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Database,
  Layout,
  Terminal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
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

export default function LandingPage() {
  const [scrollY, setScrollY] = useState(0);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

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

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/10 selection:text-primary">
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
        <section className="relative min-h-screen flex items-center justify-center pt-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="space-y-6"
              >
                <motion.div variants={fadeIn}>
                  <span className="inline-block px-4 py-2 rounded-full bg-primary/5 text-primary text-sm font-medium mb-6">
                    Full Stack Developer
                  </span>
                </motion.div>
                
                <motion.h1
                  variants={fadeIn}
                  className="text-5xl md:text-7xl font-bold tracking-tight leading-tight"
                >
                  Building digital experiences with{" "}
                  <span className="text-primary italic">purpose</span> &{" "}
                  <span className="text-primary italic">precision</span>.
                </motion.h1>

                <motion.p
                   variants={fadeIn}
                   className="text-xl text-muted-foreground max-w-2xl mx-auto"
                >
                  Hi, I'm Chepuri Hari Kiran. I craft scalable web applications and 
                  intuitive user interfaces using modern technologies.
                </motion.p>

                <motion.div
                  variants={fadeIn}
                  className="flex items-center justify-center gap-4 pt-4"
                >
                  <Button size="lg" onClick={() => scrollToSection("projects")}>
                    View Work <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="https://github.com/harikiran138" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> GitHub
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
        <section id="about" className="py-24 bg-secondary/30">
          <div className="container mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="max-w-4xl mx-auto"
            >
              <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-12 text-center">
                About Me
              </motion.h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div variants={fadeIn} className="space-y-6 text-lg text-muted-foreground">
                  <p>
                    I am a passionate developer with a strong foundation in both frontend and backend technologies.
                    My journey in tech allows me to understand the full lifecycle of software development, 
                    from conception to deployment.
                  </p>
                  <p>
                    I focus on writing clean, maintainable code and solving complex problems with efficient solutions.
                    Whether it's building a responsive single-page app or designing a robust API, I'm always 
                    eager to learn and apply the latest best practices.
                  </p>
                </motion.div>
                 <motion.div variants={fadeIn} className="relative aspect-square rounded-2xl overflow-hidden bg-muted">
                    {/* Placeholder for profile image - using CSS pattern for now */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 flex items-center justify-center text-primary/40">
                         <Code2 size={120} />
                    </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24">
          <div className="container mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="max-w-5xl mx-auto"
            >
              <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-12 text-center">
                Technical Skills
              </motion.h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                 {[
                  { icon: Layout, label: "Frontend", skills: ["React", "Next.js", "Tailwind CSS", "TypeScript"] },
                  { icon: Database, label: "Backend", skills: ["Node.js", "Express", "PostgreSQL", "Prisma"] },
                  { icon: Terminal, label: "Tools", skills: ["Git", "Docker", "VS Code", "Vercel"] },
                  { icon: Code2, label: "Languages", skills: ["JavaScript", "TypeScript", "Python", "SQL"] },
                ].map((category, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn}
                    className="p-6 rounded-2xl bg-card border hover:shadow-lg transition-shadow"
                  >
                    <category.icon className="w-10 h-10 text-primary mb-4" />
                    <h3 className="font-semibold text-xl mb-3">{category.label}</h3>
                    <ul className="space-y-2">
                      {category.skills.map((skill) => (
                        <li key={skill} className="text-muted-foreground text-sm">
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 bg-secondary/30">
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
                    className="group relative bg-background rounded-2xl overflow-hidden border hover:border-primary/50 transition-colors"
                  >
                    <div className="aspect-video bg-muted relative overflow-hidden">
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
