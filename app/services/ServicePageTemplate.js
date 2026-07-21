'use client';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

/* ─────────────────────────────────────────────────────────
   Shared styles — injected once inside every service page
───────────────────────────────────────────────────────── */
const BASE_CSS = `
  /* ── scroll reveal keyframes ── */
  @keyframes sp-fadeInUp{from{opacity:0;transform:translateY(40px)}to{opacity:1;transform:translateY(0)}}
  @keyframes sp-fadeInLeft{from{opacity:0;transform:translateX(-40px)}to{opacity:1;transform:translateX(0)}}
  @keyframes sp-fadeInRight{from{opacity:0;transform:translateX(40px)}to{opacity:1;transform:translateX(0)}}
  @keyframes sp-zoomIn{from{opacity:0;transform:scale(0.88)}to{opacity:1;transform:scale(1)}}

  /* ── scroll reveal base: elements start hidden ── */
  .sr-up,.sr-left,.sr-right,.sr-zoom{
    opacity:0;will-change:opacity,transform;
  }
  .sr-up.sr-visible{animation:sp-fadeInUp 0.7s cubic-bezier(.22,1,.36,1) both}
  .sr-left.sr-visible{animation:sp-fadeInLeft 0.7s cubic-bezier(.22,1,.36,1) both}
  .sr-right.sr-visible{animation:sp-fadeInRight 0.7s cubic-bezier(.22,1,.36,1) both}
  .sr-zoom.sr-visible{animation:sp-zoomIn 0.65s cubic-bezier(.22,1,.36,1) both}

  /* delay helpers */
  .sr-d1{animation-delay:.1s}.sr-d2{animation-delay:.2s}.sr-d3{animation-delay:.3s}
  .sr-d4{animation-delay:.4s}.sr-d5{animation-delay:.5s}.sr-d6{animation-delay:.6s}

  /* ── reset / container ── */
  .sp-wrap *{box-sizing:border-box;margin:0;padding:0}
  .sp-container{max-width:1200px;margin:0 auto;padding:0 24px}

  /* ── typography helpers ── */
  .sp-eyebrow{display:inline-block;color:#384BFF;font-size:12px;font-weight:700;
    letter-spacing:2.5px;text-transform:uppercase;margin-bottom:12px}
  .sp-section-title{font-size:clamp(1.9rem,3.2vw,2.7rem);font-weight:800;
    color:#0F0D1D;line-height:1.2;margin-bottom:18px}
  .sp-section-title span{color:#384BFF}
  .sp-section-desc{color:#64748b;font-size:16px;line-height:1.85;max-width:640px}

  /* ── CTA button ── */
  .sp-btn{display:inline-flex;align-items:center;gap:10px;background:#384BFF;
    color:#fff;padding:14px 34px;border-radius:50px;font-weight:600;font-size:15px;
    text-decoration:none;transition:all .3s;border:none;cursor:pointer}
  .sp-btn:hover{background:#2a3ce0;color:#fff;transform:translateY(-2px);
    box-shadow:0 8px 24px rgba(56,75,255,.35)}
  .sp-btn-outline{background:transparent;border:2px solid #384BFF;color:#384BFF}
  .sp-btn-outline:hover{background:#384BFF;color:#fff}

  /* ── HERO ── */
  .sp-hero{background:linear-gradient(130deg,#050b2e 0%,#0d1a6e 55%,#0b0f3d 100%);
    position:relative;overflow:hidden;padding:140px 0 100px;text-align:center}
  .sp-hero::before{content:'';position:absolute;inset:0;
    background:radial-gradient(circle at 70% 50%,rgba(56,75,255,.25) 0%,transparent 60%)}
  .sp-hero-inner{position:relative;z-index:2}
  .sp-hero-eyebrow{display:inline-flex;align-items:center;gap:8px;
    background:rgba(56,75,255,.18);border:1px solid rgba(56,75,255,.4);
    color:#818cf8;font-size:12px;font-weight:600;letter-spacing:2px;
    text-transform:uppercase;padding:6px 18px;border-radius:50px;margin-bottom:24px}
  .sp-hero h1{font-size:clamp(2.2rem,4.5vw,3.6rem);font-weight:800;color:#fff;
    line-height:1.15;margin-bottom:20px;max-width:900px;margin-left:auto;margin-right:auto}
  .sp-hero h1 span{color:#818cf8}
  .sp-hero-sub{color:rgba(255,255,255,.7);font-size:17px;line-height:1.75;
    max-width:680px;margin:0 auto 36px}
  .sp-hero-btns{display:flex;gap:16px;justify-content:center;flex-wrap:wrap}
  .sp-btn-light{background:#fff;color:#0F0D1D;border:none}
  .sp-btn-light:hover{background:#f1f5f9;color:#0F0D1D;transform:translateY(-2px)}
  .sp-breadcrumb{margin-top:32px;color:rgba(255,255,255,.5);font-size:14px}
  .sp-breadcrumb a{color:rgba(255,255,255,.75);text-decoration:none;font-weight:500}
  .sp-breadcrumb a:hover{color:#fff}
  .sp-breadcrumb span{margin:0 8px}

  /* ── STATS ── */
  .sp-stats{background:#fff;border-bottom:1px solid #e8ecf4;padding:0}
  .sp-stats-grid{display:grid;grid-template-columns:repeat(4,1fr);
    border-top:1px solid #e8ecf4}
  @media(max-width:768px){.sp-stats-grid{grid-template-columns:repeat(2,1fr)}}
  .sp-stat-item{padding:36px 32px;border-right:1px solid #e8ecf4;text-align:center;
    transition:background .25s}
  .sp-stat-item:last-child{border-right:none}
  .sp-stat-item:hover{background:#f8faff}
  .sp-stat-num{font-size:2.4rem;font-weight:800;color:#384BFF;line-height:1;
    margin-bottom:6px;font-family:'Kumbh Sans',sans-serif}
  .sp-stat-label{font-size:13px;color:#64748b;font-weight:500;letter-spacing:.3px}

  /* ── OVERVIEW (2-col) ── */
  .sp-overview{padding:100px 0;background:#fff}
  .sp-overview-grid{display:grid;grid-template-columns:1fr 1fr;gap:72px;align-items:center}
  @media(max-width:900px){.sp-overview-grid{grid-template-columns:1fr;gap:48px}}
  .sp-img-stack{position:relative;min-height:480px}
  .sp-img-main{width:72%;height:480px;object-fit:cover;border-radius:18px;display:block;
    box-shadow:0 24px 64px rgba(0,0,0,.14)}
  .sp-img-overlay{position:absolute;bottom:0;right:0;width:52%;height:320px;
    object-fit:cover;border-radius:18px;border:6px solid #fff;
    box-shadow:0 16px 48px rgba(0,0,0,.16)}
  .sp-badge{position:absolute;top:32px;right:0;background:#384BFF;color:#fff;
    border-radius:14px;padding:18px 24px;display:flex;align-items:center;gap:14px;
    box-shadow:0 8px 32px rgba(56,75,255,.4);z-index:3;min-width:190px}
  .sp-badge-icon{width:44px;height:44px;background:rgba(255,255,255,.2);
    border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0}
  .sp-badge strong{font-size:22px;font-weight:800;display:block;line-height:1}
  .sp-badge small{font-size:12px;color:rgba(255,255,255,.8);display:block;margin-top:3px}
  .sp-overview-list{list-style:none;padding:0;margin:24px 0 36px}
  .sp-overview-list li{display:flex;align-items:flex-start;gap:12px;padding:10px 0;
    border-bottom:1px solid #f1f5f9;color:#374151;font-size:15px;line-height:1.6}
  .sp-overview-list li:last-child{border-bottom:none}
  .sp-check{color:#384BFF;font-size:18px;flex-shrink:0;margin-top:1px}

  /* ── FEATURES GRID ── */
  .sp-features{padding:100px 0;background:#f8faff}
  .sp-features-header{text-align:center;margin-bottom:60px}
  .sp-features-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:28px}
  @media(max-width:900px){.sp-features-grid{grid-template-columns:repeat(2,1fr)}}
  @media(max-width:576px){.sp-features-grid{grid-template-columns:1fr}}
  .sp-feat-card{background:#fff;border-radius:16px;padding:36px 28px;
    border:1px solid #e8ecf4;transition:all .3s;position:relative;overflow:hidden}
  .sp-feat-card::before{content:'';position:absolute;inset:0;
    background:linear-gradient(135deg,rgba(56,75,255,.04),transparent);
    opacity:0;transition:opacity .3s}
  .sp-feat-card:hover{transform:translateY(-6px);border-color:#384BFF;
    box-shadow:0 20px 50px rgba(56,75,255,.12)}
  .sp-feat-card:hover::before{opacity:1}
  .sp-feat-icon-wrap{width:60px;height:60px;border-radius:14px;background:#EEF1FF;
    display:flex;align-items:center;justify-content:center;margin-bottom:20px;
    transition:background .3s}
  .sp-feat-card:hover .sp-feat-icon-wrap{background:#384BFF}
  .sp-feat-card:hover .sp-feat-icon-wrap svg{color:#fff}
  .sp-feat-icon-wrap svg{width:28px;height:28px;color:#384BFF;transition:color .3s}
  .sp-feat-card h3{font-size:17px;font-weight:700;color:#0F0D1D;margin-bottom:10px}
  .sp-feat-card p{font-size:14px;color:#64748b;line-height:1.75;margin:0}

  /* ── PROCESS ── */
  .sp-process{padding:100px 0;background:#fff}
  .sp-process-header{text-align:center;margin-bottom:60px}
  .sp-steps{display:grid;grid-template-columns:repeat(5,1fr);gap:0;position:relative}
  @media(max-width:1024px){.sp-steps{grid-template-columns:repeat(3,1fr);gap:32px}}
  @media(max-width:600px){.sp-steps{grid-template-columns:1fr;gap:24px}}
  .sp-steps::before{content:'';position:absolute;top:44px;left:10%;right:10%;
    height:2px;background:linear-gradient(to right,#384BFF,#818cf8);z-index:0}
  @media(max-width:1024px){.sp-steps::before{display:none}}
  .sp-step{text-align:center;padding:0 12px;position:relative;z-index:1}
  .sp-step-num{width:88px;height:88px;border-radius:50%;background:#EEF1FF;
    border:3px solid #384BFF;display:flex;align-items:center;justify-content:center;
    font-size:1.6rem;font-weight:800;color:#384BFF;margin:0 auto 20px;
    box-shadow:0 0 0 8px rgba(56,75,255,.06);transition:all .3s;cursor:default}
  .sp-step:hover .sp-step-num{background:#384BFF;color:#fff;
    box-shadow:0 0 0 12px rgba(56,75,255,.12)}
  .sp-step h4{font-size:16px;font-weight:700;color:#0F0D1D;margin-bottom:8px}
  .sp-step p{font-size:13px;color:#64748b;line-height:1.7;max-width:180px;margin:0 auto}

  /* ── TECH STACK ── */
  .sp-tech{padding:80px 0;background:#f8faff;border-top:1px solid #e8ecf4}
  .sp-tech-header{text-align:center;margin-bottom:48px}
  .sp-tech-pills{display:flex;flex-wrap:wrap;gap:12px;justify-content:center}
  .sp-tech-pill{display:flex;align-items:center;gap:10px;background:#fff;
    border:1px solid #e8ecf4;border-radius:50px;padding:10px 22px;
    font-size:14px;font-weight:600;color:#374151;transition:all .25s;cursor:default}
  .sp-tech-pill:hover{border-color:#384BFF;color:#384BFF;
    box-shadow:0 4px 16px rgba(56,75,255,.12);transform:translateY(-2px)}
  .sp-tech-pill img{width:22px;height:22px;object-fit:contain}

  /* ── FAQ ── */
  .sp-faq{padding:100px 0;background:#fff}
  .sp-faq-header{text-align:center;margin-bottom:60px}
  .sp-faq-list{max-width:820px;margin:0 auto;display:flex;flex-direction:column;gap:12px}
  .sp-faq-item{border:1px solid #e8ecf4;border-radius:14px;overflow:hidden;
    transition:border-color .25s}
  .sp-faq-item.open{border-color:#384BFF}
  .sp-faq-q{display:flex;justify-content:space-between;align-items:center;
    padding:22px 28px;cursor:pointer;background:#fff;transition:background .2s}
  .sp-faq-item.open .sp-faq-q{background:#f8faff}
  .sp-faq-q h4{font-size:16px;font-weight:600;color:#0F0D1D;margin:0;flex:1;
    padding-right:16px;line-height:1.4}
  .sp-faq-toggle{width:36px;height:36px;border-radius:50%;background:#EEF1FF;
    display:flex;align-items:center;justify-content:center;flex-shrink:0;
    transition:all .3s;color:#384BFF;font-weight:700;font-size:20px}
  .sp-faq-item.open .sp-faq-toggle{background:#384BFF;color:#fff;transform:rotate(45deg)}
  .sp-faq-a{padding:0 28px;max-height:0;overflow:hidden;transition:all .35s ease}
  .sp-faq-item.open .sp-faq-a{max-height:300px;padding-bottom:22px}
  .sp-faq-a p{font-size:15px;color:#64748b;line-height:1.8;margin:0}

  /* ── CTA BANNER ── */
  .sp-cta{background:linear-gradient(120deg,#0a0f3d 0%,#1a237e 55%,#0d1554 100%);
    padding:90px 0;position:relative;overflow:hidden}
  .sp-cta::before{content:'';position:absolute;inset:0;
    background:radial-gradient(circle at 80% 50%,rgba(56,75,255,.3),transparent 60%)}
  .sp-cta-inner{position:relative;z-index:2;text-align:center}
  .sp-cta-inner h2{font-size:clamp(2rem,3.5vw,3rem);font-weight:800;color:#fff;
    margin-bottom:16px;line-height:1.2}
  .sp-cta-inner p{color:rgba(255,255,255,.7);font-size:17px;margin-bottom:40px;
    max-width:600px;margin-left:auto;margin-right:auto}
  .sp-cta-btns{display:flex;gap:16px;justify-content:center;flex-wrap:wrap}
  .sp-btn-white{background:#fff;color:#0F0D1D}
  .sp-btn-white:hover{background:#f1f5f9;color:#0F0D1D}
  .sp-btn-ghost{background:transparent;border:2px solid rgba(255,255,255,.5);color:#fff}
  .sp-btn-ghost:hover{background:rgba(255,255,255,.12);color:#fff}

  /* ── RELATED SERVICES ── */
  .sp-related{padding:100px 0;background:#f8faff}
  .sp-related-header{text-align:center;margin-bottom:60px}
  .sp-related-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:28px}
  @media(max-width:900px){.sp-related-grid{grid-template-columns:1fr}}
  .sp-rel-card{background:#fff;border-radius:16px;border:1px solid #e8ecf4;
    overflow:hidden;transition:all .3s;text-decoration:none;display:block}
  .sp-rel-card:hover{transform:translateY(-6px);box-shadow:0 20px 50px rgba(0,0,0,.1);
    border-color:#384BFF}
  .sp-rel-img{width:100%;height:200px;object-fit:cover;display:block;
    transition:transform .5s}
  .sp-rel-card:hover .sp-rel-img{transform:scale(1.05)}
  .sp-rel-body{padding:24px}
  .sp-rel-body h3{font-size:17px;font-weight:700;color:#0F0D1D;margin-bottom:8px;
    transition:color .2s}
  .sp-rel-card:hover .sp-rel-body h3{color:#384BFF}
  .sp-rel-body p{font-size:13px;color:#64748b;line-height:1.65;margin:0}
  .sp-rel-link{display:inline-flex;align-items:center;gap:6px;margin-top:14px;
    color:#384BFF;font-size:13px;font-weight:600}
`;

