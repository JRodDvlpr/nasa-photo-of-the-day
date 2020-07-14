import React from "react";
import logo from "../img/Nasa.png"






const HeadCard = () => {

    return (
      
        <div className="SpaceH">
          <img className="logoImg" src={logo} alt="nasaLogo"></img>
          <h2>Photo of The Day ® </h2>
        </div>
        
    )

};
export default HeadCard;