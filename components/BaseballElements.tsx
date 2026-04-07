// Reusable baseball-themed SVG decorations

export function BaseballIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="30" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
      {/* Left stitch curve */}
      <path d="M18 12 C14 20, 14 44, 18 52" stroke="#ef4444" strokeWidth="2" strokeLinecap="round"/>
      <path d="M22 12 C18 20, 18 44, 22 52" stroke="#ef4444" strokeWidth="2" strokeLinecap="round"/>
      {/* Right stitch curve */}
      <path d="M46 12 C50 20, 50 44, 46 52" stroke="#ef4444" strokeWidth="2" strokeLinecap="round"/>
      <path d="M42 12 C46 20, 46 44, 42 52" stroke="#ef4444" strokeWidth="2" strokeLinecap="round"/>
      {/* Stitch marks left */}
      <line x1="14" y1="22" x2="22" y2="24" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="13" y1="28" x2="21" y2="29" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="13" y1="34" x2="21" y2="34" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="14" y1="40" x2="22" y2="39" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Stitch marks right */}
      <line x1="50" y1="22" x2="42" y2="24" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="51" y1="28" x2="43" y2="29" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="51" y1="34" x2="43" y2="34" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="50" y1="40" x2="42" y2="39" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export function BatIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="28" y="4" width="8" height="20" rx="4" fill="#92400e"/>
      <path d="M20 24 C20 20, 44 20, 44 24 L48 52 C48 56, 16 56, 16 52 Z" fill="#b45309"/>
      <ellipse cx="32" cy="52" rx="16" ry="6" fill="#92400e"/>
      <line x1="32" y1="4" x2="32" y2="58" stroke="#78350f" strokeWidth="1" opacity="0.4"/>
    </svg>
  );
}

export function DiamondIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Infield dirt */}
      <path d="M40 10 L70 40 L40 70 L10 40 Z" fill="#d97706" opacity="0.15" stroke="#d97706" strokeWidth="1.5"/>
      {/* Base paths */}
      <line x1="40" y1="10" x2="70" y2="40" stroke="#00E676" strokeWidth="2" strokeLinecap="round"/>
      <line x1="70" y1="40" x2="40" y2="70" stroke="#00E676" strokeWidth="2" strokeLinecap="round"/>
      <line x1="40" y1="70" x2="10" y2="40" stroke="#00E676" strokeWidth="2" strokeLinecap="round"/>
      <line x1="10" y1="40" x2="40" y2="10" stroke="#00E676" strokeWidth="2" strokeLinecap="round"/>
      {/* Bases */}
      <rect x="36" y="6" width="8" height="8" rx="1" fill="white" stroke="#00E676" strokeWidth="1.5"/>
      <rect x="66" y="36" width="8" height="8" rx="1" fill="white" stroke="#00E676" strokeWidth="1.5"/>
      <rect x="36" y="66" width="8" height="8" rx="1" fill="white" stroke="#00E676" strokeWidth="1.5"/>
      <rect x="6" y="36" width="8" height="8" rx="1" fill="white" stroke="#00E676" strokeWidth="1.5"/>
      {/* Pitcher mound */}
      <circle cx="40" cy="40" r="4" fill="#d97706" opacity="0.6"/>
    </svg>
  );
}

export function GloveIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 40 C8 30, 10 16, 20 14 C24 13, 26 16, 26 20 C28 14, 32 12, 36 14 C40 16, 40 22, 38 26 C42 18, 46 16, 50 20 C54 24, 50 34, 44 38 L40 52 L16 52 Z" fill="#92400e"/>
      <path d="M16 52 L40 52 L38 42 C32 46, 22 46, 16 42 Z" fill="#78350f"/>
      <path d="M26 20 C26 24, 28 28, 32 30" stroke="#78350f" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M38 26 C36 28, 34 30, 32 30" stroke="#78350f" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export function StitchDivider() {
  return (
    <div className="flex items-center justify-center gap-3 py-2">
      <div className="flex-1 h-px bg-slate-200"/>
      <BaseballIcon className="w-6 h-6 opacity-30" />
      <div className="flex-1 h-px bg-slate-200"/>
    </div>
  );
}

export function BaseballBgPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.04]" aria-hidden="true">
      {/* Scattered baseballs in background */}
      {[
        { top: "8%", left: "5%", size: 60, rotate: 15 },
        { top: "20%", right: "4%", size: 80, rotate: -20 },
        { top: "55%", left: "2%", size: 50, rotate: 30 },
        { top: "70%", right: "6%", size: 70, rotate: -10 },
        { top: "40%", left: "92%", size: 40, rotate: 45 },
      ].map((pos, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            top: pos.top,
            left: pos.left,
            right: (pos as { right?: string }).right,
            width: pos.size,
            height: pos.size,
            transform: `rotate(${pos.rotate}deg)`,
          }}
        >
          <svg viewBox="0 0 64 64" fill="none">
            <circle cx="32" cy="32" r="30" fill="white"/>
            <path d="M18 12 C14 20, 14 44, 18 52" stroke="#ef4444" strokeWidth="3"/>
            <path d="M46 12 C50 20, 50 44, 46 52" stroke="#ef4444" strokeWidth="3"/>
            <line x1="14" y1="28" x2="22" y2="29" stroke="#ef4444" strokeWidth="2"/>
            <line x1="50" y1="28" x2="42" y2="29" stroke="#ef4444" strokeWidth="2"/>
          </svg>
        </div>
      ))}
    </div>
  );
}
