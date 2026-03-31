import { useState, useEffect } from 'react';

const links = [
  { href: '#about', label: 'Sobre mí' },
  { href: '#skills', label: 'Tecnologías' },
  { href: '#projects', label: 'Proyectos' },
  { href: '#contact', label: 'Contacto' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 120) current = s.id;
      });
      setActive(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = () => setOpen(false);

  return (
    <nav className="navbar">
      <a href="#hero" className="navbar-logo" onClick={handleClick}>
        Gaston Techera <span>|</span> Portfolio
      </a>

      <div className="navbar-links">
        {links.map((l) => (
          <a key={l.href} href={l.href} className={active === l.href.slice(1) ? 'active' : ''}>
            {l.label}
          </a>
        ))}
      </div>

      <button
        className={`navbar-toggle ${open ? 'open' : ''}`}
        onClick={() => setOpen(!open)}
        aria-label="Menu"
      >
        <span /><span /><span />
      </button>

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
