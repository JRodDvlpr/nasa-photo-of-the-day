// Nasa Card 
import React from "react";



// "HTML stlye" format that will append the data from the API
const NasaCard = ({hdurl, title, text, date}) => {
  return (
  <div className="header">Nasa Photo Of The Day:
    <div className="space-Container">
      <img src={hdurl} alt="spacePhoto"/>
        <div className="innertext">
          <h2>{title}</h2>
            <p>{date}</p>
          <p>{text}</p>
        </div>
    </div>
    </div>
  );
};
export default NasaCard;