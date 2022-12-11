import React, { Fragment } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ContainerInsideExample from "./components/navbar/navbar";

import "swiper/css/bundle";
import Footer from "./components/Footer/footer";
import FormAndQuotes from "./components/form/form";
function App() {
  return (
    <Fragment>
      <ContainerInsideExample />
      <FormAndQuotes />

      <Footer />
    </Fragment>
  );
}

export default App;
