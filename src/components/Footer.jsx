import Logo from './Logo'

const links = {
  Produtos: ['FlowDesk ADV', 'FlowDesk Academy', 'FlowDesk Business', 'Roadmap'],
  Empresa: ['Fundadores', 'Validação', 'Contato', 'FlowJus'],
  Legal: ['Privacidade', 'Termos de Uso', 'Cookies'],
}

export default function Footer() {
  return (
    <footer style={{
      background: '#050A17',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      padding: '64px 24px 40px',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr repeat(3, 1fr)',
          gap: '48px',
          marginBottom: '56px',
        }}
        className="footer-grid"
        >
          {/* Brand */}
          <div>
            <Logo white />
            <p style={{
              fontSize: '14px',
              color: 'rgba(255,255,255,0.3)',
              fontFamily: 'Inter, sans-serif',
              lineHeight: 1.7,
              marginTop: '20px',
              maxWidth: '260px',
            }}>
              Plataforma de operações inteligentes para escritórios de advocacia. Construída de dentro do problema real.
            </p>
            <div style={{
              marginTop: '24px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(16,185,129,0.1)',
              border: '1px solid rgba(16,185,129,0.2)',
              borderRadius: '100px',
              padding: '5px 12px',
            }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#10B981' }} />
              <span style={{ fontSize: '12px', color: '#34D399', fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                Todos os sistemas operacionais
              </span>
            </div>
          </div>

          {/* Link groups */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <div style={{
                fontSize: '12px',
                fontWeight: 700,
                color: 'rgba(255,255,255,0.5)',
                fontFamily: 'Inter, sans-serif',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '20px',
              }}>
                {category}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {items.map((item) => (
                  <a
                    key={item}
                    href="#"
                    style={{
                      fontSize: '14px',
                      color: 'rgba(255,255,255,0.35)',
                      fontFamily: 'Inter, sans-serif',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                      fontWeight: 400,
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.35)'}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: '28px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
        }}>
          <span style={{
            fontSize: '13px',
            color: 'rgba(255,255,255,0.2)',
            fontFamily: 'Inter, sans-serif',
          }}>
            © 2026 FlowDesk. Todos os direitos reservados.
          </span>
          <div style={{ display: 'flex', gap: '8px' }}>
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
