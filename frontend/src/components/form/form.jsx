import Form from "react-bootstrap/Form";
import React from "react";
import "./from.css";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
function TextControlsExample() {
  const [user, setUser] = useState({});
  const [nama, setNama] = useState("");
  const [quotes, setQuotes] = useState("");

  let dataUser = {
    id: 1,
    user: "",
    quote: "",
  };
  function addQuotes(e) {
    e.preventDefault();
    let date = new Date().getTime();
    let newData = { ...dataUser };
    newData["id"] = date;
    newData.user = nama;
    newData.quote = quotes;
    setUser(newData);
    setNama("");
    setQuotes("");
  }

  useEffect(() => {
    document.title = "Quotes App";
    if (user.user && user.qoute) {
      axios.post("http://localhost:5000/quote", user).then((v) => {
        console.log(v);
      });
    }
  }, [user]);
  return (
    <Form className="form-user">
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>User</Form.Label>
        <Form.Control
          type="text"
          placeholder="your name"
          className="inputName"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Your Qoute's</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="I am ..."
          className="inputName"
          value={quotes}
          onChange={(e) => setQuotes(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={addQuotes}>
        Create Quote's
      </Button>
    </Form>
  );
}

export default TextControlsExample;
