import { Container, Row, Colff } from "react-bootstrap";
// import bgVideo from "./bgVideo.mp4";
import "animate.css";
import "./Offer.css";
import servicesHome from "./servicesHome.png"
import { Work } from "./Work"
import React , { useState , useEffect}from 'react';

import { IoHardwareChipOutline } from "react-icons/io5";
import { RiComputerLine, RiRobot2Line } from "react-icons/ri";
import { FaNetworkWired } from "react-icons/fa6";
import { MdOutlineSecurity } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";



export const Offer = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const plusSlides = (n) => {
    showSlides(slideIndex + n);
  };

  const currentSlide = (n) => {
    showSlides(n);
  };

  const showSlides = (n) => {
    let newIndex = n;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
      newIndex = 1; // Reset to first slide if past the last slide
    }
    if (n < 1) {
      newIndex = slides.length; // Go to last slide if past the first slide
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[newIndex - 1].style.display = "block";
    dots[newIndex - 1].className += " active";
    setSlideIndex(newIndex);
  };

  useEffect(() => {
    // Show the first slide when component mounts
    showSlides(1);
  }, []);

return (
  <div>
    <div id="offer">
      <h1 className="work-h">What we offer you</h1>
      <h1 className="work-h1">Working with us is simple! </h1>

      <div className="slideshow-container">
        
      <div className="mySlides">
  <div className="rowff">
    <div className="colff">
      <h2 className="off-h1">Hardware Engineering</h2>
      <div className="cardff">
        <p className="off-p1">IoT companies design and develop IoT devices, sensors, and hardware components with expertise in electronics, embedded systems, and prototyping for tailored solutions.</p>
        <h1 className="off-h1"><IoHardwareChipOutline /></h1>
      </div>
    </div>
    <div className="colff">
    <h2 className="off-h2">Software Development</h2>
      <div className="cardff">
        
        <p className="off-p2">IoT solution companies excel in crafting IoT software, firmware, and middleware using languages like C, C++, Python, Java, ensuring versatile solutions.</p>
        <h1 className="off-h2"><RiComputerLine /></h1>
      </div>
    </div>
  </div>

</div>




<div className="mySlides">
  <div className="rowff">
    <div className="colff">
      <h2 className="off-h1">Networking & Connectivity</h2>
      <div className="cardff">
        <p className="off-p1">Networking and Connectivity: IoT solution firms implement diverse protocols and wireless tech for seamless IoT connectivity, including MQTT, CoAP, IPv6, and 6LoWPAN.</p>
        <h1 className="off-h1"><FaNetworkWired /></h1>
      </div>
    </div>
    <div className="colff">
    <h2 className="off-h2">Industry Specific Solutions</h2>
      <div className="cardff">
        
        <p className="off-p2">Specializing in tailored IoT solutions for healthcare, agriculture, smart cities, manufacturing, with expertise in industry-specific requirements.</p>
        <h1 className="off-h2"><FaRegBuilding /></h1>
      </div>
    </div>
  </div>

</div>

<div className="mySlides">
  <div className="rowff">
    <div className="colff">
      <h2 className="off-h1">Cyber Security & Privacy</h2>
      <div className="cardff">
        <p className="off-p1">IoT solution firms prioritize robust security, understanding IoT threats, and vulnerabilities, ensuring comprehensive protection for devices, networks, and data.</p>
        <h1 className="off-h1"><MdOutlineSecurity /></h1>
      </div>
    </div>
    <div className="colff">
    <h2 className="off-h2">Data Analysis & AI</h2>
      <div className="cardff">
        
        <p className="off-p2">IoT solution firms analyze vast IoT data, extracting insights efficiently. They implement AI for predictive maintenance, anomaly detection, and optimization.</p>
        <h1 className="off-h2"><RiRobot2Line /></h1>
      </div>
    </div>
  </div>

</div>

        <a className="prev" onClick={() => plusSlides(-1)}>❮</a>
        <a className="next" onClick={() => plusSlides(1)}>❯</a>

        <div className="dot-container">
          <span className="dot" onClick={() => currentSlide(1)}></span> 
          <span className="dot" onClick={() => currentSlide(2)}></span> 
          <span className="dot" onClick={() => currentSlide(3)}></span> 
        </div>
      </div>
    </div>
  </div>
);
};