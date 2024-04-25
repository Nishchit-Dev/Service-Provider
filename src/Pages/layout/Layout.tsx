import React from "react";
import NavComponents, {
  VendorNavComponent,
} from "../../ChakraComponents/Nav/navigatoin.tsx";
import { Flex } from "@chakra-ui/react";
import { _Cookies } from "../../Hooks/useAuth.ts";

const Wrapper = ({ child }) => {
  return (
    <Flex
      flex={1}
      h="max-content"
      minH={"90vh"}
      bg="ntl.200"
      pb={"20px"}
      borderRadius={"14px"}
      padding={"30px 25px"}
    >
      <Flex
        flex={1}
        w="100%"
        bg="white"
        borderRadius={"7px"}
        bgImage={"/Assets/webEffectBg1.svg"}
      >
        {child}
      </Flex>
    </Flex>
  );
};

export default function Layout({ children }) {
  const userType = _Cookies().getUserType();


  return (
    <>
      {userType == "customer" ? (
        <>
          {" "}
          <NavComponents Kids={<Wrapper child={children} /> || <></>} />
        </>
      ) : (
        <>
          <VendorNavComponent Kids={<Wrapper child={children} /> || <></>} />
        </>
      )}
    </>
  );
}

export const VendorLayout = ({ childern }) => {
  return (
    <>
      <VendorNavComponent Kids={<Wrapper child={childern} /> || <></>} />
    </>
  );
};
