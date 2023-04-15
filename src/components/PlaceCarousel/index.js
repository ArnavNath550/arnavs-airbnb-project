import React, { useState } from 'react';
import '../PlaceCard/placeCard.css'

const PlaceCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel">
      <img className="place-card-image" src={images[currentIndex]} alt="Carousel" />
      {/* <button onClick={handlePrev} className="carousel-button carousel-button-prev borderless elevated-btn-box-shadow">
        <svg xmlns="http://www.w3.org/2000/svg" className="carousel-button-icon" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M328 112L184 256l144 144"/></svg>
      </button>
      <button onClick={handleNext} className="carousel-button carousel-button-next borderless elevated-btn-box-shadow">
        <svg xmlns="http://www.w3.org/2000/svg" className="carousel-button-icon" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M184 112l144 144-144 144"/></svg>
      </button> */}
    </div>
  );
};

export default PlaceCarousel;