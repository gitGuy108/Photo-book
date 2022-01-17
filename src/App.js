import React, { useState } from "react";
import Image from "./components/Image"

function App() {

  const [viewPage, setViewPage] = useState('');

  function imageClick(event) {
    setViewPage(event.target.src);
  }

  if (viewPage === "") {
    return (
    <div className="App">
      <div className="navbar">PhotoBook</div>
      <div className="canvas container">
        <Image uponClick={imageClick} src="https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?cs=srgb&dl=pexels-fauxels-3183132.jpg&fm=jpg"/>
        <Image uponClick={imageClick} src="https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?cs=srgb&dl=pexels-maxime-francis-2246476.jpg&fm=jpg"/>
        <Image uponClick={imageClick} src="https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?cs=srgb&dl=pexels-simon-berger-1323550.jpg&fm=jpg"/>
        <Image uponClick={imageClick} src="https://images.pexels.com/photos/3293148/pexels-photo-3293148.jpeg?cs=srgb&dl=pexels-asad-photo-maldives-3293148.jpg&fm=jpg"/>
        <Image uponClick={imageClick} src="https://images.pexels.com/photos/2318554/pexels-photo-2318554.jpeg?cs=srgb&dl=pexels-skinny-alien-2318554.jpg&fm=jpg"/>
        <Image uponClick={imageClick} src="https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?cs=srgb&dl=pexels-francesco-ungaro-2325446.jpg&fm=jpg"/>
      </div>
    </div>
    )
  } else {
    return (
      <div className="App">
        <div className="navbar">PhotoBook</div>
        <div className="imageEdit">
          <div className="current image-box"><img className="edit-img" src={viewPage}/></div>
          {/* <div className="toolbox">
            <div className="tool"></div>
          </div> */}
          <h2 className="image-box">Rotate</h2>
          <button className="btn-lg" onClick={() => document.querySelector(".current").style.transform = "rotate(0deg)"}>0 (original)</button>
          <button className="btn-lg" onClick={() => document.querySelector(".current").style.transform = "rotate(90deg)"}>90</button>
          <button className="btn-lg" onClick={() => document.querySelector(".current").style.transform = "rotate(180deg)"}>180</button>
          <button className="btn-lg" onClick={() => document.querySelector(".current").style.transform = "rotate(270deg)"}>270</button>
          <div>
          <button onClick={() => setViewPage('')}>Back to Canvas</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
