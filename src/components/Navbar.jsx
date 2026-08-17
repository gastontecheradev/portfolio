import { useState, useEffect } from 'react';
import { useLang } from '../i18n/LanguageContext';

export default function Navbar() {
  const { lang, t, toggleLang } = useLang();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { href: '#projects', label: t.nav.projects },
    { href: '#about', label: t.nav.about },
    { href: '#skills', label: t.nav.skills },
    { href: '#contact', label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 120) current = s.id;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = () => setOpen(false);

  return (
    <nav className={`navbar ${scrolled || open ? 'scrolled' : ''}`}>
      <a href="#hero" className="navbar-logo" onClick={handleClick}>
        Gastón Techera <span>Portfolio</span>
      </a>

      <div className="navbar-links">
        {links.map((l) => (
          <a key={l.href} href={l.href} className={active === l.href.slice(1) ? 'active' : ''}>
            {l.label}
          </a>
        ))}
        <button className="lang-toggle" onClick={toggleLang} aria-label="Cambiar idioma">
          {lang === 'es' ? 'ENGLISH' : 'ESPAÑOL'}
        </button>
      </div>

      <div className="navbar-right-mobile">
        <button className="lang-toggle" onClick={toggleLang} aria-label="Cambiar idioma">
          {lang === 'es' ? 'ENGLISH' : 'ESPAÑOL'}
        </button>
        <button
          className={`navbar-toggle ${open ? 'open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </div>

      <div className={`navbar-mobile ${open ? 'open' : ''}`}>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={handleClick}>
            {l.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
