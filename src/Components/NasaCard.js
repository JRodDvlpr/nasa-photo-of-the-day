// Nasa Card 
import React from "react";
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';



// Container

const Container = styled.div`
  height: 100%;
  width: 80%;
  margin-left: 7%;
  border: 1px solid purple;
  border-radius: 20px;
  padding: 0 20px;
  background: #000000;
  color: #333;
  
`;

// Image 

const NasaImg = styled.img`
  height: 550px;
  margin-left: 174px;
  align-items: center;
  width: 70%;
  border-radius: 30px;
  padding: 10px;
  
`;
// //  TEXT STYLE
const Title = styled.h3`
  font-size: 1.5rem;
  text-align: center;
`;

const NasaText = styled.p`
  padding: 0 50px;
  line-height: 1.4;
  text-align: center;
`;


// "HTML stlye" format that will append the data from the API
const NasaCard = ({hdurl, title, text, date, copyright}) => {
 
  return (
    <Container>
      <NasaImg id="NasImg" src={hdurl} alt="Apod" />
      <Title>{title}</Title>
      <NasaText>{text}</NasaText>
      <NasaText>Copyright: {copyright}</NasaText>
      <NasaText>{date}</NasaText>
    </Container>
      
    
      
      
  );
}




export default NasaCard;


