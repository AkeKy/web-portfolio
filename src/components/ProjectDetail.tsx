import React, { useEffect } from 'react';

interface ProjectDetailProps {
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ onBack }) => {
  // Scroll to top when mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-surface font-body text-on-surface selection:bg-secondary-container selection:text-on-secondary-container min-h-screen">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-white/70 dark:bg-[#031f41]/70 backdrop-blur-xl no-border tonal-shift-surface-container-low">
        <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <button onClick={onBack} className="active:scale-95 duration-200 hover:opacity-80 transition-opacity flex items-center">
              <span className="material-symbols-outlined text-[#031f41] dark:text-[#a3d8fe]">arrow_back</span>
            </button>
            <span className="text-xl font-extrabold text-[#031f41] dark:text-white uppercase tracking-tighter font-headline">The Digital Scholar</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <button onClick={onBack} className="text-[#191c1e] dark:text-slate-300 hover:opacity-80 transition-opacity font-bold font-headline">Home</button>
            <button className="text-[#2b6485] dark:text-[#a3d8fe] font-bold font-headline">Projects</button>
            <button className="text-[#191c1e] dark:text-slate-300 hover:opacity-80 transition-opacity font-bold font-headline">Resume</button>
            <button className="text-[#191c1e] dark:text-slate-300 hover:opacity-80 transition-opacity font-bold font-headline">Contact</button>
          </div>
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-[#031f41] dark:text-[#a3d8fe] cursor-pointer">share</span>
            <span className="material-symbols-outlined text-[#031f41] dark:text-[#a3d8fe] cursor-pointer">open_in_new</span>
          </div>
        </div>
      </header>

      <main className="pt-24 pb-32">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <div>
              <span className="inline-block py-1 px-3 bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold tracking-widest uppercase mb-6 font-label">Backend Architecture</span>
              <h1 className="text-5xl md:text-7xl font-extrabold font-headline text-primary tracking-tight leading-[1.1] mb-6">
                Geospatial API Services
              </h1>
              <p className="text-xl md:text-2xl text-secondary font-medium leading-relaxed max-w-xl">
                Robust Backend Infrastructure for Surveying Data
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mb-2 lg:justify-end">
              <a href="#" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-primary-container text-white rounded-md font-bold text-sm tracking-wide shadow-lg shadow-primary/10 hover:opacity-90 transition-all active:scale-95">
                View Live Project
                <span className="material-symbols-outlined ml-2 text-sm">rocket_launch</span>
              </a>
              <a href="#" className="inline-flex items-center justify-center px-8 py-4 border border-outline-variant/30 text-secondary rounded-md font-bold text-sm tracking-wide hover:bg-surface-container-low transition-all active:scale-95">
                View Code on GitLab
                <span className="material-symbols-outlined ml-2 text-sm">code</span>
              </a>
            </div>
          </div>
        </section>

        {/* Large Showcase Section */}
        <section className="mb-24 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-primary/5 group">
              <img 
                alt="Geospatial API Visualization" 
                className="w-full h-[500px] md:h-[700px] object-cover transition-transform duration-700 group-hover:scale-105" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIwNQPLjQj2BlcUnyuIx2BcqdofNnY_6IeCFu2-zbYOfiGzafdaA9VHOsz64GIG8_Xb6MHCvzB3-gMXmZQFRcg8W7P9LCbBs-S7zBqfPW03AJofEVbUIbB7Ic57zTvYWQv0KT7EiMPLdT46qvJbHvbyKs974X1xsp246v8tDXpGbXSpfsONEPklEdLK2iR2k73HD-9KatIgG58Xe9O-WQSePvmtIud_re-WUCOEe8H3b4vrJfJfd-IB1_zJlB-EKvvzLiGRjdHckY"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </section>

        {/* Project Overview & Tech Stack */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8">
              <h2 className="text-3xl font-extrabold font-headline text-primary mb-8 tracking-tight">Project Overview</h2>
              <div className="prose prose-lg max-w-none text-on-surface-variant leading-relaxed space-y-6">
                <p className="text-xl">
                  To streamline development for Arctic Carbon Tech's ERP modules, I developed a high-performance backend using Go and PostGIS. The system acts as the central intelligence hub for processing large-scale environmental surveying datasets, ensuring precision and reliability in spatial calculations.
                </p>
              </div>
              <div className="mt-16 bg-surface-container-low p-8 md:p-12 rounded-xl border-l-4 border-secondary">
                <h3 className="text-xl font-bold font-headline text-primary mb-6">Key Features</h3>
                <ul className="grid md:grid-cols-2 gap-6">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary mt-0.5">query_stats</span>
                    <div>
                      <span className="font-bold block text-primary">Complex SQL queries</span>
                      <span className="text-sm text-on-surface-variant">Optimized procedural logic for multi-table joins.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary mt-0.5">map</span>
                    <div>
                      <span className="font-bold block text-primary">PostGIS integrations</span>
                      <span className="text-sm text-on-surface-variant">Seamless spatial data indexing and geometric operations.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary mt-0.5">speed</span>
                    <div>
                      <span className="font-bold block text-primary">Sub-second latency</span>
                      <span className="text-sm text-on-surface-variant">Highly efficient concurrent request handling in Go.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary mt-0.5">architecture</span>
                    <div>
                      <span className="font-bold block text-primary">Scalable architecture</span>
                      <span className="text-sm text-on-surface-variant">Modular design ready for horizontal expansion.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="lg:col-span-4 space-y-12">
              <div>
                <h3 className="text-xs font-bold font-label text-on-surface-variant tracking-[0.2em] uppercase mb-6">Technology Stack</h3>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-secondary-container text-on-secondary-container rounded-full text-sm font-bold font-label">Go</span>
                  <span className="px-4 py-2 bg-secondary-container text-on-secondary-container rounded-full text-sm font-bold font-label">PostgreSQL</span>
                  <span className="px-4 py-2 bg-secondary-container text-on-secondary-container rounded-full text-sm font-bold font-label">PostGIS</span>
                  <span className="px-4 py-2 bg-secondary-container text-on-secondary-container rounded-full text-sm font-bold font-label">GitLab</span>
                </div>
              </div>
              <div>
                <h3 className="text-xs font-bold font-label text-on-surface-variant tracking-[0.2em] uppercase mb-4">Project Context</h3>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-outline-variant/20 pb-2">
                    <span className="text-on-surface-variant font-medium">Client</span>
                    <span className="text-primary font-bold">Arctic Carbon Tech</span>
                  </div>
                  <div className="flex justify-between border-b border-outline-variant/20 pb-2">
                    <span className="text-on-surface-variant font-medium">Industry</span>
                    <span className="text-primary font-bold">Environmental ERP</span>
                  </div>
                  <div className="flex justify-between border-b border-outline-variant/20 pb-2">
                    <span className="text-on-surface-variant font-medium">Role</span>
                    <span className="text-primary font-bold">Backend Engineer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenges & Solutions Section */}
        <section className="bg-primary py-24 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl font-extrabold font-headline mb-8 tracking-tight">Challenges &amp; Solutions</h2>
                <div className="space-y-12 relative">
                  <div className="pl-8 relative">
                    <div className="absolute left-0 top-0 h-full w-[2px] bg-secondary opacity-30"></div>
                    <h4 className="text-xl font-bold font-headline mb-4 text-secondary-fixed">The Technical Hurdle</h4>
                    <p className="text-on-primary-container leading-relaxed">
                      Performing real-time distance calculations across millions of GPS coordinates was causing significant memory spikes and timing out frontend requests during peak surveying seasons.
                    </p>
                  </div>
                  <div className="pl-8 relative">
                    <div className="absolute left-0 top-0 h-full w-[2px] bg-secondary opacity-100"></div>
                    <h4 className="text-xl font-bold font-headline mb-4 text-on-secondary-container">The Architectural Solution</h4>
                    <p className="text-on-primary-container leading-relaxed">
                      I implemented a GIST (Generalized Search Tree) indexing strategy within PostGIS and refactored the Go service to utilize a worker-pool pattern. This decoupled the ingestion of data from the computation layer, reducing memory consumption by 60% and ensuring sub-second response times even under heavy load.
                    </p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="bg-white/5 backdrop-blur-sm p-1 rounded-2xl border border-white/10 shadow-inner">
                  <div className="p-6 md:p-10 space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center">
                        <span className="material-symbols-outlined text-[#031f41]">analytics</span>
                      </div>
                      <h4 className="text-lg font-bold">Performance Impact</h4>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-primary-container p-4 rounded-xl">
                        <span className="block text-2xl font-extrabold text-secondary-fixed">92%</span>
                        <span className="text-xs uppercase tracking-widest font-label opacity-70">Query Speedup</span>
                      </div>
                      <div className="bg-primary-container p-4 rounded-xl">
                        <span className="block text-2xl font-extrabold text-secondary-fixed">0ms</span>
                        <span className="text-xs uppercase tracking-widest font-label opacity-70">Data Loss</span>
                      </div>
                    </div>
                    <p className="text-sm italic opacity-60 font-body">
                      "The backend infrastructure remained stable during our largest field campaign to date, processing over 500 requests per second with zero downtime."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold font-headline text-primary mb-6">Interested in the architecture?</h2>
          <p className="text-on-surface-variant mb-10 max-w-xl mx-auto">
            Discover the full implementation details and technical documentation on my GitLab repository or view the live ERP dashboard.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#" className="inline-flex items-center justify-center px-10 py-5 bg-primary text-white rounded-md font-bold text-base tracking-wide shadow-xl shadow-primary/20 hover:scale-[1.02] transition-transform active:scale-95">
              Explore Codebase
            </a>
            <a href="#" className="inline-flex items-center justify-center px-10 py-5 bg-secondary-container text-on-secondary-container rounded-md font-bold text-base tracking-wide hover:scale-[1.02] transition-transform active:scale-95">
              Live Demo
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProjectDetail;
