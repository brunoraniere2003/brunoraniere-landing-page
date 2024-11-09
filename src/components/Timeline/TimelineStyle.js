import styled from 'styled-components';
import { colors } from '../../styles/variables';

export const TimelineContainer = styled.section`
  padding: 40px 0;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
`;

export const SectionTitle = styled.h2`
  font-size: 2em;
  color: ${colors.highlight};
  margin-bottom: 20px;
`;

export const Card = styled.div`
  perspective: 1000px;
  width: 100%;
  height: 200px;
  cursor: pointer;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  transform: ${({ flipped }) => (flipped ? "rotateY(180deg)" : "rotateY(0deg)")};
`;

export const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${colors.background};
  color: ${colors.highlight};
  display: flex;
  align-items: center;
  justify-content: center;
  backface-visibility: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${colors.backgroundLight};
  color: ${colors.text};
  display: flex;
  align-items: center;
  justify-content: center;
  backface-visibility: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transform: rotateY(180deg);
`;

export const CardTitle = styled.h3`
  font-size: 1.5em;
  color: ${colors.highlight};
`;

export const CardDescription = styled.p`
  font-size: 1.2em;
  padding: 20px;
`;
