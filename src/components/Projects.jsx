import { useLang } from '../i18n/LanguageContext';
import useInView from '../hooks/useInView';

const projectUrls = [
  'https://prepdiplomacia.com/',
  'https://pasearporpasear.azurewebsites.net/',
  'https://gestionproweb.azurewebsites.net/',
  'https://novafadestudio.azurewebsites.net/',
];

const projectImgs = [
  'https://gastontecheradev.github.io/portfolio/images/proyecto-4.jpg',
  'https://gastontecheradev.github.io/portfolio/images/proyecto-1.jpg',
  'https://gastontecheradev.github.io/portfolio/images/proyecto-3.jpg',
  'https://gastontecheradev.github.io/portfolio/images/proyecto-2.jpg',
];

// Tiempo entre filas (en segundos)
const ROW_STEP = 0.12;

const hostOf = (url) => new URL(url).hostname;

export default function Projects() {
  const { t } = useLang();
  const [ref, visible] = useInView();

  return (
    <section className="section section-light" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-number">{t.projects.number}</span>
          <h2 className="section-title">{t.projects.title}</h2>
          <span className="section-rule" aria-hidden="true" />
        </div>

        <div className="projects-list" ref={ref}>
          {t.projects.items.map((p, i) => (
            <a
              key={i}
              href={projectUrls[i]}
              target="_blank"
              rel="noopener noreferrer"
              className={`project-card fade-up ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: visible ? `${i * ROW_STEP}s` : '0s' }}
            >
              <div className="project-plate">
                <div className="project-chrome" aria-hidden="true">
                  <span /><span /><span />
                  <em>{hostOf(projectUrls[i])}</em>
                </div>
                <div className="project-img-wrap">
                  <img src={projectImgs[i]} alt={p.title} className="project-img" loading="lazy" />
                </div>
              </div>

              <div className="project-body">
                <span className="project-index">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>
                <p className="project-tech">
                  {p.tech.split('·').map((tech) => (
                    <span key={tech.trim()}>{tech.trim()}</span>
                  ))}
                </p>
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
