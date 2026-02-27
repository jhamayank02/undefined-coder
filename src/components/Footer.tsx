import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="border-t border-brand-border py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-4">
          <div className="w-6 h-6 border border-brand-primary rounded flex items-center justify-center">
            <span className="text-brand-primary font-bold text-xs">_</span>
          </div>
          <span className="font-mono text-xs text-gray-600 tracking-widest">MAYANK JHA // UNDEFINED_CODER © 2026</span>
        </div>
        
        <div className="flex gap-6">
          <a href="https://github.com/jhamayank02" target="_blank" className="text-gray-600 hover:text-brand-primary transition-colors"><Github className="w-5 h-5" /></a>
          <a href="https://www.linkedin.com/in/mayank-jha-708b8420b" target="_blank" className="text-gray-600 hover:text-brand-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
          <a href="mailto:mjha199402@gmail.com" className="text-gray-600 hover:text-brand-primary transition-colors"><Mail className="w-5 h-5" /></a>
        </div>
      </div>
    </footer>
  );
};
