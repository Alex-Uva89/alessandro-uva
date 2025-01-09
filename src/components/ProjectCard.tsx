import React from 'react';
import '../styles/projectCard.css';

interface ProjectCardProps {
  title: string;
  description: string;
  img: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, img, link }) => {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="project-card"
      aria-label={`Apri il progetto: ${title}`}
    >
      <img 
        src={img} 
        alt={`Immagine rappresentativa del progetto ${title}`} 
        className="project-card__image" 
      />
      <div className="project-card__content">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__description">{description}</p>
      </div>
    </a>
  );
};

export default ProjectCard;
