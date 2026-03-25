import React from "react";
import { motion } from "motion/react";
import { Phone, Mail, MapPin } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

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

export default function Contact({ data }: { data: any }) {
  return (
    <section className="py-32 px-6 lg:px-12 bg-[#f2f4f6]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-[#2b6485] uppercase mb-4">{data.sectionTitle}</h2>
            <h3 className="text-5xl font-extrabold text-[#031f41] mb-8 tracking-tighter" dangerouslySetInnerHTML={{ __html: data.title }} />
            <p className="text-[#44474e] text-lg mb-12 max-w-md">
              {data.description}
            </p>

            <div className="space-y-8">
              <ContactInfo icon={<Phone size={20} />} label="Phone" value={data.phone} />
              <ContactInfo icon={<Mail size={20} />} label="Email" value={data.email} />
              <ContactInfo icon={<MapPin size={20} />} label="Location" value={data.location} />
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
  );
}
