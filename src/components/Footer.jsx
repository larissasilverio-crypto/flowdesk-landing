import Logo from './Logo'

const links = {
  Navegacao: [
    { label: 'Produto', href: '#ecosystem' },
    { label: 'IA', href: '#ai' },
    { label: 'Recursos', href: '#features' },
    { label: 'Precos', href: '#pricing' },
  ],
  Plataforma: [
    { label: 'Como funciona', href: '#flow' },
    { label: 'Fundadores', href: '#founders' },
    { label: 'Contato', href: '#contact' },
    { label: 'Comecar agora', href: '#pricing' },
  ],
  Ecossistema: [
    { label: 'FlowDesk ADV', href: '#ecosystem' },
    { label: 'FlowDesk Academy', href: '#ecosystem' },
    { label: 'FlowDesk Business', href: '#ecosystem' },
    { label: 'Roadmap', href: '#ecosystem' },
  ],
}

export default function Footer() {
  return (
    <footer
      id="contact"
      className="footer-shell"
      style={{
        background: '#050A17',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        padding: '64px 24px 40px',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div
          className="footer-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.5fr repeat(3, 1fr)',
            gap: '48px',
            marginBottom: '56px',
          }}
        >
          <div>
            <Logo white />
            <p
              style={{
                fontSize: '14px',
                color: 'rgba(255,255,255,0.3)',
                fontFamily: 'Inter, sans-serif',
                lineHeight: 1.7,
                marginTop: '20px',
                maxWidth: '260px',
              }}
            >
              Plataforma de operacoes inteligentes para escritorios de advocacia.
              Construida de dentro do problema real.
            </p>
            <div
              style={{
                marginTop: '24px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'rgba(16,185,129,0.1)',
                border: '1px solid rgba(16,185,129,0.2)',
                borderRadius: '100px',
                padding: '5px 12px',
              }}
            >
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: '#10B981',
                }}
              />
              <span
                style={{
                  fontSize: '12px',
                  color: '#34D399',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                }}
              >
                Ecossistema em evolucao
              </span>
            </div>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <div
                style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  color: 'rgba(255,255,255,0.5)',
                  fontFamily: 'Inter, sans-serif',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: '20px',
                }}
              >
                {category}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {items.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    style={{
                      fontSize: '14px',
                      color: 'rgba(255,255,255,0.35)',
                      fontFamily: 'Inter, sans-serif',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                      fontWeight: 400,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'rgba(255,255,255,0.7)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'rgba(255,255,255,0.35)'
                    }}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.06)',
            paddingTop: '28px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <span
            style={{
              fontSize: '13px',
              color: 'rgba(255,255,255,0.2)',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            Copyright 2026 FlowDesk. Todos os direitos reservados.
          </span>
          <div className="footer-badges" style={{ display: 'flex', gap: '8px' }}>
            {['ADV', 'Academy', 'Business'].map((product) => (
              <span
                key={product}
                style={{
                  fontSize: '11px',
                  color: 'rgba(255,255,255,0.2)',
                  fontFamily: 'Inter, sans-serif',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '6px',
                  padding: '3px 8px',
                }}
              >
                FlowDesk {product}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
