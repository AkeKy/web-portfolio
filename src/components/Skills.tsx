import React from "react";
import { motion } from "motion/react";
import {
  Code2,
  Layers,
  Database,
  Settings2,
  Map as MapIcon
} from "lucide-react";

const skillIcons: Record<string, React.ReactNode> = {
  languages: <Code2 className="text-[#2b6485]" />,
  frameworks: <Layers className="text-white" />,
  database: <Database className="text-[#2b6485]" />,
  tools: <Settings2 className="text-[#2b6485]" />,
  gis: <MapIcon className="text-[#2b6485]" />
};

function SkillCard({ icon, title, skills, dark = false, highlight = false }: { key?: React.Key, icon: React.ReactNode, title: string, skills: string[], dark?: boolean, highlight?: boolean }) {
  return (
    <motion.div
      className={`p-8 rounded-xl border border-[#c4c6cf]/20 shadow-sm ${dark ? 'bg-[#031f41] text-white' : highlight ? 'bg-[#a3d8fe] text-[#001e2e]' : 'bg-white'}`}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
        {icon} {title}
      </h4>
      <div className="flex flex-wrap gap-2">
        {skills.map(skill => (
          <span
            key={skill}
            className={`px-3 py-1 text-xs font-bold rounded-full ${dark ? 'bg-white/10 text-white' : highlight ? 'bg-white/50 text-[#001e2e]' : 'bg-[#e6e8ea] text-[#44474e]'}`}
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills({ data }: { data: any }) {
  return (
    <section className="py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-[#2b6485] uppercase mb-4">{data.sectionTitle}</h2>
          <h3 className="text-4xl font-bold text-[#031f41]">{data.title}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {data.categories.map((cat: { id: string; title: string; items: string[] }) => (
            <SkillCard
              key={cat.id}
              icon={skillIcons[cat.id]}
              title={cat.title}
              skills={cat.items}
              dark={cat.id === 'frameworks'}
              highlight={cat.id === 'gis'}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
