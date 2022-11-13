/* HOME */
import { Link } from 'react-router-dom';

import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <Link to="/profilesearch">
        <div className="home-content">
          <h1 className="title1">Desafio Github API</h1>
          <h6 className="title2">DevSuperior - Escola de programação</h6>
        </div>

        <button className="btn btn-primary  start-button">Começar</button>
      </Link>
    </div>
  );
};

export default Home;
