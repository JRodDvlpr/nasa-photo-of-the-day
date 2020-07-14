import React from 'react'


function Image(props) {

  return (
    <div>
      <img className="image" src={props.hdurl} alt={props.title} ></img>
    </div>
  )
}

export default Image;