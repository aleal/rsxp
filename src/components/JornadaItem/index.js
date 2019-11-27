import React from 'react';
import PropTypes from 'prop-types';

import { IoIosRocket } from 'react-icons/io';

import { Container, JornadaItemTitle } from './styles';

export default function JornadaItem({ passo }) {
  return (
    <Container title={passo.descricao}>
      <IoIosRocket />
      <JornadaItemTitle />
      <h3>{passo.nome}</h3>
    </Container>
  );
}
