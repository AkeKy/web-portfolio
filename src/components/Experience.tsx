import React from "react";
import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

function ExperienceItem({ date, role, company, achievements }: { key?: React.Key, date: string, role: string, company: string, achievements: string[] }) {
  return (
    <motion.div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" {...fadeInUp}>
      <div className="lg:col-span-4">
        <p className="text-sm font-bold text-[#b0c7f1] uppercase tracking-widest mb-2">{date}</p>
        <h4 className="text-2xl font-bold">{role}</h4>
        <p className="text-[#a3d8fe] font-medium">{company}</p>
      </div>
      <div className="lg:col-span-8 lg:pl-16 relative">
        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-white/10 hidden lg:block" />
        <ul className="space-y-6 text-lg text-white/80 leading-relaxed">
          {achievements.map((achievement, i) => (
            <li key={i} className="flex gap-4">
              <CheckCircle2 className="text-[#b0c7f1] shrink-0 mt-1" size={20} />
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Experience({ data }: { data: any }) {
  return (
    <section className="py-32 bg-[#031f41] px-6 lg:px-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20">
          <h2 className="text-sm font-bold tracking-[0.2em] text-[#b0c7f1] uppercase mb-4">{data.sectionTitle}</h2>
          <h3 className="text-4xl md:text-5xl font-bold">{data.title}</h3>
        </div>

        <div className="space-y-24">
          {data.items.map((item: any, i: number) => (
            <ExperienceItem
              key={i}
              date={item.date}
              role={item.role}
              company={item.company}
              achievements={item.achievements}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
