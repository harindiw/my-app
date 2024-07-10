import React, { useState } from 'react';
import './Projects.css'; // Import the CSS file for styling

function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const images = [t.png
    { defaultSrc: '/Project1.2.png', hoverSrc: '/Project 1 - draft.png', name: 'Project 1' },
    { defaultSrc: '/Project2.1.png', hoverSrc: '/Project2-hover.png', name: 'Project 2' },
    { defaultSrc: '/Project1.2.png', hoverSrc: '/Project 1 - draft.png', name: 'Project 3' },
    { defaultSrc: '/Project2.1.png', hoverSrc: '/Project2-hover.png', name: 'Project 4' },
    { defaultSrc: '/Project1.2.png', hoverSrc: '/Project 1 - draft.png', name: 'Project 5' },
    { defaultSrc: '/Project2.1.png', hoverSrc: '/Project2-hover.png', name: 'Project 6' },
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