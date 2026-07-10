import type { Project } from '../data/content'

export default function ProjectArt({
  art,
  name,
  image,
}: {
  art: Project['art']
  name: string
  image: string | null | undefined
}) {
  return (
    <div
      role="img"
      aria-label={`Visual do projeto ${name}`}
      className="relative h-full w-full overflow-hidden bg-bg-3"
    >
      {image && (
        <div className="project-image absolute inset-0 h-full w-full">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                'linear-gradient(to right, var(--color-line) 1px, transparent 1px), linear-gradient(to bottom, var(--color-line) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />
          <img src={image} alt={name} className="relative z-10 h-full w-full object-cover" />
        </div>
      )}

      {!image && (
        <div
          className="absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage:
              'linear-gradient(to right, var(--color-line) 1px, transparent 1px), linear-gradient(to bottom, var(--color-line) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      )}

      {!image && (
        <>
          {art === 'atlas' && (
            <>
              <span className="display absolute -bottom-[18%] -right-[2%] select-none text-[38vw] leading-none text-fg/[0.045] md:text-[16vw]">
                A
              </span>
              <div className="absolute left-[10%] top-[18%] h-24 w-24 border border-fg/15 md:h-36 md:w-36">
                <div className="absolute inset-3 border border-fg/10" />
                <div className="absolute inset-6 border border-fg/[0.06]" />
              </div>
              <span className="label-xs absolute left-[10%] top-[12%]">MODULE / 04</span>
            </>
          )}

          {art === 'atlas-landing' && (
            <>
              <div className="absolute left-[12%] right-[12%] top-[22%] space-y-4">
                <div className="h-px w-3/4 bg-fg/20" />
                <div className="h-px w-1/2 bg-fg/12" />
                <div className="h-px w-2/3 bg-fg/12" />
                <div className="mt-8 h-9 w-28 border border-fg/20" />
              </div>
              <span className="display absolute -bottom-[14%] left-[8%] select-none text-[30vw] leading-none text-fg/[0.04] md:text-[12vw]">
                LP
              </span>
            </>
          )}

          {art === 'rubiks' && (
            <div className="absolute left-1/2 top-1/2 grid -translate-x-1/2 -translate-y-1/2 grid-cols-3 gap-1.5">
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={i}
                  className="h-10 w-10 border border-fg/15 md:h-14 md:w-14"
                  style={{ opacity: 0.35 + ((i * 7) % 10) * 0.06 }}
                />
              ))}
            </div>
          )}

          {art === 'keyboard' && (
            <div className="absolute left-1/2 top-1/2 w-[70%] -translate-x-1/2 -translate-y-1/2 space-y-1.5">
              {[10, 9, 8, 4].map((keys, row) => (
                <div key={row} className="flex gap-1.5">
                  {Array.from({ length: keys }).map((_, i) => (
                    <div
                      key={i}
                      className={`h-8 border border-fg/15 md:h-10 ${
                        row === 3 && i === 1 ? 'flex-[4]' : 'flex-1'
                      }`}
                    />
                  ))}
                </div>
              ))}
            </div>
          )}

          {art === 'tws' && (
            <>
              <div className="absolute left-[32%] top-1/2 h-20 w-20 -translate-y-1/2 rounded-full border border-fg/20 md:h-28 md:w-28">
                <div className="absolute inset-4 rounded-full border border-fg/10" />
              </div>
              <div className="absolute right-[32%] top-1/2 h-20 w-20 -translate-y-[40%] rounded-full border border-fg/20 md:h-28 md:w-28">
                <div className="absolute inset-4 rounded-full border border-fg/10" />
              </div>
              <span className="label-xs absolute bottom-[16%] left-1/2 -translate-x-1/2">
                L - R
              </span>
            </>
          )}
        </>
      )}

      {!image && (
        <>
          <span className="label-xs absolute bottom-3 left-4">FIG. {art.toUpperCase()}</span>
          <span className="label-xs absolute bottom-3 right-4">1920 x 1080</span>
        </>
      )}
    </div>
  )
}
