import "./NotFound.scss";
import React from "react";
import Trooper1 from "../Assets/trooper1.svg";
import Trooper2 from "../Assets/trooper21.svg";
import { Link } from 'react-router-dom'; 


const NotFound = () => {
  return (
    <div>
      <div className="not-found-container">
        <div>
          <img src={Trooper1} alt="not Found" />
        </div>
        <div className="text-button">
          <p className="not-found-text">
            Imperial 404 Error <br/>These aren't the pages you're looking for...<br/>
            Sorry, it seems like the Force is not with us, and the page you are
            trying to reach cannot be found in this galaxy. <br/>You can always
            return to the home planet of the Empire by clicking the button
            below. <br/>May the Force be with you!
          </p>
          <Link to='/home' className="not-found-button">Home</Link>
        </div>
        <div>
          <img src={Trooper2} alt="not Found" />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
