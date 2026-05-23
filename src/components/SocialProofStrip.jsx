import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircle2, Clock } from 'lucide-react'

const validations = [
  {
    icon: CheckCircle2,
    statusLabel: 'Validação interna',
    statusColor: '#10B981',
    statusBg: 'rgba(16,185,129,0.07)',
    statusBorder: 'rgba(16,185,129,0.15)',
    org: 'MCRA Advocacia',
    description: 'Ambiente interno de validação e uso operacional.',
  },
  {
    icon: Clock,
    statusLabel: 'Em preparação',
    statusColor: '#378ADD',
    statusBg: 'rgba(55,138,221,0.07)',
    statusBorder: 'rgba(55,138,221,0.15)',
    org: 'Simone Alexandra Advocacia',
    description: 'Primeira implantação comercial em preparação.',
  },
]

export default function SocialProofStrip() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section style={{
      padding: '64px 24px',
      background: '#F8FAFC',
      borderBottom: '1px solid rgba(15,23,42,0.06)',
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', marginBottom: '40px' }}
        >
          <p style={{
            fontSize: '11px',
            color: '#94A3B8',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 700,
            letterSpacing: '0.09em',
            textTransform: 'uppercase',
            marginBottom: '16px',
          }}>
            Validação em ambiente real
          </p>
          <p style={{
            fontSize: '15px',
            color: '#64748B',
            fontFamily: 'Inter, sans-serif',
            lineHeight: 1.7,
            maxWidth: '560px',
            margin: '0 auto',
            fontWeight: 400,
          }}>
            O FlowDesk está sendo desenvolvido e validado dentro da rotina real de escritórios jurídicos, antes de escalar para uma operação comercial maior.
          </p>
        </motion.div>

        {/* Validation cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '16px',
        }}>
          {validations.map(({ icon: Icon, statusLabel, statusColor, statusBg, statusBorder, org, description }, i) => (
            <motion.div
              key={org}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              style={{
                background: 'white',
                border: '1px solid rgba(15,23,42,0.07)',
                borderRadius: '16px',
                padding: '24px 28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
              }}
            >
              {/* Status */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '7px',
                background: statusBg,
                border: `1px solid ${statusBorder}`,
                borderRadius: '100px',
                padding: '4px 12px',
                alignSelf: 'flex-start',
              }}>
                <Icon size={11} color={statusColor} />
                <span style={{
                  fontSize: '11px', fontWeight: 600, color: statusColor,
                  fontFamily: 'Inter, sans-serif', letterSpacing: '0.03em',
                }}>
                  {statusLabel}
                </span>
              </div>

              {/* Org */}
              <div>
                <div style={{
                  fontSize: '16px', fontWeight: 700, color: '#0F172A',
                  fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em',
                  marginBottom: '6px',
                }}>
                  {org}
                </div>
                <div style={{
                  fontSize: '13px', color: '#64748B',
                  fontFamily: 'Inter, sans-serif', lineHeight: 1.6,
                }}>
                  {description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
