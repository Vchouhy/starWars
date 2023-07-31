import React from 'react';
import { Link } from 'react-router-dom'; 
import './HomeCardMenu.scss'
import People from '../Assets/characters.svg'
import Films from '../Assets/films.svg'
import Planets from '../Assets/planets.svg'
import Vehicles from '../Assets/vehicles.svg'

const HomeCardMenu = () => {
  return (
    <div className="main-container">
      <div className="heading">
        <p>Pick a category to start exploring</p>
      </div>
      <div className="cards-container">
        <div className="div-effect">
          <Link to="/people" className="card-link">
            <img src={People} alt="People" className="card-image" />
            <span className="card-text">Characters</span>
          </Link>
        </div>
        <div className="div-effect">
          <Link to="/films" className="card-link">
            <img src={Films} alt="Films" className="card-image" />
            <span className="card-text">Films</span>
          </Link>
        </div>
        <div className="div-effect">
          <Link to="/planets" className="card-link">
            <img src={Planets} alt="Planets" className="card-image" />
            <span className="card-text">Planets</span>
          </Link>
        </div>
        <div className="div-effect">
          <Link to="/vehicles" className="card-link">
            <img src={Vehicles} alt="Vehicles" className="card-image" />
            <span className="card-text">Vehicles</span>
          </Link>
        </div>
       
      </div>
    </div>
  );
};

export default HomeCardMenu;
