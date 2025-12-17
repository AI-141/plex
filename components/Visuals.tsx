import React from 'react';
import { Play, Pause, Link, Copy, Video, Square, Zap, BarChart3, Activity, PieChart, RefreshCcw, Lock, Ruler, Search } from 'lucide-react';

// Common grid container style
const GridContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="relative w-full max-w-md aspect-square bg-[#FCFAF8]/50 rounded-3xl p-8 grid grid-cols-3 gap-4 shadow-inner border border-slate-100">
    {children}
  </div>
);

// Helper for a grid cell
const Cell: React.FC<{ 
  active?: boolean; 
  color?: 'purple' | 'white'; 
  icon?: React.ReactNode 
}> = ({ active, color = 'white', icon }) => {
  if (!active) return <div className="bg-white rounded-2xl shadow-sm border border-slate-100/50 opacity-40"></div>;
  
  const bgClass = color === 'purple' 
    ? 'bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-lg shadow-primary-500/30' 
    : 'bg-white text-slate-900 shadow-md border border-slate-100';

  return (
    <div className={`rounded-2xl flex items-center justify-center ${bgClass} transition-transform hover:scale-105 duration-300`}>
      {icon}
    </div>
  );
};

export const LiveDemoVisual = () => (
  <GridContainer>
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell active color="white" icon={<Pause className="w-6 h-6 fill-slate-800" />} />
    <Cell active color="purple" icon={<Play className="w-6 h-6 fill-white" />} />
    <Cell />
    <Cell />
    <Cell />
    {/* Floating backdrop decoration */}
    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/50 to-white/0 pointer-events-none rounded-3xl"></div>
  </GridContainer>
);

export const TrainPlexVisual = () => (
  <GridContainer>
    <Cell />
    <Cell active color="purple" icon={<Link className="w-6 h-6" />} />
    <Cell />
    <Cell />
    <Cell active color="purple" icon={<Copy className="w-6 h-6" />} />
    <Cell />
    <Cell />
    <Cell active color="purple" icon={<Video className="w-6 h-6" />} />
    <Cell />
  </GridContainer>
);

export const AiPoweredVisual = () => (
    <div className="relative w-full max-w-md aspect-square bg-[#FCFAF8] rounded-3xl p-8 flex items-center justify-center">
        <div className="grid grid-cols-2 gap-2">
            <div className="w-24 h-12 bg-slate-200 rounded-lg shadow-sm"></div>
            <div className="w-24 h-12 bg-slate-200 rounded-lg shadow-sm"></div>
            <div className="w-24 h-12 bg-white rounded-lg shadow-md flex items-center justify-center border border-slate-100 relative overflow-visible">
                <span className="w-8 h-1 bg-slate-300 rounded-full"></span>
                 <div className="absolute -right-12 -top-4 bg-primary-600 text-white text-[10px] px-2 py-1 rounded shadow-lg flex items-center space-x-1">
                    <Zap className="w-3 h-3" />
                    <span>Plex</span>
                 </div>
            </div>
            <div className="w-24 h-12 bg-slate-200 rounded-lg shadow-sm"></div>
        </div>
    </div>
);

export const AnalyticsVisual = () => (
  <GridContainer>
    <Cell active color="purple" icon={<Zap className="w-6 h-6" />} />
    <Cell />
    <Cell active color="purple" icon={<BarChart3 className="w-6 h-6" />} />
    <Cell />
    <Cell />
    <Cell />
    <Cell active color="purple" icon={<Activity className="w-6 h-6" />} />
    <Cell />
    <Cell active color="purple" icon={<PieChart className="w-6 h-6" />} />
  </GridContainer>
);

export const ConnectVisual = () => (
  <GridContainer>
    <Cell active color="white" icon={<img src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" className="w-8 h-8 object-contain" alt="SF" />} />
    <Cell />
    <Cell active color="white" icon={<div className="w-8 h-8 rounded-full bg-indigo-900 flex items-center justify-center text-white font-bold">A</div>} />
    <Cell />
    <Cell />
    <Cell />
    <Cell active color="white" icon={<div className="flex space-x-1 items-end h-6"><div className="w-2 h-3 bg-yellow-400 rounded-sm"></div><div className="w-2 h-6 bg-yellow-400 rounded-sm"></div><div className="w-2 h-4 bg-yellow-400 rounded-sm"></div></div>} />
    <Cell />
    <Cell active color="white" icon={<img src="https://upload.wikimedia.org/wikipedia/commons/1/15/HubSpot_Logo.svg" className="w-8 h-8 object-contain" alt="HS" />} />
  </GridContainer>
);