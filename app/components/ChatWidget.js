'use client';

import { useState, useRef, useEffect } from 'react';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home'); // 'home' | 'messages' | 'help' | 'chat'
  const [searchQuery, setSearchQuery] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      name: 'James from Infatoz',
      text: 'Hi there,\n\nThank you for reaching out to Infatoz Technologies!\n\nWe work through our queue on a first-come, first-served basis. One of our software experts will be with you right here in this thread as quickly as we can.\n\nWhat kind of solution or service are you looking for today?',
      time: 'Just now',
    },
  ]);
  const [inputMsg, setInputMsg] = useState('');
  const [selectedFaq, setSelectedFaq] = useState(null);
  const messagesEndRef = useRef(null);

  // Auto-scroll chat to bottom
  useEffect(() => {
    if (activeTab === 'chat') {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, activeTab]);

  const faqs = [
    {
      id: 1,
      q: 'How Infatoz works (and how to start a project)?',
      a: 'Getting started is simple! Schedule a free consultation or send us a message. We discuss your project requirements, deliver a detailed blueprint and fixed quote, and begin development with agile bi-weekly sprints.',
    },
    {
      id: 2,
      q: 'What is included in your Web & App Development services?',
      a: 'Our services include end-to-end custom UI/UX design, full-stack frontend and backend engineering, CMS integration (WordPress/Sanity/Webflow), QA automated testing, Cloud deployment (AWS/Vercel), and 30-day post-launch warranty.',
    },
    {
      id: 3,
      q: 'How long does a typical project take?',
      a: 'Websites and CMS platforms take 2–5 weeks. Custom web applications and mobile apps take 6–12 weeks. ERPs and complex AI automation systems take 8–16 weeks.',
    },
    {
      id: 4,
      q: 'Do you offer ongoing post-launch maintenance?',
      a: 'Yes! We offer monthly SLA support packages that cover 24/7 server monitoring, security vulnerability updates, feature enhancements, and database backups.',
    },
    {
      id: 5,
      q: 'Can you build custom AI models or integrate OpenAI/Claude?',
      a: 'Absolutely. We specialize in custom LLM integration, AI chatbots, automated document processing, and predictive analytics pipelines integrated into your existing software.',
    },
  ];

  const filteredFaqs = faqs.filter(f =>
    f.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
    f.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSendMessage = (textToSend) => {
    const text = textToSend || inputMsg;
    if (!text.trim()) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: text.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputMsg('');
    setActiveTab('chat');

    // Auto bot response after 1 second
    setTimeout(() => {
      const botReply = {
        id: Date.now() + 1,
        sender: 'bot',
        name: 'Infatoz Assistant',
        text: `Thanks for your message! Our team has received your inquiry: "${text.trim()}". A technical consultant will respond shortly. You can also reach us directly at info@infatoz.com or +91 7019058591.`,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages(prev => [...prev, botReply]);
    }, 1200);
  };

  return (
    <>
      <style jsx global>{`
        /* Chat Widget Container */
        .cw-floating-trigger {
          position: fixed;
          bottom: 24px;
          right: 24px;
          width: 58px;
          height: 58px;
          border-radius: 50%;
          background: #384BFF;
          color: #ffffff;
          border: none;
          box-shadow: 0 8px 24px rgba(56, 75, 255, 0.4);
          cursor: pointer;
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), background 0.2s;
        }
        .cw-floating-trigger:hover {
          transform: scale(1.08);
          background: #2a3ce0;
        }

        .cw-popup-card {
          position: fixed;
          bottom: 94px;
          right: 24px;
          width: 380px;
          max-width: calc(100vw - 32px);
          height: 580px;
          max-height: calc(100vh - 120px);
          background: #ffffff;
          border-radius: 20px;
          box-shadow: 0 16px 48px rgba(15, 13, 29, 0.18);
          border: 1px solid rgba(0, 0, 0, 0.06);
          z-index: 99998;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          font-family: 'Kumbh Sans', -apple-system, BlinkMacSystemFont, sans-serif;
          animation: cwSlideUp 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes cwSlideUp {
          from { opacity: 0; transform: translateY(20px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        /* Top Header */
        .cw-header {
          padding: 20px 22px 14px;
          background: linear-gradient(180deg, #f8faff 0%, #ffffff 100%);
          border-bottom: 1px solid rgba(0,0,0,0.04);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .cw-brand-block {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .cw-brand-logo {
          font-weight: 800;
          font-size: 20px;
          color: #0F0D1D;
          letter-spacing: -0.5px;
        }
        .cw-avatars-group {
          display: flex;
          align-items: center;
          margin-left: 12px;
        }
        .cw-avatar-pill {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 2px solid #fff;
          background: #384BFF;
          color: #fff;
          font-size: 11px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: -8px;
        }
        .cw-avatar-pill:first-child { margin-left: 0; }
        .cw-close-btn {
          background: none;
          border: none;
          color: #64748b;
          font-size: 18px;
          cursor: pointer;
          padding: 4px;
          transition: color 0.15s;
        }
        .cw-close-btn:hover { color: #0F0D1D; }

        /* Content Area */
        .cw-body-scroll {
          flex: 1;
          overflow-y: auto;
          padding: 20px 22px;
          background: #fdfdfe;
        }

        /* Greeting Section */
        .cw-greeting {
          margin-bottom: 20px;
        }
        .cw-greeting-title {
          font-size: 24px;
          font-weight: 800;
          color: #0F0D1D;
          line-height: 1.25;
          margin-bottom: 4px;
        }

        /* Action Cards */
        .cw-action-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 16px 18px;
          margin-bottom: 14px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: all 0.2s ease;
          box-shadow: 0 2px 8px rgba(0,0,0,0.02);
        }
        .cw-action-card:hover {
          border-color: #384BFF;
          box-shadow: 0 6px 18px rgba(56, 75, 255, 0.1);
          transform: translateY(-1px);
        }
        .cw-action-card-text {
          font-size: 15px;
          font-weight: 700;
          color: #384BFF;
        }

        /* Search Input Box */
        .cw-search-wrap {
          position: relative;
          margin-bottom: 14px;
        }
        .cw-search-input {
          width: 100%;
          padding: 12px 40px 12px 16px;
          background: #f1f5f9;
          border: 1px solid transparent;
          border-radius: 12px;
          font-size: 14px;
          color: #0f172a;
          outline: none;
          transition: all 0.2s;
        }
        .cw-search-input:focus {
          background: #fff;
          border-color: #384BFF;
          box-shadow: 0 0 0 3px rgba(56, 75, 255, 0.12);
        }
        .cw-search-icon {
          position: absolute;
          right: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: #384BFF;
          pointer-events: none;
        }

        /* FAQ Item List */
        .cw-faq-item {
          padding: 14px 16px;
          border-radius: 10px;
          border-bottom: 1px solid #f1f5f9;
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          transition: background 0.15s;
        }
        .cw-faq-item:hover {
          background: #f8fafc;
        }
        .cw-faq-qtext {
          font-size: 14px;
          font-weight: 600;
          color: #334155;
          padding-right: 12px;
        }

        /* Chat Threads */
        .cw-msg-bubble {
          max-width: 85%;
          padding: 14px 16px;
          border-radius: 16px;
          font-size: 14px;
          line-height: 1.6;
          margin-bottom: 14px;
          white-space: pre-line;
        }
        .cw-msg-bot {
          background: #f1f5f9;
          color: #0f172a;
          border-bottom-left-radius: 4px;
        }
        .cw-msg-user {
          background: #384BFF;
          color: #ffffff;
          margin-left: auto;
          border-bottom-right-radius: 4px;
        }

        /* Bottom Tab Navigation */
        .cw-tab-bar {
          height: 64px;
          background: #ffffff;
          border-top: 1px solid rgba(0,0,0,0.06);
          display: flex;
          align-items: center;
          justify-content: space-around;
        }
        .cw-tab-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          background: none;
          border: none;
          color: #64748b;
          font-size: 11px;
          font-weight: 600;
          cursor: pointer;
          transition: color 0.15s;
        }
        .cw-tab-btn.active {
          color: #384BFF;
        }
        .cw-tab-btn svg {
          width: 20px;
          height: 20px;
        }
      `}</style>

      {/* Floating Trigger Button */}
      <button
        className="cw-floating-trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close Chat" : "Open Chat"}
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        )}
      </button>

      {/* Chat Widget Window */}
      {isOpen && (
        <div className="cw-popup-card">
          {/* Header */}
          <div className="cw-header">
            {activeTab === 'chat' ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <button
                  onClick={() => setActiveTab('home')}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#384BFF', padding: 2 }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>
                <div className="cw-avatar-pill">I</div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: 14, color: '#0F0D1D' }}>Infatoz Support</div>
                  <div style={{ fontSize: 11, color: '#10b981', fontWeight: 600 }}>● Online (Replies instantly)</div>
                </div>
              </div>
            ) : (
              <div className="cw-brand-block">
                <span className="cw-brand-logo">infatoz</span>
                <div className="cw-avatars-group">
                  <div className="cw-avatar-pill">I</div>
                  <div className="cw-avatar-pill" style={{ background: '#0022E6' }}>A</div>
                  <div className="cw-avatar-pill" style={{ background: '#10b981' }}>S</div>
                </div>
              </div>
            )}
            <button className="cw-close-btn" onClick={() => setIsOpen(false)} aria-label="Close">
              ✕
            </button>
          </div>

          {/* Body Content */}
          <div className="cw-body-scroll">

            {/* TAB 1: HOME */}
            {activeTab === 'home' && (
              <>
                <div className="cw-greeting">
                  <div className="cw-greeting-title">Hi there 👋<br />How can we help?</div>
                </div>

                <div className="cw-action-card" onClick={() => setActiveTab('chat')}>
                  <span className="cw-action-card-text">Send us a message</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#384BFF">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                </div>

                <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 14, padding: 14, marginTop: 14 }}>
                  <div className="cw-search-wrap">
                    <input
                      type="text"
                      className="cw-search-input"
                      placeholder="Search for help..."
                      value={searchQuery}
                      onChange={e => setSearchQuery(e.target.value)}
                    />
                    <svg className="cw-search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                  </div>

                  {filteredFaqs.slice(0, 4).map(f => (
                    <div
                      key={f.id}
                      className="cw-faq-item"
                      onClick={() => setSelectedFaq(selectedFaq === f.id ? null : f.id)}
                    >
                      <div>
                        <div className="cw-faq-qtext">{f.q}</div>
                        {selectedFaq === f.id && (
                          <div style={{ fontSize: 13, color: '#64748b', marginTop: 8, lineHeight: 1.6 }}>
                            {f.a}
                          </div>
                        )}
                      </div>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#384BFF" strokeWidth="2.5">
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* TAB 2: MESSAGES */}
            {activeTab === 'messages' && (
              <div style={{ textAlign: 'center', paddingTop: 60, paddingBottom: 40 }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: '#f1f5f9', color: '#0F0D1D', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z" />
                  </svg>
                </div>
                <div style={{ fontWeight: 800, fontSize: 18, color: '#0F0D1D', marginBottom: 6 }}>No recent conversations</div>
                <div style={{ fontSize: 14, color: '#64748b', marginBottom: 24 }}>Your recent support messages will appear here.</div>

                <button
                  onClick={() => setActiveTab('chat')}
                  style={{ background: '#384BFF', color: '#fff', border: 'none', padding: '12px 24px', borderRadius: 50, fontWeight: 700, fontSize: 14, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 8 }}
                >
                  Send us a message
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#ffffff">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                </button>
              </div>
            )}

            {/* TAB 3: HELP */}
            {activeTab === 'help' && (
              <div>
                <div className="cw-search-wrap">
                  <input
                    type="text"
                    className="cw-search-input"
                    placeholder="Search for help..."
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                  />
                  <svg className="cw-search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </div>

                <div style={{ fontSize: 14, fontWeight: 700, color: '#0F0D1D', marginBottom: 12 }}>
                  5 collections
                </div>

                {[
                  { title: 'Services & Solutions', desc: 'Everything you need to know about our web, mobile, ERP, and AI software services.', count: '10 articles' },
                  { title: 'Project Process & Sprints', desc: 'Our onboarding process, sprint timelines, agile workflows, and team allocation.', count: '6 articles' },
                  { title: 'Custom AI & Automation', desc: 'Integrating LLMs, custom chatbots, process automation, and database pipelines.', count: '8 articles' },
                  { title: 'Pricing & Fixed Estimates', desc: 'How we quote projects, milestone payment terms, and retainer support SLAs.', count: '4 articles' },
                  { title: 'Company & Security', desc: 'NDAs, IP ownership, security compliance (SOC2/GDPR), and client testimonials.', count: '3 articles' },
                ].map((col, idx) => (
                  <div
                    key={idx}
                    onClick={() => setActiveTab('chat')}
                    style={{
                      background: '#fff',
                      border: '1px solid #e2e8f0',
                      borderRadius: 14,
                      padding: '16px',
                      marginBottom: 12,
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = '#f4f6ff'}
                    onMouseLeave={e => e.currentTarget.style.background = '#fff'}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                      <div style={{ fontWeight: 700, fontSize: 15, color: '#0F0D1D' }}>{col.title}</div>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#384BFF" strokeWidth="2.5">
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </div>
                    <div style={{ fontSize: 13, color: '#64748b', lineHeight: 1.5, marginBottom: 8 }}>
                      {col.desc}
                    </div>
                    <div style={{ fontSize: 12, color: '#94a3b8', fontWeight: 600 }}>
                      {col.count}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* CHAT CONVERSATION SCREEN */}
            {activeTab === 'chat' && (
              <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ flex: 1 }}>
                  {messages.map(m => (
                    <div key={m.id} style={{ marginBottom: 16 }}>
                      <div className={`cw-msg-bubble ${m.sender === 'user' ? 'cw-msg-user' : 'cw-msg-bot'}`}>
                        {m.text}
                      </div>
                      {m.sender === 'bot' && (
                        <div style={{ fontSize: 11, color: '#94a3b8', fontWeight: 600, marginTop: 4, marginLeft: 4 }}>
                          James • AI Agent • {m.time}
                        </div>
                      )}
                    </div>
                  ))}

                  {/* Interactive Quick Option Pills */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 8, marginTop: 12, marginBottom: 16 }}>
                    {[
                      'How does Infatoz work?',
                      'I need help with a custom project',
                      'I have a pricing/quote question',
                      'Something else',
                    ].map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => handleSendMessage(opt)}
                        style={{
                          background: i === 0 ? '#384BFF' : '#ffffff',
                          color: i === 0 ? '#ffffff' : '#384BFF',
                          border: i === 0 ? 'none' : '1px solid #e2e8f0',
                          padding: '10px 18px',
                          borderRadius: 50,
                          fontSize: 13,
                          fontWeight: 700,
                          cursor: 'pointer',
                          boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                          transition: 'all 0.2s',
                        }}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>

                  <div ref={messagesEndRef} />
                </div>
              </div>
            )}

          </div>

          {/* Chat Input Bar (only visible when in chat tab) */}
          {activeTab === 'chat' && (
            <div style={{ padding: '10px 16px', background: '#ffffff', borderTop: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', gap: 8 }}>
              <input
                type="text"
                placeholder="Ask us anything..."
                value={inputMsg}
                onChange={e => setInputMsg(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSendMessage()}
                style={{ flex: 1, padding: '10px 14px', borderRadius: 50, border: '1px solid #cbd5e1', outline: 'none', fontSize: 14 }}
              />
              <button
                onClick={() => handleSendMessage()}
                style={{ background: '#384BFF', color: '#fff', border: 'none', width: 38, height: 38, borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#ffffff">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </button>
            </div>
          )}

          {/* Bottom Tab Navigation Bar */}
          <div className="cw-tab-bar">
            <button
              className={`cw-tab-btn ${activeTab === 'home' ? 'active' : ''}`}
              onClick={() => setActiveTab('home')}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              </svg>
              Home
            </button>

            <button
              className={`cw-tab-btn ${activeTab === 'messages' || activeTab === 'chat' ? 'active' : ''}`}
              onClick={() => setActiveTab('messages')}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
              Messages
            </button>

            <button
              className={`cw-tab-btn ${activeTab === 'help' ? 'active' : ''}`}
              onClick={() => setActiveTab('help')}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
              Help
            </button>
          </div>

        </div>
      )}
    </>
  );
}
