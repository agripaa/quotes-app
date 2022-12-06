import React, { Fragment, useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ContainerInsideExample from "./components/navbar/navbar";
import BodyOnlyExample from "./components/form/card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import WithHeaderAndQuoteExample from "./components/Cards/userCard";
import NewQuotes from "./components/Cards/NewQuotes/userCardsNew";
import Slider from "./components/footerCard/footerCard";
import "swiper/css/bundle";
import Footer from "./components/Footer/footer";
import axios from "axios";

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  function handleWidth() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    axios.get("http://localhost:5000/quote").then((v) => {
      console.log(v.data.result);
    });
  });
  useEffect(() => {
    window.addEventListener("resize", handleWidth);
  }, [width]);

  return (
    <Fragment>
      <ContainerInsideExample />
      <Container>
        <Row className="margin">
          {width <= 900 ? (
            <>
              <Col md={{ span: 8, offset: 2 }}>
                <BodyOnlyExample />
              </Col>
            </>
          ) : (
            <>
              <Col md={{ span: 6, offset: 3 }}>
                <BodyOnlyExample />
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
          <WithHeaderAndQuoteExample />
        </Row>
      </Container>
      <Container fluid>
        <h2 className="mt-4 new">Carousel Quote's</h2>
        <Row>
          <Col>
            <Slider />
          </Col>
        </Row>
      </Container>
      <Footer />
    </Fragment>
  );
}

/* <ul></ul>
{quotes.map((v) => {
  return (
    <li key={v.id}>
      quote = {v.quote} , user ={v.user}
    </li>
  );
})} */

export default App;
