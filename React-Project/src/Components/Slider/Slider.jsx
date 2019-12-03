import React from "react";

function Slider(props) {
  const {images, currentIndex, goToNextSlide, goToPrevSlide} = props
  const sliderStyles = {
    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${images[currentIndex]}) 25% 85% / cover`
  }
  return (
    <div className="slider">
      <button className="slider__next" onClick= {goToNextSlide}>
        &#10095;
      </button>
      <button className="slider__prev" onClick= {goToPrevSlide}>
        &#10094;
      </button>
      <ul className="slider__slides" >
        <li style={sliderStyles}>
          {currentIndex === 0 ? "Plaid Me" : ''}
        </li>
      </ul>
    </div>
  );
}

export default Slider