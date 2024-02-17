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

const Login: React.FC = () => {
  return (
    <>
      <Center h="100vh">
        <Center bg={"RGBA(0, 0, 0, 0.04)"} >
          <Flex
            direction={"column"}
            justifyContent={"center"}
            alignContent={"center"}
            margin={"30px 10px"}
            padding={"10px"}
            gap={"10px"}
          >
            <Box>
              <Text fontFamily={"poppins"}>Flex</Text>
            </Box>

            <Flex>
              <Flex dir="column">
                <Box>
                  <Text opacity={0.7} fontFamily={"poppins"}>Username</Text>
                  <Input placeholder="Username" fontFamily={"poppins"} />
                </Box>
              </Flex>
            </Flex>

            <Flex>
              <Flex dir="column">
                <Box>
                  <Text opacity={0.7} fontFamily={"poppins"}>Password</Text>

                  <Input placeholder="Username" fontFamily={"poppins"} />
                </Box>
              </Flex>
            </Flex>

            <Box>
              <Box>
                <Button fontFamily={"poppins"}>Login</Button>
              </Box>
            </Box>
          </Flex>
        </Center>
      </Center>
    </>
  );
};

export default Login;
