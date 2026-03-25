import React from "react";
import { Github, Linkedin } from "lucide-react";

export default function Footer({ data }: { data: any }) {
  return (
    <footer className="bg-white py-12 border-t border-[#c4c6cf]/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <span className="text-lg font-bold text-[#031f41]">{data.name}</span>
        <p className="text-sm uppercase tracking-widest text-[#44474e] text-center">
          {data.copyright}
        </p>
        <div className="flex gap-6">
          <a href={data.socials.github} className="text-[#44474e] hover:text-[#031f41] transition-all"><Github size={20} /></a>
          <a href={data.socials.linkedin} className="text-[#44474e] hover:text-[#031f41] transition-all"><Linkedin size={20} /></a>
        </div>
      </div>
    </footer>
  );
}
