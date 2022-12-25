import React, { Fragment } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar/navbar";
import HomePage from "./components/Cards/userCard";

function App() {
  return (
    <Fragment>
      <Navbar />
      <HomePage />
    </Fragment>
  );
}

export default App;
