import React from 'react';
import { Link } from 'react-router-dom'; // Asegúrate de importar Link de react-router-dom
import './HomeCardMenu.scss'

const HomeCardMenu = () => {
  return (
    <div className="main-container">
      <div className="heading">
        <p>Pick a category to start exploring</p>
      </div>
      <div className="cards-container">
        <div className="div-effect">
          <Link to="/people" className="card-link">
            <img src="/Assets/characters1.svg" alt="People" className="card-image" />
            <span className="card-text">People</span>
          </Link>
        </div>
        <div className="div-effect">
          <Link to="/planets" className="card-link">
            <img src="/Assets/planets1.svg" alt="Planets" className="card-image" />
            <span className="card-text">Planets</span>
          </Link>
        </div>
        <div className="div-effect">
          <Link to="/vehicles" className="card-link">
            <img src="/Assets/vehicles1.svg" alt="Vehicles" className="card-image" />
            <span className="card-text">Vehicles</span>
          </Link>
        </div>
        <div className="div-effect">
          <Link to="/films" className="card-link">
            <img src="/Assets/films1.svg" alt="Films" className="card-image" />
            <span className="card-text">Films</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeCardMenu;
