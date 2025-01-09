import React from 'react';
import HeaderPage from '../components/HeaderPage';
import '../styles/skillsPage.css';

const SkillsPage: React.FC = () => {
  return (
    <div className="Container-App">
      <HeaderPage title="Competenze" />
      <main className="skills-page-content">
        <section className="skills-category">
          <h2>Competenze Tecniche</h2>
          <div className="skills-list">
            <div className="skill-item">
              <span className="skill-name">HTML5</span>
              <span className="skill-level">3 anni</span>
            </div>
            <div className="skill-item">
              <span className="skill-name">CSS</span>
              <span className="skill-level">3 anni</span>
            </div>
            <div className="skill-item">
              <span className="skill-name">JavaScript</span>
              <span className="skill-level">3 anni</span>
            </div>
            <div className="skill-item">
              <span className="skill-name">PHP</span>
              <span className="skill-level">3 anni</span>
            </div>
            <div className="skill-item">
              <span className="skill-name">Python</span>
              <span className="skill-level">1 anno</span>
            </div>
          </div>
        </section>

        <section className="skills-category">
          <h2>Competenze Software</h2>
          <div className="skills-list">
            <div className="skill-item">
              <span className="skill-name">Visual Studio Code</span>
              <span className="skill-level">3 anni</span>
            </div>
            <div className="skill-item">
              <span className="skill-name">Sublime Text</span>
              <span className="skill-level">3 anni</span>
            </div>
            <div className="skill-item">
              <span className="skill-name">PyCharm</span>
              <span className="skill-level">1 anno</span>
            </div>
          </div>
        </section>

        <section className="skills-category">
          <h2>Competenze Grafiche</h2>
          <div className="skills-list">
            <div className="skill-item">
              <span className="skill-name">Adobe Photoshop</span>
              <span className="skill-level">7 anni</span>
            </div>
            <div className="skill-item">
              <span className="skill-name">Adobe Illustrator</span>
              <span className="skill-level">1 anno</span>
            </div>
            <div className="skill-item">
              <span className="skill-name">Figma</span>
              <span className="skill-level">7 anni</span>
            </div>
          </div>
        </section>

        <section className="skills-category">
          <h2>Competenze Linguistiche</h2>
          <div className="skills-list">
            <div className="skill-item">
              <span className="skill-name">Inglese</span>
              <span className="skill-level">B2</span>
            </div>
          </div>
        </section>

        <section className="skills-category">
          <h2>Competenze Aggiuntive</h2>
          <div className="skills-list">
            <div className="skill-item">
              <span className="skill-name">Patente B</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SkillsPage;
