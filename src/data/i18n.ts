export type Lang = 'pt' | 'en'
export type Theme = 'dark' | 'light'

export const NAV_COPY = {
  pt: [
    { label: 'Home', hash: '#home' },
    { label: 'Projetos', hash: '#projects' },
    { label: 'Sobre', hash: '#about' },
    { label: 'Experiencia', hash: '#experience' },
    { label: 'Contato', hash: '#contact' },
  ],
  en: [
    { label: 'Home', hash: '#home' },
    { label: 'Projects', hash: '#projects' },
    { label: 'About', hash: '#about' },
    { label: 'Experience', hash: '#experience' },
    { label: 'Contact', hash: '#contact' },
  ],
} satisfies Record<Lang, { label: string; hash: string }[]>

export const COPY = {
  pt: {
    navCta: 'Falar',
    hero: {
      title: ['Arthur', 'Web', 'Developer'],
      intro: 'Construo interfaces web claras, rapidas e prontas para producao.',
      specs: {
        location: 'Brazil',
        experience: 'Since 2023',
        stack: 'React - JS - Python',
        available: 'Freelance',
        email: 'Contact',
      },
      scroll: 'Scroll to explore',
    },
    projects: {
      title: 'Selected Work',
      intro:
        'Projetos recentes que demonstram foco em design de produto, performance e experiencia do usuario.',
      open: 'Open Project',
      soon: 'Coming Soon',
      descriptions: [
        'Sistema de gestao escolar com modulos de secretaria e vida academica.',
        'Pagina comercial com planos e formulario de negocio.',
        'Landing page moderna e responsiva com foco em conversao.',
        'Pagina de produto para um teclado mecanico premium.',
        'Landing page de fones de ouvido sem fio.',
      ],
    },
    about: {
      label: 'About - 02',
      headline: [
        'Desenvolvedor web focado em',
        'interfaces claras, rapidas',
        'e prontas para producao.',
      ],
      text:
        'Desde 2023 construindo para a web, de landing pages de alta conversao a um SaaS completo de gestao escolar. Design e engenharia tratados como uma coisa so.',
      numbers: ['Years', 'Projects', 'Passion'],
    },
    stack: {
      label: 'Stack - 04',
      text: 'Ferramentas tratadas como especificacoes tecnicas. Sem badges, sem ruido.',
    },
    experience: {
      title: 'Experience',
      label: 'Timeline',
      items: [
        {
          role: 'Desenvolvedor Web Freelance',
          place: 'Independente',
          period: '2025 - Now',
          note: 'Landing pages e interfaces sob medida.',
        },
        {
          role: 'Co-desenvolvedor',
          place: 'ATLAS School Hub',
          period: '2025 - Now',
          note: 'Plataforma SaaS de gestao escolar.',
        },
        {
          role: 'Desenvolvedor Autodidata',
          place: 'Aprendizado continuo',
          period: '2023 - Now',
          note: 'Fundamentos, web moderna e produto.',
        },
      ],
    },
    contact: {
      label: 'Contact - 05',
      response: 'RESPONSE < 24H',
      headline: ["Let's Build", 'Something', 'Amazing'],
      cta: 'Get in touch',
    },
    footer: 'Design & Code - AS',
  },
  en: {
    navCta: "Let's Talk",
    hero: {
      title: ['Arthur', 'Web', 'Developer'],
      intro: 'I build clear, fast web interfaces ready for production.',
      specs: {
        location: 'Brazil',
        experience: 'Since 2023',
        stack: 'React - JS - Python',
        available: 'Freelance',
        email: 'Contact',
      },
      scroll: 'Scroll to explore',
    },
    projects: {
      title: 'Selected Work',
      intro: 'Recent projects shaped around product design, performance, and user experience.',
      open: 'Open Project',
      soon: 'Coming Soon',
      descriptions: [
        'School management system with office and academic life modules.',
        'Commercial landing page with pricing and business inquiry flow.',
        'Modern responsive landing page focused on conversion.',
        'Premium mechanical keyboard product page.',
        'Wireless earbuds landing page.',
      ],
    },
    about: {
      label: 'About - 02',
      headline: ['Web developer focused on', 'clear, fast interfaces', 'ready for production.'],
      text:
        'Building for the web since 2023, from high-conversion landing pages to a complete school management SaaS. Design and engineering treated as one discipline.',
      numbers: ['Years', 'Projects', 'Passion'],
    },
    stack: {
      label: 'Stack - 04',
      text: 'Tools treated like technical specifications. No badges, no noise.',
    },
    experience: {
      title: 'Experience',
      label: 'Timeline',
      items: [
        {
          role: 'Freelance Web Developer',
          place: 'Independent',
          period: '2025 - Now',
          note: 'Custom landing pages and interfaces.',
        },
        {
          role: 'Co-developer',
          place: 'ATLAS School Hub',
          period: '2025 - Now',
          note: 'School management SaaS platform.',
        },
        {
          role: 'Self-taught Developer',
          place: 'Continuous learning',
          period: '2023 - Now',
          note: 'Fundamentals, modern web, and product thinking.',
        },
      ],
    },
    contact: {
      label: 'Contact - 05',
      response: 'RESPONSE < 24H',
      headline: ["Let's Build", 'Something', 'Amazing'],
      cta: 'Get in touch',
    },
    footer: 'Design & Code - AS',
  },
} satisfies Record<Lang, unknown>
