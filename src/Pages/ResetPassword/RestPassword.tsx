import { Box, Button, Center, Flex, Input, Text } from "@chakra-ui/react";
import React from "react";

let InputStyle = {
  boxShadow: "none",
  border: "transparent",
  bgColor: "snd.100",
  fontFamily: "Montserrat",
};
const RestPassword: React.FC = () => {
  return (
    <Center h="100vh">
      <Center borderRadius={"12px"}>
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
            fontFamily={"Montserrat"}
            fontSize={"24px"}
            fontWeight={"700"}
          >
            {" "}
            Login
          </Text>

          {/* <Box>
              <Text fontFamily={"Montserrat"}>Flex</Text>
            </Box> */}

          <Flex flexDirection="column" gap={"10px"}>
            <Flex dir="column">
              <Box>
                <Text fontFamily={"Montserrat"}>Username</Text>
                <Input
                  placeholder="Username"
                  color={"black"}
                  bg={"ntl.100"}
                  style={InputStyle}
                />
              </Box>
            </Flex>

            <Flex dir="column">
              <Box>
                <Text fontFamily={"Montserrat"}>Password</Text>

                <Input
                  placeholder="password"
                  style={InputStyle}
                  color={"black"}
                  bg={"ntl.100"}
                  type="password"
                />
              </Box>
            </Flex>
          </Flex>

          <Flex>
            {/* <Box> */}
            <Button
              flex={1}
              fontFamily={"Montserrat"}
              bg="pmy.100"
              color={"white"}
              _hover={{ bg: "pmy.200" }}
            >
              Login
            </Button>
            {/* </Box> */}
          </Flex>
        </Flex>
      </Center>
    </Center>
  );
};

export default RestPassword;
