import React from 'react';
import styled from 'styled-components';

const SocialMediaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const SocialMediaLink = styled.a`
  color: #fff;
  font-size: 1.6rem;
  margin-left: 1rem;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.2);
    filter: drop-shadow(0 0 8px #ff2e63);
  }
`;

const SocialMediaLinks = ({ links }) => {
  return (
    <SocialMediaContainer>
      {links.map((link, index) => (
        <SocialMediaLink key={index} href={link.url} target="_blank" rel="noopener noreferrer">
          {link.icon}
        </SocialMediaLink>
      ))}
    </SocialMediaContainer>
  );
};

export default SocialMediaLinks;
