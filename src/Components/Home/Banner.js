import React, { useState, useEffect } from 'react';
import './Banner.css';
import slide1 from './slide1.png';
import slide2 from './slide2.png';
import slide3 from './slide3.png';
import { useTheme } from '@mui/material/styles';

const Banner = () => {
  const slides = [slide1, slide2, slide3];
  const CollectionSize = slides.length;
  const theme = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 2000); // Change slide every 2 seconds

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  // Function to go to the next picture
  const goToNextPicture = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length + 1);
  };

  return (
    <div className="banner">
     
      <div className="slider-container">
        <img
          src={slides[currentSlide]}
          className="slider-image"
          alt={`Slide ${currentSlide + 1}`}
        />
      </div>

      <div className="banner-content">
        <h1>Develop your Enterprise With Internet Of Things</h1>
        <p>We have developed top-notch IOT devices and assisted numerous organizations in achieving economic success.</p>
        <a href="/SendAMsg">
        <button className="contact-btn">Contact Us</button></a>
      </div>
    </div>
  );
};

export default Banner;
