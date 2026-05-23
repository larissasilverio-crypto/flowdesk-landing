import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  FileText, Bell, Search, GitMerge,
  BookOpen, MessageSquare, CheckSquare, Users
} from 'lucide-react'

const features = [
  {
    icon: FileText,
    title: 'Geração de Petições',
    description: 'Petições e despachos gerados automaticamente a partir do modelo do escritório. Descreva o pedido — o FlowDesk redige.',
    color: '#3B82F6',
    bg: 'rgba(59,130,246,0.08)',
  },
  {
    icon: Bell,
    title: 'Monitoramento de Publicações',
    description: 'Acompanhamento contínuo de publicações jurídicas no DJESP e demais diários. Nenhuma intimação passa despercebida.',
    color: '#8B5CF6',
    bg: 'rgba(139,92,246,0.08)',
  },
  {
    icon: Search,
    title: 'Busca de Precatórios',
    description: 'Recuperação do número de ofício de precatórios via CPF ou CNPJ. Consulta direta, sem burocracia manual.',
    color: '#10B981',
    bg: 'rgba(16,185,129,0.08)',
  },
  {
    icon: GitMerge,
    title: 'FlowJus — Timeline Jurídica',
    description: 'Movimentações processuais em timeline cronológica integrada ao e-SAJ. Módulo totalmente funcional e em evolução contínua com novos tribunais.',
    color: '#F59E0B',
    bg: 'rgba(245,158,11,0.08)',
  },
  {
    icon: BookOpen,
    title: 'Resumos de Processos',
    description: 'Resumo completo do processo via número + CPF do cliente. Tudo que a equipe precisa saber em segundos.',
    color: '#06B6D4',
    bg: 'rgba(6,182,212,0.08)',
  },
  {
    icon: MessageSquare,
    title: 'Atualizações para Clientes',
    description: 'Geração de atualizações processuais em linguagem acessível, prontas para enviar ao cliente sem adaptação manual.',
    color: '#378ADD',
    bg: 'rgba(55,138,221,0.08)',
  },
  {
    icon: CheckSquare,
    title: 'Tarefas, Prazos e Agenda',
    description: 'Controle centralizado de tarefas, prazos processuais e agenda da equipe. Nada se perde, tudo tem responsável.',
    color: '#D97706',
    bg: 'rgba(217,119,6,0.08)',
  },
  {
    icon: Users,
    title: 'Gestão de Equipe',
    description: 'Atribuição de demandas, acompanhamento de carga de trabalho e visibilidade do que cada membro está fazendo.',
    color: '#1E3A8A',
    bg: 'rgba(30,58,138,0.08)',
  },
]

function FeatureCard({ feature, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const { icon: Icon, title, description, color, bg } = feature

  return (
    <motion.div
      ref={ref}
      className="feature-card"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (index % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
      style={{
        background: 'white',
        border: '1px solid rgba(15,23,42,0.07)',
        borderRadius: '18px',
        padding: '32px 28px',
        transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
        cursor: 'default',
        position: 'relative',
        overflow: 'hidden',
      }}
      onHoverStart={e => {
        e.target.style && (e.target.style.boxShadow = '0 20px 60px rgba(0,0,0,0.08)')
      }}
    >
      {/* Background accent on hover */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '120px',
          height: '120px',
          background: `radial-gradient(circle at top right, ${color}10, transparent 70%)`,
          pointerEvents: 'none',
        }}
      />

      <div style={{
        width: 48,
        height: 48,
        borderRadius: '14px',
        background: bg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '20px',
      }}>
        <Icon size={22} color={color} strokeWidth={1.5} />
      </div>

      <h3 style={{
        fontSize: '17px',
        fontWeight: 700,
        color: '#0F172A',
        fontFamily: 'Inter, sans-serif',
        letterSpacing: '-0.02em',
        marginBottom: '10px',
      }}>
        {title}
      </h3>
      <p style={{
        fontSize: '14px',
        color: '#64748B',
        fontFamily: 'Inter, sans-serif',
        lineHeight: 1.7,
        fontWeight: 400,
      }}>
        {description}
      </p>

      {/* Bottom accent bar */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: `linear-gradient(90deg, ${color}, transparent)`,
          transformOrigin: 'left',
          transition: 'transform 0.4s ease',
        }}
      />
    </motion.div>
  )
}

export default function FeaturesSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="features" className="landing-section landing-section-light" style={{ padding: '120px 24px', background: '#F8FAFC' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', marginBottom: '72px' }}
        >
          <div className="section-label" style={{ marginBottom: '16px' }}>RECURSOS</div>
          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 52px)',
            fontWeight: 800,
            letterSpacing: '-0.04em',
            color: '#0F172A',
            fontFamily: 'Inter, sans-serif',
            lineHeight: 1.1,
            marginBottom: '16px',
          }}>
            Tudo que o escritório
            <br />precisa, em um só lugar.
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#64748B',
            fontFamily: 'Inter, sans-serif',
            maxWidth: '500px',
            margin: '0 auto',
            lineHeight: 1.6,
            letterSpacing: '-0.01em',
          }}>
            Cada funcionalidade foi construída para eliminar retrabalho e ampliar a capacidade operacional da equipe jurídica.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '16px',
        }}>
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
