import React from 'react';
import HeaderPage from '../components/HeaderPage';
import ContactForm from '../components/ContactForm';
import '../styles/contactPage.css';

const ContactPage: React.FC = () => {
  return (
    <div className='Container-App'>
      <HeaderPage title="Contatti" />
      <div className="contactPage__content">
          <div className='contact-card'>
            <h2 className="title-contact">Contattami..</h2>
            <p><strong>Telefono:</strong> +39 3407469288</p>
            <p><strong>Email:</strong> a.uva1988@gmail.com</p>
            <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/alessandro-uva" target="_blank" rel="noopener noreferrer">Alessandro Uva</a></p>
          </div>
          <div className="contact-direct">
            <h2>Oppure se hai bisogno di ulteriori informazioni, non esitare a contattarmi direttamente:</h2>
        
            <ContactForm />
          </div>
      </div>
    </div>
  );
};

export default ContactPage;
