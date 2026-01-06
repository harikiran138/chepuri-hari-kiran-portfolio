"use client";

import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import { RatingInteraction } from "@/components/ui/rating-interaction";

const certifications = [
  {
    name: "5-Day AI Agents Intensive Course with Google",
    issuer: "Kaggle",
    date: "Dec 2025",
    link: "#"
  },
  {
    name: "CS50's Introduction to Artificial Intelligence with Python",
    issuer: "CS50",
    date: "Jun 2024",
    link: "#"
  },
  {
    name: "CS50's Introduction to Programming with Python",
    issuer: "CS50",
    date: "May 2024",
    link: "#"
  },
  {
    name: "Certified Ethical Hacker (CEH)",
    issuer: "Infosys Springboard",
    date: "Mar 2024",
    link: "#"
  },
  {
    name: "Introduction to Generative AI",
    issuer: "Google",
    date: "Mar 2024",
    link: "#"
  },
  {
    name: "Introduction to Large Language Models",
    issuer: "Google",
    date: "Mar 2024",
    link: "#"
  },
  {
    name: "The complete 2024 web development bootcamp",
    issuer: "Udemy",
    date: "Mar 2024",
    link: "#"
  },
  {
    name: "Full Stack Development: Introduction",
    issuer: "Skillsoft",
    date: "Feb 2024",
    link: "#"
  },
  {
    name: "Full Stack Software Developer Assessment",
    issuer: "IBM",
    date: "Feb 2024",
    link: "#"
  },
  {
    name: "Getting Started with AWS",
    issuer: "Simplilearn",
    date: "Feb 2024",
    link: "#"
  },
  {
    name: "Python for Beginners: Learn Python Programming (Python 3)",
    issuer: "Infosys Springboard",
    date: "Feb 2024",
    link: "#"
  },
  {
    name: "Introduction to Microsoft Excel   by Coursera Project Network and offered through Coursera",
    issuer: "Coursera",
    date: "Jan 2024 · Expires Jan 2034",
    link: "#"
  },
  {
    name: "Google Ads for Beginners",
    issuer: "Coursera",
    date: "Jan 2024",
    link: "#"
  },
  {
    name: "Problem Solving (Intermediate)",
    issuer: "HackerRank",
    date: "Jan 2024",
    link: "#"
  },
  {
    name: "HackerRank Certificates Python (Basic)",
    issuer: "HackerRank",
    date: "Dec 2023",
    link: "#"
  },
  {
    name: "Introduction to Programming Using Python",
    issuer: "Sololearn",
    date: "Dec 2023",
    link: "#"
  },
  {
    name: "Introduction to Cybersecurity course.",
    issuer: "Cisco Networking Academy",
    date: "Sep 2023",
    link: "#"
  },
  {
    name: "Network Support and Security course",
    issuer: "Cisco Networking Academy",
    date: "Sep 2023",
    link: "#"
  },
  {
    name: "Networking Basics course.",
    issuer: "Cisco Networking Academy",
    date: "Sep 2023",
    link: "#"
  },
  {
    name: "Programming in C Certification",
    issuer: "CodeChef",
    date: "Aug 2023",
    link: "#"
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Certifications</h2>
          <p className="text-muted-foreground">Continuous learning and professional development.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-primary/50 transition-all group"
            >
              <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                <BadgeCheck className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {cert.name}
                </h3>
                <div className="flex justify-between items-center mt-1">
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  <span className="text-xs font-mono text-muted-foreground/80">{cert.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center w-full">
            <RatingInteraction />
        </div>
      </div>
    </section>
  );
}
