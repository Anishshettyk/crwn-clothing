import React from "react";

import { SpinnerOverlay, SpinnerContainer } from "./with-spinner.styles";

//wrapping WrappedComponent within withSpinner component
const withSpinner = (WrappedComponent) => {
  const spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return spinner;
};
export default withSpinner;
