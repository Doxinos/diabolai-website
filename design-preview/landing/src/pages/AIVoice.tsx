import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Phone, PhoneCall, PhoneOff, Calendar, Shield, Mic, UserCheck, ArrowRight, ChevronDown, Check
} from 'lucide-react';
import { Navbar, GlobalStyles, NoiseOverlay, Testimonials, ClientLogos, FAQ, Footer } from '../App';

gsap.registerPlugin(ScrollTrigger);

/* ------------------------------------------------------------------ */
/* HERO — Westar with split layout: text left, image right             */
/* ------------------------------------------------------------------ */
const VoiceHero = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.from('.vh-label', { y: 12, opacity: 0, duration: 0.6 })
        .from('.vh-h1', { y: 30, opacity: 0, duration: 0.7 }, 0.2)
        .from('.vh-body', { y: 16, opacity: 0, duration: 0.5 }, 0.5)
        .from('.vh-ctas', { y: 16, opacity: 0, duration: 0.5 }, 0.75);
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-screen bg-[#DCDBD3] flex items-center overflow-hidden"
    >
      {/* Right half — video with long smooth CSS mask fade */}
      <div
        className="absolute top-0 right-0 w-[72%] h-full hidden lg:block"
        style={{
          maskImage: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 30%, rgba(0,0,0,0.2) 55%, rgba(0,0,0,0) 75%)',
          WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 30%, rgba(0,0,0,0.2) 55%, rgba(0,0,0,0) 75%)',
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          disablePictureInPicture
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.50) saturate(1.6)' }}
        >
          <source src="/ai-voice-agent-intro-compressed.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 lg:px-20 py-32 lg:py-0">
        <div className="max-w-xl">
          {/* Label */}
          <p className="vh-label font-mono text-[12px] uppercase tracking-[0.18em] text-[rgba(17,17,17,0.40)] mb-8">
            — AI Voice Agents
          </p>

          {/* Headline */}
          <h1 className="vh-h1 font-black text-[clamp(44px,7vw,88px)] leading-[0.92] tracking-[-0.04em] text-[#111111] mb-8">
            Every missed call<br />
            is a job you gave<br />
            your competitor.
          </h1>

          {/* Body */}
          <p className="vh-body max-w-[440px] text-[clamp(16px,1.3vw,19px)] leading-[1.65] text-[rgba(17,17,17,0.65)] mb-10">
            Your AI voice agent answers every call, qualifies the lead, and books the job — 24/7, in your business's voice. Inbound and outbound.
          </p>

          {/* CTAs */}
          <div className="vh-ctas flex flex-wrap gap-4">
            <button className="btn-magnetic flex items-center gap-2 rounded-full bg-[#111111] px-8 py-4 text-sm font-bold text-[#DCDBD3] hover:bg-[#222222]">
              Book a Free Pilot Call <ArrowRight size={16} />
            </button>
            <button className="btn-magnetic rounded-full border border-[rgba(17,17,17,0.20)] bg-transparent px-8 py-4 text-sm font-bold text-[#111111] hover:bg-[rgba(17,17,17,0.04)]">
              See how it works
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/* THE PROBLEM — Empathy strip with 3 brutal stats                     */
/* ------------------------------------------------------------------ */
const Problem = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.prob-col', {
        y: 30, opacity: 0, stagger: 0.15, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 75%' },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  const stats = [
    {
      stat: '62%',
      body: 'of callers who reach voicemail don\'t leave a message. They call the next number on the list.',
    },
    {
      stat: '< 5 min',
      body: 'is how long you have to call a lead back before they\'ve already made a decision. Most businesses take hours.',
    },
    {
      stat: '24/7',
      body: 'is when your competitors\' AI answers. Nights. Weekends. Bank holidays. Every call.',
    },
  ];

  return (
    <section ref={ref} className="w-full bg-white px-6 py-28 md:px-12">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-[rgba(17,17,17,0.35)] mb-16">
          The Reality
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`prob-col py-4 md:py-0 md:px-8 ${
                i < stats.length - 1
                  ? 'border-b md:border-b-0 md:border-r border-[rgba(17,17,17,0.10)]'
                  : ''
              } ${i === 0 ? 'md:pl-0' : ''} ${i === stats.length - 1 ? 'md:pr-0' : ''}`}
            >
              <p className="font-bold text-[clamp(36px,5vw,56px)] leading-none tracking-[-0.03em] text-[#FF4F30] mb-4">
                {s.stat}
              </p>
              <p className="text-[15px] leading-[1.65] text-[rgba(17,17,17,0.60)] max-w-xs">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/* HOW IT WORKS — Three steps with connectors + call flow animation    */
