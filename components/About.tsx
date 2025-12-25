"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Terminal, Cpu, Zap, Code2, Globe, ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const liquidVariants = {
  animate: {
    pathLength: [0, 1],
    pathOffset: [0, 1],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);

  return (
    <section id="about" className="py-32 relative overflow-hidden" ref={containerRef}>
      {/* Liquid Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative"
          >
            {/* Liquid Glass Card */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
            
            <div className="relative p-8 md:p-12 rounded-[2rem] bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="grid md:grid-cols-[1.5fr,1fr] gap-12 items-center">
                
                {/* Content Side */}
                <div className="space-y-8">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-3 text-purple-400 font-mono text-sm tracking-widest uppercase"
                  >
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
                    </span>
                    Identity & Mission
                  </motion.div>

                  <div className="space-y-6">
                    <motion.h2 
                      className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/60"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      Building the future with <br />
                      <span className="text-purple-400 italic font-serif">Intelligent Code</span>
                    </motion.h2>

                    <motion.p 
                      className="text-lg text-muted-foreground leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      I am a Full Stack and AI-focused developer currently working as an <span className="text-white font-medium">AI Application Development Intern at Nadimpalli Informatics LLP</span>. 
                      I build real-world, production-ready systems that combine web technologies, AI models, and scalable architectures.
                    </motion.p>

                    <motion.p 
                       className="text-lg text-muted-foreground leading-relaxed"
                       initial={{ opacity: 0, y: 20 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       transition={{ delay: 0.5 }}
                    >
                      My work spans <span className="text-white">full-stack development, intelligent automation, and system design</span>, with a strong focus on impact, reliability, and continuous learning.
                    </motion.p>
                  </div>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-wrap gap-4 pt-4"
                  >
                    <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 flex items-center gap-2 text-sm hover:bg-white/10 transition-colors">
                      <Terminal className="w-4 h-4 text-purple-400" />
                      <span>Systems Thinking</span>
                    </div>
                    <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 flex items-center gap-2 text-sm hover:bg-white/10 transition-colors">
                      <Zap className="w-4 h-4 text-yellow-500" />
                      <span>Real-world Execution</span>
                    </div>
                    <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 flex items-center gap-2 text-sm hover:bg-white/10 transition-colors">
                      <Globe className="w-4 h-4 text-blue-400" />
                      <span>Scalable Architectures</span>
                    </div>
                  </motion.div>
                </div>

                {/* Visual Side */}
                <div className="relative hidden md:block">
                  <motion.div style={{ y, rotate }} className="relative z-10">
                    <div className="p-1 rounded-2xl bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md border border-white/10 w-full aspect-square flex items-center justify-center relative overflow-hidden group/visual">
                       {/* Inner Liquid */}
                       <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-blue-500/10 opacity-50 group-hover/visual:opacity-100 transition-opacity" />
                       
                       <div className="grid grid-cols-2 gap-4 p-6 w-full h-full">
                          <div className="bg-black/40 rounded-xl p-4 flex flex-col justify-between border border-white/5 hover:border-purple-500/50 transition-colors group/item">
                             <Code2 className="w-8 h-8 text-purple-400 mb-2 group-hover/item:scale-110 transition-transform" />
                             <div className="h-1.5 w-12 bg-white/10 rounded-full overflow-hidden">
                               <div className="h-full bg-purple-500 w-[70%]" />
                             </div>
                          </div>
                          <div className="bg-black/40 rounded-xl p-4 flex flex-col justify-between border border-white/5 hover:border-blue-500/50 transition-colors group/item mt-8">
                             <Cpu className="w-8 h-8 text-blue-400 mb-2 group-hover/item:scale-110 transition-transform" />
                              <div className="h-1.5 w-12 bg-white/10 rounded-full overflow-hidden">
                               <div className="h-full bg-blue-500 w-[85%]" />
                             </div>
                          </div>
                          <div className="bg-black/40 rounded-xl p-4 flex flex-col justify-between border border-white/5 hover:border-green-500/50 transition-colors group/item -mt-8">
                             <Terminal className="w-8 h-8 text-green-400 mb-2 group-hover/item:scale-110 transition-transform" />
                              <div className="h-1.5 w-12 bg-white/10 rounded-full overflow-hidden">
                               <div className="h-full bg-green-500 w-[60%]" />
                             </div>
                          </div>
                            <div className="bg-black/40 rounded-xl p-4 flex flex-col justify-between border border-white/5 hover:border-pink-500/50 transition-colors group/item">
                             <Zap className="w-8 h-8 text-pink-400 mb-2 group-hover/item:scale-110 transition-transform" />
                              <div className="h-1.5 w-12 bg-white/10 rounded-full overflow-hidden">
                               <div className="h-full bg-pink-500 w-[90%]" />
                             </div>
                          </div>
                       </div>
                    </div>
                  </motion.div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
