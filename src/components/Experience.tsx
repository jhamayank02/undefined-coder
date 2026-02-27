import { motion } from 'motion/react';
import { ExperienceItem } from '../types';

interface ExperienceProps {
  experience: ExperienceItem[];
}

export const Experience = ({ experience }: ExperienceProps) => {
  return (
    <section id="experience" className="space-y-12">
      <div className="space-y-1">
        <h2 className="text-3xl font-bold">Deployment History</h2>
        <p className="text-gray-500 font-mono text-sm uppercase tracking-widest">Professional Experience</p>
      </div>

      <div className="relative border-l border-brand-border ml-2 sm:ml-4 pl-6 sm:pl-8 space-y-16">
        {experience.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[33px] sm:-left-[41px] top-0 w-4 h-4 sm:w-5 h-5 bg-brand-bg border-2 border-brand-primary rounded-full z-10" />
            
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <p className="text-brand-primary font-mono text-sm">{exp.company}</p>
                </div>
                <span className="px-3 py-1 bg-brand-surface border border-brand-border rounded font-mono text-[10px] text-gray-400">
                  {exp.period}
                </span>
              </div>
              
              <div className="bg-brand-surface border border-brand-border rounded p-6 font-mono text-xs space-y-2">
                <div className="text-gray-600 mb-4 uppercase tracking-widest text-[9px]">Execution_Logs:</div>
                {exp.logs.map((log, j) => (
                  <div key={j} className="flex gap-3 text-gray-400">
                    <span className="text-brand-primary">[OK]</span>
                    <span>{log}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
