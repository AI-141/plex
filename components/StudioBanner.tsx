import React from 'react';
import { Database } from 'lucide-react';

const StudioBanner: React.FC = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-[#1e1b4b] rounded-3xl p-8 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between min-h-[500px]">
        {/* Background Patterns */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-800/30 rounded-full blur-3xl pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>

        <div className="relative z-10 max-w-lg mb-12 md:mb-0">
          <span className="inline-block bg-white/10 text-white/80 text-xs font-semibold px-3 py-1 rounded-full mb-6 border border-white/10">
            POWERED BY STUDIO
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Studio for Agent's Source of Truth
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            Upload videos, docs, and links into one studio so your AI agent learns directly from your product knowledge.
          </p>
        </div>

        <div className="relative z-10 flex-shrink-0 flex justify-center w-full md:w-auto">
           {/* Abstract Stack Graphic */}
           <div className="relative w-80 h-80">
                {/* Tile 1 (Bottom Right) */}
                <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-primary-800 rounded-3xl transform rotate-12 translate-x-4 translate-y-4 shadow-lg"></div>
                 {/* Tile 2 (Bottom Left) */}
                <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-primary-950 rounded-3xl transform -rotate-12 -translate-x-20 translate-y-10 opacity-60 border border-white/10"></div>
                 {/* Tile 3 (Top Right) */}
                <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-primary-700 rounded-3xl transform rotate-6 translate-x-16 -translate-y-20 opacity-40"></div>

                 {/* Main Center Tile (The Logo Container) */}
                <div className="absolute top-1/2 left-1/2 w-48 h-48 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-primary-500 to-primary-700 rounded-[2rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] flex items-center justify-center transform hover:scale-105 transition-transform duration-500 border-t border-white/20">
                    <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
                    
                    {/* Icon */}
                    <Database className="w-20 h-20 text-white drop-shadow-md" />
                </div>
                
                {/* Floating Glass Element */}
                 <div className="absolute bottom-10 right-0 w-20 h-20 bg-primary-400/20 backdrop-blur-lg rounded-2xl border border-white/10 transform rotate-[30deg] shadow-xl"></div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default StudioBanner;