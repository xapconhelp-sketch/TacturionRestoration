import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Phone, Mail, ArrowRight, ChevronRight, ShieldCheck, Wrench, Zap } from 'lucide-react';
import { CONTENT } from './content';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};

const stagger = {
    visible: { transition: { staggerChildren: 0.1 } }
};

function ImageGallery({ images, title }) {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <div style={{ position: 'relative', width: '100%', height: '100%', background: '#1a1a1a' }}>
            <AnimatePresence mode="wait">
                <motion.img
                    key={images[current]}
                    src={images[current]}
                    alt={`${title} - Gallery Image ${current + 1}`}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }}
                />
            </AnimatePresence>
            
            {/* Gallery Indicators */}
            <div style={{ 
                position: 'absolute', 
                bottom: '24px', 
                left: '50%', 
                transform: 'translateX(-50%)', 
                display: 'flex', 
                gap: '10px', 
                zIndex: 10,
                background: 'rgba(0,0,0,0.3)',
                padding: '8px 16px',
                borderRadius: '100px',
                backdropFilter: 'blur(10px)'
            }}>
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        style={{
                            width: i === current ? '24px' : '8px',
                            height: '8px',
                            borderRadius: '100px',
                            background: i === current ? 'var(--gold)' : 'rgba(255,255,255,0.5)',
                            border: 'none',
                            padding: 0,
                            cursor: 'pointer',
                            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                        }}
                    />
                ))}
            </div>
            
            {/* Gradient Overlay for better contrast */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(18,18,18,0.4), transparent)', pointerEvents: 'none' }} />
        </div>
    );
}

export function CTA({ onOpenModal }) {
    return (
        <section className="section" style={{ background: 'var(--black)', position: 'relative', overflow: 'hidden', padding: '100px 0' }}>
            {/* Decorative Circle */}
            <div style={{ position: 'absolute', top: '-30%', right: '-5%', width: 400, height: 400, borderRadius: '50%', border: '1px solid rgba(197,160,89,0.1)' }} />
            <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
                <h2 style={{ color: '#fff', fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1 }}>
                    Don't Wait for the Next Storm
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.2rem', maxWidth: 600, margin: '0 auto 3rem', lineHeight: 1.6 }}>
                    Schedule your free inspection today and protect your biggest investment with Massachusetts & Rhode Island's restoration experts.
                </p>
                <div className="flex justify-center flex-wrap gap-5">
                    <button onClick={onOpenModal} className="btn" style={{ background: 'var(--gold)', color: '#fff', padding: '1.2rem 3.5rem', borderRadius: '6px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '10px', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
                        <Mail size={20} /> Request Information
                    </button>
                    <button onClick={onOpenModal} className="btn" style={{ background: 'transparent', border: '2px solid #fff', color: '#fff', padding: '1.2rem 3.5rem', borderRadius: '6px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', fontFamily: 'inherit' }}>
                        <Mail size={20} /> Send Email
                    </button>
                </div>
            </div>
        </section>
    );
}

function ServiceSection({ service, index, onOpenModal }) {
    const [activeTabIdx, setActiveTabIdx] = useState(0);
    const isEven = index % 2 !== 0;

    const displayData = service.tabs ? service.tabs[activeTabIdx] : service;

    return (
        <div style={{ marginBottom: '160px', padding: '96px 0' }}>
            {/* Conclusion text as a simple centered title */}
            {service.conclusion && (
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    style={{
                        textAlign: 'center',
                        maxWidth: '1000px',
                        margin: '0 auto 4rem',
                    }}
                >
                    <h3 style={{
                        fontSize: 'clamp(1.4rem, 2.5vw, 2.2rem)',
                        fontWeight: 700,
                        lineHeight: 1.3,
                        color: '#fff',
                        marginBottom: '1rem'
                    }}>
                        {service.conclusion}
                    </h3>
                </motion.div>
            )}

            {/* Tabs if they exist */}
            {service.tabs && (
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '1.5rem',
                    flexWrap: 'wrap',
                    marginBottom: '4rem'
                }}>
                    {service.tabs.map((tab, idx) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTabIdx(idx)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                padding: '0.8rem 1.8rem',
                                borderRadius: '100px',
                                border: idx === activeTabIdx ? '1px solid var(--gold)' : '1px solid rgba(255,255,255,0.1)',
                                background: idx === activeTabIdx ? 'rgba(197, 160, 89, 0.1)' : 'transparent',
                                color: idx === activeTabIdx ? 'var(--gold)' : 'rgba(255,255,255,0.6)',
                                fontWeight: 700,
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                fontSize: '1rem'
                            }}
                        >
                            {tab.icon === 'ShieldCheck' && <ShieldCheck size={18} />}
                            {tab.icon === 'Wrench' && <Wrench size={18} />}
                            {tab.icon === 'Zap' && <Zap size={18} />}
                            {tab.label}
                        </button>
                    ))}
                </div>
            )}

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: 'clamp(3rem, 8vw, 6rem)',
                    alignItems: 'center'
                }}
            >
                {/* Image / Gallery Block */}
                <motion.div
                    key={displayData.images ? activeTabIdx : displayData.image}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    style={{ order: isEven ? 2 : 1, height: '100%' }}
                >
                    <div style={{
                        position: 'relative',
                        borderRadius: '32px',
                        overflow: 'hidden',
                        height: '100%',
                        minHeight: '400px',
                        width: '100%',
                        boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                        background: '#1a1a1a',
                        border: '1px solid rgba(255,255,255,0.05)'
                    }}>
                        {displayData.images ? (
                            <ImageGallery images={displayData.images} title={displayData.title} />
                        ) : (
                            <>
                                <img
                                    src={displayData.image}
                                    alt={displayData.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                                />
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(18,18,18,0.2), transparent)' }} />
                            </>
                        )}
                    </div>
                </motion.div>

                {/* Text Block */}
                <motion.div
                    key={displayData.title}
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
                            {displayData.title}
                        </h2>
                        {displayData.intro && (
                            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', marginBottom: '2.5rem', lineHeight: 1.6 }}>
                                {displayData.intro}
                            </p>
                        )}
                    </motion.div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        {displayData.copy.map((item, i) => (
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
                                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', color: '#ffffff' }}>
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
                        <button onClick={onOpenModal} className="btn btn-gold" style={{ padding: '0 2.5rem', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 'bold' }}>
                            Request Information <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}

export default function DetailedServicesPage({ onOpenModal }) {
    return (
        <div style={{ background: '#0d0d0d', color: '#ffffff' }}>
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
                    {CONTENT.DETAILED_SERVICES.map((service, index) => (
                        <ServiceSection
                            key={service.id}
                            service={service}
                            index={index}
                            onOpenModal={onOpenModal}
                        />
                    ))}
                </div>
            </section>

            {/* Final CTA */}
            <CTA onOpenModal={onOpenModal} />
        </div>
    );
}
