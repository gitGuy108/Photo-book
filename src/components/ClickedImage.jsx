import React from "react";

function ClickedImage(props) {
  return (
    <div className="imageEdit">
      <div className="current image-box">
        <img className="edit-img" src={props.locate} />
      </div>
      {/* <div className="toolbox">
              <div className="tool"></div>
            </div> */}
      <h2 className="image-box">Rotate</h2>
      <button
        className="btn-lg"
        onClick={() =>
          (document.querySelector(".current").style.transform = "rotate(0deg)")
        }
      >
        0 (original)
      </button>
      <button
        className="btn-lg"
        onClick={() =>
          (document.querySelector(".current").style.transform = "rotate(90deg)")
        }
      >
        90
      </button>
      <button
        className="btn-lg"
        onClick={() =>
          (document.querySelector(".current").style.transform =
            "rotate(180deg)")
        }
      >
        180
      </button>
      <button
        className="btn-lg"
        onClick={() =>
          (document.querySelector(".current").style.transform =
            "rotate(270deg)")
        }
      >
        270
      </button>
      <div>
        <button onClick={() => props.setViewPage("")}>Back to Canvas</button>
      </div>
    </div>
  );
}

export default ClickedImage;
