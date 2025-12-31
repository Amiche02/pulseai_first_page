
import React from 'react';
import { Plus } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="mt-8 mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 bg-white p-10 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col justify-center">
          <h1 className="font-serif-modern text-4xl md:text-5xl text-slate-800 mb-3">
            Bonjour, Stéphane.
          </h1>
          <p className="text-slate-500 text-lg md:text-xl font-light">
            Prêt à libérer votre créativité ?
          </p>
        </div>
        
        <div className="lg:col-span-4 bg-[#90CAF9] p-8 rounded-[2rem] shadow-sm flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-[#A5D8FF] transition-all duration-300">
          <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Plus className="text-[#90CAF9] w-8 h-8 stroke-[1.5]" />
          </div>
          <h3 className="text-white font-semibold text-xl mb-1">Nouveau Projet</h3>
          <p className="text-blue-50 text-sm opacity-90">Commencer une nouvelle toile blanche</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
