import { useEffect } from 'react'

/**
 * Attaches an IntersectionObserver to all .fade-in elements
 * and adds the "show" class when they enter the viewport.
 * Call this hook once inside a page component.
 */
export default function useFadeIn(deps = []) {
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in')
    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show')
            obs.unobserve(entry.target)
          }
        })
      },
      { root: null, rootMargin: '0px', threshold: 0.15 }
    )

    elements.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
