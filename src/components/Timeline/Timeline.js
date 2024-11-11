// Timeline.js
import React from 'react';
import { TimelineContainer, SectionTitle, CardsContainer, CardWrapper, Card, CardFront, CardBack, CardTitle, CardSubtitle, CardDescription, CardBackSubtitle } from './TimelineStyle';

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
  return (
    <TimelineContainer>
      <SectionTitle>Timeline</SectionTitle>
      <CardsContainer>
        {events.map((event, index) => (
          <CardWrapper key={index}>
            <FlipCard title={event.title} description={event.description} />
          </CardWrapper>
        ))}
      </CardsContainer>
    </TimelineContainer>
  );
};

const FlipCard = ({ title, description }) => {
  const [flipped, setFlipped] = React.useState(false);

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