import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight, User, Smartphone, MessageCircle, FileText } from 'lucide-react';
import { CONTENT } from './content';

// ─── REAL IMAGES ─── (rutas dentro de src/assets — mueve tus fotos aquí)
import defenderImg from './assets/insurance_consultant_roofing.png';
import heroGallery1 from './assets/RoofRepair.jpeg';
import heroGallery2 from './assets/stormdamage.jpg';
import heroGallery3 from './assets/water_damage_mitigation.png';

/* ─── Damage Pill component (interactive) ─── */
function DamagePill({ label, svg }) {
    const [active, setActive] = useState(false);
    return (
        <div
            className={`damage-pill${active ? ' active' : ''}`}
            onClick={() => setActive(a => !a)}
        >
            {svg}
            <span>{label}</span>
        </div>
    );
}

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const stagger = {
    visible: { transition: { staggerChildren: 0.15 } }
};

/* ─── Hero Photo Gallery (3 fotos reales antes del copy) ─── */
function HeroGallery() {
    const photos = [
        { src: heroGallery1, alt: 'Roof repair in progress', label: 'Active Restoration' },
        { src: heroGallery2, alt: 'Storm damage documentation', label: 'Storm Damage' },
        { src: heroGallery3, alt: 'Water damage mitigation service', label: 'Water Mitigation' },
    ];
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
                display: 'grid',
                gridTemplateColumns: '1.4fr 1fr 1fr',
                gap: '12px',
                maxWidth: '900px',
                margin: '3.5rem auto 0',
            }}
        >
            {photos.map((p, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.45 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                    style={{ position: 'relative', borderRadius: 20, overflow: 'hidden', aspectRatio: i === 0 ? '4/3' : '1/1', boxShadow: '0 16px 40px rgba(0,0,0,0.55)', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                    <img
                        src={p.src}
                        alt={p.alt}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.55s ease' }}
                        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                    />
                    {/* Gradient overlay + label */}
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%)', pointerEvents: 'none' }} />
                    <span style={{
                        position: 'absolute', bottom: 10, left: 12,
                        fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.12em',
                        textTransform: 'uppercase', color: 'rgba(255,255,255,0.75)',
                        background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(6px)',
                        padding: '3px 9px', borderRadius: 6,
                        border: '1px solid rgba(255,255,255,0.1)',
                    }}>
                        {p.label}
                    </span>
                </motion.div>
            ))}
        </motion.div>
    );
}

