import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./navbar.css";
function Navbar() {
  const [width, setWidth] = useState(window.innerWidth);
  function handleWidth() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWidth);
  }, [width]);
  return (
    <Fragment>
      {width > 620 ? (
        <>
          <div className="containerNavbar">
            <div className="hello">
              <h2>Hello!</h2>
            </div>
            <div className="menu">
              <Link to={"/"}>
                <div className="home">
                  <h2>Home</h2>
                </div>
              </Link>
              <Link to={"/create"}>
                <div className="upload">
                  <h2>Upload</h2>
                </div>
              </Link>
            </div>
            <div className="copyright">
              <p>Created by</p>
              <p>Agripa Syahroni</p>
              <p>Ase.Runa</p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="containerNavbar">
            <div className="menu">
              <Link to={"/"}>
                <div className="home">
                  <h2>Home</h2>
                </div>
              </Link>
              <Link to={"/create"}>
                <div className="upload">
                  <h2>Upload</h2>
                </div>
              </Link>
            </div>
          </div>
        </>
      )}
    </Fragment>
  );
}

export default Navbar;
