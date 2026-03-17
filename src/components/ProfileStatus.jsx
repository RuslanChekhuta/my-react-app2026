import React, { Component } from "react";

export default class ProfileStatus extends Component {
  constructor(props) {
    super(props);
    this.state = { status: "Новичок", level: 1 };
  }

  updateStatus = () => {
    this.setState({ status: "Опытный" });
  };

  updateLevel = () => {
    this.setState((prev) => ({ level: prev.level + 1 }));
  };

  render() {
    return (
      <section>
        <p>Статус: {this.state.status}</p>
        <p>Уровень: {this.state.level}</p>
        <button onClick={this.updateStatus}>Изменить статус</button>
        <button onClick={this.updateLevel}>Повысить уровень</button>
      </section>
    );
  }
}
