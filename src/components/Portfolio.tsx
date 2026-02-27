import { motion } from 'motion/react';
import { ClientProject } from '../types';

interface PortfolioProps {
  projects: ClientProject[];
}

export const Portfolio = ({ projects }: PortfolioProps) => {
  return (
    <section id="portfolio" className="space-y-12">
      <div className="space-y-1">
        <h2 className="text-3xl font-bold">Client Nodes</h2>
        <p className="text-gray-500 font-mono text-sm uppercase tracking-widest">External Integrations</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group bg-brand-surface border border-brand-border rounded overflow-hidden hover:border-brand-primary transition-all"
          >
            <div className="aspect-video relative overflow-hidden">
              <img 
                src={project.image} 
                alt={project.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-surface to-transparent opacity-60" />
              <div className="absolute top-4 right-4 flex gap-2">
                <span className={`px-2 py-1 rounded text-[9px] font-mono font-bold uppercase tracking-widest ${
                  project.status === 'Deployed' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                  project.status === 'Stable' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                  'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                }`}>
                  {project.status}
                </span>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold">{project.name}</h3>
                  <p className="text-xs font-mono text-gray-600 uppercase tracking-widest mt-1">{project.type}</p>
                </div>
                <div className="text-right">
                  <div className="text-[9px] font-mono text-gray-600 uppercase">Traffic_Load</div>
                  <div className={`text-xs font-mono font-bold ${
                    project.load === 'High' || project.load === 'Critical' ? 'text-red-400' : 'text-brand-primary'
                  }`}>
                    {project.load}
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                {project.description}
              </p>
              <button className="w-full py-2 border border-brand-border rounded font-mono text-[10px] uppercase tracking-widest hover:bg-brand-primary hover:text-black hover:border-brand-primary transition-all">
                View_Deployment
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
