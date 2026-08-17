import { info } from '../../data/info';
import { useReveal } from '../../hooks/useReveal';
import { YandexMap } from '../YandexMap/YandexMap';
import './Contacts.scss';

export function Contacts() {
  const reveal = useReveal<HTMLDivElement>();

  return (
    <section className="contacts" id="contacts">
      <div ref={reveal.ref} className={`contacts__inner ${reveal.className}`}>
        <div className="contacts__card">
          <span className="contacts__eyebrow">Контакты</span>
          <h2 className="contacts__title">Заходите за кофе</h2>

          <dl className="contacts__list">
            <div className="contacts__row">
              <dt>Адрес</dt>
              <dd>
                <a href={info.mapHref} target="_blank" rel="noreferrer">
                  {info.address}
                </a>
                <span className="contacts__hint">{info.addressNote}</span>
              </dd>
            </div>

            <div className="contacts__row">
              <dt>Телефон</dt>
              <dd>
                <a href={info.phoneHref}>{info.phone}</a>
              </dd>
            </div>

            <div className="contacts__row">
              <dt>Часы работы</dt>
              <dd>
                {info.hours.map((slot) => (
                  <span className="contacts__hours" key={slot.days}>
                    {slot.days}
                    <b>{slot.time}</b>
                  </span>
                ))}
              </dd>
            </div>

            <div className="contacts__row">
              <dt>Мы в сети</dt>
              <dd>
                <a href={info.instagramHref} target="_blank" rel="noreferrer">
                  {info.instagram}
                </a>
              </dd>
            </div>
          </dl>

          <a
            className="contacts__map-btn"
            href={info.mapHref}
            target="_blank"
            rel="noreferrer"
          >
            Построить маршрут
          </a>
        </div>

        <YandexMap className="contacts__map" />
      </div>
    </section>
  );
}
