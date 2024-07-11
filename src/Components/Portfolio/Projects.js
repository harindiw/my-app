import React, { useState } from 'react';
import './Projects.css'; 

import Project1 from './project1.png';
import Project1Hover from './project1.2.png';
import Project2 from './project2.png';
import Project2Hover from './project2.1.png';
import Project3 from './project1.png';
import Project3Hover from './project1.2.png';
import Project4 from './project2.png';
import Project4Hover from './project2.1.png';
import Project5 from './project1.png';
import Project5Hover from './project1.2.png';
import Project6 from './project2.png';
import Project6Hover from './project2.1.png';

function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  }; 

  const images = [
    { defaultSrc: Project1, hoverSrc: Project1Hover, name: 'Project 1' },
    { defaultSrc: Project2, hoverSrc: Project2Hover, name: 'Project 2' },
    { defaultSrc: Project3, hoverSrc: Project3Hover, name: 'Project 3' }, 
    { defaultSrc: Project4, hoverSrc: Project4Hover, name: 'Project 4' },
    { defaultSrc: Project5, hoverSrc: Project5Hover, name: 'Project 5' },
    { defaultSrc: Project6, hoverSrc: Project6Hover, name: 'Project 6' },
  ];

  return (
    <div className="portfolio-container">
      <h2 className="subtitle">Our Portfolio</h2>
      <div className="image-container">
        {images.map((image, index) => (
          <div
            className="image-wrapper"
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={hoveredIndex === index ? image.hoverSrc : image.defaultSrc}
              alt={`Hover-image-${index + 1}`}
              className="hover-image"
            />
            {hoveredIndex === index && <div className="image-name">{image.name}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;