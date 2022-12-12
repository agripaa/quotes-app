import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./showQoutes.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Loaders from "../loaders/loader";
import empty from "../Cards/img/empty2.png";

function ShowQuotes() {
  const [myQoutes, setMyqoutes] = useState({});
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  const params = useParams();
  async function getQoutesById() {
    let res = await axios.get(`http://localhost:5000/quote/${params.id}`);
    if (res.status >= 404) {
      setNotFound(true);
    } else if (res.status >= 200 && res.status <= 404) {
      setLoading(false);
    }
    setLoading(false);
    console.log(res);
    setMyqoutes(res.data.data);
  }
  useEffect(() => {
    getQoutesById();
  }, [params]);
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
        <Loaders />
      ) : (
        <>
          <div className="blockquote-wrapper">
            <div className="blockquote">
              <h1>{myQoutes.quote}</h1>
              <h4>&mdash;{myQoutes.user}</h4>
            </div>
          </div>
        </>
      )}
    </Fragment>
  );
}

export default ShowQuotes;
