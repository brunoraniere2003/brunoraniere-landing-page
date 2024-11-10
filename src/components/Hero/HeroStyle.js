import styled from 'styled-components';
import { colors } from '../../styles/variables';

import HeroBgSquare from '../../assets/images/hero-bg-square.jpg';
import HeroBgRectangle from '../../assets/images/hero-bg-rectangle.jpg';

export const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centraliza todos os elementos verticalmente */
  align-items: center;
  text-align: center;
  padding: 100px 20px 120px;
  height: 80vh;
  position: relative;
  overflow: hidden;
  max-width: 100vw;
  color: ${colors.text};

  /* Imagem de fundo */
  background-image: url(${HeroBgRectangle});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  
  @media (max-width: 768px) {
    background-image: url(${HeroBgSquare});
  }

  /* Camada de opacidade sobre a imagem */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.55);
    z-index: 0;
  }

  position: relative;
  z-index: 1;
`;

export const Title = styled.h1`
  color: ${colors.highlight};
  font-size: 2.5em;
  margin-bottom: 1em;
  max-width: 90%;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 2em;
  }

  @media (max-width: 480px) {
    font-size: 1.9em;
  }
`;

export const Subtitle = styled.p`
  color: ${colors.text};
  font-size: 1.1em;
  margin-bottom: 19em;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 1em;
  }

  @media (max-width: 480px) {
    font-size: 0.9em;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  z-index: 1;
`;

export const Button = styled.button`
  background-color: ${({ primary }) => (primary ? colors.highlight : 'transparent')};
  color: ${({ primary }) => (primary ? '#fff' : colors.highlight)};
  border: ${({ primary }) => (primary ? 'none' : `2px solid ${colors.highlight}`)};
  padding: 9px 18px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.95em;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    opacity: 0.9;
  }
`;
