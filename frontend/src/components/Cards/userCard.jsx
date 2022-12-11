import Card from "react-bootstrap/Card";
import "./userCard.css";
import React, { Fragment } from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import closeLogo from "./img/closee.svg";
import showLogo from "./img/show.png";
import empty from "./img/empty2.png";
import Col from "react-bootstrap/esm/Col";
import { Link } from "react-router-dom";
import Loaders from "../loaders/loader";
function WithHeaderAndQuoteExample(props) {
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  async function getApi() {
    let res = await axios.get(`http://localhost:5000/quote`);
    if (res.status >= 404) {
      setNotFound(true);
    } else if (res.status >= 200 && res.status <= 404) {
      setLoading(false);
    }
    setLoading(false);
    setdata(res.data.result);

    console.log(res);
  }

  async function deleteQuotes(id) {
    let res = await axios.delete(`http://localhost:5000/qoute/${id}`);
    await getApi();
    return res;
  }

  useEffect(() => {
    getApi();
  }, [props.newData]);
  function handleWidth() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWidth);
  }, [width]);
  if (notFound) {
    return (
      <div className="img-empty">
        <img src={empty} alt="kosong" />
        <p>lost Connection</p>
      </div>
    );
  }
  return (
    <Fragment>
      {loading ? (
        <>
          <Loaders />
        </>
      ) : (
        <>
          {data.length > 0 ? (
            <>
              {width <= 700 ? (
                <>
                  {data.map((post) => {
                    return (
                      <Col md="auto" key={post.id}>
                        <Card className="mt-3 much-Quotes">
                          <Card.Body>
                            <button
                              type="button"
                              className="delete"
                              onClick={deleteQuotes.bind(this, post.id)}
                            >
                              <img src={closeLogo} alt="" width={15} />
                            </button>
                            <blockquote>
                              <p key={post.id}>{post.quote}</p>
                              <footer>{post.user}</footer>
                            </blockquote>
                            <Link to={`show/${post.id}`}>
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
                  {data.map((post) => {
                    return (
                      <Col className="col-6 col-md-4" key={post.id}>
                        <Card className="mt-3 much-Quotes">
                          <Card.Body>
                            <button
                              type="button"
                              className="delete"
                              onClick={deleteQuotes.bind(this, post.id)}
                            >
                              <img src={closeLogo} alt="" width={15} />
                            </button>
                            <blockquote>
                              <p>{post.quote}</p>
                              <footer>{post.user}</footer>
                            </blockquote>
                            <Link to={`show/${post.id}`}>
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
            <div className="img-empty">
              <img src={empty} alt="kosong" />
              <p>tidak ada data</p>
            </div>
          )}
        </>
      )}
    </Fragment>
  );
}
export default WithHeaderAndQuoteExample;
