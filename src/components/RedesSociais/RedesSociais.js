// RedesSociais.js
import React, { useEffect } from 'react';
import { RedesContainer, SectionTitle, Subtitle, EmbedContainer, InteractiveText } from './RedesSociaisStyle';

const RedesSociais = () => {
  useEffect(() => {
    // Carrega o script do Instagram para renderizar o embed
    const script = document.createElement('script');
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <RedesContainer>
      <SectionTitle>Redes Sociais</SectionTitle>
      <Subtitle>
        Me siga no <span>Instagram</span> e fique conectado!
      </Subtitle>
      <InteractiveText>post interativo abaixo, clique ou arraste</InteractiveText> {/* Frase pulsante */}
      <EmbedContainer>
        <blockquote
          className="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/p/DCCP3Rduk6k/"
          data-instgrm-version="14"
          style={{ maxWidth: '540px', width: '100%' }}
        ></blockquote>
      </EmbedContainer>
    </RedesContainer>
  );
};

export default RedesSociais;