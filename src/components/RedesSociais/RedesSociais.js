import React from 'react';
import { RedesContainer, SectionTitle, Subtitle, EmbedContainer } from './RedesSociaisStyle';

const RedesSociais = () => (
  <RedesContainer>
    <SectionTitle>Redes Sociais</SectionTitle>
    <Subtitle>
      Me siga no <span>Instagram</span> e fique conectado!
    </Subtitle>
    <EmbedContainer>
      <iframe
        src="https://www.instagram.com/p/C7pScicuU2I/embed"
        width="400"
        height="480"
        frameBorder="0"
        scrolling="no"
        allowTransparency="true"
        style={{ border: 'none', overflow: 'hidden' }}
        title="Instagram Embed"
      ></iframe>
    </EmbedContainer>
  </RedesContainer>
);

export default RedesSociais;
