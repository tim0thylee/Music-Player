import React from "react";
import "./ProgressBar.css";

const progressBar = (props) => {
    return (
        <div className="progress-bar">
            <div className="filler" style={{width: `${props.percentage}%`}}>
            </div>
        </div>
    )
}

export default progressBar;