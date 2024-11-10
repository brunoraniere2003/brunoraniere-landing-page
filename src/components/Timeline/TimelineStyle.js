import styled, { keyframes } from 'styled-components';
import { colors } from '../../styles/variables';

// Animação de pulsação suave
const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.08);
  }
`;

export const TimelineContainer = styled.section`
  padding: 40px 0;
  max-width: 90vw;
  margin: 0 auto;
  text-align: center;
  overflow: hidden;
  position: relative; /* Para posicionar as setas */
`;

export const SectionTitle = styled.h2`
  font-size: 1.7em;
  margin-bottom: 20px;
`;

export const CardWrapper = styled.div`
  padding: 0 10px; /* Margem entre os cards */
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
  box-sizing: border-box;
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
  flex-direction: column;
  backface-visibility: hidden; /* Safari fix */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transform: rotateY(0deg);
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
  flex-direction: column;
  backface-visibility: hidden; /* Safari fix */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transform: rotateY(180deg);
  padding: 25px;
  overflow-y: auto;
`;

export const CardTitle = styled.h3`
  font-size: 1.5em;
  padding: 0 40px;
  color: ${colors.highlight};
`;

export const CardSubtitle = styled.p`
  font-size: 0.9em;
  margin-top: 5px;
  color: ${colors.text};
  animation: ${pulse} 2.1s ease-in-out infinite; /* Animação de pulsação */
`;

export const CardDescription = styled.p`
  font-size: 1.2em;
  padding: 20px;
`;

export const CardBackSubtitle = styled.p`
  font-size: 0.9em;
  color: ${colors.highlight};
  animation: ${pulse} 2.1s ease-in-out infinite; /* Animação de pulsação */
`;

export const Arrow = styled.div`
  position: absolute !important;
  top: 50% !important;
  height: 50% !important;  /* Define uma altura menor, como 50% */
  width: 80px !important; // Largura da área de clique
  font-size: 2em !important;
  color: ${colors.highlight} !important;
  cursor: pointer;
  transform: translateY(-50%) !important;
  z-index: 2 !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  transition: color 0.2s;

  &:hover {
    color: ${colors.highlightHover} !important;
  }
`;

export const ArrowLeft = styled(Arrow)`
  left: -80px !important; /* Afasta a seta da borda esquerda */
`;

export const ArrowRight = styled(Arrow)`
  right: -80px !important; /* Afasta a seta da borda direita */
`;