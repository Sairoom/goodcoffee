import { Logo } from '../Logo/Logo';
import { info } from '../../data/info';
import './Footer.scss';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <Logo light />
          <p className="footer__slogan">{info.slogan}</p>
        </div>

        <nav className="footer__nav">
          <a href="#menu">Меню</a>
          <a href="#about">О нас</a>
          <a href="#gallery">Атмосфера</a>
          <a href="#reviews">Отзывы</a>
          <a href="#contacts">Контакты</a>
        </nav>

        <div className="footer__contacts">
          <a href={info.phoneHref} className="footer__phone">
            {info.phone}
          </a>
          <a href={info.mapHref} target="_blank" rel="noreferrer">
            {info.address}
          </a>
          <a href={info.instagramHref} target="_blank" rel="noreferrer">
            {info.instagram}
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} Good Coffee</span>
        <a href="#top">Наверх ↑</a>
      </div>
    </footer>
  );
}
