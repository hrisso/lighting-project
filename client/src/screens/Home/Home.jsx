import "./Home.css"; 
import Layout from "../../components/shared/Layout/Layout"; 
import { SliderData } from "./SliderData";
import { useState } from "react"; 
import { FaArrowAltCircleRight,FaArrowAltCircleLeft } from "react-icons/fa" 

const Home = ({slides}) => { 
  const [current, setCurrent] = useState(0); 
  const length = slides.length  

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }; 
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  };
  
  
  return (
    <div>
      <Layout>
        <div className="slider">
          <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
          <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
          {SliderData.map((slide, index) => {
            return (
              <div
                className={index === current ? "slide active" : "slide"}
                key={index}
              >
                {index === current && (
                  <img src={slide.image} alt="travel image" className="image" />
                )}
              </div>
            );
          })}
        </div>
        <h1 className="heading-1">Ways to Feature Lighting Solutions</h1>
        <div className="solutions-block">
          <div className="column">
            <div className="heading">
              <img
                className="icon"
                alt="icon"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.flaticon.com%2Ficons%2Fpng%2F512%2F4205%2F4205363.png&f=1&nofb=1"
              />
              <h2>Clear an area around your light</h2>
            </div>
            <p>
              Having a clean space will help the features of the light pop in
              your decorating scheme. Keeping the area clear is also safer!
              Wires can get messy and be dangerous even if they are connected
              correctly. Have space around your light.
            </p>
          </div>
          <div className="column"> 
            <div className="heading">
            <img
                className="icon"
                alt="icon"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.flaticon.com%2Ficons%2Fpng%2F512%2F4205%2F4205363.png&f=1&nofb=1"
              />
              <h2>Coordinate colors</h2>
            </div>
            <p>
              Coordinate the colors of your light to complement the surrounding
              area or vice versa. You can either choose the light to match the
              decor or choose the lighting solutions first and fill in with
              furniture. Coordinating the color scheme will help your light
              ‘pop’.{" "}
            </p>
          </div>
          <div className="column"> 
            <div className="heading">
              <img
                  className="icon"
                  alt="icon"
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.flaticon.com%2Ficons%2Fpng%2F512%2F4205%2F4205363.png&f=1&nofb=1"
                />
              <h2>Choose the right size</h2>
            </div>
            <p>
              Sizing your light is important. Too large or too small and the
              light looks ridiculous. Remember the rule of threes or use the
              golden ratio to measure and buy a correctly sized light.
            </p>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Home;


      
    