import React from "react";

class TechList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      techs: ["Java", "HTML", "JS", "CSS"],
      newTech: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ newTech: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: ""
    });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.state.techs.map(tech => (
            <li key={tech}> {tech} </li>
          ))}
        </ul>
        <input
          type="text"
          value={this.state.newTech}
          onChange={this.handleChange}
        />
        <button type="submit"> OK </button>
      </form>
    );
  }
}

export default TechList;
