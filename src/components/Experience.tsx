import { useRef } from 'react'
import { COPY, type Lang } from '../data/i18n'
import { useSectionReveal } from '../lib/anim'

export default function Experience({ lang }: { lang: Lang }) {
  const ref = useRef<HTMLElement>(null)
  useSectionReveal(ref)
  const copy = COPY[lang].experience

  return (
    <section id="experience" ref={ref} className="relative px-5 pb-28 pt-20 md:px-10 md:pt-32">
      <header className="hairline-b flex items-end justify-between pb-6">
        <h2 className="display text-fg" style={{ fontSize: 'clamp(2.4rem, 7vw, 6.5rem)' }}>
          <span className="mask-line">
            <span>{copy.title}</span>
          </span>
        </h2>
        <span data-reveal className="label mb-2 shrink-0">
          {copy.label}
        </span>
      </header>

      <ul>
        {copy.items.map((item, i) => (
          <li
            key={item.role}
            data-reveal
            className="hairline-b group grid grid-cols-1 gap-2 py-8 transition-colors duration-300 md:grid-cols-12 md:items-baseline md:gap-6 md:py-10"
          >
            <span className="label md:col-span-1">{String(i + 1).padStart(2, '0')}</span>
            <h3 className="display text-xl text-fg transition-transform duration-500 group-hover:translate-x-2 md:col-span-5 md:text-3xl">
              {item.role}
            </h3>
            <span className="text-sm text-fg-3 md:col-span-3">{item.place}</span>
            <span className="label md:col-span-3 md:text-right">{item.period}</span>
            <p className="label-xs mt-1 md:col-span-11 md:col-start-2 md:mt-2">{item.note}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
