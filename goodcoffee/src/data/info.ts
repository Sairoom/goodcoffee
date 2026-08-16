// Единственное место, где живут контакты кофейни. Меняются здесь —
// подхватываются в шапке, контактах и подвале.

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

  mapHref:
    'https://yandex.ru/maps/?text=' +
    encodeURIComponent('Москва, улица Плеханова, 22'),
} as const;
