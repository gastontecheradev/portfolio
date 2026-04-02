import { useState } from 'react';
import { useLang } from '../i18n/LanguageContext';
import useInView from '../hooks/useInView';

// ╔══════════════════════════════════════════════════════════════╗
// ║  IMPORTANTE: Reemplazá 'TU_FORM_ID' por tu ID de Formspree   ║
// ║  Ejemplo: https://formspree.io/f/xyzabcde                    ║
// ╚══════════════════════════════════════════════════════════════╝

const FORMSPREE_URL = `https://formspree.io/f/${process.env.REACT_APP_FORMSPREE_ID}`;

export default function Contact() {
  const { t } = useLang();
  const [ref, visible] = useInView();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section className="section section-dark" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-number">{t.contact.number}</span>
          <h2 className="section-title">{t.contact.title}</h2>
        </div>

        <p className="contact-intro">{t.contact.intro}</p>

        <div className="contact-grid" ref={ref}>
          {/* Form */}
          <div className={`fade-up ${visible ? 'visible' : ''}`}>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="name">{t.contact.form.name}</label>
                <input
                  className="form-input"
                  id="name"
                  name="name"
                  placeholder={t.contact.form.namePlaceholder}
                  value={form.name}
                  onChange={handleChange}
                  required
                  disabled={status === 'sending'}
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="email">{t.contact.form.email}</label>
                <input
                  className="form-input"
                  id="email"
                  name="email"
                  type="email"
                  placeholder={t.contact.form.emailPlaceholder}
                  value={form.email}
                  onChange={handleChange}
                  required
                  disabled={status === 'sending'}
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="message">{t.contact.form.message}</label>
                <textarea
                  className="form-input"
                  id="message"
                  name="message"
                  rows="5"
                  placeholder={t.contact.form.messagePlaceholder}
                  value={form.message}
                  onChange={handleChange}
                  required
                  disabled={status === 'sending'}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ alignSelf: 'flex-start' }}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? (
                  <>
                    <span className="spinner" />
                    {t.contact.form.sending}
                  </>
                ) : (
                  <>
                    {t.contact.form.submit}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                    </svg>
                  </>
                )}
              </button>

              {status === 'success' && (
                <p className="form-message form-success">{t.contact.form.success}</p>
              )}
              {status === 'error' && (
                <p className="form-message form-error">{t.contact.form.error}</p>
              )}
            </form>
          </div>

          {/* Info card */}
          <div className={`fade-up fade-up-d1 ${visible ? 'visible' : ''}`}>
            <div className="contact-info-card">
              <h3 className="contact-info-title">{t.contact.infoTitle}</h3>

              <a href="https://github.com/gastontecheradev" target="_blank" rel="noopener noreferrer" className="contact-link">
                <span className="contact-link-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>
                </span>
                <div>
                  <div className="contact-link-label">GitHub</div>
                  <div className="contact-link-value">gastontecheradev</div>
                </div>
                <svg className="contact-link-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7" /><path d="M7 7h10v10" /></svg>
              </a>

              <a href="https://www.linkedin.com/in/gaston-techera-dev/" target="_blank" rel="noopener noreferrer" className="contact-link">
                <span className="contact-link-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </span>
                <div>
                  <div className="contact-link-label">LinkedIn</div>
                  <div className="contact-link-value">gaston-techera-dev</div>
                </div>
                <svg className="contact-link-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7" /><path d="M7 7h10v10" /></svg>
              </a>

              <div className="contact-link" style={{ cursor: 'default' }}>
                <span className="contact-link-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                </span>
                <div>
                  <div className="contact-link-label">Email</div>
                  <div className="contact-link-value">gastontecheram@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
