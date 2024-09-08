import React from 'react';
import '../styles/headerPage.css';


interface HeaderPageProps {
  title: string;
}

const HeaderPage: React.FC<HeaderPageProps> = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

export default HeaderPage;
