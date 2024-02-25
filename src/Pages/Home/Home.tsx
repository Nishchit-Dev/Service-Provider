import { Box, Center, Flex, Text } from "@chakra-ui/react";
import React from "react";
import NavComponents from "../../ChakraComponents/Nav/navigatoin.tsx";
import Services from "./Service.tsx";

const HomePage: React.FC = () => {
  return (
    <>
      <NavComponents />
      <Center h="100vh">
        <Services />
      </Center>
    </>
  );
};

export default HomePage;
