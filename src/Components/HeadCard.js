import React from "react";
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';

const SpaceH = styled.div` 
  max-width: 100%;
  height: 160px;
  padding-top: 20px;
  text-align: center;
  background: #232526;  
  background: -webkit-linear-gradient(to top, #414345, #232526);  /
  background: linear-gradient(to top, #414345, #232526); 

`;

const HeadTitle = styled.h1`
  font-family: 'Planet Kosmos';
  font-size: 4.2rem;
`;

const SubTitle = styled.h2`
  font-family: 'Abel';
  font-size: 2.2rem;
`;


const HeadCard = () => {

    return (
      
        <SpaceH>
          <HeadTitle>Nasa</HeadTitle>
          <SubTitle>Photo Of The Day</SubTitle>
        </SpaceH>
        
    )

};
export default HeadCard;