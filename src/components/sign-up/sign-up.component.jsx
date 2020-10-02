import React from "react";
import { connect } from "react-redux";

//importing input and button from components
import FormInput from "./../form-input/form-input.component";
import CustomButton from "./../custom-button/custom-button.component";

import { SignUpContainer, SignUpTitle } from "./sign-up.styles";
import { signUpStart } from "./../../redux/user/user.actions";

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

  handleSubmit = async (event) => {
    event.preventDefault();
    const { signUpStart } = this.props;

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("password and confirm password do not match");
      return;
    }
    signUpStart({ displayName, email, password });
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
      <SignUpContainer>
        <SignUpTitle>I don't have an account yet</SignUpTitle>
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
      </SignUpContainer>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
