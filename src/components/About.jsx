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
            <figure className="about-photo">
              <img
                src={`${process.env.PUBLIC_URL}/images/profile.jpg`}
                alt={t.about.photoAlt}
                loading="lazy"
                width="600"
                height="750"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
