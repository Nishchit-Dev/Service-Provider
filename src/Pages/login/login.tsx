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
  fontFamily: "Montserrat",
};
const Login: React.FC = () => {
  return (
    <>
      <Center h="100vh">
        <Center bg={"ntl.200"} borderRadius={"12px"} dropShadow={""}>
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

            <Box dir="column">
              <Flex dir="column">
                <Box>
                  <Text  fontFamily={"Montserrat"}>
                    Username
                  </Text>
                  <Input
                    placeholder="Username"
                    bg={"ntl.100"}
                    style={InputStyle}
                  />
                </Box>
              </Flex>
          
                <Flex dir="column">
                  <Box>
                    <Text fontFamily={"Montserrat"}>
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
             
            </Box>

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
    </>
  );
};

export default Login;
