import { FormEvent } from 'react';
import { Mail } from 'lucide-react';

interface ContactProps {
  formState: { name: string; email: string; message: string };
  setFormState: (state: any) => void;
  submitStatus: 'idle' | 'sending' | 'success';
  handleContactSubmit: (e: FormEvent) => void;
}

export const Contact = ({ formState, setFormState, submitStatus, handleContactSubmit }: ContactProps) => {
  return (
    <section id="contact" className="max-w-3xl mx-auto text-center space-y-8 sm:space-y-12">
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1 bg-brand-primary/5 border border-brand-primary/20 rounded text-brand-primary text-[10px] font-mono uppercase tracking-widest">
          <Mail className="w-3 h-3" /> PING_REQUEST
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">OPEN_CHANNEL</h2>
        <p className="text-gray-500 text-sm sm:text-base max-w-md mx-auto">
          I'm Mayank Jha. I'm usually deep in code, but I check my inbox for interesting technical challenges.
        </p>
      </div>

      <form onSubmit={handleContactSubmit} className="bg-brand-surface border border-brand-border rounded p-5 sm:p-8 text-left space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">Source_Identity</label>
            <input
              type="text"
              name="name"
              required
              value={formState.name}
              onChange={(e) => setFormState((prev: any) => ({ ...prev, name: e.target.value }))}
              placeholder="name"
              className="w-full bg-brand-bg border border-brand-border rounded px-4 py-3 outline-none focus:border-brand-primary/50 transition-colors text-gray-300 text-sm font-mono"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">Return_Address</label>
            <input
              type="email"
              name="email"
              required
              value={formState.email}
              onChange={(e) => setFormState((prev: any) => ({ ...prev, email: e.target.value }))}
              placeholder="email@domain.com"
              className="w-full bg-brand-bg border border-brand-border rounded px-4 py-3 outline-none focus:border-brand-primary/50 transition-colors text-gray-300 text-sm font-mono"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">Payload_Data</label>
          <textarea
            rows={4}
            name="message"
            required
            value={formState.message}
            onChange={(e) => setFormState((prev: any) => ({ ...prev, message: e.target.value }))}
            placeholder="console.log('your message here');"
            className="w-full bg-brand-bg border border-brand-border rounded px-4 py-3 outline-none focus:border-brand-primary/50 transition-colors text-gray-300 text-sm font-mono resize-none"
          />
        </div>
        <button
          type="submit"
          disabled={submitStatus !== 'idle'}
          className="w-full py-3 sm:py-4 bg-brand-surface border border-brand-primary/50 text-brand-primary font-mono text-xs hover:bg-brand-primary hover:text-black transition-all uppercase tracking-widest flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitStatus === 'idle' && '[TRANSMIT_PACKET]'}
          {submitStatus === 'sending' && 'UPLOADING...'}
          {submitStatus === 'success' && 'ACK_RECEIVED'}
        </button>
      </form>
    </section>
  );
};
