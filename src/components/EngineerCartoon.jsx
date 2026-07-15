export default function EngineerCartoon() {
  return (
    <svg
      viewBox="0 0 400 400"
      role="img"
      aria-label="Cartoon illustration of a software engineer coding at a laptop"
      className="h-full w-full"
    >
      {/* glow */}
      <ellipse cx="200" cy="330" rx="120" ry="18" className="fill-accent-blue/10" />

      {/* desk */}
      <rect x="70" y="300" width="260" height="14" rx="4" className="fill-bg-surface" stroke="currentColor" strokeOpacity="0.15" />
      <rect x="90" y="314" width="10" height="40" className="fill-bg-surface" />
      <rect x="300" y="314" width="10" height="40" className="fill-bg-surface" />

      {/* chair back */}
      <rect x="150" y="150" width="100" height="90" rx="16" className="fill-bg-surface" stroke="currentColor" strokeOpacity="0.15" />

      {/* body / hoodie */}
      <path
        d="M140 300 C140 240 160 210 200 210 C240 210 260 240 260 300 Z"
        className="fill-accent-violet"
      />
      {/* hoodie pocket */}
      <rect x="180" y="270" width="40" height="18" rx="6" className="fill-accent-violet" stroke="currentColor" strokeOpacity="0.2" />

      {/* arms */}
      <path d="M150 250 Q120 265 130 290" className="stroke-accent-violet" strokeWidth="18" strokeLinecap="round" fill="none" />
      <path d="M250 250 Q280 265 270 290" className="stroke-accent-violet" strokeWidth="18" strokeLinecap="round" fill="none" />

      {/* head */}
      <circle cx="200" cy="165" r="42" className="fill-[#f0c8a0]" />
      {/* hair */}
      <path d="M158 155 Q160 118 200 116 Q240 118 242 155 Q230 132 200 132 Q170 132 158 155 Z" className="fill-[#2b2018]" />
      {/* glasses */}
      <rect x="168" y="160" width="26" height="18" rx="6" fill="none" stroke="#2b2018" strokeWidth="4" />
      <rect x="206" y="160" width="26" height="18" rx="6" fill="none" stroke="#2b2018" strokeWidth="4" />
      <line x1="194" y1="168" x2="206" y2="168" stroke="#2b2018" strokeWidth="4" />
      {/* smile */}
      <path d="M188 188 Q200 196 212 188" stroke="#2b2018" strokeWidth="3.5" strokeLinecap="round" fill="none" />

      {/* laptop base */}
      <path d="M148 296 L252 296 L238 312 L162 312 Z" className="fill-bg-surface-2" stroke="currentColor" strokeOpacity="0.2" />
      {/* laptop screen */}
      <rect x="160" y="248" width="80" height="52" rx="4" className="fill-bg-surface-2" stroke="currentColor" strokeOpacity="0.2" />
      <rect x="166" y="254" width="68" height="40" rx="2" className="fill-bg-primary" />
      <text x="200" y="280" textAnchor="middle" fontFamily="monospace" fontSize="14" className="fill-accent-teal">
        {"</>"}
      </text>

      {/* floating code chips */}
      <g className="fill-accent-teal/20" stroke="currentColor" strokeOpacity="0.3">
        <rect x="60" y="90" width="44" height="24" rx="6" className="fill-accent-teal/15" />
        <rect x="296" y="70" width="44" height="24" rx="6" className="fill-accent-blue/15" />
        <rect x="300" y="180" width="36" height="20" rx="6" className="fill-accent-violet/15" />
      </g>
      <text x="82" y="106" textAnchor="middle" fontFamily="monospace" fontSize="12" className="fill-accent-teal">01</text>
      <text x="318" y="86" textAnchor="middle" fontFamily="monospace" fontSize="12" className="fill-accent-blue">{"{ }"}</text>
      <text x="318" y="194" textAnchor="middle" fontFamily="monospace" fontSize="11" className="fill-accent-violet">git</text>
    </svg>
  );
}
