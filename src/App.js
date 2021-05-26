import { useState, useEffect } from 'react';
import ImageContainer from './components/ImageContainer';
import ImageSelector from './components/ImageSelector';

function App() {
  const[index, setIndex] = useState("wildflower");

  const handleSelection = (i) => {
    setIndex(i);
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
      <div style={{ boxShadow: "2px 2px 10px #0a080c, -3px -3px 10px rgb(47 59 82)", borderRadius: 25, overflow: "hidden"}}>
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
