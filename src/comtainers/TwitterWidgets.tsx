import { Timeline } from "react-twitter-widgets";
import Slider from "react-slick";
import NextArrow from "../components/NextArrow";
import PrevArrow from "../components/PrevArrow";

const nominees = ["kilicdarogluk", "RTErdogan", "vekilince"];
const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
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
  return (
    <div id="twitter-cards" className="page">
      <h1>Adaylar Ne Diyor?</h1>
      <Slider {...settings}>
        {nominees.map((nominee, idx) => (
          <Timeline
            key={idx}
            dataSource={{
              sourceType: "profile",
              screenName: nominee,
            }}
            options={{
              height: "400",
              width: "400",
            }}
          />
        ))}
      </Slider>
    </div>
  );
}
