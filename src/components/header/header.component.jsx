import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.styles.scss";

import { auth } from "./../../firebase/firebase.utils";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link to="/shop" className="option">
        SHOP
      </Link>
      <Link to="/shop" className="option">
        CONTACT
      </Link>
      {currentUser ? (
        //if there is a user logged in show signout button
        <div className="option" onClick={() => auth.signOut()}>
          Sign out
        </div>
      ) : (
        //if not show them sign in button
        <Link className="option" to="/signin">
          Signin
        </Link>
      )}
    </div>
  </div>
);

export default Header;