import { useRef } from 'react'
import { useSectionReveal } from '../lib/anim'

const NUMBERS = [
  { value: '03+', label: 'Years' },
  { value: '05+', label: 'Projects' },
  { value: '100%', label: 'Passion' },
]

export default function About() {
  const ref = useRef<HTMLElement>(null)
  useSectionReveal(ref)

  return (
    <section id="about" ref={ref} className="relative px-5 pb-28 pt-20 md:px-10 md:pt-32">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
        <div className="md:col-span-3">
          <span data-reveal className="label">
            About — 02
          </span>
        </div>

        <div className="md:col-span-9">
          <h2
            className="display text-fg-2"
            style={{ fontSize: 'clamp(1.8rem, 4.2vw, 4rem)', lineHeight: 1.05 }}
          >
            <span className="mask-line">
              <span>Desenvolvedor web focado em</span>
            </span>
            <span className="mask-line">
              <span>
                interfaces <span className="text-fg-3">claras, rápidas</span>
              </span>
            </span>
            <span className="mask-line">
              <span>
                e <span className="text-fg-3">prontas para produção.</span>
              </span>
            </span>
          </h2>

          <p data-reveal className="mt-10 max-w-md text-sm leading-relaxed text-fg-3">
            Desde 2023 construindo para a web — de landing pages de alta conversão a
            um SaaS completo de gestão escolar. Design e engenharia tratados como uma
            coisa só.
          </p>

          <div className="hairline-t mt-16 grid grid-cols-3">
            {NUMBERS.map((num, i) => (
              <div
                key={num.label}
                data-reveal
                data-delay={String(i * 0.1)}
                className="border-r border-white/[0.08] py-8 pr-6 last:border-r-0 md:py-10"
              >
                <span className="display block text-4xl text-fg md:text-6xl">{num.value}</span>
                <span className="label mt-3 block">{num.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
