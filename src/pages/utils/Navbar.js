import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import '../../App.css';
import defaultUserProfilePic from '../../pages/Dashboard/img/logo.png';
import 'react-bootstrap';

const Navbar = ({ profilePic }) => {
  const pic = profilePic ;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">
        <img
        src={defaultUserProfilePic} alt='logo' className='rounded-circle imm profile-pic'/>
      </Link>
          <div className="nav-item">
            <SearchBar />
          </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse bryan navbar-collapse" id="navbarNav">
        <ul className="navbar-nav cent ml-auto">
          <li className="nav-item">
            <Link to="/equipements" className="nav-link">
              Gestion du matériel
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/commande" className="nav-link">
              Commande
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/profile" className="nav-link">
              <img
                src={pic}
                alt="Profile"
                className="rounded-circle imm profile-pic"
              />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/logout" className="nav-link">
              <button className='btn btn-dark'>Logout</button>
            </Link>
         </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;