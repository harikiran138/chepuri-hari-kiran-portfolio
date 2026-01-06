"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Github, Globe, ArrowRight } from "lucide-react";
import Image from "next/image";
import { projects } from "@/data/projects";


// --- Wave Background Component ---
const WaveBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
  
    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      
      let time = 0;
      let animationFrameId: number;
      
      const waveData = Array.from({ length: 8 }).map(() => ({
        value: Math.random() * 0.5 + 0.1,
        targetValue: Math.random() * 0.5 + 0.1,
        speed: Math.random() * 0.02 + 0.01
      }));
  
      function resizeCanvas() {
        if (!canvas) return;
        canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
        canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
      }
  
      function updateWaveData() {
        waveData.forEach(data => {
          if (Math.random() < 0.01) data.targetValue = Math.random() * 0.7 + 0.1;
          const diff = data.targetValue - data.value;
          data.value += diff * data.speed;
        });
      }
  
      function draw() {
        if (!canvas || !ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        waveData.forEach((data, i) => {
          const freq = data.value * 7;
          ctx.beginPath();
          for (let x = 0; x < canvas.width; x++) {
            const nx = (x / canvas.width) * 2 - 1;
            const px = nx + i * 0.04 + freq * 0.03;
            const py = Math.sin(px * 10 + time) * Math.cos(px * 2) * freq * 0.1 * ((i + 1) / 8);
            const y = (py + 1) * canvas.height / 2;
            x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
          }
          
          const intensity = Math.min(1, freq * 0.3);
          const r = 20 + intensity * 40;  
          const g = 20 + intensity * 60;
          const b = 100 + intensity * 100;
          
          ctx.lineWidth = 1 + i * 0.5;
          ctx.strokeStyle = `rgba(${r},${g},${b},0.4)`;
          ctx.shadowColor = `rgba(${r},${g},${b},0.8)`;
          ctx.shadowBlur = 10;
          ctx.stroke();
          ctx.shadowBlur = 0;
        });
      }
  
      function animate() {
        time += 0.015;
        updateWaveData();
        draw();
        animationFrameId = requestAnimationFrame(animate);
      }
  
      window.addEventListener('resize', resizeCanvas);
      resizeCanvas();
      animate();
  
      return () => {
        window.removeEventListener('resize', resizeCanvas);
        cancelAnimationFrame(animationFrameId);
      };
    }, []);
  
    // Removed bg-black/20
    return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-80 z-0" />;
  };

// --- Main Component ---
export default function ProjectScrollSection() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Wave Background behind the cards */}
      <WaveBackground />
      
      <div className="container relative z-10 px-6 max-w-7xl mx-auto">
         <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
         >
           <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Featured Projects</h2>
           <p className="text-muted-foreground max-w-2xl mx-auto">
             Connecting ideas to reality with code. Validated by GitHub.
           </p>
         </motion.div>

        <div className="w-full relative overflow-hidden">
            {/* Horizontal Scroll Area converted to Marquee */}
            <div 
                className="flex w-max gap-8 animate-scroll-left hover:[animation-play-state:paused] py-8"
                style={{
                  "--duration": "40s",
                  "--gap": "2rem"
                } as React.CSSProperties}
            >
              {[...projects, ...projects].map((project, idx) => (
                <div
                  key={`${project.title}-${idx}`}
                  className="flex-shrink-0 w-[350px] md:w-[400px]"
                >
                  {/* Solid White Card - High Visibility & Black Text */}
                  <div className="group relative bg-white border border-gray-200 overflow-hidden rounded-3xl flex flex-col h-[480px] transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-2xl">
                    
                    {/* Top Section */}
                    <div className="p-4 flex justify-center relative flex-1 z-10">
                      <div className="w-full h-full rounded-2xl overflow-hidden relative bg-gray-50 border border-gray-100 group-hover:bg-gray-100 transition-colors">
                        
                        {/* Subtle Grid Background */}
                        <div className="absolute inset-0 opacity-10">
                          <div
                            className="w-full h-full"
                            style={{
                              backgroundImage:
                                "linear-gradient(90deg, #000 1px, transparent 1px), linear-gradient(#000 1px, transparent 1px)",
                              backgroundSize: "20px 20px",
                            }}
                          />
                        </div>
                        
                        {/* Center Icon/Text */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <h3 className="text-2xl font-bold text-black text-center px-4 tracking-tight">
                                {project.title}
                            </h3>
                        </div>
                         {/* Live Badge */}
                         {project.links.demo !== "#" && (
                             <span className="absolute top-3 right-3 text-black text-[10px] uppercase font-bold tracking-widest bg-white px-3 py-1 rounded-full border border-gray-200 shadow-sm">
                                Live
                             </span>
                         )}
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="w-full h-px bg-gray-100 my-1 z-10" />

                    {/* Bottom Content */}
                    <div className="p-6 relative z-10 flex flex-col h-[200px]">
                       {/* Tech Badges */}
                      <div className="flex flex-wrap gap-2 mb-4">
                         {project.tech.slice(0, 3).map(t => (
                             <span key={t} className="inline-block px-2.5 py-1 bg-gray-100 text-gray-800 rounded-full text-[10px] font-semibold border border-gray-200">
                                {t}
                             </span>
                         ))}
                         {project.tech.length > 3 && (
                             <span className="inline-block px-2.5 py-1 bg-gray-100 text-gray-500 rounded-full text-[10px] font-semibold border border-gray-200">
                                +{project.tech.length - 3}
                             </span>
                         )}
                      </div>

                      <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed font-normal">
                        {project.description}
                      </p>

                      <div className="flex justify-between items-center mt-auto">
                        <a
                          href={project.links.code}
                          target="_blank"
                          rel="noreferrer"
                          className="group/btn relative overflow-hidden bg-black hover:bg-gray-900 transition-all text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-xl flex items-center gap-2"
                        >
                          <Github className="w-4 h-4 ml-0.5" />
                          <span className="relative z-10">View Code</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </div>
    </section>
  );
}
