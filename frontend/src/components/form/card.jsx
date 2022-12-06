import React from "react";
import "./from.css";
import Card from "react-bootstrap/Card";
import TextControlsExample from "./form";
function BodyOnlyExample() {
  return (
    <Card className="cards">
      <Card.Body>
        <TextControlsExample />
      </Card.Body>
    </Card>
  );
}

export default BodyOnlyExample;
