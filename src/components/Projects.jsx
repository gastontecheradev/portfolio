import useInView from '../hooks/useInView';

const projects = [
  {
    title: 'Pasear por Pasear',
    desc: 'Blog de paseos por Montevideo con reserva de tours y suscripción de newsletter.',
    tech: 'ASP.NET Core · C# · SQL Server',
    img: 'https://gastontecheradev.somee.com/images/proyecto-1.jpg',
    url: 'https://pasearporpasear.somee.com/',
    linkLabel: 'Ver proyecto',
  },
  {
    title: 'Nova Fade Barbería',
    desc: 'Barbería y peluquería en Montevideo. Agenda de turnos online.',
    tech: 'ASP.NET Core · C# · Bootstrap',
    img: 'https://gastontecheradev.somee.com/images/proyecto-2.jpg',
    url: 'https://novafadestudio.somee.com/',
    linkLabel: 'Ver proyecto',
  },
  {
    title: 'Tienda Online',
    desc: 'Proyecto académico de e-commerce con catálogo y carrito de compras.',
    tech: 'React · JavaScript · CSS',
    img: 'https://gastontecheradev.somee.com/images/proyecto-3.jpg',
    url: 'https://gastontecheradev.github.io/e-commerce/',
    linkLabel: 'Ver proyecto',
  },
];

export default function Projects() {
  const [ref, visible] = useInView();

  return (
    <section className="section section-light" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-number">01</span>
          <h2 className="section-title">Proyectos destacados</h2>
        </div>

        <div className="projects-grid" ref={ref}>
          {projects.map((p, i) => (
            <a
              key={p.title}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`project-card fade-up fade-up-d${i + 1} ${visible ? 'visible' : ''}`}
            >
              <div className="project-img-wrap">
                <img src={p.img} alt={p.title} className="project-img" loading="lazy" />
              </div>
              <div className="project-body">
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>
                <p className="project-tech">{p.tech}</p>
                <span className="project-link-label">
                  {p.linkLabel}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17 17 7" /><path d="M7 7h10v10" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
