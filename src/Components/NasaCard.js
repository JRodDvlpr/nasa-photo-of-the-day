// Nasa Card 
import React from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';


// "HTML stlye" format that will append the data from the API
const NasaCard = ({hdurl, title, text, date}) => {
  return (
    
    <div className="space-Container">
      <Card>
        <CardImg src={hdurl} alt="spacePhoto"/>
        <CardBody>
          <CardTitle>{title}</CardTitle>
            <CardSubtitle>{date}</CardSubtitle>
          <CardText>{text}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};
export default NasaCard;