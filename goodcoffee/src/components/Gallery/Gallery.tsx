import { gallery } from '../../data/gallery';
import { useReveal } from '../../hooks/useReveal';
import { Photo } from '../Photo/Photo';
import './Gallery.scss';

export function Gallery() {
  const reveal = useReveal<HTMLDivElement>();

  return (
    <section className="gallery" id="gallery">
      <div className="gallery__inner">
        <header className="gallery__head">
          <div>
            <span className="gallery__eyebrow">Атмосфера</span>
            <h2 className="gallery__title">Как у нас внутри</h2>
          </div>
          <p className="gallery__note">
            Жёлтая стена, свет из панорамного окна и кофе, который приятно держать
            в руках.
          </p>
        </header>

        <div ref={reveal.ref} className={`gallery__grid ${reveal.className}`}>
          {gallery.map((photo) => (
            <Photo
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              caption={photo.caption}
              className={[
                'gallery__item',
                photo.wide ? 'gallery__item--wide' : '',
                photo.tall ? 'gallery__item--tall' : '',
              ]
                .filter(Boolean)
                .join(' ')}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
