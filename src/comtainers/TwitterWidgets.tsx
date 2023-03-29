import { Timeline } from "react-twitter-widgets";
import Slider from "react-slick";
import NextArrow from "../components/NextArrow";
import PrevArrow from "../components/PrevArrow";
import { useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin, Typography } from "antd";

const antIcon = <LoadingOutlined style={{ fontSize: "3em" }} spin />;

const nominees = ["kilicdarogluk", "RTErdogan", "vekilince", "DrSinanOgan"];
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: nominees.length,
  slidesToScroll: nominees.length,
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
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  return (
    <div id="twitter-cards" className="page">
      <Typography.Title level={1} style={{ textAlign: "start", margin: 0 }}>
        Cumhurbaşkanı Adayları Ne Diyor?
      </Typography.Title>
      <Typography.Text style={{ textAlign: "start", display: "block", marginBottom: "2em" }}>
        Cumhurbaşkanı adaylarından son tweetler
      </Typography.Text>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
        {!isLoaded && <Spin indicator={antIcon} />}
      </div>
      <Slider {...settings}>
        {nominees.map((nominee, idx) => (
          <div key={idx}>
            <Timeline
              onLoad={() => setIsLoaded(true)}
              dataSource={{
                sourceType: "profile",
                screenName: nominee,
              }}
              options={{
                height: "400",
                width: "400",
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
