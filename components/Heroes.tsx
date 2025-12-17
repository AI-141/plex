import React from 'react';
import { SalesRep, CustomerSuccess, Founder, Revops, Marketer } from './HeroIllustrations';

interface HeroesProps {
  activeRole: string;
  onSelectRole: (role: string) => void;
}

const roles = [
  { Visual: SalesRep, label: "Sales Rep" },
  { Visual: CustomerSuccess, label: "Customer Success" },
  { Visual: Founder, label: "Founder" },
  { Visual: Revops, label: "Revops" },
  { Visual: Marketer, label: "Marketer" },
];

const Heroes: React.FC<HeroesProps> = ({ activeRole, onSelectRole }) => {
  return (
    <section className="pt-24 pb-12 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full border border-slate-200 bg-white mb-6 shadow-sm">
            <span className="text-sm font-medium text-slate-600">Product Need</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Built to power heroes like you
          </h2>
          <p className="text-lg text-slate-600">
            Why heroes like you are building with MarginPlex.
          </p>
        </div>

        {/* Card Grid */}
        <div className="bg-[#FCFAF8] rounded-3xl p-6 md:p-10 border border-slate-100 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {roles.map((role, idx) => {
              const isActive = activeRole === role.label;
              return (
                <div 
                  key={idx} 
                  onClick={() => onSelectRole(role.label)}
                  className="flex flex-col items-center group cursor-pointer"
                >
                  {/* Illustration Card */}
                  <div className={`w-full aspect-square rounded-2xl mb-4 relative overflow-hidden border transition-all duration-300 ${isActive ? 'bg-white border-slate-900 ring-1 ring-slate-900 shadow-md' : 'bg-[#F3F4F6]/50 border-slate-200/50 hover:border-slate-300'}`}>
                     {/* Background Grid Pattern */}
                     <div 
                        className="absolute inset-0 opacity-20" 
                        style={{ 
                          backgroundImage: 'linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)',
                          backgroundSize: '20px 20px'
                        }}
                     ></div>
                     
                     {/* SVG Illustration */}
                     <div className="absolute inset-0 p-4 flex items-center justify-center">
                        <role.Visual />
                     </div>
                  </div>
                  <span className={`text-xs font-bold transition-colors ${isActive ? 'text-slate-900' : 'text-slate-500 group-hover:text-slate-700'}`}>
                    {role.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Heroes;