import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'

const founders = [
  {
    name: 'Larissa Silvério',
    role: 'Cofundadora',
    focus: 'Produto · Operação · Sistemas · Visão Jurídica',
    photo: '/founders/larissa.jpg',
    photoPosition: 'top center',
    accent: '#378ADD',
    accentRgb: '55,138,221',
    bio: 'Bacharel em Direito, Larissa atua diretamente na operação jurídica e no desenvolvimento da plataforma. Ao perceber que o maior desafio dos escritórios não era o processo em si — mas a gestão, a visibilidade e a comunicação — criou a visão original do FlowDesk. Além da visão do produto, participa ativamente na construção técnica da plataforma.',
    tags: ['Direito', 'Operação Jurídica', 'Produto', 'Sistemas'],
    instagram: 'larissa_easilverio',
    instagramUrl: 'https://instagram.com/larissa_easilverio',
  },
  {
    name: 'Ricardo Segundo',
    role: 'Cofundador',
    focus: 'Tecnologia · Arquitetura · Automação',
    photo: '/founders/ricardo.jpg',
    photoPosition: 'center 55%',
    accent: '#85B7EB',
    accentRgb: '133,183,235',
    bio: 'Estudante de engenharia biomédica no Canadá, Ricardo atua com automações e sistemas. Responsável pela visão técnica, arquitetura e evolução tecnológica da plataforma — constrói os sistemas que transformam a visão operacional em produto escalável. Cofundador do FlowDesk desde a concepção.',
    tags: ['Engenharia Biomédica', 'Automação', 'Sistemas'],
    instagram: 'ric_segundo',
    instagramUrl: 'https://instagram.com/ric_segundo',
  },
]

// Inline Instagram SVG icon — lucide-react doesn't export Instagram
function InstagramIcon({ size = 14, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill={color} stroke="none" />
    </svg>
  )
}

function FounderCard({ founder, index, inView }) {
  const { name, role, focus, photo, photoPosition = 'top center', accent, accentRgb, bio, tags, instagram, instagramUrl } = founder
  const imgRef = useRef(null)
  const fallbackRef = useRef(null)

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.18, ease: [0.16, 1, 0.3, 1] }}
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '24px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Photo */}
      <div style={{
        height: '320px',
        position: 'relative',
        overflow: 'hidden',
        background: `linear-gradient(160deg, rgba(${accentRgb},0.1) 0%, rgba(5,10,24,0.8) 100%)`,
      }}>
        <img
          ref={imgRef}
          src={photo}
          alt={name}
          onError={() => {
            if (imgRef.current) imgRef.current.style.display = 'none'
            if (fallbackRef.current) fallbackRef.current.style.display = 'block'
          }}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: photoPosition,
            display: 'block',
          }}
        />
        {/* Fallback — neutral gradient only, no initials */}
        <div
          ref={fallbackRef}
          style={{
            display: 'none',
            position: 'absolute',
            inset: 0,
            background: `linear-gradient(160deg, rgba(${accentRgb},0.18) 0%, rgba(5,10,24,0.9) 100%)`,
          }}
        />
        {/* Bottom gradient */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '120px',
          background: 'linear-gradient(to top, rgba(8,14,28,0.98), transparent)',
          pointerEvents: 'none',
        }} />
        {/* Role chip */}
        <div style={{
          position: 'absolute', bottom: '18px', left: '24px',
          display: 'inline-flex', alignItems: 'center', gap: '6px',
          background: `rgba(${accentRgb},0.14)`,
          border: `1px solid rgba(${accentRgb},0.28)`,
          borderRadius: '100px', padding: '5px 14px',
        }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: accent, boxShadow: `0 0 7px ${accent}` }} />
          <span style={{ fontSize: '11px', fontWeight: 600, color: accent, fontFamily: 'Inter, sans-serif', letterSpacing: '0.02em' }}>
            {role}
          </span>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '28px 32px 32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: '14px' }}>
          <h3 style={{
            fontSize: '22px', fontWeight: 800,
            color: 'white', fontFamily: 'Inter, sans-serif',
            letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '5px',
          }}>
            {name}
          </h3>
          <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.3)', fontFamily: 'Inter, sans-serif' }}>{focus}</span>
        </div>

        <p style={{
          fontSize: '14px', color: 'rgba(255,255,255,0.48)',
          fontFamily: 'Inter, sans-serif', lineHeight: 1.8,
          marginBottom: '20px', flex: 1,
        }}>
          {bio}
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '24px' }}>
          {tags.map(tag => (
            <span key={tag} style={{
              fontSize: '11px', fontWeight: 500, color: 'rgba(255,255,255,0.28)',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '6px', padding: '4px 10px',
              fontFamily: 'Inter, sans-serif',
            }}>
              {tag}
            </span>
          ))}
        </div>

        {/* Instagram — elegant pill */}
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '100px',
            padding: '8px 16px',
            color: 'rgba(255,255,255,0.35)',
            textDecoration: 'none',
            fontSize: '12px', fontFamily: 'Inter, sans-serif', fontWeight: 500,
            letterSpacing: '0.01em',
            transition: 'all 0.25s',
            alignSelf: 'flex-start',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = `rgba(${accentRgb},0.1)`
            e.currentTarget.style.borderColor = `rgba(${accentRgb},0.3)`
            e.currentTarget.style.color = accent
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
            e.currentTarget.style.color = 'rgba(255,255,255,0.35)'
          }}
        >
          <InstagramIcon size={13} color="currentColor" />
          <span>@{instagram}</span>
          <ArrowUpRight size={10} style={{ opacity: 0.4 }} />
        </a>
      </div>
    </motion.div>
  )
}

