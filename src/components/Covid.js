import React, { useEffect, useState } from "react";
import "./Covid.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import axios from "axios";

function Covid() {
  const [covid, setCovid] = useState([]);

  useEffect(() => {
    const coronaApi = async () => {
      try {
        const res = await axios.get("https://corona-api.com/countries");
        // console.log(res);
        // const resData = res.json();
        console.log(res.data.data[96].latest_data);
        setCovid(res.data.data[96].latest_data);
      } catch (error) {
        console.log(error);
      }
    };
    coronaApi();
  }, []);

  return (
    <>
      <div className="covid">
        <div className="header">
          <h2>
            <FiberManualRecordIcon className="liveIcon" /> LIVE
          </h2>
          <h1>COVID-19 CORONAVIRUS TRACKER (INDIA)</h1>
        </div>

        <div className="cardContainer">
          <div className="card">
            <h2 className="cCase">Confirmed Cases</h2>
            <h1>{covid.confirmed}</h1>
          </div>
          <div className="card">
            <h2 className="rCase">Recovered Cases</h2>
            <h1>{covid.recovered}</h1>
          </div>
          <div className="card">
            <h2 className="dCase">Death Cases</h2>
            <h1>{covid.deaths}</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Covid;
