// components/Accordion.tsx
import React, { useState } from 'react';
import '../styles/Accordion.css'; // Assicurati di avere il CSS nello stesso percorso

interface AccordionProps {
  title: string;
  content: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false); // Stato per tenere traccia se l'elemento è aperto o chiuso

  return (
    <div className='accordion-item'>
      <div className='accordion-header' onClick={() => setIsOpen(!isOpen)}>
        <h3>{title}</h3>
        <span className={`accordion-icon ${isOpen ? 'open' : ''}`}>
          {isOpen ? '-' : '+'}
        </span>
      </div>
      {isOpen && (
        <div className='accordion-content'>
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
