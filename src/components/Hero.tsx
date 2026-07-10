import { useEffect, useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { LINKS } from '../data/content'
import { gsap, EASE } from '../lib/anim'

type Spec =
  | { label: string; value: string }
  | { label: string; value: string; href: string }

const SPECS: Spec[] = [
  { label: 'Location', value: 'Brazil' },
  { label: 'Experience', value: 'Since 2023' },
  { label: 'Stack', value: 'React · JS · Python' },
  { label: 'Available', value: 'Freelance' },
  { label: 'GitHub', value: 'tutelos', href: LINKS.github },
  { label: 'Email', value: 'Contact', href: LINKS.email },
]

export default function Hero() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const ctx = gsap.context(() => {
      if (reduce) {
        gsap.set('.mask-line > span, [data-reveal]', { y: 0, opacity: 1 })
        return
      }
      const tl = gsap.timeline({ delay: 0.15 })
      tl.to('.hero-title .mask-line > span', {
        y: 0,
        duration: 1.3,
        ease: EASE,
        stagger: 0.12,
      })
        .to(
          '[data-reveal]',
          { opacity: 1, y: 0, duration: 1, ease: EASE, stagger: 0.08 },
          '-=0.7',
        )

      // parallax sutil nos rótulos técnicos do fundo
      gsap.to('.hero-deco', {
        yPercent: -30,
        ease: 'none',
        scrollTrigger: { trigger: el, start: 'top top', end: 'bottom top', scrub: true },
      })
    }, el)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex min-h-svh flex-col justify-end overflow-hidden px-5 pb-10 pt-28 md:px-10 md:pb-14"
    >
      {/* rótulos técnicos de fundo */}
      <div className="hero-deco pointer-events-none absolute inset-0" aria-hidden="true">
        <span className="label-xs absolute left-5 top-24 md:left-10">SYSTEM — REV 2.4</span>
        <span className="label-xs absolute right-5 top-24 md:right-10">
          STATUS <span className="text-white/40">● ONLINE</span>
        </span>
        <span className="label-xs absolute left-1/2 top-24 hidden -translate-x-1/2 md:block">
          GRID / ALPHA
        </span>
        <span className="label-xs absolute right-5 top-1/3 hidden md:right-10 md:block">
          23°33′S — 46°38′W
        </span>
        <div className="scanline" />
      </div>

      <div className="relative grid grid-cols-1 items-end gap-10 lg:grid-cols-12">
        {/* título gigante */}
        <div className="hero-title lg:col-span-9">
          <h1 className="display text-fg" style={{ fontSize: 'clamp(3.4rem, 12.5vw, 12.5rem)' }}>
            <span className="mask-line">
              <span>Arthur</span>
            </span>
            <span className="mask-line">
              <span className="text-fg-3">Web</span>
            </span>
            <span className="mask-line">
              <span>Developer</span>
            </span>
          </h1>
          <p data-reveal className="mt-8 max-w-xs text-sm leading-relaxed text-fg-3">
            Construo interfaces web claras, rápidas e prontas para produção.
          </p>
        </div>

        {/* especificações técnicas */}
        <aside className="lg:col-span-3">
          <ul className="hairline-t">
            {SPECS.map((spec) => (
              <li
                key={spec.label}
                data-reveal
                className="hairline-b flex items-baseline justify-between gap-6 py-3"
              >
                <span className="label">{spec.label}</span>
                {'href' in spec ? (
                  <a
                    href={spec.href}
                    target={spec.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={spec.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                    className="group/profile inline-flex items-center gap-1.5 border-b border-white/35 pb-0.5 font-mono text-[11px] tracking-wide text-fg transition-colors duration-300 hover:border-white hover:text-white"
                    aria-label={`Abrir ${spec.label}`}
                  >
                    {spec.value}
                    <ArrowUpRight
                      size={11}
                      className="transition-transform duration-300 group-hover/profile:-translate-y-0.5 group-hover/profile:translate-x-0.5"
                    />
                  </a>
                ) : (
                  <span className="font-mono text-[11px] tracking-wide text-fg-2">
                    {spec.value}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </aside>
      </div>

      <div
        data-reveal
        data-delay="0.9"
        className="relative mt-12 flex items-center justify-between"
      >
        <span className="label-xs">Scroll to explore</span>
        <span className="label-xs">001 / 007</span>
      </div>
    </section>
  )
}
