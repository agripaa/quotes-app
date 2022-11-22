import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
function App() {
  const [quotes, setQuote] = useState([]);
  useEffect(() => {
    GetQuotes();
  }, []);
  async function GetQuotes() {
    let res = await axios.get("http://localhost:5000/quote");
    setQuote(res.data.result);
  }
  console.log(quotes);
  return <div className="App"></div>;
}

export default App;
