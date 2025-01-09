import React from 'react';
import HeaderPage from '../components/HeaderPage';
import '../styles/certificationsPage.css';

const CertificationsPage: React.FC = () => {
  return (
    <div className="Container-App">
      <HeaderPage title="Formazione e Certificazioni" />
      <div className="certificationsPage__content">
        <section className="certification-section" aria-labelledby="booleanCareerTitle" aria-describedby="booleanCareerDesc">
          <h2 id="booleanCareerTitle">Boolean Career</h2>
          <p id="booleanCareerDesc">Corso intensivo di formazione pratico di 6 mesi da sviluppatore Web Full Stack (2022)</p>
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
        </section>

        <section className="certification-section" aria-labelledby="laureaTitle" aria-describedby="laureaDesc">
          <h2 id="laureaTitle">Laurea triennale</h2>
          <ul id="laureaDesc">
            <li>Scienze e Tecniche Psicologiche (2010)</li>
            <li>Grafica e Comics (2013)</li>
          </ul>
        </section>

        <section className="certification-section" aria-labelledby="diplomaTitle" aria-describedby="diplomaDesc">
          <h2 id="diplomaTitle">Diplomi</h2>
          <ul id="diplomaDesc">
            <li>Diploma di Grafica e Comics (3 anni)</li>
            <li>Diploma di Teatro Stabile di Torino, in Commedia dell'Arte (4 anni) - Corso serale giornaliero (2007 - 2011)</li>
          </ul>
        </section>

        <section className="certification-section" aria-labelledby="corsiRegionaliTitle" aria-describedby="corsiRegionaliDesc">
          <h2 id="corsiRegionaliTitle">Corsi Regionali</h2>
          <ul id="corsiRegionaliDesc">
            <li>Corso Regione Piemonte: Creazione e Montaggio Video (2020)</li>
            <li>Corso Regione Puglia: Inglese B2 (Novembre - Dicembre 202)</li>
          </ul>
        </section>

        <section className="certification-section" aria-labelledby="corsiUdemyTitle" aria-describedby="corsiUdemyDesc">
          <h2 id="corsiUdemyTitle">Corsi Udemy</h2>
          <ul id="corsiUdemyDesc">
            <li>Realizza i tuoi progetti con HTML, CSS, Javascript, Java, Node, MySQL, Linux, Wordpress di Umberto Olla (2020)</li>
            <li>React.js e Redux di Omar De Angelis (2020)</li>
            <li>Da 0 ad Hacker per principianti (Alpenite tramite Udemy) (2022)</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default CertificationsPage;
