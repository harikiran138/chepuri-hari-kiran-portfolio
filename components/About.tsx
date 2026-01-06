"use client";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { useRef } from "react";
import Link from "next/link";

export default function About() {
  const heroRef = useRef<HTMLDivElement>(null);
  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };
  const scaleVariants = {
    visible: (i: number) => ({
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      opacity: 0,
    },
  };
  
  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden" ref={heroRef}>
       {/* Background Decoration matching the theme - REMOVED as requested */}
      <div className="absolute inset-0 z-0 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="relative">
          {/* Header with social icons */}
          <div className="flex justify-between items-center mb-8 w-[95%] sm:w-[85%] absolute lg:top-4 md:top-0 sm:-top-2 -top-12 z-20">
            <div className="flex items-center gap-2 text-xl">
              <span className="text-primary animate-spin">✱</span>
              <TimelineContent
                as="span"
                animationNum={0}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="text-sm font-medium text-muted-foreground"
              >
                WHO I AM
              </TimelineContent>
            </div>
            <div className="flex gap-3">
              <TimelineContent
                as="a"
                animationNum={0}
                timelineRef={heroRef}
                customVariants={revealVariants}
                href="https://github.com/harikiran138"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 md:w-10 md:h-10 border border-border bg-secondary/50 hover:bg-secondary rounded-lg flex items-center justify-center cursor-pointer transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4 md:w-5 md:h-5 text-foreground" />
              </TimelineContent>
              <TimelineContent
                as="a"
                animationNum={1}
                timelineRef={heroRef}
                customVariants={revealVariants}
                href="https://linkedin.com/in/chepuri-hari-kiran"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 md:w-10 md:h-10 border border-border bg-secondary/50 hover:bg-secondary rounded-lg flex items-center justify-center cursor-pointer transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4 md:w-5 md:h-5 text-foreground" />
              </TimelineContent>
               <TimelineContent
                as="a"
                animationNum={2}
                timelineRef={heroRef}
                customVariants={revealVariants}
                href="mailto:contact@chepuriharikiran.com"
                className="w-8 h-8 md:w-10 md:h-10 border border-border bg-secondary/50 hover:bg-secondary rounded-lg flex items-center justify-center cursor-pointer transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-foreground" />
              </TimelineContent>
            </div>
          </div>

          <TimelineContent
            as="figure"
            animationNum={4}
            timelineRef={heroRef}
            customVariants={scaleVariants}
            className="relative group mt-12 sm:mt-0"
          >
            <svg
              className="w-full h-[300px] sm:h-[400px] lg:h-[500px]"
              width={"100%"}
              height={"100%"}
              viewBox="0 0 100 40"
              preserveAspectRatio="none"
            >
              <defs>
                <clipPath
                  id="clip-inverted"
                  clipPathUnits={"objectBoundingBox"}
                >
                  <path
                    d="M0.0998072 1H0.422076H0.749756C0.767072 1 0.774207 0.961783 0.77561 0.942675V0.807325C0.777053 0.743631 0.791844 0.731953 0.799059 0.734076H0.969813C0.996268 0.730255 1.00088 0.693206 0.999875 0.675159V0.0700637C0.999875 0.0254777 0.985045 0.00477707 0.977629 0H0.902473C0.854975 0 0.890448 0.138535 0.850165 0.138535H0.0204424C0.00408849 0.142357 0 0.180467 0 0.199045V0.410828C0 0.449045 0.0136283 0.46603 0.0204424 0.469745H0.0523086C0.0696245 0.471019 0.0735527 0.497877 0.0733523 0.511146V0.915605C0.0723903 0.983121 0.090588 1 0.0998072 1Z"
                    fill="#D9D9D9"
                  />
                </clipPath>
              </defs>
              <image
                clipPath="url(#clip-inverted)"
                preserveAspectRatio="xMidYMid slice"
                width={"100%"}
                height={"100%"}
                xlinkHref="https://images.unsplash.com/photo-1718601980986-0ce75101d52d?w=1200&auto=format&fit=crop"
              ></image>
            </svg>
          </TimelineContent>

          {/* Stats */}
          <div className="flex flex-wrap lg:justify-start justify-between items-center py-6 text-sm">
            <TimelineContent
              as="div"
              animationNum={5}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="flex gap-4"
            >
              <div className="flex items-center gap-2 mb-2 sm:text-base text-xs">
                <span className="text-primary font-bold">Full Stack</span>
                <span className="text-muted-foreground">Development</span>
                <span className="text-border">|</span>
              </div>
              <div className="flex items-center gap-2 mb-2 sm:text-base text-xs">
                <span className="text-primary font-bold">AI</span>
                <span className="text-muted-foreground">Systems Focus</span>
              </div>
            </TimelineContent>
            <div className="lg:absolute right-0 bottom-16 flex lg:flex-col flex-row-reverse lg:gap-0 gap-4">
               {/* Removed Scalable Architectures as requested */}
            </div>
          </div>
        </div>
        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-12 mt-8">
          <div className="md:col-span-2">
            <h1 className="sm:text-4xl md:text-5xl text-3xl !leading-[110%] font-semibold text-foreground mb-8">
              <VerticalCutReveal
                staggerDuration={0.1}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 30,
                }}
              >
                Building Real-World Systems That Scale.
              </VerticalCutReveal>
            </h1>

            <TimelineContent
              as="div"
              animationNum={9}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="grid md:grid-cols-2 gap-8 text-muted-foreground"
            >
              <TimelineContent
                as="div"
                animationNum={10}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="sm:text-base text-sm"
              >
                <p className="leading-relaxed text-justify">
                  I am a full-stack and AI-focused developer who builds real-world, 
                  production-ready systems that go beyond demos. I leverage 
                  <strong> Next.js, TypeScript, and Python</strong> to design scalable platforms 
                  and intelligent automation, ensuring robust performance and seamless user experiences.
                </p>
              </TimelineContent>
              <TimelineContent
                as="div"
                animationNum={11}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="sm:text-base text-sm"
              >
                <p className="leading-relaxed text-justify">
                   Alongside hands-on development with <strong>Cloud Native</strong> technologies and <strong>LLM integrations</strong>, 
                   I bring a strong system-thinking mindset. My focus is on creating 
                   reliable, impactful solutions that solve complex business challenges 
                   and can grow with your needs.
                </p>
              </TimelineContent>
            </TimelineContent>
          </div>

          <div className="md:col-span-1 border-t md:border-t-0 md:border-l border-border/50 pt-8 md:pt-0 md:pl-8">
            <div className="text-left md:text-right">
              <TimelineContent
                as="div"
                animationNum={12}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="text-primary text-2xl font-bold mb-2 uppercase tracking-wide"
              >
                HARI KIRAN
              </TimelineContent>
              <TimelineContent
                as="div"
                animationNum={13}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="text-muted-foreground text-sm mb-8"
              >
                Full Stack Developer | AI Engineer
              </TimelineContent>

              <TimelineContent
                as="div"
                animationNum={14}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="mb-6"
              >
                <p className="text-foreground font-medium mb-4">
                  Ready to build something extraordinary?
                </p>
              </TimelineContent>

              <TimelineContent
                as="a"
                href="#contact"
                animationNum={15}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 flex w-fit md:ml-auto gap-2 hover:gap-4 transition-all duration-300 ease-in-out text-primary-foreground px-5 py-3 rounded-lg cursor-pointer font-semibold items-center"
              >
                LET'S COLLABORATE <ArrowRight className="w-4 h-4" />
              </TimelineContent>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
