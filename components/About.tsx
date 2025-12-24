"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  Palette, 
  Terminal, 
  Cpu, 
  Globe, 
  Zap, 
  User, 
  Heart, 
  Lightbulb, 
  Rocket, 
  ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { MorphingText } from "@/components/ui/morphing-text";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6 } 
  }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           variants={stagger}
           className="max-w-7xl mx-auto"
        >



          {/* 1. HERO INTRODUCTION */}
          <motion.div variants={fadeIn} className="text-center mb-16 relative mt-32">
            <h2 className="text-sm font-semibold text-primary tracking-widest uppercase mb-8">About Me</h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-8">
              I turn complex problems into elegant, user-friendly digital experiences. I build modern web applications that don't just work—they engage, inspire, and deliver real value.
            </p>
          </motion.div>

          {/* 2. PROFESSIONAL IDENTITY & EXPERTISE */}
          <motion.div variants={fadeIn} className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="glass-card p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-primary/20 transition-colors">
              <div className="flex items-center gap-3 mb-6">
                 <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Terminal className="w-6 h-6" />
                 </div>
                 <h4 className="text-2xl font-semibold">The Specialist</h4>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I specialize in the frontend ecosystem, crafting responsive and high-performance interfaces using <strong>React, Next.js, and TypeScript</strong>. My expertise extends to styling with <strong>Tailwind CSS</strong> and creating immersive interactions with properties like Glassmorphism and custom animations.
              </p>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"].map((skill) => (
                  <span key={skill} className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-primary/20 transition-colors">
               <div className="flex items-center gap-3 mb-6">
                 <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Rocket className="w-6 h-6" key="rocket" />
                 </div>
                 <h4 className="text-2xl font-semibold">The Builder</h4>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I build complete web applications for colleges and AI integrations. My focus is always on writing clean, maintainable code that translates into seamless user experiences.
              </p>
               <div className="flex flex-wrap gap-2">
                {["Performance", "Scalability", "Clean Code", "UX/UI"].map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 3. PASSION & VALUES + 4. APPROACH */}
          <motion.div variants={fadeIn} className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="p-6 rounded-xl bg-card border hover:shadow-lg transition-all md:col-span-1">
              <Lightbulb className="w-8 h-8 text-yellow-500 mb-4" />
              <h5 className="text-lg font-semibold mb-2">Passion</h5>
              <p className="text-sm text-muted-foreground">
                Driven by the belief that technology should be accessible, beautiful, and functional. I value continuous learning and creative problem-solving.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-card border hover:shadow-lg transition-all md:col-span-1">
              <Zap className="w-8 h-8 text-blue-500 mb-4" />
              <h5 className="text-lg font-semibold mb-2">Process</h5>
              <p className="text-sm text-muted-foreground">
                User-centric and iterative. I start by understanding the problem, then sketch solutions that balance aesthetics with functionality and performance.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-card border hover:shadow-lg transition-all md:col-span-1">
              <Heart className="w-8 h-8 text-red-500 mb-4" />
              <h5 className="text-lg font-semibold mb-2">Personal</h5>
              <p className="text-sm text-muted-foreground">
                When I'm not coding, I'm exploring open-source, debugging life, or brainstorming the next big app idea. A curious tinkerer at heart.
              </p>
            </div>
          </motion.div>

          {/* 6. CALL TO ACTION */}
          <motion.div variants={fadeIn} className="text-center p-12 rounded-3xl bg-secondary/30 border border-secondary backdrop-blur-md">
            <h4 className="text-3xl font-bold mb-4">Let's Build Something Amazing</h4>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Whether you have a project in mind, need a frontend expert, or just want to chat about the latest in web tech, I'd love to hear from you.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="rounded-full px-8" asChild>
                <a href="#contact">
                  Get In Touch <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
