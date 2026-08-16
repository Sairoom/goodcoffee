import { useEffect, useState } from 'react';
import { Logo } from '../Logo/Logo';
import { info } from '../../data/info';
import './Header.scss';

const links = [
  { href: '#menu', label: 'Меню' },
  { href: '#about', label: 'О нас' },
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

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__inner">
        <a href="#top" className="header__logo" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <nav className={`header__nav ${open ? 'is-open' : ''}`}>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a className="header__nav-phone" href={info.phoneHref}>
            {info.phone}
          </a>
        </nav>

        <a className="header__phone" href={info.phoneHref}>
          {info.phone}
        </a>

        <button
          className={`header__burger ${open ? 'is-open' : ''}`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
