import { Box, Button, Center, Flex, Input, Text } from "@chakra-ui/react";
import React from "react";

let InputStyle = {
  boxShadow: "none",
  border: "transparent",
  backgroundColor: "#F7F7F7",
  fontFamily: "Poppins",
};
const RestPassword: React.FC = () => {
  return (
    <>
      <Center h="100vh">
        <Center borderRadius={"12px"} boxShadow={"2xl"}>
          <Flex
            direction={"column"}
            justifyContent={"center"}
            alignContent={"center"}
            margin={"60px 25px"}
            padding={"10px"}
            gap={"20px"}
          >
            <Text
              textAlign={"center"}
              fontFamily={"Poppins"}
              fontSize={"24px"}
              fontWeight={"700"}
            >
              {" "}
              Rest Password
            </Text>

            {/* <Box>
          <Text fontFamily={"Poppins"}>Flex</Text>
        </Box> */}

            <Flex flexDirection="column" gap={"10px"} w="300px" marginTop={"30px"}>
              <Flex flexDir="column" flex={1}>
                <Text fontFamily={"Poppins"} opacity={"0.8"}>
                  New Password
                </Text>
                <Input
                  placeholder="New Password"
                  color={"black"}
                  style={InputStyle}
                />
              </Flex>

              <Flex flexDir="column" flex={1}>
                <Text fontFamily={"Poppins"} opacity={"0.8"}>
                  Confirm Password
                </Text>

                <Input
                  placeholder="confirm Password"
                  style={InputStyle}
                  color={"black"}
                  type="password"
                />
              </Flex>
            </Flex>

            <Flex marginTop={"20px"}>
              {/* <Box> */}
              <Button
                flex={1}
                fontFamily={"Poppins"}
                bg="pmy.100"
                color={"white"}
                _hover={{ bg: "pmy.200" }}
              >
                Rest Password
              </Button>
              {/* </Box> */}
            </Flex>
          </Flex>
        </Center>
      </Center>
    </>
  );
};

export default RestPassword;
