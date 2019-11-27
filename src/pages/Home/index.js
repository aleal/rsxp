import React from 'react';

import Header from '../../components/Header';

import {
  Container,
  Contend,
  Title,
  SubTitle,
  JornadaContainer,
  JornadaButton,
  Teste
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
        <JornadaButton>Facebook</JornadaButton>
        <JornadaButton>Facebook</JornadaButton>
        <JornadaButton>Facebook</JornadaButton>
      </JornadaContainer>
    </Container>
  );
}
