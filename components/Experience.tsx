"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

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

const fadeIn = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
    },
  }),
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-secondary/5">
      <div className="container mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Professional Experience</h2>
          <p className="text-muted-foreground text-lg">My journey in the tech industry and community leadership.</p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline Line for Desktop */}
              <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-border -translate-x-1/2" />
              
              <div className={`md:flex items-center justify-between gap-12 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-[5px] md:-translate-x-1/2 mt-1.5 md:mt-0 z-10" />

                {/* Content Card */}
                <div className="w-full md:w-[calc(50%-24px)] mb-8 md:mb-0">
                  <div className="glass-card p-6 rounded-xl border border-white/5 hover:border-primary/30 transition-colors bg-card/50">
                    <div className="flex items-center justify-between mb-2">
                       <h3 className="text-xl font-bold text-foreground">{exp.company}</h3>
                       <span className="text-xs font-mono px-2 py-1 rounded bg-secondary/50 text-secondary-foreground">
                         {exp.type}
                       </span>
                    </div>
                    <div className="text-primary font-medium mb-4 flex items-center gap-2">
                      <Briefcase className="w-4 h-4" /> {exp.role}
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" /> {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" /> {exp.location}
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.description.map((desc, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Empty Space for alternate side */}
                <div className="hidden md:block w-[calc(50%-24px)]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
