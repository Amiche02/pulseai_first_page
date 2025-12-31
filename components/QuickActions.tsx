
import React from 'react';
import { Globe, FileText, Image as ImageIcon, Zap, Box, AudioWaveform } from 'lucide-react';
import { QuickAction } from '../types';

const actions: QuickAction[] = [
  { id: '1', label: 'Site Vitrine', icon: <Globe className="w-6 h-6 stroke-[1.25]" /> },
  { id: '2', label: 'Rapport PDF', icon: <FileText className="w-6 h-6 stroke-[1.25]" /> },
  { id: '3', label: 'Identité Visuelle', icon: <ImageIcon className="w-6 h-6 stroke-[1.25]" /> },
  { id: '4', label: 'Audit Rapide', icon: <Zap className="w-6 h-6 stroke-[1.25]" /> },
  { 
    id: '5', 
    label: 'Générateur 3D', 
    icon: <Box className="w-6 h-6 stroke-[1.25]" />, 
    isComingSoon: true, 
    badgeLabel: 'Bientôt' 
  },
  { 
    id: '6', 
    label: 'Podcasts Synthétiques', 
    icon: <AudioWaveform className="w-6 h-6 stroke-[1.25]" />, 
    isComingSoon: true, 
    badgeLabel: 'Alpha' 
  },
];

const QuickActions: React.FC = () => {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-semibold text-slate-800 mb-6">Démarrage rapide</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {actions.map((action) => (
          <div 
            key={action.id}
            className={`relative bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center gap-3 transition-all group ${
              action.isComingSoon 
                ? 'opacity-60 grayscale-[0.5] cursor-not-allowed bg-slate-50/50' 
                : 'hover:border-[#90CAF9] hover:shadow-md cursor-pointer'
            }`}
          >
            {action.badgeLabel && (
              <span className="absolute top-3 right-3 px-1.5 py-0.5 bg-slate-100 text-[9px] font-bold uppercase tracking-wider text-slate-400 rounded-md border border-slate-200/50">
                {action.badgeLabel}
              </span>
            )}
            
            <div className={`transition-colors ${
              action.isComingSoon ? 'text-slate-300' : 'text-slate-400 group-hover:text-[#90CAF9]'
            }`}>
              {action.icon}
            </div>
            
            <span className={`text-sm font-medium text-center leading-tight transition-colors ${
              action.isComingSoon ? 'text-slate-400' : 'text-slate-600 group-hover:text-slate-800'
            }`}>
              {action.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QuickActions;
