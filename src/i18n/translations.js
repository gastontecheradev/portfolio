const translations = {
  es: {
    nav: {
      projects: 'Proyectos',
      about: 'Sobre mí',
      skills: 'Tecnologías',
      contact: 'Contacto',
    },

    hero: {
      badge: 'Disponible para proyectos',
      name: 'Gastón',
      lastName: 'Techera',
      role: 'Desarrollador .NET · React',
      desc: 'Diseño y desarrollo aplicaciones en .NET enfocadas en eficiencia, estabilidad y una experiencia de usuario fluida y consistente.',
      cta: 'Ver proyectos',
      ctaOutline: 'Contactame',
    },

    projects: {
      number: '01',
      title: 'Proyectos destacados',
      items: [
        {
          title: 'Pasear por Pasear',
          desc: 'Blog de paseos por Montevideo con reserva de tours y suscripción de newsletter.',
          tech: 'ASP.NET Core · C# · SQL Server',
          linkLabel: 'Ver proyecto',
        },
        {
          title: 'Nova Fade Barbería',
          desc: 'Barbería y peluquería en Montevideo. Agenda de turnos online.',
          tech: 'ASP.NET Core · C# · SQL Server',
          linkLabel: 'Ver proyecto',
        },
        {
          title: 'Tienda Online',
          desc: 'Proyecto académico de e-commerce con catálogo y carrito de compras.',
          tech: 'JavaScript · CSS . Node JS',
          linkLabel: 'Ver proyecto',
        },
      ],
    },

    about: {
      number: '02',
      title: 'Sobre mí',
      text: [
        'Soy desarrollador <strong>.NET</strong> enfocado en aplicaciones web usando <strong>ASP.NET Core, C# y SQL Server</strong>. Me interesa todo lo relacionado con buenas prácticas, arquitectura limpia y patrones de diseño.',
        'Actualmente continúo formándome en <strong>Ingeniería en Computación</strong> y Desarrollo Web, trabajando en proyectos personales que combinan <strong>backend robusto</strong> con <strong>interfaces claras y eficientes</strong>.',
        'Me gusta aprender de forma constante y seguir mejorando en cada proyecto para que sea más mantenible y escalable.',
      ],
      details: [
        { label: 'Rol principal', value: 'Desarrollador .NET' },
        { label: 'Stack', value: 'ASP.NET Core MVC, C#, SQL Server, React' },
        { label: 'Formación', value: 'Estudiante de Ingeniería en Computación' },
        { label: 'Idiomas', value: 'Español · Inglés' },
      ],
    },

    skills: {
      number: '03',
      title: 'Tecnologías',
      groups: [
        { title: 'Frontend', tags: ['JavaScript', 'React', 'HTML5', 'CSS3', 'Tailwind', 'Bootstrap', 'UX / UI'] },
        { title: 'Backend', tags: ['C#', 'ASP.NET Core MVC', 'SQL Server', 'Entity Framework', 'Node.js', 'Express'] },
        { title: 'Herramientas', tags: ['Estructuras de Datos', 'Patrones de Diseño', 'Linux', 'Git', 'Ciberseguridad'] },
      ],
    },

    contact: {
      number: '04',
      title: 'Contacto',
      intro: 'Si querés hablar sobre un proyecto, colaboración o consulta técnica, podés escribirme.',
      form: {
        name: 'Nombre',
        namePlaceholder: 'Tu nombre',
        email: 'Email',
        emailPlaceholder: 'tu@email.com',
        message: 'Mensaje',
        messagePlaceholder: 'Contame tu idea o consulta',
        submit: 'Enviar mensaje',
        sending: 'Enviando...',
        success: '✓ Tu mensaje ha sido enviado con éxito. ¡Gracias!',
        error: '✕ Hubo un error al enviar. Por favor intentá de nuevo.',
      },
      infoTitle: 'Conectemos',
    },

    footer: 'Montevideo, Uruguay',
  },

  en: {
    nav: {
      projects: 'Projects',
      about: 'About',
      skills: 'Skills',
      contact: 'Contact',
    },

    hero: {
      badge: 'Available for projects',
      name: 'Gastón',
      lastName: 'Techera',
      role: '.NET Developer · React',
      desc: 'I design and develop .NET applications focused on efficiency, stability, and a smooth, consistent user experience.',
      cta: 'View projects',
      ctaOutline: 'Contact me',
    },

    projects: {
      number: '01',
      title: 'Featured Projects',
      items: [
        {
          title: 'Pasear por Pasear',
          desc: 'Montevideo walking tours blog with tour booking and newsletter subscription.',
          tech: 'ASP.NET Core · C# · SQL Server',
          linkLabel: 'View project',
        },
        {
          title: 'Nova Fade Barbería',
          desc: 'Barbershop in Montevideo with an online appointment booking system.',
          tech: 'ASP.NET Core · C# · SQL Server',
          linkLabel: 'View project',
        },
        {
          title: 'Online Store',
          desc: 'Academic e-commerce project with product catalog and shopping cart.',
          tech: 'JavaScript · CSS · Node JS',
          linkLabel: 'View project',
        },
      ],
    },

    about: {
      number: '02',
      title: 'About Me',
      text: [
        "I'm a <strong>.NET developer</strong> focused on web applications using <strong>ASP.NET Core, C# and SQL Server</strong>. I'm passionate about best practices, clean architecture, and design patterns.",
        "I'm currently pursuing a degree in <strong>Computer Engineering</strong> while working on personal projects that combine a <strong>solid backend</strong> with <strong>clear, efficient interfaces</strong>.",
        'I enjoy learning constantly and improving with each project to make it more maintainable and scalable.',
      ],
      details: [
        { label: 'Main Role', value: '.NET Developer' },
        { label: 'Stack', value: 'ASP.NET Core MVC, C#, SQL Server, React' },
        { label: 'Education', value: 'Computer Engineering Student' },
        { label: 'Languages', value: 'Spanish · English' },
      ],
    },

    skills: {
      number: '03',
      title: 'Technologies',
      groups: [
        { title: 'Frontend', tags: ['JavaScript', 'React', 'HTML5', 'CSS3', 'Tailwind', 'Bootstrap', 'UX / UI', 'Python'] },
        { title: 'Backend', tags: ['C#', 'ASP.NET Core MVC', 'SQL Server', 'Entity Framework', 'Node.js', 'Express'] },
        { title: 'Tools', tags: ['Data Structures', 'Design Patterns', 'Linux', 'Git', 'Cybersecurity'] },
      ],
    },

    contact: {
      number: '04',
      title: 'Contact',
      intro: "If you'd like to discuss a project, collaboration, or technical inquiry, feel free to reach out.",
      form: {
        name: 'Name',
        namePlaceholder: 'Your name',
        email: 'Email',
        emailPlaceholder: 'you@email.com',
        message: 'Message',
        messagePlaceholder: 'Tell me about your idea or question',
        submit: 'Send message',
        sending: 'Sending...',
        success: '✓ Your message has been sent successfully. Thank you!',
        error: '✕ There was an error sending your message. Please try again.',
      },
      infoTitle: "Let's connect",
    },

    footer: 'Montevideo, Uruguay',
  },
};

export default translations;
