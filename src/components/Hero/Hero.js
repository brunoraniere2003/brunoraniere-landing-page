import React from 'react';
import Typing from 'react-typing-effect';
import { HeroContainer, Title, Subtitle, ButtonGroup, Button } from './HeroStyle';

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
    <Subtitle>Um jovem completamente apaixonado por tecnologia</Subtitle>
    <ButtonGroup>
      <Button primary>Saiba Mais</Button>
      <Button>Contato</Button>
    </ButtonGroup>
  </HeroContainer>
);

export default Hero;
