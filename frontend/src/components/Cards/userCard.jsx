import Card from "react-bootstrap/Card";
import "./userCard.css";
import React, { Fragment } from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loaders from "../loaders/loader";
function HomePage() {
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  // async function getApi() {
  //   let res = await axios.get(`http://localhost:5000/quote`);
  //   if (res.status >= 404) {
  //     setNotFound(true);
  //   } else if (res.status >= 200 && res.status <= 404) {
  //     setLoading(false);
  //   }
  //   setLoading(false);
  //   setdata(res.data.result);
  // }

  // async function deleteQuote(id) {
  //   try {
  //     await axios.delete(`http://localhost:5000/qoute/${id}`);
  //     await getApi();
  //   } catch (e) {
  //     console.error(e);
  //   }
  // }

  useEffect(() => {
    // getApi();
  }, []);
  function handleWidth() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWidth);
  }, [width]);

  return (
    <Fragment>
      <div className="containerLandingPage">
        <div className="judulLandingPage">
          <h2>Quote - Thinking About You</h2>
        </div>
        {width > 620 ? (
          <>
            <div className="quotesLandingPage">
              <div className="Quotes">
                <div className="navigateMenu">
                  <div className="menuQuotes">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div className="textQuotes">
                  <q>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Obcaecati repellendus adipisci voluptates inventore
                    exercitationem sit. Molestias vero doloribus, repellat,
                    tempora cumque quas dolor iusto sit quia, velit quod sequi
                    quibusdam?{" "}
                  </q>
                </div>
                <div className="authorQuotes">
                  <p>John</p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="helloLandingPage">
              <h2>Hello!</h2>
            </div>
            <div className="copyrightLandingPage">
              <p>Created by : Agripa Syahroni Ase.Runa</p>
            </div>
            <div className="quotesLandingPage">
              <div className="Quotes">
                <div className="navigateMenu">
                  <div className="menuQuotes">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div className="textQuotes">
                  <q>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Obcaecati repellendus adipisci voluptates inventore
                    exercitationem sit. Molestias vero doloribus,{" "}
                  </q>
                </div>
                <div className="authorQuotes">
                  <p>John</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </Fragment>
  );
}
export default HomePage;
