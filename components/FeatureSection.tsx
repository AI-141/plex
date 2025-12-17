import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeaturePoint {
  icon: LucideIcon;
  text: string;
}

interface FeatureSectionProps {
  pill: string;
  title: string;
  description: string;
  points: FeaturePoint[];
  visual: React.ReactNode;
  align?: 'left' | 'right';
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ 
  pill, 
  title, 
  description, 
  points, 
  visual,
  align = 'left' 
}) => {
  return (
    <div className="py-20 md:py-32">
      <div className={`flex flex-col md:flex-row items-center gap-16 ${align === 'right' ? 'md:flex-row-reverse' : ''}`}>
        
        {/* Content Side */}
        <div className="flex-1 w-full">
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-white border border-slate-200">
            <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">{pill}</span>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            {title}
          </h3>
          
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            {description}
          </p>

          <div className="space-y-4">
            {points.map((point, idx) => (
              <div key={idx} className="flex items-center space-x-3">
                <point.icon className="w-5 h-5 text-slate-900" />
                <span className="text-sm font-medium text-slate-700">{point.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Side */}
        <div className="flex-1 w-full flex justify-center">
            {visual}
        </div>

      </div>
    </div>
  );
};

export default FeatureSection;