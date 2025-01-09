import React from 'react';
import HeaderPage from '../components/HeaderPage';
import ProjectCard from '../components/ProjectCard';
import FotoHomeProject1 from '../assets/home_mamma_elvira.png';
import FotoHomeProject2 from '../assets/homepage.png';
import '../styles/portfolioPage.css';

const PortfolioPage: React.FC = () => {
  return (
    <div className="Container-App">
      <HeaderPage title="Portfolio" />
      <main className="portfolioPage__content" role="main">
        <p>
          <strong>GitHub:</strong>{' '}
          <a 
            href="https://github.com/Alex-Uva89" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Vai al mio profilo GitHub, si apre in una nuova scheda"
          >
            Vai al mio GitHub
          </a>
        </p>
        <p>
          <strong>LinkedIn:</strong>{' '}
          <a 
            href="https://www.linkedin.com/in/alessandro-uva/" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Vai al mio profilo LinkedIn, si apre in una nuova scheda"
          >
            Vai al mio LinkedIn
          </a>
        </p>
        <p className='portfolioPage__content-title'>Oppure scopri i miei progetti:</p>
        <ul aria-label="Elenco dei miei progetti">
          <li>
            <ProjectCard 
              title="Sito Mamma Elvira" 
              description="Sito web realizzato per l'azienda di ristorazione Mamma Elvira" 
              img={FotoHomeProject1} 
              link="https://www.mammaelvira.com" 
            />
          </li>

          <li>
          <ProjectCard 
              title="Menu Ristorante" 
              description="Menu personalizzato, con creazione di gestione per inserimento dati." 
              img={FotoHomeProject2} 
              link="https://menu-mammaelvira-fe-80d79ebfc254.herokuapp.com/'Scante" 
            />
          </li>
        </ul>
      </main>
    </div>
  );
};

export default PortfolioPage;
