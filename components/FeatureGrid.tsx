import React from 'react';
import { 
  Scan, Upload, Zap, Mic, 
  FileText, BarChart2, BrainCircuit, MousePointer2,
  Video, Activity, Settings, Smartphone
} from 'lucide-react';

const features = [
  { icon: Scan, title: "AI Spotlight", desc: "Plex AI highlights features during demo." },
  { icon: Upload, title: "Files import", desc: "Import different files through studio." },
  { icon: Zap, title: "Plex AI", desc: "Convert interest into action to get more results." },
  { icon: Mic, title: "Auto-generated voice over", desc: "Add information or embed content anywhere." },
  { icon: FileText, title: "Lead forms", desc: "Capture prospect data seamlessly." },
  { icon: BarChart2, title: "Advanced analytics", desc: "Track demo engagement to understand what matters." },
  { icon: BrainCircuit, title: "Train AI", desc: "Customize Plex AI per persona or use case." },
  { icon: MousePointer2, title: "Click elements", desc: "Plex AI will click through all elements and explain." },
  { icon: Video, title: "Video capture", desc: "Record more videos and live demos." },
  { icon: Activity, title: "Performance metrics", desc: "Personalize your demos dynamically." },
  { icon: Settings, title: "Context-aware", desc: "Easily modify flows by adding or editing steps." },
  { icon: Smartphone, title: "Desktop & mobile", desc: "Align your demos with your customer's brand identity." },
];

const FeatureGrid: React.FC = () => {
  return (
    <section className="py-24 bg-[#FCFAF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider block mb-2">Advanced Features</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Features you will love</h2>
          <p className="text-lg text-slate-600">Drive engagement with most advanced AI demo Agent.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-start">
              <feature.icon className="w-6 h-6 text-slate-900 mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;