import React from 'react';

import Header from '../../components/Header';
// import JornadaItem from '../../components/JornadaItem';

import { Container, Questao } from './styles';

export default function Code() {
  return (
    <Container>
      <Header />
      <Questao>Questao</Questao>
      <div>
        <input type="text" name="text" value="" />
      </div>
    </Container>
  );
}
