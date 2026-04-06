import { useState, useRef, useEffect } from 'react'
import { ESIGN_APPS, KSIGN_APPS } from '../data'
import AppRow from './AppRow'
import styles from './BypassSection.module.css'

export default function BypassSection() {
  const [tab, setTab] = useState('esign')
  const thumbRef = useRef(null)
  const btnERef = useRef(null)

  useEffect(() => {
    if (!thumbRef.current || !btnERef.current) return
    const w = btnERef.current.offsetWidth
    thumbRef.current.style.width = w + 'px'
    thumbRef.current.style.transform =
      tab === 'esign' ? 'translateX(0)' : `translateX(${w}px)`
  }, [tab])

  const list = tab === 'esign' ? ESIGN_APPS : KSIGN_APPS

  return (
    <>
      <span className={styles.label} id="bypass">Bypass Revoke</span>

      <div className={styles.segWrap}>
        <div className={styles.track}>
          <div className={styles.thumb} ref={thumbRef} />
          <button
            ref={btnERef}
            className={`${styles.btn} ${tab === 'esign' ? styles.active : ''}`}
            onClick={() => setTab('esign')}
          >ESign</button>
          <button
            className={`${styles.btn} ${tab === 'ksign' ? styles.active : ''}`}
            onClick={() => setTab('ksign')}
          >KSign</button>
        </div>
      </div>

      <div className={styles.list}>
        {list.map(app => <AppRow key={app.url} item={app} />)}
      </div>
    </>
  )
}
