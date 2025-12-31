
import React from 'react';
import { Figma, Github, Triangle, Command } from 'lucide-react';

const Integrations: React.FC = () => {
  return (
    <section className="mt-16 mb-8 flex flex-col items-center">
      <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-8">
        Bientôt connectés à vos outils préférés
      </h3>
      <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-30 grayscale pointer-events-none">
        <div className="flex items-center gap-2 group">
          <Figma className="w-6 h-6" />
          <span className="font-semibold text-lg hidden sm:block">Figma</span>
        </div>
        <div className="flex items-center gap-2">
          <Triangle className="w-6 h-6 rotate-180" />
          <span className="font-semibold text-lg hidden sm:block">Vercel</span>
        </div>
        <div className="flex items-center gap-2">
          <Github className="w-6 h-6" />
          <span className="font-semibold text-lg hidden sm:block">GitHub</span>
        </div>
        <div className="flex items-center gap-2">
          <Command className="w-6 h-6" />
          <span className="font-semibold text-lg hidden sm:block">Notion</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-sm border-2 border-slate-800 flex items-center justify-center font-bold text-[10px]">B</div>
          <span className="font-semibold text-lg hidden sm:block">Blender</span>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
