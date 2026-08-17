import { useEffect, useState } from 'react';
import { Logo } from '../Logo/Logo';
import { info } from '../../data/info';
import './Header.scss';

// Порядок повторяет порядок секций на странице
const links = [
  { href: '#about', label: 'О нас' },
  { href: '#menu', label: 'Меню' },
  { href: '#gallery', label: 'Атмосфера' },
  { href: '#reviews', label: 'Отзывы' },
  { href: '#contacts', label: 'Контакты' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Пока открыто мобильное меню, страница под ним не скроллится
  useEffect(() => {
    document.body.classList.toggle('is-locked', open);
    return () => document.body.classList.remove('is-locked');
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // При повороте экрана или увеличении окна до десктопа бургер исчезает,
  // и открытое меню осталось бы висеть, заблокировав прокрутку страницы
  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 861px)');
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setOpen(false);
    };
    desktop.addEventListener('change', onChange);
    return () => desktop.removeEventListener('change', onChange);
  }, []);

  return (
    <>
      <header
        className={`header ${scrolled ? 'header--scrolled' : ''} ${
          open ? 'header--menu-open' : ''
        }`}
      >
        <div className="header__inner">
          <a href="#top" className="header__logo" onClick={() => setOpen(false)}>
            <Logo />
          </a>

          <nav className="header__nav">
            {links.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <a className="header__phone" href={info.phoneHref}>
            {info.phone}
          </a>

          <button
            className={`header__burger ${open ? 'is-open' : ''}`}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/*
        Мобильное меню намеренно лежит рядом с шапкой, а не внутри неё.
        У шапки есть backdrop-filter, а элемент с фильтром становится
        containing block для position: fixed внутри — подложка меню
        схлопывалась бы до высоты шапки. Соседним элементом она всегда
        считается от вьюпорта, независимо от эффектов на шапке.
      */}
      <nav
        id="mobile-menu"
        className={`mobile-menu ${open ? 'is-open' : ''}`}
        aria-hidden={!open}
      >
        {/* --i задаёт очередь появления пунктов, см. transition-delay в стилях */}
        {links.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            style={{ '--i': i } as React.CSSProperties}
          >
            {link.label}
          </a>
        ))}

        <a
          className="mobile-menu__phone"
          href={info.phoneHref}
          onClick={() => setOpen(false)}
          style={{ '--i': links.length } as React.CSSProperties}
        >
          {info.phone}
        </a>
      </nav>
    </>
  );
}
