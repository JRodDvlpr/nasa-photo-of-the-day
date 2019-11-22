import React from "react";
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';

const SpaceH = styled.div` 
  max-width: 100%;
  height: 100px;
  padding-top: 20px;
  text-align: center;
  font-family: 'Planet Kosmos';
  font-size: 2.2rem;
  background: #232526;  
  background: -webkit-linear-gradient(to top, #414345, #232526);  /
  background: linear-gradient(to top, #414345, #232526); 

`;


const HeadCard = () => {

    return (
        <SpaceH>Nasa Photo Of The Day</SpaceH>
    )

};
export default HeadCard;