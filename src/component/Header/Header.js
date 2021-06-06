import React from 'react';
import { Link } from 'react-router-dom';
import headerLogo from '../../Image/Icon/travel-logo.png';
import './Header.css';

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <img className="navbar-brand header-logo-style" src={headerLogo} alt="" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex">
              <input className="form-control mx-auto" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-warning" type="submit">Search</button>
            </form>
            <ul className="navbar-nav  ms-auto me-5  mb-1 mb-lg-0">
              <li className="nav-item">
                <Link to="/home" className="nav-link text-white" aria-current="page">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/blog" className="nav-link text-white" >Blog</Link>
              </li>
              <li className="nav-item">
                <Link to="/destination" className="nav-link text-white" >Destination</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link text-white" tabindex="-1"  >Contact</Link>
              </li>
              <li className="nav-item">
                
                <Link to="/login"> <button className="btn btn-warning" type="submit" >Login</button>  </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;