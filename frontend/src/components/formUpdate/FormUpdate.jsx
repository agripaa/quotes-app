import React from "react";
import "./formUpdate.css";
import { useState } from "react";
import { useEffect } from "react";
import { Fragment } from "react";
import upload from "./img/upload.png";
import anime1 from "./img/anime.png";
import close from "./img/closetab2.png";
import axios from "axios";
import Navbar from "../navbar/navbar";
import { useNavigate, useParams } from "react-router-dom";

function FormUpdates() {
  const [user, setUser] = useState({});
  const [nama, setNama] = useState("");
  const [text, setText] = useState("");
  const [typed, setTyped] = useState("");

  const params = useParams();
  const navigate = useNavigate();

  // mengambil data quotes id yang mau di update
  async function getParamsId() {
    try {
      let res = await axios.get(`http://localhost:5000/quote/${params.id}`);
      setNama(res.data.data.user);
      setText(res.data.data.quote);
    } catch (error) {
      console.log(error);
    }
  }

  // menambahkan quotes
  async function addQuotes(e) {
    e.preventDefault();
    let newData = {
      id: params.id,
      quote: text,
      user: nama,
    };
    setUser(newData);
    setNama("");
    setText("");
  }

  // add axios put

  async function getPostUserNew() {
    try {
      await axios.patch(`http://localhost:5000/quote/${params.id}`, user);
      navigate("/");
    } catch (error) {
      console.log(error.msg);
    }
  }

  async function CancelUpdate() {
    setNama("");
    setText("");
    navigate("/");
  }

  useEffect(() => {
    getParamsId();
    if (user.user && user.quote) {
      getPostUserNew();
    }
  }, [user]);

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
              <button className="buttonsubmit">
                <div className="imageForm">
                  <img src={upload} alt="" />
                </div>
                <div className="uploadForm">
                  <p>Simpan</p>{" "}
                </div>
              </button>
              <button className="buttonsubmitCancel" onClick={CancelUpdate}>
                <div className="imageForm">
                  <img src={close} alt="" />
                </div>
                <div className="uploadForm">
                  <p>Cancel</p>{" "}
                </div>
              </button>
            </div>
          </div>
        </form>
        <div className="animeImageForm">
          <img src={anime1} alt="" />
        </div>
      </div>
    </Fragment>
  );
}

export default FormUpdates;
