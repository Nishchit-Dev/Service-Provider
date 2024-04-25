import { Box, Button, Flex, Img, Text } from "@chakra-ui/react";
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
      <Flex
        margin={"50px 0"}
        flexDirection={"column"}
        gap={"50px"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Flex
          flexDirection={"row"}
          gap={"30px"}
          justifyContent={"flex-start"}
          justifyItems={"flex-start"}
        >
          <Flex
            w="200px"
            borderRadius={"10px"}
            bg={"ntl.300"}
            padding={"20px"}
            cursor={"pointer"}
            gap={"20px"}
            justifyContent={"flex-start"}
            alignItems={"center"}
            // w="150px"
            flexDirection={"column"}
          >
            <Box
              h="120px"
              w="120px"
              bg={"#A0ACAC"}
              borderRadius={"full"}
              backgroundSize={"250px"}
              backgroundImage={`url("/Assets/Services/Electrical.png")`}
              style={{ backgroundPositionX: "center" }}
              onClick={()=>{
                window.location.replace("/service")
              }}
            ></Box>
            <Text
              textAlign={"center"}
              wordBreak={"break-all"}
              style={InputStyle}
            >
              Home Appliances
              <br /> & Electrical
            </Text>
          </Flex>
          <Flex
            borderRadius={"10px"}
            bg={"ntl.300"}
            padding={"20px"}
            w="200px"
            cursor={"pointer"}
            gap={"20px"}
            justifyContent={"flex-start"}
            alignItems={"center"}
            flexDirection={"column"}
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
            borderRadius={"10px"}
            bg={"ntl.300"}
            
            w="200px"
            padding={"20px"}
            cursor={"pointer"}
            gap={"20px"}
            flexDirection={"column"}
            justifyContent={"flex-start"}
            backdropFilter={"blur(0px)"}
            alignItems={"center"}
          >
            <Box
              h="120px"
              w="120px"
              bg={"#7376A6"}
              borderRadius={"full"}
              backgroundSize={"220px"}
              backgroundImage={`url("/Assets/Services/LaptopRepair.png")`}
              backgroundRepeat={"no-repeat"}
              style={{ backgroundPositionX: "-20px" }}
            ></Box>
            <Text style={InputStyle}>Computer Repair</Text>
          </Flex>

          <Flex
            borderRadius={"10px"}
            bg={"ntl.300"}
            w="200px"
            padding={"20px"}
            cursor={"pointer"}
            textAlign={"center"}
            gap={"20px"}
            justifyContent={"flex-start"}
            alignItems={"center"}
            flexDirection={"column"}
          >
            <Box
              h="120px"
              w="120px"
              bg={"#EAB173"}
              borderRadius={"full"}
              backgroundSize={"250px"}
              backgroundImage={`url("/Assets/Services/mover.png")`}
              style={{ backgroundPositionX: "center" }}
            ></Box>
            <Text style={InputStyle}> Packaging and Moving </Text>
          </Flex>
        </Flex>
        <Flex flexDirection={"row"} gap={"30px"}>
          <Flex
            borderRadius={"10px"}
            bg={"ntl.300"}
            padding={"20px"}
            w="200px"
            cursor={"pointer"}
            gap={"20px"}
            flexDirection={"column"}
            justifyContent={"flex-start"}
            alignItems={"center"}
          >
            <Box
              h="120px"
              w="120px"
              bg={"#FCA216"}
              borderRadius={"full"}
              backgroundSize={"250px"}
              backgroundImage={`url("/Assets/Services/plumbing.png")`}
              style={{ backgroundPositionX: "center" }}
            ></Box>
            <Text style={InputStyle}>plumbing</Text>
          </Flex>
          <Flex
            borderRadius={"10px"}
            bg={"ntl.300"}
            w="200px"
            padding={"20px"}
            cursor={"pointer"}
            gap={"20px"}
            flexDirection={"column"}
            justifyContent={"flex-start"}
            alignItems={"center"}
          >
            <Box
              h="120px"
              w="120px"
              bg={"#E6E6E6"}
              borderRadius={"full"}
              backgroundSize={"250px"}
              backgroundImage={`url("/Assets/Services/tutoring.png")`}
              style={{ backgroundPositionX: "center" }}
            ></Box>
            <Text style={InputStyle}>Tutoring</Text>
          </Flex>
          <Flex
            borderRadius={"10px"}
            bg={"#5C5C59"}
            w="200px"
            padding={"20px"}
            cursor={"pointer"}
            gap={"20px"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Flex
              justifyContent={"center"}
              alignItems={"center"}
              h="120px"
              textAlign={"center"}
              color={"white"}
              gap={"20px"}
              w="120px"
              flexDir={"column"}
              backgroundSize={"250px"}
              style={{ backgroundPositionX: "center" }}
            >
              <Text style={InputStyle}>Explore more categories</Text>
              <Button>Explore More</Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Services;
