import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, ArrowRight, User, Smartphone, CloudLightning, Home, Flame, TreePine, Droplets, Info } from 'lucide-react';
import { CONTENT } from './content';

// ─── REAL IMAGES ───
import heroGallery1 from './assets/RoofRepair.jpeg';
import heroGallery2 from './assets/stormdamage.jpg';
import heroGallery3 from './assets/water_damage_mitigation.png';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const stagger = {
    visible: { transition: { staggerChildren: 0.15 } }
};

const TABS = [
    {
        id: 'what-is-it',
        title: 'What is it?',
        icon: <Info size={20} />,
        content: {
            heading: 'Understanding Your Claim',
            text: 'An insurance claim is a formal request by a policyholder to an insurance company for coverage or compensation for a covered loss or policy event. For homeowners, this typically involves damage from weather events like hail, wind, or fallen trees.',
            points: [
                'Formal assessment of property damage',
                'Negotiation with insurance adjusters',
                'Securing funds for necessary repairs'
            ],
            image: heroGallery2
        }
    },
    {
        id: 'mitigation',
        title: 'Mitigation',
        icon: <Droplets size={20} />,
        content: {
            heading: 'Stopping the Damage Early',
            text: 'Mitigation is the crucial first step. It is your legal obligation as a homeowner to prevent further damage after an incident. This includes emergency water extraction, drying, and roof tarping.',
            points: [
                'Emergency tarping and board-up',
                'Water extraction to prevent mold',
                'Temporary structural reinforcement'
            ],
            image: heroGallery3
        }
    },
    {
        id: 'restoration',
        title: 'Restoration',
        icon: <Home size={20} />,
        content: {
            heading: 'Returning to Normal (Or Better)',
            text: 'Restoration involves repairing or replacing the damaged areas of your property to return it to its pre-loss condition. We use premium materials to ensure your home is stronger than before.',
            points: [
                'Full exterior construction',
                'Interior drywall and paint repair',
                'Premium material upgrades'
            ],
            image: heroGallery1
        }
    },
    {
        id: 'tree-removal',
        title: 'Tree Removal',
        icon: <TreePine size={20} />,
        content: {
            heading: 'Emergency Crane Operations',
            text: 'When a tree falls on your property, time is of the essence. We provide specialized emergency crane operations to safely lift the weight off your roof and prevent structural collapse.',
            points: [
                '24/7 Emergency response',
                'Safe extraction without further damage',
                'Debris cleanup and disposal'
            ],
            image: heroGallery2
        }
    },
    {
        id: 'replacement',
        title: 'Replacement',
        icon: <CloudLightning size={20} />,
        content: {
            heading: 'Full Roof Replacement',
            text: 'When repairs aren\'t enough, full replacement is necessary. We install complete roofing systems with synthetic underlayments, advanced ventilation, and ice/water shields.',
            points: [
                'Tear-off down to the decking',
                'Installation of high-grade architectural shingles',
                'Comprehensive lifetime warranties'
            ],
            image: heroGallery1
        }
    },
    {
        id: 'fire-damage',
        title: 'Fire Damage',
        icon: <Flame size={20} />,
        content: {
            heading: 'Addressing Hidden Threats',
            text: 'Fire damage goes beyond what burns. We address hidden threats like toxic soot, corrosive ash, and pervasive smoke odors to ensure your home is fully safe and clean.',
            points: [
                'Soot and ash removal',
                'Smoke odor elimination',
                'Structural safety verification'
            ],
            image: heroGallery3
        }
    }
];

