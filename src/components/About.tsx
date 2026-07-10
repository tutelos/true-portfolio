import { useRef } from 'react'
import { COPY, type Lang } from '../data/i18n'
import { useSectionReveal } from '../lib/anim'

const VALUES = ['03+', '05+', '100%']

export default function About({ lang }: { lang: Lang }) {
  const ref = useRef<HTMLElement>(null)
  useSectionReveal(ref)
  const copy = COPY[lang].about

  return (
    <section id="about" ref={ref} className="relative px-5 pb-28 pt-20 md:px-10 md:pt-32">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
        <div className="md:col-span-3">
          <span data-reveal className="label">
            {copy.label}
          </span>
        </div>

        <div className="md:col-span-9">
          <h2
            className="display text-fg-2"
            style={{ fontSize: 'clamp(1.8rem, 4.2vw, 4rem)', lineHeight: 1.05 }}
          >
            <span className="mask-line">
              <span>{copy.headline[0]}</span>
            </span>
            <span className="mask-line">
              <span className="text-fg-3">{copy.headline[1]}</span>
            </span>
            <span className="mask-line">
              <span>{copy.headline[2]}</span>
            </span>
          </h2>

          <p data-reveal className="mt-10 max-w-md text-sm leading-relaxed text-fg-3">
            {copy.text}
          </p>

          <div className="hairline-t mt-16 grid grid-cols-3">
            {VALUES.map((value, i) => (
              <div
                key={value}
                data-reveal
                data-delay={String(i * 0.1)}
                className="border-r border-line py-8 pr-6 last:border-r-0 md:py-10"
              >
                <span className="display block text-4xl text-fg md:text-6xl">{value}</span>
                <span className="label mt-3 block">{copy.numbers[i]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
