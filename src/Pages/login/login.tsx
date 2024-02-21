import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Img,
  Input,
  Text,
  background,
} from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

let InputStyle = {
  boxShadow: "none",
  border: "transparent",
  backgroundColor: "#F7F7F7",
  fontFamily: "Poppins",
};
const Login: React.FC = () => {
  const LinkToSignup: React.FC = () => {
    const RedirectToLogin=()=>{

    }
    return (
      <Flex gap={"5px"} marginTop={"10px"}>
        <Text fontFamily={"Poppins"} fontSize={"14px"}>don't have an account?</Text>
        <Link to={"/signup"}><Text fontFamily={"Poppins"} fontSize={"14px"} color={"#4285F4"} cursor={"pointer"}>Signup</Text></Link>
      </Flex>
    );
  };
  return (
    <>
      <Center h="100vh" gap={"100px"}>
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
              Login
            </Text>

            {/* <Box>
              <Text fontFamily={"Poppins"}>Flex</Text>
            </Box> */}

            <Flex
              flexDirection="column"
              gap={"10px"}
              w="300px"
              marginTop={"30px"}
            >
              <Flex flexDirection="column">
                <Text fontFamily={"Poppins"} opacity={"0.8"}>
                  Username
                </Text>
                <Input
                  placeholder="Username"
                  color={"black"}
                  style={InputStyle}
                />
              </Flex>

              <Flex flexDirection="column" flex={1}>
                <Text fontFamily={"Poppins"} opacity={"0.8"}>
                  Password
                </Text>

                <Input
                  placeholder="password"
                  style={InputStyle}
                  color={"black"}
                  type="password"
                />
              </Flex>
            </Flex>

            <Flex marginTop={"20px"} flexDir={"column"}>
              <Button
                fontFamily={"Poppins"}
                bg="pmy.100"
                color={"white"}
                _hover={{ bg: "pmy.200" }}
              >
                Login
              </Button>
              <LinkToSignup />
            </Flex>
          </Flex>
        </Center>
        {/* <Flex w="auto">
          <Img src="/Assets/SignupRight.png" w="inherit" height={"100vh"} />
        </Flex> */}
      </Center>
    </>
  );
};

export default Login;
