import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  FileText, Bell, Search, GitMerge,
  BookOpen, MessageSquare, Globe, Sparkles,
} from 'lucide-react'

const capabilities = [
  {
    icon: FileText,
    title: 'Geração de peças e ações',
    description: 'Geração assistida de petições, despachos e demais peças processuais com base no modelo do próprio escritório.',
    status: 'Funcional',
    statusColor: '#10B981',
    statusBg: 'rgba(16,185,129,0.08)',
  },
  {
    icon: Bell,
    title: 'Recebimento de publicações',
    description: 'Acompanhamento e recebimento de publicações em diários oficiais. A equipe é notificada sobre movimentações relevantes.',
    status: 'Funcional',
    statusColor: '#10B981',
    statusBg: 'rgba(16,185,129,0.08)',
  },
  {
    icon: Search,
    title: 'Busca de número de precatórios',
    description: 'Localização do número de ordem de precatórios via CPF ou número de processo, de forma direta e sem burocracia.',
    status: 'Funcional',
    statusColor: '#10B981',
    statusBg: 'rgba(16,185,129,0.08)',
  },
  {
    icon: GitMerge,
    title: 'FlowJus — Timeline jurídica',
    description: 'Módulo de linha do tempo processual integrado ao e-SAJ. Já funcional no e-SAJ, com suporte a novos tribunais em implantação.',
    status: 'Em evolução',
    statusColor: '#F59E0B',
    statusBg: 'rgba(245,158,11,0.08)',
  },
  {
    icon: BookOpen,
    title: 'Linha do tempo e-SAJ',
    description: 'Andamentos processuais organizados em ordem cronológica com integração direta ao e-SAJ.',
    status: 'Funcional',
    statusColor: '#10B981',
    statusBg: 'rgba(16,185,129,0.08)',
  },
  {
    icon: BookOpen,
    title: 'Resumo do processo',
    description: 'Resumo completo do processo gerado a partir do número do processo e do CPF do cliente. Agilidade para a equipe jurídica.',
    status: 'Funcional',
    statusColor: '#10B981',
    statusBg: 'rgba(16,185,129,0.08)',
  },
  {
    icon: MessageSquare,
    title: 'Andamento para o cliente',
    description: 'Atualização processual em linguagem clara e acessível, pronta para envio direto ao cliente — sem adaptação manual.',
    status: 'Funcional',
    statusColor: '#10B981',
    statusBg: 'rgba(16,185,129,0.08)',
  },
  {
    icon: Globe,
    title: 'Outros tribunais',
    description: 'Integração com tribunais além do e-SAJ em fase de implantação. O ecossistema FlowJus está em expansão contínua.',
    status: 'Em implantação',
    statusColor: '#60A5FA',
    statusBg: 'rgba(96,165,250,0.08)',
  },
]

export default function AISection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="ai"
      style={{
        padding: '120px 24px',
        background: 'linear-gradient(180deg, #070D1F 0%, #0B1530 50%, #060C1D 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle background glow */}
      <div style={{
        position: 'absolute', top: '30%', left: '50%', transform: 'translateX(-50%)',
        width: '700px', height: '400px',
        background: 'radial-gradient(ellipse, rgba(55,138,221,0.1) 0%, transparent 70%)',
        filter: 'blur(80px)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(rgba(55,138,221,0.05) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
        maskImage: 'radial-gradient(ellipse 70% 50% at 50% 50%, black 30%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 70% 50% at 50% 50%, black 30%, transparent 100%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', marginBottom: '72px' }}
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(55,138,221,0.12)', border: '1px solid rgba(55,138,221,0.25)',
            borderRadius: '100px', padding: '6px 18px', marginBottom: '24px',
          }}>
            <Sparkles size={12} color="#85B7EB" />
            <span style={{ fontSize: '12px', fontWeight: 600, color: '#85B7EB', fontFamily: 'Inter, sans-serif', letterSpacing: '0.07em' }}>
              INTELIGÊNCIA OPERACIONAL
            </span>
          </div>
          <h2 style={{
            fontSize: 'clamp(30px, 5vw, 52px)',
            fontWeight: 800, letterSpacing: '-0.04em',
            color: 'white', fontFamily: 'Inter, sans-serif',
            lineHeight: 1.1, marginBottom: '20px',
          }}>
            Inteligência operacional
            <br />
            <span style={{
              background: 'linear-gradient(135deg, #B5D4F4 0%, #378ADD 50%, #85B7EB 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              aplicada ao jurídico.
            </span>
          </h2>
          <p style={{
            fontSize: '17px', color: 'rgba(255,255,255,0.38)', fontFamily: 'Inter, sans-serif',
            maxWidth: '560px', margin: '0 auto', lineHeight: 1.7, letterSpacing: '-0.01em',
          }}>
            Funcionalidades reais, construídas para a rotina dos escritórios de advocacia. Sem promessas exageradas — só o que já funciona e o que está sendo desenvolvido.
          </p>
        </motion.div>

        {/* Capabilities grid */}
        <div
          className="ai-capabilities-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1px',
            background: 'rgba(255,255,255,0.04)',
            borderRadius: '20px',
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.05)',
          }}
        >
          {capabilities.map(({ icon: Icon, title, description, status, statusColor, statusBg }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ background: 'rgba(55,138,221,0.09)' }}
              style={{
                padding: '28px 24px',
                background: 'rgba(255,255,255,0.02)',
                transition: 'background 0.3s',
                display: 'flex', flexDirection: 'column', gap: '12px',
              }}
            >
              {/* Icon */}
              <div style={{
                width: 40, height: 40, borderRadius: '10px',
                background: 'rgba(55,138,221,0.12)',
                border: '1px solid rgba(55,138,221,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Icon size={18} color="#85B7EB" strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h4 style={{
                fontSize: '14px', fontWeight: 700, color: 'rgba(255,255,255,0.85)',
                fontFamily: 'Inter, sans-serif', letterSpacing: '-0.01em',
                lineHeight: 1.3, margin: 0,
              }}>
                {title}
              </h4>

              {/* Description */}
              <p style={{
                fontSize: '12.5px', color: 'rgba(255,255,255,0.3)',
                fontFamily: 'Inter, sans-serif', lineHeight: 1.65,
                margin: 0, flex: 1,
              }}>
                {description}
              </p>

              {/* Status badge */}
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '5px',
                background: statusBg, borderRadius: '6px', padding: '3px 9px',
                alignSelf: 'flex-start',
              }}>
                <div style={{ width: 5, height: 5, borderRadius: '50%', background: statusColor }} />
                <span style={{ fontSize: '10px', fontWeight: 600, color: statusColor, fontFamily: 'Inter, sans-serif' }}>
                  {status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .ai-capabilities-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .ai-capabilities-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
