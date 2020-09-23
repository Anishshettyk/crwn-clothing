import React from "react";
//for React router
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

//css file for app.js
import "./App.css";

//importing all the pages for the web
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.components";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

//importing auth from firebase.
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import { setCurrentUser } from "./redux/user/user.actions";

//making a class component of App from react component
class App extends React.Component {
  //starting will null
  unsubscribeFromAuth = null;

  //when the component is mounted set unsubscribeFromAuth to the currentUser
  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      //if there is a user then store the data in database
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        //onSnapshot method provides a document snapshot when intially loaded and it will call itself when we update the user data
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            //get the user uid from database
            id: snapshot.id,
            //spread  other data from database
            ...snapshot.data(),
          });
        });
      } else {
        //if there is no user then set the current user to null value by userAuth
        setCurrentUser(userAuth);
      }
    });
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
          <Route exact path="/shop" component={ShopPage} />
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

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

//=>value is set to null because we don't set it in our app component
export default connect(mapStateToProps, mapDispatchToProps)(App);
