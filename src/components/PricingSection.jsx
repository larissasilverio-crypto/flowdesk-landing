import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircle2, ArrowRight, MessageSquare, Shield, Star } from 'lucide-react'

// ─── Atualizar estas URLs quando o sistema de pagamento/contato estiver pronto ──
const interestUrl = '#'     // URL lista de interesse — FlowDesk ADV
const eliteContactUrl = '#' // URL contato — FlowDesk ADV Elite
// ────────────────────────────────────────────────────────────────────────────────

const advFeatures = [
  'Gestão de tarefas, prazos e agenda',
  'Organização de clientes e processos',
  'Monitoramento de publicações jurídicas',
  'Busca de número de ofício de precatórios',
  'Resumos de processos via nº + CPF',
  'Atualizações processuais para clientes',
  'FlowJus — timeline integrada ao e-SAJ',
  'Gestão de equipe e atribuição de tarefas',
  'Suporte pelo WhatsApp',
  'Atualizações contínuas da plataforma',
]

const eliteFeatures = [
  'Implantação personalizada do escritório',
  'Estruturação operacional sob medida',
  'Workflows customizados para sua equipe',
  'Onboarding estratégico dedicado',
  'Reuniões recorrentes de acompanhamento',
  'Automações inteligentes específicas',
  'Suporte dedicado e prioritário',
  'Customização avançada da plataforma',
]

