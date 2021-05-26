import { useState, useEffect } from 'react';
import ImageContainer from './components/ImageContainer';
import ImageSelector from './components/ImageSelector';
import wildflower from './images/wildflower';
import indian from './images/indian';
import almond from './images/almondBlossom';

function App() {
  const[index, setIndex] = useState("wildflower");

  const handleSelection = (i) => {
    setIndex(i);
  }

  let width;
  let height;

  switch(index){
    case "wildflower":
      width = wildflower.width;
      height = wildflower.height;
      break;
    case "indian":
      width = indian.width;
      height = indian.height;
      break;
    case "almond": 
      width = almond.width;
      height = almond.height;
      break;

    default: width = wildflower.width;
  }

  return (
    <div style={
      {
        width: "100%", 
        height: "100vh", 
        display: "flex", 
        flexDirection: "column",
        justifyContent: "center", 
        alignItems: "center", 
        backgroundColor: "rgb(47 59 82)", 
        overflow: "hidden"
      }
    }>
      <div 
        id="img-gallery"
        style={{ 
          boxShadow: "2px 2px 10px #0a080c, -3px -3px 10px rgb(47 59 82)", 
          borderRadius: 25, 
          overflow: "hidden",
          width: width,
          height: height
        }}
      >
        <ImageContainer 
          image={index}
        />
      </div>
        <ImageSelector 
          handleSelection={handleSelection}
        />
    </div>
  );
}

export default App;
