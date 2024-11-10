import React, { useState } from 'react';
import Slider from 'react-slick';
import { TimelineContainer, SectionTitle, CardWrapper, Card, CardFront, CardBack, CardTitle, CardSubtitle, CardDescription, CardBackSubtitle } from './TimelineStyle';
import { colors } from '../../styles/variables';

// Componentes para as setas
const Arrow = ({ onClick, direction }) => (
  <div 
    onClick={onClick} 
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      top: '50%',
      [direction]: '25px', // Afastamento maior da borda
      transform: 'translateY(-50%)',
      zIndex: 2,
      cursor: 'pointer',
      fontSize: '2em', // Aumenta um pouco o tamanho para melhor visibilidade
      color: colors.highlight, // Cor das setas usando o "highlight"
    }}
  >
    {direction === 'left' ? '<' : '>'}
  </div>
);

const events = [
  { title: "Primeira venda", description: "Aos 4 anos de idade fiz minha primeira venda, entregando ao mercado (minha família) adesivos de caderno." },
  { title: "Melhorando vendas", description: "Aos 11 comecei a vender produtos importados para família e amigos, além de alguns conhecidos." },
  { title: "Recorde de vendas", description: "Aos 12 anos continuei comprando produtos importados e fui para a praia vender, em dois dias consegui fazer um total de 0 VENDAS, um belo baque." },
  { title: "Primeiro golpe", description: 'Aos 13 comecei a vender celulares semi-novos, enviei 1300 reais por um iPhone 7 que nunca chegou. "Melhor perder 1300 agora do que 1M lá na frente". Agora estou em busca dos 1M rsrsrs.'},
  { title: "No mundo da tecnologia", description: 'Aos 14 entrei no IFRN onde comecei a investir em ações, cripto e principalmente a programar.'},
  { title: "Minha empresa", description: 'Aos 16 montei minha primeira empresa, Lockers! Uma empresa de armários inteligentes na Praia de Ponta Negra. Sucesso total!'},
  { title: "Mais estudo", description: 'Aos 18 servi por um tempo o NPOR do Exército Brasileiro e entrei na UFRN para cursar Tecnologia da Informação.'},
  { title: "Crescendo ainda mais", description: 'Aos 20 entrei na maior faculdade de tecnologia do Brasil, FIAP, e comecei a estudar o curso de Engenharia de Software.'},
  { title: "Novamente empresário", description: 'Aos 21 montei minha empresa de desenvolvimento de software, que tem como objetivo desenvolver soluções tecnológicas com IA para o mercado.'},
];

const Timeline = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px", // Remove o padding para esconder cards laterais
    prevArrow: <Arrow direction="left" />,
    nextArrow: <Arrow direction="right" />,
  };

  return (
    <TimelineContainer>
      <SectionTitle>Timeline</SectionTitle>
      <Slider {...settings}>
        {events.map((event, index) => (
          <CardWrapper key={index}>
            <FlipCard title={event.title} description={event.description} />
          </CardWrapper>
        ))}
      </Slider>
    </TimelineContainer>
  );
};

const FlipCard = ({ title, description }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <Card onClick={handleFlip} flipped={flipped}>
      <CardFront>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>toque no card</CardSubtitle>
      </CardFront>
      <CardBack>
        <CardDescription>{description}</CardDescription>
        <CardBackSubtitle>arraste para o lado {'>>'}</CardBackSubtitle>
      </CardBack>
    </Card>
  );
};

export default Timeline;