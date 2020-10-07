import React from "react";

import Spinner from "./../spinner/spinner.component";

//wrapping WrappedComponent within withSpinner component
const withSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
  return isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />;
};

export default withSpinner;
