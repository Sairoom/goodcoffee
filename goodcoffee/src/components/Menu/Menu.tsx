import { menu } from '../../data/menu';
import { useReveal } from '../../hooks/useReveal';
import { BoardText } from './BoardText';
import './Menu.scss';

export function Menu() {
  const reveal = useReveal<HTMLDivElement>();

  return (
    <section className="menu" id="menu">
      <div className="menu__inner">
        <header className="menu__head">
          <span className="menu__eyebrow">Меню</span>
          <h2 className="menu__title">Кофе и не кофе</h2>
          <p className="menu__note">
            Цены через слэш — два объёма напитка. Любую позицию делаем с собой.
          </p>
        </header>

        <div ref={reveal.ref} className={`menu__board ${reveal.className}`}>
          {menu.map((group) => (
            <section className={`menu__group menu__group--${group.id}`} key={group.id}>
              <h3 className="menu__group-title">
                <BoardText text={group.title.toUpperCase()} />
              </h3>
              {group.hint && <span className="menu__group-hint">{group.hint}</span>}

              <ul className="menu__list">
                {group.items.map((item) => (
                  <li className="menu__row" key={item.name}>
                    <span className="menu__name">
                      <BoardText text={item.name.toUpperCase()} />
                    </span>
                    <span className="menu__price">
                      <BoardText text={item.price} />
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <p className="menu__footnote">
          «Альтернатива» — банановое, кокосовое или миндальное молоко.
          Актуальные позиции всегда на доске в зале.
        </p>
      </div>
    </section>
  );
}
