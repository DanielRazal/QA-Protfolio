import { Col } from "react-bootstrap";
import React, { useEffect, useState } from 'react';

export const ProjectCard = ({ title, description, imgUrl, githubRepository }) => {

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 767.5 && window.innerWidth >= 575.5);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Col size={12} sm={6} md={6} className="">
      <div className="proj-imgbx">
        <img src={imgUrl} alt="Projects"/>
        <div className="proj-txtx">
          <h4 className="title">{title}</h4>
          <span className="description">{description}</span>
          <br /><br />
          <div>
            <a href={githubRepository} className={`btn btn-primary ${isSmallScreen ? 'btn-sm' : ''}`}
              target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </div>
    </Col>
  )
}
