import styled, { css } from "styled-components";

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
};

const buttonStyles = css`
  background-color: black;
  color: white;
  border: none;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const googleSignInStyles = css`
  background-color: #ffffff;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #c0bdbd;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border-radius: 10px;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  margin: 10px;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 10px;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  ${getButtonStyles}
`;
