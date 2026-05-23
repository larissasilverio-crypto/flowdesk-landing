// Official FlowDesk logo — faithfully reproduced from flowdesk_saas_identity.svg
// Mark: flow-node symbol (central circle + 3 outgoing rays + 1 incoming ray)
// Brand palette: Deep Navy #0A0F1A · Electric Blue #378ADD · Sky Blue #85B7EB

function FlowMark({ size = 36, variant = 'dark' }) {
  // Dark variant = for dark backgrounds (white/blue marks)
  // Light variant = for light backgrounds (blue/dark marks)
  const isDark = variant === 'dark'

  // Center of the mark inside the viewBox "0 0 44 36"
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
      {/* Outer halo circle */}
      <circle
        cx={cx} cy={cy} r="10"
        fill={isDark ? '#0D1E38' : '#E8F2FB'}
      />

      {/* Center dot */}
      <circle
        cx={cx} cy={cy} r="4.5"
        fill={isDark ? '#85B7EB' : '#378ADD'}
      />

      {/* Ray — NE (top-right) */}
      <line
        x1={cx + 3.8} y1={cy - 3.2}
        x2={cx + 12} y2={cy - 10}
        stroke={isDark ? '#85B7EB' : '#378ADD'}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle
        cx={cx + 13.5} cy={cy - 11.5} r="2.6"
        fill={isDark ? '#B5D4F4' : '#85B7EB'}
      />

      {/* Ray — E (right) */}
      <line
        x1={cx + 4.5} y1={cy}
        x2={cx + 15.5} y2={cy}
        stroke={isDark ? '#B5D4F4' : '#185FA5'}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle
        cx={cx + 17.5} cy={cy} r="2.6"
        fill={isDark ? '#E6F1FB' : '#185FA5'}
      />

      {/* Ray — SE (bottom-right) */}
      <line
        x1={cx + 3.8} y1={cy + 3.2}
        x2={cx + 12} y2={cy + 10}
        stroke={isDark ? '#85B7EB' : '#378ADD'}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle
        cx={cx + 13.5} cy={cy + 11.5} r="2.6"
        fill={isDark ? '#85B7EB' : '#B5D4F4'}
        opacity={isDark ? 0.45 : 1}
      />

      {/* Incoming — W (left, data flowing in) */}
      <line
        x1={cx - 13.5} y1={cy}
        x2={cx - 4.5} y2={cy}
        stroke={isDark ? '#378ADD' : '#0C447C'}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle
        cx={cx - 14.8} cy={cy} r="1.8"
        fill={isDark ? '#378ADD' : '#0C447C'}
        opacity={isDark ? 0.5 : 0.4}
      />
    </svg>
  )
}

export default function Logo({ className = '', white = false, size = 'md' }) {
  // white = true → for dark backgrounds; white = false → for light backgrounds
  const variant = white ? 'dark' : 'light'
  const textColor = white ? '#FFFFFF' : '#0A0F1A'
  const markSize = size === 'sm' ? 28 : size === 'lg' ? 48 : 36

  return (
    <div
      className={`flex items-center ${className}`}
      style={{ gap: '10px' }}
    >
      <FlowMark size={markSize} variant={variant} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
        <span
          style={{
            fontFamily: 'Inter, -apple-system, sans-serif',
            fontWeight: 500,
            fontSize: size === 'sm' ? '16px' : size === 'lg' ? '24px' : '19px',
            letterSpacing: '-0.05em',
            color: textColor,
            lineHeight: 1,
          }}
        >
          FlowDesk
        </span>
      </div>
    </div>
  )
}
