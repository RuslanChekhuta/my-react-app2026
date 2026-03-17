import { Component } from "react";
import ScoreBoardChild from "./ScoreBoardChild";

export default class ScoreBoardParent extends Component {
  constructor(props) {
    super(props);
    this.state = { scores: [0, 0] };
  }

  increaseScore = (index) => {
    this.setState((prevState) => {
      const newScores = [...prevState.scores];
      newScores[index] += 1;

      return { scores: newScores };
    });
  };

  render() {
    return (
      <section>
        {this.state.scores.map((score, index) => (
          <ScoreBoardChild
            key={index}
            score={score}
            onIncrease={() => this.increaseScore(index)}
          />
        ))}
      </section>
    );
  }
}
