import { Button } from "../components/Button";
import "./HomePage.css";

function HomePage({ pageTitle, welcomeText, click }) {
  const showMessage = (message) => {
    alert(message);
  };

  return (
    <div className="home-page">
      <h2>{pageTitle}</h2>
      <p>{welcomeText}</p>
      <Button label="Нажми меня" onClick={click} />
      <Button
        label="Какое-то сообщение"
        onClick={() => showMessage("Привет!")}
      />
      <Button onClick={() => showMessage("Props делают компоненты гибкими")} />
    </div>
  );
}

export default HomePage;
