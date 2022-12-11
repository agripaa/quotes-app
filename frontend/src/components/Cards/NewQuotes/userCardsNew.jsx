import Card from "react-bootstrap/Card";
import React, { Fragment } from "react";
import "./userCards.scss";
import axios from "axios";
import empty from "../img/empty2.png";

import Container from "react-bootstrap/esm/Container";
import { useEffect } from "react";
import { useState } from "react";
import Loaders from "../../loaders/loader";
function NewQuotes() {
  const [newQuotes, setNewQuote] = useState({});
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  async function getApi() {
    let res = await axios.get("http://localhost:5000/quote");
    if (res.status >= 404) {
      setNotFound(true);
    } else if (res.status >= 200 && res.status <= 404) {
      setLoading(false);
    }
    if (res.data.result.length > 1) {
      let number = ~~(Math.random() * res.data.length);
      return getQoutes(res.data.result[number].id);
    } else {
      return getQoutes(res.data.result[0].id);
    }
  }
  async function getQoutes(number) {
    let res = await axios.get(`http://localhost:5000/quote/${number}`);
    console.log(res);
    return setNewQuote(res.data.data);
  }
  useEffect(() => {
    getApi();
  }, []);
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
        <Container key={newQuotes.id}>
          <Card className="mt-3 cardds">
            <Card.Body>
              <div className="quote--container">
                <p className="quote">{newQuotes.quote}</p>
                <p className="quote--author">&ndash;{newQuotes.user} </p>
              </div>
            </Card.Body>
          </Card>
        </Container>
      )}
    </Fragment>
  );
}

export default NewQuotes;
