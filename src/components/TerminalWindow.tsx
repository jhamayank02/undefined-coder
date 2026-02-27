import { useState, useEffect, useRef, FormEvent } from 'react';
import { Lock } from 'lucide-react';

export const TerminalWindow = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([
    'Initializing Undefined Coder Shell v2.4.0...',
    'System: All modules loaded successfully.',
    'Type "help" to see available commands.'
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e: FormEvent) => {
    e.preventDefault();
    const cmd = input.toLowerCase().trim();
    let response = '';

    switch (cmd) {
      case 'help':
        response = 'Available commands: about, skills, contact, clear, whoami';
        break;
      case 'about':
        response = 'I am Mayank Jha, a backend-focused fullstack developer who builds scalable systems and clean APIs. I believe in "undefined" being a state of infinite possibility.';
        break;
      case 'skills':
        response = 'Core Stack: Node.js, PostgreSQL, Redis, Docker, TypeScript, Go.';
        break;
      case 'whoami':
        response = 'User: Mayank Jha | Alias: Undefined Coder | Role: Architect | Status: Authorized';
        break;
      case 'contact':
        response = 'Email: hello@undefinedcoder.dev | GitHub: @undefined-coder';
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      default:
        response = `Command not found: ${cmd}. Type "help" for assistance.`;
    }

    setHistory(prev => [...prev, `> ${input}`, response]);
    setInput('');
  };

  return (
    <div className="bg-brand-surface border border-brand-border rounded-lg overflow-hidden shadow-2xl font-mono text-xs sm:text-sm">
      <div className="bg-brand-border px-3 sm:px-4 py-2 flex items-center justify-between">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/20 border border-red-500/40" />
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/20 border border-yellow-500/40" />
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/20 border border-green-500/40" />
        </div>
        <div className="text-[9px] sm:text-[10px] text-gray-500 uppercase tracking-widest flex items-center gap-2">
          <Lock className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> Secure Session
        </div>
      </div>
      <div 
        ref={scrollRef}
        className="p-3 sm:p-4 h-48 sm:h-64 overflow-y-auto scrollbar-hide space-y-1"
      >
        {history.map((line, i) => (
          <div key={i} className={line.startsWith('>') ? 'text-brand-primary' : 'text-gray-400'}>
            {line}
          </div>
        ))}
        <form onSubmit={handleCommand} className="flex items-center gap-2">
          <span className="text-brand-primary">$</span>
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="bg-transparent border-none outline-none flex-1 text-white"
            autoFocus
          />
        </form>
      </div>
    </div>
  );
};
