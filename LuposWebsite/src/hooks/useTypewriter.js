import { useState, useEffect } from 'react'

/**
 * Typewriter hook — types out `text` one character at a time.
 * @param {string}  text       Full string to type
 * @param {number}  speed      Ms per character (default 80)
 * @param {number}  delay      Ms before starting (default 0)
 * @returns {string}           The currently-displayed partial string
 */
export default function useTypewriter(text, speed = 80, delay = 0) {
  const [displayed, setDisplayed] = useState('')

  useEffect(() => {
    setDisplayed('')
    let i = 0
    let timeout

    const start = () => {
      const interval = setInterval(() => {
        i++
        setDisplayed(text.slice(0, i))
        if (i >= text.length) clearInterval(interval)
      }, speed)
      return interval
    }

    timeout = setTimeout(() => {
      const interval = start()
      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(timeout)
  }, [text, speed, delay])

  return displayed
}
