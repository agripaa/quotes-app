import Form from "react-bootstrap/Form";
import React from "react";
import "./from.css";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useEffect } from "react";
import { Fragment } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

import axios from "axios";
import NewQuotes from "../Cards/NewQuotes/userCardsNew";
import WithHeaderAndQuoteExample from "../Cards/userCard";
import Slider from "../footerCard/footerCard";
function FormAndQuotes() {
  const [user, setUser] = useState({});
  const [nama, setNama] = useState("");
  const [text, setText] = useState("");
  const [Data, setData] = useState([]);

  const [width, setWidth] = useState(window.innerWidth);
  function handleWidth() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWidth);
  }, [width]);

  function addQuotes(e) {
    e.preventDefault();
    let date = new Date().getTime();
    let newData = {
      id: date,
      quote: text,
      user: nama,
    };
    console.log(newData);
    setUser(newData);
    setNama("");
    setText("");
  }
  async function getNewData() {
    let res = await axios.get("http://localhost:5000/quote");
    setData(res.data.result);
  }
  async function getPostUser() {
    let response = await axios.post("http://localhost:5000/quote", user);
    await getNewData();
    return response;
  }
  useEffect(() => {
    document.title = "Quotes App";
    if (user.user && user.quote) {
      getPostUser();
    }
  }, [user]);
  return (
    <Fragment>
      <Container>
        <Row className="margin">
          {width <= 900 ? (
            <>
              <Col md={{ span: 8, offset: 2 }}>
                <Card className="cards">
                  <Card.Body>
                    <Form className="form-user" onSubmit={addQuotes}>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>User</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="your name"
                          className="inputName"
                          value={nama}
                          onChange={(e) => setNama(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Label>Your Qoute's</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          placeholder="I am ..."
                          className="inputName"
                          value={text}
                          onChange={(e) => setText(e.target.value)}
                        />
                      </Form.Group>
                      <Button variant="primary" type="submit">
                        Create Quote's
                      </Button>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>
            </>
          ) : (
            <>
              <Col md={{ span: 6, offset: 3 }}>
                <Card className="cards">
                  <Card.Body>
                    <Form className="form-user" onSubmit={addQuotes}>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>User</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="your name"
                          className="inputName"
                          value={nama}
                          onChange={(e) => setNama(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Label>Your Qoute's</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          placeholder="I am ..."
                          className="inputName"
                          value={text}
                          onChange={(e) => setText(e.target.value)}
                        />
                      </Form.Group>
                      <Button variant="primary" type="submit">
                        Create Quote's
                      </Button>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>
            </>
          )}
        </Row>
      </Container>
      <Container fluid>
        <h2 className="mt-4 new">New Quote's</h2>
        <hr />
        <Row className="mt-4">
          <Col>
            <NewQuotes />
          </Col>
        </Row>
        <hr />
      </Container>
      <Container fluid>
        <Row className="mt-4">
          <WithHeaderAndQuoteExample newData={Data} />
        </Row>
      </Container>
      <Container fluid>
        <h2 className="mt-4 new">Carousel Quote's</h2>
        <Row>
          <Col>
            <Slider newData={Data} />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default FormAndQuotes;
