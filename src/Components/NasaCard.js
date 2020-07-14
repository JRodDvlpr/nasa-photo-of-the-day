// Nasa Card 
import React from "react";


// breakpoints

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '500px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}


// Container




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


