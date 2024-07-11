import React, { useState } from 'react';
import './Projects.css'; // Import the CSS file for styling
// import Project1 from './project1.png';
// import Project2 from './project1.2.png';
// import Project3 from '/project2.png';
// import Project4 from '/project2.1.png';

function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  }; 

  const images = [
    { defaultSrc: '/project1.png', hoverSrc: '/project1.2.png', name: 'Project1' },
    { defaultSrc: '/project2.png', hoverSrc: '/project2.1.png', name: 'Project2' },
    { defaultSrc: '/project1.png', hoverSrc: '/project1.2.png', name: 'Project3' }, 
    { defaultSrc: '/project2.png', hoverSrc: '/project2.1.png', name: 'Project4' },
    { defaultSrc: '/project1.png', hoverSrc: '/project1.2.png', name: 'Project5' },
    { defaultSrc: '/project2.png', hoverSrc: '/project2.1.png', name: 'Project6' },
  ];

  return (
    <div className="portfolio-container">
      <h2 className="subtitle">Our Portfolio</h2>
      <div className="image-container">
<<<<<<< HEAD
        <img
          src={hovered ? '/div.p-uvt64 4.png' : '/Project 2 - draft.png'}
          alt="Hover-image"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="hover-image"
        />
        {hovered && <div className="image-name">Lorem Ipsum</div>}
        <img
          src={hovered ? '/download 2 1.png' : '/Project 1 - draft.png'}
          alt="Hover-image"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="hover-image"
        />
        {hovered && <div className="image-name">Lorem Ipsum</div>}
        
=======
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
>>>>>>> 6c471afe3be1303d2ea2f29f3b188efe15600029
      </div>
    </div>
  );
}

export default Projects;