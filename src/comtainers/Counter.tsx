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
      <Typography.Title style={{ textAlign: "start" }}>Seçim Sayacı</Typography.Title>
      <Typography.Text style={{ textAlign: "start", display: "inline-block", marginBottom: "2em", minWidth: "100vh" }}>
        2023 Türkiye Cumhuriyeti Cumhurbaşkanlığı Seçimleri'ne kalan süre...
      </Typography.Text>
      <div style={{ display: "flex", flexDirection: "row", marginBottom: "1em" }}>
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
          Türkiye Büyük Millet Meclisi ve cumhurbaşkanlığı seçimleri beş yılda bir aynı günde yapılır. Türkiye Büyük
          Millet Meclisi, üye tam sayısının beşte üç çoğunluğuyla seçimlerin yenilenmesine karar verebilir. Bu halde
          Türkiye Büyük Millet Meclisi genel seçimi ile cumhurbaşkanlığı seçimi birlikte yapılır. Cumhurbaşkanının
          seçimlerin yenilenmesine karar vermesi halinde, Türkiye Büyük Millet Meclisi genel seçimi ile cumhurbaşkanlığı
          seçimi birlikte yapılır. Cumhurbaşkanının ikinci döneminde meclis tarafından seçimlerin yenilenmesine karar
          verilmesi halinde, Cumhurbaşkanı bir defa daha aday olabilir. Seçimlerinin birlikte yenilenmesine karar
          verilen meclisin ve cumhurbaşkanının yetki ve görevleri, yeni meclisin ve cumhurbaşkanının göreve başlamasına
          kadar devam eder. Bu şekilde seçilen meclis ve cumhurbaşkanının görev süreleri de beş yıldır.
        </Typography.Paragraph>
        <Typography.Paragraph>
          2007 Türkiye anayasa değişikliği referandumu'nda kabul edilen değişikliklere göre Cumhurbaşkanı adayının
          seçilebilmek için geçerli oyların salt çoğunluğunu alması (en az yüzde 50 oran + 1 oy) gerekmektedir. Hiçbir
          aday salt çoğunluğu sağlayamazsa, ilk turda en çok oy alan iki aday arasında ikinci tur yapılır ve ardından
          salt çoğunluğu alan aday seçilir.
        </Typography.Paragraph>
        <Typography.Paragraph>
          2007 Türkiye anayasa değişikliği referandumu'nda kabul edilen Anayasanın 101. maddesine göre cumhurbaşkanı, en
          fazla iki defa olmak üzere 5 yıllık görev süresi için doğrudan halk tarafından seçilir. Ancak anayasanın 116.
          maddesine göre son yapılan seçimler TBMM oy çoğunluğu kararıyla yenilenirse cumhurbaşkanı bir defa daha aday
          olabilir. Cumhurbaşkanı meclisi kendi yetkisiyle yenilerse 3. kez aday olamaz.
        </Typography.Paragraph>
        <Typography.Paragraph>
          Anayasanın 101. maddesine göre, bir adayın cumhurbaşkanlığı seçimine katılabilmesi için, en son parlamento
          seçimlerinde tek başına veya birlikte geçerli oyların yüzde 5'ini almış siyasi partiler ya da mecliste grubu
          bulunan siyasi partiler tarafından aday gösterilmesi gerekmektedir. Ayrıca, ilçe seçim kurullarında en az
          100.000 seçmenin imzasını toplayabilen kişiler de aday olabilir.
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
      </div>
    </div>
  );
}
