import React from 'react';

import { connect } from 'react-redux';
import Header from '../../components/Header';
// import JornadaItem from '../../components/JornadaItem';

import { Container, QuizContainer, Questao, Alternativa, ButtonSubmit } from './styles';

function Quiz({ quiz }) {
  return (
    <Container>
      <Header />
      <QuizContainer>
        <Questao>{quiz.descricao}</Questao>
        <Alternativa>
          {quiz.opts.map((opt, i) => (
            <span key={i}>
              <input type="radio" name="radio" value={opt} />
              {opt}
            </span>
          ))}
        </Alternativa>
        <ButtonSubmit><h4>Enviar</h4></ButtonSubmit>
      </QuizContainer>
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
