// Единственное место, где живут контакты кофейни. Меняются здесь —
// подхватываются в шапке, контактах и подвале.

// Кофейня зарегистрирована в Яндекс.Картах как организация. И ссылка,
// и встроенный виджет собираются из этих трёх значений, чтобы при
// переезде правился только один блок.
const ORG_ID = '154178219016';
const ORG_SLUG = 'good_coffee';
const COORDS = { lat: 55.742154, lon: 37.765111 };
const POINT = `${COORDS.lon}%2C${COORDS.lat}`;

export const info = {
  name: 'Good Coffee',
  tagline: 'кофейня',
  slogan: 'Жизнь слишком коротка для плохого кофе. Выбирай Good Coffee',

  address: 'ул. Плеханова, 22, Москва',
  addressNote: 'внутри двора, этаж 1',

  phone: '+7 (977) 888-16-61',
  phoneHref: 'tel:+79778881661',

  // ⚠️ Часы работы на фотографиях не указаны — впишите реальные.
  hours: [
    { days: 'Пн — Пт', time: '08:00 — 21:00' },
    { days: 'Сб — Вс', time: '09:00 — 21:00' },
  ],

  instagram: '@goodcoffee_0824',
  instagramHref: 'https://instagram.com/goodcoffee_0824',

  // Карточка организации в Яндекс.Картах и точка на ней
  yandexOrgId: ORG_ID,
  yandexOrgSlug: ORG_SLUG,
  coords: COORDS,

  // Карточка кофейни в Яндекс.Картах. Ведём именно на организацию,
  // а не на адрес и не на построитель маршрута: на карточке сразу видно
  // название, фото, отзывы и часы, а кнопка маршрута там своя.
  mapHref: `https://yandex.ru/maps/org/${ORG_SLUG}/${ORG_ID}/?ll=${POINT}&z=17`,
} as const;

/** Адрес встраиваемого виджета Яндекс.Карт с карточкой кофейни. */
export const mapWidgetSrc = `https://yandex.ru/map-widget/v1/org/${ORG_SLUG}/${ORG_ID}/?ll=${POINT}&z=17`;
