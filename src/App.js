import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import ProfilePicture from './components/ProfilePicture';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    background-color: #121212;
    color: #fff;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #ff2e63;
  margin-bottom: 2rem;

  @media (max-width: 600px){
    font-size: 1.7rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.1rem;
  max-width: 700px;
  text-align: justify;
  line-height: 1.5;

  @media (max-width: 600px) {
    font-size: 0.9rem;
    max-width: 80%;
  }
`;


const App = () => {
  const technologyLogos = [
    {
      src: 'https://via.placeholder.com/50x50?text=React',
      alt: 'React Logo',
    },
    {
      src: 'https://via.placeholder.com/50x50?text=Vue',
      alt: 'Vue Logo',
    },
    // Adicione mais logos aqui
  ];

  return (
    <>
      <Navbar></Navbar>
      <GlobalStyle />
      <Container>
        <Title>Lucas Emanuel</Title>
        <ProfilePicture src="https://avatars.githubusercontent.com/u/88749179?v=4" />
        <Subtitle>Desenvolvedor Web</Subtitle>
        <Description>
        Como desenvolvedor, tenho orgulho em dizer que sou formado em Técnico em Redes de Computadores e atualmente sou estudante de Computação, o que me permite aprimorar constantemente minhas habilidades e conhecimentos na área.
        </Description>
        <Description>
        Tenho experiência com diversas tecnologias, incluindo ReactJS, React Native, Node.js, HTML, CSS, JavaScript e Java. Cada uma dessas ferramentas me permite criar soluções eficazes para problemas diversos, desde aplicações web até aplicativos móveis.
        </Description>
        <Description>
        Sou um estudioso incansável, sempre em busca de novas tendências e possibilidades. Meu compromisso com a qualidade do trabalho é um dos meus principais atributos, o que me leva a buscar constantemente as melhores práticas para entregar projetos que atendam às expectativas dos clientes.
        </Description>
        <Description>
        Minha comunicação clara e eficiente é uma habilidade que considero fundamental no desenvolvimento de projetos. Comunicar ideias de forma clara e objetiva é essencial para garantir que todos os membros da equipe estejam alinhados e trabalhando na mesma direção.
        </Description>
        <Description>
        Além disso, sou uma pessoa dedicada e curiosa, sempre em busca de desafios que possam me ajudar a crescer como desenvolvedor. Acredito que a curiosidade é uma qualidade essencial para quem trabalha em tecnologia, uma vez que nos permite explorar novas possibilidades e soluções inovadoras.
        </Description>
        <Description>
        Com essas qualidades, estou pronto para enfrentar qualquer desafio como desenvolvedor e contribuir para o sucesso de projetos de qualquer tamanho e complexidade.
        </Description>
      </Container>
      <Footer technologyLogos={technologyLogos} />
    </>
  );
};

export default App;

