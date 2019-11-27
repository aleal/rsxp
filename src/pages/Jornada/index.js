import React from 'react';

import { connect } from 'react-redux';
import Header from '../../components/Header';
import JornadaItem from '../../components/JornadaItem';
import { Container, Title, JornadaContainer } from './styles';

function Jornada(props) {
  const { jornada } = props;
  console.log(jornada);
  return (
    <Container>
      <Header />
      <Title>{jornada.descricao}</Title>
      <JornadaContainer>
        {jornada.passos.map((passo, i) => (
          <JornadaItem key={i} passo={passo} />
        ))}
      </JornadaContainer>
    </Container>
  );
}

function mapStateToProps({ data: { jornadas } }, props) {
  console.log(props.match.params.id);
  return {
    jornada: jornadas[parseInt(props.match.params.id)],
  };
}
export default connect(mapStateToProps)(Jornada);
