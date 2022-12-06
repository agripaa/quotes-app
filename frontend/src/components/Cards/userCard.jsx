import Card from "react-bootstrap/Card";
import "./userCard.css";
import React, { Fragment } from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import closeLogo from "./img/closee.svg";
import showLogo from "./img/show.png";
import Col from "react-bootstrap/esm/Col";
import { Link } from "react-router-dom";
function WithHeaderAndQuoteExample(props) {
  const [data, setdata] = useState([]);
  const [width, setWidth] = useState(window.innerWidth);
  function handleWidth() {
    setWidth(window.innerWidth);
  }
  function deleteQuotes(e) {
    axios.delete(`http://localhost:5000/quote/${e}`).then(() => getApi());
  }
  function getApi() {
    axios.get(`http://localhost:5000/quote`).then((v) => {
      setdata(v.data.result);
    });
  }
  useEffect(() => {
    getApi();
  }, [data]);
  useEffect(() => {
    window.addEventListener("resize", handleWidth);
  }, [width]);
  return (
    <Fragment>
      {data.length > 0 ? (
        <>
          {width <= 700 ? (
            <>
              {data.map((v) => {
                return (
                  <Col md="auto" key={v.id}>
                    <Card className="mt-3 much-Quotes">
                      <Card.Body>
                        <button
                          type="button"
                          className="delete"
                          onClick={deleteQuotes.bind(this, v.id)}
                        >
                          <img src={closeLogo} alt="" width={15} />
                        </button>
                        <blockquote>
                          <p key={v.id}>{v.quote}</p>
                          <footer>{v.user}</footer>
                        </blockquote>
                        <Link to={`show/${v.id}`}>
                          <>
                            <img src={showLogo} alt="" className="show" />
                          </>
                        </Link>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </>
          ) : (
            <>
              {data.map((v) => {
                return (
                  <Col className="col-6 col-md-4" key={v.id}>
                    <Card className="mt-3 much-Quotes">
                      <Card.Body>
                        <button
                          type="button"
                          className="delete"
                          onClick={deleteQuotes.bind(this, v.id)}
                        >
                          <img src={closeLogo} alt="" width={15} />
                        </button>
                        <blockquote>
                          <p>{v.quote}</p>
                          <footer>{v.user}</footer>
                        </blockquote>
                        <Link to={`show/${v.id}`}>
                          <>
                            <img src={showLogo} alt="" className="show" />
                          </>
                        </Link>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </>
          )}
        </>
      ) : (
        <i>Tidak ada data</i>
      )}
    </Fragment>
  );
}
export default WithHeaderAndQuoteExample;
