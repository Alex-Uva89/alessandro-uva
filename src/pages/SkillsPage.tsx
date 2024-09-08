import React from 'react';
import HeaderPage from '../components/HeaderPage';
import '../styles/skillsPage.css';

const SkillsPage: React.FC = () => {
  return (
    <div className='Container-App'>
      <HeaderPage title="Competenze" />
      <div className="skillsPage__content">
        <div>
          <h2>Competenze Tecniche</h2>
          <h3>Linguaggi</h3>
          <ul>
            <li>
              <span>HTML5: </span>
              <span>3 anni</span>
            </li>
            <li>
              <span>CSS: </span>
              <span>3 anni</span>
            </li>
            <li>
              <span>JavaScript: </span>
              <span>3 anni</span>
            </li>
            <li>
              <span>PHP: </span>
              <span>3 anni</span>
            </li>
            <li>
              <span>Python: </span>
              <span>1 anno</span>
            </li>
          </ul>

          <h3>Frameworks</h3>
          <ul>
            <li>
              <span>React: </span>
              <span>2 anno</span>
            </li>
            <li>
              <span>Vue.js: </span>
              <span>3 anni</span>
            </li>
            <li>
              <span>Node.js: </span>
              <span>3 anno</span>
            </li>
            <li>
              <span>Express: </span>
              <span>1 anno</span>
            </li>
            <li>
              <span>Bootstrap: </span>
              <span>3 anni</span>
            </li>
          </ul>
        </div>

        <div>
          <h2>Competenze Software</h2>
          <h3>IDE</h3>
          <ul>
            <li>
              <span>Visual Studio Code: </span>
              <span>3 anni</span>
            </li>
            <li>
              <span>Sublime Text: </span>
              <span>3 anni</span>
            </li>
            <li>
              <span>PyCharm: </span>
              <span>1 anno</span>
            </li>
          </ul>

          <h3>Versioning</h3>
          <ul>
            <li>
              <span>Git: </span>
              <span>3 anni</span>
            </li>
            <li>
              <span>GitHub: </span>
              <span>3 anni</span>
            </li>
          </ul>
        </div>
        <div>
          <h2>Competenze Grafiche</h2>
          <div>
            <h3>Design</h3>
            <ul>
              <li>
                <span>Adobe Photoshop: </span>
                <span>7 anni</span>
              </li>
              <li>
                <span>Adobe Illustrator: </span>
                <span>1 anno</span>
              </li>
              <li>
                <span>Adobe XD: </span>
                <span>1 anno</span>
              </li>
              <li>
                <span>Figma: </span>
                <span>7 anni</span>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h2>Competenze Trasversali</h2>
          <ul>
            <li>
              <span>Problem Solving: </span>
              <span>3 anni</span>
            </li>
            <li>
              <span>Team Working: </span>
              <span>3 anni</span>
            </li>
            <li>
              <span>Time Management: </span>
              <span>3 anni</span>
            </li>
            <li>
              <span>Problem Solving: </span>
              <span>3 anni</span>
            </li>
          </ul>
        </div>

        <div>
          <h2>Competenze Linguistiche</h2>
          <ul>
            <li>
              <span>Inglese: </span>
              <span>B2</span>
            </li>
          </ul>
        </div>

        <div>
          <h2>Competenze Aggiuntive</h2>
          <ul>
            <li>
              <span>Patente B: </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
