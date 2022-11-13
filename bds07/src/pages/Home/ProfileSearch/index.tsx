/* BUSCA DO PERFIL */
import { Link } from 'react-router-dom';

import './styles.css';

const ProfileSearch = () => {
  return (
    <div className="profile-search-container">
      <Link to="/profileresult">
        <div className="container search-container">
          <h1 className="title-color">Encontre um perfil Github</h1>
          <form>
            <div className="form-container">
              <input
                type="text"
                className="search-input"
                placeholder="Usuário Github"
                onChange={() => {}}
              />
              <button type="submit" className="btn btn-primary search-button">
                Encontrar
              </button>
            </div>
          </form>
        </div>
      </Link>
    </div>
  );
};

export default ProfileSearch;
