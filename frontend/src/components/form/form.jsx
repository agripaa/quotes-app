import React from "react";
import "./from.css";
import { useState } from "react";
import { useEffect } from "react";
import { Fragment } from "react";
import upload from "./img/upload.png";
import anime1 from "./img/anime.png";
import close from "./img/closetab2.png";
import axios from "axios";
import Navbar from "../navbar/navbar";
import { useParams } from "react-router-dom";

function FormAndQuotes() {
  const [user, setUser] = useState({});
  const [nama, setNama] = useState("");
  const [text, setText] = useState("");
  const [typed, setTyped] = useState("");
  const [countId, setCountId] = useState(0);
  const [Update, setUpdate] = useState(false);
  const [userNew, setUserNew] = useState({});
  const params = useParams();
  const [width, setWidth] = useState(window.innerWidth);

  // mengambil data quotes id yang mau di update
  async function getParamsId() {
    let res = await axios.get(`http://localhost:5000/quote/${params.id}`);
    await getDataNew(res.data.data);
  }

  async function getDataNew(data) {
    setNama(data.user);
    setText(data.quote);
    setCountId(data.id);
    setUpdate(true);
  }

  // menambahkan quotes
  async function addQuotes(e) {
    e.preventDefault();
    let date = new Date().getTime();

    if (Update === true) {
      let newData = {
        id: countId,
        quote: text,
        user: nama,
      };
      console.log(newData, Update);
      setUserNew(newData);
    } else {
      let newData = {
        id: date,
        quote: text,
        user: nama,
      };
      console.log(newData);
      setUser(newData);
      setNama("");
      setText("");
    }
  }

  // add axios put

  async function getPostUserNew() {
    await window.location.reload();
    let res = await axios.put(
      `http://localhost:5000/quote/${countId}`,
      userNew
    );
    console.log(res);
    return res;
  }

  // add quotes new
  async function getPostUser() {
    await window.location.reload();
    let response = await axios.post("http://localhost:5000/quote", user);
    return response;
  }
  useEffect(() => {
    document.title = "Quotes App";
    if (params.hasOwnProperty("id")) {
      getParamsId();
    }
    if (user.user && user.quote && Update === false) {
      getPostUser();
    }
  }, [user]);
  // kontrol ukuran width
  function handleWidth() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWidth);
  }, [width]);

  return (
    <Fragment>
      <Navbar />
      <div className="containerForm">
        <div className="judulForm">
          <h2>Making Quotes</h2>
        </div>
        <form className="inputForm" onSubmit={addQuotes}>
          <div className="textAreaForm">
            <textarea
              name=""
              id="area"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
                setTyped(e.target.value);
              }}
            ></textarea>
            {typed !== "" ? (
              <></>
            ) : (
              <>
                <h2>Type Something...</h2>
              </>
            )}
          </div>
          <div className="buttonForm">
            <div className="inputNameForm">
              <input
                type="text"
                className="textInputForm"
                placeholder="Name"
                value={nama}
                onChange={(e) => {
                  setNama(e.target.value);
                }}
              />
            </div>
            <div className="buttonSubmitForm">
              {params.hasOwnProperty("id") ? (
                <>
                  <button className="buttonsubmit">
                    <div className="imageForm">
                      <img src={upload} alt="" />
                    </div>
                    <div className="uploadForm">
                      <p>Simpan</p>{" "}
                    </div>
                  </button>
                  <button className="buttonsubmitCancel">
                    <div className="imageForm">
                      <img src={close} alt="" />
                    </div>
                    <div className="uploadForm">
                      <p>Cancel</p>{" "}
                    </div>
                  </button>
                </>
              ) : (
                <>
                  <button className="buttonsubmit">
                    <div className="imageForm">
                      <img src={upload} alt="" />
                    </div>
                    <div className="uploadForm">
                      <p>Upload</p>{" "}
                    </div>
                  </button>
                </>
              )}
            </div>
          </div>
        </form>
        {width > 620 && (
          <>
            <div className="animeImageForm">
              <img src={anime1} alt="" />
            </div>
          </>
        )}
      </div>
    </Fragment>
  );
}

export default FormAndQuotes;
