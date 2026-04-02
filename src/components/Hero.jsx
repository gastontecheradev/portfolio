import { useLang } from '../i18n/LanguageContext';

export default function Hero() {
  const { t } = useLang();

  return (
    <section className="hero" id="hero">
      <div className="hero-bg" />
      <div className="hero-overlay" />

      <div className="hero-content">
        {/*<div className="hero-badge hero-anim hero-anim-1">
          <span className="badge-dot" />
          {t.hero.badge}
        </div>*/}

        <h1 className="hero-anim hero-anim-2">
          {t.hero.name} <span className="gradient">{t.hero.lastName}</span>
        </h1>

        <p className="hero-role hero-anim hero-anim-3">{t.hero.role}</p>

        <p className="hero-desc hero-anim hero-anim-4">{t.hero.desc}</p>

        <div className="hero-actions hero-anim hero-anim-5">
          <a href="#projects" className="btn btn-primary">
            {t.hero.cta}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17 17 7" /><path d="M7 7h10v10" />
            </svg>
          </a>
          <a href="#contact" className="btn btn-outline">{t.hero.ctaOutline}</a>
        </div>
      </div>

      <div className="scroll-indicator hero-anim hero-anim-5">
        <div className="scroll-line" />
      </div>
    </section>
  );
}
