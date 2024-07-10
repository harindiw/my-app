import React, { useState } from 'react';
import './Projects.css'; // Import the CSS file for styling

function Projects() {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div className="portfolio-container">
      <h2 className="subtitle">Our Portfolio</h2>
      <div className="image-container">
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
      </div>
    </div>
  );
}

export default Projects;
