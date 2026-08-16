interface BoardTextProps {
  text: string;
}

/**
 * Раскладывает строку по отдельным «плашкам» — так, как буквы стоят
 * на наборной доске меню в зале. Слова не разрываются переносом.
 */
export function BoardText({ text }: BoardTextProps) {
  return (
    <span className="board-text">
      {text.split(' ').map((word, wordIndex) => (
        <span className="board-text__word" key={`${word}-${wordIndex}`}>
          {Array.from(word).map((char, charIndex) => (
            <span className="board-text__char" key={charIndex}>
              {char}
            </span>
          ))}
        </span>
      ))}
    </span>
  );
}
