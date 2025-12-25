"use client";

import { motion } from "framer-motion";

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
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           className="p-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl shadow-black/50"
        >
          <div className="flex flex-col gap-6">
             <div className="text-center space-y-2">
               <motion.span variants={fadeIn} className="text-primary font-mono text-sm tracking-widest uppercase block">
                  Identity
               </motion.span>
               
               <motion.h2 variants={fadeIn} className="text-3xl font-bold">
                 About Me
               </motion.h2>
             </div>
             
             <motion.p variants={fadeIn} className="text-lg text-muted-foreground leading-relaxed max-w-none text-justify">
               I am a full-stack and AI-focused developer who builds real-world, production-ready systems that go beyond demos. I work across web, AI, and cloud technologies to design scalable platforms, intelligent automation, and clean system architectures from idea to deployment. Alongside hands-on development, I bring a strong system-thinking mindset, leadership experience, and a passion for solving practical problems with technology. My focus is on creating reliable, impactful solutions that people can actually use, grow with, and trust as requirements evolve.
             </motion.p>
             
             <motion.div variants={fadeIn} className="flex flex-wrap justify-center gap-3 pt-4 text-sm font-medium text-foreground/90">
                {["Systems Thinking", "Real-world Execution", "Scalable Architectures"].map((item) => (
                  <span key={item} className="px-4 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm shadow-sm hover:bg-white/20 transition-colors">
                    {item}
                  </span>
                ))}
             </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
