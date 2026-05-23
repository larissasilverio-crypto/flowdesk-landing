// Official FlowDesk logo faithfully reproduced from the brand system.

function FlowMark({ size = 36, variant = 'dark' }) {
  const isDark = variant === 'dark'
  const cx = 16
  const cy = 18

  return (
    <svg
      width={size}
      height={size * (36 / 44)}
      viewBox="0 0 44 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ flexShrink: 0 }}
    >
      <circle cx={cx} cy={cy} r="10" fill={isDark ? '#0D1E38' : '#E8F2FB'} />
      <circle cx={cx} cy={cy} r="4.5" fill={isDark ? '#85B7EB' : '#378ADD'} />

      <line
        x1={cx + 3.8}
        y1={cy - 3.2}
        x2={cx + 12}
        y2={cy - 10}
        stroke={isDark ? '#85B7EB' : '#378ADD'}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle cx={cx + 13.5} cy={cy - 11.5} r="2.6" fill={isDark ? '#B5D4F4' : '#85B7EB'} />

      <line
        x1={cx + 4.5}
        y1={cy}
        x2={cx + 15.5}
        y2={cy}
        stroke={isDark ? '#B5D4F4' : '#185FA5'}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle cx={cx + 17.5} cy={cy} r="2.6" fill={isDark ? '#E6F1FB' : '#185FA5'} />

      <line
        x1={cx + 3.8}
        y1={cy + 3.2}
        x2={cx + 12}
        y2={cy + 10}
        stroke={isDark ? '#85B7EB' : '#378ADD'}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle
        cx={cx + 13.5}
        cy={cy + 11.5}
        r="2.6"
        fill={isDark ? '#85B7EB' : '#B5D4F4'}
        opacity={isDark ? 0.45 : 1}
      />

      <line
        x1={cx - 13.5}
        y1={cy}
        x2={cx - 4.5}
        y2={cy}
        stroke={isDark ? '#378ADD' : '#0C447C'}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle
        cx={cx - 14.8}
        cy={cy}
        r="1.8"
        fill={isDark ? '#378ADD' : '#0C447C'}
        opacity={isDark ? 0.5 : 0.4}
      />
    </svg>
  )
}

export default function Logo({ className = '', white = false, size = 'md', showTagline = false }) {
  const variant = white ? 'dark' : 'light'
  const textColor = white ? '#FFFFFF' : '#0A0F1A'
  const subtitleColor = white ? 'rgba(55,138,221,0.82)' : '#185FA5'

  const palette = {
    xs: { mark: 24, text: '15px', gap: '8px', tagline: '8px' },
    sm: { mark: 28, text: '16px', gap: '10px', tagline: '8.5px' },
    md: { mark: 34, text: '21px', gap: '11px', tagline: '9px' },
    nav: { mark: 44, text: '31px', gap: '14px', tagline: '8.5px' },
    lg: { mark: 48, text: '24px', gap: '12px', tagline: '10px' },
  }

  const config = palette[size] || palette.md

  return (
    <div className={`flex items-center ${className}`} style={{ gap: config.gap }}>
      <FlowMark size={config.mark} variant={variant} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: showTagline ? '5px' : '1px' }}>
        <span
          style={{
            fontFamily: 'Inter, -apple-system, sans-serif',
            fontWeight: 500,
            fontSize: config.text,
            letterSpacing: '-0.05em',
            color: textColor,
            lineHeight: 1,
          }}
        >
          FlowDesk
        </span>
        {showTagline && (
          <span
            style={{
              fontFamily: 'Inter, -apple-system, sans-serif',
              fontWeight: 400,
              fontSize: config.tagline,
              letterSpacing: '0.32em',
              color: subtitleColor,
              lineHeight: 1,
              whiteSpace: 'nowrap',
            }}
          >
            SaaS · Intelligent Operations Platform
          </span>
        )}
      </div>
    </div>
  )
}
