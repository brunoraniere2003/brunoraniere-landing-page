import styled from 'styled-components';
import { colors } from '../../styles/variables';

export const TimelineContainer = styled.section`
  padding: 40px 0;
  max-width: 90vw;
  margin: 0 auto;
  text-align: center;
  overflow: hidden;
`;

export const SectionTitle = styled.h2`
  font-size: 2em;
  color: ${colors.highlight};
  margin-bottom: 20px;
`;

export const CardWrapper = styled.div`
  padding: 0 10px;
`;

export const Card = styled.div`
  perspective: 1000px;
  width: 100%;
  height: 400px;
  cursor: pointer;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  transform: ${({ flipped }) => (flipped ? "rotateY(180deg)" : "rotateY(0deg)")};
  border: 2px solid ${colors.highlight};
  border-radius: 10px;
`;

export const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${colors.background};
  color: ${colors.highlight};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  backface-visibility: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 20px;
`;

export const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${colors.backgroundLight};
  color: ${colors.text};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  backface-visibility: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transform: rotateY(180deg);
  padding: 10px;
  overflow-y: auto;
`;

export const CardTitle = styled.h3`
  font-size: 1.5em;
  color: ${colors.highlight};
  margin-bottom: 0.3em;
`;

export const CardSubtitle = styled.p`
  font-size: 0.8em; /* Reduzi um pouco o tamanho */
  color: ${colors.text};
  margin-top: 0.5em;
`;

export const CardDescription = styled.p`
  font-size: 1.2em;
  padding: 20px;
  text-align: center;
`;

export const CardBackSubtitle = styled.p`
  font-size: 0.8em; /* Reduzi um pouco o tamanho */
  color: ${colors.text};
  margin-top: 1em;
  text-align: center;
`;
