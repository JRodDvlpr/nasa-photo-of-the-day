// Nasa Card 
import React from "react";



// "HTML stlye" format that will append the data from the API
const NasaCard = ({hdurl, title, text, date}) => {
  return (
  <section className="main">
    <div className="header"><h1>Nasa Photo Of The Day</h1></div>
    <div className="space-Container">
      <div className="spaceCard">
      <img src={hdurl} alt="spacePhoto"/>
        <div className="innertext">
          <h2>{title}</h2>
          <p>{date}</p>
          <p>{text}</p>
        </div>
        </div>
    </div>
  </section>
  );
};
export default NasaCard;