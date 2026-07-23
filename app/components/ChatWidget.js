'use client';

import { useState, useRef, useEffect } from 'react';
import {
  MessageCircle,
  X,
  ArrowLeft,
  Search,
  ChevronRight,
  ChevronDown,
  Send,
  Home,
  MessageSquare,
  HelpCircle,
  Layers,
  GitBranch,
  Bot,
  Tag,
  ShieldCheck,
} from 'lucide-react';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const [activeTab, setActiveTab] = useState('home'); // 'home' | 'messages' | 'help' | 'chat'
  const [searchQuery, setSearchQuery] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: 'Hi there 👋 How can we help?\n\nWe work first-come, first-served, and an engineer usually jumps into this thread within minutes.\n\nWhat are you building?',
      time: 'Just now',
    },
  ]);
  const [inputMsg, setInputMsg] = useState('');
  const [selectedFaq, setSelectedFaq] = useState(null);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (activeTab === 'chat') {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, activeTab, isTyping]);

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
  ];

  const collections = [
    { title: 'Services & Solutions', count: '10 articles', icon: Layers },
    { title: 'Project Process & Sprints', count: '6 articles', icon: GitBranch },
    { title: 'Custom AI & Automation', count: '8 articles', icon: Bot },
    { title: 'Pricing & Fixed Estimates', count: '4 articles', icon: Tag },
    { title: 'Company & Security', count: '3 articles', icon: ShieldCheck },
  ];

  const filteredFaqs = faqs.filter(
    (f) =>
      f.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleOpen = () => {
    setIsOpen(true);
    setHasUnread(false);
  };

  const handleSendMessage = (textToSend) => {
    const text = textToSend || inputMsg;
    if (!text.trim()) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: text.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputMsg('');
    setActiveTab('chat');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const botReply = {
        id: Date.now() + 1,
        sender: 'bot',
        text: `Got it. An engineer will pick this up shortly. For anything urgent, reach us directly at info@infatoz.com.`,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, botReply]);
    }, 1400);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;500;600;700&display=swap');

        :root {
          --ifz-blue: #384BFF;
          --ifz-blue-hover: #2a3ce0;
          --ifz-navy: #0F0D1D;
          --ifz-white: #ffffff;
          --ifz-bg-light: #f8faff;
          --ifz-surface-hover: #f4f6fb;
          --ifz-border: #e8ecf4;
          --ifz-text-dark: #0F0D1D;
          --ifz-text-muted: #64748b;
          --ifz-text-subtle: #94a3b8;
          --font-primary: 'Kumbh Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        /* Base Animations */
        @keyframes fade-in-up { 
          from { opacity: 0; transform: translateY(12px); } 
          to { opacity: 1; transform: translateY(0); } 
        }
        @keyframes scale-in { 
          from { opacity: 0; transform: scale(0.96) translateY(12px); } 
          to { opacity: 1; transform: scale(1) translateY(0); } 
        }
        
        /* Floating Action Button */
        .ifz-fab {
          position: fixed;
          bottom: 24px;
          right: 24px;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          border: none;
          cursor: pointer;
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--ifz-blue);
          color: var(--ifz-white);
          box-shadow: 0 4px 16px rgba(56, 75, 255, 0.3);
          transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.2s;
        }
        .ifz-fab:hover {
          transform: scale(1.05);
          background: var(--ifz-blue-hover);
        }
        .ifz-fab:active { transform: scale(0.95); }
        .ifz-fab-badge {
          position: absolute;
          top: 0px;
          right: 0px;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #ef4444;
          border: 2px solid var(--ifz-white);
        }

        /* Widget Container */
        .ifz-card {
          position: fixed;
          bottom: 96px;
          right: 24px;
          width: 380px;
          height: 640px;
          max-height: calc(100vh - 120px);
          max-width: calc(100vw - 32px);
          background: var(--ifz-white);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 12px 40px rgba(15, 13, 29, 0.12), 0 4px 12px rgba(15, 13, 29, 0.04);
          z-index: 99998;
          display: flex;
          flex-direction: column;
          font-family: var(--font-primary);
          color: var(--ifz-text-dark);
          animation: scale-in 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          border: 1px solid var(--ifz-border);
        }

        /* Header */
        .ifz-header {
          padding: 24px 20px 20px;
          background: var(--ifz-navy);
          color: var(--ifz-white);
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .ifz-brand {
          font-size: 20px;
          font-weight: 700;
          letter-spacing: -0.02em;
        }
        .ifz-status {
          font-size: 13px;
          color: #cbd5e1;
          margin-top: 2px;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .ifz-status-dot {
          width: 8px;
          height: 8px;
          background: #10b981;
          border-radius: 50%;
        }
        
        .ifz-chat-header {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .ifz-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: var(--ifz-blue);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: 14px;
        }

        .ifz-icon-btn {
          background: transparent;
          border: none;
          color: var(--ifz-text-subtle);
          width: 32px;
          height: 32px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
        }
        .ifz-icon-btn:hover {
          background: var(--ifz-surface-hover);
          color: var(--ifz-text-dark);
        }
        .ifz-header .ifz-icon-btn {
          color: #94a3b8;
        }
        .ifz-header .ifz-icon-btn:hover {
          background: rgba(255,255,255,0.1);
          color: var(--ifz-white);
        }

        /* Body Area */
        .ifz-body {
          flex: 1;
          overflow-y: auto;
          background: var(--ifz-bg-light);
          padding: 24px 20px;
        }
        .ifz-body::-webkit-scrollbar { width: 6px; }
        .ifz-body::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
        
        /* Home Tab */
        .ifz-greeting {
          font-size: 28px;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 24px;
          letter-spacing: -0.02em;
          animation: fade-in-up 0.4s ease-out;
        }
        
        .ifz-card-action {
          background: var(--ifz-white);
          border-radius: 12px;
          padding: 16px;
          display: flex;
          align-items: center;
          gap: 14px;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(15, 13, 29, 0.04);
          border: 1px solid var(--ifz-border);
          transition: all 0.2s ease;
          animation: fade-in-up 0.4s ease-out 0.05s both;
          margin-bottom: 32px;
        }
        .ifz-card-action:hover {
          border-color: var(--ifz-blue);
          box-shadow: 0 4px 12px rgba(56, 75, 255, 0.08);
        }
        .ifz-card-action-icon {
          color: var(--ifz-blue);
        }
        .ifz-card-action-title {
          font-weight: 600;
          font-size: 15px;
        }
        .ifz-card-action-sub {
          font-size: 13px;
          color: var(--ifz-text-muted);
          margin-top: 2px;
        }

        /* Search Input */
        .ifz-search-wrap {
          position: relative;
          margin-bottom: 16px;
        }
        .ifz-search-input {
          width: 100%;
          padding: 14px 16px 14px 42px;
          background: var(--ifz-white);
          border: 1px solid var(--ifz-border);
          border-radius: 8px;
          font-size: 15px;
          font-family: var(--font-primary);
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          box-sizing: border-box;
        }
        .ifz-search-input:focus {
          border-color: var(--ifz-blue);
          box-shadow: 0 0 0 3px rgba(56, 75, 255, 0.1);
        }
        .ifz-search-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--ifz-text-subtle);
        }

        /* FAQ Accordion */
        .ifz-faq-section-title {
          font-size: 13px;
          font-weight: 600;
          color: var(--ifz-text-subtle);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 12px;
        }
        .ifz-faq-item {
          background: var(--ifz-white);
          border: 1px solid var(--ifz-border);
          border-radius: 8px;
          margin-bottom: 8px;
          overflow: hidden;
          transition: background 0.2s;
        }
        .ifz-faq-item:hover {
          background: var(--ifz-surface-hover);
        }
        .ifz-faq-head {
          padding: 14px 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          font-weight: 500;
          font-size: 14px;
          color: var(--ifz-text-dark);
        }
        .ifz-faq-answer {
          padding: 0 16px 16px;
          font-size: 14px;
          color: var(--ifz-text-muted);
          line-height: 1.6;
        }
        .ifz-faq-chevron {
          color: var(--ifz-text-subtle);
          transition: transform 0.2s;
        }
        .ifz-faq-chevron.open {
          transform: rotate(180deg);
        }

        /* Chat Messages */
        .ifz-chat-container {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .ifz-msg-row {
          display: flex;
          animation: fade-in-up 0.3s ease-out both;
        }
        .ifz-msg-row.user { justify-content: flex-end; }
        .ifz-msg-col {
          max-width: 85%;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .ifz-msg-row.user .ifz-msg-col { align-items: flex-end; }
        .ifz-msg-bubble {
          padding: 12px 16px;
          border-radius: 12px;
          font-size: 15px;
          line-height: 1.6;
          white-space: pre-line;
        }
        .ifz-msg-bubble.bot {
          background: var(--ifz-white);
          border: 1px solid var(--ifz-border);
          color: var(--ifz-text-dark);
          border-bottom-left-radius: 4px;
          box-shadow: 0 2px 4px rgba(15, 13, 29, 0.02);
        }
        .ifz-msg-bubble.user {
          background: var(--ifz-blue);
          color: var(--ifz-white);
          border-bottom-right-radius: 4px;
        }
        .ifz-msg-meta {
          font-size: 12px;
          color: var(--ifz-text-subtle);
          padding: 0 4px;
        }

        /* Typing Indicator */
        .ifz-typing {
          padding: 16px;
          display: flex;
          gap: 4px;
          align-items: center;
        }
        .ifz-dot {
          width: 6px;
          height: 6px;
          background: var(--ifz-text-subtle);
          border-radius: 50%;
          animation: typing-bounce 1.4s infinite ease-in-out both;
        }
        .ifz-dot:nth-child(1) { animation-delay: -0.32s; }
        .ifz-dot:nth-child(2) { animation-delay: -0.16s; }
        @keyframes typing-bounce {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1); }
        }

        /* Quick Replies */
        .ifz-quick-replies {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 8px;
          margin-top: 8px;
        }
        .ifz-pill {
          background: transparent;
          color: var(--ifz-blue);
          border: 1px solid var(--ifz-blue);
          padding: 10px 16px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 500;
          font-family: var(--font-primary);
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .ifz-pill:hover {
          background: var(--ifz-blue);
          color: var(--ifz-white);
        }

        /* Input Area */
        .ifz-input-area {
          padding: 16px 20px;
          background: var(--ifz-white);
          border-top: 1px solid var(--ifz-border);
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .ifz-input-field {
          flex: 1;
          border: none;
          outline: none;
          font-size: 15px;
          font-family: var(--font-primary);
          color: var(--ifz-text-dark);
          background: transparent;
        }
        .ifz-input-field::placeholder { color: var(--ifz-text-subtle); }
        .ifz-send-btn {
          background: var(--ifz-blue);
          color: var(--ifz-white);
          border: none;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s;
        }
        .ifz-send-btn:hover { background: var(--ifz-blue-hover); }
        .ifz-send-btn:disabled { background: var(--ifz-border); cursor: not-allowed; }

        /* Empty States */
        .ifz-empty {
          text-align: center;
          padding: 60px 20px;
          color: var(--ifz-text-muted);
        }
        .ifz-empty-icon {
          margin: 0 auto 16px;
          color: var(--ifz-border);
        }
        .ifz-btn-primary {
          background: var(--ifz-blue);
          color: var(--ifz-white);
          border: none;
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 14px;
          margin-top: 24px;
          cursor: pointer;
          transition: background 0.2s;
        }
        .ifz-btn-primary:hover { background: var(--ifz-blue-hover); }

        /* Bottom Tab Navigation */
        .ifz-tabs {
          display: flex;
          border-top: 1px solid var(--ifz-border);
          background: var(--ifz-white);
          height: 64px;
        }
        .ifz-tab {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 4px;
          background: none;
          border: none;
          color: var(--ifz-text-subtle);
          font-size: 12px;
          font-weight: 500;
          cursor: pointer;
          transition: color 0.2s;
        }
        .ifz-tab:hover { color: var(--ifz-text-muted); }
        .ifz-tab.active { color: var(--ifz-blue); }

        /* Collections Card */
        .ifz-collection-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px;
          background: var(--ifz-white);
          border: 1px solid var(--ifz-border);
          border-radius: 8px;
          margin-bottom: 8px;
          cursor: pointer;
          transition: border-color 0.2s;
        }
        .ifz-collection-card:hover { border-color: var(--ifz-blue); }
        .ifz-collection-info {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .ifz-collection-icon { color: var(--ifz-text-muted); }
        .ifz-collection-title { font-size: 14px; font-weight: 500; color: var(--ifz-text-dark); }
        .ifz-collection-count { font-size: 13px; color: var(--ifz-text-subtle); margin-top: 2px; }

        @media (max-width: 480px) {
          .ifz-card { right: 16px; left: 16px; width: auto; bottom: 88px; }
        }
      `}</style>

      {/* Floating Intercom-style Launcher Button */}
      <button
        className="ifz-fab"
        onClick={() => {
          if (isOpen) {
            setIsOpen(false);
          } else {
            handleOpen();
          }
        }}
        aria-label={isOpen ? "Minimize Intercom Messenger" : "Open Intercom Messenger"}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          /* Minimize Icon (Chevron Down SVG from Intercom HTML) */
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.601 8.39897C18.269 8.06702 17.7309 8.06702 17.3989 8.39897L12 13.7979L6.60099 8.39897C6.26904 8.06702 5.73086 8.06702 5.39891 8.39897C5.06696 8.73091 5.06696 9.2691 5.39891 9.60105L11.3989 15.601C11.7309 15.933 12.269 15.933 12.601 15.601L18.601 9.60105C18.9329 9.2691 18.9329 8.73091 18.601 8.39897Z"
              fill="currentColor"
            />
          </svg>
        ) : (
          /* Open Icon (Message Circle + Brand Badge Cutout) */
          <>
            <MessageCircle size={26} strokeWidth={2} />
            {hasUnread && <span className="ifz-fab-badge" />}
          </>
        )}
      </button>

      {/* Widget Window */}
      {isOpen && (
        <div className="ifz-card">
          {/* Header */}
          <div className="ifz-header">
            {activeTab === 'chat' ? (
              <div className="ifz-chat-header">
                <button className="ifz-icon-btn" onClick={() => setActiveTab('home')}>
                  <ArrowLeft size={18} strokeWidth={2} color="white" />
                </button>
                <div className="ifz-avatar">A</div>
                <div>
                  <div className="ifz-brand" style={{ fontSize: '16px' }}>AI Agent</div>
                  <div className="ifz-status">Online</div>
                </div>
              </div>
            ) : (
              <div>
                <div className="ifz-brand">Infatoz Support</div>
                <div className="ifz-status">
                  <span className="ifz-status-dot" /> Usually replies in minutes
                </div>
              </div>
            )}
            <button className="ifz-icon-btn" onClick={() => setIsOpen(false)}>
              <X size={20} strokeWidth={2} color="white" />
            </button>
          </div>

          {/* Body */}
          <div className="ifz-body">
            {activeTab === 'home' && (
              <>
                <div className="ifz-greeting">Hi there 👋<br />How can we help?</div>

                <div className="ifz-card-action" onClick={() => setActiveTab('chat')}>
                  <div className="ifz-card-action-icon">
                    <Send size={20} strokeWidth={2} />
                  </div>
                  <div>
                    <div className="ifz-card-action-title">Send us a message</div>
                    <div className="ifz-card-action-sub">We usually reply in a few minutes</div>
                  </div>
                  <ChevronRight size={18} color="var(--ifz-border)" style={{ marginLeft: 'auto' }} />
                </div>

                <div className="ifz-search-wrap">
                  <Search size={16} className="ifz-search-icon" />
                  <input
                    type="text"
                    className="ifz-search-input"
                    placeholder="Search for help..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                <div className="ifz-faq-section-title">Suggested Help</div>
                {filteredFaqs.map((f) => (
                  <div key={f.id} className="ifz-faq-item">
                    <div className="ifz-faq-head" onClick={() => setSelectedFaq(selectedFaq === f.id ? null : f.id)}>
                      {f.q}
                      <ChevronDown size={16} className={`ifz-faq-chevron ${selectedFaq === f.id ? 'open' : ''}`} />
                    </div>
                    {selectedFaq === f.id && <div className="ifz-faq-answer">{f.a}</div>}
                  </div>
                ))}
              </>
            )}

            {activeTab === 'messages' && (
              <div className="ifz-empty">
                <MessageSquare size={48} className="ifz-empty-icon" strokeWidth={1} />
                <h3 style={{ fontSize: '18px', fontWeight: '600', color: 'var(--ifz-text-dark)' }}>No messages yet</h3>
                <p style={{ fontSize: '14px', marginTop: '8px' }}>Once you start a conversation, you'll see it here.</p>
                <button className="ifz-btn-primary" onClick={() => setActiveTab('chat')}>
                  Start a conversation
                </button>
              </div>
            )}

            {activeTab === 'help' && (
              <>
                <div className="ifz-search-wrap">
                  <Search size={16} className="ifz-search-icon" />
                  <input
                    type="text"
                    className="ifz-search-input"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="ifz-faq-section-title" style={{ marginTop: '24px' }}>Collections</div>
                {collections.map((col, idx) => {
                  const Icon = col.icon;
                  return (
                    <div key={idx} className="ifz-collection-card" onClick={() => setActiveTab('chat')}>
                      <div className="ifz-collection-info">
                        <Icon size={20} strokeWidth={1.5} className="ifz-collection-icon" />
                        <div>
                          <div className="ifz-collection-title">{col.title}</div>
                          <div className="ifz-collection-count">{col.count}</div>
                        </div>
                      </div>
                      <ChevronRight size={16} color="var(--ifz-text-subtle)" />
                    </div>
                  );
                })}
              </>
            )}

            {activeTab === 'chat' && (
              <div className="ifz-chat-container">
                {messages.map((m) => (
                  <div key={m.id} className={`ifz-msg-row ${m.sender}`}>
                    <div className="ifz-msg-col">
                      <div className={`ifz-msg-bubble ${m.sender}`}>{m.text}</div>
                      <div className="ifz-msg-meta">{m.time}</div>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="ifz-msg-row bot">
                    <div className="ifz-msg-col">
                      <div className="ifz-msg-bubble bot ifz-typing">
                        <span className="ifz-dot" />
                        <span className="ifz-dot" />
                        <span className="ifz-dot" />
                      </div>
                    </div>
                  </div>
                )}

                <div className="ifz-quick-replies">
                  {['I have a custom project', 'Pricing questions', 'Something else'].map((opt, i) => (
                    <button key={i} className="ifz-pill" onClick={() => handleSendMessage(opt)}>
                      {opt}
                    </button>
                  ))}
                </div>
                <div ref={messagesEndRef} />
              </div>
            )}
          </div>

          {/* Chat Input Bar */}
          {activeTab === 'chat' && (
            <div className="ifz-input-area">
              <input
                type="text"
                className="ifz-input-field"
                placeholder="Reply here..."
                value={inputMsg}
                onChange={(e) => setInputMsg(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <button
                className="ifz-send-btn"
                onClick={() => handleSendMessage()}
                disabled={!inputMsg.trim()}
              >
                <Send size={16} strokeWidth={2} />
              </button>
            </div>
          )}

          {/* Bottom Navigation */}
          <div className="ifz-tabs">
            <button className={`ifz-tab ${activeTab === 'home' ? 'active' : ''}`} onClick={() => setActiveTab('home')}>
              <Home size={20} strokeWidth={activeTab === 'home' ? 2.5 : 2} />
              Home
            </button>
            <button className={`ifz-tab ${activeTab === 'messages' || activeTab === 'chat' ? 'active' : ''}`} onClick={() => setActiveTab('messages')}>
              <MessageSquare size={20} strokeWidth={activeTab === 'messages' || activeTab === 'chat' ? 2.5 : 2} />
              Messages
            </button>
            <button className={`ifz-tab ${activeTab === 'help' ? 'active' : ''}`} onClick={() => setActiveTab('help')}>
              <HelpCircle size={20} strokeWidth={activeTab === 'help' ? 2.5 : 2} />
              Help
            </button>
          </div>
        </div>
      )}
    </>
  );
}