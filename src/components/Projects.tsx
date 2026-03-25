import React from "react";
import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

function ProjectCard({ title, tags, description, image, onClick }: { key?: React.Key, title: string, tags: string, description: string, image: string, onClick?: () => void }) {
  return (
    <motion.div className="group cursor-pointer" {...fadeInUp} onClick={onClick}>
      <div className="relative aspect-video rounded-xl overflow-hidden mb-6 bg-[#e0e3e5]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-[#031f41]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="bg-white text-[#031f41] px-6 py-3 rounded-full font-bold shadow-xl flex items-center gap-2">
            View Project <ExternalLink size={16} />
          </span>
        </div>
      </div>
      <span className="text-xs font-bold text-[#2b6485] uppercase tracking-widest mb-2 block">{tags}</span>
      <h4 className="text-2xl font-bold text-[#031f41] mb-3">{title}</h4>
      <p className="text-[#44474e] leading-relaxed">{description}</p>
    </motion.div>
  );
}

export default function Projects({ data, onSelectProject }: { data: any, onSelectProject?: (title: string) => void }) {
  return (
    <section className="py-32 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-[#2b6485] uppercase mb-4">{data.sectionTitle}</h2>
            <h3 className="text-4xl font-bold text-[#031f41]">{data.title}</h3>
          </div>
          <p className="text-[#44474e] max-w-md text-right hidden md:block">
            {data.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {data.items.map((proj: any, i: number) => (
            <ProjectCard
              key={i}
              title={proj.title}
              tags={proj.tags}
              description={proj.description}
              image={proj.image}
              onClick={() => onSelectProject?.(proj.title)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
