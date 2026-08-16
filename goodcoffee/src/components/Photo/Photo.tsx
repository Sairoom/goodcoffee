import { useState } from 'react';
import './Photo.scss';

interface PhotoProps {
  src: string;
  alt: string;
  /** Подпись, которая появляется поверх фото и заменяет его, если файла нет. */
  caption?: string;
  className?: string;
  eager?: boolean;
}

/**
 * Фотография с аккуратной заглушкой: пока файл не положили
 * в public/images/, вместо битой картинки показывается плашка с подписью.
 */
export function Photo({ src, alt, caption, className = '', eager = false }: PhotoProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={`photo photo--empty ${className}`} role="img" aria-label={alt}>
        <svg viewBox="0 0 40 52" aria-hidden="true" focusable="false">
          <rect x="2" y="3" width="36" height="8" rx="2.5" />
          <path d="M5.5 14 h29 l-3.6 32.5 a3.5 3.5 0 0 1 -3.5 3.1 h-14.8 a3.5 3.5 0 0 1 -3.5 -3.1 z" />
        </svg>
        {caption && <span className="photo__placeholder-text">{caption}</span>}
      </div>
    );
  }

  return (
    <figure className={`photo ${className}`}>
      <img
        src={process.env.PUBLIC_URL + src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        onError={() => setFailed(true)}
      />
      {caption && <figcaption className="photo__caption">{caption}</figcaption>}
    </figure>
  );
}
