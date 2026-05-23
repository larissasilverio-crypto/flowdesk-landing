import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Scale, GraduationCap, Building2, Sparkles, ArrowRight } from 'lucide-react'

const products = [
  {
    id: 'adv',
    icon: Scale,
    name: 'FlowDesk ADV',
    tag: 'Disponível',
    tagColor: '#10B981',
    tagBg: 'rgba(16,185,129,0.1)',
    headline: 'Operações jurídicas centralizadas.',
    description: 'Controle operacional completo para escritórios de advocacia. Do processo ao cliente — tudo em um só lugar, com inteligência real.',
    features: ['FlowJus — Timeline integrada ao e-SAJ', 'Monitoramento de publicações jurídicas', 'Geração de petições por modelo', 'Gestão de tarefas, prazos e equipe'],
    gradient: 'linear-gradient(135deg, rgba(30,58,138,0.06) 0%, rgba(30,58,138,0.02) 100%)',
    border: 'rgba(30,58,138,0.12)',
    iconBg: 'rgba(30,58,138,0.1)',
    iconColor: '#1E3A8A',
    accentColor: '#1E3A8A',
  },
  {
    id: 'academy',
    icon: GraduationCap,
    name: 'FlowDesk Academy',
    tag: 'Em breve',
    tagColor: '#F59E0B',
    tagBg: 'rgba(245,158,11,0.1)',
    headline: 'Treinamento operacional escalável.',
    description: 'Plataforma de educação corporativa com trilhas de aprendizado, certificações e métricas de desenvolvimento da equipe.',
    features: ['Trilhas personalizadas', 'Certificações digitais', 'Métricas de aprendizado', 'Conteúdo em vídeo'],
    gradient: 'linear-gradient(135deg, rgba(245,158,11,0.06) 0%, rgba(245,158,11,0.02) 100%)',
    border: 'rgba(245,158,11,0.12)',
    iconBg: 'rgba(245,158,11,0.1)',
    iconColor: '#D97706',
    accentColor: '#D97706',
  },
  {
    id: 'business',
    icon: Building2,
    name: 'FlowDesk Business',
    tag: 'Em breve',
    tagColor: '#F59E0B',
    tagBg: 'rgba(245,158,11,0.1)',
    headline: 'Operações empresariais unificadas.',
    description: 'Plataforma para gestão de equipes, projetos e workflows em uma visão unificada do negócio. Em desenvolvimento.',
    features: ['Gestão de equipes', 'Dashboards gerenciais', 'Automação de workflows', 'Relatórios executivos'],
    noLink: true,
    gradient: 'linear-gradient(135deg, rgba(139,92,246,0.06) 0%, rgba(139,92,246,0.02) 100%)',
    border: 'rgba(139,92,246,0.12)',
    iconBg: 'rgba(139,92,246,0.1)',
    iconColor: '#7C3AED',
    accentColor: '#7C3AED',
  },
  {
    id: 'future',
    icon: Sparkles,
    name: 'Próximos produtos',
    tag: 'Roadmap',
    tagColor: '#64748B',
    tagBg: 'rgba(100,116,139,0.1)',
    headline: 'O ecossistema continua crescendo.',
    description: 'FlowDesk está construindo o futuro das operações inteligentes. Novos produtos, novas capacidades, uma única plataforma.',
    features: ['FlowDesk Finance', 'FlowDesk HR', 'FlowDesk CRM', 'E muito mais...'],
    gradient: 'linear-gradient(135deg, rgba(100,116,139,0.04) 0%, transparent 100%)',
    border: 'rgba(100,116,139,0.1)',
    iconBg: 'rgba(100,116,139,0.08)',
    iconColor: '#64748B',
    accentColor: '#64748B',
    dashed: true,
  },
]

function ProductCard({ product, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const { icon: Icon, name, tag, tagColor, tagBg, headline, description, features, gradient, border, iconBg, iconColor, accentColor, dashed, noLink } = product

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      style={{
        background: gradient,
        border: `1px solid ${border}`,
        borderStyle: dashed ? 'dashed' : 'solid',
        borderRadius: '20px',
        padding: '36px',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'default',
        transition: 'all 0.35s cubic-bezier(0.16,1,0.3,1)',
      }}
    >
      {/* Tag */}
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '5px',
        background: tagBg,
        color: tagColor,
        fontSize: '11px',
        fontWeight: 600,
        padding: '4px 10px',
        borderRadius: '100px',
        marginBottom: '24px',
        fontFamily: 'Inter, sans-serif',
        letterSpacing: '0.03em',
      }}>
        <div style={{ width: 5, height: 5, borderRadius: '50%', background: tagColor }} />
        {tag}
      </div>

      {/* Icon + Name */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
        <div style={{
          width: 48,
          height: 48,
          borderRadius: '14px',
          background: iconBg,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Icon size={22} color={iconColor} strokeWidth={1.5} />
        </div>
        <div style={{
          fontSize: '18px',
          fontWeight: 700,
          color: '#0F172A',
          fontFamily: 'Inter, sans-serif',
          letterSpacing: '-0.03em',
        }}>
          {name}
        </div>
      </div>

      <h3 style={{
        fontSize: '22px',
        fontWeight: 700,
        color: '#0F172A',
        fontFamily: 'Inter, sans-serif',
        letterSpacing: '-0.03em',
        lineHeight: 1.2,
        marginBottom: '12px',
      }}>
        {headline}
      </h3>

      <p style={{
        fontSize: '14px',
        color: '#64748B',
        fontFamily: 'Inter, sans-serif',
        lineHeight: 1.7,
        marginBottom: '24px',
      }}>
        {description}
      </p>

      {/* Features */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {features.map((f) => (
          <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: 5, height: 5, borderRadius: '50%', background: accentColor, flexShrink: 0 }} />
            <span style={{ fontSize: '13px', color: '#475569', fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>{f}</span>
          </div>
        ))}
      </div>

      {!dashed && !noLink && (
        <div style={{ marginTop: '28px' }}>
          <a
            href="#pricing"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '13px',
              fontWeight: 600,
              color: accentColor,
              textDecoration: 'none',
              fontFamily: 'Inter, sans-serif',
              transition: 'gap 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.gap = '10px'}
            onMouseLeave={e => e.currentTarget.style.gap = '6px'}
          >
            Saiba mais
            <ArrowRight size={13} />
          </a>
        </div>
      )}
    </motion.div>
  )
}

export default function EcosystemSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="ecosystem" style={{ padding: '120px 24px', background: 'white' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', marginBottom: '72px' }}
        >
          <div className="section-label" style={{ marginBottom: '16px' }}>ECOSSISTEMA</div>
          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 52px)',
            fontWeight: 800,
            letterSpacing: '-0.04em',
            color: '#0F172A',
            fontFamily: 'Inter, sans-serif',
            lineHeight: 1.1,
            marginBottom: '16px',
          }}>
            Uma plataforma.
            <br />Múltiplos produtos.
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#64748B',
            fontFamily: 'Inter, sans-serif',
            maxWidth: '460px',
            margin: '0 auto',
            lineHeight: 1.6,
            letterSpacing: '-0.01em',
          }}>
            Cada produto do ecossistema FlowDesk foi construído para operar de forma independente — e ainda mais poderoso em conjunto.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px',
        }}>
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
