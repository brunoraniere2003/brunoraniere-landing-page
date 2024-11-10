import React from 'react';
import Typing from 'react-typing-effect';
import { HeroContainer, Title, Subtitle, ButtonGroup, Button } from './HeroStyle';
import { colors } from '../../styles/variables';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    const offset = -80; // ajuste conforme necessário para o espaço superior

    if (section) {
      const topPosition = section.getBoundingClientRect().top + window.pageYOffset + offset;
      window.scrollTo({ top: topPosition, behavior: 'smooth' });
    }
  };

  return (
    <HeroContainer>
      <Title>
        <Typing
          text={['Desenvolvedor...', 'Inovador...', 'Criativo...']}
          speed={100}
          eraseSpeed={50}
          eraseDelay={2000}
          typingDelay={500}
          cursor="|"
        />
      </Title>
      <Subtitle>
        Um jovem completamente <span style={{ color: colors.highlight }}>apaixonado</span> por <span style={{ color: colors.highlight }}>tecnologia</span>
      </Subtitle>
      <ButtonGroup>
        <Button $primary onClick={() => scrollToSection('timeline')}>Saiba Mais</Button>
        <Button onClick={() => scrollToSection('redes-sociais')}>Contato</Button>
      </ButtonGroup>
    </HeroContainer>
  );
};

export default Hero;