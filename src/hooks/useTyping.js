import { useState, useEffect, useRef } from 'react'

export default function useTyping(texts, speeds = { type: 110, del: 55, pause: 2200 }) {
  const [display, setDisplay] = useState('')
  const state = useRef({ idx: 0, chr: 0, del: false })

  useEffect(() => {
    let timer
    function tick() {
      const { idx, chr, del } = state.current
      const word = texts[idx]
      if (!del) {
        const next = chr + 1
        setDisplay(word.slice(0, next))
        if (next === word.length) {
          state.current = { idx, chr: next, del: true }
          timer = setTimeout(tick, speeds.pause)
        } else {
          state.current = { idx, chr: next, del: false }
          timer = setTimeout(tick, speeds.type)
        }
      } else {
        const next = chr - 1
        setDisplay(word.slice(0, next))
        if (next === 0) {
          state.current = { idx: (idx + 1) % texts.length, chr: 0, del: false }
        } else {
          state.current = { idx, chr: next, del: true }
        }
        timer = setTimeout(tick, speeds.del)
      }
    }
    timer = setTimeout(tick, speeds.type)
    return () => clearTimeout(timer)
  }, [])

  return display
}
