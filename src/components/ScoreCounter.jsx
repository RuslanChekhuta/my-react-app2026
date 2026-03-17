import React, { Component } from "react";

export default class ScoreCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { score: 0 };
  }

  increaseScore = () => {
    this.setState((prev) => ({ score: prev.score + 1 }));
    this.setState((prev) => ({ score: prev.score + 1 }));
    this.setState((prev) => ({ score: prev.score + 1 }));
  };

  render() {
    return (
      <section>
        <p>Очки:{this.state.score}</p>
        <button onClick={this.increaseScore}>Добавить 3 очка</button>
      </section>
    );
  }
}