/* ── SVG icon set ── */
const Icon = {
  globe: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>),
  code: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>),
  mobile: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><path d="M12 18h.01"/></svg>),
  settings: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93l-1.41 1.41M4.93 4.93l1.41 1.41M19.07 19.07l-1.41-1.41M4.93 19.07l1.41-1.41M12 2v2M12 20v2M2 12h2M20 12h2"/></svg>),
  cart: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>),
  palette: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>),
  chart: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><path d="M2 20h20"/></svg>),
  brain: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-1.99-3 2.5 2.5 0 0 1-1.1-4.26 3 3 0 0 1 .34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 1.99-3 2.5 2.5 0 0 0 1.1-4.26 3 3 0 0 0-.34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2z"/></svg>),
  cloud: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>),
  database: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>),
  shield: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>),
  zap: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>),
  users: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>),
  search: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>),
  star: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>),
  layers: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>),
  link: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>),
  refresh: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>),
  eye: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>),
  lock: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>),
  trending: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>),
  check: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>),
  arrowRight: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>),
};

/* ── FAQ item ── */
function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`sp-faq-item${open ? ' open' : ''}`}>
      <div className="sp-faq-q" onClick={() => setOpen(!open)} role="button" tabIndex={0}
        onKeyDown={e => e.key === 'Enter' && setOpen(!open)}>
        <h4>{q}</h4>
        <div className="sp-faq-toggle">+</div>
      </div>
      <div className="sp-faq-a"><p>{a}</p></div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────
   ServicePageTemplate — the single shared component
