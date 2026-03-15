import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowRight, Play, User, Video, MonitorPlay, GraduationCap, X, ChevronRight
} from 'lucide-react';
import { Navbar, GlobalStyles, NoiseOverlay, Testimonials, ClientLogos, FAQ, Footer } from '../App';

gsap.registerPlugin(ScrollTrigger);

/* ------------------------------------------------------------------ */
/* CSS Keyframes (injected once via useEffect)                         */
/* ------------------------------------------------------------------ */
const AvatarPageStyles = () => {
  const css = `
    @keyframes pulse-dot { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
  `;

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
    return () => { document.head.removeChild(style); };
  }, []);

  return null;
};

/* ------------------------------------------------------------------ */
/* HERO ZONE 1A — Dark split-screen panels (video only, no body copy)  */
/* ------------------------------------------------------------------ */
const HeroPanels = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.ah-panels', { opacity: 0, y: 20, duration: 0.8, ease: 'power3.out' });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      data-theme="dark"
      className="relative overflow-hidden"
    >
      <div className="ah-panels flex flex-col lg:flex-row w-full" style={{ height: '65vh', minHeight: '400px' }}>
        {/* Left — The Founder (Real) */}
        <div className="relative flex-1 bg-[#0d0d0d] flex items-center justify-center p-8 lg:p-12 min-h-[250px] lg:min-h-0">
          {/* Warm vignette */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.4) 100%)',
            }}
          />
          {/* Professional photo slot */}
          <div className="relative rounded-2xl overflow-hidden w-full max-w-sm aspect-video">
            <img src="/img-avatar-demo.png" alt="Real person on camera" className="absolute inset-0 w-full h-full object-cover object-top" />
          </div>
          {/* Label */}
          <p className="absolute bottom-4 left-8 lg:bottom-6 lg:left-12 font-mono text-[11px] uppercase tracking-[0.14em] text-[rgba(255,255,255,0.40)]">
            Peter Ferm · Founder
          </p>
        </div>

        {/* Vertical divider — desktop only */}
        <div className="hidden lg:block w-px bg-[rgba(255,255,255,0.10)]" />
        {/* Horizontal divider — mobile only */}
        <div className="lg:hidden h-px bg-[rgba(255,255,255,0.10)]" />

        {/* Right — The Avatar (AI) */}
        <div className="relative flex-1 bg-[#0A2843] flex items-center justify-center p-8 lg:p-12 min-h-[250px] lg:min-h-0">
          {/* Placeholder: avatar demo slot */}
          <div className="relative rounded-2xl bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.10)] w-full max-w-sm aspect-video flex items-center justify-center">
            <div className="text-center">
              <p className="font-mono text-[13px] uppercase tracking-[0.14em] text-[rgba(255,255,255,0.30)] leading-relaxed mb-3">
                Avatar Demo<br />In Production
              </p>
              <span
                className="inline-flex h-2.5 w-2.5 rounded-full bg-[#FF4F30]"
                style={{ animation: 'pulse-dot 2s ease-in-out infinite' }}
              />
            </div>
          </div>
          {/* Label */}
          <p className="absolute bottom-4 right-8 lg:bottom-6 lg:right-12 font-mono text-[11px] uppercase tracking-[0.14em] text-[#FF4F30]">
            AI Avatar · Always On
          </p>
        </div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/* HERO ZONE 1B — Copy strip on Westar                                 */
/* ------------------------------------------------------------------ */
const HeroCopy = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hc-h1, .hc-body, .hc-ctas', {
        y: 20, opacity: 0, duration: 0.6, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 85%' },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="w-full bg-[#DCDBD3] px-6 py-20 lg:py-28 md:px-12">
      <div className="mx-auto max-w-[680px] text-center">
        <h1 className="hc-h1 font-black text-[clamp(42px,6vw,72px)] leading-[0.92] tracking-[-0.04em] text-[#111111]">
          Be everywhere<br />
          without being everywhere.
        </h1>
        <p className="hc-body max-w-[480px] mx-auto text-[18px] leading-[1.65] text-[rgba(17,17,17,0.65)] mt-6 mb-10">
          Your AI avatar speaks in your voice, moves like you, and shows up consistently — so your business stays visible while you focus on the work that matters.
        </p>
        <div className="hc-ctas flex flex-wrap gap-4 justify-center">
          <button className="btn-magnetic flex items-center gap-2 rounded-full bg-[#111111] px-8 py-4 text-sm font-bold text-[#DCDBD3] hover:bg-[#222222]">
            See a Demo <Play size={14} />
          </button>
          <button className="btn-magnetic rounded-full border border-[rgba(17,17,17,0.20)] bg-transparent px-8 py-4 text-sm font-bold text-[#111111] hover:bg-[rgba(17,17,17,0.04)]">
            Build My Avatar
          </button>
        </div>
      </div>
    </section>
  );
};

