import "./App.css";
import Alliances from "./comtainers/Alliances";
import Counter from "./comtainers/Counter";
import Survey from "./comtainers/Survey";
import TwitterCards from "./comtainers/TwitterWidgets";

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
