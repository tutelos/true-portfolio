import { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { LINKS } from '../data/content'
import { COPY, type Lang } from '../data/i18n'
import { useSectionReveal } from '../lib/anim'

export default function Contact({ lang }: { lang: Lang }) {
  const ref = useRef<HTMLElement>(null)
  useSectionReveal(ref)
  const copy = COPY[lang].contact

  return (
    <section
      id="contact"
      ref={ref}
      className="relative flex min-h-svh flex-col justify-between overflow-hidden px-5 pb-10 pt-32 md:px-10"
    >
      <div className="flex items-start justify-between">
        <span data-reveal className="label">
          {copy.label}
        </span>
        <span data-reveal className="label-xs">
          {copy.response}
        </span>
      </div>

      <div>
        <h2 className="display text-fg" style={{ fontSize: 'clamp(3rem, 10.5vw, 10.5rem)' }}>
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

        <div className="mt-14 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <a
            data-reveal
            href={LINKS.email}
            className="group inline-flex w-fit items-center gap-4 border border-line px-8 py-4 font-mono text-[11px] uppercase tracking-[0.2em] text-fg transition-all duration-300 hover:bg-fg hover:text-bg"
          >
            {copy.cta}
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>

          <ul data-reveal data-delay="0.15" className="flex gap-10">
            <li>
              <a href={LINKS.email} className="u-link label !text-[11px] text-fg-2 hover:text-fg">
                Email
              </a>
            </li>
            <li>
              <a
                href={LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="u-link label !text-[11px] text-fg-2 hover:text-fg"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
