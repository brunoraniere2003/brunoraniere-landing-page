import React, { useState } from 'react';
import { HeaderContainer, Logo, MenuIcon, MenuList, MenuItem } from './HeaderStyle';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <HeaderContainer>
      <Logo>Bruno Raniere</Logo>
      <MenuIcon onClick={toggleMenu}>☰</MenuIcon>
      {menuOpen && (
        <MenuList>
          {/* <MenuItem href="#sobre-mim">Sobre Mim</MenuItem> */}
          <MenuItem href="#timeline">Timeline</MenuItem>
          {/* <MenuItem href="#valores">Valores</MenuItem> */}
          {/* <MenuItem href="#curiosidades">Curiosidades</MenuItem> */}
          <MenuItem href="#contato">Contato</MenuItem>
        </MenuList>
      )}
    </HeaderContainer>
  );
};

export default Header;
