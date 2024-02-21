import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import React from "react";
import BrowserRouter from "../Pages/Router.tsx";

const _theme = {
  colors: {
   
    pmy: {
      100: "#111111",
      200: "#6050BC",
    },
    snd: {
      100: "#23232B",
      200: "#919195",
      300: "#BDBDBF",
      400: "#E9E9EA",
    },
    ntl: {
      100: "#FEFEFE",
      200: "#E4E4E4",
    },
  },
};
const theme = extendTheme(_theme);
// ChakraWrapper to the App
const ChakraWrapper = () => {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter />
    </ChakraProvider>
  );
};

export default ChakraWrapper;
