import React from 'react';
import { motion } from 'framer-motion';
import { Check, Phone, Mail, ArrowRight, ChevronRight } from 'lucide-react';
import { CONTENT } from './content';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};

const stagger = {
    visible: { transition: { staggerChildren: 0.1 } }
};

export function CTA() {
    return (
        <section className="section" style={{ background: 'var(--black)', position: 'relative', overflow: 'hidden', padding: '100px 0' }}>
            {/* Decorative Circle */}
            <div style={{ position: 'absolute', top: '-30%', right: '-5%', width: 400, height: 400, borderRadius: '50%', border: '1px solid rgba(197,160,89,0.1)' }} />
            <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
                <h2 style={{ color: '#fff', fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1 }}>
                    Don't Wait for the Next Storm
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.2rem', maxWidth: 600, margin: '0 auto 3rem', lineHeight: 1.6 }}>
                    Schedule your free inspection today and protect your biggest investment with Massachusetts' restoration experts.
                </p>
                <div className="flex justify-center flex-wrap gap-5">
                    <a href={`tel:${CONTENT.CONTACT.PHONE.replace(/\D/g, '')}`} className="btn" style={{ background: 'var(--gold)', color: '#fff', padding: '1.2rem 3.5rem', borderRadius: '6px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <Phone size={20} /> Call Now
                    </a>
                    <a href="#contact" className="btn" style={{ background: 'transparent', border: '2px solid #fff', color: '#fff', padding: '1.2rem 3.5rem', borderRadius: '6px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <Mail size={20} /> Send Email
                    </a>
                </div>
            </div>
        </section>
    );
}

export default function DetailedServicesPage() {
    return (
        <div style={{ background: 'var(--surface)', color: 'var(--black)' }}>
            {/* Hero / Header for Services */}
            <section className="section section-dark" style={{ paddingTop: '160px', paddingBottom: '80px' }}>
                <div className="container text-center">
                    <motion.div initial="hidden" animate="visible" variants={stagger}>
                        <motion.div variants={fadeUp} className="divider mx-auto" style={{ marginBottom: '2rem' }} />
                        <motion.p variants={fadeUp} style={{ color: 'var(--gold)', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
                            Our Specialties
                        </motion.p>
                        <motion.h1 variants={fadeUp} style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 800, marginBottom: '2rem', lineHeight: 1 }}>
                            High-Level <span style={{ color: 'var(--gold)' }}>Services</span>
                        </motion.h1>
                        <motion.p variants={fadeUp} className="gray mx-auto" style={{ maxWidth: '700px', fontSize: '1.2rem', lineHeight: 1.6 }}>
                            Comprehensive roofing, post-storm restoration, and interior finishing solutions with the Tacurion Restoration guarantee.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Services List */}
            <section style={{ padding: '0 0 100px 0' }}>
                <div className="container" style={{ maxWidth: '1280px' }}>
                    {CONTENT.DETAILED_SERVICES.map((service, index) => {
                        const isEven = index % 2 !== 0;
                        return (
                            <div
                                key={service.id}
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                                    gap: 'clamp(3rem, 8vw, 6rem)',
                                    alignItems: 'stretch', // Changed from center to stretch
                                    marginBottom: '160px',
                                    padding: '96px 0'
                                }}
                            >
                                {/* Image Block */}
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-100px" }}
                                    variants={fadeUp}
                                    style={{ order: isEven ? 2 : 1, height: '100%' }} // Ensure height is 100%
                                >
                                    <div style={{
                                        position: 'relative',
                                        borderRadius: '32px',
                                        overflow: 'hidden',
                                        height: '100%', // Match parent height
                                        minHeight: '400px', // Prevent too small on thin screens
                                        boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
                                    }}>
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                                        />
                                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(18,18,18,0.1), transparent)' }} />
                                    </div>
                                </motion.div>

                                {/* Text Block */}
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-100px" }}
                                    variants={stagger}
                                    style={{ order: isEven ? 1 : 2 }}
                                >
                                    <motion.div variants={fadeUp}>
                                        <p style={{ color: 'var(--gold)', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem', fontSize: '0.9rem' }}>
                                            {service.category}
                                        </p>
                                        <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 800, marginBottom: '2rem', lineHeight: 1.1 }}>
                                            {service.title}
                                        </h2>
                                    </motion.div>

                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                        {service.copy.map((item, i) => (
                                            <motion.div key={i} variants={fadeUp} style={{ display: 'flex', gap: '1.5rem' }}>
                                                <div style={{
                                                    width: '48px',
                                                    height: '48px',
                                                    borderRadius: '50%',
                                                    background: 'rgba(197, 160, 89, 0.1)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    flexShrink: 0,
                                                    border: '1px solid rgba(197, 160, 89, 0.2)'
                                                }}>
                                                    <Check size={24} color="var(--gold)" />
                                                </div>
                                                <div>
                                                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--black)' }}>
                                                        {item.label}
                                                    </h4>
                                                    <p className="gray" style={{ fontSize: '1rem', lineHeight: 1.6 }}>
                                                        {item.text}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    <motion.div variants={fadeUp} style={{ marginTop: '3rem' }}>
                                        <a href={`tel:${CONTENT.CONTACT.PHONE.replace(/\D/g, '')}`} className="btn btn-gold" style={{ padding: '0 2.5rem' }}>
                                            Request Information <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                                        </a>
                                    </motion.div>
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Final CTA */}
            <CTA />
        </div>
    );
}
