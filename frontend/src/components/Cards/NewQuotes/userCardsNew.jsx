import Card from "react-bootstrap/Card";
import React, { Fragment } from "react";
import "./userCards.scss";
import axios from "axios";
import Container from "react-bootstrap/esm/Container";
import { useEffect } from "react";
import { useState } from "react";
function NewQuotes() {
  const [newQuotes, setNewQuote] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let getId = 0;
    let id = 0;
    function hitData(e) {
      axios.get(`http://localhost:5000/quote/${e}`).then((v) => {
        if (v.status !== 200) {
          setLoading(false);
        } else {
          setLoading(false);
          setNewQuote(v.data.result);
        }
      });
    }

    const getCount = async () => {
      let res = await axios.get(`http://localhost:5000/quote`);
      getId = ~~(Math.random() * res.data.length);
      id = res.data[getId].id;

      hitData(id);
    };
    getCount();
  }, []);

  return (
    <Fragment>
      {loading ? (
        <i>loading data</i>
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
