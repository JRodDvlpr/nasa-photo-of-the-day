// Nasa Card 
import React from "react";
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';



// Container

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 80%;
  margin: auto;
  border-radius: 20px;
  padding: 0 20px;
  background: #000000;
  color: #333;
  
`;

// Image 

const NasaImg = styled.img`
  height: 550px;
  padding-left: 100px;
  padding-right: 100px;
  align-items: center;
  border-radius: 30px;
  padding-top: 60px;
  
`;
// //  TEXT STYLE
const Title = styled.h3`
  font-family: Titillium Web;
  font-size: 40px;
  text-align: center;
  padding-top: 30px;
  padding-bottom: 30px;
  color: #fff;
  border: 2px solid #fff;
  border-radius: 10px;
  margin-right: 100px;
  margin-left: 100px;
  
  
`;
// Author Style
const NasaAuthor = styled.h4`
  padding: 10px;
  text-align: center;
  font-family: 'Titillium Web';
  color: #fff;
`;
// Date Style
const NasaDate = styled.p`
  padding: auto;
  text-align: center;
  font-family: 'Raleway';
  color: #fff;
`;
// Paragraph Style
const NasaText = styled.p`
  margin-left: 100px;

  margin-right: 100px;
  padding: 20px;
  text-align: center;
  font-family: 'Roboto';
  color: #000000;
  border: 1px solid #fff;
  background-color: #fff;
  border-radius: 10px;
  
`;


const NasaCard = ({hdurl, title, text, date, copyright}) => {
 
  return (
    <Container>
      <NasaImg id="NasImg" src={hdurl} alt="Apod" />
      <Title>{title}</Title>
      <NasaAuthor>By: {copyright}</NasaAuthor>
      <NasaDate>{date}</NasaDate>
      <NasaText>{text}</NasaText>
  
    </Container>
      
    
      
      
  );
}


export default NasaCard;


