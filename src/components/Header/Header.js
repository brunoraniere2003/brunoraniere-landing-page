import React, { useState } from 'react';
import { HeaderContainer, Logo, MenuIcon, MenuList, MenuItem } from './HeaderStyle';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false); // Fecha o menu após o clique
    }
  };

  return (
    <HeaderContainer>
      <Logo>Bruno Raniere</Logo>
      <MenuIcon onClick={toggleMenu}>☰</MenuIcon>
      {menuOpen && (
        <MenuList>
          <MenuItem onClick={() => scrollToSection('timeline')}>Timeline</MenuItem>
          <MenuItem onClick={() => scrollToSection('redes-sociais')}>Redes Sociais</MenuItem>
        </MenuList>
      )}
    </HeaderContainer>
  );
};

export default Header;
