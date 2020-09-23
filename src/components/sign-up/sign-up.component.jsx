import React from "react";

//importing input and button from components
import FormInput from "./../form-input/form-input.component";
import CustomButton from "./../custom-button/custom-button.component";

//importing authentication and storing data function from firebase
import {
  auth,
  createUserProfileDocument,
} from "./../../firebase/firebase.utils";

import "./sign-up.styles.scss";

//A class Component
class SignUp extends React.Component {
  constructor() {
    super();

    //settings the initial state to null
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  //function called when form is submitted
  handleSubmit = async (event) => {
    //preventing the default behavior of browser
    event.preventDefault();
    //getting the values from  the form where user has entered all the details
    const { displayName, email, password, confirmPassword } = this.state;

    //checking if password and confirm password are not same
    if (password !== confirmPassword) {
      //if not same showing a alert message and returning from the function
      alert("password and confirm password do not match");
      return;
    }

    try {
      //if the password match then this function creates a new user associated with the email address and password
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      //storing the new user data to database
      //user contains email and password
      //displayName contains users name
      await createUserProfileDocument(user, { displayName });

      //if user data is successfully stored then clear form inputs
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (err) {
      //if error show error message
      console.error(err);
    }
  };

  //whenever anything is added to the inputs its stored by using setState method
  handleChange = (event) => {
    //name => form input name
    //value => form input value typed by user
    const { value, name } = event.target; //getting the values
    //storing the value in set state
    this.setState({ [name]: value });
  };

  render() {
    //values from this.state
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <div className="sign-up">
        <h2 className="title">I don't have an account yet</h2>
        <span>sign-up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            label="Email ID"
            required
            onChange={this.handleChange}
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm password"
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
