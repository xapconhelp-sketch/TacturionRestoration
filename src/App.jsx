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
  CheckCircle2,
  HardHat,
  Zap,
  Award,
  Users,
  ArrowRight,
  ChevronDown,
  MessageCircle,
  Smartphone,
  User
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { CONTENT } from './content';
import DetailedServicesPage from './DetailedServicesPage';

/* ─── Animation Variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] } })
};

const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const ICONS = { "home": Home, "cloud-lightning": CloudLightning, "shield-check": ShieldCheck };

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
        <Link to="/" style={{ position: 'absolute', top: '0.5rem', left: '2.5rem', zIndex: 1001 }}>
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
              padding: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.4s var(--ease)'
            }}
          >
            <img
              src="/logopng.png"
              alt="Tacurion Logo"
              style={{
                height: scrolled ? '60px' : '115px',
                width: 'auto',
                transition: 'height 0.4s var(--ease)',
                filter: scrolled ? 'none' : 'drop-shadow(0 5px 15px rgba(0,0,0,0.3))'
              }}
            />
          </motion.div>
        </Link>

        <div className="container flex items-center justify-between" style={{ position: 'relative' }}>
          {/* Spacer to avoid overlap with the absolute positioned logo on the left */}
          <div style={{ width: scrolled ? '120px' : '180px', transition: 'width 0.4s var(--ease)' }} className="hidden md:block"></div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {CONTENT.NAV.map(n => (
              n.path.startsWith('/#') ?
                <a key={n.path} href={n.path} className="nav-link">{n.label}</a> :
                <Link key={n.path} to={n.path} className="nav-link">{n.label}</Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href={`tel:${CONTENT.CONTACT.PHONE.replace(/\D/g, '')}`} className="flex items-center gap-2 nav-link">
              <Phone size={14} /> {CONTENT.CONTACT.PHONE}
            </a>
            <a href={`tel:${CONTENT.CONTACT.PHONE.replace(/\D/g, '')}`} className="btn btn-gold" style={{ padding: '0.6rem 1.5rem', minHeight: '40px', fontSize: '0.75rem' }}>Consulta Gratis</a>
          </div>

          {/* Mobile Drawer Toggle */}
          <div className="md:hidden flex items-center justify-end w-full">
            <button style={{ color: 'var(--black)' }} onClick={() => setOpen(true)}>
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
              style={{ position: 'fixed', top: 0, right: 0, bottom: 0, width: 320, background: 'var(--surface)', zIndex: 2000, padding: '2rem', borderLeft: '1px solid var(--border)', display: 'flex', flexDirection: 'column' }}
            >
              <div className="flex justify-between items-center" style={{ marginBottom: '3rem' }}>
                <div></div>
                <button onClick={() => setOpen(false)} style={{ color: '#fff' }}><X size={28} /></button>
              </div>
              <div className="flex-col gap-6" style={{ display: 'flex', flex: 1 }}>
                {CONTENT.NAV.map(n => (
                  n.path.startsWith('/#') ?
                    <a key={n.path} href={n.path} onClick={() => setOpen(false)} style={{ fontSize: '1.4rem', fontFamily: 'var(--font-display)', fontWeight: 700 }}>{n.label}</a> :
                    <Link key={n.path} to={n.path} onClick={() => setOpen(false)} style={{ fontSize: '1.4rem', fontFamily: 'var(--font-display)', fontWeight: 700 }}>{n.label}</Link>
                ))}
              </div>
              <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div className="flex items-center gap-3 gray" style={{ fontSize: '0.9rem' }}><Phone size={16} className="gold" /> {CONTENT.CONTACT.PHONE}</div>
                <div className="flex items-center gap-3 gray" style={{ fontSize: '0.9rem' }}><Mail size={16} className="gold" /> {CONTENT.CONTACT.EMAIL}</div>
                <a href={`tel:${CONTENT.CONTACT.PHONE.replace(/\D/g, '')}`} className="btn btn-gold w-full justify-center" style={{ marginTop: '0.5rem' }}>Llamar Ahora</a>
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
function Hero() {
  return (
    <section id="home" className="section" style={{ position: 'relative', overflow: 'hidden', minHeight: '80vh', display: 'flex', alignItems: 'center', paddingTop: 'clamp(6rem, 10vw, 8rem)', paddingBottom: 'clamp(3rem, 6vw, 4rem)' }}>
      {/* Floating Background Image */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <img
          src="/RoofRepair.jpeg"
          alt="Tacurion Roofing Background"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
        />
        {/* Dark cinematic overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(18,18,18,0.8) 0%, rgba(18,18,18,0.92) 100%)' }} />
      </div>

      <div className="container relative" style={{ zIndex: 10, width: '100%' }}>
        <div className="flex flex-col items-center justify-center text-center">
          {/* Main Content */}
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <motion.div initial="hidden" animate="visible" variants={stagger} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <motion.div variants={fadeUp} custom={0}>
                <span className="badge" style={{ borderColor: 'rgba(197,160,89,0.4)', color: 'var(--gold)', background: 'rgba(197,160,89,0.1)' }}><HardHat size={14} /> Roofing & Restoration</span>
              </motion.div>

              <motion.h1 variants={fadeUp} custom={1} style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)', marginTop: '32px', marginBottom: '32px', fontWeight: 900, maxWidth: '1000px', lineHeight: 1.1, color: '#fff' }}>
                Tu <span style={{ color: 'var(--gold)' }}>Techo</span> es Nuestra{' '}
                <span style={{ fontStyle: 'italic' }}>Prioridad</span>
              </motion.h1>

              <motion.p variants={fadeUp} custom={2} style={{ fontSize: 'clamp(1rem, 1.8vw, 1.25rem)', maxWidth: 650, lineHeight: 1.7, marginBottom: '48px', color: 'rgba(255,255,255,0.7)' }}>
                {CONTENT.HERO.DESCRIPTION}
              </motion.p>

              <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-4 justify-center" style={{ marginBottom: '64px' }}>
                <a href={`tel:${CONTENT.CONTACT.PHONE.replace(/\D/g, '')}`} className="btn" style={{ background: 'var(--gold)', color: '#121212', padding: '1.2rem 3rem', fontWeight: 800 }}>
                  {CONTENT.HERO.CTA} <ChevronRight size={18} />
                </a>
                <Link to="/servicios" className="btn" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.3)', color: '#fff', padding: '1.2rem 3rem' }}>
                  Nuestros Servicios
                </Link>
              </motion.div>

              {/* Stats Row */}
              <motion.div variants={fadeUp} custom={4} className="flex flex-wrap gap-12 mt-12 justify-center" style={{ paddingTop: '40px', borderTop: '1px solid rgba(255,255,255,0.1)', width: '100%' }}>
                {[
                  { num: '500+', label: 'Proyectos' },
                  { num: '15+', label: 'Años Exp.' },
                  { num: '100%', label: 'Garantía' }
                ].map((s, i) => (
                  <div key={i} className="text-center">
                    <div className="stat-num">{s.num}</div>
                    <div className="stat-label">{s.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   TRUST BAR
   ═══════════════════════════════════════════ */
function TrustBar() {
  const items = [
    { icon: Zap, title: "Respuesta 24/7", desc: "Emergencias atendidas al instante" },
    { icon: Award, title: "Certificados GAF", desc: "Materiales de grado premium" },
    { icon: ShieldCheck, title: "Seguros Expertos", desc: "Maximizamos tu cobertura" },
    { icon: Users, title: "500+ Familias", desc: "Confían en nuestro trabajo" },
  ];

  return (
    <section style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: '#FFFFFF', padding: 'clamp(3rem, 5vw, 5rem) 0' }}>
      <div className="container">
        <div className="grid md:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp} custom={i}
              className="benefit-card"
            >
              <div className="icon-box" style={{ background: 'rgba(var(--gold-rgb), 0.05)', color: 'var(--gold)' }}><item.icon size={22} strokeWidth={2} /></div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9rem', color: 'var(--black)' }}>{item.title}</div>
                <div className="gray" style={{ fontSize: '0.75rem', fontWeight: 500 }}>{item.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   SERVICES
   ═══════════════════════════════════════════ */
function Services() {
  return (
    <section id="services" className="section section-dark">
      <div className="container">
        {/* Section Header */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center" style={{ marginBottom: 'clamp(3rem, 5vw, 5rem)' }}>
          <motion.div variants={fadeUp} className="divider mx-auto" style={{ marginBottom: '1.5rem' }} />
          <motion.p variants={fadeUp} className="gold" style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            Nuestros Servicios
          </motion.p>
          <motion.h2 variants={fadeUp} style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Excelencia en Cada Proyecto
          </motion.h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {CONTENT.SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon];
            return (
              <motion.div
                key={s.id}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp} custom={i}
                className="card flex-col" style={{ display: 'flex' }}
              >
                <div className="icon-box icon-box-lg" style={{ marginBottom: '2rem' }}>
                  <Icon size={32} strokeWidth={2} />
                </div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', fontWeight: 700 }}>{s.title}</h3>
                {s.description && (
                  <p className="gray" style={{ fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '2rem' }}>{s.description}</p>
                )}
                <div style={{ borderTop: s.description ? '1px solid var(--border)' : 'none', paddingTop: s.description ? '1.5rem' : '0', flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {s.features.map((f, idx) => (
                    <div key={idx} className="feature-row">
                      <CheckCircle2 size={18} className="gold" style={{ marginTop: '0.15rem', flexShrink: 0 }} />
                      <span>{f}</span>
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
   LEGACY SECTION
   ═══════════════════════════════════════════ */
function Legacy() {
  return (
    <section id="legacy" className="section" style={{ background: 'var(--surface)', padding: 'clamp(5rem, 10vw, 8rem) 0' }}>
      <div className="container flex-col lg:grid lg:grid-cols-2 gap-16 items-center" style={{ display: 'flex' }}>
        {/* Logo / Image — left column */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ width: '100%' }}>
          <div style={{
            background: '#F3F4F6',
            borderRadius: '24px',
            padding: 'clamp(2rem, 5vw, 4rem)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 420,
            boxShadow: '0 20px 50px rgba(0,0,0,0.06)'
          }}>
            <img
              src="/logopng.png"
              alt="Tacurion Restoration Logo"
              style={{ maxWidth: '320px', width: '100%', height: 'auto', filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.1))' }}
            />
          </div>
        </motion.div>

        {/* Content — right column */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} style={{ width: '100%' }}>
          <motion.div variants={fadeUp}>
            <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.5rem', color: 'var(--gold)' }}>
              THE TACURION LEGACY
            </p>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.5rem', color: 'var(--black)' }}>
              Beyond Construction: We Build Peace of Mind.
            </h2>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.7, fontStyle: 'italic', color: 'var(--gray-500)', marginBottom: '2.5rem', borderLeft: '3px solid var(--gold)', paddingLeft: '1.25rem' }}>
              "Because a roof is more than a structure—it's the guardian of your family's history."
            </p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <div className="flex items-center gap-3" style={{ marginBottom: '1rem' }}>
              <span style={{ fontSize: '1.5rem' }}>🤝</span>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--black)' }}>Our Essence</h3>
            </div>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--gray-500)', marginBottom: '1.5rem' }}>
              At Tacurion Restoration, we don't just see shingles, gutters, or siding. We see the laughter in your living room, the safety of your children's sleep, and the investment of a lifetime.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--gray-500)', marginBottom: '2.5rem' }}>
              For the past 15 years, we've rooted ourselves in the Massachusetts community, not as contractors, but as neighbors. With over 500+ projects successfully completed in every specialty, our experience isn't just a number—it's a promise that we've seen it all and fixed it all with the same care we'd give our own homes.
            </p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--black)', marginBottom: '1rem' }}>Why We Do It</h3>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--gray-500)' }}>
              We bring more than just tools to your driveway. We bring a commitment to quality that covers what matters most. Whether it's a meticulous restoration or a precision installation, we work so that when the storm hits, the only thing you have to worry about is which movie to watch with your loved ones.
            </p>
          </motion.div>
        </motion.div>
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
          <motion.p variants={fadeUp} className="gold" style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>Proceso Transparente</motion.p>
          <motion.h2 variants={fadeUp} style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.1 }}>{CONTENT.PROCESS.TITLE}</motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {CONTENT.PROCESS.STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp} custom={i}
              className="text-center"
            >
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
          <motion.h2 variants={fadeUp} style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.1 }}>Preguntas Frecuentes</motion.h2>
        </motion.div>

        <div className="flex-col gap-3" style={{ display: 'flex' }}>
          {CONTENT.FAQ.map((item, i) => (
            <motion.div
              key={i}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp} custom={i}
              className="card"
              style={{ padding: 0, overflow: 'hidden', cursor: 'pointer', borderRadius: '0.75rem' }}
              onClick={() => setOpenIdx(openIdx === i ? null : i)}
            >
              <div className="flex items-center justify-between" style={{ padding: '1.25rem 1.5rem' }}>
                <span style={{ fontWeight: 700, fontSize: '1rem' }}>{item.q}</span>
                <motion.div animate={{ rotate: openIdx === i ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronDown size={20} className="gold" />
                </motion.div>
              </div>
              <AnimatePresence>
                {openIdx === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
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
   REVIEWS
   ═══════════════════════════════════════════ */
function Reviews() {
  return (
    <section id="reviews" className="section" style={{ background: 'var(--surface)' }}>
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center" style={{ marginBottom: 'clamp(3rem, 5vw, 5rem)' }}>
          <motion.div variants={fadeUp} className="divider mx-auto" style={{ marginBottom: '1.5rem' }} />
          <motion.p variants={fadeUp} className="gold" style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>Reseñas de Clientes</motion.p>
          <motion.h2 variants={fadeUp} style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.1 }}>Lo Que Dicen Nuestros Clientes</motion.h2>
          <motion.p variants={fadeUp} className="gray" style={{ marginTop: '1.5rem', maxWidth: '600px', margin: '1.5rem auto 0' }}>
            Nuestra reputación se basa en la satisfacción de cada propietario. Mira por qué nos eligen en Massachusetts.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {CONTENT.REVIEWS.map((review, i) => (
            <motion.div
              key={i}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp} custom={i}
              className="card flex-col" style={{ display: 'flex', padding: '2rem' }}
            >
              <div className="flex items-center gap-4" style={{ marginBottom: '1.5rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(var(--gold-rgb), 0.1)', border: '1px solid rgba(var(--gold-rgb), 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: 'var(--gold)' }}>
                  {review.initials}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '1rem' }}>{review.name}</div>
                  <div className="gray" style={{ fontSize: '0.8rem' }}>{review.date}</div>
                </div>
              </div>
              <div className="flex gap-1" style={{ marginBottom: '1rem' }}>
                {[...Array(review.rating)].map((_, idx) => (
                  <Star key={idx} size={16} fill="var(--gold)" color="var(--gold)" />
                ))}
              </div>
              <p className="gray" style={{ fontSize: '0.95rem', lineHeight: 1.7, fontStyle: 'italic' }}>
                "{review.text}"
              </p>
              <div style={{ marginTop: 'auto', paddingTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" style={{ height: '14px', opacity: 0.7 }} />
                <span className="gray" style={{ fontSize: '0.75rem' }}>Verified Review</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeUp}
          className="text-center" style={{ marginTop: '4rem' }}
        >
          <a
            href="https://www.google.com/search?q=Tacurion+Restoration+LLC+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
            style={{ padding: '0 2.5rem' }}
          >
            Ver más en Google <ArrowRight size={18} />
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
        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-16" style={{ marginBottom: '4rem', paddingBottom: '4rem', borderBottom: '1px solid var(--border)' }}>
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3" style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'inline-flex' }}>
                <img src="/logopng.png" alt="Tacurion Restoration Logo" style={{ height: '60px', width: 'auto' }} />
              </div>
            </div>
            <p className="gray" style={{ fontSize: '0.9rem', lineHeight: 1.7, maxWidth: 300 }}>
              Especialistas certificados en restauración de techos y gestión de seguros en Massachusetts.
            </p>
            <div className="flex gap-3" style={{ marginTop: '1.5rem' }}>
              {[Facebook, Instagram].map((Icon, i) => (
                <a key={i} href="#" style={{ width: 40, height: 40, borderRadius: 10, border: '1px solid rgba(197, 160, 89, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#C5A059', transition: '0.3s' }}>
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gray-500)', marginBottom: '1.5rem' }}>Navegación</h4>
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
            <h4 style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gray-500)', marginBottom: '1.5rem' }}>Contacto</h4>
            <div className="flex-col gap-4" style={{ display: 'flex', lineHeight: 2.0 }}>
              <a href="tel:(508) 617-3041" className="flex items-center gap-3 footer-link" style={{ color: 'inherit' }}>
                <div className="icon-box" style={{ width: 36, height: 36, borderRadius: 8 }}><Phone size={16} /></div>
                <div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--gray-500)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', lineHeight: 1 }}>Teléfono</div>
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
              <div className="flex items-start gap-3">
                <div className="icon-box" style={{ width: 36, height: 36, borderRadius: 8, marginTop: 2 }}><MapPin size={16} /></div>
                <div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--gray-500)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', lineHeight: 1 }}>Oficina</div>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{CONTENT.CONTACT.ADDRESS}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex justify-between items-center flex-wrap gap-4" style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)' }}>
          <span>© {new Date().getFullYear()} Tacurion Restoration LLC. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="footer-link" style={{ fontSize: '0.75rem' }}>Privacidad</a>
            <a href="#" className="footer-link" style={{ fontSize: '0.75rem' }}>Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════
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
          <img src="/logopng.png" alt="Tacurion Logo" style={{ height: '50px', width: 'auto' }} />
        </div>

        <div className="text-center">
          <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.3rem', color: '#000', fontFamily: 'var(--font-display)' }}>Envíanos un mensaje</h3>
          <p style={{ fontSize: '0.85rem', lineHeight: 1.5, color: '#404040' }}>
            Déjanos saber qué necesitas y te contactaremos a la brevedad posible.
          </p>
        </div>

        <form style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }} onSubmit={(e) => { e.preventDefault(); onClose(); }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }}>
            <div style={{ position: 'relative' }}>
              <User size={14} color="#808080" style={{ position: 'absolute', top: '12px', left: '12px' }} />
              <input type="text" placeholder="Nombre*" required style={{ width: '100%', padding: '10px 10px 10px 32px', background: '#f5f5f5', border: '1px solid #e0e0e0', borderRadius: '6px', color: '#000', fontSize: '0.85rem' }} />
            </div>
            <div style={{ position: 'relative' }}>
              <User size={14} color="#808080" style={{ position: 'absolute', top: '12px', left: '12px' }} />
              <input type="text" placeholder="Apellido*" required style={{ width: '100%', padding: '10px 10px 10px 32px', background: '#f5f5f5', border: '1px solid #e0e0e0', borderRadius: '6px', color: '#000', fontSize: '0.85rem' }} />
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            <Smartphone size={14} color="#808080" style={{ position: 'absolute', top: '12px', left: '12px' }} />
            <input type="tel" placeholder="Número de Teléfono*" required style={{ width: '100%', padding: '10px 10px 10px 32px', background: '#f5f5f5', border: '1px solid #e0e0e0', borderRadius: '6px', color: '#000', fontSize: '0.85rem' }} />
          </div>

          <label className="flex items-start gap-2" style={{ cursor: 'pointer', background: '#fcfcfc', padding: '0.6rem', borderRadius: '6px', border: '1px solid #f0f0f0' }}>
            <input type="checkbox" required style={{ width: '16px', height: '16px', accentColor: 'var(--gold)', cursor: 'pointer', marginTop: '2px', flexShrink: 0 }} />
            <span style={{ fontSize: '0.75rem', lineHeight: 1.4, color: '#404040' }}>
              Sí, acepto recibir mensajes de texto o llamadas a este número.
            </span>
          </label>

          <div style={{ position: 'relative' }}>
            <MessageCircle size={14} color="#808080" style={{ position: 'absolute', top: '12px', left: '12px' }} />
            <textarea placeholder="Mensaje*" required rows={3} style={{ width: '100%', padding: '10px 10px 10px 32px', background: '#f5f5f5', border: '1px solid #e0e0e0', borderRadius: '6px', color: '#000', fontSize: '0.85rem', resize: 'vertical' }} />
          </div>

          <p style={{ fontSize: '0.65rem', color: '#808080', textAlign: 'center', margin: '0 0' }}>
            Al enviar este formulario, aceptas nuestra Política de privacidad.
          </p>

          <button type="submit" className="btn" style={{ background: 'var(--gold)', color: '#000', width: '100%', justifyContent: 'center', padding: '0.8rem', fontSize: '0.9rem', borderRadius: '6px', fontWeight: 700 }}>
            Enviar Mensaje
          </button>
        </form>
      </motion.div>
    </AnimatePresence>
  );
}

function FloatingContactMenu({ onOpenTextModal }) {
  const cleanPhone = CONTENT.CONTACT.PHONE.replace(/\D/g, '');
  const items = [
    { label: 'Chat', icon: MessageCircle, action: () => window.open(`https://wa.me/1${cleanPhone}?text=${encodeURIComponent('Hola Tacurion Restoration, me gustaría solicitar una inspección gratuita para mi propiedad.')}`, '_blank') },
    { label: 'Call', icon: Phone, action: () => window.location.href = `tel:${cleanPhone}` },
    { label: 'Text', icon: Smartphone, action: onOpenTextModal },
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
        <Route path="/servicios" element={<DetailedServicesPage />} />
      </Routes>
      <Footer />

      {/* Dynamic Floating Menu & Modal */}
      <FloatingContactMenu onOpenTextModal={() => setIsModalOpen(true)} />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Router>
  );
}
