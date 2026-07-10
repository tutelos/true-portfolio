import { useEffect, useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { PROJECTS } from '../data/content'
import { gsap, useSectionReveal } from '../lib/anim'
import ProjectArt from './ProjectArt'

export default function Projects() {
  const ref = useRef<HTMLElement>(null)
  useSectionReveal(ref)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      // parallax leve nos visuais dos projetos
      gsap.utils.toArray<HTMLElement>('.project-art').forEach((art) => {
        // scale compensa o deslocamento do parallax para não expor as bordas
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
              <span>Selected Work</span>
            </span>
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-fg-3 md:text-base">
            Projetos recentes que demonstram foco em design de produto, performance e experiência do usuário.
          </p>
        </div>
        <span data-reveal className="label mb-2 shrink-0">
          01 — 05
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
              className={`hairline-b group transition-all duration-300 ${isLive ? 'hover:bg-white/[0.02]' : ''}`}
            >
              <Tag
                {...linkProps}
                className={`grid w-full grid-cols-1 gap-8 py-12 md:grid-cols-12 md:gap-10 md:py-16 ${isLive ? 'cursor-pointer' : ''}`}
              >
                {/* meta esquerda */}
                <div className="order-2 flex flex-col justify-between md:order-1 md:col-span-4">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="label">{project.index}</span>
                      {isLive && (
                        <span className="label-xs inline-block rounded-full bg-green-500/20 px-2 py-1 text-green-400">
                          LIVE
                        </span>
                      )}
                      {!isLive && (
                        <span className="label-xs inline-block rounded-full bg-white/10 px-2 py-1 text-white/40">
                          OFFLINE
                        </span>
                      )}
                    </div>
                    <h3 className={`display mt-4 text-3xl transition-transform duration-500 md:text-5xl ${
                      isLive ? 'text-fg group-hover:translate-x-2' : 'text-fg-2'
                    }`}>
                      {project.name}
                    </h3>
                    <p className="mt-5 max-w-sm text-sm leading-relaxed text-fg-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-10">
                    <div className="flex flex-wrap gap-x-6 gap-y-2">
                      <span className="label">{project.category}</span>
                      <span className="label text-white/30">{project.year}</span>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="label-xs rounded border border-white/10 px-2 py-1 text-white/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    {isLive && (
                      <span className="mt-8 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-fg transition-transform duration-300 group-hover:gap-3 group-hover:translate-x-1">
                        Open Project
                        <ArrowUpRight
                          size={13}
                          className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </span>
                    )}
                    {!isLive && (
                      <span className="mt-8 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-white/25">
                        Coming Soon
                      </span>
                    )}
                  </div>
                </div>

                {/* visual */}
                <div className="order-1 aspect-[16/9] self-start overflow-hidden border border-white/[0.07] transition-all duration-500 group-hover:border-white/20 md:order-2 md:col-span-8">
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
