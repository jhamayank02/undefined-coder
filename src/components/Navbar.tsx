import { motion, AnimatePresence } from 'motion/react';
import { Wifi, Activity, Menu, X } from 'lucide-react';
import { NavLink } from '../types';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  scrollToSection: (id: string) => void;
  uptime: string;
  navLinks: NavLink[];
}

export const Navbar = ({ isMenuOpen, setIsMenuOpen, scrollToSection, uptime, navLinks }: NavbarProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-brand-border bg-brand-bg/80 backdrop-blur-md px-4 sm:px-6 py-3 sm:py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-7 h-7 sm:w-8 sm:h-8 border border-brand-primary rounded flex items-center justify-center">
            <span className="text-brand-primary font-bold text-xs sm:text-sm">_</span>
          </div>
          <div className="hidden sm:block">
            <div className="text-[9px] font-mono text-gray-600 uppercase tracking-tighter">Node_Status</div>
            <div className="text-[9px] font-mono text-brand-primary flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-brand-primary animate-pulse" />
              LISTENING
            </div>
          </div>
        </div>
        
        <div className="hidden lg:flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-gray-400">
          {navLinks.map(link => (
            <button 
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="hover:text-brand-primary transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile Nav Toggle */}
        <div className="lg:hidden flex items-center gap-4">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-brand-primary p-1"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <div className="hidden md:flex items-center gap-4 text-[10px] font-mono text-gray-500">
          <div className="flex items-center gap-1">
            <Wifi className="w-3 h-3" /> 127.0.0.1
          </div>
          <div className="flex items-center gap-1">
            <Activity className="w-3 h-3" /> UP: {uptime}
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-brand-border bg-brand-bg overflow-hidden"
          >
            <div className="flex flex-col p-4 space-y-4 font-mono text-xs uppercase tracking-widest text-gray-400">
              {navLinks.map(link => (
                <button 
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="hover:text-brand-primary transition-colors text-left py-2 border-b border-brand-border/50 last:border-none"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
