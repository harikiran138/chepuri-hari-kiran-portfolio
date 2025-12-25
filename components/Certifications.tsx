"use client";

import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";

const certifications = [
  {
    name: "5-Day AI Agents Intensive Course",
    issuer: "Google / Kaggle",
    date: "Dec 2025",
    link: "https://www.kaggle.com/certification/badges/chepuriharikiran/105"
  },
  {
    name: "CS50's Intro to AI with Python",
    issuer: "Harvard University (CS50)",
    date: "Jun 2024",
    link: "https://cs50.harvard.edu/certificates/369082c8-2613-460c-9444-ab452734ea00"
  },
  {
    name: "Certified Ethical Hacker (CEH)",
    issuer: "Infosys Springboard",
    date: "Mar 2024",
    link: "https://verify.onwingspan.com/"
  },
  {
    name: "Intro to Generative AI & LLMs",
    issuer: "Google Cloud",
    date: "Mar 2024",
    link: "https://www.cloudskillsboost.google/public_profiles/8267dbad-4cda-4a76-8628-76365ce14cd0/badges/8478874"
  },
  {
    name: "Web Development Bootcamp 2024",
    issuer: "Udemy",
    date: "Mar 2024",
    link: "https://www.udemy.com/certificate/UC-5b04883f-0d98-4ac9-9765-49a62ad8ad50"
  },
  {
    name: "AWS Cloud & DevOps Foundation",
    issuer: "Simplilearn / AWS",
    date: "Feb 2024",
    link: "#"
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24">
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
      </div>
    </section>
  );
}
