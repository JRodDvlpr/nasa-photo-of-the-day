// Nasa Card 
import React from "react";
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Figure from 'react-bootstrap/Figure'

// HEADER
const SpaceH = styled.div` 
  max-width: 100%;
  text-align: center;
  font-family: 'Planet Kosmos';
  background: #232526;  
  background: -webkit-linear-gradient(to top, #414345, #232526);  /
  background: linear-gradient(to top, #414345, #232526); 

`;

const InnerText = styled.div`
  border: 2px solid #fff;
  text-align: center;
`;

// const Title


// "HTML stlye" format that will append the data from the API
const NasaCard = ({hdurl, title, text, date}) => {

 
  return (
    
    // <Container className="space-Container">
    //   <SpaceH>
    //     <h1>Nasa Photo Of The Day</h1>
    //   </SpaceH>
    //   <Image src={hdurl} alt="spacePhoto" fluid/>
    //   <InnerText>
    //     <h2>{title}</h2>
    //     <p>{date}</p>
    //     <p>{text}</p>
    //   </InnerText >
    // </Container>

    <Container className="space-Container">
      <SpaceH>
       <h1>Nasa Photo Of The Day</h1>
      </SpaceH>
      <Figure>
      <Image
      width={'100%'}
      height={800}
      alt="171x180"
      src={hdurl} />
        <Figure.Caption>
        <InnerText>
        <h4>{date}</h4>
        <h2>{title}</h2>
        <p>{text}</p>
        </InnerText>
        </Figure.Caption>
      </Figure>
    </Container>
      

      
  );
}




export default NasaCard;


