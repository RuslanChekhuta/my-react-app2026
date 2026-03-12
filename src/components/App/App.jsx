import "./App.css";
import MyName from "../MyName/MyName";
import Intro from "../Intro/Intro";
import MyCity from "../myCity/myCity";

function App() {
  return (
    <>
      <div>
        <Intro />
        <MyName />
        <MyCity />
      </div>
    </>
  );
}

export default App;
