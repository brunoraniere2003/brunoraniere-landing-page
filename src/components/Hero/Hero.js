import React from 'react';
import Typing from 'react-typing-effect';
import { HeroContainer, Title, Subtitle, ButtonGroup, Button } from './HeroStyle';
import { colors } from '../../styles/variables'; // Importa as cores para usar o salmão

const Hero = () => (
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
      <Button $primary>Saiba Mais</Button>
      <Button>Contato</Button>
    </ButtonGroup>
  </HeroContainer>
);

export default Hero;
