
import React, { useState, useRef, useEffect } from 'react';
import { User, Settings, CreditCard, LogOut, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="w-full max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative z-50">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center">
          <div className="w-4 h-4 rounded-full bg-[#90CAF9]" />
        </div>
        <span className="text-xl font-semibold tracking-tight text-slate-800">Hello Pulse</span>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-500 mr-4">
          <button className="hover:text-slate-800 transition-colors">Aperçu</button>
          <button className="hover:text-slate-800 transition-colors">Projets</button>
        </div>

        <div className="relative" ref={menuRef}>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center gap-2 p-0.5 rounded-full hover:bg-slate-100 transition-colors focus:outline-none"
          >
            <div className="w-10 h-10 rounded-full border border-slate-200 overflow-hidden shadow-sm hover:ring-2 hover:ring-[#90CAF9] transition-all">
              <img 
                src="https://picsum.photos/seed/user123/100/100" 
                alt="User Avatar" 
                className="w-full h-full object-cover"
              />
            </div>
            <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${isMenuOpen ? 'rotate-180' : ''}`} />
          </button>

          {isMenuOpen && (
            <div className="absolute right-0 mt-3 w-64 bg-white rounded-xl shadow-xl border border-slate-100 py-2 animate-in fade-in zoom-in duration-150 origin-top-right">
              {/* Profile Header */}
              <div className="px-4 py-3 border-bottom">
                <p className="text-sm font-semibold text-slate-800 leading-none">Stéphane Rico</p>
                <p className="text-xs text-slate-400 mt-1 leading-none">stephane@hellopulse.io</p>
              </div>

              <div className="h-px bg-slate-100 my-1" />

              {/* Options */}
              <div className="px-2">
                <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-lg transition-colors group">
                  <User className="w-4 h-4 text-slate-400 group-hover:text-[#90CAF9]" />
                  Mon Profil
                </button>
                <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-lg transition-colors group">
                  <Settings className="w-4 h-4 text-slate-400 group-hover:text-[#90CAF9]" />
                  Paramètres
                </button>
                <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-lg transition-colors group">
                  <CreditCard className="w-4 h-4 text-slate-400 group-hover:text-[#90CAF9]" />
                  Facturation
                </button>
              </div>

              <div className="h-px bg-slate-100 my-1" />

              {/* Logout */}
              <div className="px-2">
                <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-rose-500 hover:bg-rose-50 rounded-lg transition-colors">
                  <LogOut className="w-4 h-4" />
                  Déconnexion
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
