import React from "react";
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../img/Nasa.png"

const SpaceH = styled.div` 
  max-width: 100%;
  height: 160px;
  padding-top: 20px;
  text-align: center;
  background: #232526;  
  background: -webkit-linear-gradient(to top, #414345, #232526);  /
  background: linear-gradient(to top, #414345, #232526); 

`;

const SubTitle = styled.h2`
  font-family: 'Oswald';
  font-size: 2.2rem;
`;

const LogoImg = styled.img`
  height: 85px;
  width: auto;
`;


const HeadCard = () => {

    return (
      
        <SpaceH>
          <LogoImg src={logo}></LogoImg>
          <SubTitle>Photo of The Day ® </SubTitle>
        </SpaceH>
        
    )

};
export default HeadCard;