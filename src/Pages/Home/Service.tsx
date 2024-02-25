import { Box, Flex, Img, Text } from "@chakra-ui/react";
import React from "react";
let InputStyle = {
  boxShadow: "none",
  fontweight:700,
  fontSize:"24",
  fontFamily: "Poppins",
};
const Services: React.FC = () => {
  return (
    <>
      <Flex flexDirection={"row"} gap={"50px"}>
        <Flex flexDirection={"column"} justifyContent={"flex-start"} justifyItems={"flex-start"}>
          <Flex gap={"20px"} justifyContent={"flex-start"} alignItems={"center"}>
            <Img src={"/Assets/Services/Electrical.png"} h="120px" w="120px" />
            <Text style={InputStyle}>Home Appliances and Electrical</Text>
          </Flex>
          <Flex gap={"20px"} justifyContent={"flex-start"} alignItems={"center"}>
            <Img
              src={"/Assets/Services/HomeCleaning.png"}
              h="120px"
              w="120px"
            />
            <Text style={InputStyle}>Home Cleaning</Text>
          </Flex>
          <Flex gap={"20px"} justifyContent={"flex-start"} alignItems={"center"}>
            <Img
              src={"/Assets/Services/LaptopRepair.png"}
              h="120px"
              w="120px"
            />
            <Text style={InputStyle}>Computer Repair</Text>
          </Flex>
        </Flex>
        <Flex flexDirection={"column"}>
          <Flex gap={"20px"} justifyContent={"flex-start"} alignItems={"center"}>
            <Img src={"/Assets/Services/mover.png"} h="120px" w="120px" />
            <Text style={InputStyle}> Packaging and Moving </Text>
          </Flex>
          <Flex gap={"20px"} justifyContent={"flex-start"} alignItems={"center"}>
            <Img src={"/Assets/Services/plumbing.png"} h="120px" w="120px" />
            <Text style={InputStyle}>plumbing</Text>
          </Flex>
          <Flex gap={"20px"} justifyContent={"flex-start"} alignItems={"center"}>
            <Img src={"/Assets/Services/tutoring.png"} h="120px" w="120px" />
            <Text style={InputStyle}>Tutoring</Text>
          </Flex>

        </Flex>
      </Flex>
    </>
  );
};

export default Services;
