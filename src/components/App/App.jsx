import { useState } from "react";
import Header from "../Header/Header";
import HomePage from "../../pages/HomePage";
import { Footer } from "../Footer/Footer";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../global.styled";
import "./App.css";

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "light";
  });

  const lightTheme = { body: "#FFF", text: "#363537" };

  const darkTheme = { body: "#363537", text: "#FAFAFA" };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <main className="app" data-theme={theme}>
        <Header />
        <button onClick={toggleTheme}>Сменить тему</button>
        <HomePage />
        <Footer />
      </main>
    </ThemeProvider>
  );
}

export default App;
