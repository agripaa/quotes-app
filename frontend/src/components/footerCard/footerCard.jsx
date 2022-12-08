import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import "swiper/css/bundle";
import { Navigation } from "swiper";
import { useEffect } from "react";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";
import "./styleCards.scss";
function Slider() {
  const [width, setWidth] = useState(window.innerWidth);
  const [quotes, setQuotes] = useState([]);

  let angka = 0;
  function HandlesWidth() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    axios.get(`http://localhost:5000/quote`).then((v) => {
      setQuotes(v.data.result);
    });
  });
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--swiper-theme-color",
      "rgb(148, 237, 255)"
    );
    document.documentElement.style.setProperty(
      "--swiper-navigation-size",
      "25px"
    );
    window.addEventListener("resize", HandlesWidth);
  }, [width]);
  if (width >= 1000) {
    angka = 3;
  } else if (width <= 1000 && width >= 700) {
    angka = 2;
  } else if (width <= 700) {
    angka = 1;
  }
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={angka}
      onSlideChange={() => console.log()}
      onSwiper={(swiper) => console.log()}
      navigation={true}
      modules={[Navigation]}
    >
      {quotes.map((data) => {
        return (
          <SwiperSlide key={data.id}>
            <Card className="mt-3 quote">
              <Card.Body>
                <blockquote className="cardFooter">
                  <p className="pCardFooter" key={data.id}>
                    {data.quote}
                  </p>
                  <cite className="author">{data.user}</cite>
                </blockquote>
              </Card.Body>
            </Card>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
export default Slider;
