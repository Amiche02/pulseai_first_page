
import React from 'react';
import { Globe, FileText, Image as ImageIcon, Zap } from 'lucide-react';
import { QuickAction } from '../types';

const actions: QuickAction[] = [
  { id: '1', label: 'Site Vitrine', icon: <Globe className="w-6 h-6 stroke-[1.25]" /> },
  { id: '2', label: 'Rapport PDF', icon: <FileText className="w-6 h-6 stroke-[1.25]" /> },
  { id: '3', label: 'Identité Visuelle', icon: <ImageIcon className="w-6 h-6 stroke-[1.25]" /> },
  { id: '4', label: 'Audit Rapide', icon: <Zap className="w-6 h-6 stroke-[1.25]" /> },
];

const QuickActions: React.FC = () => {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-semibold text-slate-800 mb-6">Démarrage rapide</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {actions.map((action) => (
          <div 
            key={action.id}
            className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center gap-3 hover:border-[#90CAF9] hover:shadow-md transition-all cursor-pointer group"
          >
            <div className="text-slate-400 group-hover:text-[#90CAF9] transition-colors">
              {action.icon}
            </div>
            <span className="text-sm font-medium text-slate-600 group-hover:text-slate-800">
              {action.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QuickActions;
