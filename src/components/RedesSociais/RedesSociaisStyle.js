// RedesSociaisStyle.js

import styled, { keyframes } from 'styled-components';
import { colors } from '../../styles/variables';

// Animação de pulsação suave, igual à usada na Timeline.js
const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.08);
  }
`;

export const RedesContainer = styled.section`
  padding: 40px 20px 75px;
  background-color: ${colors.background};
  text-align: center;
`;

export const SectionTitle = styled.h2`
  color: ${colors.text};
  font-size: 1.7em;
  margin-bottom: 0.5em;
`;

export const Subtitle = styled.p`
  color: ${colors.text};
  font-size: 0.9em;
  margin-bottom: 0.9em;

  span {
    color: ${colors.highlight};
  }
`;

// Texto com animação de pulsação suave igual à da Timeline.js
export const InteractiveText = styled.p`
  color: ${colors.highlight};
  font-size: 0.6em;
  margin-bottom: 20px;
  animation: ${pulse} 2.1s ease-in-out infinite;
`;

export const EmbedContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  iframe {
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;