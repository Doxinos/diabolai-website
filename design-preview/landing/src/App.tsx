import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, CheckCircle2, ChevronDown, MousePointer2, Linkedin, Youtube, Instagram, Twitter, Mail } from 'lucide-react';
import FlipStrip from './components/FlipStrip';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ------------------------------------------------------------------ */
/* GLOBAL STYLES — Warm AI Premium                                     */
/* ------------------------------------------------------------------ */
export const GlobalStyles = () => (
  <style dangerouslySetInnerHTML={{__html: `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap');

    :root {
      --westar: #DCDBD3;
      --oxford-blue: #0A2843;
      --orange: #FF4F30;
      --orange-hover: #E64528;
      --near-black: #111111;
      --white: #FFFFFF;
    }

    *, *::before, *::after { box-sizing: border-box; }

    body {
      background-color: var(--westar);
      color: var(--near-black);
      font-family: 'Inter', sans-serif;
      overflow-x: hidden;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    .font-mono { font-family: 'JetBrains Mono', monospace; }

    /* Magnetic buttons — physical press feel */
    .btn-magnetic {
      position: relative;
      overflow: hidden;
      transform: translateZ(0);
      transition: transform 200ms cubic-bezier(0.34, 1.56, 0.64, 1), background-color 300ms ease, box-shadow 300ms ease;
    }
    .btn-magnetic:hover { transform: scale(1.02); }
    .btn-magnetic:active { transform: scale(0.98); }

    /* Cards lift */
    .card-lift {
      transition: transform 280ms ease, box-shadow 280ms ease;
    }
    .card-lift:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 24px rgba(0,0,0,0.08);
    }

    /* Custom scrollbar — warm, understated */
    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: var(--westar); }
    ::-webkit-scrollbar-thumb { background: rgba(17,17,17,0.15); border-radius: 3px; }
    ::-webkit-scrollbar-thumb:hover { background: rgba(17,17,17,0.25); }

    /* Orbit animation for avatar badges */
    @keyframes orbit {
      from { transform: rotate(0deg) translateX(120px) rotate(0deg); }
      to { transform: rotate(360deg) translateX(120px) rotate(-360deg); }
    }
  `}} />
);

/* Noise overlay — paper grain at 0.025 opacity */
export const NoiseOverlay = () => (
  <svg className="pointer-events-none fixed inset-0 z-[9999] h-full w-full opacity-[0.025]" style={{ mixBlendMode: 'multiply' }}>
    <filter id="noise">
      <feTurbulence type="fractalNoise" baseFrequency="0.70" numOctaves="4" stitchTiles="stitch" />
    </filter>
    <rect width="100%" height="100%" filter="url(#noise)" />
  </svg>
);

/* Character splitter for GSAP text reveals — word-aware to prevent mid-word breaks */
const SplitChars = ({ text, className = '' }: { text: string; className?: string }) => (
  <>
    {text.split(' ').map((word, wi) => (
      <span key={wi} className="inline-block whitespace-nowrap">
        {word.split('').map((char, ci) => (
          <span key={ci} className={`split-char inline-block ${className}`} style={{ opacity: 0, transform: 'translateY(15px)' }}>
            {char}
          </span>
        ))}
        {wi < text.split(' ').length - 1 && <span className="split-char inline-block" style={{ opacity: 0, transform: 'translateY(15px)' }}>{'\u00A0'}</span>}
      </span>
    ))}
  </>
);

/* ------------------------------------------------------------------ */
/* A. NAVBAR — The Quiet Leader                                        */
/* ------------------------------------------------------------------ */
export const Navbar = ({ forceDark = false }: { forceDark?: boolean }) => {
  const navRef = useRef<HTMLElement>(null);
  const [onDark, setOnDark] = useState(forceDark);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Simple scroll listener for frosted glass — immune to GSAP pin offsets
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // check on mount

    // If forceDark, skip ScrollTrigger detection until user scrolls past hero
    if (forceDark) {
      const handleDarkScroll = () => {
        // After scrolling past ~100vh, let ScrollTrigger handle it
        if (window.scrollY > window.innerHeight * 0.8) {
          setOnDark(false);
        } else {
          setOnDark(true);
        }
      };
      window.addEventListener('scroll', handleDarkScroll, { passive: true });
      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('scroll', handleDarkScroll);
      };
    }

    const ctx = gsap.context(() => {
      // Detect dark sections
      const darkSections = document.querySelectorAll('[data-theme="dark"]');
      darkSections.forEach((section) => {
        ScrollTrigger.create({
          trigger: section,
          start: 'top 60px',
          end: 'bottom 60px',
          onEnter: () => setOnDark(true),
          onLeave: () => setOnDark(false),
          onEnterBack: () => setOnDark(true),
          onLeaveBack: () => setOnDark(false),
        });
      });
    });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      ctx.revert();
    };
  }, [forceDark]);

  const navLinks = [
    { label: 'AI Voice', href: '/ai-voice' },
    { label: 'AI Content', href: '/ai-content' },
    { label: 'AI Avatars', href: '/ai-avatars' },
    { label: 'About', href: '/about' },
  ];

  return (
    <nav
      ref={navRef}
      className={`fixed top-6 left-1/2 z-[100] flex w-full max-w-7xl -translate-x-1/2 items-center justify-between rounded-full px-8 md:px-16 lg:px-20 py-3 transition-all duration-500
        ${scrolled
          ? onDark
            ? 'bg-[#0A2843]/80 border border-white/10 backdrop-blur-md'
            : 'bg-[#DCDBD3]/80 border border-[rgba(17,17,17,0.10)] backdrop-blur-md'
          : ''
        }`}
    >
      <a href="/" className={`text-[28px] font-bold tracking-tight transition-colors duration-500 no-underline ${onDark ? 'text-white' : 'text-[#111111]'}`}>
        Diabol
      </a>
      <div className="hidden gap-8 md:flex">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={`group relative text-sm no-underline transition-colors duration-500 ${onDark ? 'text-white/65 hover:text-white/95' : 'text-[rgba(17,17,17,0.60)] hover:text-[#111111]'}`}
          >
            {link.label}
            <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-[#FF4F30] transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
      </div>
      <button className={`btn-magnetic rounded-full px-5 py-2 text-sm font-semibold transition-colors duration-500 ${onDark ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-[#111111] text-[#DCDBD3] hover:bg-[#222222]'}`}>
        Book a Call
      </button>
    </nav>
  );
};

