import { Box, Center, Flex, Text } from "@chakra-ui/react";
import React from "react";
import NavComponents from "../../ChakraComponents/Nav/navigatoin.tsx";

const HomePage: React.FC = () => {
  return (
    <>
      <NavComponents />
      <Center h="90vh">
        <Text>HomePage</Text>
      </Center>
    </>
  );
};

export default HomePage;
