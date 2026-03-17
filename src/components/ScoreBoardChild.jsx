import React from "react";

const ScoreBoardChild = ({ score, onIncrease }) => {
  return (
    <div>
      <p>Счёт: {score}</p>
      <button onClick={onIncrease}>Прибавить 1</button>
    </div>
  );
};

export default ScoreBoardChild;
