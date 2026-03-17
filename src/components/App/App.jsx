import Header from "../Header/Header";
import HomePage from "../../pages/HomePage";
import { Footer } from "../Footer/Footer";
import "./App.css";

function App() {
  const handleClick = () => {
    alert("меня нажали");
  };

  const showRegisterMessage = () => {
    alert("Открыта регистрация");
  };

  const showLoginMessage = () => {
    alert("Открыта авторизация");
  };

  return (
    <main className="app">
      <Header
        registerLabel="Регистрация"
        loginLabel="Авторизация"
        registerBtnStyles={{ height: 20, background: "red" }}
        loginBtnStyles={{ height: 20, background: "green" }}
        onRegisterClick={showRegisterMessage}
        onLoginClick={showLoginMessage}
      />
      <HomePage
        click={handleClick}
        pageTitle="Домашняя страница"
        welcomeText="Добро пожаловать на наш сайт!"
      />
      <Footer />
    </main>
  );
}

export default App;
