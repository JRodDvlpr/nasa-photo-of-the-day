// Nasa Card List
import React, {useState, useEffect } from "react";
import axios from "axios";
import NasaCard from "./NasaCard";

export default function CardList () {
    const [nasaData, setNasaData] = useState([]);

  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=8XudYX3QMcm9qnOwkj3HNR9pkeNd1uQNy1bcxT6j")
    .then(nasa => {
      console.log(nasa.data);
      setNasaData(nasa.data);

    })
    .catch(error => {
      // catch error
       console.log(error);
     });

  }, []);
  console.log(nasaData);

  return (
    <div className="dataCard">
    {
      <NasaCard
        date={nasaData.date}
        explanation={nasaData.explanation}
        hdurl={nasaData.hdurl}
        title={nasaData.title}
      />
    }
    
  </div>
  );
}