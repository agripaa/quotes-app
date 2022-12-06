import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./showQoutes.css";
import "bootstrap/dist/css/bootstrap.min.css";

function ShowQuotes() {
  const [myQoutes, setMyqoutes] = useState({});
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5000/quote/${params.id}`).then((v) => {
      if (v.status !== 200) {
        setLoading(true);
      }
      setLoading(false);
      setMyqoutes(v.data.result);
    });
  }, [params]);
  return (
    <Fragment>
      {loading ? (
        <i>loading data</i>
      ) : (
        <>
          <div className="blockquote-wrapper">
            <div className="blockquote">
              <h1>{myQoutes.quote}</h1>
              <h4>&mdash;{myQoutes.user}</h4>
            </div>
          </div>
        </>
      )}
    </Fragment>
  );
}

export default ShowQuotes;
