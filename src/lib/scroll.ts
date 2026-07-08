import Lenis from 'lenis'

let lenis: Lenis | null = null

export function setLenis(instance: Lenis | null) {
  lenis = instance
}

export function scrollToSection(hash: string) {
  const target = document.querySelector(hash)
  if (!target) return
  if (lenis) {
    lenis.scrollTo(target as HTMLElement, { offset: 0, duration: 1.4 })
  } else {
    target.scrollIntoView({ behavior: 'smooth' })
  }
}
