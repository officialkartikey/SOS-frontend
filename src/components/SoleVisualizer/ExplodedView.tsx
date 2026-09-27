import React from 'react';

interface ExplodedViewProps {
  onSelectLayer: (layerId: number) => void;
  selectedLayerId: number;
}

export const ExplodedView: React.FC<ExplodedViewProps> = ({ onSelectLayer }) => {
  return (
    <div className="w-full flex items-center justify-center">
      <svg
        className="w-full max-w-4xl h-auto drop-shadow-sm select-none"
        viewBox="0 0 960 510"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="cushionGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="100%" stopColor="#e2e8f0" />
          </linearGradient>
          <linearGradient id="kevlarGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#fef3c7" />
            <stop offset="100%" stopColor="#fde68a" />
          </linearGradient>
          <linearGradient id="outsoleGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>
          <pattern id="kevlarPattern" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M0 5 L10 5 M5 0 L5 10" stroke="#d97706" strokeWidth="0.7" opacity="0.3" />
          </pattern>
          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#0f172a" floodOpacity="0.10" />
          </filter>
        </defs>

        {/* LAYER 05: Upper Ergonomic Memory Cushion Layer */}
        <g id="layer05" className="sole-layer-interactive" onClick={() => onSelectLayer(5)}>
          {/* 3D Depth Extrusion Bottom Rim */}
          <path
            d="M 75,60 C 70,78 95,95 140,95 C 185,95 220,78 270,80 C 320,82 365,98 420,96 C 475,94 515,76 520,56 L 520,64 C 515,84 475,102 420,104 C 365,106 320,90 270,88 C 220,86 185,103 140,103 C 95,103 70,86 75,68 Z"
            fill="#cbd5e1"
            opacity="0.85"
          />
          {/* Main Sole Layer Surface */}
          <path
            d="M 75,60 C 70,36 95,22 145,22 C 190,22 235,34 280,32 C 325,28 375,14 430,16 C 485,18 525,40 520,60 C 515,80 475,98 420,100 C 365,102 320,86 270,84 C 220,82 185,98 140,98 C 95,98 70,84 75,60 Z"
            fill="url(#cushionGrad)"
            stroke="#94a3b8"
            strokeWidth="2"
            filter="url(#softGlow)"
          />

          {/* Ergonomic Heel Shock Cushion Inlay */}
          <ellipse cx="140" cy="60" rx="30" ry="18" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="2 2" />
          {/* Forefoot Perforations */}
          <g fill="#94a3b8" opacity="0.6">
            <circle cx="340" cy="56" r="2" /><circle cx="370" cy="52" r="2" /><circle cx="400" cy="60" r="2" /><circle cx="430" cy="56" r="2" /><circle cx="460" cy="62" r="2" />
            <circle cx="360" cy="68" r="2" /><circle cx="390" cy="72" r="2" /><circle cx="420" cy="70" r="2" />
          </g>

          {/* Leader Line to Dedicated Callout Box */}
          <path d="M 520,60 L 565,60 L 585,55" stroke="#94a3b8" strokeWidth="1.8" strokeDasharray="3 3" />
          <circle cx="520" cy="60" r="3.5" fill="#475569" />

          {/* Callout Box 05 */}
          <g transform="translate(585, 30)">
            <rect width="350" height="50" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" filter="url(#softGlow)" />
            <rect width="4" height="50" rx="2" fill="#64748b" />
            <text x="16" y="21" fill="#0f172a" fontSize="12" fontWeight="700">05. Ergonomic Memory Cushion Layer</text>
            <text x="16" y="38" fill="#64748b" fontSize="10.5" fontWeight="500">Antimicrobial Dual-Density PU Foam (12mm drop)</text>
          </g>
        </g>

        {/* LAYER 04: Edge MCU, IMU & Kinetic Harvester Module */}
        <g id="layer04" className="sole-layer-interactive" onClick={() => onSelectLayer(4)}>
          {/* 3D Depth Extrusion Bottom Rim */}
          <path
            d="M 78,150 C 73,168 98,185 143,185 C 188,185 223,168 273,170 C 323,172 368,188 423,186 C 478,184 518,166 523,146 L 523,154 C 518,174 478,192 423,194 C 368,196 323,180 273,178 C 223,176 188,193 143,193 C 98,193 73,176 78,158 Z"
            fill="#fee2e2"
            opacity="0.85"
          />
          {/* Main Sole Layer Surface */}
          <path
            d="M 78,150 C 73,126 98,112 148,112 C 193,112 238,124 283,122 C 328,118 378,104 433,106 C 488,108 528,130 523,150 C 518,170 478,188 423,190 C 368,192 323,176 273,174 C 223,172 188,188 143,188 C 98,188 73,174 78,150 Z"
            fill="#ffffff"
            stroke="#dc2626"
            strokeWidth="2.2"
            filter="url(#softGlow)"
          />

          {/* Embedded ARM Cortex MCU IC */}
          <rect x="255" y="136" width="48" height="26" rx="4" fill="#0f172a" stroke="#334155" strokeWidth="1.2" />
          <text x="279" y="153" fill="#ffffff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="monospace">ARM 32b</text>

          {/* Kinetic Dynamo & Battery Cell */}
          <rect x="125" y="138" width="46" height="22" rx="3" fill="#dc2626" fillOpacity="0.12" stroke="#dc2626" strokeWidth="1.2" />
          <text x="148" y="152" fill="#dc2626" fontSize="8" fontWeight="700" textAnchor="middle">LiFePO4</text>

          {/* RF Antenna & Traces */}
          <path d="M 305,149 L 340,149 L 350,158 L 410,158" stroke="#dc2626" strokeWidth="1.6" strokeLinecap="round" />
          <circle cx="410" cy="158" r="2.5" fill="#dc2626" />

          {/* Leader Line */}
          <path d="M 523,150 L 565,150 L 585,145" stroke="#dc2626" strokeWidth="1.8" strokeDasharray="3 3" />
          <circle cx="523" cy="150" r="3.5" fill="#dc2626" />

          {/* Callout Box 04 */}
          <g transform="translate(585, 120)">
            <rect width="350" height="50" rx="8" fill="#ffffff" stroke="#fecaca" strokeWidth="1.5" filter="url(#softGlow)" />
            <rect width="4" height="50" rx="2" fill="#dc2626" />
            <text x="16" y="21" fill="#dc2626" fontSize="12" fontWeight="700">04. Edge MCU &amp; RF Harvester Module</text>
            <text x="16" y="38" fill="#64748b" fontSize="10.5" fontWeight="500">ARM Cortex-M4F • Sub-GHz Mesh • Kinetic Dynamo</text>
          </g>
        </g>

        {/* LAYER 03: 8-Zone Tactile Piezoresistive Sensor Grid */}
        <g id="layer03" className="sole-layer-interactive" onClick={() => onSelectLayer(3)}>
          {/* 3D Depth Extrusion Bottom Rim */}
          <path
            d="M 81,240 C 76,258 101,275 146,275 C 191,275 226,258 276,260 C 326,262 371,278 426,276 C 481,274 521,256 526,236 L 526,244 C 521,264 481,282 426,284 C 371,286 326,270 276,268 C 226,266 191,283 146,283 C 101,283 76,266 81,248 Z"
            fill="#dbeafe"
            opacity="0.85"
          />
          {/* Main Sole Layer Surface */}
          <path
            d="M 81,240 C 76,216 101,202 151,202 C 196,202 241,214 286,212 C 331,208 381,194 436,196 C 491,198 531,220 526,240 C 521,260 481,278 426,280 C 371,282 326,266 276,264 C 226,262 191,278 146,278 C 101,278 76,264 81,240 Z"
            fill="#eff6ff"
            stroke="#3b82f6"
            strokeWidth="2"
            strokeDasharray="5 3"
            filter="url(#softGlow)"
          />

          {/* 8 Sensor Nodes */}
          <circle cx="125" cy="235" r="9" fill="#ef4444" fillOpacity="0.25" className="animate-pulse-subtle" />
          <circle cx="125" cy="235" r="4.5" fill="#dc2626" />
          <circle cx="155" cy="245" r="8" fill="#ef4444" fillOpacity="0.25" />
          <circle cx="155" cy="245" r="4" fill="#dc2626" />

          <circle cx="235" cy="230" r="7" fill="#ef4444" fillOpacity="0.25" />
          <circle cx="235" cy="230" r="3.5" fill="#dc2626" />

          <circle cx="345" cy="230" r="8" fill="#ef4444" fillOpacity="0.25" />
          <circle cx="345" cy="230" r="4" fill="#dc2626" />
          <circle cx="380" cy="245" r="8" fill="#ef4444" fillOpacity="0.25" />
          <circle cx="380" cy="245" r="4" fill="#dc2626" />
          <circle cx="415" cy="230" r="8" fill="#ef4444" fillOpacity="0.25" />
          <circle cx="415" cy="230" r="4" fill="#dc2626" />
          <circle cx="450" cy="242" r="8" fill="#ef4444" fillOpacity="0.25" />
          <circle cx="450" cy="242" r="4" fill="#dc2626" />

          <circle cx="490" cy="230" r="9.5" fill="#ef4444" fillOpacity="0.3" className="animate-pulse-subtle" />
          <circle cx="490" cy="230" r="5" fill="#dc2626" />

          {/* Circuit tracks */}
          <path d="M 125,235 Q 235,230 345,230 T 490,230" stroke="#3b82f6" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />

          {/* Leader Line */}
          <path d="M 526,240 L 565,240 L 585,235" stroke="#3b82f6" strokeWidth="1.8" strokeDasharray="3 3" />
          <circle cx="526" cy="240" r="3.5" fill="#3b82f6" />

          {/* Callout Box 03 */}
          <g transform="translate(585, 210)">
            <rect width="350" height="50" rx="8" fill="#ffffff" stroke="#bfdbfe" strokeWidth="1.5" filter="url(#softGlow)" />
            <rect width="4" height="50" rx="2" fill="#3b82f6" />
            <text x="16" y="21" fill="#1e40af" fontSize="12" fontWeight="700">03. 8-Point Tactile Force Matrix</text>
            <text x="16" y="38" fill="#64748b" fontSize="10.5" fontWeight="500">100 Hz Piezoresistive Grid • 0–1,500 kPa Range</text>
          </g>
        </g>

        {/* LAYER 02: 1,100 N Ballistic Kevlar Anti-Puncture Plate */}
        <g id="layer02" className="sole-layer-interactive" onClick={() => onSelectLayer(2)}>
          {/* 3D Depth Extrusion Bottom Rim */}
          <path
            d="M 84,330 C 79,348 104,365 149,365 C 194,365 229,348 279,350 C 329,352 374,368 429,366 C 484,364 524,346 529,326 L 529,334 C 524,354 484,372 429,374 C 374,376 329,360 279,358 C 229,356 194,373 149,373 C 104,373 79,356 84,338 Z"
            fill="#fde68a"
            opacity="0.85"
          />
          {/* Main Sole Layer Surface */}
          <path
            d="M 84,330 C 79,306 104,292 154,292 C 199,292 244,304 289,302 C 334,298 384,284 439,286 C 494,288 534,310 529,330 C 524,350 484,368 429,370 C 374,372 329,356 279,354 C 229,352 194,368 149,368 C 104,368 79,354 84,330 Z"
            fill="url(#kevlarGrad)"
            stroke="#d97706"
            strokeWidth="2"
            filter="url(#softGlow)"
          />
          <path
            d="M 84,330 C 79,306 104,292 154,292 C 199,292 244,304 289,302 C 334,298 384,284 439,286 C 494,288 534,310 529,330 C 524,350 484,368 429,370 C 374,372 329,356 279,354 C 229,352 194,368 149,368 C 104,368 79,354 84,330 Z"
            fill="url(#kevlarPattern)"
          />

          <text x="315" y="336" fill="#92400e" fontSize="9.5" fontWeight="700" letterSpacing="0.8" textAnchor="middle">
            BALLISTIC KEVLAR • 1,100 N PENETRATION RESISTANT
          </text>

          {/* Leader Line */}
          <path d="M 529,330 L 565,330 L 585,325" stroke="#d97706" strokeWidth="1.8" strokeDasharray="3 3" />
          <circle cx="529" cy="330" r="3.5" fill="#d97706" />

          {/* Callout Box 02 */}
          <g transform="translate(585, 300)">
            <rect width="350" height="50" rx="8" fill="#ffffff" stroke="#fef3c7" strokeWidth="1.5" filter="url(#softGlow)" />
            <rect width="4" height="50" rx="2" fill="#d97706" />
            <text x="16" y="21" fill="#92400e" fontSize="12" fontWeight="700">02. Ballistic Kevlar Anti-Puncture Plate</text>
            <text x="16" y="38" fill="#64748b" fontSize="10.5" fontWeight="500">1,100 N Penetration Shield • EN ISO 20345 Compliant</text>
          </g>
        </g>

        {/* LAYER 01: Nitrile High-Abrasion Outsole (SRC Rated) */}
        <g id="layer01" className="sole-layer-interactive" onClick={() => onSelectLayer(1)}>
          {/* Heavy 3D Depth Extrusion */}
          <path
            d="M 87,420 C 82,442 107,462 152,462 C 197,462 232,442 282,444 C 332,446 377,464 432,462 C 487,460 527,440 532,416 L 532,428 C 527,452 487,472 432,474 C 377,476 332,458 282,456 C 232,454 197,474 152,474 C 107,474 82,454 87,432 Z"
            fill="#020617"
            opacity="0.95"
          />
          {/* Main Sole Layer Surface */}
          <path
            d="M 87,420 C 82,396 107,382 157,382 C 202,382 247,394 292,392 C 337,388 387,374 442,376 C 497,378 537,400 532,420 C 527,440 487,458 432,460 C 377,462 332,446 282,444 C 232,442 197,458 152,458 C 107,458 82,444 87,420 Z"
            fill="url(#outsoleGrad)"
            stroke="#0f172a"
            strokeWidth="2.5"
            filter="url(#softGlow)"
          />

          {/* Cleats Lugs */}
          <g fill="#475569" stroke="#334155" strokeWidth="0.8">
            <rect x="130" y="420" width="18" height="9" rx="2" />
            <rect x="165" y="424" width="20" height="9" rx="2" />
            <rect x="210" y="418" width="20" height="9" rx="2" />
            <rect x="330" y="412" width="22" height="9" rx="2" />
            <rect x="375" y="422" width="22" height="9" rx="2" />
            <rect x="420" y="416" width="22" height="9" rx="2" />
            <rect x="465" y="424" width="22" height="9" rx="2" />
          </g>

          {/* Leader Line */}
          <path d="M 532,420 L 565,420 L 585,415" stroke="#475569" strokeWidth="1.8" strokeDasharray="3 3" />
          <circle cx="532" cy="420" r="3.5" fill="#0f172a" />

          {/* Callout Box 01 */}
          <g transform="translate(585, 390)">
            <rect width="350" height="50" rx="8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" filter="url(#softGlow)" />
            <rect width="4" height="50" rx="2" fill="#0f172a" />
            <text x="16" y="21" fill="#0f172a" fontSize="12" fontWeight="700">01. Nitrile Armor Outsole (SRC Rated)</text>
            <text x="16" y="38" fill="#64748b" fontSize="10.5" fontWeight="500">Vulcanized High-Abrasion Rubber • Hydrocarbon Resistant</text>
          </g>
        </g>
      </svg>
    </div>
  );
};
