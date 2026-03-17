import Header from "../Header/Header";
import HomePage from "../../pages/HomePage";
import { Footer } from "../Footer/Footer";
import Counter from "../Counter";
import UserProfile from "../UserProfile";
import ParentComponent from "../ParentComponent";
import "./App.css";
import ScoreCounter from "../ScoreCounter";
import ProfileStatus from "../ProfileStatus";
import ScoreBoardParent from "../ScoreBoardParent";

function App() {
  return (
    <main className="app">
      <Header />
      <HomePage />
      <Counter />
      <ScoreCounter />
      <UserProfile />
      <ProfileStatus />
      <ParentComponent />
      <ScoreBoardParent />
      <Footer />
    </main>
  );
}

export default App;
