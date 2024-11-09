import styled from 'styled-components';
import { colors } from '../../styles/variables';

export const SobreContainer = styled.section`
  text-align: center;
  padding: 60px 20px;
  background-color: ${colors.background};
`;

export const SectionTitle = styled.h2`
  color: ${colors.text};
  font-size: 2em;
  margin-bottom: 0.5em;
`;

export const BioText = styled.p`
  color: ${colors.text};
  font-size: 1.1em;
  max-width: 600px;
  margin: 0 auto;
`;
