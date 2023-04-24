import React from 'react';
import styled from 'styled-components';
import SocialMediaLinks from './SocialMediaLinks';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #111;
`;

const Logo = styled.h1`
  color: #ff2e63;
  font-size: 2rem;
`;

const Navbar = () => {
  const socialMediaLinks = [
    {
      url: 'https://www.linkedin.com/in/seu_perfil',
      icon: <FaLinkedin />,
    },
    {
      url: 'https://github.com/lucasemanueldev',
      icon: <FaGithub />,
    },
    {
      url: 'https://www.instagram.com/misfitslucas',
      icon: <FaInstagram />,
    },
  ];

  return (
    <StyledNavbar>
      <Logo>Meu Porfolio!</Logo>
      <SocialMediaLinks links={socialMediaLinks} />
    </StyledNavbar>
  );
};

export default Navbar;
