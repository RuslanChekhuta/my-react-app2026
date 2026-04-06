import { useEffect, useState } from "react";

const LifecycleDemo = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Компонент смонтирован или обновлен");

    const intervalId = setInterval(() => {
      setCount((prev) => prev + 10);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <p>Счетчик: {count}</p>
    </div>
  );
};

export default LifecycleDemo;
