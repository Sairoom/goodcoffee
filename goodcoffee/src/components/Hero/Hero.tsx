import { Photo } from '../Photo/Photo';
import { info } from '../../data/info';
import './Hero.scss';

// Строки из наклеек на витрине кофейни
const marquee = [
  'Кофе с собой',
  'Coffee to go',
  'Свежая выпечка',
  'Холодные напитки',
  'Альтернативное молоко',
];

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__inner">
        <div className="hero__content">
          <span className="hero__eyebrow">Плеханова, 22 · Москва</span>

          <h1 className="hero__title">
            Жизнь слишком коротка
            <br />
            для <span className="hero__mark">плохого кофе</span>
          </h1>

          <p className="hero__lead">
            Маленькая кофейня во дворе на Плеханова. Варим на зерне свежей обжарки,
            печём с утра и наливаем с собой — быстро, но без спешки.
          </p>

          <div className="hero__actions">
            <a className="hero__btn hero__btn--primary" href="#menu">
              Смотреть меню
            </a>
            <a className="hero__btn hero__btn--ghost" href={info.phoneHref}>
              {info.phone}
            </a>
          </div>

          <dl className="hero__facts">
            <div>
              <dt>Эспрессо</dt>
              <dd>от 100 ₽</dd>
            </div>
            <div>
              <dt>Капучино</dt>
              <dd>от 160 ₽</dd>
            </div>
            <div>
              <dt>Внутри двора</dt>
              <dd>этаж 1</dd>
            </div>
          </dl>
        </div>

        <div className="hero__media">
          <Photo
            className="hero__photo hero__photo--main"
            src="/images/iced-coffee.jpg"
            alt="Стакан холодного кофе в руке на фоне вывески Good Coffee"
            eager
          />
          <Photo
            className="hero__photo hero__photo--sub"
            src="/images/drink-latte.jpg"
            alt="Напиток со сливочной шапкой и тыквенными семечками рядом с крафт-пакетом"
            eager
          />
          <div className="hero__badge">
            <span>Выбирай</span>
            <strong>Good Coffee</strong>
          </div>
        </div>
      </div>

      <div className="hero__marquee" aria-hidden="true">
        <div className="hero__marquee-track">
          {[0, 1].map((copy) => (
            <div className="hero__marquee-group" key={copy}>
              {marquee.map((text) => (
                <span key={text}>
                  {text}
                  <i>◆</i>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
