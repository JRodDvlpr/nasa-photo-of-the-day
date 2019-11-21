// Nasa Card 

import React from "react";
import styled from "styled-components";


const Container = styled.div`
    max-width: 650px;

`;


const NasaCard = ({hdurl, title, text, date}) => {
  return (
    
    <Container>
        <div>
            <img className="space-img" src={hdurl} alt="spacephoto"/>
        </div>
        <h1 className="nasa-Head">Nasa Photo Of The Day</h1>
        <h2>{title}</h2>
        <p>{text}</p>
        <p>{date}</p>
     
    </Container>
    
  );
};
export default NasaCard;