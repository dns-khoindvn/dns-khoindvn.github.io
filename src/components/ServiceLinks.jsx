import { SERVICE_LINKS } from '../data'
import styles from './ServiceLinks.module.css'

const ExtIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
)

const DlIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
)

export default function ServiceLinks() {
  return (
    <>
      <span className={styles.label} id="links">Dịch vụ &amp; Liên kết</span>
      <div className={styles.wrap}>
        <div className={styles.card}>
          {SERVICE_LINKS.map(link => (
            <a key={link.href} className={styles.row} href={link.href} target="_blank" rel="noopener noreferrer">
              <span className={styles.iconWrap} style={{ background: link.bg }} dangerouslySetInnerHTML={{ __html: link.svg }} />
              <span className={styles.linkLabel}>{link.label}</span>
              <span className={styles.openBtn}>
                {link.download ? <DlIcon /> : <ExtIcon />}
              </span>
            </a>
          ))}
        </div>
      </div>
    </>
  )
}
