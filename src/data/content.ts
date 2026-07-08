export const LINKS = {
  github: 'https://github.com/tutelos',
  email: 'mailto:seu-email@exemplo.com',
}

export type Project = {
  index: string
  name: string
  category: string
  year: string
  stack: string[]
  description: string
  url: string | null
  /** identificador do visual abstrato do card */
  art: 'atlas' | 'atlas-landing' | 'rubiks' | 'keyboard' | 'tws'
}

export const PROJECTS: Project[] = [
  {
    index: '01',
    name: 'ATLAS School Hub',
    category: 'SaaS · Product',
    year: '2025',
    stack: ['React', 'JavaScript', 'CSS'],
    description:
      'Sistema de gestão escolar com módulos de secretaria e vida acadêmica.',
    url: 'https://atlaschoolhub.netlify.app/',
    art: 'atlas',
  },
  {
    index: '02',
    name: 'ATLAS — Landing',
    category: 'Landing Page',
    year: '2025',
    stack: ['HTML', 'CSS', 'JavaScript'],
    description: 'Página comercial com planos e formulário de negócio.',
    url: 'https://atlaschoolhub-landing.netlify.app/',
    art: 'atlas-landing',
  },
  {
    index: '03',
    name: 'Rubiks Landing',
    category: 'Landing Page',
    year: '2025',
    stack: ['HTML', 'CSS', 'JavaScript'],
    description: 'Landing page moderna e responsiva com foco em conversão.',
    url: null,
    art: 'rubiks',
  },
  {
    index: '04',
    name: 'Keyboard Landing',
    category: 'Landing Page',
    year: '2025',
    stack: ['HTML', 'CSS', 'JavaScript'],
    description: 'Página de produto para um teclado mecânico premium.',
    url: null,
    art: 'keyboard',
  },
  {
    index: '05',
    name: 'TWS Landing',
    category: 'Landing Page',
    year: '2025',
    stack: ['HTML', 'CSS', 'JavaScript'],
    description: 'Landing page de fones de ouvido sem fio.',
    url: null,
    art: 'tws',
  },
]

export const STACK: { name: string; type: string }[] = [
  { name: 'HTML', type: 'Markup' },
  { name: 'CSS', type: 'Styling' },
  { name: 'JavaScript', type: 'Language' },
  { name: 'React', type: 'Library' },
  { name: 'Python', type: 'Language' },
  { name: 'Git / GitHub', type: 'Workflow' },
  { name: 'Figma', type: 'Design' },
  { name: 'Netlify', type: 'Deploy' },
]

export const EXPERIENCE: {
  index: string
  role: string
  place: string
  period: string
  note: string
}[] = [
  {
    index: '01',
    role: 'Desenvolvedor Web Freelance',
    place: 'Independente',
    period: '2025 — Now',
    note: 'Landing pages e interfaces sob medida.',
  },
  {
    index: '02',
    role: 'Co-desenvolvedor',
    place: 'ATLAS School Hub',
    period: '2025 — Now',
    note: 'Plataforma SaaS de gestão escolar.',
  },
  {
    index: '03',
    role: 'Desenvolvedor Autodidata',
    place: 'Aprendizado contínuo',
    period: '2023 — Now',
    note: 'Fundamentos, web moderna e produto.',
  },
]

export const NAV = [
  { label: 'Home', hash: '#home' },
  { label: 'Projects', hash: '#projects' },
  { label: 'About', hash: '#about' },
  { label: 'Experience', hash: '#experience' },
  { label: 'Contact', hash: '#contact' },
]