─────────────────────────────────────────────────────────── */
export default function ServicePageTemplate({
  /* hero */
  heroEyebrow, heroTitle, heroHighlight, heroSub, heroImg1, heroImg2,
  badgeNumber, badgeLabel,
  /* stats */
  stats,
  /* overview */
  overviewEyebrow, overviewTitle, overviewHighlight, overviewDesc, overviewList,
  /* features */
  features,
  /* process */
  processTitle, processSteps,
  /* tech */
  techTitle, techStack,
  /* faq */
  faqTitle, faqs,
  /* related */
  related,
}) {
  // ── Initialize WOW.js (for footer animations) + scroll reveal ──
  useEffect(() => {
    // 1. WOW.js for footer fadeInUp classes
    const tryWow = () => {
      if (window.WOW) {
        try { new window.WOW({ offset: 80, mobile: false }).init(); } catch(e) {}
      }
    };
    if (window.WOW) { tryWow(); }
    else {
      const iv = setInterval(() => { if (window.WOW) { clearInterval(iv); tryWow(); } }, 80);
      return () => clearInterval(iv);
    }
  }, []);

  useEffect(() => {
    // 2. Native IntersectionObserver scroll-reveal for .sr-up/.sr-left/.sr-right/.sr-zoom
    const targets = document.querySelectorAll('.sr-up,.sr-left,.sr-right,.sr-zoom');
    if (!targets.length) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('sr-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    targets.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="sp-wrap" suppressHydrationWarning>
      <style>{BASE_CSS}</style>
      <Header />


      {/* ── HERO ── */}
      <section className="sp-hero">
        <div className="sp-hero-inner sp-container">
          <div className="sp-hero-eyebrow">
            <span style={{width:6,height:6,borderRadius:'50%',background:'#818cf8',display:'inline-block'}}/>
            {heroEyebrow}
          </div>
          <h1>{heroTitle} {heroHighlight && <span>{heroHighlight}</span>}</h1>
          <p className="sp-hero-sub">{heroSub}</p>
          <div className="sp-hero-btns">
            <a href="/contact" className="sp-btn">Get a Free Quote <span style={{display:'inline-flex',width:18,height:18}}>{Icon.arrowRight}</span></a>
            <a href="/about" className="sp-btn sp-btn-light">Learn More About Us</a>
          </div>
          <div className="sp-breadcrumb">
            <a href="/">Home</a><span>›</span>
            <a href="/services">Services</a><span>›</span>
            {heroTitle}{heroHighlight && ' ' + heroHighlight}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="sp-stats">
        <div className="sp-stats-grid sp-container" style={{padding:0}}>
          {stats.map((s, i) => (
            <div key={i} className={`sp-stat-item sr-up sr-d${i+1}`}>
              <div className="sp-stat-num">{s.num}</div>
              <div className="sp-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── OVERVIEW ── */}
      <section className="sp-overview">
        <div className="sp-container">
          <div className="sp-overview-grid">
            {/* Image stack */}
            <div className="sp-img-stack sr-left">
              <img className="sp-img-main" src={heroImg1} alt={heroTitle} />
              <img className="sp-img-overlay" src={heroImg2} alt="Service detail" />
              <div className="sp-badge">
                <div className="sp-badge-icon" style={{color:'#fff'}}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <div><strong>{badgeNumber}</strong><small>{badgeLabel}</small></div>
              </div>
            </div>
            {/* Text */}
            <div className="sr-right">
              <span className="sp-eyebrow">{overviewEyebrow}</span>
              <h2 className="sp-section-title">{overviewTitle} <span>{overviewHighlight}</span></h2>
              <p className="sp-section-desc">{overviewDesc}</p>
              <ul className="sp-overview-list">
                {overviewList.map((item, i) => (
                  <li key={i}>
                    <span className="sp-check" style={{display:'inline-flex',width:20,height:20}}>{Icon.check}</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="/contact" className="sp-btn">Start Your Project <span style={{display:'inline-flex',width:18,height:18}}>{Icon.arrowRight}</span></a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="sp-features">
        <div className="sp-container">
          <div className="sp-features-header sr-up">
            <span className="sp-eyebrow">KEY FEATURES</span>
            <h2 className="sp-section-title" style={{textAlign:'center',margin:'0 auto'}}>
              What Sets Our <span>{features[0] ? features[0].sectionHighlight || 'Services' : 'Services'}</span> Apart
            </h2>
          </div>
          <div className="sp-features-grid">
            {features.map((f, i) => (
              <div key={i} className={`sp-feat-card sr-up sr-d${(i%3)+1}`}>
                <div className="sp-feat-icon-wrap">
                  <span style={{display:'inline-flex',width:28,height:28}}>{Icon[f.icon] || Icon.star}</span>
                </div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="sp-process">
        <div className="sp-container">
          <div className="sp-process-header sr-up">
            <span className="sp-eyebrow">OUR PROCESS</span>
            <h2 className="sp-section-title" style={{textAlign:'center',margin:'0 auto'}}>{processTitle}</h2>
          </div>
          <div className="sp-steps">
            {processSteps.map((s, i) => (
              <div key={i} className={`sp-step sr-zoom sr-d${i+1}`}>
                <div className="sp-step-num">{String(i + 1).padStart(2, '0')}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH ── */}
      <section className="sp-tech">
        <div className="sp-container">
          <div className="sp-tech-header sr-up">
            <span className="sp-eyebrow">TECHNOLOGIES</span>
            <h2 className="sp-section-title" style={{textAlign:'center',margin:'0 auto'}}>{techTitle}</h2>
          </div>
          <div className="sp-tech-pills sr-up sr-d2">
            {techStack.map((t, i) => (
              <div key={i} className="sp-tech-pill">
                {t.logo && <img src={t.logo} alt={t.name} />}
                {t.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="sp-faq">
        <div className="sp-container">
          <div className="sp-faq-header sr-up">
            <span className="sp-eyebrow">FAQ</span>
            <h2 className="sp-section-title" style={{textAlign:'center',margin:'0 auto'}}>{faqTitle}</h2>
          </div>
          <div className="sp-faq-list sr-up sr-d2">
            {faqs.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="sp-cta">
        <div className="sp-container sp-cta-inner sr-up">
          <span className="sp-hero-eyebrow" style={{marginBottom:20,display:'inline-block'}}>
            <span style={{width:6,height:6,borderRadius:'50%',background:'#818cf8',display:'inline-block'}}/>
            &nbsp;Ready to Transform Your Business?
          </span>
          <h2>Let's Build Something <span style={{color:'#818cf8'}}>Extraordinary</span> Together</h2>
          <p>Get a free consultation and discover how Infatoz can accelerate your digital growth with tailored technology solutions.</p>
          <div className="sp-cta-btns">
            <a href="/contact" className="sp-btn sp-btn-white">Get a Free Consultation</a>
            <a href="mailto:hello@infatoz.com" className="sp-btn sp-btn-ghost">hello@infatoz.com</a>
          </div>
        </div>
      </section>

      {/* ── RELATED ── */}
      {related && related.length > 0 && (
        <section className="sp-related">
          <div className="sp-container">
            <div className="sp-related-header sr-up">
              <span className="sp-eyebrow">EXPLORE MORE</span>
              <h2 className="sp-section-title" style={{textAlign:'center',margin:'0 auto'}}>Related <span>Services</span></h2>
            </div>
            <div className="sp-related-grid">
              {related.map((r, i) => (
                <a key={i} href={r.href} className={`sp-rel-card sr-up sr-d${i+1}`}>
                  <div style={{overflow:'hidden'}}>
                    <img className="sp-rel-img" src={r.img} alt={r.title} />
                  </div>
                  <div className="sp-rel-body">
                    <h3>{r.title}</h3>
                    <p>{r.desc}</p>
                    <span className="sp-rel-link">Learn more <span style={{display:'inline-flex',width:14,height:14}}>{Icon.arrowRight}</span></span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
