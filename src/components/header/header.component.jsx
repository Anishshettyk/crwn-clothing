import React from "react";

import { createStructuredSelector } from "reselect";
//connect is a higher order component which gives access to modify our component to give access to redux
import { connect } from "react-redux";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  OptionDiv,
} from "./header.styles";

import { auth } from "./../../firebase/firebase.utils";

//cart icon component
import CartIcon from "./../cart-icon/cart-icon.component";
//cart dropdown component
import CartDropdown from "./../cart-dropdown/cart-dropdown.component";

import { selectCartHidden } from "./../../redux/cart/cart.selectors";
import { selectCurrentUser } from "./../../redux/user/user.selector";

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/shop">CONTACT</OptionLink>
      {currentUser ? (
        //if there is a user logged in show signout button
        <OptionDiv onClick={() => auth.signOut()}>Sign out</OptionDiv>
      ) : (
        //if not show them sign in button
        <OptionLink to="/signin">Signin</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {/*if hiddden is true then dont show anything if false shop cart dropdown*/}
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  //createStructuredSelector passes the state automatically
  //state is root reducer
  //root reducer has a key called user which points to user reducer where the initial state is current user
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
