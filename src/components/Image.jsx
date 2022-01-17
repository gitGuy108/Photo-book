import React from "react";

function Image(props) {
    return <div className="image-box">
        <button className="button btn" onClick={props.uponClick}>
        <img className="canvas-img" src={props.src} alt="image" />
        </button>
        </div>
}

export default Image;