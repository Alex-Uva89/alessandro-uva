import React from 'react';
import HeaderPage from '../components/HeaderPage';
import '../styles/requestPage.css';

const RequestPage: React.FC = () => {
  return (
    <div className='Container-App'>
      <HeaderPage title="Richieste" />
      <div className="requestPage__content">
        <h2>Cosa cerco nel mio prossimo lavoro?:</h2>
        <ul className="request-list">
          <li><strong>RAL</strong>: Minimo 28k annui, con prospettive di crescita economica legate a performance e risultati aziendali.</li>
          <li><strong>Ambiente di lavoro</strong>: Inclusivo e stimolante, con una cultura aziendale che valorizzi il feedback, la crescita personale, e l'equilibrio vita-lavoro.</li>
          <li><strong>Tecnologie</strong>: Utilizzo di tecnologie moderne e in continua evoluzione, con possibilità di lavorare su progetti innovativi e sfidanti.</li>
          <li><strong>Formazione continua</strong>: Accesso a corsi di formazione, workshop, e conferenze, con un budget annuale dedicato alla crescita professionale.</li>
          <li><strong>Crescita professionale</strong>: Chiare opportunità di avanzamento di carriera e sviluppo di competenze in ambito sia tecnico che manageriale.</li>
          <li><strong>Lavoro ibrido o remoto</strong>: Flessibilità nella scelta del luogo di lavoro, con la possibilità di lavorare in remoto o in modalità ibrida.</li>
          <li><strong>Team collaborativo</strong>: Lavorare in un team eterogeneo, affiatato, e orientato al raggiungimento degli obiettivi comuni.</li>
          <li><strong>Cultura dell'innovazione</strong>: Possibilità di proporre idee, sperimentare nuovi approcci e contribuire attivamente all'innovazione aziendale.</li>
        </ul>
      </div>
    </div>
  );
};

export default RequestPage;
