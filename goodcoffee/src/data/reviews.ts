// Записки гостей с пробковой доски в зале — то, что удалось разобрать
// на фотографиях. Добавляйте новые прямо сюда.

export interface Review {
  text: string;
  author?: string;
  /** Цвет стикера: соответствует бумажкам на доске. */
  color: 'pink' | 'yellow' | 'blue' | 'green' | 'peach';
}

export const reviews: Review[] = [
  { text: 'Очень вкусно!', color: 'pink' },
  { text: 'Как хорошо, что вы такие, а не другие', color: 'yellow' },
  { text: 'Просто ВАУ', color: 'blue' },
  { text: 'Ты огонь, кассир!', color: 'peach' },
  { text: 'Здесь вкусно', color: 'green' },
  { text: 'Приходите — не пожалеете', color: 'pink' },
  { text: 'Спасибо!', author: 'Ева и семья', color: 'yellow' },
  { text: 'Всем любви, добра и радости', color: 'blue' },
  { text: 'My first coffee ☕', color: 'peach' },
];
