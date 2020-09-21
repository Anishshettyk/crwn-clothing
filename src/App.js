import React from "react";
//for React router
import { Route, Switch } from "react-router-dom";

//css file for app.js
import "./App.css";

//importing all the pages for the web
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.components";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

//importing auth from firebase.
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

//making a class component of App from react component
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
      //settings the currentUser to null
      //if it has a value then setState will assign a value if not its null
    };
  }
  //starting will null
  unsubscribeFromAuth = null;

  //when the component is mounted set unsubscribeFromAuth to the currentUser
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      //this function is used to save user data to database
      await createUserProfileDocument(user);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    //passing the current user by using this.state.currentUser and using it in haeders to have a signout /sign-in functionality.
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
