
import React from 'react';
import { Project } from '../types';
import { MoreHorizontal, ArrowUpRight } from 'lucide-react';

const projects: Project[] = [
  { id: '1', title: 'Refonte E-commerce', date: 'Modifié il y a 2j', status: 'In Progress' },
  { id: '2', title: 'Design System V2', date: 'Modifié il y a 5j', status: 'In Progress' },
  { id: '3', title: 'Campagne Été 2024', date: 'Modifié hier', status: 'Review' },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-[#90CAF9] transition-all duration-300 group cursor-pointer flex flex-col justify-between aspect-video md:aspect-auto md:h-52">
      <div className="flex justify-between items-start">
        <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center group-hover:bg-[#E3F2FD] transition-colors">
          <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-[#90CAF9] transition-colors" />
        </div>
        <button className="text-slate-300 hover:text-slate-500">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>
      
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className={`w-2 h-2 rounded-full ${project.status === 'In Progress' ? 'bg-[#90CAF9]' : 'bg-amber-400'}`} />
          <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400">
            {project.status === 'In Progress' ? 'En cours' : 'Révision'}
          </span>
        </div>
        <h4 className="text-lg font-medium text-slate-800 mb-1">{project.title}</h4>
        <p className="text-sm text-slate-400">{project.date}</p>
      </div>
    </div>
  );
};

const ProjectGrid: React.FC = () => {
  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-slate-800">Travaux récents</h2>
        <button className="text-sm font-medium text-[#90CAF9] hover:text-blue-600 transition-colors">
          Voir tout
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
};

export default ProjectGrid;
