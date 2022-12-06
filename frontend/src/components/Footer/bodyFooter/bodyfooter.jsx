import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function BodyFooter() {
  return (
    <Fragment>
      <Container fluid>
        <Row>
          <Col>
            <h1 className="sosmed">Tentang Kami</h1>
          </Col>
        </Row>
        <Row>
          <Col xs lg="2">
            Syahroni
          </Col>
          <Col xs lg="2">
            Agripa
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}
export default BodyFooter;
