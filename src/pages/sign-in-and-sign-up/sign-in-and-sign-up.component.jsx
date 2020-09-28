import React from "react";
import { SignInAndSignUpContainer } from "./sign-in-and-sign-up.styles";

import SignIn from "./../../components/sign-in/sign-in.components";
import SignUp from "./../../components/sign-up/sign-up.component";

const SignInAndSignUpPage = () => (
  <SignInAndSignUpContainer>
    <SignIn />
    <SignUp />
  </SignInAndSignUpContainer>
);

export default SignInAndSignUpPage;
