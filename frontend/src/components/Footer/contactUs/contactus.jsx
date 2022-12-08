import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ContactUS() {
  return (
    <Fragment>
      <Container>
        <Row className="mt-4">
          <h2>Contact Us</h2>{" "}
        </Row>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <form>
              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="form4Example1"
                  className="form-control inputName"
                  placeholder="Name"
                />
              </div>

              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="form4Example2"
                  className="form-control inputName"
                  placeholder="Email Address"
                />
              </div>

              <div className="form-outline mb-4">
                <textarea
                  className="form-control inputName"
                  id="form4Example3"
                  rows="4"
                  placeholder="Massage..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-block mb-4">
                Send
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}
export default ContactUS;
