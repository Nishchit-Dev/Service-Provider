import { Provider } from "react-redux";
import React from "react";
import Store from "./Store.ts";
import ChakraWrapper from "../ChakraComponents/ChakraWrapper.tsx";

// Redux Wrapper to ChakraWrapper 
// Redux => Chakra => App
const ReduxWrapper = () => {
  return (
    <Provider store={Store}>
      <ChakraWrapper />
    </Provider>
  );
};

export default ReduxWrapper;
