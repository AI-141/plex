import React from 'react';

const MissionVisual = () => {
  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center">
        {/* Abstract dark tiles background simulation */}
        <div className="relative w-80 h-80">
            {/* Tile 1 (Bottom Right) */}
            <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-[#351e5e] rounded-3xl transform rotate-12 translate-x-4 translate-y-4"></div>
             {/* Tile 2 (Bottom Left) */}
            <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-[#23123d] rounded-3xl transform -rotate-12 -translate-x-20 translate-y-10 opacity-60"></div>
             {/* Tile 3 (Top Right) */}
            <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-[#2d1852] rounded-3xl transform rotate-6 translate-x-16 -translate-y-20 opacity-40"></div>

             {/* Main Center Tile (The Logo Container) */}
            <div className="absolute top-1/2 left-1/2 w-48 h-48 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-[#7c3aed] to-[#5b21b6] rounded-[2rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] flex items-center justify-center transform hover:scale-105 transition-transform duration-500 border-t border-white/20">
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
                
                {/* The Logo 'M' */}
                <svg width="80" height="80" viewBox="0 0 100 100" fill="white" className="drop-shadow-md">
                     <path d="M20 80 V 30 C 20 25 25 20 30 20 H 35 L 50 45 L 65 20 H 70 C 75 20 80 25 80 30 V 80 H 65 V 50 L 50 75 L 35 50 V 80 H 20 Z" />
                </svg>
            </div>
            
            {/* Floating Glass Element */}
             <div className="absolute bottom-10 right-0 w-20 h-20 bg-purple-500/20 backdrop-blur-lg rounded-2xl border border-white/10 transform rotate-[30deg] shadow-xl"></div>
        </div>
    </div>
  );
};

const Company: React.FC = () => {
  return (
    <div className="bg-[#FCFAF8]">
       {/* Header Section */}
       <div className="pt-48 pb-32 md:pt-64 md:pb-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full border border-slate-200 bg-white mb-8 shadow-sm">
            <span className="text-sm font-medium text-slate-600">About Us</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-slate-900 mb-8 tracking-tight leading-[1.1]">
            AI is meaningful when we<br className="hidden md:block"/>
            can naturally interact with it
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight">
             Humane AI is the future of GTM teams.
          </p>
       </div>

       {/* Dark Mission Section */}
       <div className="bg-[#281647] py-24 md:py-32 overflow-hidden relative">
          {/* Background texture */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" 
               style={{ 
                 backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', 
                 backgroundSize: '40px 40px' 
               }}>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
               
               {/* Left Column: Visual */}
               <div className="hidden md:flex justify-center md:justify-start">
                  <MissionVisual />
               </div>
               
               {/* Right Column: Text */}
               <div className="space-y-8 text-lg text-slate-200 leading-relaxed font-normal">
                  <p>
                    We started MarginPlex in response to a growing challenge facing go-to-market teams: customer conversations are happening constantly, but too much of their value is lost before it can drive real impact. Growth today depends on deeply understanding customers across marketing, sales, and customer success — not just collecting data, but turning it into action.
                  </p>
                  <p>
                    MarginPlex is a suite of AI products built for GTM teams, designed to capture, understand, and enrich every customer interaction in real time. From calls and demos to onboarding and support conversations, we transform unstructured dialogue into reliable insights — without hallucinations, delays, or broken context — so teams can focus on building trust and accelerating outcomes.
                  </p>
                  <p>
                    Real-time AI is reshaping how modern GTM teams operate. HumaneAI supports the entire revenue lifecycle: helping sales teams adapt live during conversations, enabling customer success teams to anticipate risk and drive adoption, and empowering marketing teams with authentic voice-of-customer intelligence that fuels smarter campaigns and positioning.
                  </p>
                  <p>
                    Our goal is to create a one-stop MarginPlex platform for GTM execution — where every customer conversation becomes a source of clarity, alignment, and momentum. A foundation for teams who believe that when AI is designed around humans, every conversation truly counts.
                  </p>
               </div>
            </div>
          </div>
       </div>

       {/* Team/Values Section */}
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="bg-white rounded-[2.5rem] border border-slate-100 p-8 md:p-16 lg:p-20 shadow-sm">
             <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-medium text-slate-900 mb-10 leading-[1.2] tracking-tight">
               We are a multidisciplinary team united by a shared belief: AI should elevate the way people work, not replace it. Our mission is to inspire smarter, more human ways of working by building AI that supports real teams solving real problems.
             </h2>
             <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-5xl">
               We are deeply passionate about the technology and relentless in our pursuit of excellence — designing best-in-class models and products that unlock AI’s full potential in practical, trustworthy ways. Everything we build is guided by our core values: being humane in how we design, humble in how we learn, and transparent in how we operate. If our mission resonates with you, we’d love to hear from you.
             </p>
          </div>
       </div>
    </div>
  );
};

export default Company;