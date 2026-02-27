import { motion } from 'motion/react';
import { Skill } from '../types';

interface StackProps {
  skills: Skill[];
}

export const Stack = ({ skills }: StackProps) => {
  return (
    <section id="stack" className="space-y-12">
      <div className="flex items-end justify-between border-b border-brand-border pb-4">
        <div className="space-y-1">
          <h2 className="text-3xl font-bold">System Architecture</h2>
          <p className="text-gray-500 font-mono text-sm uppercase tracking-widest">Core Dependencies</p>
        </div>
        <div className="text-brand-primary font-mono text-xs">v4.2.0-stable</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="p-6 bg-brand-surface border border-brand-border rounded-lg group hover:border-brand-primary transition-colors"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-brand-bg border border-brand-border rounded text-brand-primary group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">{skill.category}</span>
            </div>
            <h3 className="text-lg font-bold mb-4">{skill.name}</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-[10px] font-mono text-gray-500">
                <span>LOAD_CAPACITY</span>
                <span>{skill.level}%</span>
              </div>
              <div className="h-1 bg-brand-bg rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="h-full bg-brand-primary" 
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
