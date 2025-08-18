import { useId, useState } from 'react'
import styles from './Login.module.scss'

export function LoginPage() {
  const phoneId = useId()
  const emailId = useId()
  const passId = useId()
  const [show, setShow] = useState(false)

  return (
    <main className={styles.wrapper}>
      <section className={styles.card} role="region" aria-labelledby="auth-title">
        <div className={styles.logo}>
          <svg width="56" height="56" viewBox="0 0 48 48" fill="none" role="img" aria-label="TruequeVE">
            <rect x="3" y="3" width="42" height="42" rx="10" fill="url(#g2)"/>
            <path d="M14 24c0-5.523 4.477-10 10-10a10 10 0 1 1-7.071 2.929" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <defs>
              <linearGradient id="g2" x1="3" y1="3" x2="45" y2="45" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1c88f3"/>
                <stop offset="1" stopColor="#00b894"/>
              </linearGradient>
            </defs>
          </svg>
          <h1 id="auth-title">Iniciar sesión</h1>
        </div>

        <form className={styles.form} autoComplete="on" noValidate>
          <div className={styles.group}>
            <label htmlFor={phoneId} className={styles.label}>Teléfono</label>
            <div className={styles.prefixBox}>
              <span className={styles.prefix} aria-hidden>+58</span>
              <input id={phoneId} name="phone" type="tel" inputMode="numeric" pattern="[0-9]{7,10}" placeholder="Teléfono" aria-describedby="phone-help" className={styles.input} />
            </div>
            <small id="phone-help" className={styles.help}>Escribe tu número sin el prefijo. Ej.: 4121234567</small>
          </div>

          <div className={styles.group}>
            <label htmlFor={emailId} className={styles.label}>Correo electrónico</label>
            <input id={emailId} name="email" type="email" placeholder="Correo electrónico" autoComplete="email" className={styles.input} />
          </div>

          <div className={styles.group}>
            <label htmlFor={passId} className={styles.label}>Contraseña</label>
            <div className={styles.actionWrapper}>
              <input id={passId} name="password" type={show ? 'text' : 'password'} placeholder="Contraseña" autoComplete="current-password" className={styles.field} />
              <button type="button" className={styles.iconBtn} aria-label={show ? 'Ocultar contraseña' : 'Mostrar contraseña'} aria-pressed={show} onClick={() => setShow(v => !v)}>
                <svg className="eye" viewBox="0 0 24 24" width="22" height="22" aria-hidden>
                  <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12Z" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <svg className="eyeOff" viewBox="0 0 24 24" width="22" height="22" aria-hidden>
                  <path d="M3 3l18 18" stroke="currentColor" strokeWidth="2"/>
                  <path d="M10.58 10.58A3 3 0 0 0 12 15a3 3 0 0 0 2.42-4.42M9.88 5.09A10.94 10.94 0 0 1 12 5c7 0 11 7 11 7a18.1 18.1 0 0 1-5.17 5.74M6.12 6.12A18 18 0 0 0 1 12s4 7 11 7a10.82 10.82 0 0 0 3.88-.72" fill="none" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </button>
            </div>
          </div>

          <button className={styles.primaryBtn} type="submit">Iniciar sesión</button>

          <div className={styles.links}>
            <a href="#">Crear cuenta</a>
            <a href="#">Olvidé mi contraseña</a>
          </div>

          <div className={styles.divider}><span>o</span></div>

          <div className={styles.socials}>
            <button type="button" className={styles.outlineBtn}>
              <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden>
                <path fill="#EA4335" d="M24 9.5c3.37 0 6.41 1.16 8.79 3.42l6.58-6.58C35.5 2.6 30.2 0 24 0 14.62 0 6.53 5.38 2.56 13.2l7.69 5.96C12.09 13.53 17.56 9.5 24 9.5z"/>
                <path fill="#4285F4" d="M46.1 24.55c0-1.6-.14-3.16-.41-4.65H24v8.8h12.41c-.54 2.9-2.2 5.36-4.67 7.01l7.15 5.54c4.17-3.85 6.51-9.52 6.51-16.7z"/>
                <path fill="#FBBC05" d="M10.25 19.16l-7.69-5.96C.93 15.6 0 19.68 0 24c0 4.26.92 8.27 2.54 11.82l7.71-5.99A14.39 14.39 0 0 1 9.5 24c0-1.69.28-3.32.75-4.84z"/>
                <path fill="#34A853" d="M24 48c6.2 0 11.44-2.04 15.26-5.76l-7.15-5.54c-2 1.35-4.55 2.14-8.1 2.14-6.44 0-11.9-4.03-13.75-9.66l-7.71 5.99C6.53 42.62 14.62 48 24 48z"/>
              </svg>
              <span>Continuar con Google</span>
            </button>
            <button type="button" className={styles.outlineBtn}>
              <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden>
                <path d="M33.26 25.21c.06 6.14 5.38 8.18 5.45 8.21-.04.13-.85 2.92-2.81 5.78-1.69 2.49-3.45 4.97-6.22 5.01-2.72.05-3.6-1.62-6.72-1.62s-4.1 1.58-6.7 1.67c-2.69.1-4.75-2.69-6.47-5.16-3.53-5.08-6.24-14.34-2.61-20.63 1.81-3.14 5.05-5.13 8.57-5.18 2.67-.05 5.19 1.81 6.72 1.81 1.52 0 4.63-2.23 7.81-1.9 1.32.05 5.03.53 7.41 4.02-.19.12-4.43 2.59-4.42 7.79z" fill="currentColor"/>
                <path d="M27.86 8.47c1.43-1.72 2.4-4.12 2.13-6.47-2.06.08-4.56 1.37-6.02 3.08-1.32 1.53-2.48 3.98-2.17 6.33 2.3.18 4.66-1.17 6.06-2.94z" fill="currentColor"/>
              </svg>
              <span>Continuar con Apple</span>
            </button>
          </div>
        </form>
      </section>
    </main>
  )
}

export default LoginPage

