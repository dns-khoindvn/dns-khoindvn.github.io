import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ServiceLinks from './components/ServiceLinks'
import BypassSection from './components/BypassSection'
import SkillsSection from './components/SkillsSection'
import AppRow from './components/AppRow'
import { APPS } from './data'
import styles from './App.module.css'

export default function App() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : '')
  }, [dark])

  return (
    <>
      <Navbar dark={dark} onToggleDark={() => setDark(d => !d)} />

      <main>
        <Hero />

        <ServiceLinks />

        <span className={styles.sectionLabel} id="signed">Signed App</span>
        <div className={styles.appsList}>
          {APPS.map(app => <AppRow key={app.url} item={app} />)}
        </div>

        <BypassSection />

        <SkillsSection />
      </main>

      <footer className={styles.footer}>
        <a
          href="//www.dmca.com/Protection/Status.aspx?ID=8d6c1d20-15d9-4846-ab00-806948e47695"
          title="DMCA.com Protection Status"
        >
          <img
            src="https://images.dmca.com/Badges/_dmca_premi_badge_5.png?ID=8d6c1d20-15d9-4846-ab00-806948e47695"
            alt="DMCA"
            style={{ height: 26, marginBottom: '0.6rem' }}
          />
        </a>
        <br />
        <span>© 2026 Vũ Văn Khơi · khoindvn.io.vn</span>
      </footer>
    </>
  )
}
