import React, { Fragment, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./showQoutes.css";
import prev from "./img/goback.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Loaders from "../loaders/loader";
import Navbar from "../navbar/navbar";
import animeShowQuotes from "./img/anime2.png";
function ShowQuotes() {
  const [myQoutes, setMyqoutes] = useState({});
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const navigate = useNavigate();
  const params = useParams();
  async function getQoutesById() {
    try {
      let res = await axios.get(`http://localhost:5000/quote/${params.id}`);
      if (res.status >= 200 && res.status <= 404) {
        setLoading(false);
      }
      setLoading(false);
      setMyqoutes(res.data.data);
    } catch (error) {
      setNotFound(true);
    }
  }
  useEffect(() => {
    getQoutesById();
  }, [params]);

  function handleWidth() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWidth);
  }, [width]);

  return (
    <Fragment>
      <Navbar />
      <div className="containerShowQuotes">
        {notFound ? (
          <>
            <div className="dataKosong">
              <p>lost Connection</p>
            </div>
          </>
        ) : (
          <>
            {loading ? (
              <Loaders />
            ) : (
              <>
                <div className="judulShowQuotes">
                  <h2>
                    Quotes by <q>{myQoutes.user}</q>
                  </h2>
                </div>
                <div
                  className="previousShowQuotes"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  <img src={prev} alt="" />
                </div>
                <div className="tabelShowQuotes">
                  <div className="showQuotes">
                    <div className="textShowQuotes">
                      <q>{myQoutes.quote}</q>
                    </div>
                    <div className="authorShowQuotes">
                      <p>{myQoutes.user}</p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </>
        )}

        {width > 620 && (
          <>
            <div className="animeImageShowQuotes">
              <img src={animeShowQuotes} alt="" />
            </div>
          </>
        )}
      </div>
    </Fragment>
  );
}

export default ShowQuotes;
