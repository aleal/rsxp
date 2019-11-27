import React from 'react';
import PropTypes from 'prop-types';

import { FaFacebook } from 'react-icons/fa';

import { Container, JornadaItemTitle } from './styles';

export default function JornadaItem({ title }) {
  return (
    <Container>
      <FaFacebook />
      <JornadaItemTitle>{title}</JornadaItemTitle>
    </Container>
  );
}
