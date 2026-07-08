import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, type RefObject } from 'react'

gsap.registerPlugin(ScrollTrigger)

export { gsap, ScrollTrigger }

export const EASE = 'power3.out'

/**
 * Anima todos os elementos com [data-reveal] e .mask-line dentro da seção
 * quando ela entra na viewport. data-delay define o atraso individual.
 */
export function useSectionReveal(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((target) => {
        const delay = parseFloat(target.dataset.delay ?? '0')
        if (reduce) {
          gsap.set(target, { opacity: 1, y: 0 })
          return
        }
        gsap.to(target, {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: EASE,
          delay,
          scrollTrigger: { trigger: target, start: 'top 88%' },
        })
      })

      gsap.utils.toArray<HTMLElement>('.mask-line > span').forEach((target) => {
        const delay = parseFloat(target.dataset.delay ?? '0')
        if (reduce) {
          gsap.set(target, { y: 0 })
          return
        }
        gsap.to(target, {
          y: 0,
          duration: 1.2,
          ease: EASE,
          delay,
          scrollTrigger: { trigger: target.parentElement, start: 'top 90%' },
        })
      })
    }, el)

    return () => ctx.revert()
  }, [ref])
}
