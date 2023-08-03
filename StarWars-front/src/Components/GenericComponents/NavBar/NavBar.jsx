import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";



const NavBar = ({ shouldShowBackground, isContactPage }) => {
 

  return (
    <div className={`navbar-main-container ${isContactPage ? "contact-page-navbar" : ""}`}>
      <Link to="/home" className="link">
        Home
      </Link>
      <Link to="/people" className="link">
        Characters
      </Link>
      <Link to="/films" className="link">
        Films
      </Link>
      <Link to="/planets" className="link">
        Planets
      </Link>
      <Link to="/vehicles" className="link">
        Vehicles
      </Link>
     
      <Link to="/contact" className="link">
        Contact
      </Link>
    </div>
  );
};

export default NavBar;
