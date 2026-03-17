import React, { Component } from "react";

export class IdeaList extends Component {
  constructor(props) {
    super(props);
    this.state = { ideas: [], newIdea: "" };
  }

  handleInputChange = (e) => {
    this.setState({ newIdea: e.target.value });
  };

  addIdea = () => {
    const { ideas, newIdea } = this.state;

    if (newIdea.trim()) {
      this.setState({
        ideas: [...ideas, newIdea],
        newIdea: "",
      });
    }
  };

  render() {
    return (
      <section>
        <h2>Список идей</h2>
        <input
          type="text"
          onChange={this.handleInputChange}
          value={this.state.newIdea}
        />
        <button onClick={this.addIdea}>Добавить идею</button>
        <ul>
          {this.state.ideas.map((e, i) => (
            <li key={i}>{e}</li>
          ))}
        </ul>
      </section>
    );
  }
}
