import akpIcon from "../assets/akp.png";
import mhpIcon from "../assets/mhp.png";
import bbpIcon from "../assets/bbp.png";
import refahIcon from "../assets/refah.png";
import chpIcon from "../assets/chp.png";
import iyiIcon from "../assets/iyi.svg";
import dpIcon from "../assets/dp.png";
import saadetIcon from "../assets/saadet.svg";
import devaIcon from "../assets/deva.svg";
import gelecekIcon from "../assets/gelecek.svg";
import { Table } from "antd";
import Slider from "react-slick";
import NextArrow from "../components/NextArrow";
import PrevArrow from "../components/PrevArrow";

const alliances = {
  "Cumhur İttifakı": [
    {
      party: {
        name: "Adalet ve Kalkınma Partisi",
        url: "https://tr.wikipedia.org/wiki/Adalet_ve_Kalk%C4%B1nma_Partisi",
      },
      icon: akpIcon,
      leader: { name: "Recep Tayyip ERDOĞAN", url: "https://tr.wikipedia.org/wiki/Recep_Tayyip_Erdo%C4%9Fan" },
    },
    {
      party: {
        name: "Milliyetçi Hareket Partisi",
        url: "https://tr.wikipedia.org/wiki/Milliyet%C3%A7i_Hareket_Partisi",
      },
      icon: mhpIcon,
      leader: { name: "Devlet Bahçeli", url: "https://tr.wikipedia.org/wiki/Devlet_Bah%C3%A7eli" },
    },
    {
      party: { name: "Büyük Birlik Partisi", url: "https://tr.wikipedia.org/wiki/B%C3%BCy%C3%BCk_Birlik_Partisi" },
      icon: bbpIcon,
      leader: { name: "Mustafa Destici", url: "https://tr.wikipedia.org/wiki/Mustafa_Destici" },
    },
    {
      party: { name: "Yeniden Refah Partisi", url: "https://tr.wikipedia.org/wiki/Yeniden_Refah_Partisi" },
      icon: refahIcon,
      leader: { name: "Fatih Erbakan", url: "https://tr.wikipedia.org/wiki/Fatih_Erbakan" },
    },
  ],
  "Millet İttifakı": [
    {
      party: { name: "Cumhuriyet Halk Partisi", url: "https://tr.wikipedia.org/wiki/Cumhuriyet_Halk_Partisi" },
      icon: chpIcon,
      leader: {
        name: "Kemal Kılıçdaroğlu",
        url: "https://tr.wikipedia.org/wiki/Kemal_K%C4%B1l%C4%B1%C3%A7daro%C4%9Flu",
      },
    },
    {
      party: { name: "İYİ Parti", url: "https://tr.wikipedia.org/wiki/%C4%B0Y%C4%B0_Parti" },
      icon: iyiIcon,
      leader: { name: "Meral Akşener", url: "https://tr.wikipedia.org/wiki/Meral_Ak%C5%9Fener" },
    },
    {
      party: {
        name: "Demokrat Parti",
        url: "https://tr.wikipedia.org/wiki/Demokrat_Parti_(2007)",
      },
      icon: dpIcon,
      leader: { name: "Gültekin Uysal", url: "https://tr.wikipedia.org/wiki/G%C3%BCltekin_Uysal" },
    },
    {
      party: {
        name: "Saadet Partisi",
        url: "https://tr.wikipedia.org/wiki/Saadet_Partisi",
      },
      icon: saadetIcon,
      leader: { name: "Temel Karamollaoğlu", url: "https://tr.wikipedia.org/wiki/Temel_Karamollao%C4%9Flu" },
    },
    {
      party: {
        name: "Demokrasi ve Atılım Partisi",
        url: "https://tr.wikipedia.org/wiki/Demokrasi_ve_At%C4%B1l%C4%B1m_Partisi",
      },
      icon: devaIcon,
      leader: { name: "Ali Babacan", url: "https://tr.wikipedia.org/wiki/Ali_Babacan" },
    },
    {
      party: {
        name: "Gelecek Partisi",
        url: "https://tr.wikipedia.org/wiki/Gelecek_Partisi",
      },
      icon: gelecekIcon,
      leader: { name: "Ahmet Davutoğlu", url: "https://tr.wikipedia.org/wiki/Ahmet_Davuto%C4%9Flu" },
    },
  ],
};

const columns = [
  {
    title: "",
    dataIndex: "icon",
    key: "icon",
    render: (
      icon: string,
      record: { party: { name: string; url: string }; icon: string; leader: { name: string; url: string } }
    ) => <img style={{ objectFit: "contain" }} width={50} height={50} src={icon} alt={record.party.url} />,
    width: 50,
  },
  {
    title: "Parti Adı",
    dataIndex: "party",
    key: "party",
    render: ({ name, url }: { name: string; url: string }) => (
      <a href={url} target="_blank">
        {name}
      </a>
    ),
  },
  {
    title: "Lider",
    dataIndex: "leader",
    key: "leader",
    render: ({ name, url }: { name: string; url: string }) => (
      <a href={url} target="_blank">
        {name}
      </a>
    ),
  },
];

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};
export default function Alliances() {
  return (
    <div id="alliance" className="page">
      <h1>Seçim İttifakları</h1>
      <Slider {...settings}>
        {Object.entries(alliances).map(([allianceName, members], idx) => (
          <div key={idx}>
            <h2 style={{ textAlign: "start" }}>{allianceName}</h2>
            <Table dataSource={members} columns={columns} pagination={false} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
