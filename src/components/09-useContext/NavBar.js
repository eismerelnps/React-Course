import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <NavLink to="/" className="navbar-brand">useContext</NavLink>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink activeclassname="active" to={`home`} className="nav-link">Home</NavLink>
        <NavLink activeclassname="" to={`about`} className="nav-link" >About</NavLink>
        <NavLink activeclassname="" to={`login`} className="nav-link">Login</NavLink>
      </div>
    </div>
  </div>
</nav>
  );
};
