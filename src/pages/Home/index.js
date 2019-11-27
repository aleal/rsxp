import React from 'react';

import {
  FaFacebookSquare,
  FaYoutubeSquare,
  FaGamepad,
} from 'react-icons/fa';

import Header from '../../components/Header';

import {
  Container,
  Title,
  SubTitle,
  JornadaContainer,
  JornadaButton,
} from './styles';

export default function Home() {
  function handleJornada(jornada) {
    console.log(`Go to ${jornada}`);
  }

  return (
    <Container>
      <Header />
      <Title>Vamos começar nossa jornada?</Title>
      <SubTitle>Escolha sua jornada!</SubTitle>
      <JornadaContainer>
        <JornadaButton onClick={() => handleJornada('facebook')}>
          <FaFacebookSquare />
          <h4>Facebook</h4>
        </JornadaButton>
        <JornadaButton onClick={() => handleJornada('youtube')}>
          <FaYoutubeSquare />
          <h4>Youtube</h4>
        </JornadaButton>
        <JornadaButton onClick={() => handleJornada('flapbird')}>
          <FaGamepad />
          <h4>Flapbird</h4>
        </JornadaButton>
      </JornadaContainer>
    </Container>
  );
}
