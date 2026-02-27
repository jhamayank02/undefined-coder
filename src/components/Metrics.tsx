import { motion } from 'motion/react';
import { Activity } from 'lucide-react';
import { GithubStat, Language } from '../types';

interface MetricsProps {
  stats: GithubStat[];
  languages: Language[];
}

export const Metrics = ({ stats, languages }: MetricsProps) => {
  return (
    <section id="metrics" className="space-y-12">
      <div className="space-y-1">
        <h2 className="text-3xl font-bold">System Metrics</h2>
        <p className="text-gray-500 font-mono text-sm uppercase tracking-widest">GitHub Activity Report</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Stats Grid */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-brand-surface border border-brand-border rounded-lg space-y-2"
            >
              <div className="text-brand-primary">{stat.icon}</div>
              <div className="text-2xl font-black tracking-tighter">{stat.value}</div>
              <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest leading-tight">
                {stat.label.replace(' ', '_')}
              </div>
            </motion.div>
          ))}
          
          {/* Contribution Graph Mockup */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="col-span-full p-6 bg-brand-surface border border-brand-border rounded-lg space-y-4 overflow-hidden"
          >
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Contribution_Heatmap</span>
              <span className="text-[10px] font-mono text-brand-primary hidden sm:inline">LATEST_COMMIT: 2 HOURS AGO</span>
            </div>
            <div className="flex gap-1 overflow-x-auto no-scrollbar pb-2">
              {Array.from({ length: 52 }).map((_, i) => (
                <div key={i} className="flex flex-col gap-1 flex-shrink-0">
                  {Array.from({ length: 7 }).map((_, j) => {
                    const opacity = Math.random();
                    return (
                      <div 
                        key={j} 
                        className="w-2 h-2 rounded-sm bg-brand-primary" 
                        style={{ opacity: opacity > 0.3 ? opacity : 0.05 }}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Languages Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-6 bg-brand-surface border border-brand-border rounded-lg space-y-6"
        >
          <div className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">Language_Distribution</div>
          <div className="space-y-4">
            {languages.map(lang => (
              <div key={lang.name} className="space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-gray-300">{lang.name}</span>
                  <span className="text-gray-500">{lang.percent}%</span>
                </div>
                <div className="h-1 bg-brand-bg rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-brand-primary" 
                    style={{ width: `${lang.percent}%`, backgroundColor: lang.color }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="pt-4 border-t border-brand-border">
            <div className="text-[10px] font-mono text-gray-600 uppercase tracking-widest mb-2">System_Health</div>
            <div className="flex items-center gap-2 text-brand-primary font-mono text-xs">
              <Activity className="w-3 h-3" /> 99.9% Uptime
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
