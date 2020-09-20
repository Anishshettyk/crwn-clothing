import React from "react";
import "./sign-in.styles.scss";

import FormInput from "./../form-input/form-input.component";
import CustomButton from "./../custom-button/custom-button.component";

import { ReactComponent as Logo } from "./../../assets/google.svg";

import { signInwithGoogle } from "./../../firebase/firebase.utils";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>sign in with email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            label="email"
            required
            handleChange={this.handleChange}
          />

          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            label="password"
            handleChange={this.handleChange}
            required
          />
          <div className="buttons">
            <CustomButton type="submit">sign in</CustomButton>
            <CustomButton onClick={signInwithGoogle} isGoogleSignIn>
              <Logo className="google-icon"></Logo>
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
