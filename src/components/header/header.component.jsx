import React from "react";
import { Link } from "react-router-dom";
//connect is a higher order component which gives access to modify our component to give access to redux
import { connect } from "react-redux";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.styles.scss";

import { auth } from "./../../firebase/firebase.utils";

//cart icon component
import CartIcon from "./../cart-icon/cart-icon.component";
//cart dropdown component
import CartDropdown from "./../cart-dropdown/cart-dropdown.component";

const Header = ({ currentUser, hiddden }) => (
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
      <CartIcon />
    </div>
    {/*if hiddden is true then dont show anything if false shop cart dropdown*/}
    {hiddden ? null : <CartDropdown />}
  </div>
);
const mapStateToProps = ({ user: { currentUser }, cart: { hiddden } }) => ({
  //state is root reducer
  //root reducer has a key called user which points to user reducer where the initial state is current user
  currentUser,
  hiddden,
});
export default connect(mapStateToProps)(Header);
