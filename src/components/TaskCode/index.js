import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { setTaskResults } from "../../redux/actions";

class Code extends React.Component {
  constructor(props) {
    super(props);
    this.state = { code: "", resultado: {} };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:7777/tasks/correct", {
        resposta: this.state.code,
        esperado: this.props.esperado,
        tipo: "code"
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
    this.setState({ code: e.target.value });
  }
  render() {
    const { resultado } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <textarea onChange={this.onChange} value={this.state.code}></textarea>
        <button type="submit">Responder</button>
        {!resultado.correto && (
          <div>
            <strong>
              {resultado.erro ||
                `Seu resultado foi: ${resultado.resultadoUser}`}
            </strong>{" "}
            Esperado: {resultado.esperado}
          </div>
        )}
      </form>
    );
  }
}

export default connect(null, { setTaskResults })(Code);
