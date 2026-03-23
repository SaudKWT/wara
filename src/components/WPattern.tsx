interface WPatternProps {
  opacity?: number;
  color?: string;
  className?: string;
}

export const WPattern = ({ opacity = 0.05, color = "#f24e01", className = "" }: WPatternProps) => (
  <svg
    width="100%"
    height="100%"
    className={`absolute inset-0 pointer-events-none ${className}`}
    style={{ opacity }}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern
        id={`wara-w-pattern-${opacity}-${color.replace('#', '')}`}
        x="0"
        y="0"
        width="200"
        height="210"
        patternUnits="userSpaceOnUse"
        patternTransform="rotate(15)"
      >
        <g transform="translate(36 36) scale(0.57)">
          {/* Bottom chevron with side bars */}
          <path
            d="M112.07,115.47l58.92,47.33,12.53,10.07v-24.49l33.27-26.72v73.05l-40.61,32.62-58.92-47.33-5.19-4.17-5.19,4.17-58.93,47.33L7.34,194.7v-73.05l33.27,26.72v24.49l12.53-10.07,58.93-47.33M112.07,107.13l-64.12,51.5v-12.7L0,107.41v89.73l47.95,38.52,64.12-51.5,64.12,51.5,47.95-38.52v-89.73l-47.95,38.52v12.7l-64.12-51.5h0Z"
            fill="none"
            stroke={color}
            strokeWidth="2"
          />
          {/* Top chevron */}
          <path
            d="M112.07,8.34l101.69,81.68-37.57,30.18-58.92-47.33-5.19-4.17-5.19,4.17-58.93,47.33-37.57-30.18L112.07,8.34M112.07,0L0,90.02l47.95,38.52,64.12-51.5,64.12,51.5,47.95-38.52L112.07,0h0Z"
            fill="none"
            stroke={color}
            strokeWidth="2"
          />
        </g>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill={`url(#wara-w-pattern-${opacity}-${color.replace('#', '')})`} />
  </svg>
);
