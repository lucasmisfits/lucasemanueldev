import React from 'react';
import styled from 'styled-components';
import { FaReact, FaHtml5, FaCss3, FaWordpress, FaNodeJs, FaJs, FaJava } from 'react-icons/fa';

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    & > * {
      margin: 0.5rem;
    }
    margin-bottom: 1.5rem;
  }
`;

const FooterIconLink = styled.a`
  color: #fff;
  font-size: 2.5rem;
  margin: 0 1rem;
  transition: transform 0.3s, filter 0.3s;

  &:hover {
    transform: scale(1.2);
    filter: drop-shadow(0 0 8px #ff2e63);
  }

  @media (max-width: 600px) {
    font-size: 2rem;
    margin: 0.5rem;
  }
`;




const FooterIcons = () => {
  const icons = [
  {
  url: 'https://reactjs.org/',
  icon: <FaReact />,
  },
  {
  url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  icon: <FaHtml5 />,
  },
  {
  url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  icon: <FaCss3 />,
  },
  {
  url: 'https://nodejs.org/en/',
  icon: <FaNodeJs />,
  },
  {
  url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  icon: <FaJs />,
  },
  {
  url: 'https://wordpress.org/',
  icon: <FaWordpress />,
  },
  {
  url: 'https://www.java.com/en/',
  icon: <FaJava />,
  },
  ];

  return (
    <IconContainer>
      {icons.map((icon, index) => (
        <FooterIconLink key={index} href={icon.url} target="_blank" rel="noopener noreferrer">
          {icon.icon}
        </FooterIconLink>
      ))}
    </IconContainer>
  );
};

export default FooterIcons;
