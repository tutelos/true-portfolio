/**
 * URLs dos aplicativos hosteados para fácil linkagem e manutenção
 * Use esse arquivo como referência central para todos os links externos
 */

export const HOSTED_APPS = {
  atlas: {
    name: 'ATLAS School Hub',
    url: 'https://atlaschoolhub.netlify.app/',
    image: '/atlas.png',
    description: 'Sistema de gestão escolar com módulos de secretaria e vida acadêmica.',
  },
  atlasLanding: {
    name: 'ATLAS Landing',
    url: 'https://atlaschoolhub-landing.netlify.app/',
    image: '/atlas-landing.png',
    description: 'Página comercial com planos e formulário de negócio.',
  },
  rubiks: {
    name: 'Rubiks Landing',
    url: null,
    image: '/rubiks-landing.png',
    description: 'Landing page moderna e responsiva com foco em conversão.',
  },
  keyboard: {
    name: 'Keyboard Landing',
    url: null,
    image: '/keyboard-landing.png',
    description: 'Página de produto para um teclado mecânico premium.',
  },
  tws: {
    name: 'TWS Landing',
    url: null,
    image: '/tws-landing.png',
    description: 'Landing page de fones de ouvido sem fio.',
  },
} as const

/**
 * Auxiliar para acessar apps por tipo
 */
export function getAppUrl(appKey: keyof typeof HOSTED_APPS): string | null {
  return HOSTED_APPS[appKey].url
}

export function getAppImage(appKey: keyof typeof HOSTED_APPS): string {
  return HOSTED_APPS[appKey].image
}
