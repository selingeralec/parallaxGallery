import { useState, useEffect } from 'react';
import ImageContainer from './components/ImageContainer';
import ImageSelector from './components/ImageSelector';

function App() {
  const[index, setIndex] = useState(0);

  const handleSelection = (i) => {
    setIndex(i);
    console.log(i);
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
        backgroundColor: "#4c3366", 
        overflow: "hidden"
      }
    }>
      <div style={{width: 800, height: 400, boxShadow: "2px 2px 10px #0a080c, -3px -3px 10px #4c3366", borderRadius: 25, overflow: "hidden"}}>
        <ImageContainer />
      </div>
        <ImageSelector 
          handleSelection={handleSelection}
        />
    </div>
  );
}

export default App;
