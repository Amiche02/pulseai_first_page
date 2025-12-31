
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
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
          <button className="hover:text-slate-800 transition-colors">Paramètres</button>
        </div>
        <div className="w-10 h-10 rounded-full border border-slate-200 overflow-hidden shadow-sm cursor-pointer hover:ring-2 hover:ring-[#90CAF9] transition-all">
          <img 
            src="https://picsum.photos/seed/user123/100/100" 
            alt="User Avatar" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
