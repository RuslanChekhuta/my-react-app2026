import { useState } from "react";

const MyComponent = ({ count = 0, increment, styles }) => {
  return (
    <div style={styles}>
      <p>Счетчик: {count}</p>
      <button onClick={increment}>Увеличить</button>
    </div>
  );
};

const withCounter = (WrappedComponents, styles) => {
  const WithCounterComponent = (props) => {
    const [count, setCount] = useState(props.initialCount || 0);
    const increment = () => {
      setCount(count + 1);
    };
    return (
      <WrappedComponents
        count={count}
        increment={increment}
        {...props}
        styles={styles}
      />
    );
  };
  return WithCounterComponent;
};

const EnhancedComponent1 = withCounter(MyComponent, { backgroundColor: "red" });

const MyComponent2 = ({ count = 10, increment, styles }) => {
  return (
    <div style={styles}>
      <p>Второй Счетчик: {count}</p>
      <button onClick={increment}>Увеличить</button>
    </div>
  );
};

const MyComponent3 = ({ count = 20, increment, styles }) => {
  return (
    <div style={styles}>
      <p>Третий Счетчик: {count}</p>
      <button onClick={increment}>Увеличить</button>
    </div>
  );
};

const EnhancedComponent2 = withCounter(MyComponent2, {
  backgroundColor: "blue",
});
const EnhancedComponent3 = withCounter(MyComponent3, {
  backgroundColor: "green",
});

export { EnhancedComponent1, EnhancedComponent2, EnhancedComponent3 };
