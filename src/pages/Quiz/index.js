import React from 'react';

import { connect } from 'react-redux';
import Header from '../../components/Header';
// import JornadaItem from '../../components/JornadaItem';

import { Container, Questao } from './styles';

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = { resposta: '', resultado: {} };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    axios
      .post('http://localhost:7777/tasks/correct', {
        resposta: this.state.resposta,
        esperado: this.props.esperado,
        tipo: 'quiz',
      })
      .then(({ data }) => {
        console.log(data);
        this.setState({ resultado: data });
        if (data.correto) {
          this.props.setTaskResults({ id: this.props.id, ...data });
        }
      })
      .catch(e => console.error(e));
  }

  onChange(e) {
    this.setState({ resposta: e.target.value });
  }

  render() {
    const { resultado } = this.state;
    if (resultado.correto) {
      return <Redirect to="/jornada" />;
    }
    return (
      <form onSubmit={this.onSubmit}>
        (
        <Container>
          <Header />
          <Questao>{quiz.descricao}</Questao>
          <div>
            {quiz.opts.map((opt, i) => (
              <span key={i}>
                <input
                  type="radio"
                  name="radio"
                  onClick={this.onChange}
                  checked={this.state.resposta === opt}
                  value={opt}
                />
                {opt}
              </span>
            ))}
            <button type="submit">Responder</button>
          </div>
        </Container>
        );
        {!resultado.correto && (
          <div>
            <strong>Resposta incorreta</strong>
          </div>
        )}
      </form>
    );
  }
}

function mapStateToProps({ data: { jornadas } }, props) {
  const { id, task } = props.match.params;
  return {
    quiz: jornadas[id].passos[task].tarefas[0],
  };
}

export default connect(mapStateToProps)(Quiz);
