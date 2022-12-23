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
function WithHeaderAndQuoteExample() {
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
  }

  async function deleteQuote(id) {
    try {
      await axios.delete(`http://localhost:5000/qoute/${id}`);
      await getApi();
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    getApi();
  }, []);
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
  return <Fragment></Fragment>;
}
export default WithHeaderAndQuoteExample;
