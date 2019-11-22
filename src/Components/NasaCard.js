// Nasa Card 
import React from "react";
// import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

// const Jumbotron = styled.div` 
//   background-color: #000000;
// `;

// "HTML stlye" format that will append the data from the API
const NasaCard = ({hdurl, title, text, date}) => {

 
  return (
    
    <Container className="space-Container">
      <div className="header">
        <h1>Nasa Photo Of The Day</h1>
      </div>
      <div>
        <img src={hdurl} alt="spacePhoto"/>
      </div>
      <div className="innertext">
        <h2>{title}</h2>
        <p>{date}</p>
        <p>{text}</p>
      </div>
    </Container>
      
  );
}


export default NasaCard;


