import React, { useState } from 'react';
import '../styles/Accordion.css'; // Assicurati di avere il CSS nello stesso percorso

interface AccordionProps {
  title: string;
  content: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false); // Stato per tenere traccia se l'elemento è aperto o chiuso

  // Gestione della tastiera (tasto Enter o Space per aprire/chiudere)
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className='accordion-item'>
      <div
        className='accordion-header'
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-expanded={isOpen ? 'true' : 'false'}
        aria-controls={`accordion-content-${title}`} // Collega l'accordion con il suo contenuto
      >
        <h3>{title}</h3>
        <span className={`accordion-icon ${isOpen ? 'open' : ''}`}>
          {isOpen ? '-' : '+'}
        </span>
      </div>
      {isOpen && (
        <div
          id={`accordion-content-${title}`}
          className='accordion-content'
          aria-labelledby={`accordion-header-${title}`}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Accordion;
