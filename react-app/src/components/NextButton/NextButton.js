import React from "react";
import "./NextButton.css";

const nextButton = (props) => {
    return (
        <div className="next-button">
            <button>{props.icon}</button>
        </div>
    )
}

export default nextButton;