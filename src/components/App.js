import React, { useState} from "react";
import Canvas from "./Canvas";
import Header from "./Header";
import Footer from "./Footer";
import ClickedImage from "./ClickedImage";

function App() {
  const [viewPage, setViewPage] = useState('');
  // const img_src = ""
  // const navigate = useNavigate();
  // navigate(`/photos/${imageClick}`);

  function imageClick(event) {
    setViewPage(event.target.src)
    const img_src = event.target.src;
    console.log(event.target.src);
    return img_src;
  }

  if (viewPage === "") {
  return (
    <div className="App">
        <Header />
        <Canvas imageClick={imageClick} />
        <Footer />
    </div>
  ); 
  } else {
    return <div className="App">
      <Header />
      <ClickedImage locate={viewPage} setViewPage={setViewPage} />
      <Footer />
      </div>
  }
}

export default App;
