// RedesSociaisStyle.js

import styled from 'styled-components';
import { colors } from '../../styles/variables';

export const RedesContainer = styled.section`
  padding: 60px 20px 75px; /* Aumenta o padding inferior para 100px */
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