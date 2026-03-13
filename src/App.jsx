import React, { useState, useEffect } from 'react';
import {
  Home,
  CloudLightning,
  ShieldCheck,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Menu,
  X,
  Star,
  Check,
  HardHat,
  Zap,
  Award,
  Users,
  ArrowRight,
  ChevronDown,
  MessageCircle,
  Smartphone,
  User,
  Droplets,
  TreePine,
  Wrench
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { CONTENT } from './content';
import DetailedServicesPage from './DetailedServicesPage';
import InsuranceClaimPage from './InsuranceClaimPage';

// Custom TikTok icon since old versions of lucide-react might not have it
const TikTok = ({ size = 24, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

/* ─── Animation Variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] } })
};

const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const ICONS = { "home": Home, "cloud-lightning": CloudLightning, "shield-check": ShieldCheck, "droplets": Droplets, "tree-pine": TreePine, "wrench": Wrench };

/* ═══════════════════════════════════════════
   HEADER
   ═══════════════════════════════════════════ */
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <>
      <motion.div className="scroll-bar" style={{ scaleX }} />
      <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
        {/* Logo Hanging from the very edge of the Header */}
        <Link to="/" style={{
          position: 'absolute',
          top: scrolled ? '50%' : '100%',
          transform: scrolled ? 'translateY(-50%)' : 'none',
          left: '2.5rem',
          zIndex: 1001,
          transition: 'all 0.4s var(--ease)'
        }}>
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
              padding: scrolled ? '0' : '0.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.4s var(--ease)'
            }}
          >
            <img
              src={scrolled ? "/Recurso12@3x-8.png" : "/Recurso10@3x-8.png"}
              alt="Tacurion Logo"
              style={{
                height: scrolled ? '50px' : 'clamp(100px, 20vw, 160px)',
                width: 'auto',
                transition: 'all 0.4s var(--ease)',
                filter: scrolled ? 'none' : 'drop-shadow(0 5px 15px rgba(0,0,0,0.3))'
              }}
            />
          </motion.div>
        </Link>

        <div className="container flex items-center justify-between" style={{ position: 'relative', width: '100%' }}>
          {/* Spacer to avoid overlap with the absolute positioned logo on the left */}
          <div style={{ width: scrolled ? '100px' : '140px', transition: 'width 0.4s var(--ease)', flexShrink: 0 }} className="hidden md:block"></div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center justify-center gap-5 lg:gap-10" style={{ flex: 1 }}>
            {CONTENT.NAV.map(n => (
              n.path.startsWith('/#') ?
                <a key={n.path} href={n.path} className="nav-link" style={{ color: scrolled ? 'var(--black)' : '#fff', textShadow: scrolled ? 'none' : '0 1px 4px rgba(0,0,0,0.4)', whiteSpace: 'nowrap' }}>{n.label}</a> :
                <Link key={n.path} to={n.path} className="nav-link" style={{ color: scrolled ? 'var(--black)' : '#fff', textShadow: scrolled ? 'none' : '0 1px 4px rgba(0,0,0,0.4)', whiteSpace: 'nowrap' }}>{n.label}</Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center justify-end gap-3 lg:gap-4" style={{ flexShrink: 0 }}>
            <a href={`tel:${CONTENT.CONTACT.PHONE.replace(/\D/g, '')}`} className="flex items-center gap-2 nav-link" style={{ color: scrolled ? 'var(--black)' : '#fff', textShadow: scrolled ? 'none' : '0 1px 4px rgba(0,0,0,0.4)', whiteSpace: 'nowrap' }}>
              <Phone size={14} /> {CONTENT.CONTACT.PHONE}
            </a>
            <a href={`https://wa.me/1${CONTENT.CONTACT.PHONE.replace(/\D/g, '')}?text=${encodeURIComponent('Hello Tacurion Restoration, I would like to request a free consultation.')}`} target="_blank" rel="noopener noreferrer" className="btn btn-gold" style={{ padding: '0.6rem 1.5rem', minHeight: '40px', fontSize: '0.75rem', whiteSpace: 'nowrap' }}>Free Consultation</a>
          </div>

          {/* Mobile Drawer Toggle */}
          <div className="md:hidden flex items-center justify-end w-full">
            <button style={{ color: scrolled ? 'var(--black)' : '#fff' }} onClick={() => setOpen(true)}>
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', zIndex: 1999 }}
            />
            <motion.aside
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 250 }}
              style={{ position: 'fixed', top: 0, right: 0, bottom: 0, width: 320, maxWidth: '100vw', background: 'var(--black)', color: '#fff', zIndex: 2000, padding: '2rem', borderLeft: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexDirection: 'column' }}
            >
              <div className="flex justify-between items-center" style={{ marginBottom: '3rem' }}>
                <div></div>
                <button onClick={() => setOpen(false)} style={{ color: '#fff' }}><X size={28} /></button>
              </div>
              <div className="flex-col gap-6" style={{ display: 'flex', flex: 1 }}>
                {CONTENT.NAV.map(n => (
                  n.path.startsWith('/#') ?
                    <a key={n.path} href={n.path} onClick={() => setOpen(false)} style={{ fontSize: '1.4rem', fontFamily: 'var(--font-display)', fontWeight: 700, color: '#fff' }}>{n.label}</a> :
                    <Link key={n.path} to={n.path} onClick={() => setOpen(false)} style={{ fontSize: '1.4rem', fontFamily: 'var(--font-display)', fontWeight: 700, color: '#fff' }}>{n.label}</Link>
                ))}
              </div>
              <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div className="flex items-center gap-3 gray" style={{ fontSize: '0.9rem' }}><Phone size={16} className="gold" /> {CONTENT.CONTACT.PHONE}</div>
                <div className="flex items-center gap-3 gray" style={{ fontSize: '0.9rem' }}><Mail size={16} className="gold" /> {CONTENT.CONTACT.EMAIL}</div>
                <div className="flex gap-4 mt-2">
                  {[
                    { Icon: Facebook, link: CONTENT.SOCIAL.FACEBOOK },
                    { Icon: Instagram, link: CONTENT.SOCIAL.INSTAGRAM },
                    { Icon: TikTok, link: CONTENT.SOCIAL.TIKTOK }
                  ].map((item, i) => (
                    <a key={i} href={item.link} target="_blank" rel="noopener noreferrer" style={{ width: 36, height: 36, borderRadius: 8, border: '1px solid rgba(197, 160, 89, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#C5A059' }}>
                      <item.Icon size={18} />
                    </a>
                  ))}
                </div>
                <a href={`tel:${CONTENT.CONTACT.PHONE.replace(/\D/g, '')}`} className="btn btn-gold w-full justify-center" style={{ marginTop: '0.5rem' }}>Call Now</a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

/* ═══════════════════════════════════════════
   HERO
   ═══════════════════════════════════════════ */
/* ═══════════════════════════════════════════
   HERO — Auto Image Slider
   ═══════════════════════════════════════════ */
const HERO_SLIDES = [
  { src: '/roofing_service.png', label: 'Certified Roofing', caption: 'Expert installation since 2009' },
  { src: '/stormdamage.jpg', label: 'Storm Damage', caption: 'We document every inch of damage' },
  { src: '/RoofRepair.jpeg', label: 'Roof Repair', caption: 'Precision repairs, lifetime warranty' },
  { src: '/water_damage_mitigation.png', label: 'Water Mitigation', caption: 'Fast response, full restoration' },
];

function Hero() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(null);

  useEffect(() => {
    const t = setInterval(() => {
      setPrev(current);
      setCurrent(c => (c + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(t);
  }, [current]);

  const goToForm = () => {
    navigate('/insurance-claim');
    setTimeout(() => {
      const el = document.getElementById('claim-form');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <section id="home" style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>

      {/* ── Slider background ── */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        {HERO_SLIDES.map((slide, i) => (
          <div key={i} style={{ position: 'absolute', inset: 0, transition: 'opacity 1.2s ease', opacity: i === current ? 1 : 0 }}>
            <img src={slide.src} alt={slide.label} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', transform: i === current ? 'scale(1.04)' : 'scale(1)', transition: 'transform 6s ease-out' }} />
          </div>
        ))}
        {/* Overlays */}
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(8,8,8,0.68)', zIndex: 1 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(197,160,89,0.14) 0%, transparent 50%)', zIndex: 2 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #0d0d0d 0%, transparent 45%)', zIndex: 2 }} />
      </div>

      {/* ── Gold top line ── */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, transparent, #C5A059 30%, #e8c97a 50%, #C5A059 70%, transparent)', zIndex: 10 }} />

      {/* ── Slide counter dots ── */}
      <div style={{ position: 'absolute', bottom: '3rem', right: '3rem', zIndex: 10, display: 'flex', gap: '0.5rem' }}>
        {HERO_SLIDES.map((_, i) => (
          <button key={i} onClick={() => { setPrev(current); setCurrent(i); }}
            style={{ width: i === current ? 28 : 8, height: 8, borderRadius: 4, background: i === current ? '#C5A059' : 'rgba(255,255,255,0.25)', border: 'none', cursor: 'pointer', transition: 'all 0.4s', padding: 0 }} />
        ))}
      </div>

      {/* ── Current slide label ── */}
      <AnimatePresence mode="wait">
        <motion.div key={current} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.5 }}
          style={{ position: 'absolute', bottom: '3rem', left: '3rem', zIndex: 10, display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#C5A059' }} />
          <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>{HERO_SLIDES[current].label} — {HERO_SLIDES[current].caption}</span>
        </motion.div>
      </AnimatePresence>

      {/* ── Main content ── */}
      <div className="container" style={{ position: 'relative', zIndex: 10, paddingTop: 'clamp(8rem, 16vw, 12rem)', paddingBottom: 'clamp(6rem, 12vw, 9rem)', paddingLeft: 'clamp(180px, 20vw, 220px)' }}>
        <motion.div initial="hidden" animate="visible" variants={stagger} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>

          <motion.div variants={fadeUp} custom={0} style={{ marginBottom: '2rem' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(197,160,89,0.12)', border: '1px solid rgba(197,160,89,0.35)', borderRadius: '100px', padding: '0.45rem 1.2rem', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C5A059' }}>
              <HardHat size={13} /> Massachusetts — Roofing & Restoration
            </span>
          </motion.div>

          <motion.h1 variants={fadeUp} custom={1} style={{ fontSize: 'clamp(2.8rem, 6vw, 5.8rem)', fontWeight: 900, lineHeight: 1.0, letterSpacing: '-0.03em', color: '#fff', marginBottom: '1.8rem', maxWidth: 900 }}>
            Tacurion Restoration:{' '}
            <span style={{ color: '#C5A059', display: 'block' }}>Complete Home</span>
            <span style={{ fontStyle: 'italic' }}>Solutions</span>
          </motion.h1>

          <motion.div variants={fadeUp} custom={2} style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #C5A059, #e8c97a)', borderRadius: 2, marginBottom: '1.8rem' }} />

          <motion.p variants={fadeUp} custom={2} style={{ fontSize: 'clamp(1rem, 1.8vw, 1.2rem)', maxWidth: 580, lineHeight: 1.75, color: 'rgba(255,255,255,0.65)', marginBottom: '3rem' }}>
            Specialists in roofing, maintenance and professional restoration.{' '}
            <span style={{ color: 'rgba(197,160,89,0.9)', fontWeight: 600 }}>Fall River, MA — 15+ years protecting homes.</span>
          </motion.p>

          <motion.div variants={fadeUp} custom={3} style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginBottom: '3rem' }}>
            <button onClick={goToForm}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', background: '#C5A059', color: '#000', padding: '1.1rem 2.8rem', borderRadius: '12px', fontWeight: 800, fontSize: '0.95rem', letterSpacing: '0.05em', textTransform: 'uppercase', border: 'none', cursor: 'pointer', boxShadow: '0 8px 32px rgba(197,160,89,0.4)', transition: 'all 0.25s', position: 'relative', overflow: 'hidden' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 44px rgba(197,160,89,0.55)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(197,160,89,0.4)'; }}
            >
              <span style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '50%', background: 'rgba(255,255,255,0.12)', borderRadius: '12px 12px 0 0', pointerEvents: 'none' }} />
              {CONTENT.HERO.CTA} <ChevronRight size={18} />
            </button>
            <Link to="/servicios"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.18)', color: '#fff', padding: '1.1rem 2.8rem', borderRadius: '12px', fontWeight: 700, fontSize: '0.95rem', textTransform: 'uppercase', transition: 'all 0.25s', textDecoration: 'none' }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.12)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.06)'}
            >
              Our Services <ArrowRight size={16} />
            </Link>
          </motion.div>

          <motion.div variants={fadeUp} custom={4} style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', justifyContent: 'center', marginBottom: '3.5rem' }}>
            {[
              { icon: <ShieldCheck size={13} />, text: 'GAF Certified' },
              { icon: <Award size={13} />, text: 'Licensed & Insured' },
              { icon: <Star size={13} fill="#C5A059" color="#C5A059" />, text: '5-Star Google' },
              { icon: <Zap size={13} />, text: '24/7 Emergency' },
            ].map((b, i) => (
              <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '100px', padding: '0.35rem 0.9rem', fontSize: '0.7rem', fontWeight: 600, color: 'rgba(255,255,255,0.65)', backdropFilter: 'blur(4px)' }}>
                <span style={{ color: '#C5A059' }}>{b.icon}</span> {b.text}
              </span>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} custom={5} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '2.5rem', width: '100%', maxWidth: 560 }}>
            {[{ num: '500+', label: 'Projects Completed' }, { num: '15+', label: 'Years Experience' }, { num: '100%', label: 'Satisfaction' }].map((s, i) => (
              <div key={i} style={{ flex: 1, textAlign: 'center', padding: '0 1.5rem', borderRight: i < 2 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}>
                <div style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 900, color: '#C5A059', lineHeight: 1, fontFamily: 'var(--font-display)' }}>{s.num}</div>
                <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 6 }}>{s.label}</div>
              </div>
            ))}
          </motion.div>

        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5, duration: 1 }}
        style={{ position: 'absolute', bottom: '2.8rem', left: '50%', transform: 'translateX(-50%)', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem' }}>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          style={{ width: 1, height: 30, background: 'linear-gradient(to bottom, rgba(197,160,89,0.7), transparent)' }} />
      </motion.div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   TRUST BAR — Dark premium cards
   ═══════════════════════════════════════════ */
function TrustBar() {
  const items = [
    { icon: Zap, title: "24/7 Response", desc: "Emergencies attended instantly", num: "24/7" },
    { icon: Award, title: "GAF Certified", desc: "Premium grade materials", num: "A+" },
    { icon: ShieldCheck, title: "Insurance Experts", desc: "Maximizing your coverage", num: "100%" },
    { icon: Users, title: "500+ Families", desc: "Trust our work", num: "500+" },
  ];
  return (
    <section style={{ background: 'linear-gradient(135deg,#0f0f0f 0%,#1a1a1a 50%,#0f0f0f 100%)', padding: 'clamp(3rem,5vw,5rem) 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg,transparent,#C5A059 30%,#e8c97a 50%,#C5A059 70%,transparent)' }} />
      <div style={{ position: 'absolute', inset: 0, opacity: 0.025, backgroundImage: 'linear-gradient(rgba(197,160,89,1) 1px,transparent 1px),linear-gradient(90deg,rgba(197,160,89,1) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="grid md:grid-cols-4 gap-4">
          {items.map((item, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
              style={{ position: 'relative', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(197,160,89,0.1)', borderRadius: '20px', padding: '1.8rem 1.5rem', overflow: 'hidden', transition: 'border-color 0.3s, transform 0.3s, box-shadow 0.3s', cursor: 'default' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(197,160,89,0.4)'; e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(197,160,89,0.1)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(197,160,89,0.1)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{ position: 'absolute', top: -25, right: -10, fontSize: '4.5rem', fontWeight: 900, color: 'rgba(197,160,89,0.05)', lineHeight: 1, fontFamily: 'var(--font-display)', userSelect: 'none', pointerEvents: 'none' }}>{item.num}</div>
              <div style={{ position: 'absolute', top: -20, right: -20, width: 80, height: 80, background: 'radial-gradient(circle,rgba(197,160,89,0.1),transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
              <div style={{ width: 44, height: 44, borderRadius: 13, background: 'linear-gradient(135deg,rgba(197,160,89,0.18),rgba(197,160,89,0.05))', border: '1px solid rgba(197,160,89,0.22)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.2rem', color: '#C5A059', position: 'relative' }}>
                <item.icon size={20} strokeWidth={2} />
              </div>
              <div style={{ fontWeight: 800, fontSize: '1rem', color: '#fff', marginBottom: '0.3rem' }}>{item.title}</div>
              <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.38)', fontWeight: 500 }}>{item.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg,transparent,rgba(197,160,89,0.2) 50%,transparent)' }} />
    </section>
  );
}

/* ═══════════════════════════════════════════
   SERVICES — Gradient cards with hover glow
   ═══════════════════════════════════════════ */
function Services() {
  const accents = [
    { grad: 'linear-gradient(135deg,rgba(197,160,89,0.1) 0%,rgba(197,160,89,0.02) 100%)', glow: 'rgba(197,160,89,0.18)', top: 'rgba(197,160,89,0.5)' },
    { grad: 'linear-gradient(135deg,rgba(80,140,255,0.07) 0%,rgba(80,140,255,0.01) 100%)', glow: 'rgba(80,140,255,0.14)', top: 'rgba(80,140,255,0.45)' },
    { grad: 'linear-gradient(135deg,rgba(100,210,130,0.07) 0%,rgba(100,210,130,0.01) 100%)', glow: 'rgba(100,210,130,0.14)', top: 'rgba(100,210,130,0.45)' },
    { grad: 'linear-gradient(135deg,rgba(197,160,89,0.1) 0%,rgba(197,160,89,0.02) 100%)', glow: 'rgba(197,160,89,0.18)', top: 'rgba(197,160,89,0.5)' },
    { grad: 'linear-gradient(135deg,rgba(80,140,255,0.07) 0%,rgba(80,140,255,0.01) 100%)', glow: 'rgba(80,140,255,0.14)', top: 'rgba(80,140,255,0.45)' },
    { grad: 'linear-gradient(135deg,rgba(100,210,130,0.07) 0%,rgba(100,210,130,0.01) 100%)', glow: 'rgba(100,210,130,0.14)', top: 'rgba(100,210,130,0.45)' },
  ];
  return (
    <section id="services" style={{ background: 'linear-gradient(180deg,#111 0%,#161616 100%)', padding: 'clamp(5rem,10vw,8rem) 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translateX(-50%)', width: '70%', height: '50%', background: 'radial-gradient(ellipse,rgba(197,160,89,0.03) 0%,transparent 70%)', pointerEvents: 'none' }} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center" style={{ marginBottom: 'clamp(3rem,5vw,5rem)' }}>
          <motion.div variants={fadeUp} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem' }}>
            <div style={{ width: 30, height: 2, background: '#C5A059', borderRadius: 2 }} />
            <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#C5A059' }}>Our Services</span>
            <div style={{ width: 30, height: 2, background: '#C5A059', borderRadius: 2 }} />
          </motion.div>
          <motion.h2 variants={fadeUp} style={{ fontSize: 'clamp(2rem,4vw,3.5rem)', color: '#fff', fontWeight: 900, letterSpacing: '-0.02em' }}>
            Excellence in <span style={{ color: '#C5A059' }}>Every Project</span>
          </motion.h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {CONTENT.SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon];
            const a = accents[i];
            return (
              <motion.div key={s.id} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                style={{ position: 'relative', background: a.grad, border: '1px solid rgba(255,255,255,0.06)', borderRadius: '24px', padding: '2.5rem 2rem', overflow: 'hidden', transition: 'transform 0.3s,border-color 0.3s,box-shadow 0.3s', display: 'flex', flexDirection: 'column' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.borderColor = 'rgba(197,160,89,0.28)'; e.currentTarget.style.boxShadow = `0 24px 56px ${a.glow}`; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{ position: 'absolute', top: 0, left: '15%', right: '15%', height: '1px', background: `linear-gradient(90deg,transparent,${a.top},transparent)` }} />
                <div style={{ position: 'absolute', top: 14, right: 18, fontSize: '5rem', fontWeight: 900, color: 'rgba(255,255,255,0.025)', lineHeight: 1, fontFamily: 'var(--font-display)', userSelect: 'none' }}>0{i + 1}</div>
                <div style={{ width: 56, height: 56, borderRadius: 16, background: 'rgba(197,160,89,0.1)', border: '1px solid rgba(197,160,89,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.8rem', color: '#C5A059' }}>
                  <Icon size={26} strokeWidth={1.8} />
                </div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '1.5rem', fontWeight: 800, color: '#fff', lineHeight: 1.2 }}>{s.title}</h3>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  {s.features.map((f, idx) => (
                    <div key={idx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                      <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'rgba(197,160,89,0.15)', border: '1px solid rgba(197,160,89,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                        <Check size={11} color="#C5A059" strokeWidth={2.5} />
                      </div>
                      <span style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.62)', lineHeight: 1.6 }}>{f}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   LEGACY — Dark stats panel + photo slider
   ═══════════════════════════════════════════ */
const LEGACY_PHOTOS = [
  '/roofing_service.png',
  '/RoofRepair.jpeg',
  '/stormdamage.jpg',
  '/casa2.jpeg',
];

function Legacy() {
  const [photoIdx, setPhotoIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setPhotoIdx(p => (p + 1) % LEGACY_PHOTOS.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="legacy" style={{ background: 'linear-gradient(160deg,#0d0d0d 0%,#181818 60%,#111 100%)', padding: 'clamp(5rem,10vw,8rem) 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg,transparent,rgba(197,160,89,0.3) 50%,transparent)' }} />
      <div style={{ position: 'absolute', bottom: '-20%', right: '-10%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle,rgba(197,160,89,0.04) 0%,transparent 65%)', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 'clamp(2rem,5vw,5rem)', alignItems: 'center' }}>

          {/* LEFT: Photo slider + stats */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

            {/* Photo slider */}
            <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', aspectRatio: '4/3', border: '1px solid rgba(197,160,89,0.15)' }}>
              {LEGACY_PHOTOS.map((src, i) => (
                <div key={i} style={{ position: 'absolute', inset: 0, transition: 'opacity 1s ease', opacity: i === photoIdx ? 1 : 0 }}>
                  <img src={src} alt="Tacurion work" style={{ width: '100%', height: '100%', objectFit: 'cover', transform: i === photoIdx ? 'scale(1.05)' : 'scale(1)', transition: 'transform 5s ease-out' }} />
                </div>
              ))}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 55%)' }} />
              <div style={{ position: 'absolute', top: 14, left: 14, background: 'var(--gold)', color: '#000', fontSize: '0.6rem', fontWeight: 800, padding: '3px 10px', borderRadius: 20, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Real Work</div>
              {/* Dots */}
              <div style={{ position: 'absolute', bottom: 14, right: 14, display: 'flex', gap: '0.35rem' }}>
                {LEGACY_PHOTOS.map((_, i) => (
                  <button key={i} onClick={() => setPhotoIdx(i)} style={{ width: i === photoIdx ? 20 : 6, height: 6, borderRadius: 3, background: i === photoIdx ? '#C5A059' : 'rgba(255,255,255,0.3)', border: 'none', cursor: 'pointer', transition: 'all 0.3s', padding: 0 }} />
                ))}
              </div>
            </div>

            {/* Stats row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '0.75rem' }}>
              {[{ num: '15+', lbl: 'Years' }, { num: '500+', lbl: 'Projects' }, { num: '100%', lbl: 'Warranty' }].map((s, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(197,160,89,0.12)', borderRadius: '16px', padding: '1.2rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '1.7rem', fontWeight: 900, color: '#C5A059', lineHeight: 1, fontFamily: 'var(--font-display)' }}>{s.num}</div>
                  <div style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.3)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 4 }}>{s.lbl}</div>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(197,160,89,0.18)', borderLeft: '3px solid #C5A059', borderRadius: '0 14px 14px 0', padding: '1rem 1.25rem' }}>
              <div style={{ fontSize: '0.83rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>"Because a roof is more than a structure — it's the guardian of your family's history."</div>
              <div style={{ fontSize: '0.6rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#C5A059', marginTop: '0.5rem' }}>Tacurion Restoration</div>
            </div>
          </motion.div>

          {/* RIGHT: Text */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp}>
              <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1.5rem', color: '#C5A059' }}>THE TACURION LEGACY</p>
              <h2 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.5rem', color: '#fff' }}>Beyond Construction: We Build <span style={{ color: '#C5A059' }}>Peace of Mind.</span></h2>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.7, fontStyle: 'italic', color: 'rgba(255,255,255,0.5)', marginBottom: '2.5rem', borderLeft: '3px solid rgba(197,160,89,0.4)', paddingLeft: '1.25rem' }}>
                "Because a roof is more than a structure—it's the guardian of your family's history."
              </p>
            </motion.div>
            <motion.div variants={fadeUp}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div style={{ width: 38, height: 38, borderRadius: 10, background: 'rgba(197,160,89,0.1)', border: '1px solid rgba(197,160,89,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Users size={18} color="#C5A059" />
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#fff' }}>Our Essence</h3>
              </div>
              <p style={{ fontSize: '0.97rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.55)', marginBottom: '1.4rem' }}>At Tacurion Restoration, we don't just see shingles, gutters, or siding. We see the laughter in your living room, the safety of your children's sleep, and the investment of a lifetime.</p>
              <p style={{ fontSize: '0.97rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.55)', marginBottom: '2.5rem' }}>For the past 15 years, we've rooted ourselves in the Massachusetts community, not as contractors, but as neighbors — with 500+ projects completed with the same care we'd give our own homes.</p>
            </motion.div>
            <motion.div variants={fadeUp}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#fff', marginBottom: '1rem' }}>Why We Do It</h3>
              <p style={{ fontSize: '0.97rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.55)' }}>We bring more than just tools to your driveway. We bring a commitment so that when the storm hits, the only thing you have to worry about is which movie to watch with your loved ones.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   PROCESS
   ═══════════════════════════════════════════ */
function Process() {
  return (
    <section id="process" className="section section-dark">
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center" style={{ marginBottom: 'clamp(3rem, 5vw, 5rem)' }}>
          <motion.div variants={fadeUp} className="divider mx-auto" style={{ marginBottom: '1.5rem' }} />
          <motion.p variants={fadeUp} className="gold" style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>Transparent Process</motion.p>
          <motion.h2 variants={fadeUp} style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.1 }}>{CONTENT.PROCESS.TITLE}</motion.h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {CONTENT.PROCESS.STEPS.map((step, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i} className="text-center">
              <div className="step-num">{String(step.num).padStart(2, '0')}</div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.75rem', fontWeight: 700 }}>{step.title}</h3>
              <p className="gray" style={{ fontSize: '0.95rem', lineHeight: 1.7, maxWidth: 320, margin: '0 auto' }}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   FAQ
   ═══════════════════════════════════════════ */
function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);
  return (
    <section className="section section-warm" style={{ paddingBottom: '120px' }}>
      <div className="container" style={{ maxWidth: 780 }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center" style={{ marginBottom: 'clamp(3rem, 5vw, 4rem)' }}>
          <motion.div variants={fadeUp} className="divider mx-auto" style={{ marginBottom: '1.5rem' }} />
          <motion.h2 variants={fadeUp} style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.1 }}>Frequently Asked Questions</motion.h2>
        </motion.div>
        <div className="flex-col gap-3" style={{ display: 'flex' }}>
          {CONTENT.FAQ.map((item, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i} className="card" style={{ padding: 0, overflow: 'hidden', cursor: 'pointer', borderRadius: '0.75rem' }} onClick={() => setOpenIdx(openIdx === i ? null : i)}>
              <div className="flex items-center justify-between" style={{ padding: '1.25rem 1.5rem' }}>
                <span style={{ fontWeight: 700, fontSize: '1rem' }}>{item.q}</span>
                <motion.div animate={{ rotate: openIdx === i ? 180 : 0 }} transition={{ duration: 0.3 }}><ChevronDown size={20} className="gold" /></motion.div>
              </div>
              <AnimatePresence>
                {openIdx === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}>
                    <div className="gray" style={{ padding: '0 1.5rem 1.5rem', fontSize: '0.95rem', lineHeight: 1.7, borderTop: '1px solid var(--border)' }}>
                      <div style={{ paddingTop: '1.25rem' }}>{item.a}</div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   REVIEWS — Dark cinematic cards
   ═══════════════════════════════════════════ */
function Reviews() {
  const [active, setActive] = useState(1);
  useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % CONTENT.REVIEWS.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="reviews" style={{ background: 'linear-gradient(180deg,#0f0f0f 0%,#171717 100%)', padding: 'clamp(5rem,10vw,8rem) 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: '60%', height: '60%', background: 'radial-gradient(ellipse,rgba(197,160,89,0.04) 0%,transparent 70%)', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center" style={{ marginBottom: 'clamp(3rem,5vw,5rem)' }}>
          <motion.div variants={fadeUp} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem' }}>
            <div style={{ width: 30, height: 2, background: '#C5A059', borderRadius: 2 }} />
            <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#C5A059' }}>Customer Reviews</span>
            <div style={{ width: 30, height: 2, background: '#C5A059', borderRadius: 2 }} />
          </motion.div>
          <motion.h2 variants={fadeUp} style={{ fontSize: 'clamp(2rem,4vw,3.5rem)', color: '#fff', fontWeight: 900, letterSpacing: '-0.02em' }}>
            What Our <span style={{ color: '#C5A059' }}>Clients Say</span>
          </motion.h2>
          <motion.p variants={fadeUp} style={{ marginTop: '1rem', color: 'rgba(255,255,255,0.4)', fontSize: '0.95rem', maxWidth: 500, margin: '1rem auto 0' }}>
            Our reputation is built on every homeowner's satisfaction in Massachusetts.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {CONTENT.REVIEWS.map((review, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
              onClick={() => setActive(i)}
              style={{ position: 'relative', background: i === active ? 'linear-gradient(135deg,rgba(197,160,89,0.1),rgba(197,160,89,0.03))' : 'rgba(255,255,255,0.02)', border: `1px solid ${i === active ? 'rgba(197,160,89,0.4)' : 'rgba(255,255,255,0.06)'}`, borderRadius: '24px', padding: '2rem', overflow: 'hidden', transition: 'all 0.4s', cursor: 'pointer', display: 'flex', flexDirection: 'column' }}
              onMouseEnter={e => { if (i !== active) { e.currentTarget.style.borderColor = 'rgba(197,160,89,0.2)'; e.currentTarget.style.transform = 'translateY(-3px)'; } }}
              onMouseLeave={e => { if (i !== active) { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.transform = 'translateY(0)'; } }}
            >
              {i === active && <div style={{ position: 'absolute', top: 0, left: '15%', right: '15%', height: '2px', background: 'linear-gradient(90deg,transparent,#C5A059,transparent)' }} />}

              {/* Quote mark */}
              <div style={{ fontSize: '4rem', lineHeight: 0.8, color: i === active ? 'rgba(197,160,89,0.25)' : 'rgba(255,255,255,0.06)', fontFamily: 'Georgia, serif', marginBottom: '0.5rem', userSelect: 'none' }}>"</div>

              <p style={{ fontSize: '0.92rem', lineHeight: 1.75, color: i === active ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.45)', fontStyle: 'italic', flex: 1, marginBottom: '1.5rem' }}>{review.text}</p>

              <div style={{ display: 'flex', gap: '0.3rem', marginBottom: '1.2rem' }}>
                {[...Array(review.rating)].map((_, idx) => <Star key={idx} size={14} fill={i === active ? '#C5A059' : 'rgba(197,160,89,0.4)'} color={i === active ? '#C5A059' : 'rgba(197,160,89,0.4)'} />)}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', paddingTop: '1rem', borderTop: `1px solid ${i === active ? 'rgba(197,160,89,0.2)' : 'rgba(255,255,255,0.05)'}` }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: i === active ? 'rgba(197,160,89,0.2)' : 'rgba(255,255,255,0.05)', border: `1px solid ${i === active ? 'rgba(197,160,89,0.4)' : 'rgba(255,255,255,0.1)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: i === active ? '#C5A059' : 'rgba(255,255,255,0.3)', fontSize: '0.85rem' }}>
                  {review.initials}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: i === active ? '#fff' : 'rgba(255,255,255,0.4)' }}>{review.name}</div>
                  <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.28)' }}>{review.date} · Verified</div>
                </div>
                <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" style={{ height: '12px', opacity: i === active ? 0.7 : 0.25, marginLeft: 'auto' }} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Progress dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '2.5rem' }}>
          {CONTENT.REVIEWS.map((_, i) => (
            <button key={i} onClick={() => setActive(i)} style={{ width: i === active ? 28 : 8, height: 8, borderRadius: 4, background: i === active ? '#C5A059' : 'rgba(255,255,255,0.15)', border: 'none', cursor: 'pointer', transition: 'all 0.35s', padding: 0 }} />
          ))}
        </div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center" style={{ marginTop: '3rem' }}>
          <a href={CONTENT.SOCIAL.GOOGLE_REVIEWS} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(197,160,89,0.25)', color: '#C5A059', padding: '0.9rem 2.5rem', borderRadius: '12px', fontWeight: 700, fontSize: '0.88rem', textDecoration: 'none', transition: 'all 0.25s', letterSpacing: '0.04em' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(197,160,89,0.08)'; e.currentTarget.style.borderColor = 'rgba(197,160,89,0.5)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.borderColor = 'rgba(197,160,89,0.25)'; }}
          >
            See More on Google <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════════ */
function Footer() {
  return (
    <footer className="section section-dark" style={{ paddingBottom: '2rem' }}>
      <div className="container">
        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8" style={{ marginBottom: '4rem', paddingBottom: '4rem', borderBottom: '1px solid var(--border)' }}>
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3" style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'inline-flex' }}>
                <img src="/Recurso10@3x-8.png" alt="Tacurion Restoration Logo" style={{ height: '60px', width: 'auto' }} />
              </div>
            </div>
            <p className="gray" style={{ fontSize: '0.9rem', lineHeight: 1.7, maxWidth: 300 }}>
              Certified specialists in roof restoration and insurance management in Massachusetts.
            </p>
            <div className="flex gap-3" style={{ marginTop: '1.5rem' }}>
              {[
                { Icon: Facebook, link: CONTENT.SOCIAL.FACEBOOK },
                { Icon: Instagram, link: CONTENT.SOCIAL.INSTAGRAM },
                { Icon: TikTok, link: CONTENT.SOCIAL.TIKTOK }
              ].map((item, i) => (
                <a key={i} href={item.link} target="_blank" rel="noopener noreferrer" style={{ width: 40, height: 40, borderRadius: 10, border: '1px solid rgba(197, 160, 89, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#C5A059', transition: '0.3s' }}>
                  <item.Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gray-500)', marginBottom: '1.5rem' }}>Navigation</h4>
            <div className="flex-col gap-3" style={{ display: 'flex', lineHeight: 2.0 }}>
              {CONTENT.NAV.map(n => (
                n.path.startsWith('/#') ?
                  <a key={n.path} href={n.path} className="footer-link">{n.label}</a> :
                  <Link key={n.path} to={n.path} className="footer-link">{n.label}</Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gray-500)', marginBottom: '1.5rem' }}>Contact</h4>
            <div className="flex-col gap-4" style={{ display: 'flex', lineHeight: 2.0 }}>
              <a href="tel:(508) 617-3041" className="flex items-center gap-3 footer-link" style={{ color: 'inherit' }}>
                <div className="icon-box" style={{ width: 36, height: 36, borderRadius: 8 }}><Phone size={16} /></div>
                <div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--gray-500)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', lineHeight: 1 }}>Phone</div>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{CONTENT.CONTACT.PHONE}</div>
                </div>
              </a>
              <a href="mailto:tacurirestoration@gmail.com" className="flex items-center gap-3 footer-link" style={{ color: 'inherit' }}>
                <div className="icon-box" style={{ width: 36, height: 36, borderRadius: 8 }}><Mail size={16} /></div>
                <div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--gray-500)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', lineHeight: 1 }}>Email</div>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{CONTENT.CONTACT.EMAIL}</div>
                </div>
              </a>
              <a
                href={CONTENT.SOCIAL.GOOGLE_MAPS}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 footer-link"
                style={{ color: 'inherit' }}
              >
                <div className="icon-box" style={{ width: 36, height: 36, borderRadius: 8, marginTop: 2 }}><MapPin size={16} /></div>
                <div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--gray-500)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', lineHeight: 1 }}>Office</div>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{CONTENT.CONTACT.ADDRESS}</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex justify-between items-center flex-wrap gap-4" style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)' }}>
          <span>© {new Date().getFullYear()} Tacurion Restoration LLC. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="footer-link" style={{ fontSize: '0.75rem' }}>Privacy</a>
            <a href="#" className="footer-link" style={{ fontSize: '0.75rem' }}>Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════
   FLOATING CONTACT MENU & MODAL
   ═══════════════════════════════════════════ */
function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div style={{ position: 'fixed', inset: 0, zIndex: 9998 }} onClick={onClose} />
      <motion.div
        initial={{ y: 20, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 20, opacity: 0, scale: 0.95 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        style={{
          position: 'fixed',
          bottom: '90px',
          right: '2rem',
          zIndex: 9999,
          width: 'calc(100% - 4rem)',
          maxWidth: '360px',
          background: '#ffffff',
          padding: '1.5rem',
          borderRadius: '16px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          maxHeight: 'calc(100vh - 120px)',
          overflowY: 'auto'
        }}
      >
        {/* Close button */}
        <button onClick={onClose} style={{ position: 'absolute', top: '0.8rem', right: '0.8rem', color: '#808080' }}>
          <X size={20} />
        </button>

        {/* Logo */}
        <div className="flex justify-center mb-1">
          <img src="/Recurso10@3x-8.png" alt="Tacurion Logo" style={{ height: '50px', width: 'auto' }} />
        </div>

        <div className="text-center">
          <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.3rem', color: '#000', fontFamily: 'var(--font-display)' }}>Send us a message</h3>
          <p style={{ fontSize: '0.85rem', lineHeight: 1.5, color: '#404040' }}>
            Let us know what you need and we will contact you as soon as possible.
          </p>
        </div>

        <form action="https://formsubmit.co/tacurirestoration@gmail.com" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }}>
            <div style={{ position: 'relative' }}>
              <User size={14} color="#808080" style={{ position: 'absolute', top: '12px', left: '12px' }} />
              <input type="text" name="FirstName" placeholder="First Name*" required style={{ width: '100%', padding: '10px 10px 10px 32px', background: '#f5f5f5', border: '1px solid #e0e0e0', borderRadius: '6px', color: '#000', fontSize: '0.85rem' }} />
            </div>
            <div style={{ position: 'relative' }}>
              <User size={14} color="#808080" style={{ position: 'absolute', top: '12px', left: '12px' }} />
              <input type="text" name="LastName" placeholder="Last Name*" required style={{ width: '100%', padding: '10px 10px 10px 32px', background: '#f5f5f5', border: '1px solid #e0e0e0', borderRadius: '6px', color: '#000', fontSize: '0.85rem' }} />
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            <Smartphone size={14} color="#808080" style={{ position: 'absolute', top: '12px', left: '12px' }} />
            <input type="tel" name="Phone" placeholder="Phone Number*" required style={{ width: '100%', padding: '10px 10px 10px 32px', background: '#f5f5f5', border: '1px solid #e0e0e0', borderRadius: '6px', color: '#000', fontSize: '0.85rem' }} />
          </div>
          
          <div style={{ position: 'relative' }}>
            <Mail size={14} color="#808080" style={{ position: 'absolute', top: '12px', left: '12px' }} />
            <input type="email" name="Email" placeholder="Email Address*" required style={{ width: '100%', padding: '10px 10px 10px 32px', background: '#f5f5f5', border: '1px solid #e0e0e0', borderRadius: '6px', color: '#000', fontSize: '0.85rem' }} />
          </div>

          <label className="flex items-start gap-2" style={{ cursor: 'pointer', background: '#fcfcfc', padding: '0.6rem', borderRadius: '6px', border: '1px solid #f0f0f0' }}>
            <input type="checkbox" name="SMS_Consent" value="Yes" required style={{ width: '16px', height: '16px', accentColor: 'var(--gold)', cursor: 'pointer', marginTop: '2px', flexShrink: 0 }} />
            <span style={{ fontSize: '0.75rem', lineHeight: 1.4, color: '#404040' }}>
              Yes, I agree to receive text messages or calls to this number.
            </span>
          </label>

          <div style={{ position: 'relative' }}>
            <MessageCircle size={14} color="#808080" style={{ position: 'absolute', top: '12px', left: '12px' }} />
            <textarea name="Message" placeholder="Message*" required rows={3} style={{ width: '100%', padding: '10px 10px 10px 32px', background: '#f5f5f5', border: '1px solid #e0e0e0', borderRadius: '6px', color: '#000', fontSize: '0.85rem', resize: 'vertical' }} />
          </div>
          
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value={window.location.href} />

          <p style={{ fontSize: '0.65rem', color: '#808080', textAlign: 'center', margin: '0 0' }}>
            By submitting this form, you agree to our Privacy Policy.
          </p>

          <button type="submit" className="btn" style={{ background: 'var(--gold)', color: '#000', width: '100%', justifyContent: 'center', padding: '0.8rem', fontSize: '0.9rem', borderRadius: '6px', fontWeight: 700 }}>
            Send Message
          </button>
        </form>
      </motion.div>
    </AnimatePresence>
  );
}

function FloatingContactMenu({ onOpenTextModal }) {
  const cleanPhone = CONTENT.CONTACT.PHONE.replace(/\D/g, '');
  const items = [
    { label: 'Chat', icon: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.878-.788-1.47-1.761-1.643-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>, action: () => window.open(`https://wa.me/1${cleanPhone}?text=${encodeURIComponent('Hello Tacurion Restoration, I would like to request a free inspection for my property.')}`, '_blank') },
    { label: 'Call', icon: Phone, action: () => window.location.href = `tel:${cleanPhone}` },
    { label: 'Text', icon: Smartphone, action: () => window.location.href = `sms:${cleanPhone}` },
    { label: 'Email', icon: Mail, action: onOpenTextModal }
  ];

  return (
    <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', background: '#121212', border: '1px solid rgba(255,255,255,0.08)', zIndex: 9000, padding: '0.8rem 2.5rem', borderRadius: '100px', boxShadow: '0 15px 40px rgba(0,0,0,0.4)', display: 'flex', gap: '3rem', alignItems: 'center' }}>
      {items.map((item, i) => (
        <button
          key={i}
          onClick={item.action}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.3rem', color: '#fff', background: 'transparent', border: 'none', cursor: 'pointer', transition: 'all 0.2s', minWidth: '36px' }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.color = 'var(--gold)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.color = '#fff'; }}
        >
          <item.icon size={22} strokeWidth={1.5} />
          <span style={{ fontSize: '0.65rem', fontWeight: 600 }}>{item.label}</span>
        </button>
      ))}
    </div>
  );
}

/* ─── Scroll Restoration ─── */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

/* ═══════════════════════════════════════════
   HOME PAGE WRAPPER
   ═══════════════════════════════════════════ */
function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <Legacy />
      <Process />
      <Reviews />
      <FAQ />
    </>
  );
}

/* ═══════════════════════════════════════════
   APP
   ═══════════════════════════════════════════ */
export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/servicios" element={<DetailedServicesPage onOpenModal={() => setIsModalOpen(true)} />} />
        <Route path="/insurance-claim" element={<InsuranceClaimPage />} />
      </Routes>
      <Footer />

      {/* Dynamic Floating Menu & Modal */}
      <FloatingContactMenu onOpenTextModal={() => setIsModalOpen(true)} />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Router>
  );
}
