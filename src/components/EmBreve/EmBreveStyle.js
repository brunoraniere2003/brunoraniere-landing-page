import styled from 'styled-components';
import { colors } from '../../styles/variables';

export const EmBreveContainer = styled.section`
  padding: 60px 20px;
  text-align: center;
  background-color: ${colors.background};
`;

export const SectionTitle = styled.h2`
  color: ${colors.text};
  font-size: 2em;
  margin-bottom: 1em;
`;

export const ComingSoon = styled.p`
  color: ${colors.highlight};
  font-size: 1.5em;
  font-weight: bold;
`;
