// Nasa Card 
import React from "react";
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Figure from 'react-bootstrap/Figure'

//  TEXT STYLE
const InnerText = styled.div`
  border: 2px solid #fff;
  text-align: center;
`;

// const Title


// "HTML stlye" format that will append the data from the API
const NasaCard = ({hdurl, title, text, date}) => {

 
  return (

    <Container className="space-Container">
      <Figure>
      <Image
      width={'100%'}
      height={800}
      alt="171x180"
      src={hdurl} />
        <InnerText>
        <h4>{date}</h4>
        <h2>{title}</h2>
        <p>{text}</p>
        </InnerText>
        
      </Figure>
    </Container>
      
      
  );
}




export default NasaCard;


