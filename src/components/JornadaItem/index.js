import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { IoIosRocket } from 'react-icons/io';

import { Container, JornadaContainer, JornadaItemTitle } from './styles';

export default function JornadaItem({ passo, passoId, jornadaId }) {
  const url = '/jornada/quiz';
  // let url = '/Jornada/Code';

  return (
    <Container>
      <Link
        to={`/jornada/${jornadaId}/${passo.tarefas[0].tipo}/${passoId}`}
        title={passo.descricao}
        style={{ textDecoration: 'none' }}
      >
        <IoIosRocket />
        <h3>{passo.nome}</h3>
      </Link>
    </Container>
  );
}
