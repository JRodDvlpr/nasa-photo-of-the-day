// Nasa Card List
import React, {useState, useEffect } from "react";
import axios from "axios";
import NasaCard from "./NasaCard";

export default function CardList () {
    const [nasa, setNasa] = useState([]);
 // useEffect(() =>{},[]);
  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=8XudYX3QMcm9qnOwkj3HNR9pkeNd1uQNy1bcxT6j")
    .then(nasa => {
      console.log(nasa);
      setNasa(nasa.data);

    })
    .catch(error => {
      // catch error
       console.log(error);
     });

  },[]);
  console.log(nasa);

  return (
    <div className="space">
    {
      <NasaCard
        date={nasa.date}
        explanation={nasa.explanation}
        hdurl={nasa.hdurl}
        title={nasa.title}
      />
    }
    
  </div>
  );
}

// useEffect(() =>{},[]);