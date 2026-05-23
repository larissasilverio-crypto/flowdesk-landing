import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { User, Briefcase, CheckSquare, Zap, Sparkles, BarChart2, Brain, ArrowRight } from 'lucide-react'

const steps = [
  { icon: User, label: 'Cliente', sublabel: 'Entrada da demanda', color: '#378ADD', bg: 'rgba(55,138,221,0.12)' },
  { icon: Briefcase, label: 'Triagem', sublabel: 'Atribuição da equipe', color: '#8B5CF6', bg: 'rgba(139,92,246,0.12)' },
  { icon: CheckSquare, label: 'FlowJus', sublabel: 'Consulta e timeline', color: '#10B981', bg: 'rgba(16,185,129,0.12)' },
  { icon: Zap, label: 'Publicações', sublabel: 'Monitoramento DJESP', color: '#F59E0B', bg: 'rgba(245,158,11,0.12)' },
  { icon: Sparkles, label: 'Petição', sublabel: 'Geração automática', color: '#85B7EB', bg: 'rgba(133,183,235,0.12)' },
  { icon: BarChart2, label: 'Atualização', sublabel: 'Comunicação ao cliente', color: '#06B6D4', bg: 'rgba(6,182,212,0.12)' },
  { icon: Brain, label: 'Visibilidade', sublabel: 'Operação centralizada', color: '#185FA5', bg: 'rgba(24,95,165,0.15)' },
]

export default function FlowSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="flow" style={{ padding: '120px 24px', background: 'white', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <div className="section-label" style={{ marginBottom: '16px' }}>FLUXO OPERACIONAL</div>
          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 52px)',
            fontWeight: 800,
            letterSpacing: '-0.04em',
            color: '#0F172A',
            fontFamily: 'Inter, sans-serif',
            lineHeight: 1.1,
            marginBottom: '16px',
          }}>
            Da demanda ao cliente.
            <br />Sem ruído.
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#64748B',
            fontFamily: 'Inter, sans-serif',
            maxWidth: '480px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            Cada etapa da operação jurídica conectada — da entrada do processo à atualização final ao cliente.
          </p>
        </motion.div>

        {/* Flow steps — desktop horizontal */}
        <div className="flow-desktop" style={{ display: 'flex', alignItems: 'center', gap: '0', position: 'relative' }}>
          {/* Connection line */}
          <div style={{
            position: 'absolute',
            top: '44px',
            left: '44px',
            right: '44px',
            height: '1px',
            background: 'linear-gradient(90deg, #378ADD, #8B5CF6, #10B981, #F59E0B, #85B7EB, #06B6D4, #185FA5)',
            opacity: 0.3,
            zIndex: 0,
          }} />

          {steps.map(({ icon: Icon, label, sublabel, color, bg }, i) => (
            <div key={label} style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 + 0.2, ease: [0.16, 1, 0.3, 1] }}
                style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', zIndex: 1, position: 'relative' }}
              >
                {/* Step number */}
                <div style={{
                  position: 'absolute',
                  top: '-8px',
                  right: 'calc(50% - 32px)',
                  fontSize: '10px',
                  fontWeight: 700,
                  color: color,
                  fontFamily: 'Inter, sans-serif',
                  background: 'white',
                  padding: '1px 6px',
                  borderRadius: '4px',
                  border: `1px solid ${color}30`,
                }}>
                  0{i + 1}
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, y: -4 }}
                  style={{
                    width: 88,
                    height: 88,
                    borderRadius: '24px',
                    background: bg,
                    border: `1.5px solid ${color}30`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'default',
                    transition: 'all 0.3s',
                    boxShadow: `0 8px 24px ${color}15`,
                  }}
                >
                  <Icon size={30} color={color} strokeWidth={1.5} />
                </motion.div>

                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    fontSize: '14px',
                    fontWeight: 700,
                    color: '#0F172A',
                    fontFamily: 'Inter, sans-serif',
                    letterSpacing: '-0.02em',
                  }}>
                    {label}
                  </div>
                  <div style={{
                    fontSize: '12px',
                    color: '#94A3B8',
                    fontFamily: 'Inter, sans-serif',
                    marginTop: '2px',
                  }}>
                    {sublabel}
                  </div>
                </div>
              </motion.div>

              {/* Arrow between steps */}
              {i < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.1 + 0.5 }}
                  style={{ color: '#CBD5E1', zIndex: 1, flexShrink: 0, margin: '0 -6px', marginTop: '-28px' }}
                >
                  <ArrowRight size={16} />
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Flow steps — mobile vertical */}
        <div className="flow-mobile" style={{ display: 'none', flexDirection: 'column', gap: '0' }}>
          {steps.map(({ icon: Icon, label, sublabel, color, bg }, i) => (
            <div key={label} style={{ display: 'flex', gap: '20px', position: 'relative' }}>
              {/* Left line */}
              {i < steps.length - 1 && (
                <div style={{
                  position: 'absolute',
                  left: '31px',
                  top: '64px',
                  bottom: '-16px',
                  width: '1px',
                  background: `linear-gradient(${color}40, transparent)`,
                }} />
              )}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: '18px',
                  background: bg,
                  border: `1.5px solid ${color}30`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Icon size={24} color={color} strokeWidth={1.5} />
              </motion.div>
              <div style={{ paddingTop: '16px', paddingBottom: '32px' }}>
                <div style={{ fontSize: '11px', fontWeight: 700, color, fontFamily: 'Inter, sans-serif', marginBottom: '4px' }}>0{i + 1}</div>
                <div style={{ fontSize: '16px', fontWeight: 700, color: '#0F172A', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}>{label}</div>
                <div style={{ fontSize: '13px', color: '#94A3B8', fontFamily: 'Inter, sans-serif', marginTop: '2px' }}>{sublabel}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Result banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.9 }}
          style={{
            marginTop: '64px',
            background: 'linear-gradient(135deg, #0F172A 0%, #1E3A8A 100%)',
            borderRadius: '20px',
            padding: '40px 48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px',
          }}
        >
          <div>
            <div style={{ fontSize: '24px', fontWeight: 800, color: 'white', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.03em', marginBottom: '8px' }}>
              Operação jurídica centralizada.
            </div>
            <div style={{ fontSize: '16px', color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.01em' }}>
              Sem planilhas. Sem e-mails perdidos. Sem caos operacional.
            </div>
          </div>
          <a
            href="#pricing"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: '#378ADD',
              color: 'white',
              fontSize: '15px',
              fontWeight: 600,
              padding: '14px 28px',
              borderRadius: '12px',
              textDecoration: 'none',
              letterSpacing: '-0.01em',
              transition: 'all 0.25s',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#185FA5'
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(55,138,221,0.4)'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = '#378ADD'
              e.currentTarget.style.boxShadow = 'none'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            Começar agora
            <ArrowRight size={15} />
          </a>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .flow-desktop { display: none !important; }
          .flow-mobile { display: flex !important; }
        }
      `}</style>
    </section>
  )
}
