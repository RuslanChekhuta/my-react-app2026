import { useEffect, useState } from "react";

export const DataFetcher = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=5",
        );
        const res = await response.json();
        setData(res);
      } catch (error) {
        console.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading === true) {
    return <div>Загрузка...</div>;
  }

  return (
    <>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <p>{count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Увеличить</button>
    </>
  );
};
