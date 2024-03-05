import React from "react";
import NavComponents from "../../ChakraComponents/Nav/navigatoin.tsx";
import { Flex } from "@chakra-ui/react";

const Wrapper = ({ child }) => {
  return (
    <Flex
      flex={1}
      h="max-content"
      minH={"90vh"}
      bg="ntl.150"
      borderRadius={"14px"}
      padding={"30px 25px"}
    >
      <Flex flex={1} bg="white" borderRadius={"7px"} bgImage={"/Assets/webEffectBg.svg"}>
        {child}
      </Flex>
    </Flex>
  );
};

export default function Layout({ children }) {
  return (
    <>
      <NavComponents Kids={<Wrapper child={children} /> || <></>} />
    </>
  );
}
