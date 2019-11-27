import React from 'react';
import PropTypes from 'prop-types';

import { IoIosRocket } from 'react-icons/io';

import { Container, JornadaItemTitle } from './styles';

export default function JornadaItem({ title }) {
  return (
    <Container>
      <IoIosRocket />
      <JornadaItemTitle>{title}</JornadaItemTitle>
      <h3>Descrição</h3>
    </Container>
  );
}
