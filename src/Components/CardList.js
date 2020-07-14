// Nasa Card List
import React, {useState, useEffect } from "react";
import axios from "axios";
import NasaCard from "./NasaCard";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Media from './Media.js'
import {Spinner} from 'reactstrap'


export default function CardList () {
  const [nasaData, setNasaData] = useState();
  const [datePicked, setDatePicked] = useState(new Date());

 // useEffect(() =>{},[]);
  useEffect(() => {
    let dateString = new Date(
      datePicked.getTime() - (datePicked.getTimezoneOffset() * 60000)
    )
      .toISOString()
      .split('T')[0];
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=8XudYX3QMcm9qnOwkj3HNR9pkeNd1uQNy1bcxT6j&date=${dateString}`)
    .then(response => {
      console.log(response);
      setNasaData(response.data);

    })
    .catch(error => {
      // catch error
       console.log("I am not sure what happened but hey, it happened.");
    });


  },[datePicked]);

  function setDate (date) {
    setDatePicked(date);
  }

  if (!nasaData) return (
    <div className="spin-Container">
      <Spinner color="primary" className="spinn" />
    </div>
  )

  // useEffect(() =>{},[]);
  console.log(nasaData);

  // creating classes for the data ill be using
  return (

    <div className="space">
      
      <div>
      <Media type={nasaData.media_type} url={nasaData.url} hdurl={nasaData.hdurl} />
      </div>
      <div className="date-container">
        <h3>Select Date: </h3>
      <DatePicker selected={datePicked} onChange={date => setDate(date)} />
      </div>
      <div>
      <NasaCard
        date={nasaData.date}
        text={nasaData.explanation}
        title={nasaData.title}
        copyright={nasaData.copyright}
        
      />
      </div>
  </div>
  );
}

// useEffect(() =>{},[]);


