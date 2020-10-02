import React from "react";
//for React router
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

//css file for app.js
import "./App.css";

//importing all the pages for the web
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.components";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import checkoutPage from "./pages/checkout/checkout.component";

import { checkUserSession } from "./redux/user/user.actions";

//importing user selector
import { selectCurrentUser } from "./redux/user/user.selector";

//making a class component of App from react component
class App extends React.Component {
  //starting will null
  unsubscribeFromAuth = null;

  //when the component is mounted set unsubscribeFromAuth to the currentUser
  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }
  //called at last and it will unmount the logging in functionality
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    //passing the current user by using this.state.currentUser and using it in haeders to have a signout /sign-in functionality.

    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={checkoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

//=>value is set to null because we don't set it in our app component
export default connect(mapStateToProps, mapDispatchToProps)(App);
