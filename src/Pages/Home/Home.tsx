import { Box, Center, Flex, Text } from "@chakra-ui/react";
import React from "react";
import NavComponents from "../../ChakraComponents/Nav/navigatoin.tsx";
import Services from "./Service.tsx";
import Layout from "../layout/Layout.tsx";
import SimpleImageSlider from "react-simple-image-slider";

const ServiceDisplay = () => {
  const images = [
    { url: "/Assets/Services/MoverFigma.png" },
    { url: "/Assets/Services/ElectricalServices.png" },
    { url: "/Assets/Services/HomeServices.png" },
    { url: "/Assets/Services/LaptopReparingServices.png" },
    { url: "/Assets/Services/PlumbingServices.png" },
  ];
  return (
    <Center w="100%" flexDir={"column"} flex={1} padding={"10px 0 0 0 "}   >
      <SimpleImageSlider
        width="1000px"
        height={"600px"}
        autoPlay={true}
        autoPlayDelay={5}
        bgColor="transparent"
        images={images}
        style={{minWidth:"600px"}}
        showBullets={false}
        slideDuration={3}
        showNavs={true}
      />
      <Services />
    </Center>
  );
};
const HomePage: React.FC = () => {
  return (
    <>
      <Layout children={<ServiceDisplay />} />
    </>
  );
};

export default HomePage;
