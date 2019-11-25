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
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 20px;
  padding: 0 20px;
  background: #000000;
  background-color: #000000;
  color: #333;
  
`;

// Image 

const NasaImg = styled.img`
  height: 550px;
  padding-left: 100px;
  padding-right: 100px;
  align-items: center;
  padding-top: 30px;
  margin-bottom: 20px;
  border-radius: 20px;
`;
// //  Title STYLE
const Title = styled.h3`
  font-family: 'Abel';
  font-size: 40px;
  text-align: center;
  padding-top: 30px;
  padding-bottom: 30px;
  color: #fff;
  border: 2px solid #fff;
  border-radius: 10px;
  margin-right: 170px;
  margin-left: 170px;
  
  
`;
// Author Style
const NasaAuthor = styled.h4`
  padding: 10px;
  text-align: center;
  font-family: 'Abel';
  color: #fff;
`;
// Date Style
const NasaDate = styled.p`
  padding: auto;
  text-align: center;
  font-family: 'Abel';
  color: #fff;
`;
// Text Style
const NasaText = styled.p`
  margin-left: 100px;
  margin-right: 100px;
  margin-bottom: 40px;
  padding: 50px;
  text-align: center;
  font-family: 'Abel';
  color: #000000;
  border: 1px solid #fff;
  background-color: #fff;
  border-radius: 30px;
  
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


