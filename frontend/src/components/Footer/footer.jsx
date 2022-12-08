import React from "react";
import ContactUS from "./contactUs/contactus";
import "./footer.css";
function Footer() {
  return (
    <footer className="bg-transparant text-center text-lg-start footer">
      <ContactUS />
      <div className="text-center p-3">
        © 2022 Copyright :
        <a className="text-dark link" href="exapmle@yahoo.com">
          {" "}
          BangOns & Journy
        </a>
      </div>
    </footer>
  );
}
export default Footer;
