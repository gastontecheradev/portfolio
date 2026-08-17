import { useEffect, useRef } from 'react';
import { useLang } from '../i18n/LanguageContext';

export default function Hero() {
  const { t } = useLang();
  const sectionRef = useRef(null);

  // Parallax sutil del wordmark: expone --py (scroll) como variable CSS
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const el = sectionRef.current;
    if (!el) return;

    let raf = null;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const y = Math.min(window.scrollY, window.innerHeight * 1.2);
        el.style.setProperty('--py', `${y}px`);
        raf = null;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="hero" id="hero" ref={sectionRef}>
      <div className="hero-content">
        <div className="hero-meta hero-anim hero-anim-3">
          <p className="hero-eyebrow">{t.hero.role}</p>
          <p className="hero-loc">{t.footer}</p>
        </div>

        <h1 className="hero-anim hero-anim-2">
          {t.hero.name} {t.hero.lastName}
        </h1>

        <div className="hero-bottom hero-anim hero-anim-4">
          <p className="hero-desc">{t.hero.desc}</p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              {t.hero.cta}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17 17 7" /><path d="M7 7h10v10" />
              </svg>
            </a>
            <a href="#contact" className="btn btn-outline">{t.hero.ctaOutline}</a>
          </div>
        </div>
      </div>

    </section>
  );
}
