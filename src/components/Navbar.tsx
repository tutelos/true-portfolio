import { useEffect, useState } from 'react'
import { Languages, Moon, Sun } from 'lucide-react'
import { COPY, NAV_COPY, type Lang, type Theme } from '../data/i18n'
import { scrollToSection } from '../lib/scroll'

type NavbarProps = {
  lang: Lang
  theme: Theme
  onToggleLang: () => void
  onToggleTheme: () => void
}

export default function Navbar({ lang, theme, onToggleLang, onToggleTheme }: NavbarProps) {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)
  const nav = NAV_COPY[lang]
  const copy = COPY[lang]

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
          AS<span className="text-fg-3">&reg;</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
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

        <div className="flex items-center gap-2 md:gap-3">
          <div className="hidden items-center border border-line md:flex">
            <button
              type="button"
              aria-label={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
              onClick={onToggleTheme}
              className="inline-flex h-8 items-center gap-2 border-r border-line px-3 font-mono text-[10px] uppercase tracking-[0.18em] text-fg-2 transition-colors duration-300 hover:bg-fg hover:text-bg"
            >
              {theme === 'dark' ? <Sun size={12} /> : <Moon size={12} />}
              {theme === 'dark' ? 'Light' : 'Dark'}
            </button>
            <button
              type="button"
              aria-label={lang === 'pt' ? 'Switch to English' : 'Mudar para portugues'}
              onClick={onToggleLang}
              className="inline-flex h-8 items-center gap-2 px-3 font-mono text-[10px] uppercase tracking-[0.18em] text-fg-2 transition-colors duration-300 hover:bg-fg hover:text-bg"
            >
              <Languages size={12} />
              {lang === 'pt' ? 'EN' : 'PT'}
            </button>
          </div>
          <a
            href="#contact"
            onClick={go('#contact')}
            className="hidden border border-line px-5 py-2 font-mono text-[10px] tracking-[0.18em] uppercase text-fg transition-all duration-300 hover:bg-fg hover:text-bg md:inline-block"
          >
            {copy.navCta}
          </a>
          <button
            type="button"
            aria-label={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
            onClick={onToggleTheme}
            className="inline-flex h-9 w-9 items-center justify-center border border-line text-fg-2 transition-colors duration-300 hover:bg-fg hover:text-bg md:hidden"
          >
            {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
          </button>
          <button
            type="button"
            aria-label={lang === 'pt' ? 'Switch to English' : 'Mudar para portugues'}
            onClick={onToggleLang}
            className="inline-flex h-9 w-9 items-center justify-center border border-line font-mono text-[10px] uppercase tracking-[0.12em] text-fg-2 transition-colors duration-300 hover:bg-fg hover:text-bg md:hidden"
          >
            {lang === 'pt' ? 'EN' : 'PT'}
          </button>
          <button
            type="button"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] md:hidden"
          >
            <span
              className={`block h-px w-5 bg-fg transition-transform duration-300 ${open ? 'translate-y-[3px] rotate-45' : ''}`}
            />
            <span
              className={`block h-px w-5 bg-fg transition-transform duration-300 ${open ? '-translate-y-[3px] -rotate-45' : ''}`}
            />
          </button>
        </div>
      </nav>

      {open && (
        <ul className="hairline-t flex flex-col gap-1 px-5 pb-6 pt-4 md:hidden">
          {nav.map((item) => (
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
