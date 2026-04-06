import { useState, useEffect, useRef } from 'react'
import { SKILLS } from '../data'
import styles from './SkillsSection.module.css'

export default function SkillsSection() {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect() }
    }, { threshold: 0.2 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <span className={styles.label} id="skills">Kỹ năng</span>
      <section className={styles.section}>
        <div className={styles.card} ref={ref}>
          <h2>Kỹ năng Lập trình</h2>
          {SKILLS.map(s => (
            <div key={s.name} className={styles.row}>
              <span className={styles.name}>{s.name}</span>
              <div className={styles.track}>
                <div
                  className={styles.fill}
                  style={{ background: s.color, width: visible ? `${s.pct}%` : '0%' }}
                />
              </div>
              <span className={styles.pct}>{s.pct}%</span>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
