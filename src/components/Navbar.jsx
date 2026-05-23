import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import Logo from './Logo'

const navLinks = [
  { label: 'Produto', href: '#ecosystem' },
  { label: 'IA', href: '#ai' },
  { label: 'Recursos', href: '#features' },
  { label: 'Fundadores', href: '#founders' },
  { label: 'Preços', href: '#pricing' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4"
      >
        <nav
          className="w-full max-w-6xl"
          style={{
            background: scrolled ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.6)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: scrolled ? '1px solid rgba(15,23,42,0.08)' : '1px solid rgba(255,255,255,0.4)',
            borderRadius: '16px',
            boxShadow: scrolled
              ? '0 4px 24px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)'
              : '0 2px 8px rgba(0,0,0,0.02)',
            transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
            padding: '10px 20px',
          }}
        >
          <div className="flex items-center justify-between">
            <Logo />

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    color: '#475569',
                    fontSize: '14px',
                    fontWeight: 500,
                    padding: '7px 14px',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                    letterSpacing: '-0.01em',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = '#0F172A'
                    e.currentTarget.style.background = 'rgba(15,23,42,0.05)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = '#475569'
                    e.currentTarget.style.background = 'transparent'
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="#pricing"
                style={{
                  color: '#475569',
                  fontSize: '14px',
                  fontWeight: 500,
                  textDecoration: 'none',
                  letterSpacing: '-0.01em',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#0F172A'}
                onMouseLeave={e => e.currentTarget.style.color = '#475569'}
              >
                Entrar
              </a>
              <a
                href="#pricing"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: '#1E3A8A',
                  color: 'white',
                  fontSize: '14px',
                  fontWeight: 600,
                  padding: '8px 18px',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  letterSpacing: '-0.01em',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = '#1D4ED8'
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(30,58,138,0.35)'
                  e.currentTarget.style.transform = 'translateY(-1px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = '#1E3A8A'
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                Começar agora
                <ArrowRight size={14} />
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden p-2 rounded-lg text-slate-500"
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{ background: 'rgba(15,23,42,0.04)', border: 'none', cursor: 'pointer' }}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 pt-24 px-4"
            style={{ background: 'rgba(255,255,255,0.98)', backdropFilter: 'blur(20px)' }}
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    color: '#0F172A',
                    fontSize: '18px',
                    fontWeight: 500,
                    padding: '14px 16px',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    display: 'block',
                    background: 'rgba(15,23,42,0.03)',
                  }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#pricing"
                onClick={() => setMobileOpen(false)}
                className="btn-primary mt-4 justify-center"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  background: '#1E3A8A',
                  color: 'white',
                  fontSize: '16px',
                  fontWeight: 600,
                  padding: '14px 24px',
                  borderRadius: '12px',
                  textDecoration: 'none',
                }}
              >
                Começar agora
                <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