/* Combined hero wrapper for page assembly */
const AvatarHero = () => (
  <>
    <HeroPanels />
    <HeroCopy />
  </>
);

/* ------------------------------------------------------------------ */
/* WHAT IT IS — Honest explanation with can/can't columns              */
/* ------------------------------------------------------------------ */
const WhatItIs = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.wit-col', {
        y: 30, opacity: 0, stagger: 0.15, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 75%' },
      });
      gsap.from('.wit-callout', {
        y: 20, opacity: 0, duration: 0.6, ease: 'power2.out',
        scrollTrigger: { trigger: '.wit-callout', start: 'top 85%' },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  const canDo: Array<string | { main: string; sub: string }> = [
    'Deliver any script in your voice + likeness',
    'Appear in marketing videos, explainers, and ads',
    'Produce weekly content without on-camera time',
    'Be used in unlimited videos once trained',
    'Show up across LinkedIn, YouTube, and social',
    'Save 8–12 hours per week of filming and editing',
    { main: 'Handle live Q&A and real-time conversations', sub: '(Interactive Avatar — advanced setup, see below)' },
  ];

  const cantDo = [
    'Replace the real you — on stage, in a room, in the moment',
    'React to breaking news without a new script',
    'Replace you entirely — it amplifies you',
  ];

  return (
    <section ref={ref} className="w-full bg-[#DCDBD3] px-6 py-32 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-[rgba(17,17,17,0.40)]">
            What It Is
          </p>
          <h2 className="mt-4 text-[clamp(42px,6vw,72px)] font-black leading-[0.95] tracking-[-0.03em] text-[#111111]">
            Your face. Your voice.
          </h2>
          <h2 className="text-[clamp(42px,6vw,72px)] font-black leading-[0.95] tracking-[-0.03em] text-[#FF4F30]">
            Without your time.
          </h2>
        </div>

        {/* Two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mb-16">
          {/* Left — what it CAN do */}
          <div className="wit-col md:pr-10 md:border-r border-[rgba(17,17,17,0.12)] pb-8 md:pb-0">
            <h3 className="text-lg font-bold text-[#111111] mb-6">It can</h3>
            <div className="space-y-3">
              {canDo.map((item, i) => {
                const main = typeof item === 'string' ? item : item.main;
                const sub = typeof item === 'string' ? null : item.sub;
                return (
                  <div key={i} className="flex items-start gap-3">
                    <span className="font-mono text-[13px] text-[#FF4F30] mt-0.5 shrink-0">→</span>
                    <span className="font-mono text-[13px] leading-[1.6] text-[rgba(17,17,17,0.70)]">
                      {main}
                      {sub && (
                        <span className="block text-[11px] text-[rgba(17,17,17,0.40)] mt-0.5">{sub}</span>
                      )}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right — what it CANNOT do */}
          <div className="wit-col md:pl-10 pt-8 md:pt-0">
            <h3 className="text-lg font-bold text-[rgba(17,17,17,0.50)] mb-6">It can't</h3>
            <div className="space-y-3">
              {cantDo.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="font-mono text-[13px] text-[rgba(17,17,17,0.35)] mt-0.5 shrink-0">×</span>
                  <span className="font-mono text-[13px] leading-[1.6] text-[rgba(17,17,17,0.40)]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Callout */}
        <div className="wit-callout mx-auto max-w-[640px] rounded-2xl bg-white p-6 md:p-8 border border-[rgba(17,17,17,0.08)]">
          <p className="text-[17px] leading-[1.65] text-[rgba(17,17,17,0.65)] text-center">
            "The goal isn't to replace you. It's to multiply you. One recording session gives you an unlimited supply of professional video content. That's the leverage."
          </p>
        </div>

        {/* Interactive Avatar card */}
        <div className="wit-callout mx-auto max-w-[640px] rounded-2xl bg-[#0A2843] p-8 border border-[rgba(255,255,255,0.10)] mt-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#FF4F30] mb-3">
            Advanced · Interactive Avatar
          </p>
          <h3 className="text-[20px] font-bold text-white mb-3">
            Your avatar, live on your website.
          </h3>
          <p className="text-[15px] leading-[1.65] text-[rgba(255,255,255,0.65)] mb-5">
            Interactive Avatar goes further than pre-scripted video. Your digital twin can hold real-time conversations — answering questions, walking visitors through your services, qualifying leads — live, on demand, 24/7. Same face. Same voice. No script required.
          </p>
          <div className="space-y-2 mb-6">
            <div className="flex items-start gap-3">
              <span className="font-mono text-[12px] text-[rgba(255,255,255,0.60)] mt-0.5 shrink-0">→</span>
              <span className="font-mono text-[12px] leading-[1.6] text-[rgba(255,255,255,0.60)]">
                Real-time Q&A and live conversation on any webpage
              </span>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-mono text-[12px] text-[rgba(255,255,255,0.60)] mt-0.5 shrink-0">→</span>
              <span className="font-mono text-[12px] leading-[1.6] text-[rgba(255,255,255,0.60)]">
                Connects to your knowledge base — answers questions accurately
              </span>
            </div>
          </div>
          <button className="rounded-full border border-[rgba(255,255,255,0.20)] px-6 py-3 text-sm font-semibold text-white hover:bg-[rgba(255,255,255,0.05)] transition-colors duration-200">
            Ask about Interactive Avatar setup
          </button>
        </div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/* USE CASES — Three cards with mini visuals                           */
/* ------------------------------------------------------------------ */
const UseCases = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.uc-card', {
        y: 30, opacity: 0, stagger: 0.15, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 75%' },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="w-full bg-white px-6 py-32 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20">
          <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-[rgba(17,17,17,0.40)]">
            How Founders Use It
          </p>
          <h2 className="mt-4 text-[clamp(36px,5vw,60px)] font-black leading-[0.95] tracking-[-0.03em] text-[#111111]">
            Three ways it shows up for you.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Card 1 — Weekly Content */}
          <div className="uc-card rounded-2xl bg-[#DCDBD3] p-8">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#111111] text-[#DCDBD3] text-xs font-bold mb-6">
              1
            </div>
            <h3 className="text-lg font-bold text-[#111111] mb-3">
              Your weekly video. Without booking a studio.
            </h3>
            <p className="text-sm leading-[1.65] text-[rgba(17,17,17,0.60)] mb-6">
              Your avatar delivers your LinkedIn or YouTube content — consistent, on-brand, on time. Record a script, approve the output, publish.
            </p>
            {/* Mini visual — LinkedIn video post mock */}
            <div className="rounded-xl bg-[#111111] p-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(255,255,255,0.10)] text-white shrink-0">
                <Play size={16} />
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[rgba(255,255,255,0.50)]">
                Weekly Post · 2 min · Published
              </span>
            </div>
          </div>

          {/* Card 2 — Product & Service Explainers */}
          <div className="uc-card rounded-2xl bg-[#DCDBD3] p-8">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#111111] text-[#DCDBD3] text-xs font-bold mb-6">
              2
            </div>
            <h3 className="text-lg font-bold text-[#111111] mb-3">
              Professional explainer videos at scale.
            </h3>
            <p className="text-sm leading-[1.65] text-[rgba(17,17,17,0.60)] mb-6">
              Every service you offer. Every product you launch. Explained professionally by you — without you being on set for each one.
            </p>
            {/* Mini visual — stacked thumbnail tiles */}
            <div className="space-y-2">
              {['Product Video', 'Service Explainer', 'Case Study'].map((label) => (
                <div
                  key={label}
                  className="rounded-lg bg-[rgba(255,255,255,0.60)] border border-[rgba(17,17,17,0.08)] px-4 py-2.5 flex items-center gap-2"
                >
                  <Video size={12} className="text-[rgba(17,17,17,0.30)]" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[rgba(17,17,17,0.40)]">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3 — Training & Onboarding */}
          <div className="uc-card rounded-2xl bg-[#DCDBD3] p-8">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#111111] text-[#DCDBD3] text-xs font-bold mb-6">
              3
            </div>
            <h3 className="text-lg font-bold text-[#111111] mb-3">
              Your onboarding, in your voice. Forever.
            </h3>
            <p className="text-sm leading-[1.65] text-[rgba(17,17,17,0.60)] mb-6">
              Internal training, onboarding sequences, process walkthroughs — delivered by you, at any scale, without scheduling a recording session every time.
            </p>
            {/* Mini visual — internal video player mock */}
            <div className="rounded-xl bg-[#111111] p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[rgba(255,255,255,0.50)]">
                  Onboarding · Module 3
                </span>
                <span className="flex h-6 w-6 items-center justify-center rounded bg-[rgba(255,255,255,0.10)] text-[rgba(255,255,255,0.40)] text-[9px] font-bold">
                  PF
                </span>
              </div>
              {/* Progress bar */}
              <div className="h-1 rounded-full bg-[rgba(255,255,255,0.10)] overflow-hidden">
                <div className="h-full w-[65%] rounded-full bg-[#FF4F30]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/* FULL-BLEED VISUAL BREAK — Atmospheric avatar image                  */
/* ------------------------------------------------------------------ */
const FullBleedBreak = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.fbb-avatar-img',
        { scale: 1.04 },
        {
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden"
      style={{ height: '65vh', minHeight: '350px' }}
    >
      <div
        className="fbb-avatar-img absolute inset-0"
        style={{
          backgroundImage: 'url(/img-avatar-portrait.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          filter: 'saturate(0.7)',
          willChange: 'transform',
        }}
      />
      {/* Very light overlay */}
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.10)]" />
      {/* Ghost text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className="font-black text-white select-none pointer-events-none"
          style={{
            fontSize: 'clamp(120px, 22vw, 280px)',
            opacity: 0.06,
            letterSpacing: '-0.04em',
          }}
        >
          YOU
        </span>
      </div>
      {/* Bottom border fade — desktop only */}
      <div
        className="hidden lg:block absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.12) 30%, rgba(255,255,255,0.12) 70%, transparent)',
        }}
      />
    </section>
  );
};

/* ------------------------------------------------------------------ */
/* SETUP PROCESS — Oxford Blue with 3 steps + timeline/price strip     */
/* ------------------------------------------------------------------ */
const SetupProcess = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.sp-step', {
        y: 30, opacity: 0, stagger: 0.15, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 75%' },
      });
      gsap.from('.sp-strip', {
        y: 20, opacity: 0, duration: 0.6, ease: 'power2.out',
        scrollTrigger: { trigger: '.sp-strip', start: 'top 85%' },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  const steps = [
    {
      num: '01',
      title: 'The recording session',
      body: '30–45 minutes on video call or in person. You speak naturally, cover a range of expressions and cadences. This is all we need to build from.',
    },
    {
      num: '02',
      title: 'We build your avatar',
      body: 'We process your footage through our avatar platform. We refine, test, and tweak until the output matches your real presence at a quality you\'d be happy to publish.',
    },
    {
      num: '03',
      title: 'You approve, then it scales',
      body: 'Send us a script. Get a professional video back in hours. Every video you need from here — without booking another session.',
    },
  ];

  return (
    <section ref={ref} data-theme="dark" className="w-full bg-[#0A2843] px-6 py-32 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20">
          <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-[rgba(255,255,255,0.40)]">
            The Process
          </p>
          <h2 className="mt-4 text-[clamp(42px,6vw,72px)] font-black leading-[0.95] tracking-[-0.03em] text-white">
            One session.
          </h2>
          <h2 className="text-[clamp(42px,6vw,72px)] font-black leading-[0.95] tracking-[-0.03em] text-[#FF4F30]">
            Unlimited videos.
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 items-start mb-16">
          {steps.map((step, i) => (
            <div key={step.num} className="sp-step flex md:flex-col items-start gap-5 md:px-6 relative">
              {i < steps.length - 1 && (
                <span className="hidden md:block absolute top-5 -right-1 text-[rgba(255,255,255,0.20)] text-lg">→</span>
              )}
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#DCDBD3] text-[#0A2843] text-sm font-bold shrink-0">
                {step.num}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm leading-[1.65] text-[rgba(255,255,255,0.65)]">{step.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline + Price strip */}
        <div className="sp-strip mx-auto max-w-[580px] rounded-2xl bg-[#060e1a] border border-[rgba(255,255,255,0.10)] p-6 md:p-8">
          <div className="grid grid-cols-3 gap-0">
            {[
              { label: 'Timeline', value: '1–2 weeks', sub: 'setup' },
              { label: 'Price', value: 'From €2,000', sub: 'one-time' },
              { label: 'Delivery', value: 'Unlimited videos', sub: 'after setup' },
            ].map((col, i) => (
              <div
                key={col.label}
                className={`text-center ${i < 2 ? 'border-r border-[rgba(255,255,255,0.08)]' : ''} px-2`}
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-white mb-2">
                  {col.label}
                </p>
                <p className="font-mono text-[12px] text-[rgba(255,255,255,0.40)] leading-snug">
                  {col.value}
                </p>
                <p className="font-mono text-[10px] text-[rgba(255,255,255,0.25)] mt-0.5">
                  {col.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/* PAIRED WITH AI CONTENT — Cross-sell section                         */
/* ------------------------------------------------------------------ */
const PairedWithContent = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.pwc-content', {
        y: 30, opacity: 0, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 75%' },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="w-full bg-[#DCDBD3] px-6 py-32 md:px-12">
      <div className="pwc-content mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-[rgba(17,17,17,0.40)]">
            Better Together
          </p>
          <h2 className="mt-4 text-[clamp(36px,5vw,60px)] font-black leading-[0.95] tracking-[-0.03em] text-[#111111]">
            Avatars compound<br />with AI Content.
          </h2>
        </div>

        <p className="max-w-[560px] text-[16px] leading-[1.65] text-[rgba(17,17,17,0.65)] mb-12">
          The avatar gives you a presence. AI Content gives you volume. Together: your face and voice appear in every piece of content — product videos, ads, social posts, explainers — without you stepping in front of a camera more than once.
        </p>

        {/* Visual equation */}
        <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-12">
          {/* Avatar icon */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white border border-[rgba(17,17,17,0.08)]">
              <User size={22} className="text-[#111111]" />
            </div>
            <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[rgba(17,17,17,0.40)]">Avatar</span>
          </div>

          <span className="text-xl font-bold text-[rgba(17,17,17,0.25)]">+</span>

          {/* Content icon */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white border border-[rgba(17,17,17,0.08)]">
              <MonitorPlay size={22} className="text-[#111111]" />
            </div>
            <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[rgba(17,17,17,0.40)]">Content</span>
          </div>

          <span className="text-xl font-bold text-[rgba(17,17,17,0.25)]">=</span>

          {/* CEO Presence System pill */}
          <div className="flex flex-col items-center gap-2">
            <div className="rounded-full bg-[#111111] px-6 py-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#DCDBD3]">
                CEO Presence System
              </span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <a
          href="/ai-content"
          className="inline-flex items-center gap-2 rounded-full border border-[rgba(17,17,17,0.20)] px-8 py-4 text-sm font-semibold text-[#111111] hover:bg-[rgba(17,17,17,0.04)] transition-colors duration-200"
        >
          See the Content + Avatar package <ChevronRight size={16} />
        </a>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/* FINAL CTA — Near-black centered                                     */
/* ------------------------------------------------------------------ */
const FinalCTA = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.afcta-content', {
        y: 30, opacity: 0, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 75%' },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} data-theme="dark" className="w-full bg-[#111111] px-6 py-32 md:px-12">
      <div className="afcta-content mx-auto max-w-xl text-center">
        <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-[rgba(255,255,255,0.35)] mb-8">
          Ready
        </p>
        <h2 className="text-[clamp(36px,5vw,60px)] font-black leading-[0.95] tracking-[-0.03em] mb-8">
          <span className="text-white block">Stop choosing between</span>
          <span className="text-[#FF4F30] block mt-2">quality and consistency.</span>
        </h2>
        <p className="text-[16px] leading-[1.65] text-[rgba(255,255,255,0.60)] max-w-[480px] mx-auto mb-10">
          Book a 30-minute call. We'll show you a live demo, walk through what the setup looks like for your business, and answer every question before you commit to anything.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="btn-magnetic rounded-full bg-white px-10 py-4 text-sm font-semibold text-[#111111] hover:bg-[rgba(255,255,255,0.90)]">
            Book a Demo Call
          </button>
          <button className="btn-magnetic rounded-full border border-[rgba(255,255,255,0.20)] bg-transparent px-8 py-4 text-sm font-semibold text-white hover:bg-[rgba(255,255,255,0.05)]">
            Build My Avatar
          </button>
        </div>
        <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-[rgba(255,255,255,0.30)]">
          No commitment · 30 minutes · Free demo
        </p>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/* PAGE ASSEMBLY                                                       */
/* ------------------------------------------------------------------ */
export default function AIAvatarsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <GlobalStyles />
      <NoiseOverlay />
      <AvatarPageStyles />
      <main className="relative w-full selection:bg-[#FF4F30] selection:text-white">
        <Navbar forceDark />
        <AvatarHero />
        <WhatItIs />
        <UseCases />
        <FullBleedBreak />
        <SetupProcess />
        <PairedWithContent />
        <FinalCTA />
        <Testimonials />
        <ClientLogos />
        <FAQ />
        <Footer />
      </main>
    </>
  );
}
