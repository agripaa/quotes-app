import "./userCard.css";
import React, { Fragment } from "react";
import { useState } from "react";
import { useEffect } from "react";
import Edit from "./img/edit.png";
import Dlt from "./img/delete.png";
import view from "./img/view.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loaders from "../loaders/loader";
function HomePage() {
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [show, setShow] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);
  const navigate = useNavigate();
  async function getApi() {
    try {
      let res = await axios.get(`http://localhost:5000/quote`);
      if (res.status >= 200 && res.status <= 404) {
        setLoading(false);
      }
      setLoading(false);
      setdata(res.data.result);
    } catch (error) {
      setNotFound(true);
    }
  }

  async function deleteQuote(id) {
    try {
      await axios.delete(`http://localhost:5000/quote/${id}`);
      getApi();
    } catch (e) {
      console.error(e);
    }
  }
  async function getShow() {
    return setShow(!show);
  }

  async function addMenu(e) {
    let menu = await e.currentTarget.parentElement.parentElement;
    await getShow();
    if (show) {
      if (menu.children[3].className !== "addMenuQuotes active") {
        menu.children[3].className = "addMenuQuotes active";
      } else {
        menu.children[3].className = "addMenuQuotes";
      }
    } else {
      if (menu.children[3].className === "addMenuQuotes active") {
        menu.children[3].className = "addMenuQuotes";
      } else {
        menu.children[3].className = "addMenuQuotes active";
      }
    }
  }
  useEffect(() => {
    document.title = "Quotes App";
    getApi();
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
        {notFound ? (
          <>
            <div className="img-empty">
              <p>lost Connection</p>
            </div>
          </>
        ) : (
          <>
            {loading ? (
              <>
                <Loaders />
              </>
            ) : (
              <>
                {data.length > 0 ? (
                  <>
                    {width > 620 ? (
                      <>
                        <div className="quotesLandingPage">
                          {data.map((res) => {
                            return (
                              <div className="Quotes" key={res.id}>
                                <div className="navigateMenu">
                                  <div
                                    className="menuQuotes"
                                    onClick={addMenu.bind(this)}
                                  >
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                  </div>
                                </div>
                                <div className="textQuotes">
                                  <q>{res.quote}</q>
                                </div>
                                <div className="authorQuotes">
                                  <p>{res.user}</p>
                                </div>
                                <div className={`addMenuQuotes`}>
                                  <div
                                    className="editQuotes"
                                    onClick={() => {
                                      navigate(`/update/${res.id}`);
                                    }}
                                  >
                                    <div className="texteditQuotes">
                                      <p>Edit</p>
                                    </div>
                                    <div className="imageEditQuotes">
                                      <img src={Edit} alt="" />
                                    </div>
                                  </div>
                                  <div
                                    className="deleteQuotes"
                                    onClick={deleteQuote.bind(this, res.id)}
                                  >
                                    <div className="textdeleteQuotes">
                                      <p>Delete</p>
                                    </div>
                                    <div className="imageDeleteQuotes">
                                      <img src={Dlt} alt="" />
                                    </div>
                                  </div>
                                  <div
                                    className="viewQuotes"
                                    onClick={() => {
                                      navigate(`/show/${res.id}`);
                                    }}
                                  >
                                    <div className="textviewQuotes">
                                      <p>View</p>
                                    </div>
                                    <div className="imageViewQuotes">
                                      <img src={view} alt="" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
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
                          {data.map((res) => {
                            return (
                              <div className="Quotes" key={res.id}>
                                <div className="navigateMenu">
                                  <div
                                    className="menuQuotes"
                                    onClick={addMenu.bind(this)}
                                  >
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                  </div>
                                </div>
                                <div className="textQuotes">
                                  <q>{res.quote}</q>
                                </div>
                                <div className="authorQuotes">
                                  <p>{res.user}</p>
                                </div>
                                <div className={`addMenuQuotes`}>
                                  <div
                                    className="editQuotes"
                                    onClick={() => {
                                      navigate(`/update/${res.id}`);
                                    }}
                                  >
                                    <div className="texteditQuotes">
                                      <p>Edit</p>
                                    </div>
                                    <div className="imageEditQuotes">
                                      <img src={Edit} alt="" />
                                    </div>
                                  </div>
                                  <div
                                    className="deleteQuotes"
                                    onClick={() => deleteQuote(res.id)}
                                  >
                                    <div className="textdeleteQuotes">
                                      <p>Delete</p>
                                    </div>
                                    <div className="imageDeleteQuotes">
                                      <img src={Dlt} alt="" />
                                    </div>
                                  </div>
                                  <div
                                    className="viewQuotes"
                                    onClick={() => {
                                      navigate(`/show/${res.id}`);
                                    }}
                                  >
                                    <div className="textviewQuotes">
                                      <p>View</p>
                                    </div>
                                    <div className="imageViewQuotes">
                                      <img src={view} alt="" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <>
                    <div className="dataKosong">
                      <p>Data Kosong</p>
                    </div>
                  </>
                )}
              </>
            )}
          </>
        )}
      </div>
    </Fragment>
  );
}
export default HomePage;
