import React from 'react';

import { connect } from 'react-redux';
import Header from '../../components/Header';
// import JornadaItem from '../../components/JornadaItem';

import { Container, Questao } from './styles';

function Quiz({ quiz }) {
  return (
    <Container>
      <Header />
      <Questao>{quiz.descricao}</Questao>
      <div>
        {quiz.opts.map((opt, i) => (
          <span key={i}>
            <input type="radio" name="radio" value={opt} />
            {opt}
          </span>
        ))}
      </div>
    </Container>
  );
}

function mapStateToProps({ data: { jornadas } }, props) {
  const { id, task } = props.match.params;
  return {
    quiz: jornadas[id].passos[task].tarefas[0],
  };
}

export default connect(mapStateToProps)(Quiz);
