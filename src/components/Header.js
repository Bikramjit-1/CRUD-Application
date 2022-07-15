import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1 className="h1">Bloging-App</h1>
      <h3 className="h3">Developed By Bikramjit-Roy</h3>
      <hr />
      <div className="links">
        <NavLink to="/" className="link" activeClassName="active" exact>
          BLOG
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active">
          Add-BLOG
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
