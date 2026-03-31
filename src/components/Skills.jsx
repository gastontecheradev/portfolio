import useInView from '../hooks/useInView';

const groups = [
  {
    title: 'Frontend',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" />
      </svg>
    ),
    tags: ['JavaScript', 'React', 'HTML5', 'CSS3', 'Tailwind', 'Bootstrap', 'UX / UI', 'Python'],
  },
  {
    title: 'Backend',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" /><line x1="4" y1="22" x2="4" y2="15" />
      </svg>
    ),
    tags: ['C#', 'ASP.NET Core MVC', 'SQL Server', 'Entity Framework', 'Node.js', 'Express'],
  },
  {
    title: 'Herramientas',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
      </svg>
    ),
    tags: ['Estructuras de Datos', 'Patrones de Diseño', 'Linux', 'Git', 'Ciberseguridad'],
  },
];

export default function Skills() {
  const [ref, visible] = useInView();

  return (
    <section className="section section-alt" id="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-number">03</span>
          <h2 className="section-title">Tecnologías</h2>
        </div>

        <div className="skills-grid" ref={ref}>
          {groups.map((g, i) => (
            <div
              key={g.title}
              className={`skill-group fade-up fade-up-d${i + 1} ${visible ? 'visible' : ''}`}
            >
              <div className="skill-group-header">
                <span className="skill-group-icon">{g.icon}</span>
                <h3>{g.title}</h3>
              </div>
              <div className="skill-tags">
                {g.tags.map((t) => (
                  <span className="skill-tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
