import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function FinalCTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="landing-section landing-section-dark final-cta-section" style={{
      padding: '120px 24px',
      background: 'linear-gradient(180deg, #060C1D 0%, #0B1630 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background effects */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '700px',
          height: '500px',
          background: 'radial-gradient(ellipse, rgba(30,58,138,0.3) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />
      <motion.div
        animate={{ opacity: [0.1, 0.22, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        style={{
          position: 'absolute',
          bottom: '20%',
          right: '15%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(55,138,221,0.12) 0%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }}
      />

      {/* Grid */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(rgba(30,58,138,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(30,58,138,0.06) 1px, transparent 1px)',
        backgroundSize: '64px 64px',
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 10 }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(30,58,138,0.2)',
              border: '1px solid rgba(30,58,138,0.4)',
              borderRadius: '100px',
              padding: '7px 18px',
              marginBottom: '36px',
            }}
          >
            <Sparkles size={12} color="#60A5FA" />
            <span style={{ fontSize: '12px', fontWeight: 600, color: '#60A5FA', fontFamily: 'Inter, sans-serif', letterSpacing: '0.06em' }}>
              COMECE HOJE
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            style={{
              fontSize: 'clamp(36px, 7vw, 72px)',
              fontWeight: 800,
              letterSpacing: '-0.05em',
              color: 'white',
              fontFamily: 'Inter, sans-serif',
              lineHeight: 1.05,
              marginBottom: '24px',
            }}
          >
            Escritórios modernos
            <br />exigem operações
            <br />
            <span style={{
              background: 'linear-gradient(135deg, #85B7EB 0%, #378ADD 50%, #B5D4F4 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              inteligentes.
            </span>
          </motion.h2>

          <motion.p
            className="final-cta-copy"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            style={{
              fontSize: '20px',
              color: 'rgba(255,255,255,0.4)',
              fontFamily: 'Inter, sans-serif',
              lineHeight: 1.6,
              letterSpacing: '-0.01em',
              marginBottom: '48px',
              maxWidth: '520px',
              margin: '0 auto 48px',
            }}
          >
            O FlowDesk foi construído de dentro de um escritório real. Por pessoas que viveram o problema — e decidiram resolvê-lo.
          </motion.p>

          <motion.div
            className="final-cta-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <a
              href="#pricing"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                background: '#378ADD',
                color: 'white',
                fontSize: '16px',
                fontWeight: 700,
                padding: '16px 36px',
                borderRadius: '14px',
                textDecoration: 'none',
                letterSpacing: '-0.02em',
                transition: 'all 0.25s',
                border: '1px solid rgba(55,138,221,0.5)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#185FA5'
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(55,138,221,0.45)'
                e.currentTarget.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = '#378ADD'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              Iniciar assinatura — R$179,90/mês
              <ArrowRight size={16} />
            </a>
            <a
              href="#founders"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(255,255,255,0.06)',
                color: 'rgba(255,255,255,0.7)',
                fontSize: '16px',
                fontWeight: 500,
                padding: '16px 36px',
                borderRadius: '14px',
                textDecoration: 'none',
                letterSpacing: '-0.02em',
                transition: 'all 0.25s',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
                e.currentTarget.style.color = 'rgba(255,255,255,0.9)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                e.currentTarget.style.color = 'rgba(255,255,255,0.7)'
              }}
            >
              Conhecer os fundadores
            </a>
          </motion.div>

          <motion.div
            className="final-cta-note"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{
              marginTop: '40px',
              fontSize: '13px',
              color: 'rgba(255,255,255,0.2)',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            Fale diretamente com os fundadores · Cancele a qualquer momento
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
