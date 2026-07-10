import { useRef } from 'react'
import { STACK } from '../data/content'
import { COPY, type Lang } from '../data/i18n'
import { useSectionReveal } from '../lib/anim'

export default function Stack({ lang }: { lang: Lang }) {
  const ref = useRef<HTMLElement>(null)
  useSectionReveal(ref)
  const copy = COPY[lang].stack

  return (
    <section id="stack" ref={ref} className="relative px-5 pb-28 pt-20 md:px-10 md:pt-32">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
        <div className="md:col-span-3">
          <span data-reveal className="label">
            {copy.label}
          </span>
          <p data-reveal data-delay="0.1" className="mt-6 max-w-[220px] text-sm leading-relaxed text-fg-3">
            {copy.text}
          </p>
        </div>

        <ul className="hairline-t md:col-span-9">
          {STACK.map((item, i) => (
            <li
              key={item.name}
              data-reveal
              data-delay={String(i * 0.05)}
              className="hairline-b group flex items-baseline justify-between gap-6 py-5 md:py-6"
            >
              <div className="flex items-baseline gap-6 md:gap-10">
                <span className="label-xs w-6">{String(i + 1).padStart(2, '0')}</span>
                <span className="display text-2xl text-fg-3 transition-all duration-500 group-hover:translate-x-3 group-hover:text-fg md:text-4xl">
                  {item.name}
                </span>
              </div>
              <span className="label shrink-0">{item.type}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
