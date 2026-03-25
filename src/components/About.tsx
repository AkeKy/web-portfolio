import React from "react";
import { motion } from "motion/react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function About({ data }: { data: any }) {
  return (
    <section className="py-24 bg-[#f2f4f6] px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div className="space-y-6" {...fadeInUp}>
            <h2 className="text-sm font-bold tracking-widest text-[#2b6485] uppercase">{data.sectionTitle}</h2>
            <h3 className="text-4xl font-bold text-[#031f41] leading-tight" dangerouslySetInnerHTML={{ __html: data.title }} />
            <div className="pt-8 border-t border-[#c4c6cf]/30">
              <h4 className="text-lg font-bold text-[#031f41] mb-2">Education</h4>
              <p className="font-bold text-[#191c1e]">{data.university}</p>
              <p className="text-[#44474e]">{data.degree}</p>
            </div>
          </motion.div>

          <motion.div className="space-y-6 text-[#44474e] text-lg leading-relaxed" {...fadeInUp}>
            {data.paragraphs.map((p: string, i: number) => (
              <p key={i}>{p}</p>
            ))}
            <div className="pt-4 flex gap-12">
              {data.stats.map((stat: any, i: number) => (
                <div key={i}>
                  <p className="text-4xl font-extrabold text-[#031f41]">{stat.value}</p>
                  <p className="text-xs font-bold text-[#2b6485] uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
