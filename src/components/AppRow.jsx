import styles from './AppRow.module.css'

export default function AppRow({ item }) {
  return (
    <a href={item.url} className={styles.row} target="_blank" rel="noopener noreferrer">
      <img src={item.img} className={styles.icon} alt={item.name} loading="lazy" />
      <div className={styles.text}>
        <div className={styles.title}>{item.name}</div>
        <div className={styles.sub}>{item.desc}</div>
      </div>
      <div className={styles.action}>INSTALL</div>
    </a>
  )
}
