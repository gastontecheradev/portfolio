import useInView from '../hooks/useInView';

const details = [
  { label: 'Rol principal', value: 'Desarrollador .NET' },
  { label: 'Stack', value: 'ASP.NET, C#, Javascript, SQL Server, React' },
  { label: 'Formación', value: 'Estudiante de Ingeniería en Computación' },
  { label: 'Idiomas', value: 'Español · Inglés' },
];

export default function About() {
  const [ref, visible] = useInView();

  return (
    <section className="section section-light" id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-number">02</span>
          <h2 className="section-title">Sobre mí</h2>
        </div>

        <div className="about-grid" ref={ref}>
          <div className={`about-text fade-up ${visible ? 'visible' : ''}`}>
            <p>
              Soy desarrollador <strong>.NET</strong> enfocado en aplicaciones web usando{' '}
              <strong>ASP.NET, C#, Javascript, SQL Server y React</strong> entre otras tecnologías. Me interesa todo lo
              relacionado con buenas prácticas, arquitectura limpia y patrones de diseño.
            </p>
            <p>
              Actualmente continúo formándome en <strong>Ingeniería en Computación</strong> y
              Desarrollo Web, trabajando en proyectos personales que combinan{' '}
              <strong>backend robusto</strong> con <strong>interfaces claras y eficientes</strong>.
            </p>
            <p>
              Me gusta aprender de forma constante y seguir mejorando en cada proyecto
              para que sea más mantenible y escalable.
            </p>
          </div>

          <div className={`fade-up fade-up-d1 ${visible ? 'visible' : ''}`}>
            <div className="detail-card">
              {details.map((d) => (
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
