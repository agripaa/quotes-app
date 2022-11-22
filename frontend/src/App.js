import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    getQuotes();
  },[])  

  async function getQuotes(){
    const res = await axios.get('http://localhost:5000/quote');
    setQuote(res.data.result);
  }

  console.log({datas: quote})

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
