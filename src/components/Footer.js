import React from 'react';
import styled from 'styled-components';
import FooterIcons from './FooterIcons';

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #111;
  padding: 50px;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <FooterIcons />
    </StyledFooter>
  );
};

export default Footer;
