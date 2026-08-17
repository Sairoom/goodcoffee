import { useState } from 'react';
import { info, mapWidgetSrc } from '../../data/info';
import { useReveal } from '../../hooks/useReveal';
import './YandexMap.scss';

interface YandexMapProps {
  className?: string;
}
export function YandexMap({ className = '' }: YandexMapProps) {
  const { ref, visible } = useReveal<HTMLDivElement>({
    threshold: 0,
    rootMargin: '300px 0px',
  });
  const [loaded, setLoaded] = useState(false);

  return (
    <div ref={ref} className={`map ${className}`}>
      {visible && (
        <iframe
          className={`map__iframe ${loaded ? 'is-loaded' : ''}`}
          src={mapWidgetSrc}
          title="Good Coffee на Яндекс.Картах"
          loading="lazy"
          allowFullScreen
          onLoad={() => setLoaded(true)}
        />
      )}

      {!loaded && (
        <div className="map__skeleton">
          <span className="map__skeleton-text">Загружаем карту…</span>
          <a href={info.mapHref} target="_blank" rel="noreferrer">
            Открыть в Яндекс.Картах
          </a>
        </div>
      )}
    </div>
  );
}
