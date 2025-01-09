import React from 'react';
import HeaderPage from '../components/HeaderPage';
import ContactForm from '../components/ContactForm';
import '../styles/contactPage.css';

const ContactPage: React.FC = () => {
  return (
    <div className="Container-App">
      <HeaderPage title="Contatti" />
      <div className="contactPage__content">
        <section className="contact-card" aria-labelledby="contact-card-title">
          <h2 id="contact-card-title" className="title-contact">Contattami</h2>
          <p>
            <strong>Telefono:</strong>{' '}
            <a href="tel:+393407469288" aria-label="Chiama al numero +39 3407469288">
              +39 3407469288
            </a>
          </p>
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:a.uva1988@gmail.com" aria-label="Invia un'email a a.uva1988@gmail.com">
              a.uva1988@gmail.com
            </a>
          </p>
          <p>
            <strong>LinkedIn:</strong>{' '}
            <a
              href="https://www.linkedin.com/in/alessandro-uva"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Vai al profilo LinkedIn di Alessandro Uva, si apre in una nuova scheda"
            >
              Alessandro Uva
            </a>
          </p>
        </section>
        <section className="contact-direct" aria-labelledby="contact-direct-title">
          <h2 id="contact-direct-title">
            Oppure, se hai bisogno di ulteriori informazioni, contattami direttamente:
          </h2>
          <ContactForm />
        </section>
      </div>
    </div>
  );
};

export default ContactPage;
