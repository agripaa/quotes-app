import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ShowQuotes from "./components/ShowQuotes/showQoutes";
import FormAndQuotes from "./components/form/form";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/create" element={<FormAndQuotes />} />
      <Route path="/update/:id" element={<FormAndQuotes />} />
      <Route path="show/:id" element={<ShowQuotes />} />
    </Routes>
  </BrowserRouter>
);
