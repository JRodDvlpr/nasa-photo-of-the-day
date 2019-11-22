// Nasa Card 
import React from "react";
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Container from 'react-bootstrap/Container';
// import Image from 'react-bootstrap/Image';


//  TEXT STYLE
const InnerConent = styled.section`
  text-align: center;
`;

// const Title
const Image = styled.img`
  max-width: 70%;
  height: 35%;
  margin-left: 70px;
  

`;

// const spacePhoto = styled.div`
//   width: 80%;
//   h

// `;

const innerText = styled.section`
  border: 2px solid #fff;
`;

// "HTML stlye" format that will append the data from the API
const NasaCard = ({hdurl, title, text, date}) => {
 
  return (
    <InnerConent>    
      <Image src={hdurl} />
      <innerText>
        <h4>{date}</h4>
        <h2>{title}</h2>
        <p>{text}</p>
      </innerText>
    </InnerConent>
      
    
      
      
  );
}




export default NasaCard;


