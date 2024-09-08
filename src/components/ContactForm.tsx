import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/contactForm.css';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Usa le variabili d'ambiente con import.meta.env
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const userID = import.meta.env.VITE_EMAILJS_USER_ID;

    if (!serviceID || !templateID || !userID) {
      console.error('Le variabili d\'ambiente EmailJS non sono state caricate correttamente.');
      return;
    }

    emailjs.send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log('Success:', response);
        setIsSubmitted(true);
        setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' }); // Clear form on success
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <label>
        Nome:
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
      </label>
      <label>
        Cognome:
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
      </label>
      <label>
        Email di ricontatto:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>
      <label>
        Oggetto:
        <input type="text" name="subject" value={formData.subject} onChange={handleChange} required />
      </label>
      <label>
        Testo messaggio:
        <textarea name="message" value={formData.message} onChange={handleChange} required />
      </label>
      <button type="submit">Invia</button>
      {isSubmitted && <p>Messaggio inviato con successo!</p>}
    </form>
  );
};

export default ContactForm;
