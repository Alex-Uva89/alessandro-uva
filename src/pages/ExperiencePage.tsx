import React from 'react';
import HeaderPage from '../components/HeaderPage';
import '../styles/experiencePage.css';

const ExperiencePage: React.FC = () => {
  return (
    <div className='Container-App'>
      <HeaderPage title="Esperienze" />
      <div className="experiencePage__content">
        <h2>Full Stack Developer</h2>
        <p><strong>Camillo s.r.l.</strong> | Marzo 2024 – Attualmente</p>
        <p>A Marzo 2024 sono stato assunto come full stack specializzato nello sviluppo di soluzioni digitali personalizzate per il settore ristorativo...</p>
        <h5>Di cosa mi occupavo:</h5>
        <ul className='list-i-do'>
          <li>Creazione gestionale ordini e prenotazioni tavolo nei ristoranti con l'uso di Java, Vue.js</li>
          <li>Progettazione e creazione DB utilizzato come magazzino dai locali in MySql deployato con Amazon RDS</li>
          <li>Progettazione grafica con CANVA dei menù dei locali</li>
          <li>Progettazione tecnica dei menu utilizzando i dati trasformati dal DB, sfruttando per il FE React e un framework di mia personale creazione e sperimentazione, per il BE Node.js ed Express</li>
          <li>Progettazione tecnica CMS per l'inserimento dei dati nel DB, utilizzati per i menù</li>
          <li>Refactoring del sito enterprise, con aggiunta collegamento ai menù e traduzione inglese con Nuxt.js/i18n</li>
          <li>Stesura di documentazione tecnica direttamente nei README.md di progetto</li>
          <li>Gestione Team di 2 persone, con metodo AGILE, versionamento GIT</li>
        </ul>

        <h2>Frontend Developer</h2>
        <p><strong>Alpenite</strong> | Giugno 2022 – Novembre 2023</p>
        <p>A Giugno 2022 ho intrapreso il percorso da Frontend Developer in Alpenite...</p>
        <h5>Di cosa mi occupavo:</h5>
        <ul className='list-i-do'>
          <li>Refactoring componeneti in React per E-commerce MAGENTO</li>
          <li>Refactoring componenti in Liquid per il CMS Shopify</li>
          <li>Creazione componeneti secondo task JIRA</li>
          <li>Partecipazione attiva ai Daily Stand-up</li>
          <li>Partecipazione attiva agli incontri con i clienti</li>
          <li>Sostituzione nel periodo estivo dei colleghi sulla parte BE, su PHP/MAGENTO</li>
        </ul>

        <h2>Office Manager</h2>
        <p><strong>Intesa SanPaolo Vita</strong> | Settembre 2017 – Novembre 2021</p>
        <ul className='list-i-do'>
          <li>Gestione orari pulizie ufficio</li>
          <li>Gestione turni ufficio</li>
          <li>Responsabile delle nuove assunzioni</li>
          <li>Gestione calendario attività ufficio secondo obiettivi</li>
          <li>Assistenza diretta ai colleghi</li>
          <li>Gestione dei flussi economici</li>
          <li>Creazione ticket su JIRA per comunicare problemi tecnici applicativi</li>
          <li>Partecipazione alle riunioni settimanali e mensili di aggiornamento obiettivi</li>
          <li>valutazione operato e crescita del team e del singolo</li>
        </ul>

        <h2>Store Manager</h2>
        <p><strong>Tiger Italia</strong> | Settembre 2012 – Giugno 2017</p>
        <ul className='list-i-do'>
          <li>Gestione orari pulizie ufficio</li>
          <li>Gestione turni ufficio</li>
          <li>Responsabile delle nuove assunzioni</li>
          <li>Gestione calendario attività ufficio secondo obiettivi</li>
          <li>Assistenza diretta ai colleghi</li>
          <li>Gestione dei flussi economici</li>
          <li>Creazione ticket su JIRA per comunicare problemi tecnici applicativi</li>
          <li>Partecipazione alle riunioni settimanali e mensili di aggiornamento obiettivi</li>
          <li>valutazione operato e crescita del team e del singolo</li>
        </ul>
      </div>
    </div>
  );
};

export default ExperiencePage;
