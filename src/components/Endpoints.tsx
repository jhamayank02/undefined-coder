import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { Project } from '../types';

interface EndpointsProps {
  projects: Project[];
}

export const Endpoints = ({ projects }: EndpointsProps) => {
  return (
    <section id="endpoints" className="space-y-12">
      <div className="space-y-1">
        <h2 className="text-3xl font-bold">API Endpoints</h2>
        <p className="text-gray-500 font-mono text-sm uppercase tracking-widest">Personal Projects</p>
      </div>

      <div className="space-y-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group relative bg-brand-surface border border-brand-border rounded overflow-hidden hover:border-brand-primary/50 transition-colors"
          >
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-64 bg-brand-bg p-6 border-b md:border-b-0 md:border-r border-brand-border flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono text-gray-600">ID: {project.id}</span>
                  <div className="mt-2 flex items-center gap-2">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      project.method === 'GET' ? 'bg-blue-500/10 text-blue-400' :
                      project.method === 'POST' ? 'bg-green-500/10 text-green-400' :
                      'bg-yellow-500/10 text-yellow-400'
                    }`}>
                      {project.method}
                    </span>
                    <span className="text-xs font-mono text-gray-400 truncate">{project.endpoint}</span>
                  </div>
                </div>
                <div className="mt-8">
                  <div className="text-[10px] font-mono text-gray-600 uppercase mb-2">Response Time</div>
                  <div className="text-brand-primary font-mono text-sm">~24ms</div>
                </div>
              </div>
              <div className="flex-1 p-8 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <a href={project.link} className="p-2 hover:text-brand-primary transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-gray-500 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-brand-bg border border-brand-border rounded-full text-[10px] font-mono text-gray-600">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
