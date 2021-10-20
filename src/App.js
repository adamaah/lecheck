import logo from './logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './App.css';

function App() {
  return (
    <div className="App">

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}



      {/* Modification de la home page */}


      <header>

        <div className="monHeader">
          <img src={logo} className="monLogo" alt="logo" />
        </div>

      </header>



      <body>

        <div className="container">
          <div className="row">
              <div className="col-sm-2"></div>
              <div className="col-sm-8"> 
                <h1 className="titrePage">Mes débuts avec React JS</h1>

                <p className="textePage">
                  Pour la première fois, je crée une appli web avec React JS 😎
                </p>
                <p className="textePage">
                  J'espère vraiment que je tomberai sous le charme de cette librairie 🙏
                </p>
                <p className="textePage">
                  Façon j'ai vraiment intérêt aussi hein 🤣, je dois really me mettre à jour et suivre les nouvelles tendances du Web !
                </p>
                <iframe src="https://giphy.com/embed/NEvPzZ8bd1V4Y" width="459" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
              </div>
          </div>
        </div>


        <div className="container">

          <div className="row">
            <div className="col-sm-3"></div>
            <div className="col-sm-6">
              <h2 className="titreContact">Restez en contact pour suivre mon évolution  </h2>

              

              <form>

                <label for="inputEmail4" className="champForm">Prenom et nom</label>
                <input type="text" className="form-control" id="champnom" placeholder="Votre prénom et nom"></input>

                <label for="inputEmail4" className="champForm">Email</label>
                <input type="email" className="form-control" id="champemail" placeholder="Votre adresse email"></input>

                <label for="inputEmail4" className="champForm">Numéro de téléphone </label>
                <input type="text" className="form-control" id="champtelephone" placeholder="Votre numéro de téléphone"></input>

                <label for="inputEmail4" className="champForm">Messae</label>
                <textarea rows="4"className="form-control" id="champmessage" placeholder="Votre message"></textarea>
                

                <button type="submit" class="btn btn-dark monButton">Envoyez !</button>
              </form>




              
            </div>
          </div>

        </div>

        
      </body>


      <footer>
        <p className="texteFooter">
        ADN, 2021. Tous droits réservés.
        </p>
      </footer>





    </div>
  );
}

export default App;
