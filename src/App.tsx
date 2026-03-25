/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import enData from "./locales/en.json";

import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectDetail from "./components/ProjectDetail";

export default function App() {
  const { hero, about, skills, experience, projects, contact, footer } = enData as any;
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  if (selectedProject) {
    return <ProjectDetail onBack={() => setSelectedProject(null)} />;
  }

  return (
    <div className="min-h-screen bg-[#f7f9fb] font-sans text-[#191c1e] selection:bg-[#a3d8fe] selection:text-[#001e2e]">
      <Hero data={hero} />
      <About data={about} />
      <Skills data={skills} />
      <Experience data={experience} />
      <Projects data={projects} onSelectProject={setSelectedProject} />
      <Contact data={contact} />
      <Footer data={footer} />
    </div>
  );
}
