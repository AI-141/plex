import React from 'react';
import { Layers } from 'lucide-react';

interface NavbarProps {
  onNavigate?: (page: string) => void;
  currentPage?: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage = 'product' }) => {
  const handleNav = (e: React.MouseEvent, page: string) => {
    e.preventDefault();
    if (onNavigate) onNavigate(page);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={(e) => handleNav(e, 'product')}
          >
            <Layers className="h-6 w-6 text-slate-900" />
            <span className="font-bold text-lg text-slate-900 tracking-tight">MarginPlex</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={(e) => handleNav(e, 'product')}
              className={`text-sm font-medium transition-colors ${currentPage === 'product' ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Product
            </button>
            <button 
              onClick={(e) => handleNav(e, 'company')}
              className={`text-sm font-medium transition-colors ${currentPage === 'company' ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Company
            </button>
          </div>

          <div>
            <button 
              onClick={(e) => handleNav(e, 'early-access')}
              className="bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors shadow-sm shadow-primary-200"
            >
              Early access
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;