import * as React from "react";
import { Card, Divider, Typography } from "antd";
import { getRemainings } from "../utils";
import { Remainings, TR_TYPES } from "../types";
const electionDay = new Date("2023-05-14 08:00:00").getTime();

export default function Counter() {
  const [remainings, setRemainings] = React.useState<Remainings>({
    day: 0,
    hour: 0,
    minute: 0,
    second: 0,
  });

  React.useEffect(() => {
    const remainingInterval = setInterval(() => {
      const now = new Date().getTime();
      const diff = electionDay - now;
      if (electionDay >= now) {
        setRemainings(() => getRemainings(diff));
      }
    }, 1000);

    return () => clearInterval(remainingInterval);
  }, []);

  return (
    <div id="counter" className="page">
      <Typography.Title style={{ textAlign: "start" }}>Seçim Ne Zaman?</Typography.Title>
      <Typography.Text style={{ textAlign: "start", marginBottom: "2em" }}>
        2023 Türkiye Cumhuriyeti Cumhurbaşkanlığı Seçimleri'ne kalan süre...
      </Typography.Text>
      <div style={{ display: "flex", flexDirection: "row", marginBottom: "1em", flexWrap: "wrap", width: "100%" }}>
        {Object.entries(remainings).map(([key, value], idx) => (
          <Card className="remaining" key={idx}>
            <p>
              {value}
              <span className="type">{TR_TYPES[key as keyof Remainings]}</span>
            </p>
          </Card>
        ))}
      </div>
      <Typography.Text>Seçim tarihi 14 Mayıs 2023</Typography.Text>
      <Divider />
      <div style={{ textAlign: "start" }}>
        <Typography.Paragraph>
          <strong>2023 Türkiye cumhurbaşkanlığı seçimi</strong>, Türkiye cumhurbaşkanını belirlemek için 14 Mayıs 2023
          tarihinde yapılacak seçimdir. 2023 Türkiye genel seçimleri ile aynı gün yapılacaktır. Cumhurbaşkanı Recep
          Tayyip Erdoğan bir konuşmasında 1950 seçimlerine atıfta bulunarak seçimlerin 14 Mayıs 2023'te
          yapılabileceğinin işaretini vermiştir ve bazı muhalif partiler de bu tarihi seçim tarihi olarak kabul
          etmiştir. Cumhurbaşkanı Recep Tayyip Erdoğan tarafından 10 Mart 2023'te imzalanan bir kararnameyle seçimlerin
          yenilenmesine karar verildi. Aynı gün Yüksek Seçim Kurulu genel seçimlerin ve cumhurbaşkanlığı seçiminin ilk
          turunun 14 Mayıs'ta ve gerekirse cumhurbaşkanlığı seçiminin ikinci turunun da 28 Mayıs'ta yapılmasına karar
          verdi.{" "}
          <Typography.Text type="secondary" style={{ display: "block" }}>
            Kaynak:{" "}
            <a
              href="https://tr.wikipedia.org/wiki/2023_T%C3%BCrkiye_cumhurba%C5%9Fkanl%C4%B1%C4%9F%C4%B1_se%C3%A7imi"
              target="_blank"
            >
              Wikipedia
            </a>
          </Typography.Text>
        </Typography.Paragraph>
        <Divider />
        <Typography.Title level={4}>Seçim Sistemi</Typography.Title>
        <Typography.Paragraph>
          Türkiye'de genel seçimler için uygulanan seçim sistemi "D'Hondt" yöntemi ile belirlenen nispi temsil
          sistemidir. Bu sistem, seçim bölgelerinde belirlenen milletvekili sayısı kadar sandalye dağıtımını, parti veya
          ittifakların aldığı oy oranlarına göre yapar.
        </Typography.Paragraph>
        <Typography.Paragraph>
          Seçmenler, milletvekillerinin belirlendiği seçim bölgelerinde, oy kullanarak tercih ettikleri parti veya
          bağımsız adaylara oy verirler. Partilerin veya bağımsız adayların seçimleri kazanabilmeleri için belli bir oy
          oranını geçmeleri gerekmektedir. Türkiye'de, genel seçimlerde baraj oranı %10'dur, yani bir parti veya
          ittifak, seçimlerde aldığı oy oranı %10'un altında ise, temsil edilemez.
        </Typography.Paragraph>
        <Typography.Paragraph>
          D'Hondt yöntemi, her parti veya ittifakın aldığı oyların, birbirine bölünerek sıralamaya konulmasını sağlar.
          Daha sonra, birinci sıradaki parti veya ittifakın aldığı oy sayısı, 1'e eşitlenir ve bu sayı diğer partilerin
          veya ittifakların aldığı oy sayılarına bölünür. Bu işlem, her parti veya ittifak için ayrı ayrı yapılır ve
          böylece her bir parti veya ittifakın aldığı milletvekili sayısı belirlenir.
        </Typography.Paragraph>
        <Typography.Paragraph>
          Seçim sistemi, Türkiye'de cumhurbaşkanlığı seçimleri için de geçerlidir. Ancak, cumhurbaşkanlığı seçimleri
          için baraj oranı %50'dir ve seçimler, doğrudan halk oylamasıyla yapılır. Cumhurbaşkanlığı seçimleri için
          belirlenen adaylar, parti veya bağımsız olarak seçmenlerin oyuna sunulur ve en çok oy alan aday cumhurbaşkanı
          seçilir.
        </Typography.Paragraph>
      </div>
    </div>
  );
}
