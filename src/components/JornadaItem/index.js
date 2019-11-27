import React from 'react';

import { IoIosRocket } from 'react-icons/io';

import { Container, JornadaContainer, JornadaItemTitle } from './styles';

export default function JornadaItem({ title }) {
  return (
    <Container>
      <JornadaContainer>
        <IoIosRocket />
        <JornadaItemTitle>{title}</JornadaItemTitle>
      </JornadaContainer>
      <h3>Descrição</h3>
    </Container>
  );
}
