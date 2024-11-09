import React from 'react';
import GlobalStyle from './styles/globalStyles';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import SobreMim from './components/SobreMim/SobreMim';
import Timeline from './components/Timeline/Timeline';
import Valores from './components/Valores/Valores';
import Curiosidades from './components/Curiosidades/Curiosidades';
import EmBreve from './components/EmBreve/EmBreve';
import RedesSociais from './components/RedesSociais/RedesSociais';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <SobreMim />
      <Timeline />
      <Valores />
      <Curiosidades />
      <EmBreve />
      <RedesSociais />
      {/* Outras seções aqui */}
    </>
  );
}

export default App;
