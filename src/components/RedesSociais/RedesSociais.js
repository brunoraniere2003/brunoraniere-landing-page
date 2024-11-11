import React, { useEffect } from 'react';
import { RedesContainer, SectionTitle, Subtitle, EmbedContainer } from './RedesSociaisStyle';

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
      <EmbedContainer>
        <blockquote
          className="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/_brunoraniere"
          data-instgrm-version="12"
          style={{
            background: '#FFF',
            border: '0',
            borderRadius: '3px',
            boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
            margin: '1px',
            maxWidth: '540px',
            minWidth: '326px',
            padding: '0',
            width: '100%',
          }}
        >
          <div style={{ padding: '16px' }}>
            <a 
              href="https://www.instagram.com/_brunoraniere" 
              style={{
                background: '#FFFFFF',
                lineHeight: '0',
                padding: '0 0',
                textAlign: 'center',
                textDecoration: 'none',
                width: '100%',
              }} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Ver perfil no Instagram
            </a>
          </div>
        </blockquote>
      </EmbedContainer>
    </RedesContainer>
  );
};

export default RedesSociais;