export default function InsuranceClaimPage() {
    const pageData = CONTENT.INSURANCE_CLAIM;

    return (
        <div style={{ background: '#121212', color: '#fff', minHeight: '100vh' }}>

            {/* ─── 1. HERO ─── */}
            <section className="section" style={{ paddingTop: '180px', paddingBottom: '100px', position: 'relative', overflow: 'hidden' }}>
                <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
                    <motion.div initial="hidden" animate="visible" variants={stagger}>
                        <motion.div variants={fadeUp} className="divider mx-auto" style={{ marginBottom: '2rem', background: 'var(--gold)' }} />
                        <motion.p variants={fadeUp} style={{ color: 'var(--gold)', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '1.5rem', fontSize: '0.85rem' }}>
                            Insurance Claims
                        </motion.p>
                        <motion.h1 variants={fadeUp} style={{ fontSize: 'clamp(2.2rem, 6vw, 5rem)', fontWeight: 900, marginBottom: '2.5rem', lineHeight: 1.05, letterSpacing: '-0.02em' }}>
                            Storm Damage{' '}
                            <span style={{ color: 'var(--gold)' }}>Roof Claims</span>
                        </motion.h1>
                        <motion.p variants={fadeUp} className="mx-auto" style={{ maxWidth: '750px', fontSize: '1.2rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.7)', fontWeight: 400 }}>
                            We guide you through every step of your insurance claim — protecting your home and your wallet.
                        </motion.p>

                        {/* ── CTA button that scrolls to form ── */}
                        <motion.div variants={fadeUp} style={{ marginTop: '2.5rem' }}>
                            <a
                                href="#claim-form"
                                style={{
                                    display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                                    background: 'var(--gold)', color: '#000',
                                    padding: '1rem 2.2rem', borderRadius: 14,
                                    fontWeight: 800, fontSize: '0.98rem',
                                    textDecoration: 'none', letterSpacing: '0.02em',
                                    boxShadow: '0 8px 30px rgba(197,160,89,0.35)',
                                    transition: 'transform 0.2s, box-shadow 0.2s',
                                }}
                                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 14px 40px rgba(197,160,89,0.5)'; }}
                                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(197,160,89,0.35)'; }}
                            >
                                REQUEST FREE INSPECTION <ArrowRight size={17} />
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* ── 3-photo gallery right below the headline ── */}
                    <HeroGallery />
                </div>
                <div style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', width: '80%', height: '60%', background: 'radial-gradient(circle, rgba(197,160,89,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
            </section>

            {/* ─── 2. DEFENDER SECTION ─── */}
            <section className="section" style={{ padding: '100px 0' }}>
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
                            <div style={{ position: 'relative' }}>
                                <div style={{ borderRadius: '32px', overflow: 'hidden', boxShadow: '0 25px 50px rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)' }}>
                                    {/*  REAL IMAGE — insurance consultant reviewing roofing plans */}
                                    <img
                                        src={defenderImg}
                                        alt="Insurance Consultant reviewing roofing claim"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                                <div style={{ position: 'absolute', bottom: '-20px', right: '10px', background: 'var(--gold)', color: '#000', padding: 'clamp(1rem, 3vw, 1.5rem)', borderRadius: '20px', fontWeight: 900, fontSize: 'clamp(1rem, 3vw, 1.2rem)', boxShadow: '0 10px 30px rgba(197,160,89,0.4)', display: 'flex', flexDirection: 'column', alignItems: 'center', lineHeight: 1 }}>
                                    <span>100%</span>
                                    <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', marginTop: '4px' }}>Commitment</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
                            <motion.h2 variants={fadeUp} style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 900, marginBottom: '1.5rem', lineHeight: 1.1 }}>
                                Your Advocate with the{' '}
                                <span style={{ color: 'var(--gold)' }}>Insurance Adjuster</span>
                            </motion.h2>
                            <motion.p variants={fadeUp} style={{ fontSize: '1.15rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.8)', marginBottom: '2.5rem' }}>
                                You need a knowledgeable contractor who can be an advocate for you with the insurance adjuster — someone who understands the technical language, knows what to look for, and ensures every item of damage is properly documented and covered.
                            </motion.p>
                            <motion.div variants={fadeUp} className="flex flex-col gap-4">
                                <div className="flex items-start gap-4">
                                    <div style={{ background: 'rgba(197,160,89,0.1)', padding: '10px', borderRadius: '12px', flexShrink: 0 }}>
                                        <ShieldCheck className="gold" size={24} />
                                    </div>
                                    <div>
                                        <h4 style={{ fontWeight: 700, marginBottom: '4px' }}>Technical Representation</h4>
                                        <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)' }}>We speak the insurance language so you don't have to.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div style={{ background: 'rgba(197,160,89,0.1)', padding: '10px', borderRadius: '12px', flexShrink: 0 }}>
                                        <FileText className="gold" size={24} />
                                    </div>
                                    <div>
                                        <h4 style={{ fontWeight: 700, marginBottom: '4px' }}>Complete Documentation</h4>
                                        <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)' }}>Precise estimates under industry standards to maximize your coverage.</p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ─── 3. ZERO OUT-OF-POCKET ─── */}
            <section style={{ padding: '60px 0' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        style={{ background: '#C5A059', padding: 'clamp(3rem, 8vw, 6rem) clamp(1.5rem, 5vw, 4rem)', borderRadius: '40px', color: '#000', textAlign: 'center', position: 'relative', overflow: 'hidden' }}
                    >
                        <div style={{ position: 'absolute', inset: 0, opacity: 0.05, backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                        <div style={{ position: 'relative', zIndex: 1 }}>
                            <h2 style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', fontWeight: 900, marginBottom: '1.5rem', lineHeight: 0.95, letterSpacing: '-0.04em' }}>
                                ZERO OUT-OF-POCKET EXPENSES
                            </h2>
                            <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', maxWidth: '850px', margin: '0 auto 2rem', fontWeight: 600, lineHeight: 1.5, color: 'rgba(0,0,0,0.85)' }}>
                                You will not pay any expenses other than your insurance deductible. We handle everything so you can focus on what matters — your family and your home.
                            </p>
                            <div style={{ display: 'inline-block', background: 'rgba(0,0,0,0.12)', borderRadius: '16px', padding: '1rem 2rem' }}>
                                <p style={{ fontWeight: 800, fontSize: '1.05rem', color: '#000', margin: 0 }}>
                                    ✓ &nbsp;Natural disaster claims do <u>not</u> count toward future rate increases — it's a standard protection under Massachusetts law.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ─── 4. LEAD GEN FORM ─── */}
            <section id="claim-form" style={{ padding: '100px 0', background: 'rgba(255,255,255,0.02)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">

                        {/* LEFT — copy + benefits */}
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} style={{ paddingTop: '1rem' }}>
                            <motion.p variants={fadeUp} style={{ color: 'var(--gold)', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', fontSize: '0.7rem', display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.3rem' }}>
                                <span style={{ display: 'block', width: 28, height: 2, background: 'var(--gold)', borderRadius: 2, flexShrink: 0 }} />
                                Start Your Claim
                            </motion.p>
                            <motion.h2 variants={fadeUp} style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', fontWeight: 900, lineHeight: 1.06, marginBottom: '1.4rem', letterSpacing: '-0.02em' }}>
                                Get Your Roof{' '}
                                <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Inspected Today</span>
                            </motion.h2>
                            <motion.p variants={fadeUp} style={{ fontSize: '0.98rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.78, marginBottom: '2.5rem', maxWidth: 400 }}>
                                Leave your information and one of our specialists will contact you within 24 hours to schedule your free property inspection.
                            </motion.p>

                            {/* Benefits */}
                            <motion.ul variants={fadeUp} style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.9rem', marginBottom: '2.8rem' }}>
                                {[
                                    { svg: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>, text: "No out-of-pocket costs — only your deductible" },
                                    { svg: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>, text: "Full documentation & claim representation" },
                                    { svg: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>, text: "Massachusetts specialists since 2009" },
                                    { svg: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>, text: "24-hour response, 7 days a week" },
                                ].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.93rem', fontWeight: 500, color: 'rgba(255,255,255,0.85)' }}>
                                        <span style={{ width: 38, height: 38, borderRadius: 11, background: 'rgba(197,160,89,0.12)', border: '1px solid rgba(197,160,89,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'var(--gold)' }}>
                                            {item.svg}
                                        </span>
                                        {item.text}
                                    </li>
                                ))}
                            </motion.ul>

                            {/* Stats */}
                            <motion.div variants={fadeUp} style={{ display: 'flex', gap: '2.5rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                                {[{ num: '500+', lbl: 'Claims Handled' }, { num: '15+', lbl: 'Years Exp.' }, { num: '100%', lbl: 'Committed' }].map((s, i) => (
                                    <div key={i}>
                                        <div style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--gold)', lineHeight: 1, fontFamily: 'var(--font-display)' }}>{s.num}</div>
                                        <div style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.4)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 3 }}>{s.lbl}</div>
                                    </div>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* RIGHT — Form Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div style={{ background: 'linear-gradient(160deg,#1f1f1f 0%,#161616 100%)', border: '1px solid rgba(197,160,89,0.18)', borderRadius: 28, overflow: 'hidden', boxShadow: '0 0 0 1px rgba(197,160,89,0.04), 0 35px 90px rgba(0,0,0,0.7)', position: 'relative' }}>

                                {/* Gold shimmer bar */}
                                <div style={{ height: 3, background: 'linear-gradient(90deg, transparent, rgba(197,160,89,0.4) 20%, #C5A059 50%, rgba(197,160,89,0.4) 80%, transparent)' }} />

                                {/* Corner glow */}
                                <div style={{ position: 'absolute', top: -30, right: -30, width: 120, height: 120, background: 'radial-gradient(circle, rgba(197,160,89,0.1), transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />

                                {/* Card header */}
                                <div style={{ padding: '2rem 2.5rem 0', textAlign: 'center', position: 'relative' }}>
                                    <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.3rem' }}>Request Free Inspection</h3>
                                    <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)', marginBottom: '0.75rem' }}>We'll get back to you within 24 hours</p>
                                    <div style={{ width: 36, height: 2, background: 'var(--gold)', margin: '0 auto', borderRadius: 2 }} />
                                </div>

                                {/* Form body */}
                                <div style={{ padding: '1.8rem 2.5rem 2.5rem' }}>

                                    {/*
                                    ╔══════════════════════════════════════════════════════════╗
                                    ║  GRAVITY FORMS — cuando WordPress esté listo, reemplaza  ║
                                    ║  todo el bloque <form>…</form> de abajo con:             ║
                                    ║                                                          ║
                                    ║    [gravityforms id="1"]                                 ║
                                    ║                                                          ║
                                    ║  Campos a configurar en Gravity Forms:                  ║
                                    ║    • First Name       (obligatory)                      ║
                                    ║    • Last Name        (obligatory)                      ║
                                    ║    • Phone Number     (obligatory)                      ║
                                    ║    • Property Address (obligatory)                      ║
                                    ║    • Type of Damage   (dropdown, obligatory)            ║
                                    ║        Opciones: Hail / Wind / Chimney Leak / Storm      ║
                                    ║    • Additional Details (textarea, opcional)             ║
                                    ║    • Consent checkbox  (obligatorio)                     ║
                                    ╚══════════════════════════════════════════════════════════╝
                                    */}

                                    <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

                                        {/* Name row */}
                                        <div className="grid grid-cols-2 gap-3">
                                            {[['First Name', 'John'], ['Last Name', 'Smith']].map(([label, ph], i) => (
                                                <div key={i}>
                                                    <div style={{ fontSize: '0.67rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '0.35rem', paddingLeft: 2 }}>
                                                        {label} <span style={{ color: 'var(--gold)' }}>*</span>
                                                    </div>
                                                    <div style={{ position: 'relative' }}>
                                                        <User size={15} style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: 13, color: 'rgba(255,255,255,0.22)', pointerEvents: 'none' }} />
                                                        <input type="text" placeholder={ph} required className="form-input" />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Phone */}
                                        <div>
                                            <div style={{ fontSize: '0.67rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '0.35rem', paddingLeft: 2 }}>
                                                Phone Number <span style={{ color: 'var(--gold)' }}>*</span>
                                            </div>
                                            <div style={{ position: 'relative' }}>
                                                <Smartphone size={15} style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: 13, color: 'rgba(255,255,255,0.22)', pointerEvents: 'none' }} />
                                                <input type="tel" placeholder="(508) 000-0000" required className="form-input" />
                                            </div>
                                        </div>

                                        {/* Address */}
                                        <div>
                                            <div style={{ fontSize: '0.67rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '0.35rem', paddingLeft: 2 }}>
                                                Property Address <span style={{ color: 'var(--gold)' }}>*</span>
                                            </div>
                                            <div style={{ position: 'relative' }}>
                                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: 13, pointerEvents: 'none' }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                                                <input type="text" placeholder="123 Main St, Boston MA" required className="form-input" />
                                            </div>
                                        </div>

                                        {/* Damage type pills */}
                                        <div>
                                            <div style={{ fontSize: '0.67rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '0.5rem', paddingLeft: 2 }}>
                                                Type of Damage <span style={{ color: 'var(--gold)' }}>*</span>
                                            </div>
                                            <div className="damage-pills-grid">
                                                {[
                                                    { label: 'Hail', svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25" /><line x1="8" y1="16" x2="8.01" y2="16" /><line x1="8" y1="20" x2="8.01" y2="20" /><line x1="12" y1="18" x2="12.01" y2="18" /><line x1="12" y1="22" x2="12.01" y2="22" /><line x1="16" y1="16" x2="16.01" y2="16" /><line x1="16" y1="20" x2="16.01" y2="20" /></svg> },
                                                    { label: 'Wind', svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" /></svg> },
                                                    { label: 'Chimney Leak', svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg> },
                                                    { label: 'Storm', svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9" /><polyline points="13 11 9 17 15 17 11 23" /></svg> },
                                                ].map((item, i) => (
                                                    <DamagePill key={i} label={item.label} svg={item.svg} />
                                                ))}
                                            </div>
                                        </div>

                                        {/* Additional Details */}
                                        <div>
                                            <div style={{ fontSize: '0.67rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '0.35rem', paddingLeft: 2 }}>
                                                Additional Details <span style={{ fontWeight: 400, opacity: 0.5 }}>(optional)</span>
                                            </div>
                                            <div style={{ position: 'relative' }}>
                                                <MessageCircle size={15} style={{ position: 'absolute', top: 14, left: 13, color: 'rgba(255,255,255,0.22)', pointerEvents: 'none' }} />
                                                <textarea placeholder="Describe the damage you noticed..." rows={3} className="form-input" style={{ paddingTop: 12, resize: 'none', lineHeight: 1.6 }} />
                                            </div>
                                        </div>

                                        {/* Consent */}
                                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 10, padding: '0.85rem 1rem' }}>
                                            <input type="checkbox" id="consent-cb" required style={{ width: 15, height: 15, flexShrink: 0, marginTop: 2, accentColor: 'var(--gold)', cursor: 'pointer' }} />
                                            <label htmlFor="consent-cb" style={{ fontSize: '0.71rem', color: 'rgba(255,255,255,0.38)', lineHeight: 1.55, cursor: 'pointer' }}>
                                                I agree to receive calls or texts about my inspection request. No spam, ever.
                                            </label>
                                        </div>

                                        {/* CTA Button */}
                                        <motion.button
                                            type="submit"
                                            whileHover={{ y: -2, boxShadow: '0 14px 40px rgba(197,160,89,0.45)' }}
                                            whileTap={{ scale: 0.98 }}
                                            style={{ width: '100%', background: 'var(--gold)', color: '#000', border: 'none', borderRadius: 13, padding: '1.05rem 2rem', fontWeight: 800, fontSize: '0.98rem', cursor: 'pointer', letterSpacing: '0.03em', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem', position: 'relative', overflow: 'hidden' }}
                                        >
                                            <span style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '50%', background: 'rgba(255,255,255,0.1)', borderRadius: '13px 13px 0 0', pointerEvents: 'none' }} />
                                            Request Free Inspection
                                            <ArrowRight size={17} />
                                        </motion.button>

                                        <p style={{ textAlign: 'center', fontSize: '0.65rem', color: 'rgba(255,255,255,0.22)', lineHeight: 1.55 }}>
                                            By submitting you agree to our Privacy Policy. Your info is never sold or shared.
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ─── 5. HOW IT WORKS ─── */}
            <section className="section" style={{ padding: '100px 0' }}>
                <div className="container">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center" style={{ marginBottom: '4rem' }}>
                        <motion.p variants={fadeUp} style={{ color: 'var(--gold)', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem', fontSize: '0.8rem' }}>Our Process</motion.p>
                        <motion.h2 variants={fadeUp} style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900 }}>How We Handle Your Claim</motion.h2>
                    </motion.div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { num: '01', title: 'Free Inspection', desc: 'We visit your property and document all storm-related damage with photos and technical reports.' },
                            { num: '02', title: 'Claim Filing', desc: 'We work directly with your insurance company as your technical representative throughout the entire process.' },
                            { num: '03', title: 'Full Restoration', desc: 'Once approved, we complete all repairs to manufacturer and insurance standards — guaranteed.' },
                        ].map((step, i) => (
                            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i} style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '3.5rem', fontWeight: 900, color: 'rgba(197,160,89,0.2)', fontFamily: 'var(--font-display)', lineHeight: 1, marginBottom: '1rem' }}>{step.num}</div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.75rem' }}>{step.title}</h3>
                                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: 1.7, maxWidth: 280, margin: '0 auto' }}>{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── 6. DAMAGE TYPES ─── */}
            <section style={{ padding: '60px 0 100px' }}>
                <div className="container">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center" style={{ marginBottom: '3rem' }}>
                        <motion.h2 variants={fadeUp} style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 900 }}>Types of Damage We Cover</motion.h2>
                    </motion.div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25" /><line x1="8" y1="16" x2="8.01" y2="16" /><line x1="8" y1="20" x2="8.01" y2="20" /><line x1="12" y1="18" x2="12.01" y2="18" /><line x1="12" y1="22" x2="12.01" y2="22" /><line x1="16" y1="16" x2="16.01" y2="16" /><line x1="16" y1="20" x2="16.01" y2="20" /></svg>, label: 'Hail' },
                            { icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" /></svg>, label: 'Wind' },
                            { icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>, label: 'Chimney Leak' },
                            { icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9" /><polyline points="13 11 9 17 15 17 11 23" /></svg>, label: 'Storm' },
                        ].map((item, i) => (
                            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', padding: '2rem 1rem', textAlign: 'center', transition: 'border-color 0.3s' }}>
                                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.75rem', color: 'var(--gold)' }}>{item.icon}</div>
                                <div style={{ fontWeight: 700, fontSize: '1rem' }}>{item.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── TRUST NOTE ─── */}
            <div className="container" style={{ paddingBottom: '100px', textAlign: 'center' }}>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', maxWidth: 700, margin: '0 auto' }}>
                    * Fulfillment of benefits depends on your policy terms and Massachusetts state regulations.{' '}
                    <span style={{ color: 'var(--gold)', fontWeight: 700 }}>No rate increase</span>{' '}
                    for natural disasters is a standard protection.
                </p>
            </div>

            <style>{`
                .form-input {
                    width: 100%;
                    background: rgba(255,255,255,0.04);
                    border: 1px solid rgba(255,255,255,0.07);
                    border-radius: 11px;
                    padding: 12px 13px 12px 40px;
                    color: #fff;
                    font-size: 0.88rem;
                    font-family: inherit;
                    outline: none;
                    transition: border-color 0.22s, background 0.22s, box-shadow 0.22s;
                    -webkit-appearance: none;
                }
                .form-input:hover { border-color: rgba(255,255,255,0.12); }
                .form-input:focus {
                    border-color: rgba(197,160,89,0.55);
                    background: rgba(197,160,89,0.035);
                    box-shadow: 0 0 0 3px rgba(197,160,89,0.09);
                }
                .form-input::placeholder { color: rgba(255,255,255,0.22); }
                .damage-pills-grid {
                    display: grid;
                    grid-template-columns: repeat(4,1fr);
                    gap: 0.6rem;
                }
                .damage-pill {
                    background: rgba(255,255,255,0.03);
                    border: 1px solid rgba(255,255,255,0.07);
                    border-radius: 11px;
                    padding: 0.75rem 0.4rem;
                    text-align: center;
                    cursor: pointer;
                    transition: all 0.2s;
                    user-select: none;
                }
                .damage-pill svg {
                    width: 22px; height: 22px;
                    display: block;
                    margin: 0 auto 0.35rem;
                    color: rgba(255,255,255,0.35);
                    transition: color 0.2s;
                }
                .damage-pill span {
                    font-size: 0.68rem;
                    font-weight: 600;
                    color: rgba(255,255,255,0.45);
                    transition: color 0.2s;
                }
                .damage-pill:hover, .damage-pill.active {
                    border-color: rgba(197,160,89,0.5);
                    background: rgba(197,160,89,0.08);
                }
                .damage-pill:hover svg, .damage-pill.active svg { color: var(--gold); }
                .damage-pill:hover span, .damage-pill.active span { color: var(--gold); }
            `}</style>
        </div>
    );
}
