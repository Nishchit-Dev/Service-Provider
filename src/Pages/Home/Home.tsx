import { Box, Center, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import NavComponents from "../../ChakraComponents/Nav/navigatoin.tsx";
import Services from "./Service.tsx";
import Layout from "../layout/Layout.tsx";
import SimpleImageSlider from "react-simple-image-slider";

const ServiceDisplay = () => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    let width = document.getElementById("test")?.offsetWidth;
    setWidth(width ? width - 1 : 0);
  }, [document.getElementById("test")?.offsetWidth]);
  const images = [
    { url: "/Assets/Services/Packing&movers.png" },
    { url: "/Assets/Services/ElectricalServices.png" },
    { url: "/Assets/Services/HomeServices.png" },
    { url: "/Assets/Services/LaptopReparingServices.png" },
    { url: "/Assets/Services/PlumbingServices.png" },
  ];
  return (
    <Center flexDir={"column"} flex={1} id="test">
      <SimpleImageSlider
        width={`${width}px`}
        height={"700px"}
        autoPlay={true}
        autoPlayDelay={5}
        bgColor="transparent"
        images={images}
        style={{
          maxWidth: width,
        }}
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
