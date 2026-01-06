"use client";

import InteractiveBentoGallery, { MediaItemType } from "@/components/ui/interactive-bento-gallery";


const achievements: MediaItemType[] = [
  {
    id: 1,
    type: 'image',
    title: "Hack With Vizag",
    desc: "Secured top rank in a national-level hackathon solving real-world problems. Awarded 1st Place.",
    url: "https://images.unsplash.com/photo-1596496050844-36105e63074d?q=80&w=2070&auto=format&fit=crop",
    span: 'md:col-span-2 md:row-span-2'
  },
  {
    id: 2,
    type: 'image',
    title: "Hack With Nellore",
    desc: "Led the team to victory with an innovative AI-driven solution. 1st Place Winner.",
    url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop",
    span: 'md:col-span-1 md:row-span-1'
  },
  {
    id: 3,
    type: 'image',
    title: "Student Director – AI ALGO",
    desc: "Leading technical direction and community initiatives for 2+ years.",
    url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    span: 'md:col-span-1 md:row-span-1'
  },
  {
    id: 4,
    type: 'image',
    title: "Smart India Hackathon",
    desc: "Silver Medalist (Internal) for building a scalable diverse solution.",
    url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
    span: 'md:col-span-1 md:row-span-2'
  },
  {
    id: 5,
    type: 'image',
    title: "GVP Tech Fest",
    desc: "Runner Up. Competed against top tier colleges and secured 2nd position.",
    url: "https://images.unsplash.com/photo-1475721027767-pfa536aca30d?q=80&w=2070&auto=format&fit=crop",
    span: 'md:col-span-1 md:row-span-1'
  },
  {
    id: 6,
    type: 'image',
    title: "Malla Reddy Hackathon",
    desc: "Top 10 Finalist. Built an innovative solution among hundreds of participants.",
    url: "https://images.unsplash.com/photo-1504384308090-c54be3855833?q=80&w=2062&auto=format&fit=crop",
    span: 'md:col-span-1 md:row-span-1'
  },
  {
    id: 7,
    type: 'image',
    title: "Club Leadership",
    desc: "President of 7 Clubs. Orchestrating events, workshops, and technical growth.",
    url: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2070&auto=format&fit=crop",
    span: 'md:col-span-1 md:row-span-1'
  },
  {
    id: 8,
    type: 'image',
    title: "Class Representative",
    desc: "Representing the batch and coordinating academic activities.",
    url: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?q=80&w=2064&auto=format&fit=crop",
    span: 'md:col-span-1 md:row-span-1'
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <InteractiveBentoGallery
          mediaItems={achievements}
          title="Achievements & Impact"
          description="A track record of delivering results, leading teams, and winning competitions."
        />

      </div>
    </section>
  );
}