export default function InsuranceClaimPage() {
    const [activeTab, setActiveTab] = useState(TABS[0]);

    return (
        <div style={{ background: '#121212', color: '#fff', minHeight: '100vh' }}>
            {/* 1. HERO */}
            <section className="section" style={{ paddingTop: '180px', paddingBottom: '80px', position: 'relative', overflow: 'hidden' }}>
                <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
                    <motion.div initial="hidden" animate="visible" variants={stagger}>
                        <motion.h1 variants={fadeUp} style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 900, marginBottom: '1.5rem', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
                            Simplify Your <span style={{ color: 'var(--gold)' }}>Insurance Claim</span>
                        </motion.h1>
                        <motion.p variants={fadeUp} className="mx-auto" style={{ maxWidth: '800px', fontSize: '1.15rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.7)', fontWeight: 400 }}>
                            Navigating an insurance claim can be complex and stressful. We act as your expert guide, handling the technical details, documentation, and adjuster negotiations so you can focus on your family.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* 2. THE INSURANCE CLAIM PROCESS */}
            <section style={{ padding: '60px 0 100px 0' }}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    
                    {/* Step 1 */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} style={{ marginBottom: '4rem', paddingLeft: '2.5rem', borderLeft: '2px dashed rgba(197,160,89,0.3)', position: 'relative' }}>
                        <div style={{ position: 'absolute', top: 0, left: '-21px', width: '40px', height: '40px', background: '#121212', border: '2px solid var(--gold)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: 'var(--gold)', fontSize: '1.2rem' }}>1</div>
                        <motion.h3 variants={fadeUp} style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--gold)', marginBottom: '1rem' }}>Step 1: The Roof Health Inspection (Post-Storm)</motion.h3>
                        <motion.p variants={fadeUp} style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)', marginBottom: '1rem' }}>Before calling your insurance, you need to know if there is actual damage that justifies a claim.</motion.p>
                        <motion.ul variants={fadeUp} style={{ listStyle: 'none', padding: 0, color: 'rgba(255,255,255,0.7)', display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '1.5rem' }}>
                            <li><strong style={{ color: '#fff' }}>Hail:</strong> We look for "bruises" or dents in the shingles that break the granule layer, exposing the asphalt to the sun.</li>
                            <li><strong style={{ color: '#fff' }}>Wind:</strong> We look for lifted, detached or "creased" shingles, where the adhesive seal has broken.</li>
                            <li><strong style={{ color: '#fff' }}>Tacurion's Action:</strong> We document this with high-resolution photos and damage maps so you have solid evidence before opening the case.</li>
                        </motion.ul>
                        <motion.div variants={fadeUp} style={{ width: '100%', height: '400px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
                            <img src="/Inspeccion.jpg" alt="Roof Health Inspection" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </motion.div>
                    </motion.div>

                    {/* Step 2 */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} style={{ marginBottom: '4rem', paddingLeft: '2.5rem', borderLeft: '2px dashed rgba(197,160,89,0.3)', position: 'relative' }}>
                        <div style={{ position: 'absolute', top: 0, left: '-21px', width: '40px', height: '40px', background: '#121212', border: '2px solid var(--gold)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: 'var(--gold)', fontSize: '1.2rem' }}>2</div>
                        <motion.h3 variants={fadeUp} style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--gold)', marginBottom: '1rem' }}>Step 2: Filing the Claim</motion.h3>
                        <motion.p variants={fadeUp} style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)', marginBottom: '1rem' }}>Once we confirm the damage, you as the owner must contact your insurance company.</motion.p>
                        <motion.ul variants={fadeUp} style={{ listStyle: 'none', padding: 0, color: 'rgba(255,255,255,0.7)', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <li><strong style={{ color: '#fff' }}>Tacurion's Tip:</strong> Provide the exact date of the storm. We will help you identify it using certified meteorological reports.</li>
                            <li><strong style={{ color: '#fff' }}>Claim Number:</strong> You will be assigned a number that will be the "ID" of your project moving forward.</li>
                        </motion.ul>
                    </motion.div>

                    {/* Step 3 */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} style={{ marginBottom: '4rem', paddingLeft: '2.5rem', borderLeft: '2px dashed rgba(197,160,89,0.3)', position: 'relative' }}>
                        <div style={{ position: 'absolute', top: 0, left: '-21px', width: '40px', height: '40px', background: '#121212', border: '2px solid var(--gold)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: 'var(--gold)', fontSize: '1.2rem' }}>3</div>
                        <motion.h3 variants={fadeUp} style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--gold)', marginBottom: '1rem' }}>Step 3: The Adjuster Meeting</motion.h3>
                        <motion.p variants={fadeUp} style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)', marginBottom: '1rem' }}>The insurance company will send an adjuster to evaluate the damage. This is the most important step.</motion.p>
                        <motion.ul variants={fadeUp} style={{ listStyle: 'none', padding: 0, color: 'rgba(255,255,255,0.7)', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <li><strong style={{ color: '#fff' }}>Our Role:</strong> Tacurion Restoration INC will be present. We speak the same technical "language" as the adjuster. We ensure they do not overlook details like the drip edge, starter shingles, or local code compliance.</li>
                            <li><strong style={{ color: '#fff' }}>Code Defense:</strong> If you are in Massachusetts, we will remind the adjuster that, according to building codes, a full replacement must meet new construction standards.</li>
                        </motion.ul>
                    </motion.div>

                    {/* Step 4 */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} style={{ marginBottom: '4rem', paddingLeft: '2.5rem', borderLeft: '2px dashed rgba(197,160,89,0.3)', position: 'relative' }}>
                        <div style={{ position: 'absolute', top: 0, left: '-21px', width: '40px', height: '40px', background: '#121212', border: '2px solid var(--gold)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: 'var(--gold)', fontSize: '1.2rem' }}>4</div>
                        <motion.h3 variants={fadeUp} style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--gold)', marginBottom: '1rem' }}>Step 4: Estimate Review (Xactimate)</motion.h3>
                        <motion.p variants={fadeUp} style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)', marginBottom: '1rem' }}>The insurance company will send you a document called "Scope of Loss".</motion.p>
                        <motion.ul variants={fadeUp} style={{ listStyle: 'none', padding: 0, color: 'rgba(255,255,255,0.7)', display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '1.5rem' }}>
                            <li><strong style={{ color: '#fff' }}>Technical Analysis:</strong> We review every line to ensure it's fair. If they omitted the ridge caps or the ice & water shield required by code R905.2.8.2, we prepare a Supplement.</li>
                            <li><strong style={{ color: '#fff' }}>Supplements:</strong> This is the process where we ask the insurance company to add necessary construction items that were not initially included.</li>
                        </motion.ul>
                        <motion.div variants={fadeUp} style={{ width: '100%', height: '400px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
                            <img src="/Poster.jpeg" alt="Estimate Review" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </motion.div>
                    </motion.div>

                    {/* Step 5 */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} style={{ marginBottom: '4rem', paddingLeft: '2.5rem', borderLeft: '2px dashed rgba(197,160,89,0.3)', position: 'relative' }}>
                        <div style={{ position: 'absolute', top: 0, left: '-21px', width: '40px', height: '40px', background: '#121212', border: '2px solid var(--gold)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: 'var(--gold)', fontSize: '1.2rem' }}>5</div>
                        <motion.h3 variants={fadeUp} style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--gold)', marginBottom: '1rem' }}>Step 5: THE DEDUCTIBLE (Non-Negotiable Point)</motion.h3>
                        <motion.p variants={fadeUp} style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)', marginBottom: '1rem' }}>It is vital that we speak honestly about this: The homeowner is legally responsible for paying their deductible.</motion.p>
                        <motion.ul variants={fadeUp} style={{ listStyle: 'none', padding: 0, color: 'rgba(255,255,255,0.7)', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <li><strong style={{ color: '#fff' }}>The Law:</strong> In most states, including Massachusetts, it is illegal (and considered insurance fraud) for a contractor to "absorb", "waive", or "pay" the customer's deductible through inflated invoices or fake rebates.</li>
                            <li><strong style={{ color: '#fff' }}>Transparency:</strong> Tacurion Restoration INC operates under the highest ethical standards. Your deductible is your only investment in a new roof that can be worth $15,000 or $30,000. We take care of maximizing every penny the insurance pays, but the deductible is your part of the contract.</li>
                        </motion.ul>
                    </motion.div>

                    {/* Step 6 */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} style={{ marginBottom: '4rem', paddingLeft: '2.5rem', borderLeft: '2px dashed rgba(197,160,89,0.3)', position: 'relative' }}>
                        <div style={{ position: 'absolute', top: 0, left: '-21px', width: '40px', height: '40px', background: '#121212', border: '2px solid var(--gold)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: 'var(--gold)', fontSize: '1.2rem' }}>6</div>
                        <motion.h3 variants={fadeUp} style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--gold)', marginBottom: '1rem' }}>Step 6: Production and Replacement</motion.h3>
                        <motion.p variants={fadeUp} style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)', marginBottom: '1rem' }}>With the approved budget, we proceed to installation.</motion.p>
                        <motion.ul variants={fadeUp} style={{ listStyle: 'none', padding: 0, color: 'rgba(255,255,255,0.7)', display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '1.5rem' }}>
                            <li><strong style={{ color: '#fff' }}>Tear-off:</strong> We remove everything down to the wood to inspect the condition of the decking.</li>
                            <li><strong style={{ color: '#fff' }}>Installation under Code:</strong> We install new underlayment according to R905.1.1 and drip edges according to R905.2.8.5 to ensure your roof is legal and resilient.</li>
                        </motion.ul>
                        <motion.div variants={fadeUp} style={{ width: '100%', height: '400px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
                            <img src="/replacement.jpg" alt="Production and Replacement" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </motion.div>
                    </motion.div>

                    {/* Step 7 */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} style={{ paddingLeft: '2.5rem', borderLeft: '2px dashed transparent', position: 'relative' }}>
                        <div style={{ position: 'absolute', top: 0, left: '-21px', width: '40px', height: '40px', background: '#121212', border: '2px solid var(--gold)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: 'var(--gold)', fontSize: '1.2rem' }}>7</div>
                        <motion.h3 variants={fadeUp} style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--gold)', marginBottom: '1rem' }}>Step 7: Closing and Release of Funds</motion.h3>
                        <motion.ul variants={fadeUp} style={{ listStyle: 'none', padding: 0, color: 'rgba(255,255,255,0.7)', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <li><strong style={{ color: '#fff' }}>Depreciation:</strong> Upon completion, we send a final invoice and a Certificate of Completion. This notifies the insurance that the work is done and they can release the second check (the withheld depreciation).</li>
                            <li><strong style={{ color: '#fff' }}>Warranty:</strong> We hand over your Tacurion workmanship warranties and the manufacturer's warranties.</li>
                        </motion.ul>
                    </motion.div>

                </div>
            </section>

            {/* 4. ZERO OUT-OF-POCKET & LEAD GEN FORM */}
            <section id="claim-form" style={{ padding: '100px 0' }}>
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        {/* LEFT — copy + benefits */}
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} style={{ paddingTop: '1rem' }}>
                            <motion.p variants={fadeUp} style={{ color: 'var(--gold)', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', fontSize: '0.7rem', display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.3rem' }}>
                                <span style={{ display: 'block', width: 28, height: 2, background: 'var(--gold)', borderRadius: 2, flexShrink: 0 }} />
                                Zero Out-Of-Pocket
                            </motion.p>
                            <motion.h2 variants={fadeUp} style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', fontWeight: 900, lineHeight: 1.06, marginBottom: '1.4rem', letterSpacing: '-0.02em' }}>
                                Only Pay Your {' '}
                                <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Deductible</span>
                            </motion.h2>
                            <motion.p variants={fadeUp} style={{ fontSize: '0.98rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.78, marginBottom: '2.5rem', maxWidth: 400 }}>
                                Leave your information and one of our specialists will contact you within 24 hours to schedule your free property inspection and start your claim process seamlessly.
                            </motion.p>

                            {/* Benefits */}
                            <motion.ul variants={fadeUp} style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.9rem', marginBottom: '2.8rem' }}>
                                {[
                                    { svg: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>, text: "No out-of-pocket costs — only your deductible" },
                                    { svg: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>, text: "Full documentation & claim representation" },
                                    { svg: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>, text: "Massachusetts specialists since 2009" },
                                ].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.93rem', fontWeight: 500, color: 'rgba(255,255,255,0.85)' }}>
                                        <span style={{ width: 38, height: 38, borderRadius: 11, background: 'rgba(197,160,89,0.12)', border: '1px solid rgba(197,160,89,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'var(--gold)' }}>
                                            {item.svg}
                                        </span>
                                        {item.text}
                                    </li>
                                ))}
                            </motion.ul>
                        </motion.div>

                        {/* RIGHT — Form Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div style={{ background: 'linear-gradient(160deg,#1f1f1f 0%,#161616 100%)', border: '1px solid rgba(197,160,89,0.18)', borderRadius: 28, overflow: 'hidden', boxShadow: '0 0 0 1px rgba(197,160,89,0.04), 0 35px 90px rgba(0,0,0,0.7)', position: 'relative' }}>
                                <div style={{ height: 3, background: 'linear-gradient(90deg, transparent, rgba(197,160,89,0.4) 20%, #C5A059 50%, rgba(197,160,89,0.4) 80%, transparent)' }} />
                                <div style={{ position: 'absolute', top: -30, right: -30, width: 120, height: 120, background: 'radial-gradient(circle, rgba(197,160,89,0.1), transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
                                
                                <div style={{ padding: '2rem 2.5rem 0', textAlign: 'center', position: 'relative' }}>
                                    <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.3rem' }}>Request Free Inspection</h3>
                                    <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)', marginBottom: '0.75rem' }}>We'll get back to you within 24 hours</p>
                                    <div style={{ width: 36, height: 2, background: 'var(--gold)', margin: '0 auto', borderRadius: 2 }} />
                                </div>

                                <div style={{ padding: '1.8rem 2.5rem 2.5rem' }}>
                                    <form style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                                        <div className="grid grid-cols-2 gap-3">
                                            {[['First Name', 'John'], ['Last Name', 'Smith']].map(([label, ph], i) => (
                                                <div key={i}>
                                                    <div style={{ fontSize: '0.67rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '0.35rem', paddingLeft: 2 }}>{label} *</div>
                                                    <div style={{ position: 'relative' }}>
                                                        <User size={15} style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: 13, color: 'rgba(255,255,255,0.22)' }} />
                                                        <input type="text" placeholder={ph} required className="form-input" />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div>
                                            <div style={{ fontSize: '0.67rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '0.35rem', paddingLeft: 2 }}>Phone Number *</div>
                                            <div style={{ position: 'relative' }}>
                                                <Smartphone size={15} style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: 13, color: 'rgba(255,255,255,0.22)' }} />
                                                <input type="tel" placeholder="(508) 000-0000" required className="form-input" />
                                            </div>
                                        </div>
                                        <div>
                                            <div style={{ fontSize: '0.67rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '0.35rem', paddingLeft: 2 }}>Type of Damage *</div>
                                            <select required className="form-input" style={{ paddingLeft: '13px', appearance: 'auto' }}>
                                                <option value="" disabled selected>Select an option...</option>
                                                <option value="hail">Hail Damage</option>
                                                <option value="wind">Wind Damage</option>
                                                <option value="tree">Fallen Tree / Structural</option>
                                                <option value="water">Roof Leak / Water</option>
                                            </select>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 10, padding: '0.85rem 1rem' }}>
                                            <input type="checkbox" id="consent-cb" required style={{ width: 15, height: 15, flexShrink: 0, marginTop: 2, accentColor: 'var(--gold)', cursor: 'pointer' }} />
                                            <label htmlFor="consent-cb" style={{ fontSize: '0.71rem', color: 'rgba(255,255,255,0.38)', lineHeight: 1.55, cursor: 'pointer' }}>
                                                I agree to receive calls or texts about my inspection request.
                                            </label>
                                        </div>
                                        <motion.button type="submit" whileHover={{ y: -2, boxShadow: '0 14px 40px rgba(197,160,89,0.45)' }} whileTap={{ scale: 0.98 }} style={{ width: '100%', background: 'var(--gold)', color: '#000', border: 'none', borderRadius: 13, padding: '1.05rem 2rem', fontWeight: 800, fontSize: '0.98rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem' }}>
                                            Submit Request <ArrowRight size={17} />
                                        </motion.button>
                                    </form>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

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
                }
                .form-input:focus {
                    border-color: rgba(197,160,89,0.55);
                    background: rgba(197,160,89,0.035);
                    box-shadow: 0 0 0 3px rgba(197,160,89,0.09);
                }
            `}</style>
        </div>
    );
}
