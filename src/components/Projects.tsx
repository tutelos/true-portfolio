import { useEffect, useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { PROJECTS } from '../data/content'
import { COPY, type Lang } from '../data/i18n'
import { gsap, useSectionReveal } from '../lib/anim'
import ProjectArt from './ProjectArt'

export default function Projects({ lang }: { lang: Lang }) {
  const ref = useRef<HTMLElement>(null)
  useSectionReveal(ref)
  const copy = COPY[lang].projects

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.project-art').forEach((art) => {
        gsap.fromTo(
          art,
          { yPercent: -5, scale: 1.12 },
          {
            yPercent: 5,
            scale: 1.12,
            ease: 'none',
            scrollTrigger: {
              trigger: art,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          },
        )
      })
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <section id="projects" ref={ref} className="relative px-5 pb-28 pt-28 md:px-10 md:pt-40">
      <header className="hairline-b flex items-end justify-between pb-6 md:pb-10">
        <div>
          <h2 className="display text-fg" style={{ fontSize: 'clamp(2.4rem, 7vw, 6.5rem)' }}>
            <span className="mask-line">
              <span>{copy.title}</span>
            </span>
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-fg-3 md:text-base">
            {copy.intro}
          </p>
        </div>
        <span data-reveal className="label mb-2 shrink-0">
          01 - 05
        </span>
      </header>

      <ul className="space-y-0">
        {PROJECTS.map((project) => {
          const Tag = project.url ? 'a' : 'div'
          const isLive = project.url !== null
          const linkProps = project.url
            ? {
                href: project.url,
                target: '_blank',
                rel: 'noopener noreferrer',
                'aria-label': `Abrir ${project.name}`,
              }
            : {}

          return (
            <li
              key={project.index}
              data-reveal
              className={`hairline-b group transition-all duration-300 ${isLive ? 'hover:bg-fg/[0.03]' : ''}`}
            >
              <Tag
                {...linkProps}
                className={`grid w-full grid-cols-1 gap-8 py-12 md:grid-cols-12 md:gap-10 md:py-16 ${isLive ? 'cursor-pointer' : ''}`}
              >
                <div className="order-2 flex flex-col justify-between md:order-1 md:col-span-4">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="label">{project.index}</span>
                    </div>
                    <h3
                      className={`display mt-4 text-3xl transition-transform duration-500 md:text-5xl ${
                        isLive ? 'text-fg group-hover:translate-x-2' : 'text-fg-2'
                      }`}
                    >
                      {project.name}
                    </h3>
                    <p className="mt-5 max-w-sm text-sm leading-relaxed text-fg-3">
                      {copy.descriptions[Number(project.index) - 1] ?? project.description}
                    </p>
                  </div>

                  <div className="mt-10">
                    <div className="flex flex-wrap gap-x-6 gap-y-2">
                      <span className="label">{project.category}</span>
                      <span className="label text-fg-3">{project.year}</span>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="label-xs rounded border border-line px-2 py-1 text-fg-3"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    {isLive && (
                      <span className="mt-8 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-fg transition-transform duration-300 group-hover:gap-3 group-hover:translate-x-1">
                        {copy.open}
                        <ArrowUpRight
                          size={13}
                          className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </span>
                    )}
                    {!isLive && (
                      <span className="mt-8 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-fg-3">
                        {copy.soon}
                      </span>
                    )}
                  </div>
                </div>

                <div className="order-1 aspect-[16/9] self-start overflow-hidden border border-line transition-all duration-500 group-hover:border-fg/25 md:order-2 md:col-span-8">
                  <div className="project-art h-full w-full">
                    <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]">
                      <ProjectArt art={project.art} name={project.name} image={project.image} />
                    </div>
                  </div>
                </div>
              </Tag>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