/* ------------------------------------------------------------------ */
/* B. HERO — Typography as Architecture                                */
/* ------------------------------------------------------------------ */
const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: prefersReduced ? 0 : 1 } });

      tl.to('.hero-label', { y: 0, opacity: 1 }, 0)
        .fromTo('.hero-h1-1', { y: 30, opacity: 0 }, { y: 0, opacity: 1 }, 0.2)
        .fromTo('.hero-h1-2', { y: 30, opacity: 0, scaleX: 0.96 }, { y: 0, opacity: 1, scaleX: 1, duration: 1.2, ease: 'expo.out' }, 0.4)
        .fromTo('.hero-body', { y: 20, opacity: 0 }, { y: 0, opacity: 1 }, 0.65)
        .fromTo('.hero-cta', { y: 20, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1 }, 0.75)
        .fromTo('.hero-stats', { x: 16, opacity: 0 }, { x: 0, opacity: 1, stagger: 0.15 }, 0.85);
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative flex h-[100dvh] w-full items-center bg-[#DCDBD3] pt-24">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-12 gap-6 px-8 md:px-16 lg:px-20">
        {/* Main content — cols 1-10 */}
        <div className="col-span-12 lg:col-span-9">
          {/* Label */}
          <div className="hero-label translate-y-3 opacity-0 font-mono text-[11px] uppercase tracking-[0.14em] text-[rgba(17,17,17,0.40)]">
            — AI Voice Agents · AI Content · AI Avatars
          </div>

          {/* Headline — typography IS the visual */}
          <h1 className="mt-6 flex flex-col font-black tracking-[-0.04em] text-[#111111]">
            <span className="hero-h1-1 text-[clamp(80px,12vw,140px)] leading-[0.88]">
              Grow without
            </span>
            <span className="hero-h1-2 origin-left text-[clamp(80px,12vw,140px)] leading-[0.88] text-[#FF4F30]">
              growing.
            </span>
          </h1>

          {/* Body */}
          <div className="hero-body mt-10 flex flex-col gap-1 text-[clamp(17px,1.4vw,20px)] leading-[1.65] text-[rgba(17,17,17,0.60)]">
            <p>Avatars that look like you.</p>
            <p>Agents that sound like you.</p>
            <p>Content that speaks for you.</p>
          </div>

          {/* CTAs */}
          <div className="mt-8 flex gap-4">
            <button className="hero-cta btn-magnetic flex items-center gap-2 rounded-full bg-[#111111] px-8 py-4 text-sm font-bold text-[#DCDBD3] hover:bg-[#222222]">
              See how it works <ArrowRight size={16} />
            </button>
            <button className="hero-cta btn-magnetic rounded-full border border-[rgba(17,17,17,0.20)] bg-transparent px-8 py-4 text-sm font-bold text-[#111111] hover:bg-[rgba(17,17,17,0.05)]">
              Book a call
            </button>
          </div>
        </div>

        {/* Right stats — cols 10-12 */}
        <div className="col-span-12 lg:col-span-3 flex flex-row lg:flex-col justify-start lg:justify-center gap-8 lg:gap-12 lg:border-l lg:border-[rgba(17,17,17,0.10)] lg:pl-8">
          <div className="hero-stats">
            <div className="text-[clamp(48px,5vw,72px)] font-extrabold leading-none text-[#111111]">247</div>
            <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[rgba(17,17,17,0.40)]">
              Calls answered today
            </div>
          </div>
          <div className="hero-stats">
            <div className="text-[clamp(48px,5vw,72px)] font-extrabold leading-none text-[#111111]">€50K+</div>
            <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[rgba(17,17,17,0.40)]">
              Annual revenue recovered per client
            </div>
          </div>
        </div>
      </div>

      {/* Vertical label — right edge, desktop only */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden xl:block">
        <div className="origin-center rotate-90 font-mono text-[11px] uppercase tracking-[0.14em] text-[rgba(17,17,17,0.35)] whitespace-nowrap">
          EST. 2005 · Stockholm
        </div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/* C. FEATURES — Three Pillars as Living Software                      */
/* ------------------------------------------------------------------ */

/* Card 1: Live Metrics */
const LiveMetrics = () => {
  const [metrics, setMetrics] = useState({ calls: 0, leads: 0, appts: 0 });
  const metricsRef = useRef({ calls: 0, leads: 0, appts: 0 });

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cycle = () => {
        metricsRef.current = { calls: 0, leads: 0, appts: 0 };
        setMetrics({ ...metricsRef.current });
        gsap.to(metricsRef.current, {
          calls: 247, leads: 89, appts: 34,
          duration: 1.5, ease: 'expo.out',
          onUpdate: () => setMetrics({
            calls: Math.floor(metricsRef.current.calls),
            leads: Math.floor(metricsRef.current.leads),
            appts: Math.floor(metricsRef.current.appts),
          }),
        });
      };
      cycle();
      const id = setInterval(cycle, 4000);
      return () => clearInterval(id);
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="relative rounded-xl bg-[#111111] p-6">
      <div className="absolute right-4 top-4 flex items-center gap-2">
        <div className="h-1.5 w-1.5 rounded-full bg-[#FF4F30] animate-pulse" />
        <span className="font-mono text-[11px] tracking-[0.14em] text-[#FF4F30]">LIVE</span>
      </div>
      <div className="flex flex-col gap-5 pt-4">
        {[
          { label: 'CALLS ANSWERED', val: metrics.calls },
          { label: 'LEADS QUALIFIED', val: metrics.leads },
          { label: 'BOOKINGS', val: metrics.appts },
        ].map((m, i) => (
          <div key={i} className="flex items-end justify-between border-b border-white/5 pb-2">
            <span className="font-mono text-[11px] tracking-[0.12em] text-[rgba(255,255,255,0.45)]">{m.label}</span>
            <span className="font-mono text-[28px] font-bold leading-none text-[rgba(255,255,255,0.95)]">
              {m.val.toString().padStart(3, '0')}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

/* Card 2: Generation Typewriter */
const GenTypewriter = () => {
  const [text, setText] = useState('');
  const msgs = [
    '> Generating product video for reel...',
    '> Publishing to Instagram · TikTok · Meta',
    '> 3 UGC variants queued for A/B test',
    '> Hero commercial: render complete (4K)',
    '> 14 posts scheduled this week',
  ];

  useEffect(() => {
    let mi = 0, ci = 0, del = false;
    let t: ReturnType<typeof setTimeout>;
    const type = () => {
      const s = msgs[mi];
      if (!del && ci < s.length) { setText(s.slice(0, ++ci)); t = setTimeout(type, 30); }
      else if (del && ci > 0) { setText(s.slice(0, --ci)); t = setTimeout(type, 15); }
      else if (!del) { del = true; t = setTimeout(type, 2000); }
      else { del = false; mi = (mi + 1) % msgs.length; t = setTimeout(type, 300); }
    };
    t = setTimeout(type, 500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="rounded-xl bg-[#111111] p-6 font-mono text-[13px]">
      <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
        <span className="text-[rgba(255,255,255,0.45)]">content_engine</span>
        <span className="rounded-full border border-[#FF4F30]/30 bg-[#FF4F30]/10 px-2 py-0.5 text-[10px] text-[#FF4F30]">ACTIVE</span>
      </div>
      <div className="min-h-[60px] text-[rgba(255,255,255,0.80)]">
        {text}<span className="animate-pulse text-[#FF4F30]">|</span>
      </div>
    </div>
  );
};

/* Card 3: Phantom Publisher */
const PhantomPub = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1.5 });
      const icons = gsap.utils.toArray('.ph-icon') as HTMLElement[];
      tl.call(() => setActive([]));
      icons.forEach((icon: any, idx) => {
        tl.to('.ph-cursor', { x: () => icon.offsetLeft - 8, y: () => icon.offsetTop + 8, duration: 0.5, ease: 'power2.inOut' })
          .to('.ph-cursor', { scale: 0.8, duration: 0.08, yoyo: true, repeat: 1 })
          .call(() => setActive(p => [...p, idx]));
      });
      tl.to('.ph-cursor', { x: 140, y: 130, duration: 0.6, ease: 'power2.inOut' })
        .to('.ph-cursor', { scale: 0.8, duration: 0.08, yoyo: true, repeat: 1 });
    }, ref);
    return () => ctx.revert();
  }, []);

  const icons = [Linkedin, Youtube, Instagram, Twitter, Mail];
  const labels = ['LI', 'YT', 'IG', 'X', 'EMAIL'];

  return (
    <div ref={ref} className="relative rounded-xl bg-[#111111] p-6 overflow-hidden">
      <div className="grid grid-cols-5 gap-3">
        {icons.map((Icon, i) => (
          <div key={i} className={`ph-icon flex h-11 w-11 items-center justify-center rounded-lg border transition-all duration-300 ${active.includes(i) ? 'border-[#22c55e]/40 bg-[#22c55e]/10 text-[#22c55e]' : 'border-white/10 bg-white/5 text-[rgba(255,255,255,0.45)]'}`}>
            {active.includes(i) ? <CheckCircle2 size={18} /> : <Icon size={18} />}
          </div>
        ))}
      </div>
      <div className="mt-4 text-center">
        <button className="rounded-full border border-white/15 bg-white/5 px-5 py-1.5 font-mono text-[10px] tracking-[0.12em] text-[rgba(255,255,255,0.60)]">
          PUBLISH ALL
        </button>
      </div>
      <div className="mt-4 text-center font-mono text-[10px] tracking-[0.12em] text-[rgba(255,255,255,0.35)]">
        AVATAR ACTIVE · 14 VIDEOS SCHED · NEXT: TUE 09:00
      </div>
      <div className="ph-cursor absolute top-0 left-0 z-50">
        <MousePointer2 size={20} className="fill-white stroke-[#111111] stroke-2" />
      </div>
    </div>
  );
};

const Features = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.feature-card', { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 70%' },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="platform" className="w-full bg-white px-6 py-32 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <div className="font-mono text-[12px] uppercase tracking-[0.14em] text-[rgba(17,17,17,0.40)]">The System</div>
          <h2 className="mt-4 text-[clamp(52px,7vw,88px)] font-black leading-[0.95] tracking-[-0.04em] text-[#111111]">
            Three tools.<br />
            <span className="text-[rgba(17,17,17,0.35)]">One unfair advantage.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Voice */}
          <div className="feature-card card-lift flex flex-col rounded-2xl border border-[rgba(17,17,17,0.08)] bg-[#DCDBD3] p-8">
            <LiveMetrics />
            <h3 className="mt-6 text-xl font-bold text-[rgba(17,17,17,0.90)]">Answer every call. Chase every lead.</h3>
            <p className="mt-2 text-sm leading-[1.65] text-[rgba(17,17,17,0.55)]">
              Inbound handled 24/7. Outbound follow-up automated. Qualification and booking, in your voice.
            </p>
          </div>

          {/* Content */}
          <div className="feature-card card-lift flex flex-col rounded-2xl border border-[rgba(17,17,17,0.08)] bg-[#DCDBD3] p-8">
            <GenTypewriter />
            <h3 className="mt-6 text-xl font-bold text-[rgba(17,17,17,0.90)]">Content that never sleeps.</h3>
            <p className="mt-2 text-sm leading-[1.65] text-[rgba(17,17,17,0.55)]">
              AI-generated videos, graphics, and ad creatives — delivered at a pace no human team can match.
            </p>
          </div>

          {/* Avatars */}
          <div className="feature-card card-lift flex flex-col rounded-2xl border border-[rgba(17,17,17,0.08)] bg-[#DCDBD3] p-8">
            <PhantomPub />
            <h3 className="mt-6 text-xl font-bold text-[rgba(17,17,17,0.90)]">Be everywhere without being everywhere.</h3>
            <p className="mt-2 text-sm leading-[1.65] text-[rgba(17,17,17,0.55)]">
              Your likeness and voice, showing up consistently — while you focus on the work that matters.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/* D. PHILOSOPHY — The Oxford Blue Statement                           */
