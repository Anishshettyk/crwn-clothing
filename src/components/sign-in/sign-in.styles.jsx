import styled from "styled-components";
import { ReactComponent as Logo } from "./../../assets/google.svg";

export const SignInContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
`;

export const SignInTitle = styled.h2`
  margin: 10px 0;
`;

export const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const GoogleIcon = styled(Logo)`
  width: 32px;
  height: 32px;
`;
