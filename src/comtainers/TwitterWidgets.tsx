import { Timeline } from "react-twitter-widgets";
import Slider from "react-slick";
import NextArrow from "../components/NextArrow";
import PrevArrow from "../components/PrevArrow";
import { lazy, useEffect, useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin, Typography } from "antd";
import ErrorBoundary from "antd/es/alert/ErrorBoundary";

const antIcon = <LoadingOutlined style={{ fontSize: "3em" }} spin />;

const nominees = ["kilicdarogluk", "RTErdogan", "vekilince", "DrSinanOgan"];
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
  const [nomineeWillMount, setNomineeWillMount] = useState<number>(0);
  useEffect(() => {
    setNomineeWillMount(() => loadedWidgets.length);
  }, [loadedWidgets]);

  return (
    <div id="twitter-cards" className="page">
      <Typography.Title level={1} style={{ textAlign: "start", margin: 0 }}>
        Cumhurbaşkanı Adayları Ne Diyor?
      </Typography.Title>
      <Typography.Text style={{ textAlign: "start", display: "block", marginBottom: "2em" }}>
        Cumhurbaşkanı adaylarından son tweetler
      </Typography.Text>
      <Slider {...settings} autoplay={loadedWidgets.length === nominees.length}>
        {nominees.map((nominee, idx) => (
          <div key={idx}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
              {!loadedWidgets.includes(idx) && <Spin indicator={antIcon} />}
            </div>
            <ErrorBoundary>
              {nomineeWillMount === idx || loadedWidgets.length >= idx + 1 ? (
                <Timeline
                  onLoad={() => setLoadedWidgets((prev) => (!prev.includes(idx) ? [...prev, idx] : [...prev]))}
                  dataSource={{
                    sourceType: "profile",
                    screenName: nominee,
                  }}
                  options={{
                    height: "400",
                    width: "400",
                  }}
                />
              ) : null}
            </ErrorBoundary>
          </div>
        ))}
      </Slider>
    </div>
  );
}
