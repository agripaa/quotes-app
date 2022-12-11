import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import "swiper/css/bundle";
import { Navigation } from "swiper";
import { useEffect } from "react";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";
import "./styleCards.scss";
import Loaders from "../loaders/loader";
import empty from "../Cards/img/empty2.png";
function Slider(props) {
  const [width, setWidth] = useState(window.innerWidth);
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  let angka = 0;
  function HandlesWidth() {
    setWidth(window.innerWidth);
  }
  async function getApi() {
    let res = await axios.get(`http://localhost:5000/quote`);
    if (res.status >= 404) {
      setNotFound(true);
    } else if (res.status >= 200 && res.status <= 404) {
      setLoading(false);
    }
    setLoading(false);
    setQuotes(res.data.result);
  }
  useEffect(() => {
    getApi();
  }, [props.newData]);
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
  if (notFound) {
    return (
      <div className="img-empty">
        <img src={empty} alt="kosong" />
        <p>lost Connection</p>
      </div>
    );
  }
  return (
    <>
      {loading ? (
        <Loaders />
      ) : (
        <>
          {quotes.length > 0 ? (
            <>
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
            </>
          ) : (
            <div className="img-empty">
              <img src={empty} alt="kosong" />
              <p>tidak ada data</p>
            </div>
          )}
        </>
      )}
    </>
  );
}
export default Slider;
