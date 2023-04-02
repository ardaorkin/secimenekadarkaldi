import { Timeline } from "react-twitter-widgets";
import Slider from "react-slick";
import NextArrow from "../components/NextArrow";
import PrevArrow from "../components/PrevArrow";
import { useState } from "react";
import { Spin, Typography } from "antd";

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
export default function Politics() {
  const [loadedWidgets, setLoadedWidgets] = useState<number[]>([]);
  return (
    <div id="twitter-cards" className="page">
      <Typography.Title level={2} style={{ textAlign: "start", margin: 0 }}>
        Cumhurbaşkanı Adayları Ne Diyor?
      </Typography.Title>
      <Typography.Text style={{ textAlign: "start", display: "block", marginBottom: "2em" }}>
        Cumhurbaşkanı adaylarından son tweetler
      </Typography.Text>
      <Slider {...settings} autoplay={loadedWidgets.length === nominees.length}>
        {nominees.map((username, idx) => (
          <div key={idx}>
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
                {!loadedWidgets.includes(idx) && <Spin />}
              </div>
              {loadedWidgets.includes(idx - 1) || idx === 0 ? (
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
              ) : null}
            </>
          </div>
        ))}
      </Slider>
    </div>
  );
}
