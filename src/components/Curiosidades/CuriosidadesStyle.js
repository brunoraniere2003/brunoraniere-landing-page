import styled from 'styled-components';
import { colors } from '../../styles/variables';

export const CuriosidadesContainer = styled.section`
  padding: 60px 20px;
  background-color: ${colors.background};
  text-align: center;
`;

export const SectionTitle = styled.h2`
  color: ${colors.text};
  font-size: 2em;
  margin-bottom: 1em;
`;

export const CuriosityItem = styled.p`
  color: ${colors.highlight};
  font-size: 1.2em;
  margin-bottom: 10px;
`;
