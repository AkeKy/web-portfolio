/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  Code2,
  Layers,
  Database,
  Settings2,
  Map as MapIcon,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Github,
  Linkedin,
  ExternalLink
} from "lucide-react";

import enData from "./locales/en.json";
import profileImg from "./assets/4537.jpg";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const skillIcons: Record<string, React.ReactNode> = {
  languages: <Code2 className="text-[#2b6485]" />,
  frameworks: <Layers className="text-white" />,
  database: <Database className="text-[#2b6485]" />,
  tools: <Settings2 className="text-[#2b6485]" />,
  gis: <MapIcon className="text-[#2b6485]" />
};

export default function App() {
  const { hero, about, skills, experience, projects, contact, footer } = enData;

  return (
    <div className="min-h-screen bg-[#f7f9fb] font-sans text-[#191c1e] selection:bg-[#a3d8fe] selection:text-[#001e2e]">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden px-6 py-20 lg:px-12">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-12 gap-8 items-center">
          <motion.div
            className="col-span-12 lg:col-span-7 z-10"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#d5e3ff] text-[#001b3c] text-xs font-bold tracking-widest uppercase mb-6">
              {hero.status}
            </span>
            <h1 className="text-6xl md:text-8xl font-bold text-[#031f41] leading-[0.9] tracking-tighter mb-8">
              {hero.firstName} <br />
              <span className="bg-gradient-to-r from-[#031f41] to-[#2b6485] bg-clip-text text-transparent">
                {hero.lastName}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-[#44474e] max-w-xl mb-10 leading-relaxed">
              {hero.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-[#031f41] text-white rounded-md font-bold flex items-center gap-2 hover:opacity-90 transition-all shadow-lg shadow-[#031f41]/20">
                {hero.primaryButton} <ArrowRight size={18} />
              </button>
              <button className="px-8 py-4 border-2 border-[#c4c6cf] text-[#031f41] rounded-md font-bold hover:bg-[#eceef0] transition-all">
                {hero.secondaryButton}
              </button>
            </div>
          </motion.div>

          <motion.div
            className="hidden lg:block lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700 bg-white p-4">
              <img
                src={profileImg}
                alt="Professional Profile"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="absolute -bottom-6 -left-10 bg-white/70 backdrop-blur-xl p-6 rounded-xl shadow-xl border border-white/20 max-w-[260px]">
              <p className="text-sm font-medium text-[#44474e] italic leading-relaxed">
                {hero.quote}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Abstract background elements */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#b0c7f1]/20 blur-[120px] rounded-full -z-10" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-[#a3d8fe]/30 blur-[100px] rounded-full -z-10" />
      </section>

      {/* About & Education Section */}
      <section className="py-24 bg-[#f2f4f6] px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div className="space-y-6" {...fadeInUp}>
              <h2 className="text-sm font-bold tracking-widest text-[#2b6485] uppercase">{about.sectionTitle}</h2>
              <h3 className="text-4xl font-bold text-[#031f41] leading-tight" dangerouslySetInnerHTML={{ __html: about.title }} />
              <div className="pt-8 border-t border-[#c4c6cf]/30">
                <h4 className="text-lg font-bold text-[#031f41] mb-2">Education</h4>
                <p className="font-bold text-[#191c1e]">{about.university}</p>
                <p className="text-[#44474e]">{about.degree}</p>
              </div>
            </motion.div>

            <motion.div className="space-y-6 text-[#44474e] text-lg leading-relaxed" {...fadeInUp}>
              {about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <div className="pt-4 flex gap-12">
                {about.stats.map((stat, i) => (
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

      {/* Technical Skills Section */}
      <section className="py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-[#2b6485] uppercase mb-4">{skills.sectionTitle}</h2>
            <h3 className="text-4xl font-bold text-[#031f41]">{skills.title}</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {skills.categories.map((cat) => (
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

      {/* Experience Section */}
      <section className="py-32 bg-[#031f41] px-6 lg:px-12 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-20">
            <h2 className="text-sm font-bold tracking-[0.2em] text-[#b0c7f1] uppercase mb-4">{experience.sectionTitle}</h2>
            <h3 className="text-4xl md:text-5xl font-bold">{experience.title}</h3>
          </div>

          <div className="space-y-24">
            {experience.items.map((item, i) => (
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

      {/* Featured Work Section */}
      <section className="py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-sm font-bold tracking-widest text-[#2b6485] uppercase mb-4">{projects.sectionTitle}</h2>
              <h3 className="text-4xl font-bold text-[#031f41]">{projects.title}</h3>
            </div>
            <p className="text-[#44474e] max-w-md text-right hidden md:block">
              {projects.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.items.map((proj, i) => (
              <ProjectCard
                key={i}
                title={proj.title}
                tags={proj.tags}
                description={proj.description}
                image={proj.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 px-6 lg:px-12 bg-[#f2f4f6]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-sm font-bold tracking-widest text-[#2b6485] uppercase mb-4">{contact.sectionTitle}</h2>
              <h3 className="text-5xl font-extrabold text-[#031f41] mb-8 tracking-tighter" dangerouslySetInnerHTML={{ __html: contact.title }} />
              <p className="text-[#44474e] text-lg mb-12 max-w-md">
                {contact.description}
              </p>

              <div className="space-y-8">
                <ContactInfo icon={<Phone size={20} />} label="Phone" value={contact.phone} />
                <ContactInfo icon={<Mail size={20} />} label="Email" value={contact.email} />
                <ContactInfo icon={<MapPin size={20} />} label="Location" value={contact.location} />
              </div>
            </div>

            <motion.div
              className="bg-white p-10 rounded-2xl shadow-xl shadow-[#031f41]/5"
              {...fadeInUp}
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#2b6485] uppercase tracking-widest">Full Name</label>
                  <input
                    type="text"
                    className="w-full bg-[#e0e3e5] border-none rounded-md px-4 py-3 focus:ring-2 focus:ring-[#2b6485] focus:bg-white transition-all outline-none"
                    placeholder="Your Name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#2b6485] uppercase tracking-widest">Email Address</label>
                  <input
                    type="email"
                    className="w-full bg-[#e0e3e5] border-none rounded-md px-4 py-3 focus:ring-2 focus:ring-[#2b6485] focus:bg-white transition-all outline-none"
                    placeholder="email@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#2b6485] uppercase tracking-widest">Message</label>
                  <textarea
                    className="w-full bg-[#e0e3e5] border-none rounded-md px-4 py-3 focus:ring-2 focus:ring-[#2b6485] focus:bg-white transition-all outline-none min-h-[120px]"
                    placeholder="How can I help you?"
                  />
                </div>
                <button className="w-full py-4 bg-[#031f41] text-white font-bold rounded-md hover:bg-[#2b6485] transition-colors shadow-lg shadow-[#031f41]/10">
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-[#c4c6cf]/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-lg font-bold text-[#031f41]">{footer.name}</span>
          <p className="text-sm uppercase tracking-widest text-[#44474e] text-center">
            {footer.copyright}
          </p>
          <div className="flex gap-6">
            <a href={footer.socials.github} className="text-[#44474e] hover:text-[#031f41] transition-all"><Github size={20} /></a>
            <a href={footer.socials.linkedin} className="text-[#44474e] hover:text-[#031f41] transition-all"><Linkedin size={20} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SkillCard({ icon, title, skills, dark = false, highlight = false }: { key?: string | number, icon: React.ReactNode, title: string, skills: string[], dark?: boolean, highlight?: boolean }) {
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

function ExperienceItem({ date, role, company, achievements }: { key?: string | number, date: string, role: string, company: string, achievements: string[] }) {
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

function ProjectCard({ title, tags, description, image }: { key?: string | number, title: string, tags: string, description: string, image: string }) {
  return (
    <motion.div className="group cursor-pointer" {...fadeInUp}>
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

function ContactInfo({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <div className="flex items-center gap-6">
      <div className="w-12 h-12 rounded-full bg-[#d5e3ff] flex items-center justify-center text-[#001b3c]">
        {icon}
      </div>
      <div>
        <p className="text-xs font-bold text-[#44474e] uppercase tracking-widest">{label}</p>
        <p className="text-lg font-bold text-[#031f41]">{value}</p>
      </div>
    </div>
  );
}