export default function PricingSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="pricing" className="landing-section landing-section-light" style={{ padding: '120px 24px', background: '#F8FAFC' }}>
      <div style={{ maxWidth: '980px', margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <div className="section-label" style={{ marginBottom: '16px' }}>PREÇOS</div>
          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 52px)',
            fontWeight: 800, letterSpacing: '-0.04em',
            color: '#0F172A', fontFamily: 'Inter, sans-serif',
            lineHeight: 1.1, marginBottom: '16px',
          }}>
            Simples e transparente.
          </h2>
          <p style={{
            fontSize: '18px', color: '#64748B', fontFamily: 'Inter, sans-serif',
            maxWidth: '440px', margin: '0 auto', lineHeight: 1.6, letterSpacing: '-0.01em',
          }}>
            Escolha o plano ideal para o seu escritório.
          </p>
        </motion.div>

        {/* Two-column pricing */}
        <div
          className="pricing-cols"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', alignItems: 'start' }}
        >

          {/* ── FlowDesk ADV ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'relative' }}
          >
            <div style={{
              position: 'absolute', inset: '-1px', borderRadius: '25px',
              background: 'linear-gradient(135deg, rgba(30,58,138,0.3), rgba(55,138,221,0.15), rgba(30,58,138,0.12))',
              zIndex: 0, filter: 'blur(1px)',
            }} />
            <div style={{
              position: 'relative', zIndex: 1,
              background: 'white',
              border: '1px solid rgba(30,58,138,0.1)',
              borderRadius: '24px', overflow: 'hidden',
              boxShadow: '0 20px 64px rgba(30,58,138,0.09), 0 4px 16px rgba(0,0,0,0.03)',
            }}>
              <div className="pricing-card-body" style={{ padding: '36px 36px 40px' }}>

                {/* Status badge */}
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '7px',
                  background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)',
                  borderRadius: '100px', padding: '4px 14px', marginBottom: '24px',
                }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#10B981' }} />
                  <span style={{ fontSize: '11px', fontWeight: 600, color: '#10B981', fontFamily: 'Inter, sans-serif', letterSpacing: '0.04em' }}>
                    Disponível
                  </span>
                </div>

                {/* Plan name */}
                <div style={{
                  fontSize: '18px', fontWeight: 700, color: '#0F172A',
                  fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em',
                  marginBottom: '20px',
                }}>
                  FlowDesk ADV
                </div>

                {/* Price */}
                <div style={{ marginBottom: '8px' }}>
                  <span style={{ fontSize: '52px', fontWeight: 800, color: '#0F172A', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.05em', lineHeight: 1 }}>
                    R$179
                  </span>
                  <span style={{ fontSize: '22px', fontWeight: 700, color: '#0F172A', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.03em' }}>,90</span>
                  <span style={{ fontSize: '15px', color: '#94A3B8', fontFamily: 'Inter, sans-serif', marginLeft: '4px', fontWeight: 400 }}>
                    /mês
                  </span>
                </div>

                <p style={{ fontSize: '14px', color: '#64748B', fontFamily: 'Inter, sans-serif', lineHeight: 1.65, marginBottom: '28px' }}>
                  Plataforma operacional jurídica com tarefas, agenda, clientes, prazos, organização operacional e inteligência aplicada à rotina do escritório.
                </p>

                {/* CTA */}
                <a
                  href={interestUrl}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                    background: '#1E3A8A', color: 'white',
                    fontSize: '14px', fontWeight: 600,
                    padding: '14px 24px', borderRadius: '12px',
                    textDecoration: 'none', letterSpacing: '-0.01em',
                    transition: 'all 0.25s', width: '100%', boxSizing: 'border-box',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = '#1D4ED8'
                    e.currentTarget.style.boxShadow = '0 8px 28px rgba(30,58,138,0.35)'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = '#1E3A8A'
                    e.currentTarget.style.boxShadow = 'none'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  Entrar na lista de interesse
                  <ArrowRight size={14} />
                </a>

                <div style={{ marginTop: '14px', display: 'flex', alignItems: 'center', gap: '6px', justifyContent: 'center' }}>
                  <Shield size={12} color="#94A3B8" />
                  <span style={{ fontSize: '12px', color: '#94A3B8', fontFamily: 'Inter, sans-serif' }}>
                    Cancele quando quiser · Sem multas
                  </span>
                </div>

                {/* Divider */}
                <div style={{ height: '1px', background: 'rgba(15,23,42,0.06)', margin: '28px 0' }} />

                {/* Features */}
                <div style={{ fontSize: '12px', fontWeight: 600, color: '#374151', fontFamily: 'Inter, sans-serif', marginBottom: '16px' }}>
                  Incluso no plano:
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {advFeatures.map((f) => (
                    <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <CheckCircle2 size={14} color="#10B981" style={{ flexShrink: 0, marginTop: '1px' }} />
                      <span style={{ fontSize: '13px', color: '#374151', fontFamily: 'Inter, sans-serif', fontWeight: 400, lineHeight: 1.4 }}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── FlowDesk ADV Elite ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
            style={{
              background: 'linear-gradient(160deg, #080F22 0%, #0D1835 60%, #0A1428 100%)',
              border: '1px solid rgba(55,138,221,0.16)',
              borderRadius: '24px', overflow: 'hidden',
              boxShadow: '0 20px 64px rgba(0,0,0,0.22)',
              position: 'relative',
            }}
          >
            <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '200px', height: '100px', background: 'radial-gradient(ellipse, rgba(55,138,221,0.15) 0%, transparent 70%)', filter: 'blur(20px)', pointerEvents: 'none' }} />

            <div className="pricing-card-body" style={{ padding: '36px 36px 40px', position: 'relative' }}>

              {/* Status badge */}
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '7px',
                background: 'rgba(133,183,235,0.08)', border: '1px solid rgba(133,183,235,0.18)',
                borderRadius: '100px', padding: '4px 14px', marginBottom: '24px',
              }}>
                <MessageSquare size={11} color="#85B7EB" />
                <span style={{ fontSize: '11px', fontWeight: 600, color: '#85B7EB', fontFamily: 'Inter, sans-serif', letterSpacing: '0.04em' }}>
                  Sob consulta
                </span>
              </div>

              {/* Plan name */}
              <div style={{
                fontSize: '18px', fontWeight: 700, color: 'white',
                fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em',
                marginBottom: '20px',
              }}>
                FlowDesk ADV Elite
              </div>

              {/* Price */}
              <div style={{ marginBottom: '8px' }}>
                <span style={{ fontSize: '30px', fontWeight: 800, color: 'white', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.04em', lineHeight: 1 }}>
                  Valor sob consulta
                </span>
              </div>

              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.38)', fontFamily: 'Inter, sans-serif', lineHeight: 1.65, marginBottom: '28px' }}>
                Implantação personalizada para escritórios que precisam de estruturação operacional, fluxos customizados, automações, onboarding estratégico, reuniões recorrentes, suporte dedicado e acompanhamento próximo da operação.
              </p>

              {/* CTA */}
              <a
                href={eliteContactUrl}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                  background: 'rgba(55,138,221,0.12)',
                  border: '1px solid rgba(55,138,221,0.3)',
                  color: '#85B7EB',
                  fontSize: '14px', fontWeight: 600,
                  padding: '14px 24px', borderRadius: '12px',
                  textDecoration: 'none', letterSpacing: '-0.01em',
                  transition: 'all 0.25s', width: '100%', boxSizing: 'border-box',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(55,138,221,0.22)'
                  e.currentTarget.style.borderColor = 'rgba(55,138,221,0.5)'
                  e.currentTarget.style.color = 'white'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(55,138,221,0.12)'
                  e.currentTarget.style.borderColor = 'rgba(55,138,221,0.3)'
                  e.currentTarget.style.color = '#85B7EB'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                Solicitar proposta
                <ArrowRight size={14} />
              </a>

              <div style={{ marginTop: '14px', textAlign: 'center' }}>
                <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.2)', fontFamily: 'Inter, sans-serif' }}>
                  Onboarding estratégico · Suporte dedicado · Alta customização
                </span>
              </div>

              {/* Divider */}
              <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', margin: '28px 0' }} />

              {/* Features */}
              <div style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.35)', fontFamily: 'Inter, sans-serif', marginBottom: '16px' }}>
                Tudo do ADV, mais:
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {eliteFeatures.map((f) => (
                  <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <Star size={13} color="#378ADD" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', fontFamily: 'Inter, sans-serif', fontWeight: 400, lineHeight: 1.4 }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{
            textAlign: 'center', marginTop: '36px',
            fontSize: '13px', color: '#94A3B8',
            fontFamily: 'Inter, sans-serif', lineHeight: 1.6,
          }}
        >
          Dúvidas? Fale diretamente com os fundadores. Sem intermediários.
        </motion.p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .pricing-cols { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
