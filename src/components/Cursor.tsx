import { useEffect, useRef } from 'react'
import { gsap } from '../lib/anim'

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    const dot = dotRef.current!
    const ring = ringRef.current!

    const setDotX = gsap.quickSetter(dot, 'x', 'px')
    const setDotY = gsap.quickSetter(dot, 'y', 'px')
    const ringX = gsap.quickTo(ring, 'x', { duration: 0.35, ease: 'power3.out' })
    const ringY = gsap.quickTo(ring, 'y', { duration: 0.35, ease: 'power3.out' })

    const onMove = (e: MouseEvent) => {
      setDotX(e.clientX)
      setDotY(e.clientY)
      ringX(e.clientX)
      ringY(e.clientY)
    }

    const onOver = (e: MouseEvent) => {
      const interactive = (e.target as HTMLElement).closest('a, button, [role="button"]')
      ring.style.transform += ''
      gsap.to(ring, {
        scale: interactive ? 1.8 : 1,
        opacity: interactive ? 0.9 : 1,
        duration: 0.3,
        ease: 'power3.out',
      })
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseover', onOver, { passive: true })
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  )
}
