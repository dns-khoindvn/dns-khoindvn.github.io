import useTyping from '../hooks/useTyping'
import { TYPING_TEXTS, SOCIAL_LINKS } from '../data'
import styles from './Hero.module.css'

export default function Hero() {
  const typed = useTyping(TYPING_TEXTS)

  return (
    <section className={styles.hero} id="about">
      <div className={styles.inner}>
        <img
          className={styles.avatar}
          src="https://khoindvn.io.vn/img/pf/favicon.ico"
          alt="Avatar Vũ Văn Khơi"
          loading="eager"
        />
        <h1 className={styles.name}>
          Vũ Văn Khơi
          <img src="https://khoindvn.io.vn/img/icons/badge.png" alt="✓" className={styles.badge} />
        </h1>
        <p className={styles.typing}>
          <span className={styles.typedText}>{typed}</span>
          <span className={styles.cursor}>|</span>
        </p>
        <p className={styles.desc}>
          Mua chứng chỉ <strong>ESign / KSign</strong> cài app 100% thành công chỉ <strong>50k</strong> —{' '}
          <a href="https://muacert.com" target="_blank" rel="noopener noreferrer">muacert.com</a>
        </p>
        <div className={styles.socials}>
          {SOCIAL_LINKS.map(s => (
            <button
              key={s.name}
              className={styles.socialBtn}
              aria-label={s.name}
              onClick={() => window.open(s.url, '_blank')}
              dangerouslySetInnerHTML={{ __html: s.svg }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
