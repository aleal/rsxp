import React from 'react';

import Header from '../../components/Header';
import JornadaItem from '../../components/JornadaItem';

import { Container, Title, JornadaContainer } from './styles';

export default function Jornada() {
  return (
    <Container>
      <Header />
      <Title>Título Jornada</Title>
      <JornadaContainer>
        <JornadaItem />
        <JornadaItem />
      </JornadaContainer>
    </Container>
  );
}
