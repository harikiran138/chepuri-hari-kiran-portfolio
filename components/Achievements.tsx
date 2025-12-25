"use client";

import { motion } from "framer-motion";
import { Trophy, Award, Users, Star, Crown, Medal } from "lucide-react";

interface Achievement {
  title: string;
  role: string;
  description: string;
  icon: React.ReactNode;
  year: string;
}

const achievements: Achievement[] = [
  {
    title: "Hack With Vizag (National)",
    role: "1st Place Winner",
    description: "Secured top rank in a national-level hackathon solving real-world problems.",
    icon: <Trophy className="w-6 h-6 text-yellow-500" />,
    year: "2024"
  },
  {
    title: "Hack With Nellore",
    role: "1st Place Winner",
    description: "Led the team to victory with an innovative AI-driven solution.",
    icon: <Crown className="w-6 h-6 text-yellow-500" />,
    year: "2024"
  },
  {
    title: "Smart India Hackathon (Internal)",
    role: "Silver Medalist",
    description: "Recognized for building a scalable diverse solution.",
    icon: <Medal className="w-6 h-6 text-slate-300" />,
    year: "2023"
  },
  {
    title: "National Hackathon – GVP Tech Fest",
    role: "Runner Up",
    description: "Competed against top tier colleges and secured 2nd position.",
    icon: <Award className="w-6 h-6 text-slate-300" />,
    year: "2023"
  },
  {
    title: "Malla Reddy University Hackathon",
    role: "Top 10 Finalist",
    description: "Built an innovative solution among hundreds of participants.",
    icon: <Star className="w-6 h-6 text-purple-500" />,
    year: "2023"
  },
  {
    title: "Student Director – AI ALGO Startup",
    role: "Leadership",
    description: "Leading technical direction and community initiatives.",
    icon: <Users className="w-6 h-6 text-primary" />,
    year: "Present"
  },
  {
    title: "Technical Club Leadership",
    role: "President of 7 Clubs",
    description: "Orchestrating events, workshops, and technical growth for peers.",
    icon: <Star className="w-6 h-6 text-purple-500" />,
    year: "Ongoing"
  },
  {
    title: "Class Representative",
    role: "Leadership",
    description: "Representing the batch and coordinating academic activities for 2 years.",
    icon: <Users className="w-6 h-6 text-blue-500" />,
    year: "2 Years"
  }
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-bold mb-4">
            Achievements & Impact
          </motion.h2>
          <motion.p variants={fadeIn} className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A track record of delivering results, leading teams, and winning competitions.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="glass-card p-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-background/50 border border-white/10 group-hover:border-primary/50 transition-colors">
                  {item.icon}
                </div>
                <span className="text-xs font-mono py-1 px-2 rounded-full bg-secondary text-secondary-foreground">
                  {item.year}
                </span>
              </div>
              
              <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <div className="text-sm font-semibold text-primary/80 mb-3">
                {item.role}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
