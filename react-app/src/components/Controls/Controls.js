import React from "react";

const controls = (props) => {
    let playpause;

        if(props.playing === false) {
            playpause = <i className="fas fa-play" id="play"></i>
            props.stopTimer();
        } else {
            playpause = <i className="fas fa-pause" id="pause"></i>
            props.startTimer();
        }
    
    return (
        <button className="play-button button-hover-action" onClick={props.handleClick}>{playpause}</button>
    )
}

export default controls;