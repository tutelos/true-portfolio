import { useEffect, useState } from 'react'
import Lenis from 'lenis'
import { gsap, ScrollTrigger } from './lib/anim'
import { setLenis } from './lib/scroll'
import type { Lang, Theme } from './data/i18n'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Experience from './components/Experience'
import Stack from './components/Stack'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'dark'
    return (localStorage.getItem('theme') as Theme | null) ?? 'dark'
  })
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window === 'undefined') return 'pt'
    return (localStorage.getItem('lang') as Lang | null) ?? 'pt'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en'
    localStorage.setItem('lang', lang)
  }, [lang])

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      document.documentElement.classList.add('no-anim')
      return
    }

    const lenis = new Lenis({ duration: 1.15, smoothWheel: true })
    setLenis(lenis)

    lenis.on('scroll', ScrollTrigger.update)
    const tick = (time: number) => lenis.raf(time * 1000)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(tick)
      lenis.destroy()
      setLenis(null)
    }
  }, [])

  return (
    <>
      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-noise" aria-hidden="true" />
      <Cursor />
      <Navbar
        lang={lang}
        theme={theme}
        onToggleLang={() => setLang((value) => (value === 'pt' ? 'en' : 'pt'))}
        onToggleTheme={() => setTheme((value) => (value === 'dark' ? 'light' : 'dark'))}
      />
      <main className="relative z-10">
        <Hero lang={lang} />
        <Projects lang={lang} />
        <About lang={lang} />
        <Experience lang={lang} />
        <Stack lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  )
}
