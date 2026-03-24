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

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function App() {
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
              Available for New Opportunities
            </span>
            <h1 className="text-6xl md:text-8xl font-bold text-[#031f41] leading-[0.9] tracking-tighter mb-8">
              Akeburut <br />
              <span className="bg-gradient-to-r from-[#031f41] to-[#2b6485] bg-clip-text text-transparent">
                Preemongkon
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-[#44474e] max-w-xl mb-10 leading-relaxed">
              Full-stack Developer with practical experience in building responsive web applications using Next.js and Tailwind CSS.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-[#031f41] text-white rounded-md font-bold flex items-center gap-2 hover:opacity-90 transition-all shadow-lg shadow-[#031f41]/20">
                View Portfolio <ArrowRight size={18} />
              </button>
              <button className="px-8 py-4 border-2 border-[#c4c6cf] text-[#031f41] rounded-md font-bold hover:bg-[#eceef0] transition-all">
                Get In Touch
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
                src="https://picsum.photos/seed/resume/800/1000" 
                alt="Professional Profile"
                className="w-full h-full object-cover rounded-xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-10 bg-white/70 backdrop-blur-xl p-6 rounded-xl shadow-xl border border-white/20 max-w-[260px]">
              <p className="text-sm font-medium text-[#44474e] italic leading-relaxed">
                "Skilled in API integration, scalable UI architecture, and delivering user-centric software solutions."
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
              <h2 className="text-sm font-bold tracking-widest text-[#2b6485] uppercase">Profile & Education</h2>
              <h3 className="text-4xl font-bold text-[#031f41] leading-tight">
                Academic Precision <br /> Meets Practical Development
              </h3>
              <div className="pt-8 border-t border-[#c4c6cf]/30">
                <h4 className="text-lg font-bold text-[#031f41] mb-2">Education</h4>
                <p className="font-bold text-[#191c1e]">Khon Kaen University</p>
                <p className="text-[#44474e]">Bachelor of Science in Geo-Informatics (Computer Science), College of Computing</p>
              </div>
            </motion.div>
            
            <motion.div className="space-y-6 text-[#44474e] text-lg leading-relaxed" {...fadeInUp}>
              <p>
                Full-stack Developer with practical experience in building responsive web applications using Next.js and Tailwind CSS. Skilled in API integration, scalable UI architecture, and delivering user-centric software solutions.
              </p>
              <p>
                My background in Geo-Informatics provides a unique perspective on spatial data management and complex system architecture, allowing me to bridge the gap between technical GIS requirements and modern web standards.
              </p>
              <div className="pt-4 flex gap-12">
                <div>
                  <p className="text-4xl font-extrabold text-[#031f41]">2</p>
                  <p className="text-xs font-bold text-[#2b6485] uppercase tracking-wider">Professional Internships</p>
                </div>
                <div>
                  <p className="text-4xl font-extrabold text-[#031f41]">10+</p>
                  <p className="text-xs font-bold text-[#2b6485] uppercase tracking-wider">Technical Tools</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-[#2b6485] uppercase mb-4">Technical Skills</h2>
            <h3 className="text-4xl font-bold text-[#031f41]">The Toolkit</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <SkillCard 
              icon={<Code2 className="text-[#2b6485]" />} 
              title="Languages" 
              skills={["TypeScript", "Dart", "Python", "JavaScript", "Go", "SQL", "HTML/CSS"]} 
            />
            <SkillCard 
              icon={<Layers className="text-white" />} 
              title="Frameworks" 
              skills={["NestJS", "Next.js", "React", "Flutter", "Tailwind CSS"]} 
              dark
            />
            <SkillCard 
              icon={<Database className="text-[#2b6485]" />} 
              title="DB & ORM" 
              skills={["PostgreSQL", "PostGIS", "Prisma"]} 
            />
            <SkillCard 
              icon={<Settings2 className="text-[#2b6485]" />} 
              title="Tools" 
              skills={["Docker", "Git", "Postman", "Jira"]} 
            />
            <SkillCard 
              icon={<MapIcon className="text-[#2b6485]" />} 
              title="GIS & Others" 
              skills={["QGIS", "ArcMap", "Figma", "Storybook", "Antigravity"]} 
              highlight
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-32 bg-[#031f41] px-6 lg:px-12 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-20">
            <h2 className="text-sm font-bold tracking-[0.2em] text-[#b0c7f1] uppercase mb-4">Experience</h2>
            <h3 className="text-4xl md:text-5xl font-bold">Career Progression</h3>
          </div>
          
          <div className="space-y-24">
            <ExperienceItem 
              date="DEC 2025 — MAR 2026"
              role="Full-stack Developer Intern"
              company="Arctic Carbon Tech"
              achievements={[
                "Performed black-box API testing via Postman for data mapping.",
                "Built responsive, scalable UIs with Next.js, Tailwind CSS, and Storybook using design tokens.",
                "Implemented in-app camera restriction for the Azolla App to prevent retrospective uploads.",
                "Conducted Pre-UAT for ERP modules and created technical user manuals guide."
              ]}
            />
            <ExperienceItem 
              date="APRIL — MAY 2025"
              role="Backend Developer Intern"
              company="One Geo Survey"
              achievements={[
                "Designed and implemented relational database schemas using Navicat.",
                "Developed efficient RESTful APIs using Go (Golang) to handle business logic.",
                "Conducted API testing via Postman to ensure pre-deployment stability.",
                "Performed Code Review & Project Management via Git Version Control in GitLab."
              ]}
            />
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-sm font-bold tracking-widest text-[#2b6485] uppercase mb-4">Featured Work</h2>
              <h3 className="text-4xl font-bold text-[#031f41]">Technical Portfolio</h3>
            </div>
            <p className="text-[#44474e] max-w-md text-right hidden md:block">
              A selection of projects that demonstrate expertise in full-stack architecture, API design, and modern frontend technologies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ProjectCard 
              title="Geospatial API Services"
              tags="GO • POSTGRESQL • GITLAB"
              description="Backend infrastructure for Surveying data, featuring complex SQL queries and robust Go handlers developed during One Geo Survey internship."
              image="https://picsum.photos/seed/geospatial/800/500"
            />
            <ProjectCard 
              title="Azolla App UI System"
              tags="NEXT.JS • TAILWIND • STORYBOOK"
              description="A design-token based UI library and ERP module frontend built during Arctic Carbon Tech internship with high focus on responsiveness."
              image="https://picsum.photos/seed/ui-system/800/500"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 px-6 lg:px-12 bg-[#f2f4f6]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-sm font-bold tracking-widest text-[#2b6485] uppercase mb-4">Get in Touch</h2>
              <h3 className="text-5xl font-extrabold text-[#031f41] mb-8 tracking-tighter">
                Let's build something <span className="bg-gradient-to-r from-[#031f41] to-[#2b6485] bg-clip-text text-transparent">remarkable.</span>
              </h3>
              <p className="text-[#44474e] text-lg mb-12 max-w-md">
                Currently open for junior developer roles or interesting project collaborations.
              </p>
              
              <div className="space-y-8">
                <ContactInfo icon={<Phone size={20} />} label="Phone" value="064-992-9715" />
                <ContactInfo icon={<Mail size={20} />} label="Email" value="akeburut.p@kkumail.com" />
                <ContactInfo icon={<MapPin size={20} />} label="Location" value="252/16 Charan Sanit Wong Rd, Ban Chang Lo, Bangkok Noi, Bangkok 10700" />
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
          <span className="text-lg font-bold text-[#031f41]">Akeburut P.</span>
          <p className="text-sm uppercase tracking-widest text-[#44474e] text-center">
            © 2024 Built with Technical Precision.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[#44474e] hover:text-[#031f41] transition-all"><Github size={20} /></a>
            <a href="#" className="text-[#44474e] hover:text-[#031f41] transition-all"><Linkedin size={20} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SkillCard({ icon, title, skills, dark = false, highlight = false }: { icon: React.ReactNode, title: string, skills: string[], dark?: boolean, highlight?: boolean }) {
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

function ExperienceItem({ date, role, company, achievements }: { date: string, role: string, company: string, achievements: string[] }) {
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

function ProjectCard({ title, tags, description, image }: { title: string, tags: string, description: string, image: string }) {
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
