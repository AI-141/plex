import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onNavigate?: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center pt-20 pb-20 overflow-hidden bg-[#FCFAF8]">
      
      {/* Side Gradients (Edges) */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-[600px] h-[800px] bg-primary-600/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-[600px] h-[800px] bg-primary-600/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Tiled Background with Center Fade Out */}
      <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none select-none">
        <div 
           className="w-[150vw] h-[150vh] grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-4"
           style={{ 
             maskImage: 'radial-gradient(circle at center, transparent 10%, black 80%)',
             WebkitMaskImage: 'radial-gradient(circle at center, transparent 10%, black 80%)',
             transform: 'translateY(-10%)' 
           }}
        >
           {Array.from({ length: 250 }).map((_, i) => (
             <div 
                key={i} 
                className="w-full aspect-square rounded-[2rem] border border-slate-100 bg-white/30 shadow-[inset_0_0_20px_rgba(255,255,255,0.5)]"
             />
           ))}
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        
        {/* Badge with Cursor */}
        <div className="relative inline-block mb-12">
           <div className="px-5 py-2 rounded-full border border-slate-200 bg-white/80 backdrop-blur-sm shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)]">
             <span className="text-sm text-slate-600 font-medium tracking-tight">Introducing Plex AI, your AI Demo Agent</span>
           </div>

           {/* Floating Cursor Element (Enlarged) */}
           <div className="absolute -right-20 -top-6 flex flex-col items-start animate-bounce" style={{ animationDuration: '3s' }}>
              {/* Cursor Arrow */}
              <svg className="w-12 h-12 text-[#714CB6] fill-current drop-shadow-md relative z-20" viewBox="0 0 24 24" style={{ transform: 'rotate(-15deg)' }}>
                  <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" stroke="white" strokeWidth="1.5" />
              </svg>
              {/* Tooltip Label */}
              <div className="bg-[#714CB6] text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-lg flex items-center space-x-2 -mt-3 ml-5 relative z-10 transform rotate-[-2deg]">
                 {/* Sound wave icon */}
                 <div className="flex items-center space-x-[3px] h-4">
                    <div className="w-[3px] h-2 bg-white rounded-full animate-pulse"></div>
                    <div className="w-[3px] h-4 bg-white rounded-full animate-pulse delay-75"></div>
                    <div className="w-[3px] h-3 bg-white rounded-full animate-pulse delay-150"></div>
                    <div className="w-[3px] h-2 bg-white rounded-full animate-pulse delay-150"></div>
                 </div>
                 <span>Plex</span>
              </div>
           </div>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-semibold text-slate-900 tracking-tight mb-8 leading-[1.15]">
          Reimagining Sales Demos<br />
          with Humane AI.
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-[1.15rem] text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed font-normal">
          Give every visitor a 1:1 product experience. Visitors explore your product, 
          ask questions, and raise objections. Plex AI captures every signal and 
          delivers fully qualified, high-intent leads to sales.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button 
            onClick={() => onNavigate?.('early-access')}
            className="group flex items-center pl-1.5 pr-6 py-1.5 bg-[#714CB6] hover:bg-[#6241a0] text-white rounded-xl transition-all shadow-xl shadow-primary-900/10 hover:shadow-primary-900/20 active:scale-95"
          >
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-3 shadow-sm group-hover:scale-105 transition-transform">
               <ArrowRight className="w-5 h-5 text-[#714CB6]" strokeWidth={2.5} />
            </div>
            <span className="font-medium text-lg">Get early access</span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;