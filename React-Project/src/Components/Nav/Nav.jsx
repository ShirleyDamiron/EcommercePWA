import React from "react";
import {NavLink} from "react-router-dom"

function Nav(props) {
  const {isUserLoggedIn, loading} = props
  return (
    <header>
      <nav>
        <ul className="nav-ul">
          <li className="plaidLogo nav-ul__li">
            <img src="img/plaid-shirt.svg" alt="Plaid Shirt Icon" />
          </li>
          <li className="nav-ul__li">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="nav-ul__li">
            <NavLink to="/products">Our Sets Of Styles</NavLink>
          </li>
          <li className="nav-ul__li">
            <NavLink to="/contact">Contact</NavLink>
          </li>

          {!isUserLoggedIn && loading ? (
            <>
              <li className="nav-ul__li">
                <NavLink to="/signIn">Sign In</NavLink>
              </li>
              <li className="nav-ul__li">
                <NavLink to="/signUp">Sign Up</NavLink>
              </li>
            </>
          ) : null}

          {isUserLoggedIn && (
            <li className="nav-ul__li">
              <NavLink to="/signOut">Sign Out</NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
export default Nav;
