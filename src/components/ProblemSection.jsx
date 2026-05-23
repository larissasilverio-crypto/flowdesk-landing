import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { AlertTriangle, Database, GitBranch, Layers, Clock } from 'lucide-react'

const problems = [
  {
    icon: Database,
    title: 'Processos espalhados',
    description: 'Informações de clientes, prazos e andamentos divididos entre planilhas, WhatsApp, drives e e-mails. Nenhuma visão centralizada.',
    color: '#378ADD',
  },
  {
    icon: Layers,
    title: 'Sistemas que não conversam',
    description: 'Ferramentas desconexas que geram retrabalho constante. Cada sistema exige atualização manual e nenhum reflete a realidade em tempo real.',
    color: '#F59E0B',
  },
  {
    icon: Clock,
    title: 'Prazos gerenciados na memória',
    description: 'Prazos processuais controlados por anotações, alarmes e planilhas. Um único prazo perdido pode comprometer um processo inteiro.',
    color: '#8B5CF6',
  },
  {
    icon: GitBranch,
    title: 'Comunicação fragmentada',
    description: 'A equipe não sabe quem está fazendo o quê. Clientes pedem atualizações que ninguém tem rapidez para fornecer.',
    color: '#06B6D4',
  },
  {
    icon: AlertTriangle,
    title: 'Operação que não escala',
    description: 'Com o crescimento do escritório, o caos cresce junto. Mais processos, mais clientes, mais erros operacionais. Sem estrutura, não tem como crescer.',
    color: '#10B981',
  },
]

function ProblemCard({ icon: Icon, title, description, color, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '20px',
        padding: '28px 32px',
        background: 'white',
        border: '1px solid rgba(15,23,42,0.07)',
        borderRadius: '16px',
        transition: 'all 0.3s ease',
        cursor: 'default',
      }}
      whileHover={{
        y: -4,
        boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
        borderColor: 'rgba(15,23,42,0.12)',
      }}
    >
      <div style={{
        width: 44,
        height: 44,
        borderRadius: '12px',
        background: `${color}12`,
        border: `1px solid ${color}25`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}>
        <Icon size={20} color={color} strokeWidth={1.5} />
      </div>
      <div>
        <h3 style={{
          fontSize: '16px',
          fontWeight: 600,
          color: '#0F172A',
          fontFamily: 'Inter, sans-serif',
          letterSpacing: '-0.02em',
          marginBottom: '6px',
        }}>
          {title}
        </h3>
        <p style={{
          fontSize: '14px',
          color: '#64748B',
          fontFamily: 'Inter, sans-serif',
          lineHeight: 1.65,
          fontWeight: 400,
        }}>
          {description}
        </p>
      </div>
    </motion.div>
  )
}

export default function ProblemSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section style={{ padding: '120px 24px', background: '#F8FAFC', position: 'relative' }}>
      {/* Subtle top border */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '1px',
        height: '80px',
        background: 'linear-gradient(to bottom, transparent, rgba(30,58,138,0.2), transparent)',
      }} />

      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <div className="section-label" style={{ marginBottom: '16px' }}>O PROBLEMA</div>
          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 52px)',
            fontWeight: 800,
            letterSpacing: '-0.04em',
            color: '#0F172A',
            fontFamily: 'Inter, sans-serif',
            lineHeight: 1.1,
            marginBottom: '16px',
          }}>
            O caos operacional
            <br />custa caro demais.
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#64748B',
            fontFamily: 'Inter, sans-serif',
            maxWidth: '480px',
            margin: '0 auto',
            lineHeight: 1.6,
            letterSpacing: '-0.01em',
          }}>
            A maioria dos escritórios de advocacia opera com sistemas desconectados.
            Isso tem um preço — e ele cresce com o escritório.
          </p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {problems.map((problem, i) => (
            <ProblemCard key={problem.title} {...problem} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
