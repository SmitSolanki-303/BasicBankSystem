import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";


const Navbar = () => {

  const location = useLocation();

  return (


    <header className="header">
      <nav className="nav">
        <NavLink to="/" className="nav__logo">
          MyBankMate
        </NavLink>

        <ul className="nav__list">
          <li className="nav__item">
            <NavLink to="/Home" className={`nav__link ${location.pathname === "/" || location.pathname === "/Home" ? "nav__link--active" : ""}`} exact>
              Home
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/Customer" className={`nav__link ${location.pathname === "/Customer" ? "nav__link--active" : ""}`}>
              Customers
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/TransferAmount" className={`nav__link ${location.pathname === "/TransferAmount" ? "nav__link--active" : ""}`}>
              Transfer Amount
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/ContactUs" className={`nav__link ${location.pathname === "/ContactUs" ? "nav__link--active" : ""}`}>
              Contact Us
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/TransactionHistory" className="nav__link nav__cta">
              Transaction History
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
