import React, { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const EarlyAccess: React.FC = () => {
  const [goals, setGoals] = useState<string[]>([]);
  const [motion, setMotion] = useState<string[]>([]);

  const toggleSelection = (list: string[], setList: (l: string[]) => void, value: string) => {
    if (list.includes(value)) {
      setList(list.filter(g => g !== value));
    } else {
      setList([...list, value]);
    }
  };

  return (
    <div className="min-h-screen bg-[#FCFAF8] pt-32 pb-24 px-4 font-sans">
      <div className="max-w-[640px] mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-[1.1]">
            Sales just got better.<br />
            Sign up today.
          </h1>
          <p className="text-lg md:text-xl text-slate-600">
            Please let us know what your sales needs are.
          </p>
        </div>

        <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label className="block text-[15px] font-medium text-slate-900">Email*</label>
            <input 
              type="email" 
              placeholder="Enter email address"
              className="w-full bg-white border-none rounded-xl px-5 py-4 text-slate-900 shadow-sm ring-1 ring-transparent focus:ring-slate-200 outline-none placeholder:text-slate-400 transition-all text-base"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-[15px] font-medium text-slate-900">Company name*</label>
            <input 
              type="text" 
              placeholder="Enter your company name"
              className="w-full bg-white border-none rounded-xl px-5 py-4 text-slate-900 shadow-sm ring-1 ring-transparent focus:ring-slate-200 outline-none placeholder:text-slate-400 transition-all text-base"
            />
          </div>

          <div className="space-y-3">
            <label className="block text-[15px] font-medium text-slate-900">What do you need help with the most?*</label>
            <div className="space-y-3">
              {[
                "Improving lead qualification",
                "Automating product demos",
                "Reducing sales cycle length"
              ].map((item) => (
                <div 
                  key={item}
                  onClick={() => toggleSelection(goals, setGoals, item)}
                  className="bg-white p-4 rounded-xl flex items-center space-x-3 cursor-pointer shadow-sm hover:shadow-md transition-shadow select-none group"
                >
                  <div className={`w-6 h-6 rounded-md border transition-colors flex items-center justify-center flex-shrink-0 ${goals.includes(item) ? 'bg-slate-900 border-slate-900' : 'border-slate-200 bg-slate-50 group-hover:border-slate-300'}`}>
                    {goals.includes(item) && <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>}
                  </div>
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <label className="block text-[15px] font-medium text-slate-900">What is your primary sales motion?*</label>
            <div className="space-y-3">
              {[
                "Product-led Growth (PLG)",
                "Sales-led Growth (SLG)",
                "Hybrid Model"
              ].map((item) => (
                <div 
                  key={item}
                  onClick={() => toggleSelection(motion, setMotion, item)}
                  className="bg-white p-4 rounded-xl flex items-center space-x-3 cursor-pointer shadow-sm hover:shadow-md transition-shadow select-none group"
                >
                  <div className={`w-6 h-6 rounded-md border transition-colors flex items-center justify-center flex-shrink-0 ${motion.includes(item) ? 'bg-slate-900 border-slate-900' : 'border-slate-200 bg-slate-50 group-hover:border-slate-300'}`}>
                    {motion.includes(item) && <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>}
                  </div>
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* New Highlight Question */}
          <div className="space-y-2">
            <label className="block text-[15px] font-medium text-slate-900">Is there anything else you'd like to highlight?</label>
            <div className="relative">
              <textarea 
                placeholder="Add additional information"
                className="w-full bg-white border-none rounded-xl px-5 py-4 text-slate-900 shadow-sm ring-1 ring-transparent focus:ring-slate-200 outline-none placeholder:text-slate-400 transition-all text-base min-h-[140px] resize-none"
              />
            </div>
          </div>

          <div className="pt-8">
             <button className="w-full bg-primary-600 hover:bg-primary-700 text-white text-lg font-medium py-4 rounded-xl shadow-lg shadow-primary-600/20 transition-all hover:translate-y-[-1px] flex items-center justify-center space-x-2">
               <span>Submit</span>
               <div className="bg-white/20 rounded-full p-1">
                 <ArrowRight className="w-4 h-4" />
               </div>
             </button>
             
             <div className="mt-4 flex justify-center">
                 <div className="w-12 h-1.5 bg-slate-300 rounded-full"></div>
             </div>
          </div>

        </form>
      </div>
    </div>
  );
};

export default EarlyAccess;