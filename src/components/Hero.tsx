import { motion } from 'motion/react';
import { ChevronRight, Github, Linkedin, User, MapPin, Globe } from 'lucide-react';
import { TerminalWindow } from './TerminalWindow';

interface HeroProps {
  scrollToContact: () => void;
}

export const Hero = ({ scrollToContact }: HeroProps) => {
  return (
    <section id="about" className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[60vh]">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="space-y-6 sm:space-y-8"
      >
        <div className="space-y-4">
          <div className="inline-block px-2 py-1 bg-brand-primary/5 border border-brand-primary/20 text-[10px] text-brand-primary uppercase tracking-widest">
            System_Identity: 0x42_UNDEFINED
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight text-gray-200">
            I BUILD SYSTEMS<br />
            THAT DON'T BREAK.
          </h1>
          
          {/* Personal Details Card */}
          <div className="bg-brand-surface/50 border border-brand-border p-4 rounded max-w-sm space-y-2 font-mono text-[10px] sm:text-xs">
            <div className="flex items-center gap-3 text-gray-500">
              <User className="w-3 h-3 text-brand-primary" />
              <span className="text-gray-400">NAME:</span>
              <span className="text-brand-primary">MAYANK JHA // UNDEFINED_CODER</span>
            </div>
            <div className="flex items-center gap-3 text-gray-500">
              <MapPin className="w-3 h-3 text-brand-primary" />
              <span className="text-gray-400">LOC:</span>
              <span className="text-brand-primary">INDIA, EARTH // 127.0.0.1</span>
            </div>
            <div className="flex items-center gap-3 text-gray-500">
              <Globe className="w-3 h-3 text-brand-primary" />
              <span className="text-gray-400">LANG:</span>
              <span className="text-brand-primary">HINDI, EN_US // UTF-8</span>
            </div>
          </div>
        </div>
        
        <p className="text-base sm:text-lg text-gray-500 max-w-lg leading-relaxed">
          Quietly architecting distributed backends, high-concurrency services, and resilient data pipelines. 
          I prefer code over talk and performance over polish.
        </p>

        <div className="flex flex-wrap gap-3 sm:gap-4">
          <button 
            onClick={scrollToContact}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-brand-surface border border-brand-primary/50 text-brand-primary font-mono text-xs hover:bg-brand-primary hover:text-black transition-all flex items-center justify-center gap-2 group"
          >
            [INIT_CONNECTION]
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <div className="flex gap-3 sm:gap-4 w-full sm:w-auto justify-center sm:justify-start">
            <a href="https://github.com/jhamayank02" target="_blank" className="w-10 h-10 sm:w-12 sm:h-12 border border-brand-border rounded flex items-center justify-center hover:border-brand-primary hover:text-brand-primary transition-all">
              <Github className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a href="https://www.linkedin.com/in/mayank-jha-708b8420b" target="_blank" className="w-10 h-10 sm:w-12 sm:h-12 border border-brand-border rounded flex items-center justify-center hover:border-brand-primary hover:text-brand-primary transition-all">
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <TerminalWindow />
      </motion.div>
    </section>
  );
};
