import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { IoIosRocket } from 'react-icons/io';

import { Container, JornadaContainer, JornadaItemTitle } from './styles';

export default function JornadaItem({ title }) {
  const url = '/Jornada/Quiz';
  // let url = '/Jornada/Code';

  return (
    <Container>
      <Link to={url} style={{ textDecoration: 'none' }}>
        <JornadaContainer>
          <IoIosRocket />
          <JornadaItemTitle>{title}</JornadaItemTitle>
          <h3>Descrição</h3>
        </JornadaContainer>
      </Link>
    </Container>
  );
}
