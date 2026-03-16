import Header from "../Header/Header";
import HomePage from "../../pages/HomePage";
import { Footer } from "../Footer/Footer";
import "./App.css";
import AboutPage from "../../pages/AboutPage";

function App() {
  return (
    <main className="app">
      <Header />
      <HomePage />
      <AboutPage />
      <Footer />
    </main>
  );
}

export default App;
