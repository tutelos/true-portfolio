import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap, ScrollTrigger } from './lib/anim'
import { setLenis } from './lib/scroll'
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
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
