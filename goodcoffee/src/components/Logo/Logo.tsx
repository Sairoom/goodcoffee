import './Logo.scss';

interface LogoProps {
  /** Светлый вариант — для тёмной шапки и подвала. */
  light?: boolean;
  withTagline?: boolean;
  className?: string;
}

/**
 * Логотип кофейни: стакан с жёлтой крышкой играет роль буквы «G»
 * в слове GOOD, ниже — подпись «кофейня».
 */
export function Logo({ light = false, withTagline = true, className = '' }: LogoProps) {
  return (
    <span
      className={`logo ${light ? 'logo--light' : ''} ${className}`}
      aria-label="Good Coffee, кофейня"
    >
      <svg className="logo__cup" viewBox="0 0 40 52" aria-hidden="true" focusable="false">
        {/* крышка */}
        <rect x="2" y="3" width="36" height="8" rx="2.5" className="logo__lid" />
        {/* корпус стакана */}
        <path
          d="M5.5 14 h29 l-3.6 32.5 a3.5 3.5 0 0 1 -3.5 3.1 h-14.8 a3.5 3.5 0 0 1 -3.5 -3.1 z"
          className="logo__body"
        />
      </svg>

      <span className="logo__text">
        <span className="logo__word">OOD</span>
        <span className="logo__word logo__word--second">COFFEE</span>
        {withTagline && <span className="logo__tagline">кофейня</span>}
      </span>
    </span>
  );
}
