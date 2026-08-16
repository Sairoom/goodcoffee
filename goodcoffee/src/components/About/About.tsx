import { features } from '../../data/features';
import { useReveal } from '../../hooks/useReveal';
import { Photo } from '../Photo/Photo';
import { Icon } from './Icon';
import './About.scss';

export function About() {
  const reveal = useReveal<HTMLDivElement>();

  return (
    <section className="about" id="about">
      <div className="about__inner">
        <div className="about__intro">
          <span className="about__eyebrow">О нас</span>
          <h2 className="about__title">
            Кофейня, куда заходят
            <br />
            по дороге и остаются
          </h2>
          <p className="about__text">
            Good Coffee — это небольшой зал с жёлтой стеной, кофемашиной La Carimali
            и длинной стойкой у окна. Здесь можно взять стакан с собой за минуту,
            а можно сесть с ноутбуком, смотреть во двор и никуда не спешить.
          </p>
          <p className="about__text">
            За полгода гости оставили нам целую доску записок — мы храним каждую.
            Это и есть наш главный отзыв.
          </p>

          <a className="about__link" href="#gallery">
            Посмотреть, как у нас
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 12h15M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>

        <div className="about__media">
          <Photo
            className="about__photo"
            src="/images/interior-machine.jpg"
            alt="Кофемашина La Carimali и картины на графитовой стене"
            caption="Наш зал"
          />
        </div>
      </div>

      <div ref={reveal.ref} className={`about__features ${reveal.className}`}>
        {features.map((feature) => (
          <article className="feature" key={feature.title}>
            <Icon name={feature.icon} />
            <h3 className="feature__title">{feature.title}</h3>
            <p className="feature__text">{feature.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
