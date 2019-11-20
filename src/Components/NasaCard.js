// Nasa Card 

import React from "react";


const NasaCard = props => {
  return (
    <div>
        <div className="nasa-Container">
        <img src={props.hdurl} alt="Space-img" />
        <h2>className="nasa-Head">Nasa Photo Of The Day: {props.title}</h2>
      <p>{props.explanation}</p>
      <p>Anything: {props.date}</p>
     
    </div>
    </div>
  );
};
export default NasaCard;