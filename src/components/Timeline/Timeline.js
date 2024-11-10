import React, { useState } from 'react';
import Slider from 'react-slick';
import { TimelineContainer, SectionTitle, CardWrapper, Card, CardFront, CardBack, CardTitle, CardSubtitle, CardDescription, CardBackSubtitle } from './TimelineStyle';

const events = [
  { title: "Início da Carreira", description: "Primeiros passos no mundo da programação." },
  { title: "Projetos Importantes", description: "Desenvolvimento de soluções inovadoras." },
  { title: "Reconhecimentos", description: "Conquistas e prêmios na área de tecnologia." }
];

const Timeline = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "20px",
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
        <CardBackSubtitle>arraste para o lado</CardBackSubtitle>
      </CardBack>
    </Card>
  );
};

export default Timeline;
