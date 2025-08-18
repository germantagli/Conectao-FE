import { useState, useRef, useEffect } from 'react'
import styles from './Topbar.module.scss'

export function Topbar() {
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement | null>(null)
  const btnRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!open) return
      const target = e.target as Node
      if (menuRef.current && !menuRef.current.contains(target) && btnRef.current && !btnRef.current.contains(target)) {
        setOpen(false)
      }
    }
    document.addEventListener('click', onDocClick)
    return () => document.removeEventListener('click', onDocClick)
  }, [open])

  return (
    <header className={styles.topbar}>
      <button
        ref={btnRef}
        className={styles.hamburger}
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        aria-controls="mobile-menu"
        aria-expanded={open}
        onClick={() => setOpen(v => !v)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <a href="#" className={styles.brand} aria-label="Inicio TruequeVE">
        <svg width="28" height="28" viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <rect x="3" y="3" width="42" height="42" rx="10" fill="url(#g)"/>
          <path d="M14 24c0-5.523 4.477-10 10-10a10 10 0 1 1-7.071 2.929" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <defs>
            <linearGradient id="g" x1="3" y1="3" x2="45" y2="45" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1c88f3"/>
              <stop offset="1" stopColor="#00b894"/>
            </linearGradient>
          </defs>
        </svg>
        <span>TruequeVE</span>
      </a>

      {open && (
        <nav id="mobile-menu" className={styles.mobileMenu} ref={menuRef}>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Crear cuenta</a></li>
            <li><a href="#">Ayuda</a></li>
          </ul>
        </nav>
      )}
    </header>
  )
}

