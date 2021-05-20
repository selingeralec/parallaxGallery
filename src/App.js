import imagePaths from './images/wildflower';
import { useEffect } from 'react';

function App() {

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

  return (
    <section style={{
      position: "relative",
      width: "100%",
      height: "100vh",
      overflow: "hidden",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>

          {imagePaths.map((item, i) => (
          <img 
              src={process.env.PUBLIC_URL + item.layer} alt="wildflower man" 
              style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
              }}
              className="layer"
              data-speed={item.speed}
          />
      ))}
    </section>
  );
}

export default App;
