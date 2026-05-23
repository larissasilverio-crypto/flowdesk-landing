import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import Logo from './Logo'

const navLinks = [
  { label: 'Produto', href: '#features' },
  { label: 'Solucoes', href: '#ai' },
  { label: 'Precos', href: '#pricing' },
  { label: 'Docs', href: '#contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = mobileOpen ? 'hidden' : originalOverflow

    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [mobileOpen])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false)
      }
    }

    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-5 md:px-8 md:pt-6"
      >
        <nav className="navbar-shell w-full max-w-7xl">
          <div className="navbar-row flex items-center justify-between gap-4">
            <a href="#hero" className="shrink-0 lg:hidden">
              <Logo white size="md" showTagline className="navbar-brand navbar-brand-mobile" />
            </a>
            <a href="#hero" className="shrink-0 hidden lg:flex">
              <Logo white size="nav" showTagline className="navbar-brand navbar-brand-desktop" />
            </a>

            <div className="navbar-desktop-nav hidden lg:flex items-center gap-2">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} className="navbar-link">
                  {link.label}
                </a>
              ))}
            </div>

            <div className="hidden lg:flex items-center">
              <a href="#pricing" className="navbar-cta-link">
                Comecar agora
                <ArrowRight size={14} />
              </a>
            </div>

            <button
              type="button"
              aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
              className="navbar-mobile-toggle lg:hidden"
              onClick={() => setMobileOpen((open) => !open)}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="navbar-mobile-backdrop lg:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="navbar-mobile-panel"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="navbar-mobile-panel-head">
                <Logo white size="md" />
                <button
                  type="button"
                  aria-label="Fechar menu"
                  className="navbar-mobile-close"
                  onClick={() => setMobileOpen(false)}
                >
                  <X size={16} />
                </button>
              </div>

              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="navbar-mobile-link"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <a
                href="#pricing"
                onClick={() => setMobileOpen(false)}
                className="navbar-mobile-cta"
              >
                Comecar agora
                <ArrowRight size={16} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