/* ------------------------------------------------------------------ */
const HowItWorks = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hiw-step', {
        y: 30, opacity: 0, stagger: 0.15, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 75%' },
      });
      gsap.from('.hiw-flow', {
        y: 20, opacity: 0, duration: 0.6, ease: 'power2.out',
        scrollTrigger: { trigger: '.hiw-flow', start: 'top 85%' },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  const steps = [
    {
      num: '01',
      title: 'We build your agent',
      body: 'Trained on your business — your services, your prices, your availability. Sounds like your company, not like a robot.',
    },
    {
      num: '02',
      title: 'It handles every call',
      body: 'Answers every call 24/7. Automatically calls back missed leads before they go cold. Qualifies against your criteria and books jobs directly into your calendar.',
    },
    {
      num: '03',
      title: 'You get the work',
      body: 'Jobs appear in your calendar. Leads land in your CRM. You only touch the calls that need a human — everything else is handled.',
    },
  ];

  return (
    <section ref={ref} className="w-full bg-[#DCDBD3] px-6 py-32 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20">
          <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-[rgba(17,17,17,0.40)]">
            The Process
          </p>
          <h2 className="mt-4 text-[clamp(42px,6vw,72px)] font-black leading-[0.95] tracking-[-0.03em] text-[#111111]">
            Set up in 3 weeks.
          </h2>
          <p className="mt-4 text-[16px] leading-[1.65] text-[rgba(17,17,17,0.60)] max-w-lg">
            One phone number. One qualification flow. Results before you commit to anything more.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 items-start">
          {steps.map((step, i) => (
            <div key={step.num} className="hiw-step flex md:flex-col items-start gap-5 md:px-6 relative">
              {/* Connector arrow on desktop */}
              {i < steps.length - 1 && (
                <span className="hidden md:block absolute top-5 -right-1 text-[rgba(17,17,17,0.20)] text-lg">→</span>
              )}
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#111111] text-[#DCDBD3] text-sm font-bold shrink-0">
                {step.num}
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#111111] mb-2">{step.title}</h3>
                <p className="text-sm leading-[1.65] text-[rgba(17,17,17,0.60)]">{step.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Animated call flow diagram */}
        <div className="hiw-flow mt-20 rounded-2xl bg-white border border-[rgba(17,17,17,0.06)] p-6 md:p-8 overflow-hidden">
          <CallFlowAnimation />
        </div>
      </div>
    </section>
  );
};

/* Small animated SVG call flow */
const CallFlowAnimation = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep(s => (s + 1) % 5);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  const nodes = [
    { label: 'INCOMING CALL', icon: <Phone size={16} /> },
    { label: 'AI AGENT', icon: <PhoneCall size={16} /> },
    { label: 'QUALIFICATION', icon: <UserCheck size={16} /> },
    { label: 'BOOKING', icon: <Calendar size={16} /> },
    { label: 'CONFIRMED', icon: <Check size={16} /> },
  ];

  return (
    <div className="flex items-center justify-between gap-2 overflow-x-auto py-2">
      {nodes.map((node, i) => (
        <div key={node.label} className="flex items-center gap-2 shrink-0">
          <div
            className="flex flex-col items-center gap-2 transition-opacity duration-500"
            style={{ opacity: i <= step ? 1 : 0.25 }}
          >
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-500 ${
                i <= step
                  ? i === step
                    ? 'bg-[#111111] text-[#DCDBD3]'
                    : 'bg-[#22c55e] text-white'
                  : 'bg-[rgba(17,17,17,0.06)] text-[rgba(17,17,17,0.25)]'
              }`}
            >
              {node.icon}
            </div>
            <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.14em] text-[rgba(17,17,17,0.40)] text-center whitespace-nowrap">
              {node.label}
            </span>
          </div>
          {i < nodes.length - 1 && (
            <div
              className="h-px w-6 md:w-12 transition-colors duration-500 shrink-0"
              style={{
                backgroundColor: i < step ? '#22c55e' : 'rgba(17,17,17,0.12)',
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* LIVE DEMO PANEL — Typewriter transcript on Oxford Blue              */
/* ------------------------------------------------------------------ */
const transcriptLines = [
  '[INCOMING CALL — 07:43 AM]',
  '',
  'AI AGENT:  "Thanks for calling [Business Name]. You\'ve reached',
  '            us outside business hours. I\'m [Name]\'s AI',
  '            assistant — I can help you right now."',
  '',
  'CALLER:    "Yeah, I need someone to look at my boiler.',
  '            It stopped working last night."',
  '',
  'AI AGENT:  "Sorry to hear that — let\'s get that sorted.',
  '            Are you in [City] or surrounding area?"',
  '',
  'CALLER:    "Yeah, [City]."',
  '',
  'AI AGENT:  "Great. Is this an emergency, or can we schedule',
  '            you in for later this week?"',
  '',
  'CALLER:    "It\'s pretty urgent — we\'ve got no heating."',
  '',
  'AI AGENT:  "Understood. I\'m checking the schedule now...',
  '            I can get someone to you tomorrow morning,',
  '            8 to 10 AM. Does that work?"',
  '',
  'CALLER:    "Yes, perfect."',
  '',
  'AI AGENT:  "Done. I\'ll send you a confirmation text now.',
  '            What\'s the best mobile number for you?"',
];

const confirmationLines = [
  'BOOKING CONFIRMED ✓',
  'LEAD QUALIFIED ✓',
  'CALENDAR UPDATED ✓',
];

const LiveDemo = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [lines, setLines] = useState<string[]>([]);
  const [started, setStarted] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: ref.current,
        start: 'top 70%',
        onEnter: () => setStarted(true),
        once: true,
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!started) return;

    const indexRef = { current: 0 };
    setLines([]);
    setShowConfirm(false);

    const timer = setInterval(() => {
      if (indexRef.current < transcriptLines.length) {
        const line = transcriptLines[indexRef.current];
        setLines(prev => [...prev, line]);
        indexRef.current++;
      } else {
        setShowConfirm(true);
        clearInterval(timer);
      }
    }, 180);

    return () => clearInterval(timer);
  }, [started]);

  return (
    <section ref={ref} data-theme="dark" className="w-full bg-[#0A2843] px-6 py-32 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-[rgba(255,255,255,0.40)]">
            In Action
          </p>
          <h2 className="mt-4 text-[clamp(36px,5vw,60px)] font-black leading-[0.95] tracking-[-0.03em] text-white">
            What your caller hears.
          </h2>
          <p className="mt-4 text-[16px] leading-[1.65] text-[rgba(255,255,255,0.65)] max-w-xl">
            A live simulation of an inbound call qualification flow. This is what runs on your number.
          </p>
        </div>

        {/* Simulation panel */}
        <div className="relative rounded-2xl bg-[#060e1a] border border-[rgba(255,255,255,0.10)] p-6 md:p-8">
          {/* LIVE badge */}
          <div className="absolute top-4 right-4 md:top-6 md:right-6 flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#FF4F30] opacity-75" style={{ animation: 'ping 1.5s cubic-bezier(0,0,0.2,1) infinite' }} />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#FF4F30]" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#FF4F30]">
              Live Simulation
            </span>
          </div>

          {/* Transcript */}
          <div className="font-mono text-[12px] md:text-[13px] leading-relaxed text-[rgba(255,255,255,0.80)] min-h-[300px] max-h-[500px] overflow-y-auto pr-4">
            {lines.map((line, i) => (
              <div key={i} className={line === '' ? 'h-3' : ''}>
                {line}
              </div>
            ))}
            {!showConfirm && started && (
              <span className="inline-block w-2 h-4 bg-[#FF4F30] ml-1" style={{ animation: 'blink 1s step-end infinite' }} />
            )}
          </div>

          {/* Confirmation dots */}
          {showConfirm && (
            <div className="mt-6 pt-4 border-t border-[rgba(255,255,255,0.06)] flex flex-col gap-2">
              {confirmationLines.map((c, i) => (
                <div
                  key={c}
                  className="flex items-center gap-2 font-mono text-[12px] md:text-[13px]"
                  style={{
                    opacity: 0,
                    animation: `fadeSlideIn 0.5s ease ${i * 0.3}s forwards`,
                  }}
                >
                  <span
                    className="inline-flex h-2.5 w-2.5 rounded-full bg-[#22c55e]"
                    style={{ animation: `pulseOnce 0.6s ease ${i * 0.3 + 0.2}s both` }}
                  />
                  <span className="text-[rgba(255,255,255,0.80)]">{c}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Tech caption */}
        <p className="mt-6 text-center font-mono text-[11px] uppercase tracking-[0.14em] text-[rgba(255,255,255,0.35)]">
          Built with Vapi · ElevenLabs Voice · n8n Automation
        </p>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/* WHAT YOU GET — 6 outcome cards in 2×3 grid                          */
/* ------------------------------------------------------------------ */
const WhatYouGet = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.outcome-card', {
        y: 30, opacity: 0, stagger: 0.1, duration: 0.6, ease: 'power2.out',
        scrollTrigger: { trigger: ref.current, start: 'top 75%' },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  const outcomes = [
    {
      icon: <Phone size={20} />,
      title: '24/7 Inbound Answering',
      body: 'Every call answered on the first ring. Nights, weekends, holidays.',
    },
    {
      icon: <PhoneOff size={20} />,
      title: 'Outbound Follow-Up',
      body: 'Missed a call? The agent calls the lead back within minutes, automatically.',
    },
    {
      icon: <UserCheck size={20} />,
      title: 'Lead Qualification',
      body: 'Separates serious enquiries from tyre-kickers before they reach your calendar.',
    },
    {
      icon: <Calendar size={20} />,
      title: 'Calendar Booking',
      body: 'Jobs book directly into your calendar or CRM. No manual entry.',
    },
    {
      icon: <Mic size={20} />,
      title: 'Your Voice & Brand',
      body: 'ElevenLabs voice cloning. Sounds like your business, not a call centre.',
    },
    {
      icon: <Shield size={20} />,
      title: 'GDPR Compliant',
      body: 'Built with compliance from day one. Call recordings, consent, data handling — all handled.',
    },
  ];

  return (
    <section ref={ref} className="w-full bg-white px-6 py-32 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20">
          <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-[rgba(17,17,17,0.40)]">
            The System
          </p>
          <h2 className="mt-4 text-[clamp(36px,5vw,60px)] font-black leading-[0.95] tracking-[-0.03em] text-[#111111]">
            Everything handled.<br />
            <span className="text-[rgba(17,17,17,0.35)]">Nothing missed.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {outcomes.map((o) => (
            <div
              key={o.title}
              className="outcome-card group rounded-2xl bg-[#DCDBD3] p-6 border border-[rgba(17,17,17,0.06)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="mb-5 text-[#111111]">{o.icon}</div>
              <h3 className="text-lg font-bold text-[#111111] mb-2">{o.title}</h3>
              <p className="text-sm leading-[1.65] text-[rgba(17,17,17,0.60)]">{o.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/* FULL-BLEED VISUAL BREAK — Atmospheric image with ghost text         */
/* ------------------------------------------------------------------ */
const FullBleedBreak = ({
  src = 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1600&q=80',
  overlayColor = 'rgba(17,17,17,0.35)',
  ghostText = '24/7',
  height = '60vh',
}: {
  src?: string;
  overlayColor?: string;
  ghostText?: string;
  height?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.fbb-img',
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
      style={{ height, minHeight: '300px' }}
    >
      <div
        className="fbb-img absolute inset-0"
        style={{
          backgroundImage: `url(${src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          willChange: 'transform',
        }}
      />
      <div className="absolute inset-0" style={{ backgroundColor: overlayColor }} />
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className="font-mono text-white select-none pointer-events-none"
          style={{
            fontSize: 'clamp(120px, 20vw, 240px)',
            opacity: 0.06,
            fontWeight: 700,
            letterSpacing: '-0.04em',
          }}
        >
          {ghostText}
        </span>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/* PILOT OFFER — Dark card on Westar                                   */
/* ------------------------------------------------------------------ */
const PilotOffer = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.pilot-card', {
        y: 40, opacity: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 70%' },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  const checklist = [
    '1 phone number configured (inbound + outbound)',
    'Qualification flow built and approved by you',
    'Calendar + CRM integration',
    '2–3 week delivery',
    'Your voice (ElevenLabs) or standard professional voice',
  ];

  return (
    <section ref={ref} className="w-full bg-[#DCDBD3] px-6 py-32 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-[rgba(17,17,17,0.40)]">
            The Offer
          </p>
          <h2 className="mt-4 text-[clamp(36px,5vw,60px)] font-black leading-[0.95] tracking-[-0.03em] text-[#111111]">
            Start with a Pilot.
          </h2>
          <p className="mt-4 text-[16px] leading-[1.65] text-[rgba(17,17,17,0.65)] max-w-xl">
            No long contracts. No upfront commitment to a system you haven't seen work. Run the pilot, see the results, then decide.
          </p>
        </div>

        <div className="pilot-card rounded-2xl bg-[#111111] p-8 md:p-10 text-[#DCDBD3] max-w-3xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[rgba(255,255,255,0.40)] mb-4">
            AI Voice Pilot
          </p>
          <h3 className="text-[clamp(22px,3vw,28px)] font-extrabold text-white mb-4">
            One number. One flow. Three weeks.
          </h3>
          <p className="text-[15px] leading-[1.65] text-[rgba(255,255,255,0.65)] mb-8 max-w-xl">
            We build your voice agent, connect it to your calendar and CRM, and run it live. Answers inbound calls, follows up on missed leads, books jobs. You see it working before committing to anything more.
          </p>

          {/* Checklist */}
          <div className="space-y-3 mb-8">
            {checklist.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="text-[#22c55e] mt-0.5 shrink-0">✓</span>
                <span className="font-mono text-[12px] text-[rgba(255,255,255,0.80)]">{item}</span>
              </div>
            ))}
          </div>

          {/* Price */}
          <div className="mb-8">
            <span className="text-[clamp(28px,4vw,32px)] font-extrabold text-white">From €2,000</span>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[rgba(255,255,255,0.40)] mt-1">
              One-time setup · No monthly lock-in
            </p>
          </div>

          {/* CTA */}
          <button className="btn-magnetic rounded-full bg-[#FF4F30] px-8 py-4 text-sm font-bold text-white hover:bg-[#E64528]">
            Start Your Pilot
          </button>
        </div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/* OBJECTIONS — Accordion Q&A                                          */
/* ------------------------------------------------------------------ */
const Objections = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = [
    {
      q: 'Will it sound robotic?',
      a: 'No. We use ElevenLabs for voice — the same platform that powers some of the most realistic AI voices available. Your agent sounds professional and human. If you want it trained on your actual voice, that\'s an option too.',
    },
    {
      q: 'What if it gets a call wrong?',
      a: 'It follows a qualification script you approve before it goes live. If something comes up it can\'t handle, it routes to you or takes a message. You\'re in control of the guardrails — we build them with you.',
    },
    {
      q: 'Is this GDPR compliant?',
      a: 'Yes. GDPR compliance is built in from day one — call recording consent, data storage, processing agreements. We\'ve handled this for EU clients. If you have a specific compliance requirement, tell us in the pilot call and we\'ll address it directly.',
    },
    {
      q: 'Can it do outbound calls too?',
      a: 'Yes. The same agent that handles inbound can run outbound sequences — following up on missed calls, re-engaging cold leads, or qualifying a list. Outbound can be added to any pilot or built as a separate flow.',
    },
  ];

  return (
    <section className="w-full bg-white px-6 py-32 md:px-12">
      <div className="mx-auto max-w-3xl">
        <div className="mb-16">
          <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-[rgba(17,17,17,0.40)]">
            Questions
          </p>
          <h2 className="mt-4 text-[clamp(36px,5vw,60px)] font-black leading-[0.95] tracking-[-0.03em] text-[#111111]">
            Worth asking.
          </h2>
        </div>

        <div className="divide-y divide-[rgba(17,17,17,0.10)]">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="py-6">
                <button
                  className="w-full flex items-center justify-between text-left group"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span className="text-[18px] font-semibold text-[#111111] pr-8 group-hover:text-[#FF4F30] transition-colors duration-200">
                    {item.q}
                  </span>
                  <ChevronDown
                    size={20}
                    className="shrink-0 text-[rgba(17,17,17,0.35)] transition-transform duration-300"
                    style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  />
                </button>
                <div
                  className="overflow-hidden transition-all duration-500"
                  style={{
                    maxHeight: isOpen ? '300px' : '0px',
                    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  <p className="pt-4 text-[17px] leading-[1.65] text-[rgba(17,17,17,0.65)] max-w-[640px]">
                    {item.a}
                  </p>
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
/* FINAL CTA — Oxford Blue centered                                    */
/* ------------------------------------------------------------------ */
const FinalCTA = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.fcta-content', {
        y: 30, opacity: 0, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 75%' },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} data-theme="dark" className="w-full bg-[#0A2843] px-6 py-32 md:px-12">
      <div className="fcta-content mx-auto max-w-xl text-center">
        <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-[rgba(255,255,255,0.40)] mb-8">
          Ready
        </p>
        <h2 className="text-[clamp(36px,5vw,60px)] font-black leading-[0.95] tracking-[-0.03em] mb-8">
          <span className="text-white block">You're losing jobs tonight.</span>
          <span className="text-[#FF4F30] block mt-2">We can fix that.</span>
        </h2>
        <p className="text-[16px] leading-[1.65] text-[rgba(255,255,255,0.60)] max-w-[520px] mx-auto mb-10">
          Book a free 30-minute call. We'll look at your current call volume, identify where you're losing leads, and show you exactly what a pilot would look like for your business.
        </p>
        <button className="btn-magnetic rounded-full bg-white px-10 py-4 text-sm font-semibold text-[#111111] hover:bg-[rgba(255,255,255,0.90)]">
          Book a Free Pilot Call
        </button>
        <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-[rgba(255,255,255,0.35)]">
          No commitment · 30 minutes · Free
        </p>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/* CSS Keyframes (injected once)                                       */
/* ------------------------------------------------------------------ */
const VoicePageStyles = () => {
  const css = `
    @keyframes ping { 75%, 100% { transform: scale(2); opacity: 0; } }
    @keyframes blink { 50% { opacity: 0; } }
    @keyframes fadeSlideIn {
      from { opacity: 0; transform: translateY(8px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes pulseOnce {
      0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(34,197,94,0.5); }
      50% { transform: scale(1.5); box-shadow: 0 0 0 6px rgba(34,197,94,0); }
      100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(34,197,94,0); }
    }
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
/* PAGE ASSEMBLY                                                       */
/* ------------------------------------------------------------------ */
export default function AIVoicePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <GlobalStyles />
      <NoiseOverlay />
      <VoicePageStyles />
      <main className="relative w-full selection:bg-[#FF4F30] selection:text-white">
        <Navbar />
        <VoiceHero />
        <Problem />
        <HowItWorks />
        <LiveDemo />
        <WhatYouGet />
        <FullBleedBreak />
        <PilotOffer />
        <Objections />
        <FinalCTA />
        <Testimonials />
        <ClientLogos />
        <FAQ />
        <Footer />
      </main>
    </>
  );
}
