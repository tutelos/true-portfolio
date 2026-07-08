import { useEffect, useState } from 'react'
import { NAV } from '../data/content'
import { scrollToSection } from '../lib/scroll'

export default function Navbar() {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (hash: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    setOpen(false)
    scrollToSection(hash)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${solid || open ? 'nav-solid' : ''}`}
    >
      <nav className="flex items-center justify-between px-5 py-4 md:px-10 md:py-5">
        <a
          href="#home"
          onClick={go('#home')}
          className="font-display text-[13px] font-bold tracking-[0.22em] text-fg"
        >
          AS<span className="text-fg-3">®</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <li key={item.hash}>
              <a
                href={item.hash}
                onClick={go(item.hash)}
                className="u-link label !text-[10px] text-fg-2 transition-colors hover:text-fg"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            onClick={go('#contact')}
            className="hidden border border-white/20 px-5 py-2 font-mono text-[10px] tracking-[0.18em] uppercase text-fg transition-all duration-300 hover:bg-white hover:text-black md:inline-block"
          >
            Let's Talk
          </a>
          <button
            type="button"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] md:hidden"
          >
            <span
              className={`block h-px w-5 bg-white transition-transform duration-300 ${open ? 'translate-y-[3px] rotate-45' : ''}`}
            />
            <span
              className={`block h-px w-5 bg-white transition-transform duration-300 ${open ? '-translate-y-[3px] -rotate-45' : ''}`}
            />
          </button>
        </div>
      </nav>

      {open && (
        <ul className="hairline-t flex flex-col gap-1 px-5 pb-6 pt-4 md:hidden">
          {NAV.map((item) => (
            <li key={item.hash}>
              <a
                href={item.hash}
                onClick={go(item.hash)}
                className="block py-2 font-display text-2xl font-bold uppercase tracking-tight text-fg-2"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
