import { ChakraProvider } from "@chakra-ui/react";

import React from "react";
import BrowserRouter from "../Pages/Router.tsx";

// ChakraWrapper to the App
const ChakraWrapper = () => {
  return (
    <ChakraProvider>
      <BrowserRouter />
    </ChakraProvider>
  );
};

export default ChakraWrapper;
