import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import profileImg from "../assets/4537.jpg";

export default function Hero({ data }: { data: any }) {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden px-6 py-20 lg:px-12">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-12 gap-8 items-center">
        <motion.div
          className="col-span-12 lg:col-span-7 z-10"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#d5e3ff] text-[#001b3c] text-xs font-bold tracking-widest uppercase mb-6">
            {data.status}
          </span>
          <h1 className="text-6xl md:text-8xl font-bold text-[#031f41] leading-[0.9] tracking-tighter mb-8">
            {data.firstName} <br />
            <span className="bg-gradient-to-r from-[#031f41] to-[#2b6485] bg-clip-text text-transparent">
              {data.lastName}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-[#44474e] max-w-xl mb-10 leading-relaxed">
            {data.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-[#031f41] text-white rounded-md font-bold flex items-center gap-2 hover:opacity-90 transition-all shadow-lg shadow-[#031f41]/20">
              {data.primaryButton} <ArrowRight size={18} />
            </button>
            <button className="px-8 py-4 border-2 border-[#c4c6cf] text-[#031f41] rounded-md font-bold hover:bg-[#eceef0] transition-all">
              {data.secondaryButton}
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
              {data.quote}
            </p>
          </div>
        </motion.div>
      </div>

      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#b0c7f1]/20 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-[#a3d8fe]/30 blur-[100px] rounded-full -z-10" />
    </section>
  );
}
