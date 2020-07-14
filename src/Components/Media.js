import React from 'react';
import Video from './Video';
import Image from './Image.js';

function Media(props) {
    if (props.type === 'video' ){
        return <Video url={props.url} title={props.title} />
    } else {
        return <Image hdurl={props.hdurl} title={props.title} />
    }
}

export default Media;