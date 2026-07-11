export function AIContentIllustration() {
  return (
    <svg
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <defs>
        <linearGradient
          id="grad1"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" style={{ stopColor: "#14b8a6", stopOpacity: 0.1 }} />
          <stop offset="100%" style={{ stopColor: "#0d9488", stopOpacity: 0.05 }} />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="300" height="300" fill="url(#grad1)" rx="20" />

      {/* Image frame */}
      <rect x="40" y="60" width="220" height="160" rx="12" fill="none" stroke="#14b8a6" strokeWidth="2" opacity="0.3" />

      {/* Blurred image representation */}
      <circle cx="80" cy="100" r="15" fill="#14b8a6" opacity="0.15" />
      <circle cx="150" cy="95" r="20" fill="#0d9488" opacity="0.1" />
      <circle cx="220" cy="110" r="18" fill="#14b8a6" opacity="0.12" />

      {/* Question mark - representing uncertainty */}
      <text
        x="150"
        y="180"
        fontSize="48"
        fontWeight="bold"
        fill="#14b8a6"
        opacity="0.4"
        textAnchor="middle"
        fontFamily="var(--font-space-grotesk), sans-serif"
      >
        ?
      </text>

      {/* Bottom accent */}
      <line x1="60" y1="220" x2="240" y2="220" stroke="#14b8a6" strokeWidth="2" opacity="0.2" />
    </svg>
  );
}

export function DisclosureIllustration() {
  return (
    <svg
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <defs>
        <linearGradient
          id="grad2"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" style={{ stopColor: "#14b8a6", stopOpacity: 0.1 }} />
          <stop offset="100%" style={{ stopColor: "#0d9488", stopOpacity: 0.05 }} />
        </linearGradient>
      </defs>

      <rect width="300" height="300" fill="url(#grad2)" rx="20" />

      {/* Document */}
      <rect x="50" y="50" width="200" height="220" rx="8" fill="white" stroke="#14b8a6" strokeWidth="2" />

      {/* Document lines */}
      <line x1="70" y1="80" x2="230" y2="80" stroke="#0d9488" strokeWidth="2" opacity="0.3" />
      <line x1="70" y1="105" x2="230" y2="105" stroke="#0d9488" strokeWidth="1" opacity="0.2" />
      <line x1="70" y1="125" x2="230" y2="125" stroke="#0d9488" strokeWidth="1" opacity="0.2" />
      <line x1="70" y1="145" x2="230" y2="145" stroke="#0d9488" strokeWidth="1" opacity="0.2" />

      {/* Check mark - representing transparency */}
      <path
        d="M130 170 L145 185 L195 135"
        stroke="#14b8a6"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function ActionIllustration() {
  return (
    <svg
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <defs>
        <linearGradient
          id="grad3"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" style={{ stopColor: "#14b8a6", stopOpacity: 0.1 }} />
          <stop offset="100%" style={{ stopColor: "#0d9488", stopOpacity: 0.05 }} />
        </linearGradient>
      </defs>

      <rect width="300" height="300" fill="url(#grad3)" rx="20" />

      {/* Arrow pointing up - representing action */}
      <path
        d="M150 220 L150 80 M130 100 L150 80 L170 100"
        stroke="#14b8a6"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Circles - representing growth/momentum */}
      <circle cx="100" cy="160" r="20" stroke="#0d9488" strokeWidth="2" opacity="0.3" />
      <circle cx="150" cy="140" r="25" stroke="#14b8a6" strokeWidth="2" opacity="0.4" />
      <circle cx="200" cy="165" r="22" stroke="#0d9488" strokeWidth="2" opacity="0.3" />
    </svg>
  );
}

export function TrustIllustration() {
  return (
    <svg
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <defs>
        <linearGradient
          id="grad4"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" style={{ stopColor: "#14b8a6", stopOpacity: 0.08 }} />
          <stop offset="100%" style={{ stopColor: "#0d9488", stopOpacity: 0.03 }} />
        </linearGradient>
      </defs>

      <rect width="300" height="300" fill="url(#grad4)" rx="20" />

      {/* Shield - representing protection/trust */}
      <path
        d="M150 50 L220 80 L220 160 C220 210 150 250 150 250 C150 250 80 210 80 160 L80 80 Z"
        stroke="#14b8a6"
        strokeWidth="2.5"
        fill="none"
      />

      {/* Check inside shield */}
      <path
        d="M130 150 L145 165 L175 135"
        stroke="#14b8a6"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
