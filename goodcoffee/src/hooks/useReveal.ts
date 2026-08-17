import { useEffect, useRef, useState } from 'react';

interface RevealOptions {
  /** Какая доля элемента должна попасть в окно, чтобы он считался видимым. */
  threshold?: number;
  /** Запас вокруг окна: положительный — сработает заранее. */
  rootMargin?: string;
}

/**
 * Помечает элемент как видимый, когда он появляется во вьюпорте.
 * Класс .is-visible включает анимацию из миксина reveal(), а флаг visible
 * позволяет отложить тяжёлое содержимое (например, карту) до прокрутки.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options: RevealOptions = {}
) {
  const { threshold = 0.12, rootMargin = '0px 0px -40px 0px' } = options;
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, visible, className: visible ? 'is-visible' : '' };
}
