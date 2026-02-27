import { useState, useEffect, FormEvent } from 'react';
import {
  SKILLS,
  PROJECTS,
  CLIENT_PROJECTS,
  EXPERIENCE,
  GITHUB_STATS,
  LANGUAGES,
  NAV_LINKS
} from './constants';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stack } from './components/Stack';
import { Metrics } from './components/Metrics';
import { Experience } from './components/Experience';
import { Portfolio } from './components/Portfolio';
import { Endpoints } from './components/Endpoints';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [uptime, setUptime] = useState(0);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setUptime(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleContactSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setSubmitStatus('sending');

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    setSubmitStatus('success');
    setFormState({ name: '', email: '', message: '' });

    const mailtoLink = `mailto:mjha199402@gmail.com?subject=Contact from ${name}&body=Name: ${name}%0AEmail: ${email}%0A%0AMessage:%0A${message}`;

    window.location.href = mailtoLink;
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const scrollToContact = () => scrollToSection('contact');

  const formatUptime = (s: number) => {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden selection:bg-brand-primary selection:text-black">
      {/* Background Effects */}
      <div className="fixed inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="scanline pointer-events-none" />

      <Navbar
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
        uptime={formatUptime(uptime)}
        navLinks={NAV_LINKS}
      />

      <main className="relative pt-24 sm:pt-32 pb-20 px-4 sm:px-6 max-w-7xl mx-auto space-y-20 sm:space-y-32">
        <Hero scrollToContact={scrollToContact} />
        <Stack skills={SKILLS} />
        <Metrics stats={GITHUB_STATS} languages={LANGUAGES} />
        <Experience experience={EXPERIENCE} />
        <Portfolio projects={CLIENT_PROJECTS} />
        <Endpoints projects={PROJECTS} />
        <Contact
          formState={formState}
          setFormState={setFormState}
          submitStatus={submitStatus}
          handleContactSubmit={handleContactSubmit}
        />
      </main>

      <Footer />
    </div>
  );
}
