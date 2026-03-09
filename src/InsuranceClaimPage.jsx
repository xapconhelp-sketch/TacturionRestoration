import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight, Phone, Mail, User, Smartphone, MessageCircle, FileText } from 'lucide-react';
import { CONTENT } from './content';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const stagger = {
    visible: { transition: { staggerChildren: 0.15 } }
};

export default function InsuranceClaimPage() {
    const pageData = CONTENT.INSURANCE_CLAIM;

    return (
        <div style={{ background: '#121212', color: '#fff', minHeight: '100vh' }}>
            {/* 1. HERO SECTION */}
            <section className="section" style={{ paddingTop: '180px', paddingBottom: '100px', position: 'relative', overflow: 'hidden' }}>
                <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
                    <motion.div initial="hidden" animate="visible" variants={stagger}>
                        <motion.div variants={fadeUp} className="divider mx-auto" style={{ marginBottom: '2rem', background: 'var(--gold)' }} />
                        <motion.p variants={fadeUp} style={{ color: 'var(--gold)', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '1.5rem', fontSize: '0.85rem' }}>
                            {pageData.HERO.SUBTITLE}
                        </motion.p>
                        <motion.h1 variants={fadeUp} style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', fontWeight: 900, marginBottom: '2.5rem', lineHeight: 1, letterSpacing: '-0.02em' }}>
                            {pageData.HERO.TITLE.split(' ').map((word, i) => (
                                <span key={i} style={word.toLowerCase() === 'disaster' ? { color: 'var(--gold)' } : {}}>{word} </span>
                            ))}
                        </motion.h1>
                        <motion.p variants={fadeUp} className="mx-auto" style={{ maxWidth: '750px', fontSize: '1.25rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.7)', fontWeight: 400 }}>
                            {pageData.HERO.DESCRIPTION.split(' ').map((word, i) => (
                                <span key={i} style={word.includes('increase') || word.includes('premium') ? { color: 'var(--gold)', fontWeight: 700 } : {}}>{word} </span>
                            ))}
                        </motion.p>
                    </motion.div>
                </div>
                {/* Background Decor */}
                <div style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', width: '80%', height: '60%', background: 'radial-gradient(circle, rgba(197,160,89,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
            </section>

            {/* 2. ASYMMETRIC SECTION (DEFENDER) */}
            <section className="section" style={{ padding: '100px 0' }}>
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeUp}
                        >
                            <div style={{ position: 'relative' }}>
                                <div style={{
                                    borderRadius: '32px',
                                    overflow: 'hidden',
                                    boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
                                    border: '1px solid rgba(255,255,255,0.1)'
                                }}>
                                    <img
                                        src={pageData.DEFENDER.IMAGE}
                                        alt="Insurance Expert"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                                {/* Floating Badge */}
                                <div style={{
                                    position: 'absolute',
                                    bottom: '-20px',
                                    right: '10px',
                                    background: 'var(--gold)',
                                    color: '#000',
                                    padding: 'clamp(1rem, 3vw, 1.5rem)',
                                    borderRadius: '20px',
                                    fontWeight: 900,
                                    fontSize: 'clamp(1rem, 3vw, 1.2rem)',
                                    boxShadow: '0 10px 30px rgba(197,160,89,0.4)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    lineHeight: 1
                                }}>
                                    <span>100%</span>
                                    <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', marginTop: '4px' }}>Commitment</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={stagger}
                        >
                            <motion.h2 variants={fadeUp} style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 900, marginBottom: '2rem', lineHeight: 1.1 }}>
                                {pageData.DEFENDER.TITLE}
                            </motion.h2>
                            <motion.p variants={fadeUp} style={{ fontSize: '1.15rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.8)', marginBottom: '2.5rem' }}>
                                {pageData.DEFENDER.DESCRIPTION}
                            </motion.p>
                            <motion.div variants={fadeUp} className="flex flex-col gap-4">
                                <div className="flex items-start gap-4">
                                    <div style={{ background: 'rgba(197,160,89,0.1)', padding: '10px', borderRadius: '12px' }}>
                                        <ShieldCheck className="gold" size={24} />
                                    </div>
                                    <div>
                                        <h4 style={{ fontWeight: 700, marginBottom: '4px' }}>Technical Representation</h4>
                                        <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)' }}>We speak the insurance language so you don't have to.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div style={{ background: 'rgba(197,160,89,0.1)', padding: '10px', borderRadius: '12px' }}>
                                        <FileText className="gold" size={24} />
                                    </div>
                                    <div>
                                        <h4 style={{ fontWeight: 700, marginBottom: '4px' }}>Xactimate Documentation</h4>
                                        <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)' }}>Precise estimates under industry standards.</p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. HIGHLIGHT CARD (BOLD) */}
            <section style={{ padding: '60px 0' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        style={{
                            background: '#C5A059',
                            padding: 'clamp(3rem, 8vw, 6rem) clamp(1.5rem, 5vw, 4rem)',
                            borderRadius: '40px',
                            color: '#000',
                            textAlign: 'center',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        {/* Pattern overlay */}
                        <div style={{ position: 'absolute', inset: 0, opacity: 0.05, backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

                        <div style={{ position: 'relative', zIndex: 1 }}>
                            <h2 style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', fontWeight: 900, marginBottom: '1.5rem', lineHeight: 0.9, letterSpacing: '-0.04em' }}>
                                {pageData.HIGHLIGHT.TITLE}
                            </h2>
                            <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', maxWidth: '850px', margin: '0 auto', fontWeight: 600, lineHeight: 1.5, color: 'rgba(0,0,0,0.8)' }}>
                                {pageData.HIGHLIGHT.DESCRIPTION}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 4. FORM SECTION (LEAD GEN) */}
            <section id="claim-form" className="section" style={{ padding: '100px 0', position: 'relative' }}>
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={stagger}
                        >
                            <motion.h2 variants={fadeUp} style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 900, marginBottom: '1.5rem', lineHeight: 1.1 }}>
                                {pageData.FORM.TITLE}
                            </motion.h2>
                            <motion.p variants={fadeUp} style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', marginBottom: '3rem', maxWidth: '500px' }}>
                                {pageData.FORM.SUBTITLE}
                            </motion.p>

                            <motion.ul variants={fadeUp} style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                {[
                                    "No initial cost",
                                    "Guaranteed results",
                                    "Massachusetts specialists"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3" style={{ fontSize: '1.1rem', fontWeight: 600 }}>
                                        <div style={{ background: 'var(--gold)', borderRadius: '50%', padding: '4px' }}>
                                            <ArrowRight size={14} color="#000" />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </motion.ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div style={{
                                background: 'rgba(255,255,255,0.03)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255,255,255,0.08)',
                                padding: 'clamp(2rem, 5vw, 3.5rem)',
                                borderRadius: '32px',
                                boxShadow: '0 40px 100px rgba(0,0,0,0.3)'
                            }}>
                                <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div style={{ position: 'relative' }}>
                                            <User size={18} style={{ position: 'absolute', top: '16px', left: '16px', color: 'rgba(255,255,255,0.3)' }} />
                                            <input type="text" placeholder="First Name" style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '16px 16px 16px 48px', color: '#fff' }} />
                                        </div>
                                        <div style={{ position: 'relative' }}>
                                            <User size={18} style={{ position: 'absolute', top: '16px', left: '16px', color: 'rgba(255,255,255,0.3)' }} />
                                            <input type="text" placeholder="Last Name" style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '16px 16px 16px 48px', color: '#fff' }} />
                                        </div>
                                    </div>
                                    <div style={{ position: 'relative' }}>
                                        <Smartphone size={18} style={{ position: 'absolute', top: '16px', left: '16px', color: 'rgba(255,255,255,0.3)' }} />
                                        <input type="tel" placeholder="Phone" style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '16px 16px 16px 48px', color: '#fff' }} />
                                    </div>
                                    <div style={{ position: 'relative' }}>
                                        <MessageCircle size={18} style={{ position: 'absolute', top: '16px', left: '16px', color: 'rgba(255,255,255,0.3)' }} />
                                        <textarea placeholder="Tell us about the damage" rows={4} style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '16px 16px 16px 48px', color: '#fff', resize: 'none' }} />
                                    </div>
                                    <motion.button
                                        type="button"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        style={{
                                            background: '#fff',
                                            color: '#000',
                                            padding: '1.25rem',
                                            borderRadius: '12px',
                                            fontWeight: 800,
                                            fontSize: '1.1rem',
                                            cursor: 'pointer',
                                            border: 'none',
                                            marginTop: '1rem',
                                            transition: 'all 0.3s ease'
                                        }}
                                        className="btn-submit-premium"
                                    >
                                        {pageData.FORM.CTA}
                                    </motion.button>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Final Trust Note */}
            <div className="container" style={{ paddingBottom: '100px', textAlign: 'center' }}>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>
                    * Fulfillment of benefits depends on your policy terms and Massachusetts state regulations.
                    <span style={{ color: 'var(--gold)', fontWeight: 700, marginLeft: '8px' }}>No rate increase</span> for natural disasters is a standard protection.
                </p>
            </div>

            <style jsx>{`
                .btn-submit-premium:hover {
                    background: var(--gold) !important;
                    box-shadow: 0 15px 30px rgba(197,160,89,0.3);
                }
            `}</style>
        </div>
    );
}
