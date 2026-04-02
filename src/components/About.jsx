import { useLang } from '../i18n/LanguageContext';
import useInView from '../hooks/useInView';

export default function About() {
  const { t } = useLang();
  const [ref, visible] = useInView();

  return (
    <section className="section section-light" id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-number">{t.about.number}</span>
          <h2 className="section-title">{t.about.title}</h2>
        </div>

        <div className="about-grid" ref={ref}>
          <div className={`about-text fade-up ${visible ? 'visible' : ''}`}>
            {t.about.text.map((paragraph, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
          </div>

          <div className={`fade-up fade-up-d1 ${visible ? 'visible' : ''}`}>
            <div className="detail-card">
              {t.about.details.map((d) => (
                <div className="detail-item" key={d.label}>
                  <span className="detail-label">{d.label}</span>
                  <span className="detail-value">{d.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
