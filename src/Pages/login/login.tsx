import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Input,
  Text,
  background,
} from "@chakra-ui/react";
import React, { ReactElement } from "react";

let InputStyle = {
  boxShadow: "none",
  border: "transparent",
  bgColor: "snd.100",
  fontFamily: "poppins",
};
const Login: React.FC = () => {
  return (
    <>
      <Center h="100vh">
        <Center bg={"snd.400"} borderRadius={"12px"}>
          <Flex
            direction={"column"}
            justifyContent={"center"}
            alignContent={"center"}
            margin={"30px 10px"}
            padding={"10px"}
            gap={"10px"}
          >
            <Text
              textAlign={"center"}
              fontFamily={"poppins"}
              fontSize={"24px"}
              fontWeight={"700"}
            >
              {" "}
              Login
            </Text>

            {/* <Box>
              <Text fontFamily={"poppins"}>Flex</Text>
            </Box> */}

            <Flex>
              <Flex dir="column">
                <Box>
                  <Text opacity={0.7} fontFamily={"poppins"}>
                    Username
                  </Text>
                  <Input placeholder="Username" bg={"ntl.100"} style={InputStyle} />
                </Box>
              </Flex>
            </Flex>

            <Flex>
              <Flex dir="column">
                <Box>
                  <Text opacity={0.7} fontFamily={"poppins"}>
                    Password
                  </Text>

                  <Input
                    placeholder="password"
                    style={InputStyle}
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
                fontFamily={"poppins"}
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
    </>
  );
};

export default Login;
