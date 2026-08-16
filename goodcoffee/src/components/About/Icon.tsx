interface IconProps {
  name: string;
}

/** Простые линейные иконки для карточек преимуществ. */
export function Icon({ name }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false" className="feature__icon">
      {name === 'cup' && (
        <>
          <rect x="6" y="4" width="20" height="4.5" rx="1.6" className="icon-fill" />
          <path d="M8 11 h16 l-2 16.2 a2.4 2.4 0 0 1 -2.4 2.1 h-7.2 a2.4 2.4 0 0 1 -2.4 -2.1 z" />
        </>
      )}
      {name === 'croissant' && (
        <>
          <path d="M4 20c0-6.6 5.4-12 12-12s12 5.4 12 12" />
          <path d="M4 20l5.5 3M28 20l-5.5 3M16 8v5" />
          <path d="M9.5 23c3.5 2.6 9.5 2.6 13 0" className="icon-fill-soft" />
        </>
      )}
      {name === 'milk' && (
        <>
          <path d="M12 3h8v4l3.5 5v16a1.5 1.5 0 0 1-1.5 1.5H10A1.5 1.5 0 0 1 8.5 28V12L12 7z" />
          <path d="M8.5 18h15" className="icon-fill" />
        </>
      )}
      {name === 'ice' && (
        <>
          <path d="M7 9h18l-2.2 18.4a2.2 2.2 0 0 1-2.2 2h-9.2a2.2 2.2 0 0 1-2.2-2z" />
          <path d="M5 9h22" />
          <path d="M13 15l4 4M17 15l-4 4" />
        </>
      )}
    </svg>
  );
}
