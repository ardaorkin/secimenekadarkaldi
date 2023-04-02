import "./App.css";
import Alliances from "./containers/Alliances";
import Counter from "./containers/Counter";
import Survey from "./containers/Survey";
import TwitterCards from "./containers/TwitterWidgets";

function App() {
  return (
    <>
      <Counter />
      <TwitterCards />
      <Alliances />
      <Survey />
    </>
  );
}

export default App;
