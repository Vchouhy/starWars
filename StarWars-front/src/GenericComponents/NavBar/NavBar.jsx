import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";



const NavBar = () => {
 

  return (
    <div className="navbar-main-container">
      <Link to="/home" className="link">
        Home
      </Link>
      <Link to="/contact" className="link">
        Contact
      </Link>
      
    </div>
  );
};

export default NavBar;
