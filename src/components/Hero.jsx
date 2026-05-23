import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, TrendingUp, Clock, CheckCircle2, FileText, AlertTriangle, Zap, Calendar } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
})

// Real FlowDesk ADV interface style
function DashboardMockup() {
  const navItems = [
    { label: 'Dashboard', active: true },
    { label: 'Atendimentos', active: false },
    { label: 'Tarefas', active: false },
    { label: 'Administrativo INSS', active: false },
    { label: 'Agenda', active: false },
    { label: 'Aguardando Docs', active: false },
    { label: 'Clientes', active: false },
  ]

  const indicators = [
    { label: 'TOTAL DE TAREFAS', value: '527', color: '#60A5FA', bg: 'rgba(96,165,250,0.1)', Icon: FileText },
    { label: 'ATRASADAS', value: '114', color: '#F87171', bg: 'rgba(248,113,113,0.1)', Icon: AlertTriangle },
    { label: 'URGENTES', value: '2', color: '#C084FC', bg: 'rgba(192,132,252,0.1)', Icon: Zap },
    { label: 'CONCLUÍDAS', value: '370', color: '#34D399', bg: 'rgba(52,211,153,0.1)', Icon: CheckCircle2 },
  ]

  return (
    <div style={{
      background: '#0D1526',
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 40px 120px rgba(0,0,0,0.65), 0 0 0 1px rgba(255,255,255,0.04)',
      width: '100%',
      maxWidth: '780px',
      margin: '0 auto',
    }}>
      {/* Window chrome */}
      <div style={{
        padding: '12px 18px',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        display: 'flex', alignItems: 'center', gap: '8px',
        background: 'rgba(0,0,0,0.25)',
      }}>
        <div style={{ display: 'flex', gap: '6px' }}>
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#E11D48', opacity: 0.8 }} />
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#F59E0B', opacity: 0.8 }} />
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#22C55E', opacity: 0.8 }} />
        </div>
        <div style={{
          flex: 1, background: 'rgba(255,255,255,0.05)', borderRadius: '6px',
          height: '22px', marginLeft: '8px',
          display: 'flex', alignItems: 'center', paddingLeft: '10px', gap: '6px',
        }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#34D399' }} />
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '11px', fontFamily: 'Inter, sans-serif' }}>
            app.flowdesk.com.br
          </span>
        </div>
      </div>

      {/* App layout — real FlowDesk structure */}
      <div style={{ display: 'flex', height: '385px' }}>
        {/* Sidebar */}
        <div style={{
          width: '162px', flexShrink: 0,
          background: '#080F1C',
          borderRight: '1px solid rgba(255,255,255,0.04)',
          padding: '12px 8px',
          display: 'flex', flexDirection: 'column',
        }}>
          {/* Logo */}
          <div style={{ padding: '4px 8px 14px', borderBottom: '1px solid rgba(255,255,255,0.04)', marginBottom: '10px' }}>
            <div style={{ fontSize: '12px', fontWeight: 700, color: '#378ADD', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.03em', lineHeight: 1 }}>FlowDesk ADV</div>
            <div style={{ fontSize: '7.5px', color: 'rgba(255,255,255,0.18)', fontFamily: 'Inter, sans-serif', letterSpacing: '0.07em', textTransform: 'uppercase', marginTop: '2px' }}>SAAS · INTELLIGENT OPS</div>
          </div>
          {/* Workspace */}
          <div style={{ padding: '0 8px 10px', borderBottom: '1px solid rgba(255,255,255,0.04)', marginBottom: '10px' }}>
            <div style={{ fontSize: '7.5px', fontWeight: 700, color: 'rgba(255,255,255,0.2)', fontFamily: 'Inter, sans-serif', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '4px' }}>WORKSPACE ATUAL</div>
            <div style={{ fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.65)', fontFamily: 'Inter, sans-serif' }}>MCR Advocacia</div>
          </div>
          {/* Nav */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', flex: 1 }}>
            {navItems.map(({ label, active }) => (
              <div key={label} style={{
                padding: '6px 8px', borderRadius: '7px',
                background: active ? 'rgba(55,138,221,0.18)' : 'transparent',
                borderLeft: active ? '2px solid #378ADD' : '2px solid transparent',
              }}>
                <span style={{ fontSize: '10px', color: active ? '#85B7EB' : 'rgba(255,255,255,0.22)', fontFamily: 'Inter, sans-serif', fontWeight: active ? 600 : 400, lineHeight: 1 }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
          {/* User */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.04)', paddingTop: '10px', padding: '10px 8px 0' }}>
            <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
              <div style={{ display: 'flex', gap: '-4px' }}>
                <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'linear-gradient(135deg, #378ADD, #85B7EB)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: '7px', fontWeight: 700, color: 'white', fontFamily: 'Inter' }}>LS</span>
                </div>
              </div>
              <div>
                <div style={{ fontSize: '9px', fontWeight: 600, color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter, sans-serif' }}>Larissa & Ricardo</div>
                <div style={{ fontSize: '7.5px', color: 'rgba(255,255,255,0.2)', fontFamily: 'Inter, sans-serif' }}>CO-FOUNDERS</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div style={{ flex: 1, padding: '16px 20px', overflow: 'hidden', background: '#0D1526' }}>
          {/* Greeting */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '13px' }}>
            <div>
              <div style={{ fontSize: '17px', fontWeight: 700, color: 'white', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                Boa tarde, <span style={{ color: '#378ADD' }}>Larissa</span>
              </div>
              <div style={{ fontSize: '9px', color: 'rgba(255,255,255,0.22)', fontFamily: 'Inter, sans-serif', marginTop: '3px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                Central Operacional — FlowDesk SAAS
              </div>
            </div>
            <Sparkles size={14} color="rgba(55,138,221,0.4)" />
          </div>

          {/* Tabs */}
          <div style={{ display: 'flex', gap: '4px', marginBottom: '13px' }}>
            <div style={{ padding: '4px 12px', background: '#378ADD', borderRadius: '8px', fontSize: '10px', fontWeight: 600, color: 'white', fontFamily: 'Inter, sans-serif' }}>Dashboard</div>
            <div style={{ padding: '4px 12px', fontSize: '10px', color: 'rgba(255,255,255,0.25)', fontFamily: 'Inter, sans-serif', borderRadius: '8px' }}>Linha do Tempo</div>
          </div>

          {/* INDICADORES header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
            <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#378ADD' }} />
            <span style={{ fontSize: '8.5px', fontWeight: 700, color: 'rgba(255,255,255,0.28)', fontFamily: 'Inter, sans-serif', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              INDICADORES DE TAREFAS
            </span>
          </div>

          {/* Stat cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '7px', marginBottom: '13px' }}>
            {indicators.map(({ label, value, color, bg, Icon }) => (
              <div key={label} style={{
                background: bg,
                border: `1px solid ${color}22`,
                borderRadius: '10px', padding: '9px 10px',
                position: 'relative', overflow: 'hidden',
              }}>
                <div style={{ fontSize: '7.5px', color: 'rgba(255,255,255,0.32)', fontFamily: 'Inter, sans-serif', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '4px', lineHeight: 1.3 }}>{label}</div>
                <div style={{ fontSize: '22px', fontWeight: 800, color, fontFamily: 'Inter, sans-serif', letterSpacing: '-0.04em', lineHeight: 1 }}>{value}</div>
                <Icon size={15} color={color} style={{ position: 'absolute', top: 9, right: 9, opacity: 0.35 }} strokeWidth={1.5} />
              </div>
            ))}
          </div>

          {/* VISÃO GERAL header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
            <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#378ADD' }} />
            <span style={{ fontSize: '8.5px', fontWeight: 700, color: 'rgba(255,255,255,0.28)', fontFamily: 'Inter, sans-serif', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              VISÃO GERAL
            </span>
          </div>

          {/* Bottom panels */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            {/* Task distribution */}
            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '10px', padding: '10px 12px' }}>
              <div style={{ fontSize: '9px', fontWeight: 600, color: 'rgba(255,255,255,0.35)', fontFamily: 'Inter, sans-serif', marginBottom: '4px' }}>Distribuição de Tarefas</div>
              <div style={{ fontSize: '8px', color: 'rgba(255,255,255,0.18)', fontFamily: 'Inter, sans-serif', marginBottom: '8px' }}>509 tarefas no total</div>
              <div style={{ display: 'flex', gap: '3px', height: '36px', alignItems: 'flex-end' }}>
                {[{ h: '85%', c: '#F87171' }, { h: '40%', c: '#34D399' }, { h: '22%', c: '#60A5FA' }, { h: '60%', c: '#F59E0B' }, { h: '15%', c: '#C084FC' }, { h: '70%', c: '#34D399' }].map(({ h, c }, i) => (
                  <div key={i} style={{ flex: 1, height: h, background: c, borderRadius: '3px 3px 0 0', opacity: 0.75 }} />
                ))}
              </div>
            </div>
            {/* Upcoming */}
            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '10px', padding: '10px 12px' }}>
              <div style={{ fontSize: '9px', fontWeight: 600, color: 'rgba(255,255,255,0.35)', fontFamily: 'Inter, sans-serif', marginBottom: '4px' }}>Audiências & Perícias</div>
              <div style={{ fontSize: '8px', color: 'rgba(255,255,255,0.18)', fontFamily: 'Inter, sans-serif', marginBottom: '8px' }}>7 próximos</div>
              {[
                { date: '25/05', type: 'PERÍCIA', time: '12:40' },
                { date: '25/05', type: 'PERÍCIA', time: '13:00' },
                { date: '28/05', type: 'AUDIÊNCIA', time: '14:30' },
              ].map(({ date, type, time }) => (
                <div key={`${date}-${time}`} style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '5px' }}>
                  <div style={{ background: 'rgba(248,113,113,0.15)', border: '1px solid rgba(248,113,113,0.2)', borderRadius: '4px', padding: '2px 5px', fontSize: '7.5px', color: '#F87171', fontFamily: 'Inter, sans-serif', fontWeight: 700, whiteSpace: 'nowrap' }}>{date}</div>
                  <span style={{ fontSize: '7.5px', color: 'rgba(255,255,255,0.2)', fontFamily: 'Inter, sans-serif' }}>{type} · {time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Floating card — removes display from inline style so Tailwind hidden/flex classes work
function FloatingCard({ children, style, className, animateY, delay = 0 }) {
  return (
    <motion.div
      animate={{ y: animateY ?? [0, -10, 0] }}
      transition={{ duration: 5 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
      className={className}
      style={{
        position: 'absolute',
        background: 'rgba(10,20,40,0.92)',
        border: '1px solid rgba(255,255,255,0.09)',
        borderRadius: '14px',
        padding: '12px 16px',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        alignItems: 'center',
        gap: '10px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
        zIndex: 10,
        ...style,
      }}
    >
      {children}
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #050A18 0%, #080F20 60%, #0A1428 100%)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '100px',
        paddingBottom: '80px',
      }}
    >
      {/* Background grid */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(rgba(30,58,138,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(30,58,138,0.07) 1px, transparent 1px)',
        backgroundSize: '56px 56px',
        maskImage: 'radial-gradient(ellipse 90% 70% at 50% 25%, black 30%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 90% 70% at 50% 25%, black 30%, transparent 100%)',
        pointerEvents: 'none',
      }} />

      {/* Ambient glow — left */}
      <motion.div
        animate={{ opacity: [0.25, 0.45, 0.25], scale: [1, 1.08, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: '10%',
          left: '10%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(30,58,138,0.22) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />
      {/* Ambient glow — right */}
      <motion.div
        animate={{ opacity: [0.15, 0.3, 0.15], scale: [1, 1.12, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2.5 }}
        style={{
          position: 'absolute',
          top: '5%',
          right: '5%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(225,29,72,0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }}
      />

      {/* Floating cards — desktop only (className controls display via hidden/lg:flex) */}
      <FloatingCard
        className="hidden lg:flex"
        delay={0}
        style={{ top: '24%', left: '3.5%' }}
      >
        <div style={{ background: 'rgba(34,197,94,0.12)', borderRadius: '8px', padding: '8px', border: '1px solid rgba(34,197,94,0.15)' }}>
          <CheckCircle2 size={15} color="#34D399" />
        </div>
        <div>
          <div style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.88)', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.01em' }}>Petição gerada</div>
          <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.35)', fontFamily: 'Inter, sans-serif', marginTop: '1px' }}>Modelo do escritório · agora</div>
        </div>
      </FloatingCard>

      <FloatingCard
        className="hidden lg:flex"
        delay={1}
        animateY={[0, -8, 0]}
        style={{ top: '30%', right: '3.5%' }}
      >
        <div style={{ background: 'rgba(30,58,138,0.25)', borderRadius: '8px', padding: '8px', border: '1px solid rgba(30,58,138,0.35)' }}>
          <Sparkles size={15} color="#60A5FA" />
        </div>
        <div>
          <div style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.88)', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.01em' }}>Publicação detectada</div>
          <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.35)', fontFamily: 'Inter, sans-serif', marginTop: '1px' }}>DJESP · processo nº 0012345</div>
        </div>
      </FloatingCard>

      <FloatingCard
        className="hidden xl:flex"
        delay={0.5}
        animateY={[0, -12, 0]}
        style={{ bottom: '30%', left: '2.5%' }}
      >
        <div style={{ background: 'rgba(167,139,250,0.12)', borderRadius: '8px', padding: '8px', border: '1px solid rgba(167,139,250,0.2)' }}>
          <TrendingUp size={15} color="#A78BFA" />
        </div>
        <div>
          <div style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.88)', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.01em' }}>Resumo gerado</div>
          <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.35)', fontFamily: 'Inter, sans-serif', marginTop: '1px' }}>Processo · CPF do cliente</div>
        </div>
      </FloatingCard>

      <FloatingCard
        className="hidden xl:flex"
        delay={2}
        animateY={[0, -9, 0]}
        style={{ bottom: '26%', right: '2.5%' }}
      >
        <div style={{ background: 'rgba(245,158,11,0.12)', borderRadius: '8px', padding: '8px', border: '1px solid rgba(245,158,11,0.2)' }}>
          <Clock size={15} color="#F59E0B" />
        </div>
        <div>
          <div style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.88)', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.01em' }}>Prazo registrado</div>
          <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.35)', fontFamily: 'Inter, sans-serif', marginTop: '1px' }}>15/06/2025 — 30 dias</div>
        </div>
      </FloatingCard>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: '860px', margin: '0 auto', padding: '0 24px' }}>

        {/* Badge */}
        <motion.div {...fadeUp(0.1)} style={{ marginBottom: '28px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(30,58,138,0.14)',
            border: '1px solid rgba(30,58,138,0.28)',
            borderRadius: '100px',
            padding: '5px 16px 5px 6px',
          }}>
            <div style={{
              background: 'rgba(30,58,138,0.5)',
              borderRadius: '100px',
              padding: '3px 10px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
            }}>
              <Sparkles size={10} color="#93C5FD" />
              <span style={{ fontSize: '10px', fontWeight: 700, color: '#93C5FD', fontFamily: 'Inter, sans-serif', letterSpacing: '0.06em' }}>NOVO</span>
            </div>
            <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
              IA integrada às operações reais
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1 {...fadeUp(0.2)} style={{
          fontSize: 'clamp(38px, 7vw, 78px)',
          fontWeight: 800,
          lineHeight: 1.04,
          letterSpacing: '-0.04em',
          color: '#ffffff',
          fontFamily: 'Inter, -apple-system, sans-serif',
          marginBottom: '22px',
        }}>
          A plataforma operacional
          <br />
          <span style={{
            background: 'linear-gradient(135deg, #60A5FA 0%, #378ADD 45%, #85B7EB 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            para escritórios de advocacia.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p {...fadeUp(0.3)} style={{
          fontSize: 'clamp(15px, 2.2vw, 19px)',
          lineHeight: 1.7,
          color: 'rgba(255,255,255,0.45)',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 400,
          maxWidth: '560px',
          margin: '0 auto 40px',
          letterSpacing: '-0.01em',
        }}>
          Gestão de tarefas, prazos, clientes e processos — com inteligência
          integrada ao e-SAJ e aos diários oficiais.
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.4)} style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '56px' }}>
          <a
            href="#pricing"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: '#1E3A8A',
              color: 'white',
              fontSize: '15px',
              fontWeight: 600,
              padding: '14px 28px',
              borderRadius: '12px',
              textDecoration: 'none',
              letterSpacing: '-0.015em',
              transition: 'all 0.25s cubic-bezier(0.16,1,0.3,1)',
              border: '1px solid rgba(96,165,250,0.25)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#1D4ED8'
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(30,58,138,0.5)'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = '#1E3A8A'
              e.currentTarget.style.boxShadow = 'none'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            Começar agora
            <ArrowRight size={15} />
          </a>
          <a
            href="#features"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(255,255,255,0.05)',
              color: 'rgba(255,255,255,0.75)',
              fontSize: '15px',
              fontWeight: 500,
              padding: '14px 28px',
              borderRadius: '12px',
              textDecoration: 'none',
              letterSpacing: '-0.015em',
              transition: 'all 0.25s',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.09)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'
              e.currentTarget.style.color = 'white'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
              e.currentTarget.style.color = 'rgba(255,255,255,0.75)'
            }}
          >
            Ver recursos
            <ArrowRight size={14} style={{ opacity: 0.6 }} />
          </a>
        </motion.div>

        {/* Validation proof */}
        <motion.div {...fadeUp(0.5)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.2)', fontFamily: 'Inter, sans-serif', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600 }}>
            Validado em escritórios jurídicos reais
          </span>
        </motion.div>
      </div>

      {/* Dashboard mockup */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.1, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          maxWidth: '900px',
          padding: '0 24px',
          marginTop: '60px',
        }}
      >
        <DashboardMockup />
        {/* Bottom fade to next section */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: '24px',
          right: '24px',
          height: '100px',
          background: 'linear-gradient(to top, #050A18, transparent)',
          borderRadius: '0 0 20px 20px',
          pointerEvents: 'none',
        }} />
      </motion.div>
    </section>
  )
}
