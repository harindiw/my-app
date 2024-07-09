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
          src={hovered ? '/path/to/darker-image.png' : '/path/to/original-image.png'}
          alt="Hover Image"
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
