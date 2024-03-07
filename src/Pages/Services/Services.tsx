import { Box, Center, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Layout from "../layout/Layout.tsx";

const padding = {
  padding: "15px",
};
const RawServiceComponent = () => {
  return (
    <Center
      w="100%"
      justifyContent={"center"}
      alignItems={"center"}
      flexDir={"column"}
    >
      <Flex
        bg={"ntl.100"}
        flex={1}
        w="100%"
        style={padding}
        borderRadius={"8px"}
      >
        <Flex justifyContent={"space-between"} alignItems={"center"} flex={1}>
          <Box>
            <Text>32,000 search result </Text>
          </Box>
          <Box>
            <Text>sort by </Text>
          </Box>
        </Flex>
      </Flex>
      <Flex flexDir={"row"} flex={4} w="100%">
        <Flex
          flex={1}
          bg={""}
          style={padding}
          flexDir={"column"}
          borderRadius={"8px"}
          gap={"10px"}
        >
          {/* <Text>Left</Text> */}
          <Box h="50px" bg={"ntl.400"} borderRadius={"8px"}>
            Search box
          </Box>

          <Box h="50px" bg={"ntl.400"} borderRadius={"8px"}>
            Categories
          </Box>
        </Flex>

        <Flex
          // m="0 5px"
          borderRadius={"9px"}
          flex={4}
          bg={"ntl.150"}
          style={padding}
          flexDir={"column"}
          gap={"10px"}
        >
          <Text>Right</Text>
          <Flex
            bg={"white"}
            flex={1}
            flexDir={"row"}
            gap={"10px"}
            style={padding}
          >
            <Flex flex={1} bg={"black"}>
              <Text>Photo</Text>
            </Flex>
            <Flex flex={4} flexDir={"column"}>
              <Text>name</Text>
              <Text>companyName</Text>
              <Text>description</Text>
              <Text>email</Text>
              <Text>phoneNumber</Text>
              <Text>address</Text>
              <Text>availability</Text>
              <Text>price</Text>
              <Text>website</Text>
            </Flex>
          </Flex>
          <Flex
            bg={"white"}
            flex={1}
            flexDir={"row"}
            gap={"10px"}
            style={padding}
          >
            <Flex flex={1} bg={"black"}>
              <Text>Photo</Text>
            </Flex>
            <Flex flex={4} flexDir={"column"}>
              <Text>name</Text>
              <Text>companyName</Text>
              <Text>description</Text>
              <Text>email</Text>
              <Text>phoneNumber</Text>
              <Text>address</Text>
              <Text>availability</Text>
              <Text>price</Text>
              <Text>website</Text>
            </Flex>
          </Flex>
          <Flex
            bg={"white"}
            flex={1}
            flexDir={"row"}
            gap={"10px"}
            style={padding}
          >
            <Flex flex={1} bg={"black"}>
              <Text>Photo</Text>
            </Flex>
            <Flex flex={4} flexDir={"column"}>
              <Text>name</Text>
              <Text>companyName</Text>
              <Text>description</Text>
              <Text>email</Text>
              <Text>phoneNumber</Text>
              <Text>address</Text>
              <Text>availability</Text>
              <Text>price</Text>
              <Text>website</Text>
            </Flex>
          </Flex>
          <Flex
            bg={"white"}
            flex={1}
            flexDir={"row"}
            gap={"10px"}
            style={padding}
          >
            <Flex flex={1} bg={"black"}>
              <Text>Photo</Text>
            </Flex>
            <Flex flex={4} flexDir={"column"}>
              <Text>name</Text>
              <Text>companyName</Text>
              <Text>description</Text>
              <Text>email</Text>
              <Text>phoneNumber</Text>
              <Text>address</Text>
              <Text>availability</Text>
              <Text>price</Text>
              <Text>website</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      {/* <Text>Services</Text> */}
    </Center>
  );
};

const Services = () => {
  return <Layout children={<RawServiceComponent />} />;
};

export default Services;
