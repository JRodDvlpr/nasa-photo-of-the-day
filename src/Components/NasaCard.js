// Nasa Card 
import React from "react";



const NasaCard = ({ title, text, date, copyright}) => {
 
  return (
    <div className='nasaCardContainer'>
      <div className="nasaTitle">
      <p>{title}</p>
      </div>
      <div className='nasaAuthor'>
      <p>By: {copyright}</p>
      </div>
      <div className="nasaDate">
      <p>{date}</p>
      </div>
      <div className="nasaText">
      <p>{text}</p>
      </div>
      <div>
      <p>Page designed by Jesus Rodriguez 2019 ©</p>
      </div>
  
    </div>
      
    
      
      
  );
}


export default NasaCard;


