import React from 'react';
import HeaderPage from '../components/HeaderPage';
import '../styles/homePage.css';
import FotoProfilo from '../assets/foto_profilo.png';
import Accordion from '../components/Accordion';


const HomePage: React.FC = () => {
  return (
    <div className='Container-App'>
      <HeaderPage title="Mi presento..." />
      <div className='homePage__container'>
        <div className='homePage_content'>
          <img className="homePage__image" src={FotoProfilo} alt="Me" />
          <div className="homePage__text">
              <div className="homePage__title">
                <h3>Alessandro Uva</h3>
                <h4>Sviluppatore Web</h4>
              </div>
              <table className="personal-info">
                <tbody>
                  <tr>
                    <td><strong>Nome:</strong></td>
                    <td>Alessandro</td>
                  </tr>
                  <tr>
                    <td><strong>Cognome:</strong></td>
                    <td>Uva</td>
                  </tr>
                  <tr>
                    <td><strong>Data di nascita:</strong></td>
                    <td>23/07/1989</td>
                  </tr>
                  <tr>
                    <td><strong>Luogo di nascita:</strong></td>
                    <td>Torino</td>
                  </tr>
                  <tr>
                    <td><strong>Residenza:</strong></td>
                    <td>Lecce</td>
                  </tr>
                  <tr>
                    <td><strong>Pronomi:</strong></td>
                    <td>Maschili e Femminili</td>
                  </tr>
                </tbody>
              </table>
                
              <Accordion 
                title="Esperienze formative extracurriculari"
                content={
                  <>
                    <p>Dal 2007 come membro attivo di <strong>Arcigay "Ottavio Mai"</strong> a Torino, ho dimostrato capacità di leadership fondando il gruppo giovani e contribuendo in maniera significativa al direttivo, lavorando per promuovere inclusività e diritti civili.</p>
                    <p>La mia passione per il  <strong>teatro</strong> mi ha portato a recitare per anni in contesti amatoriali e professionali, sviluppando competenze in espressione creativa, improvvisazione e gestione del pubblico. Ho fondato una compagnia teatrale itinerante e, attualmente, collaboro con IMPROVVISART, compagnia salentina di improvvisazione teatrale, dove continuo a mettere in pratica la mia creatività e la mia abilità nel lavoro di squadra.</p>
                    <p>Per oltre 10 anni ho offerto il mio tempo come volontario al <strong>Torino Film Festival e al Lovers Film Festival</strong>, perfezionando le mie capacità organizzative e di gestione degli eventi. In questi ruoli, ho coordinato l'attività dei nuovi volontari, gestito ingressi, controllato biglietti e facilitato l'uscita dalle sale, dimostrando abilità nella gestione di gruppi, nell'accoglienza e nel problem-solving.</p>
                  </>
                }
              />
              <Accordion 
                title="Hobbies" 
                content={
                  <>
                    <p>Amo immergermi nei mondi virtuali dei <strong>videogiochi</strong>, dove posso esplorare nuove realtà, affrontare sfide creative e sperimentare storie avvincenti. Ogni partita è un viaggio che stimola il mio pensiero strategico e mi permette di sviluppare la mia capacità di risolvere problemi in modo innovativo.</p>
                    <p><strong>I fumetti</strong> sono un'altra mia grande passione. Apprezzo l'arte sequenziale non solo come forma di intrattenimento, ma anche come potente mezzo narrativo capace di trasmettere emozioni, valori e idee complesse attraverso immagini e parole. Trovo ispirazione nelle storie illustrate, che spesso sfidano le convenzioni e offrono prospettive uniche sulla vita e la società.</p>
                    <p>Mi piace rimanere aggiornato sull'<strong>attualità</strong> e informarmi su ciò che accade nel mondo. Ritengo che essere consapevoli e informati sia essenziale per comprendere meglio la realtà che ci circonda e per fare scelte più consapevoli e ponderate, tanto nella vita quotidiana quanto nelle relazioni personali e professionali.</p>
                    <p>Infine, sono un appassionato giocatore di <strong>giochi di ruolo</strong>, dove la creatività e l'immaginazione trovano il loro massimo sfogo. Questi giochi sono per me un'opportunità di socializzazione e collaborazione, dove ogni sessione rappresenta un'occasione per costruire mondi, raccontare storie e connettermi con gli altri attraverso l'empatia e il gioco di squadra.</p>
                  </>
                }
              />
              <Accordion 
                title="Sogni nel cassetto" 
                content={
                  <>
                    <p>Uno dei miei sogni più grandi è diventare un presentatore TV, un po' alla <strong>Paolo Bonolis</strong> più che Amadeus. Adoro il suo stile unico, la sua capacità di far ridere e al contempo dimostrare grande empatia. Bonolis è un vero mattatore: sa intrattenere, coinvolgere e ha saputo creare momenti di comicità e riflessione che sono diventati iconici nella cultura italiana.</p>
                    <p>Sogno anche di sposarmi con il mio compagno e di costruire insieme un futuro pieno di amore e complicità. Inoltre, desidero riuscire a ripagare tutte le spese che mia madre deve ancora affrontare, come segno di gratitudine per tutto ciò che ha fatto per me e per la nostra famiglia.</p>
                  </>
                }
              />
              <Accordion 
                title="Obiettivi da qui a 10 anni..." 
                content={
                  <>
                    <p>Il mio principale obiettivo è raggiungere una solida <strong>stabilità economica</strong> che mi permetta di vivere serenamente e senza preoccupazioni finanziarie. Desidero costruire una carriera che mi offra la libertà di <strong>decidere quanto e come lavorare</strong>, bilanciando al meglio vita personale e professionale.</p>
                    <p>Sogno di avviare la mia <strong>startup</strong>, un progetto imprenditoriale in cui poter investire le mie competenze e la mia creatività, e che possa rappresentare una fonte di soddisfazione e crescita continua.</p>
                    <p>Vorrei anche assicurarmi un futuro sereno, magari possedendo alcune <strong>case di proprietà</strong>, che possano essere un investimento sicuro e una garanzia di tranquillità per quando sarò più anziano.</p>
                  </>
                }
              />
              <Accordion 
                title="Come è composta la mia famiglia" 
                content={
                  <>
                    <p>La mia famiglia è un insieme di persone e animali che riempiono la mia vita di amore e gioia. Condivido la mia vita con il mio compagno <strong>Paolo</strong>, un coreografo professionista dal talento straordinario, che aggiunge creatività e passione alla nostra quotidianità.</p>
                    <p>Non possiamo dimenticare le nostre due adorabili gatte, <strong>Kali</strong> e <strong>Yuna</strong>. Queste gemelline di due anni, dal pelo grigio perla e bianco, sono una fonte incessante di affetto e divertimento. La loro presenza rende ogni giorno più luminoso e ricco di momenti speciali.</p>
                  </>
                }
              />
              <Accordion 
                title="Come sono fatto" 
                content={
                  <>
                    <p>Mi descriverei come una persona <strong>determinata</strong>, <strong>curiosa</strong> e sempre pronta ad affrontare nuove sfide. Fisicamente, sono alto 180 cm e, con un peso che preferisco non specificare, posso dire che sono un vero e proprio Superman che ha bisogno di occhiali per non trasformarsi in una talpa! Gli occhiali mi aiutano a correggere la mia ipermetropia e a mantenere la vista a livelli quasi sovrumani.</p>
                    <p>Ho occhi e capelli castani e un <strong>spirito indomito</strong> che mi porta a mettere alla prova le mie capacità. Anche se non posso vantare salti da record (fino a 10 cm è il mio massimo), riesco a restare seduto per più di 10 ore di fila, una vera e propria maratona di concentrazione e pazienza. Insomma, anche se non sono un atleta da olimpiade, il mio superpotere è la resistenza!</p>
                  </>
                }
              />
              <Accordion 
                title="Pregi & difetti" 
                content={
                  <>
                    <p><strong>Pregi:</strong> Sono una persona <strong>empatica</strong> e <strong>allegra</strong>, sempre pronta a far sorridere gli altri con una battuta. Rifletto molto e mantengo una <strong>tranquillità</strong> che mi aiuta ad affrontare le sfide con calma. Sono <strong>amichevole</strong> e <strong>dolce</strong>, sempre pronto ad <strong>aiutare gli altri</strong> e a offrire un supporto sincero. Inoltre, sono <strong>ordinato</strong> e <strong>metodico</strong> nei miei pensieri, il che mi aiuta a mantenere una visione chiara e organizzata delle cose.</p>
                    <p><strong>Difetti:</strong> A volte posso sembrare <strong>arrogante</strong>, e questo può influire sulle mie interazioni con gli altri. Materialmente, sono piuttosto <strong>disordinato</strong> e spesso perdo le cose. La mia <strong>testardaggine</strong> può farmi sembrare inflexible, e sebbene non mi arrabbi facilmente, quando accade, perdo completamente la calma. Infine, mi annoio facilmente e questo può portarmi a cercare sempre nuove stimolazioni e cambiamenti.</p>
                  </>
                }
              />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

