"use client";

import { motion } from "framer-motion";
import { Terminal, Cpu, Zap } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6 } 
  }
};

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           className="glass-card p-10 rounded-3xl border border-white/5 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-md"
        >
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
               <motion.div variants={fadeIn} className="flex items-center gap-2 text-primary font-mono text-sm tracking-widest uppercase mb-4">
                  <Cpu className="w-4 h-4" />
                  <span>Identity</span>
               </motion.div>
               
               <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-6">
                 About Me
               </motion.h2>
               
                 I am a Full Stack and AI-focused developer currently working as an AI Application Development Intern at Nadimpalli Informatics LLP. 
                 I build real-world, production-ready systems that combine web technologies, AI models, and scalable architectures. 
                 My work spans full-stack development, intelligent automation, and system design, with a strong focus on impact, reliability, and continuous learning.

               
               <motion.div variants={fadeIn} className="flex gap-4 text-sm font-medium text-foreground/80">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-primary" /> Systems Thinking
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-yellow-500" /> Real-world Execution
                  </div>
               </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
