import "./App.css";
import Alliances from "./comtainers/Alliances";
import Counter from "./comtainers/Counter";
import TwitterCards from "./comtainers/TwitterWidgets";

function App() {
  return (
    <>
      <Counter />
      <TwitterCards />
      <Alliances />
    </>
  );
}

export default App;
