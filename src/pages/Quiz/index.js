import React from 'react';

import Header from '../../components/Header';
// import JornadaItem from '../../components/JornadaItem';

import { Container, Questao } from './styles';

export default function Quiz() {
  return (
    <Container>
      <Header />
      <Questao>Questao</Questao>
      <div>
        <input type="radio" name="radio" value="opt1" />
      </div>
    </Container>
  );
}
