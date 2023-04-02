import "./App.css";
import Alliances from "./containers/Alliances";
import Counter from "./containers/Counter";
import Survey from "./containers/Survey";
import Politics from "./containers/Politics";
import { Anchor } from "antd";

function App() {
  return (
    <>
      <div style={{ padding: "20px" }}>
        <Anchor
          style={{ background: "white" }}
          direction="horizontal"
          items={[
            {
              key: "counter",
              href: "#counter",
              title: "Seçim Sayacı",
            },
            {
              key: "politics",
              href: "#politics",
              title: "Seçim Politikaları",
            },
            {
              key: "alliances",
              href: "#alliances",
              title: "İttifaklar",
            },
            {
              key: "survey",
              href: "#survey",
              title: "Seçim Anketi",
            },
          ]}
        />
        <Counter />
        <Politics />
        <Alliances />
        <Survey />
      </div>
    </>
  );
}

export default App;
