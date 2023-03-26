import { useEffect, useState } from "react";
import "./App.css";
import { getRemainings } from "./utils";
import { Remainings, TR_TYPES } from "./types";

const electionDay = new Date("2023-05-14").getTime();

function App() {
  const [remainings, setRemainings] = useState<Remainings>({
    months: 0,
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const remainingInterval = setInterval(() => {
      const now = new Date().getTime();
      const diff = electionDay - now;

      setRemainings(() => getRemainings(diff));
    }, 1000);

    return () => clearInterval(remainingInterval);
  }, []);

  return (
    <div className="App">
      {Object.entries(remainings).map(([key, value], idx) => (
        <div className="remaining" key={idx}>
          <p>
            {value}
            <span className="type">{TR_TYPES[key as keyof Remainings]}</span>
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
