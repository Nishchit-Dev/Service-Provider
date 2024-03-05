import { Box, Flex, Img, Text } from "@chakra-ui/react";
import React from "react";
let InputStyle = {
  boxShadow: "none",
  fontweight: 700,
  fontSize: "24",
  fontFamily: "Poppins",
};
const Services: React.FC = () => {
  return (
    <>
      <Flex flexDirection={"row"} gap={"50px"}>
        <Flex
          flexDirection={"column"}
          justifyContent={"flex-start"}
          justifyItems={"flex-start"}
        >
          <Flex
            gap={"20px"}
            justifyContent={"flex-start"}
            alignItems={"center"}
          >
            <Box
              h="120px"
              w="120px"
              bg={"#61B87A"}
              borderRadius={"full"}
              backgroundSize={"250px"}
              backgroundImage={`url("/Assets/Services/Electrical.png")`}
              style={{ backgroundPositionX: "center" }}
            ></Box>
            <Text style={InputStyle}>Home Appliances and Electrical</Text>
          </Flex>
          <Flex
            gap={"20px"}
            justifyContent={"flex-start"}
            alignItems={"center"}
          >
            <Box
              h="120px"
              w="120px"
              bg={"#61B87A"}
              borderRadius={"full"}
              backgroundSize={"250px"}
              backgroundImage={`url("/Assets/Services/HomeCleaning.png")`}
              style={{ backgroundPositionX: "center" }}
            ></Box>
            <Text style={InputStyle}>Home Cleaning</Text>
          </Flex>
          <Flex
            gap={"20px"}
            justifyContent={"flex-start"}
            alignItems={"center"}
          >
            <Box
              h="120px"
              w="120px"
              bg={"#61B87A"}
              borderRadius={"full"}
              backgroundSize={"220px"}
              backgroundImage={`url("/Assets/Services/LaptopRepair.png")`}
              backgroundRepeat={"no-repeat"}
              style={{ backgroundPositionX: "-20px" }}
            ></Box>
            <Text style={InputStyle}>Computer Repair</Text>
          </Flex>
        </Flex>
        <Flex flexDirection={"column"}>
          <Flex
            gap={"20px"}
            justifyContent={"flex-start"}
            alignItems={"center"}
          >
            <Box
              h="120px"
              w="120px"
              bg={"#61B87A"}
              borderRadius={"full"}
              backgroundSize={"250px"}
              backgroundImage={`url("/Assets/Services/mover.png")`}
              style={{ backgroundPositionX: "center" }}
            ></Box>
            <Text style={InputStyle}> Packaging and Moving </Text>
          </Flex>
          <Flex
            gap={"20px"}
            justifyContent={"flex-start"}
            alignItems={"center"}
          >
            <Box
              h="120px"
              w="120px"
              bg={"#61B87A"}
              borderRadius={"full"}
              backgroundSize={"250px"}
              backgroundImage={`url("/Assets/Services/plumbing.png")`}
              style={{ backgroundPositionX: "center" }}
            ></Box>
            <Text style={InputStyle}>plumbing</Text>
          </Flex>
          <Flex
            gap={"20px"}
            justifyContent={"flex-start"}
            alignItems={"center"}
          >
            <Box
              h="120px"
              w="120px"
              bg={"#61B87A"}
              borderRadius={"full"}
              backgroundSize={"250px"}
              backgroundImage={`url("/Assets/Services/tutoring.png")`}
              style={{ backgroundPositionX: "center" }}
            ></Box>
            <Text style={InputStyle}>Tutoring</Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Services;
