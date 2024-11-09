import React from 'react';
import { RedesContainer, SectionTitle, SocialLink } from './RedesSociaisStyle';

const RedesSociais = () => (
  <RedesContainer>
    <SectionTitle>Redes Sociais</SectionTitle>
    <SocialLink href="https://www.linkedin.com" target="_blank">LinkedIn</SocialLink>
    <SocialLink href="https://www.instagram.com" target="_blank">Instagram</SocialLink>
    <SocialLink href="https://github.com" target="_blank">GitHub</SocialLink>
  </RedesContainer>
);

export default RedesSociais;
