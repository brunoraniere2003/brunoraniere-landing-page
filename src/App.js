import React from 'react';
import GlobalStyle from './styles/globalStyles';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Timeline from './components/Timeline/Timeline';
import RedesSociais from './components/RedesSociais/RedesSociais';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      
      {/* Seção da Timeline com ID */}
      <section id="timeline">
        <Timeline />
      </section>

      {/* Seção de Redes Sociais com ID */}
      <section id="redes-sociais">
        <RedesSociais />
      </section>
    </>
  );
}

export default App;
