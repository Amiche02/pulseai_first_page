
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectGrid from './components/ProjectGrid';
import QuickActions from './components/QuickActions';
import Integrations from './components/Integrations';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      
      <main className="flex-1 w-full max-w-7xl mx-auto px-6 pb-12">
        {/* Welcome Section */}
        <Hero />
        
        {/* Main Bento Layout Parts */}
        <div className="grid grid-cols-1 gap-12">
          {/* Section: Templates / Quick Actions */}
          <QuickActions />
          
          {/* Section: Recent Projects */}
          <ProjectGrid />
        </div>

        {/* Future Integrations Teasing */}
        <Integrations />
      </main>
      
      <footer className="w-full max-w-7xl mx-auto px-6 py-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-slate-400 text-sm">
        <p>© 2024 Hello Pulse. Tous droits réservés.</p>
        <div className="flex gap-6 mt-4 sm:mt-0">
          <a href="#" className="hover:text-slate-600 transition-colors">Confidentialité</a>
          <a href="#" className="hover:text-slate-600 transition-colors">Support</a>
        </div>
      </footer>
    </div>
  );
};

export default App;
