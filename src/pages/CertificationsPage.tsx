import React from 'react';
import HeaderPage from '../components/HeaderPage';
import '../styles/certificationsPage.css'; 

const CertificationsPage: React.FC = () => {
  return (
    <div className='Container-App'>
      <HeaderPage title="Formazione e Certificazioni" />
      <div className="certificationsPage__content">
        <div className="certification-section">
          <h2>Boolean Career</h2>
          <p>Corso intensivo di formazione pratico di 6 mesi da sviluppatore Web Full Stack (2022)</p>
          <h3>Nozioni apprese:</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JS</li>
            <li>Vue.js</li>
            <li>Bootstrap</li>
            <li>Node.js</li>
            <li>MySQL</li>
            <li>PHP</li>
            <li>Laravel</li>
          </ul>
        </div>

        <div className="certification-section">
          <h2>Laurea triennale</h2>
          <ul>
            <li>Scienze e Tecniche Psicologiche (2010)</li>
            <li>Grafica e Comics (2013)</li>
          </ul>
        </div>

        <div className="certification-section">
          <h2>Diplomi</h2>
          <ul>
            <li>Diploma di Grafica e Comics (3 anni)</li>
            <li>Diploma di Teatro Stabile di Torino, in Commedia dell'Arte (4 anni) - Corso serale giornaliero (2007 - 2011)</li>
          </ul>
        </div>

        <div className="certification-section">
          <h2>Corsi Regionali</h2>
          <ul>
            <li>Corso Regione Piemonte: Creazione e Montaggio Video (2020)</li>
            <li>Corso Regione Puglia: Inglese B2 (Novembre - Dicembre 202)</li>
          </ul>
        </div>

        <div className="certification-section">
          <h2>Corsi Udemy</h2>
          <ul>
            <li>Realizza i tuoi progetti con HTML, CSS, Javascript, Java, Node, MySQL, Linux, Wordpress di Umberto Olla (2020)</li>
            <li>React.js e Redux di Omar De Angelis (2020)</li>
            <li>Da 0 ad Hacker per principianti (Alpenite tramite Udemy) (2022)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CertificationsPage;

