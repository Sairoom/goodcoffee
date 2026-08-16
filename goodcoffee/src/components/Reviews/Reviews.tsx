import { reviews } from '../../data/reviews';
import { useReveal } from '../../hooks/useReveal';
import { info } from '../../data/info';
import './Reviews.scss';

// Лёгкий наклон стикеров — постоянный для каждой позиции,
// чтобы доска не «прыгала» при перерисовке.
const tilts = [-3.5, 2.4, -1.6, 3.2, -2.8, 1.4, -2.2, 3.6, -1.2];

export function Reviews() {
  const reveal = useReveal<HTMLDivElement>();

  return (
    <section className="reviews" id="reviews">
      <div className="reviews__inner">
        <header className="reviews__head">
          <span className="reviews__eyebrow">Отзывы</span>
          <h2 className="reviews__title">Стена записок</h2>
          <p className="reviews__note">
            Гости пишут нам на стикерах и вешают на пробковую доску у выхода.
            Вот несколько — остальные ждут вас в зале.
          </p>
        </header>

        <div ref={reveal.ref} className={`reviews__board ${reveal.className}`}>
          {reviews.map((review, index) => (
            <article
              className={`note note--${review.color}`}
              key={review.text}
              style={{ '--tilt': `${tilts[index % tilts.length]}deg` } as React.CSSProperties}
            >
              <span className="note__pin" aria-hidden="true" />
              <p className="note__text">{review.text}</p>
              {review.author && <span className="note__author">— {review.author}</span>}
            </article>
          ))}
        </div>

        <a className="reviews__cta" href={info.instagramHref} target="_blank" rel="noreferrer">
          Больше историй — {info.instagram}
        </a>
      </div>
    </section>
  );
}