export default function FoundersSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="founders"
      style={{
        padding: '120px 24px',
        background: 'linear-gradient(180deg, #060C1E 0%, #080F22 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background glow */}
      <div style={{
        position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)',
        width: '900px', height: '600px',
        background: 'radial-gradient(ellipse, rgba(55,138,221,0.06) 0%, transparent 70%)',
        filter: 'blur(80px)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(rgba(55,138,221,0.04) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
        maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 20%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 20%, transparent 100%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative' }}>
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
            background: 'rgba(55,138,221,0.1)', border: '1px solid rgba(55,138,221,0.18)',
            borderRadius: '100px', padding: '6px 18px', marginBottom: '24px',
          }}>
            <span style={{ fontSize: '12px', fontWeight: 600, color: '#85B7EB', fontFamily: 'Inter, sans-serif', letterSpacing: '0.07em' }}>
              OS FUNDADORES
            </span>
          </div>
          <h2 style={{
            fontSize: 'clamp(28px, 4.5vw, 48px)',
            fontWeight: 800, letterSpacing: '-0.04em',
            color: 'white', fontFamily: 'Inter, sans-serif',
            lineHeight: 1.1, marginBottom: '20px',
          }}>
            Criado por quem vive a operação
            <br />
            <span style={{
              background: 'linear-gradient(135deg, #B5D4F4 0%, #378ADD 50%, #85B7EB 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              e constrói tecnologia.
            </span>
          </h2>
          <p style={{
            fontSize: '17px', color: 'rgba(255,255,255,0.36)', fontFamily: 'Inter, sans-serif',
            maxWidth: '620px', margin: '0 auto', lineHeight: 1.7, letterSpacing: '-0.01em',
          }}>
            O FlowDesk nasceu da união entre visão jurídico-operacional e arquitetura tecnológica — uma plataforma criada por quem conhece a dor real dos escritórios e sabe transformar processos em sistemas inteligentes.
          </p>
        </motion.div>

        {/* Founder cards */}
        <div
          className="founders-grid"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '48px' }}
        >
          {founders.map((founder, i) => (
            <FounderCard key={founder.name} founder={founder} index={i} inView={inView} />
          ))}
        </div>

        {/* Manifesto block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          style={{
            padding: '48px 56px',
            background: 'rgba(55,138,221,0.04)',
            border: '1px solid rgba(55,138,221,0.1)',
            borderRadius: '20px',
          }}
        >
          {/* Main statement */}
          <p style={{
            fontSize: 'clamp(18px, 2.8vw, 24px)',
            color: 'rgba(255,255,255,0.72)',
            fontFamily: 'Inter, sans-serif',
            lineHeight: 1.6,
            letterSpacing: '-0.025em',
            fontWeight: 600,
            marginBottom: '24px',
            maxWidth: '760px',
          }}>
            O maior problema dos escritórios de advocacia nunca foi o processo em si.
          </p>

          {/* Expanded concept */}
          <p style={{
            fontSize: '15px',
            color: 'rgba(255,255,255,0.38)',
            fontFamily: 'Inter, sans-serif',
            lineHeight: 1.85,
            letterSpacing: '-0.01em',
            marginBottom: '28px',
            maxWidth: '680px',
          }}>
            A maior dor sempre foi outra: a operação fragmentada, a comunicação que se perde, os prazos gerenciados na memória,
            as informações espalhadas, a equipe sem visibilidade, os fluxos que dependem de uma única pessoa para funcionar.
            Escritórios brilhantes afogados em caos operacional — não por falta de competência jurídica, mas por falta de
            uma plataforma construída para essa realidade.
          </p>

          {/* Pain points — compact grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '12px',
            marginBottom: '32px',
          }}>
            {[
              'Operação fragmentada',
              'Comunicação que se perde',
              'Prazos na memória',
              'Visibilidade zero',
              'Gestão desconectada',
              'Fluxos sem sistema',
            ].map((pain) => (
              <div key={pain} style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                padding: '10px 14px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '10px',
              }}>
                <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#378ADD', flexShrink: 0 }} />
                <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                  {pain}
                </span>
              </div>
            ))}
          </div>

          {/* Resolution */}
          <p style={{
            fontSize: '15px',
            color: 'rgba(255,255,255,0.55)',
            fontFamily: 'Inter, sans-serif',
            lineHeight: 1.7,
            letterSpacing: '-0.01em',
            fontStyle: 'italic',
            borderLeft: '2px solid rgba(55,138,221,0.4)',
            paddingLeft: '20px',
          }}>
            O FlowDesk existe para resolver exatamente isso. Não como mais uma ferramenta — mas como a infraestrutura operacional
            que os escritórios modernos precisam para crescer com clareza, velocidade e controle real.
          </p>

          {/* Attribution */}
          <div style={{
            marginTop: '28px',
            fontSize: '11px', color: 'rgba(255,255,255,0.18)',
            fontFamily: 'Inter, sans-serif', letterSpacing: '0.08em',
          }}>
            LARISSA & RICARDO · CO-FUNDADORES · FLOWDESK
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .founders-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .founders-manifesto { padding: 32px 28px !important; }
        }
      `}</style>
    </section>
  )
}
