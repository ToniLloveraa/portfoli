const SITE = {
  name: "Toni Llovera",
  role: "Gameplay Programmer",
  intro: "Programo sistemas de juego, herramientas y mecánicas basadas en físicas.",
  cv: "assets/CV.pdf",
  photo: "",
  github: "https://github.com/ToniLloveraa",
  linkedin: "https://www.linkedin.com/in/tonilloveraroca/",
  repo: "https://github.com/tuusuario/portfolio", // para STAR / FORK (vacío = oculto)

  stats: [
    { title: "Experiencia", value: "+1 año" },
    { title: "Proyectos", value: "5 completados" },
    { title: "Universidad", value: "Desarrollo de Videojuegos" }
  ],

  experience: [
    {
      dates: "Oct 2022 - Jul 2023",
      title: "Game Developer",
      company: "Nombre Empresa",
      companyUrl: "https://example.com",
      description: "Desarrollo de juegos en colaboración con arte y diseño: implementación de funcionalidades, mantenimiento de código y resolución de incidencias.",
      tags: ["JavaScript", "Phaser", "Jira"],
      link: { label: "Ver juego", url: "https://example.com" }
    },
    {
      dates: "Jun 2022 - Oct 2022",
      title: "Game Developer Intern",
      company: "Nombre Empresa",
      companyUrl: "https://example.com",
      description: "Desarrollo de herramientas internas para reducir tareas manuales y gestión del sistema de localización.",
      tags: ["Python", "JSON"]
    }
  ],

  skills: [
    { group: "Lenguajes", items: ["C++", "C#", "JavaScript", "Python"] },
    { group: "Motores y librerías", items: ["Unity", "OpenGL", "SDL2", "Phaser"] },
    { group: "Herramientas", items: ["Git", "Jira", "Visual Studio", "Perforce"] }
  ],

  projects: [
    {
      slug: "Son-Of-Ithaca",
      title: "Son Of Ithaca",
      summary: "Action RPG de exploración y puzles. Liderazgo técnico y desarrollo de herramientas.",
      tags: ["Lead Programmer", "Motor propio"],
      description: "Aquí va la descripción larga del proyecto: qué hiciste, qué retos técnicos tuvo y qué aprendiste.",
      highlights: ["Sistema de combate", "Editor de niveles", "Flujo de trabajo del equipo"],
      links: [{ label: "GitHub", url: "https://github.com/tuusuario" }, { label: "itch.io", url: "https://itch.io" }],
      video: "https://www.youtube.com/watch?v=PYzuc0fsHpM",                  // ej: "https://www.youtube.com/embed/XXXXXXXXXXX"
      images: []                  // ej: ["assets/p1-1.png", "assets/p1-2.png"]
    },
    {
      slug: "Estik",
      title: "Estik",
      summary: "Cooperativo de puzles y plataformas con físicas soft-body.",
      tags: ["Unity", "C#"],
      description: "Descripción larga del segundo proyecto.",
      highlights: [],
      links: [],
      video: "https://www.youtube.com/watch?v=aGGM1yTLy6A",
      images: []
    }
  ]
};
