import React from 'react'


function Video(props) {

  return (
    <div>
    <iframe className="video" src={props.url}
      frameBorder='0'
      allow='autoplay; encrypted-media'
      allowFullScreen
      title={props.title}
      
    />
    </div>
  )
}

export default Video;