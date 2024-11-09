import React from 'react';
import { TimelineContainer, SectionTitle, Event, EventTitle, EventDescription } from './TimelineStyle';

const Timeline = () => (
  <TimelineContainer>
    <SectionTitle>Timeline</SectionTitle>
    <Event>
      <EventTitle>Início da Carreira</EventTitle>
      <EventDescription>Primeiros passos no mundo da programação.</EventDescription>
    </Event>
    <Event>
      <EventTitle>Projetos Importantes</EventTitle>
      <EventDescription>Desenvolvimento de soluções inovadoras.</EventDescription>
    </Event>
    <Event>
      <EventTitle>Reconhecimentos</EventTitle>
      <EventDescription>Conquistas e prêmios na área de tecnologia.</EventDescription>
    </Event>
  </TimelineContainer>
);

export default Timeline;
