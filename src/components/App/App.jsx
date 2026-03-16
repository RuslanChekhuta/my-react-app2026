import { MyName } from "../MyName/MyName";
import { Email } from "../Email";
import { ContactCard } from "../ContactCard";
import "./App.css";

function App() {
  const name = "Вася Пупкин";
  const element = <h1>Алексей и {name} - друзья</h1>;
  const condition = true;

  const response = "<div>alert('Вы взломаны!')</div>";

  return (
    <>
      <h1>Привет, React!</h1>
      <p>Это мой первый React-проект с Vite</p>
      {element}
      <div dangerouslySetInnerHTML={{ __html: response }}></div>
      <span>{3 + 8}</span>
      {condition && <MyName />}

      <Email />
      <ContactCard />
      <br />
      <input id="email" type="checkbox" checked={false} />
      <img src="" alt="" />
      <br />
      <label htmlFor="email">Получать новости</label>
      <button disabled>Просто кнопка</button>
    </>
  );
}

export default App;
