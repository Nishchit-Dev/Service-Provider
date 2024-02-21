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
  fontFamily: "Poppins",
};
const Login: React.FC = () => {
  return (
    <>
      <Center h="100vh">
        <Center borderRadius={"12px"} bg={"whitesmoke"} boxShadow={"xl"}>
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
              Login
            </Text>

            {/* <Box>
              <Text fontFamily={"Poppins"}>Flex</Text>
            </Box> */}

            <Flex flexDirection ="column" gap={"10px"}>
              <Flex dir="column">
                <Box>
                  <Text fontFamily={"Poppins"} opacity={"0.8"}>Username</Text>
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
                  <Text fontFamily={"Poppins"} opacity={"0.8"}>Password</Text>

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
                fontFamily={"Poppins"}
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