/* ------------------------------------------------------------------ */
const Philosophy = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = gsap.context(() => {
      // Character reveal for both headlines
      ScrollTrigger.create({
        trigger: ref.current,
        start: 'top 65%',
        onEnter: () => {
          gsap.to('.phil-dim .split-char', {
            opacity: 1, y: 0, duration: prefersReduced ? 0 : 0.6,
            ease: 'back.out(1.7)', stagger: 0.025,
          });
          gsap.to('.phil-lit .split-char', {
            opacity: 1, y: 0, duration: prefersReduced ? 0 : 0.6,
            ease: 'back.out(1.7)', stagger: 0.025, delay: 0.3,
          });
        },
      });

      // Parallax background texture
      gsap.to('.phil-bg', {
        yPercent: 20, ease: 'none',
        scrollTrigger: { trigger: ref.current, start: 'top bottom', end: 'bottom top', scrub: true },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} data-theme="dark" className="relative w-full overflow-hidden bg-[#0A2843] px-6 py-40 md:px-12">
      {/* Background texture */}
      <div className="phil-bg absolute -top-[20%] left-0 h-[140%] w-full bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=3000&auto=format&fit=crop')] bg-cover bg-center opacity-[0.05]" style={{ mixBlendMode: 'soft-light' }} />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-12 font-mono text-[12px] uppercase tracking-[0.14em] text-[rgba(255,255,255,0.40)]">
          Philosophy
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-0">
          {/* Left — dimmed */}
          <div className="phil-dim flex flex-col justify-center pr-0 md:pr-12">
            <p className="mb-4 font-mono text-[12px] uppercase tracking-[0.14em] text-[rgba(255,255,255,0.40)]">
              Most founders ask:
            </p>
            <h2 className="text-[clamp(40px,5vw,72px)] font-extrabold leading-[1] text-[rgba(255,255,255,0.30)]">
              <SplitChars text="How do I do more?" />
            </h2>
          </div>

          {/* Right — lit */}
          <div className="phil-lit relative flex flex-col justify-center pl-0 md:pl-12">
            <div className="absolute left-0 top-0 hidden h-full w-[1px] bg-[rgba(255,255,255,0.12)] md:block" />
            <p className="mb-4 font-mono text-[12px] uppercase tracking-[0.14em] text-[rgba(255,255,255,0.60)]">
              We ask:
            </p>
            <h2 className="text-[clamp(40px,5vw,72px)] font-extrabold leading-[1]">
              <span className="text-[rgba(255,255,255,0.95)]">
                <SplitChars text="How do you grow " />
              </span>
              <span className="text-[#FF4F30]">
                <SplitChars text="without growing?" />
              </span>
            </h2>
          </div>
        </div>

        {/* Manifesto paragraph */}
        <div className="mx-auto mt-20 max-w-[640px] text-center">
          <p className="text-[clamp(17px,2vw,20px)] leading-[1.65] text-[rgba(255,255,255,0.65)]">
            We built these systems because we ran out of hours before we ran out of ambition. Voice agents that answer every call. Content engines that never sleep. Avatars that show up when you can't. That's not automation — that's a second founder.
          </p>
        </div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/* E. SYSTEM STACK — Sticky Stacking Cards                             */
/* ------------------------------------------------------------------ */
const SystemStack = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mql = window.matchMedia('(min-width: 1024px)');
    if (!mql.matches) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.sys-card') as HTMLElement[];
      gsap.set(cards, { position: 'absolute', top: 0, left: 0, width: '100%', height: '100vh' });
      gsap.set(cards[1], { y: window.innerHeight });
      gsap.set(cards[2], { y: window.innerHeight });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: 'top top',
          end: `+=${cards.length * 100}%`,
          pin: true,
          scrub: 0.6, /* weighted, physical feel */
        },
      });

      /* Card 2 in, Card 1 blurs out */
      tl.to(cards[1], { y: 0, duration: 1, ease: 'none' })
        .to(cards[0], { scale: 0.94, filter: 'blur(12px)', opacity: 0.5, duration: 1, ease: 'none' }, '<');

      /* Card 3 in, Card 2 blurs out */
      tl.to(cards[2], { y: 0, duration: 1, ease: 'none' })
        .to(cards[1], { scale: 0.94, filter: 'blur(12px)', opacity: 0.5, duration: 1, ease: 'none' }, '<');
    }, ref);
    return () => ctx.revert();
  }, []);

  /* Audio waveform for Voice card */
  const Waveform = () => (
    <div className="h-48 w-full overflow-hidden rounded-xl">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="h-full w-full object-cover"
        src="/waveform-bw.mp4"
      />
    </div>
  );

  /* Content grid for Content card */
  const ContentGrid = () => (
    <div className="grid h-48 w-full grid-cols-4 gap-3">
      {['VIDEO', 'REEL', 'AD', 'POST', 'REEL', 'VIDEO', 'AD', 'POST', 'VIDEO', 'REEL', 'POST', 'AD'].map((label, i) => (
        <div key={i} className="group/tile flex items-end rounded-xl border border-white/10 bg-[#DCDBD3]/10 p-3 animate-pulse transition-all duration-300 hover:bg-[#DCDBD3]/25 hover:border-white/25 cursor-default" style={{ animationDelay: `${i * 0.15}s` }}>
          <span className="font-mono text-[10px] tracking-[0.1em] text-[rgba(255,255,255,0.50)] transition-colors duration-300 group-hover/tile:text-[rgba(255,255,255,0.90)]">{label}</span>
        </div>
      ))}
    </div>
  );

  /* Avatar orbit for Avatar card */
  const AvatarOrbit = () => {
    const platforms = [
      { icon: <Linkedin size={14} />, label: 'LinkedIn' },
      { icon: <Youtube size={14} />, label: 'YouTube' },
      { icon: <Instagram size={14} />, label: 'Instagram' },
      { icon: <Mail size={14} />, label: 'Email' },
      { icon: <Twitter size={14} />, label: 'X' },
    ];
    return (
      <div className="relative flex h-48 w-full items-center justify-center">
        <div className="absolute h-[240px] w-[240px] rounded-full border border-[rgba(17,17,17,0.08)]" />
        <div className="absolute h-[180px] w-[180px] rounded-full border border-[rgba(17,17,17,0.06)]" />
        <div className="flex h-[80px] w-[80px] items-center justify-center rounded-full border-2 border-[rgba(17,17,17,0.12)] bg-[#DCDBD3]">
          <span className="font-mono text-[11px] tracking-[0.14em] text-[rgba(17,17,17,0.40)]">AVATAR</span>
        </div>
        {/* Pulsing dot */}
        <div className="absolute top-1/2 right-[calc(50%-42px)] h-2 w-2 -translate-y-1/2 rounded-full bg-[#FF4F30] animate-pulse" />
        {/* Orbiting badges */}
        {platforms.map((p, i) => (
          <div key={i} className="absolute left-1/2 top-1/2 -ml-4 -mt-4" style={{ animation: `orbit 12s linear infinite`, animationDelay: `${i * -2.4}s` }}>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[rgba(17,17,17,0.10)] bg-white/80 text-[rgba(17,17,17,0.45)]">
              {p.icon}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const cards = [
    {
      bg: 'bg-[#DCDBD3]', textColor: 'text-[#111111]', subColor: 'text-[rgba(17,17,17,0.55)]', labelColor: 'text-[rgba(17,17,17,0.40)]',
      label: '01 / VOICE AGENTS', title: 'Every call answered.', subtitle: 'Every lead captured.',
      body: '24/7 AI-powered call handling that qualifies leads, books appointments, and never puts a customer on hold.',
      pill: 'From €2K · 3-week delivery', pillBg: 'bg-white/60 text-[rgba(17,17,17,0.60)]',
      visual: <Waveform />,
    },
    {
      bg: 'bg-[#0A2843]', textColor: 'text-white', subColor: 'text-[rgba(255,255,255,0.60)]', labelColor: 'text-[#FF4F30]',
      label: '02 / AI CONTENT', title: 'Content that scales.', subtitle: 'Without an agency retainer.',
      body: 'AI-generated videos, graphics, and ad creatives deployed across every channel — automatically.',
      pill: 'From €3K/mo · Ongoing', pillBg: 'bg-white/10 text-[rgba(255,255,255,0.60)]',
      visual: <ContentGrid />,
    },
    {
      bg: 'bg-[#F5F4EE]', textColor: 'text-[#111111]', subColor: 'text-[rgba(17,17,17,0.55)]', labelColor: 'text-[rgba(17,17,17,0.40)]',
      label: '03 / AI AVATARS', title: 'Your face.', subtitle: 'Everywhere.',
      body: 'Digital twins that present, post, and publish — maintaining your presence across every platform, 24/7.',
      pill: 'From €20K · Custom build', pillBg: 'bg-white/60 text-[rgba(17,17,17,0.60)]',
      visual: <AvatarOrbit />,
    },
  ];

  return (
    <section ref={ref} id="methodology" className="relative h-auto lg:h-screen w-full overflow-hidden">
      {cards.map((c, i) => (
        <div key={i} className={`sys-card flex h-screen w-full items-center justify-center ${c.bg}`} style={{ transformOrigin: 'center top' }}>
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-8 lg:flex-row lg:items-center lg:gap-16 lg:px-16">
            <div className="flex w-full lg:w-1/2 flex-col gap-4">
              <div className={`font-mono text-[12px] uppercase tracking-[0.14em] ${c.labelColor}`}>{c.label}</div>
              <h2 className={`text-[clamp(48px,6vw,72px)] font-black leading-[0.95] tracking-[-0.04em] ${c.textColor}`}>
                {c.title}<br />{c.subtitle}
              </h2>
              <p className={`mt-4 max-w-md text-[clamp(16px,1.3vw,18px)] leading-[1.65] ${c.subColor}`}>{c.body}</p>
              <div className={`mt-4 inline-flex w-fit rounded-2xl px-4 py-2 font-mono text-[11px] tracking-[0.1em] ${c.pillBg}`}>
                {c.pill}
              </div>
            </div>
            <div className="flex w-full lg:w-1/2 items-center justify-center rounded-[24px] border border-[rgba(17,17,17,0.08)] bg-white/30 p-12 backdrop-blur-sm">
              {c.visual}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

/* ------------------------------------------------------------------ */
/* F. PRICING — The Offer Ladder                                       */
/* ------------------------------------------------------------------ */
const Pricing = () => (
  <section id="pricing" className="w-full bg-white px-6 py-32 md:px-12">
    <div className="mx-auto max-w-7xl">
      <div className="mb-20">
        <div className="font-mono text-[12px] uppercase tracking-[0.14em] text-[rgba(17,17,17,0.40)]">Investment</div>
        <h2 className="mt-4 text-[clamp(52px,7vw,88px)] font-black leading-[0.95] tracking-[-0.04em] text-[#111111]">
          Start small.<br />
          <span className="text-[rgba(17,17,17,0.35)]">Scale when it works.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-3">
        {/* Pilot */}
        <div className="card-lift rounded-2xl border border-[rgba(17,17,17,0.08)] bg-[#DCDBD3] p-10">
          <h3 className="text-2xl font-bold text-[#111111]">Pilot</h3>
          <p className="mt-2 text-sm text-[rgba(17,17,17,0.55)]">Single system deployment. Fast results.</p>
          <div className="mt-8 text-4xl font-extrabold text-[#111111]">From €2K</div>
          <button className="btn-magnetic mt-8 w-full rounded-full border border-[rgba(17,17,17,0.20)] py-4 text-sm font-bold text-[#111111] hover:bg-[rgba(17,17,17,0.05)]">
            Get Started
          </button>
        </div>

        {/* Growth — the premium pop */}
        <div className="relative card-lift rounded-2xl bg-[#0A2843] p-10 lg:scale-105">
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#DCDBD3] px-4 py-1 font-mono text-[10px] font-medium tracking-[0.14em] text-[#0A2843]">
            MOST CHOSEN
          </div>
          <h3 className="text-2xl font-bold text-white">Growth</h3>
          <p className="mt-2 text-sm text-[rgba(255,255,255,0.55)]">Full system architecture. Ongoing scale.</p>
          <div className="mt-8 text-4xl font-extrabold text-white">
            From €3K<span className="text-lg text-[rgba(255,255,255,0.40)]">/mo</span>
          </div>
          <button className="btn-magnetic mt-8 w-full rounded-full bg-[#FF4F30] py-4 text-sm font-bold text-white hover:bg-[#E64528]">
            Scale Now
          </button>
        </div>

        {/* Studio */}
        <div className="card-lift rounded-2xl border border-[rgba(17,17,17,0.08)] bg-[#DCDBD3] p-10">
          <h3 className="text-2xl font-bold text-[#111111]">Studio</h3>
          <p className="mt-2 text-sm text-[rgba(17,17,17,0.55)]">Premium enterprise tier. Full avatar suite.</p>
          <div className="mt-8 text-4xl font-extrabold text-[#111111]">From €20K</div>
          <button className="btn-magnetic mt-8 w-full rounded-full border border-[rgba(17,17,17,0.20)] py-4 text-sm font-bold text-[#111111] hover:bg-[rgba(17,17,17,0.05)]">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/* G. TESTIMONIALS — Trusted by Industry Leaders                       */
/* ------------------------------------------------------------------ */
const testimonials = [
  {
    name: 'Stefan Berg',
    role: 'CTO',
    company: 'Transcom AB',
    content: 'Diabol has proven to be a reliable and knowledgeable partner, delivering a solution that significantly improved our development and operations workflows. If you are seeking a dependable and effective service provider, Diabol AB is the company to choose.',
    initials: 'SB',
  },
  {
    name: 'Matilda Ringstrom',
    role: 'Chief Digital Customer Experience',
    company: 'Länsförsäkringar AB',
    content: 'Diabol has proven to be a valuable partner throughout our project which have had a significant impact on our organization. Their expertise has been invaluable in transforming our operations and enabling us to become more agile and responsive to market demands. I highly recommend Diabol AB.',
    initials: 'MR',
  },
];

export const Testimonials = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.testimonial-card',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 80%',
            once: true,
          },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="w-full bg-white px-6 py-32 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20">
          <div className="font-mono text-[12px] uppercase tracking-[0.14em] text-[rgba(17,17,17,0.40)]">Proof</div>
          <h2 className="mt-4 text-[clamp(36px,5vw,56px)] font-black leading-[1] tracking-[-0.03em] text-[#111111]">
            Trusted by industry leaders.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {testimonials.map((t, i) => {
            const isDark = i % 2 === 1;
            return (
              <div
                key={i}
                className={`testimonial-card card-lift flex flex-col justify-between rounded-2xl p-10 lg:p-12 ${
                  isDark
                    ? 'bg-[#0A2843] border border-[rgba(255,255,255,0.08)]'
                    : 'bg-[#DCDBD3] border border-[rgba(17,17,17,0.08)]'
                }`}
              >
                {/* Stars */}
                <div className="mb-6 flex gap-1">
                  {[...Array(5)].map((_, si) => (
                    <svg key={si} className="h-4 w-4 text-[#FF4F30]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className={`text-[clamp(16px,1.2vw,18px)] leading-[1.7] ${isDark ? 'text-[rgba(255,255,255,0.70)]' : 'text-[rgba(17,17,17,0.70)]'}`}>
                  &ldquo;{t.content}&rdquo;
                </blockquote>

                {/* Author */}
                <div className={`mt-8 flex items-center gap-4 border-t pt-8 ${isDark ? 'border-[rgba(255,255,255,0.10)]' : 'border-[rgba(17,17,17,0.08)]'}`}>
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-mono text-sm font-bold ${isDark ? 'bg-[#DCDBD3] text-[#0A2843]' : 'bg-[#0A2843] text-white'}`}>
                    {t.initials}
                  </div>
                  <div>
                    <div className={`text-sm font-bold ${isDark ? 'text-white' : 'text-[#111111]'}`}>{t.name}</div>
                    <div className={`text-[13px] ${isDark ? 'text-[rgba(255,255,255,0.50)]' : 'text-[rgba(17,17,17,0.50)]'}`}>{t.role}</div>
                    <div className="font-mono text-[11px] tracking-[0.08em] text-[#FF4F30]">{t.company}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/* H. SOCIAL PROOF — Client Logos                                      */
/* ------------------------------------------------------------------ */
export const ClientLogos = () => {
  const clients = [
    { name: 'Spotify', file: 'Spotify_logo.png' },
    { name: 'Klarna', file: 'Klarna_logo.png' },
    { name: 'PayPal', file: 'Paypal_logo.png' },
    { name: 'King', file: 'King_logo_v1.png' },
    { name: 'Lansförsäkringar', file: 'lansforsakringar-logotyp.png' },
    { name: 'Tele2', file: 'Tele2_logo-no-margin.png' },
  ];

  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.logo-item',
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: trackRef.current,
            start: 'top 85%',
            once: true,
          },
        }
      );
    }, trackRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={trackRef} className="w-full bg-white px-6 pt-20 pb-32 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center font-mono text-[12px] uppercase tracking-[0.14em] text-[rgba(17,17,17,0.35)]">
          Previously delivered technical excellence to
        </div>
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16 lg:gap-20">
          {clients.map((client) => (
            <div
              key={client.name}
              className="logo-item group flex h-10 w-28 items-center justify-center md:h-12 md:w-32"
            >
              <img
                src={`/logos/clients/${client.file}`}
                alt={`${client.name} logo`}
                className="h-full w-full object-contain opacity-30 grayscale transition-all duration-300 group-hover:opacity-60 group-hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/* H. FAQ — Structured Data for SEO                                    */
/* ------------------------------------------------------------------ */
const faqItems = [
  {
    q: 'What is AI transformation consulting and how can it help my business?',
    a: 'AI transformation consulting helps businesses identify, prioritize, and implement AI solutions that drive measurable results. We analyze your operations, identify high-impact opportunities, redesign processes, and implement tailored solutions — typically delivering 20-40% cost reduction and 2-3x faster processes within 6 months.',
  },
  {
    q: 'How fast can we start?',
    a: 'Most businesses go live in days. We begin with a simple call flow and expand from there. More complex implementations with CRM integrations or custom workflows may take 3-4 weeks.',
  },
  {
    q: 'What can AI voice agents do for my business?',
    a: 'AI voice agents handle customer support calls, qualify sales leads, schedule appointments, process orders, provide product information, and follow up with customers — all integrated with your existing CRM and business systems, 24/7.',
  },
  {
    q: 'Will this work with our CRM or booking tool?',
    a: 'Yes. We integrate with popular CRMs (Salesforce, HubSpot, Pipedrive), calendaring tools (Calendly, Google Calendar), helpdesk software, and most business applications via APIs or webhooks.',
  },
  {
    q: 'What\'s the ROI of AI implementation?',
    a: 'Most businesses see 300-500% ROI within the first year. Returns come from reduced labor costs (30-70% on automated tasks), 2-3x faster processes, 24/7 customer engagement, and the ability to scale without proportional cost increases.',
  },
  {
    q: 'Are AI voice agents secure and compliant?',
    a: 'Yes. Our solutions are built with enterprise-grade security including data encryption, secure API connections, and compliance with GDPR, CCPA, and industry-specific regulations. Customer data is never shared with third parties.',
  },
];

export const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.faq-item', { y: 20, opacity: 0 }, {
        y: 0, opacity: 1, stagger: 0.08, duration: 0.6, ease: 'power2.out',
        scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="w-full bg-white px-6 py-24 md:px-12">
      <div className="mx-auto max-w-3xl">
        <div className="mb-4 font-mono text-[12px] uppercase tracking-[0.14em] text-[rgba(17,17,17,0.40)]">FAQ</div>
        <h2 className="mb-14 text-[clamp(36px,5vw,52px)] font-black leading-[1] tracking-[-0.03em] text-[#111111]">
          Questions we get asked.
        </h2>

        <div className="flex flex-col">
          {faqItems.map((item, i) => (
            <div
              key={i}
              className="faq-item border-b border-[rgba(17,17,17,0.08)]"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-[#FF4F30]"
              >
                <span className="text-[15px] font-semibold leading-snug text-[#111111] md:text-[17px]">
                  {item.q}
                </span>
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-[rgba(17,17,17,0.35)] transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ease-in-out ${open === i ? 'grid-rows-[1fr] pb-5 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
              >
                <div className="overflow-hidden">
                  <p className="text-[14px] leading-[1.7] text-[rgba(17,17,17,0.55)] md:text-[15px]">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* JSON-LD structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqItems.map((item) => ({
              '@type': 'Question',
              name: item.q,
              acceptedAnswer: { '@type': 'Answer', text: item.a },
            })),
          }),
        }}
      />
    </section>
  );
};

/* ------------------------------------------------------------------ */
/* I. FOOTER                                                           */
/* ------------------------------------------------------------------ */
export const Footer = () => (
  <footer data-theme="dark" className="relative -mt-12 w-full rounded-t-[40px] bg-[#0A2843] px-6 pt-24 pb-12 md:px-12">
    <div className="absolute left-0 top-0 h-[1px] w-full bg-[rgba(255,255,255,0.10)]" />
    <div className="mx-auto flex max-w-7xl flex-col justify-between gap-12 md:flex-row md:items-end">
      {/* Left */}
      <div className="flex flex-col gap-4">
        <div className="text-4xl font-bold tracking-tight text-white">Diabol.</div>
        <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-[rgba(255,255,255,0.40)]">
          AI Voice · AI Content · AI Avatars
        </div>
        <div className="text-sm text-[rgba(255,255,255,0.30)]">© 2026 Diabol. All rights reserved.</div>
      </div>

      {/* Center links */}
      <div className="flex flex-wrap gap-8 font-mono text-[12px] uppercase tracking-[0.12em] text-[rgba(255,255,255,0.50)]">
        <a href="#" className="transition-colors hover:text-[rgba(255,255,255,0.90)]">Privacy</a>
        <a href="#" className="transition-colors hover:text-[rgba(255,255,255,0.90)]">Terms</a>
        <a href="#" className="transition-colors hover:text-[rgba(255,255,255,0.90)]">LinkedIn</a>
        <a href="#" className="transition-colors hover:text-[rgba(255,255,255,0.90)]">Book a Call</a>
      </div>

      {/* Right status */}
      <div className="flex flex-col gap-3 font-mono text-[11px] tracking-[0.14em] text-[rgba(255,255,255,0.45)]">
        <div className="flex items-center gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-[#22c55e]" style={{ animation: 'pulse 1.2s ease-in-out infinite' }} />
          SYSTEM OPERATIONAL
        </div>
        <div className="flex items-center gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-[#FF4F30]" style={{ animation: 'pulse 1.8s ease-in-out infinite 0.3s' }} />
          VOICE AGENTS LIVE
        </div>
      </div>
    </div>
  </footer>
);

/* ------------------------------------------------------------------ */
/* PAGE ASSEMBLY                                                       */
/* ------------------------------------------------------------------ */
export default function DiabolLandingPage() {
  return (
    <>
      <GlobalStyles />
      <NoiseOverlay />
      <main className="relative w-full selection:bg-[#FF4F30] selection:text-white">
        <Navbar />
        <Hero />
        <Features />
        <FlipStrip />
        <Philosophy />
        <SystemStack />
        <Pricing />
        <Testimonials />
        <ClientLogos />
        <FAQ />
        <Footer />
      </main>
    </>
  );
}
