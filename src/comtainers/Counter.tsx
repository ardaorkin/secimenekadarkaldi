import * as React from "react";
import { Row, Col } from "antd";
import { getRemainings } from "../utils";
import { Remainings, TR_TYPES } from "../types";
const electionDay = new Date("2023-05-14 08:00:00").getTime();

export default function Counter() {
  const [remainings, setRemainings] = React.useState<Remainings>({
    months: 0,
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  React.useEffect(() => {
    const remainingInterval = setInterval(() => {
      const now = new Date().getTime();
      const diff = electionDay - now;

      setRemainings(() => getRemainings(diff));
    }, 1000);

    return () => clearInterval(remainingInterval);
  }, []);
  return (
    <div id="counter" className="page">
      <h1>2023 Türkiye Cumhuriyeti Cumhurbaşkanlığı Seçimlerine Kalan Süre</h1>
      <Row className="App">
        {Object.entries(remainings).map(([key, value], idx) => (
          <Col className="remaining" key={idx}>
            <p>
              {value}
              <span className="type">{TR_TYPES[key as keyof Remainings]}</span>
            </p>
          </Col>
        ))}
      </Row>
    </div>
  );
}
