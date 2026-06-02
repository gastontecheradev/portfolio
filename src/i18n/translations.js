const translations = {
  es: {
    nav: {
      projects: 'Proyectos',
      about: 'Sobre mí',
      skills: 'Tecnologías',
      contact: 'Contacto',
    },

    hero: {
      badge: 'Abierto a oportunidades',
      name: 'Gastón',
      lastName: 'Techera',
      role: 'Desarrollador .NET',
      desc: 'Desarrollo aplicaciones web en .NET que traducen requerimientos de negocio en soluciones claras, mantenibles y escalables',
      cta: 'Ver proyectos',
      ctaOutline: 'Contactame',
    },

    projects: {
      number: '01',
      title: 'Proyectos destacados',
      items: [
        {
          title: 'Pasear por Pasear',
          desc: 'Plataforma web para un emprendimiento de turismo en Montevideo. Desarrollé el sistema de reservas de tours, panel de administración y suscripción a newsletter. ASP.NET Core MVC + SQL Server.',
          tech: 'ASP.NET Core · C# · SQL Server',
          linkLabel: 'Ver proyecto',
        },
        {
          title: 'Prep Diplomacia',
          desc: 'Plafatorma educativa online para el Concurso de Ingreso al Servicio Exterior de Uruguay. Cursos, sistema de pagos, gestión de usuarios.',
          tech: 'ASP.NET Core · C# · SQL Server',
          linkLabel: 'Ver proyecto',
        },
        {
          title: 'Gestion Pro',
          desc: 'Sistema de gestión empresarial con control de inventario y productos. Construí backend, modelo de datos y la interfaz de administración.',
          tech: 'ASP.NET Core · C# · SQL Server',
          linkLabel: 'Ver proyecto',
        },
        /*{
          title: 'Nova Fade Barbería',
          desc: 'Sitio con sistema de agenda online para una barbería en Montevideo. Implementé la lógica de reservas, gestión de turnos y panel del negocio.',
          tech: 'ASP.NET Core · C# · SQL Server',
          linkLabel: 'Ver proyecto',
        },*/
      ],
    },

    about: {
      number: '02',
      title: 'Sobre mí',
      text: [
        'Soy desarrollador <strong>.NET</strong> enfocado en aplicaciones web con <strong>ASP.NET Core, C#, SQL Server, React</strong>, entre otras tecnologías. Me interesa el desarrollo guiado por buenas prácticas, arquitectura limpia y patrones de diseño.',
        'He desarrollado <strong>proyectos reales para emprendimientos y personas</strong>, llevándolos de punta a punta: relevamiento, desarrollo, base de datos y despliegue. Eso me dio experiencia entregando software funcional, más allá del desarrollo de código.',
        'Actualmente curso <strong>Ingeniería en Computación</strong> y sigo formándome de forma constante para construir productos más mantenibles y escalables.',
      ],
      photoAlt: 'Foto de perfil de Gastón Techera, desarrollador .NET',
    },

    skills: {
      number: '03',
      title: 'Tecnologías',
      groups: [
        { title: 'Frontend', tags: ['JavaScript', 'React', 'HTML5', 'CSS3', 'Tailwind', 'Bootstrap'] },
        { title: 'Backend', tags: ['C#', 'ASP.NET', 'SQL Server', 'Entity Framework', 'Node.js'] },
        { title: 'Programación', tags: ['Estructuras de Datos', 'Algoritmos', 'Arquitectura de Software'] },
      ],
    },

    contact: {
      number: '04',
      title: 'Contacto',
      intro: 'Si querés conversar sobre una oportunidad laboral, colaboración o consulta técnica, no dudes en contactarte a través de este formulario.',
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
      infoTitle: 'Seguí mi trabajo',
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
      badge: 'Open to opportunities',
      name: 'Gastón',
      lastName: 'Techera',
      role: '.NET Developer',
      desc: 'I build .NET web applications that turn business requirements into clear, maintainable, and scalable solutions.',
      cta: 'View projects',
      ctaOutline: 'Contact me',
    },

    projects: {
      number: '01',
      title: 'Featured Projects',
      items: [
        {
          title: 'Pasear por Pasear',
          desc: 'Web platform for a tourism business in Montevideo. Built the tour booking system, admin panel and newsletter subscription.',
          tech: 'ASP.NET Core · C# · SQL Server',
          linkLabel: 'View project',
        },
        {
          title: 'Prep Diplomacia',
          desc: 'Online learning platform for Uruguay’s Foreign Service Entrance Exam, featuring courses, payment processing, and user management.',
          tech: 'ASP.NET Core · C# · SQL Server',
          linkLabel: 'Ver proyecto',
        },
        {
          title: 'Gestion Pro',
          desc: 'Business management system with inventory and product control. Built the backend, data model and admin interface.',
          tech: 'ASP.NET Core · C# · SQL Server',
          linkLabel: 'View project',
        },
        {
          title: 'Nova Fade Barbería',
          desc: 'Website with online booking for a barbershop in Montevideo. Implemented the appointment logic, schedule management and business admin panel.',
          tech: 'ASP.NET Core · C# · SQL Server',
          linkLabel: 'View project',
        },
      ],
    },

    about: {
      number: '02',
      title: 'About Me',
      text: [
        "I'm a <strong>.NET developer</strong> focused on web applications with <strong>ASP.NET Core, C#, SQL Server, React</strong>, among other technologies. I work guided by best practices, clean architecture and design patterns.",
        "I've built <strong>real projects for small businesses and individuals</strong>, taking them end to end: requirements, development, database and deployment. That gave me experience shipping functional software, beyond software development.",
        "I'm currently pursuing a degree in <strong>Computer Engineering</strong> and continue learning to build more maintainable and scalable products.",
      ],
      photoAlt: 'Profile photo of Gastón Techera, .NET developer',
    },

    skills: {
      number: '03',
      title: 'Technologies',
      groups: [
        { title: 'Frontend', tags: ['JavaScript', 'React', 'HTML5', 'CSS3', 'Tailwind', 'Bootstrap'] },
        { title: 'Backend', tags: ['C#', 'ASP.NET', 'SQL Server', 'Entity Framework', 'Node.js'] },
        { title: 'Coding', tags: ['Data Structures', 'Algorithms', 'Software Architecture'] },
      ],
    },

    contact: {
      number: '04',
      title: 'Contact',
      intro: "If you’d like to discuss a job opportunity, collaboration, or technical inquiry, feel free to contact me through this form.",
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
      infoTitle: "Follow my work",
    },

    footer: 'Montevideo, Uruguay',
  },
};

export default translations;
