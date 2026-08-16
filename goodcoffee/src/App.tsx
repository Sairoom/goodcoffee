import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Menu } from './components/Menu/Menu';
import { Gallery } from './components/Gallery/Gallery';
import { Reviews } from './components/Reviews/Reviews';
import { Contacts } from './components/Contacts/Contacts';
import { Footer } from './components/Footer/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <Reviews />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
