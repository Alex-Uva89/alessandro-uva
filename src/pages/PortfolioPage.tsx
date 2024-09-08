import React from 'react';
import HeaderPage from '../components/HeaderPage';
import '../styles/portfolioPage.css';

const PortfolioPage: React.FC = () => {
  return (
    <div className='Container-App'>
      <HeaderPage title="Portfolio" />
      <div className="portfolioPage__content">
        <h1>..PAGINA IN ALLESTIMENTO ..</h1>
        <p><strong>GitHub:</strong> <a href="https://github.com/Alex-Uva89">Vai al mio GitHub</a></p>
      </div>
    </div>
  );
};

export default PortfolioPage;
