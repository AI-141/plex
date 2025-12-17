import React from 'react';
import { Sparkles, Layers, Twitter, Youtube, Linkedin } from 'lucide-react';

interface FooterProps {
  onNavigate?: (page: string) => void;
  showCta?: boolean;
}

const Footer: React.FC<FooterProps> = ({ onNavigate, showCta = true }) => {
  return (
    <footer className="bg-[#1e1b4b] text-white">
      {/* CTA Section */}
      {showCta && (
        <div className="py-24 px-4 text-center border-b border-white/10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Start your AI powered sales<br/>journey .</h2>
          <div className="flex justify-center">
            <button 
              onClick={() => onNavigate?.('early-access')}
              className="flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <Sparkles className="w-4 h-4" />
              <span>Get early access</span>
            </button>
          </div>
        </div>
      )}

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Layers className="h-6 w-6 text-white" />
              <span className="font-bold text-lg tracking-tight">MarginPlex</span>
            </div>
            <p className="text-slate-400 text-sm">Made in San Francisco.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Youtube className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          <div className="flex flex-wrap gap-8 md:gap-16">
            <button onClick={() => onNavigate?.('product')} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Product</button>
            <button onClick={() => onNavigate?.('company')} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Company</button>
            <button onClick={() => onNavigate?.('early-access')} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Early access</button>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
           <p>marginplex.com - 2025</p>
           <div className="flex space-x-6">
             <a href="#" className="hover:text-slate-300">Privacy Policy</a>
             <a href="#" className="hover:text-slate-300">Terms & Conditions</a>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;