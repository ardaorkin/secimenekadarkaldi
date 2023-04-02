import "./App.css";
import Alliances from "./containers/Alliances";
import Counter from "./containers/Counter";
import Survey from "./containers/Survey";
import Politics from "./containers/Politics";

function App() {
  return (
    <>
      <Counter />
      <Politics />
      <Alliances />
      <Survey />
    </>
  );
}

export default App;
