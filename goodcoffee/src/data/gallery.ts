// Фотографии лежат в public/images/ — см. public/images/README.md.
// Путь указывается от корня сайта, поэтому начинается со слэша.

export interface Photo {
  src: string;
  alt: string;
  caption: string;
  /** Растянуть карточку на две колонки в сетке галереи. */
  wide?: boolean;
  /** Вытянуть карточку на две строки. */
  tall?: boolean;
}

export const gallery: Photo[] = [
  {
    src: '/images/window-bar.jpg',
    alt: 'Барная стойка у панорамного окна с мягкими табуретами',
    caption: 'Место у окна',
    wide: true,
  },
  {
    src: '/images/interior-machine.jpg',
    alt: 'Кофемашина La Carimali на фоне жёлтой стены',
    caption: 'За стойкой',
    tall: true,
  },
  {
    src: '/images/wall-poster.jpg',
    alt: 'Станция с крышками и трубочками, постер со слоганом кофейни',
    caption: 'Станция с собой',
  },
  {
    src: '/images/drink-latte.jpg',
    alt: 'Напиток со сливочной шапкой, тыквенными семечками и шоколадной крошкой',
    caption: 'Топпинги на любой вкус',
  },
  {
    src: '/images/menu-board.jpg',
    alt: 'Доска меню кофейни с наборными буквами на деревянных рейках',
    caption: 'Доска в зале',
  },
  {
    src: '/images/reviews-wall.jpg',
    alt: 'Пробковая доска с цветными стикерами от гостей кофейни',
    caption: 'Стена отзывов',
  },
  {
    src: '/images/iced-coffee.jpg',
    alt: 'Холодный кофе со льдом в руке на фоне вывески Good Coffee',
    caption: 'Летом — со льдом',
  },
  {
    src: '/images/facade-window.jpg',
    alt: 'Окно кофейни в кирпичном фасаде, внутри жёлтая стена и витрина',
    caption: 'Найдите нас по жёлтому',
    wide: true,
  },
];
