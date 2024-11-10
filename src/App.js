import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import GlobalStyle from './styles/globalStyles';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Timeline from './components/Timeline/Timeline';
import RedesSociais from './components/RedesSociais/RedesSociais';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Inicializa o AOS
  }, []);

  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />

      {/* Seção da Timeline com animação */}
      <section id="timeline" data-aos="fade-up">
        <Timeline />
      </section>

      {/* Seção de Redes Sociais com animação */}
      <section id="redes-sociais" data-aos="fade-up">
        <RedesSociais />
      </section>
    </>
  );
}

export default App;
