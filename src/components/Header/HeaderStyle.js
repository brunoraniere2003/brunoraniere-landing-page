import styled from 'styled-components';
import { colors } from '../../styles/variables';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: ${colors.background};
  position: relative;
  z-index: 10;
  -webkit-tap-highlight-color: transparent; /* Remove o highlight azul no mobile */
`;

export const Logo = styled.h1`
  color: ${colors.highlight};
  font-size: 1.5em;

  @media (max-width: 768px) {
    font-size: 1.2em;
  }
`;

export const MenuIcon = styled.div`
  font-size: 2em;
  color: ${colors.text};
  cursor: pointer;
  -webkit-tap-highlight-color: transparent; /* Remove o highlight azul no mobile */
`;

export const MenuList = styled.div`
  position: absolute;
  top: 70px;
  right: 20px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.background};
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  -webkit-tap-highlight-color: transparent; /* Remove o highlight azul no mobile */

  @media (max-width: 768px) {
    padding: 5px;
  }
`;

export const MenuItem = styled.a`
  color: ${colors.text};
  padding: 10px 0;
  text-decoration: none;
  font-size: 1.2em;
  transition: color 0.3s;
  cursor: pointer;

  &:hover {
    color: ${colors.highlight};
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    font-size: 1em;
    padding: 8px 0;
  }

  @media (max-width: 480px) {
    font-size: 0.9em;
    padding: 6px 0;
  }
`;
