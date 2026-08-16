// Меню перенесено один в один с доски в зале.
// Две цены через слэш — это два объёма (или одинарная / двойная порция).

export interface MenuItem {
  name: string;
  price: string;
}

export interface MenuGroup {
  id: string;
  title: string;
  hint?: string;
  items: MenuItem[];
}

export const menu: MenuGroup[] = [
  {
    id: 'coffee',
    title: 'Кофе',
    hint: '250 / 400 мл',
    items: [
      { name: 'Эспрессо / х2', price: '100 / 140' },
      { name: 'Американо / х2', price: '100 / 140' },
      { name: 'Доп шот', price: '+50' },
      { name: 'Капучино', price: '160 / 200' },
      { name: 'Флэт уайт', price: '200' },
      { name: 'Латте', price: '180' },
      { name: 'Раф', price: '250' },
    ],
  },
  {
    id: 'not-coffee',
    title: 'Не кофе',
    hint: '250 / 400 мл',
    items: [
      { name: 'Чай', price: '90 / 120' },
      { name: 'Матча латте', price: '160 / 200' },
      { name: 'Какао', price: '150 / 180' },
      { name: 'Горячий шоколад', price: '250 / 300' },
    ],
  },
  {
    id: 'extras',
    title: 'Добавки',
    items: [
      { name: 'Альтернатива', price: '+70' },
      { name: 'Сироп / топинг', price: '+25 / 40' },
      { name: 'Молоко / сливки', price: '+30 / 60' },
      { name: 'Маршмеллоу', price: '+20' },
    ],
  },
];
