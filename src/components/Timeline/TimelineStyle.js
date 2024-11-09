import styled from 'styled-components';
import { colors } from '../../styles/variables';

export const TimelineContainer = styled.section`
  padding: 60px 20px;
  background-color: ${colors.background};
  text-align: center;
`;

export const SectionTitle = styled.h2`
  color: ${colors.text};
  font-size: 2em;
  margin-bottom: 1em;
`;

export const Event = styled.div`
  margin-bottom: 20px;
`;

export const EventTitle = styled.h3`
  color: ${colors.highlight};
  font-size: 1.5em;
  margin-bottom: 0.3em;
`;

export const EventDescription = styled.p`
  color: ${colors.text};
  font-size: 1.1em;
`;
