import { Timeline } from "react-twitter-widgets";
import Slider from "react-slick";
import NextArrow from "../components/NextArrow";
import PrevArrow from "../components/PrevArrow";
import { lazy, useEffect, useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Button, Spin, Typography } from "antd";
import ErrorBoundary from "antd/es/alert/ErrorBoundary";

const antIcon = <LoadingOutlined style={{ fontSize: "3em" }} spin />;

const nominees = [
  { name: "Kemal Kılıçdaroğlu", username: "kilicdarogluk" },
  { name: "Recep Tayyip Erdoğan", username: "RTErdogan" },
  { name: "Muharrem İnce", username: "vekilince" },
  { name: "Sinan Oğan", username: "DrSinanOgan" },
];
const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: nominees.length > 3 ? 3 : nominees.length,
  slidesToScroll: 1,
  initialSlide: 0,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
export default function TwitterCards() {
  const [loadedWidgets, setLoadedWidgets] = useState<number[]>([]);
  const [showingTweets, setShowingTweets] = useState<number[]>([]);

  return (
    <div id="twitter-cards" className="page">
      <Typography.Title level={2} style={{ textAlign: "start", margin: 0 }}>
        Cumhurbaşkanı Adayları Ne Diyor?
      </Typography.Title>
      <Typography.Text style={{ textAlign: "start", display: "block", marginBottom: "2em" }}>
        Cumhurbaşkanı adaylarından son tweetler
      </Typography.Text>
      <Slider {...settings} autoplay={loadedWidgets.length === nominees.length}>
        {nominees.map(({ name, username }, idx) => (
          <div key={idx}>
            {showingTweets.includes(idx) ? (
              <>
                <div
                  style={{
                    display: loadedWidgets.includes(idx) ? "none" : "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    height: 500,
                  }}
                >
                  {!loadedWidgets.includes(idx) && <Spin indicator={antIcon} />}
                </div>
                <Timeline
                  onLoad={() => setLoadedWidgets((prev) => (!prev.includes(idx) ? [...prev, idx] : [...prev]))}
                  dataSource={{
                    sourceType: "profile",
                    screenName: username,
                  }}
                  options={{
                    height: "500",
                    width: "400",
                  }}
                />
              </>
            ) : (
              <div
                style={{
                  display: loadedWidgets.includes(idx) ? "none" : "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  height: 500,
                }}
              >
                <Button
                  type="link"
                  onClick={() => setShowingTweets((prev) => (prev.includes(idx) ? [...prev] : [...prev, idx]))}
                >
                  {name} için son gelişmeleri göster
                </Button>
              </div>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
}
