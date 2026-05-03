import { useEffect } from 'react'

/**
 * Attaches an IntersectionObserver to all .fade-in elements inside the given
 * container ref (or document if no ref is given).  When they scroll into view
 * the 'show' class is added, triggering the CSS transition.
 *
 * @param {React.RefObject} [containerRef]  – optional ref to scope the query
 * @param {number}          [threshold=0.15]
 */
export default function useFadeIn(containerRef, threshold = 0.15) {
  useEffect(() => {
    const root = containerRef?.current ?? document
    const elements = root.querySelectorAll('.fade-in')
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
      { threshold }
    )

    elements.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
