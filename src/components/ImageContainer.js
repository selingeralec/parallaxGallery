import wildflower from '../images/wildflower';
import indian from '../images/indian';
import almond from '../images/almondBlossom';
import React, { useEffect } from 'react';

function ImageContainer({ image }) {

  useEffect(() => {
      window.addEventListener("mousemove", parallax);

      function parallax (e) {
          document.querySelectorAll(".layer").forEach((layer) => {
              const speed = layer.getAttribute("data-speed");
              const x = (window.innerWidth - e.pageX*speed)/100;
              const y = (window.innerHeight - e.pageY*speed)/100;
            
              layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
          });
      }
  }, []);

  let images; 
  
  switch(image){
    case "wildflower":
      images = wildflower;
      break;
    case "indian":
      images = indian;
      break;
    case "almond": 
      images = almond;
      break;

    default: images = wildflower;
  }


  return (
    <section style={{
      position: "relative",
      width: "100%",
      height: "100%",
      overflow: "hidden",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>

          {images.map((item, i) => (
          <img 
              src={process.env.PUBLIC_URL + item.layer} alt="wildflower man" 
              style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  objectFit: "contain",
                  width: "100%"
              }}
              className="layer"
              data-speed={item.speed}
          />
      ))}
    </section>
  );
}

export default ImageContainer;
