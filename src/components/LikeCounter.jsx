import { useState } from "react";

const LikeCounter = () => {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes((prev) => prev + 1);
    setLikes((prev) => prev + 1);
    setLikes((prev) => prev + 1);
  };

  return (
    <section>
      <button onClick={handleLike}>Добавить 3 лайка</button>
      <p>Лайков: {likes}</p>
    </section>
  );
};

export default LikeCounter;
