import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
// import Nav from "react-bootstrap/Nav";

function ContainerInsideExample() {
  return (
    <Navbar bg="tranparant">
      <Container fluid>
        <Navbar.Brand href="#">Qoutes App</Navbar.Brand>
        {/* <Nav.Link>My Post</Nav.Link> */}
      </Container>
    </Navbar>
  );
}

export default ContainerInsideExample;
