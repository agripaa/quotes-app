import React, { Fragment } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ContainerInsideExample from "./components/navbar/navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "swiper/css/bundle";
import Footer from "./components/Footer/footer";
import FormAndQuotes from "./components/form/form";
import NewQuotes from "./components/Cards/NewQuotes/userCardsNew";
import WithHeaderAndQuoteExample from "./components/Cards/userCard";
import Slider from "./components/footerCard/footerCard";

function App() {
  return (
    <Fragment>
      <ContainerInsideExample />
      <FormAndQuotes />
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

export default App;
