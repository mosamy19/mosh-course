import React from "react";
import { NavLink, Link } from "react-router-dom";
const Navbar = ({ user }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Vidly
      </Link>
      <div className="navbar-nav">
        <NavLink className="nav-item nav-link" to="/movies">
          Movies
        </NavLink>

        <NavLink className="nav-item nav-link" to="/customers">
          Customers
        </NavLink>

        <NavLink className="nav-item nav-link" to="/rentals">
          Rentals
        </NavLink>
        {!user && (
          <>
            <NavLink className="nav-item nav-link" to="/login">
              Login
            </NavLink>
            <NavLink className="nav-item nav-link" to="/register">
              Register
            </NavLink>
          </>
        )}
        {user && (
          <>
            <NavLink className="nav-item nav-link" to="/profile">
              {user.name}
            </NavLink>
            <NavLink className="nav-item nav-link" to="/logout">
              Logout
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
