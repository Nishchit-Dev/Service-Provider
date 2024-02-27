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
import React, { ReactElement, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Signup } from "../Signup/RequestSignup.ts";
import { RequestLogin } from "./RequestLogin.ts";
import { _Cookies } from "../../Hooks/useAuth.ts";
import { Background } from "../../ChakraComponents/background/Background.tsx";
import { Regex } from "../../Utility/Regex.ts";
import useLoginValidaitons from "./useLogin.tsx";

let InputStyle = {
  boxShadow: "none",
  borderColor:"inherit",
  backgroundColor: "#F7F7F7",
  fontFamily: "Poppins",
};
const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { emailBorderColor, passBorderColor, isFormValid } =
    useLoginValidaitons(email, password);
  useEffect(() => {}, [emailBorderColor, passBorderColor]);

  const CallLogin = async () => {
    let info = {
      email: email,
      password: password,
    };
    RequestLogin(info).then((res) => {
      console.log(res);
      if (res.status) {
        _Cookies().saveOnCookies(res.jwt);
        _Cookies().tokenExist();
        setTimeout(() => {
          window.location.replace("http://localhost:3001");
        }, 3000);
      }
    });
  };
  const LinkToSignup: React.FC = () => {
    return (
      <Flex gap={"5px"} marginTop={"10px"}>
        <Text fontFamily={"Poppins"} fontSize={"14px"}>
          don't have an account?
        </Text>
        <Link to={"/signup"}>
          <Text
            fontFamily={"Poppins"}
            fontSize={"14px"}
            color={"#4285F4"}
            cursor={"pointer"}
          >
            Signup
          </Text>
        </Link>
      </Flex>
    );
  };
  const LinkToForgot: React.FC = () => {
    return (
      <Flex gap={"5px"} marginTop={"10px"}>
        <Text fontFamily={"Poppins"} fontSize={"14px"}>
          {/* Forgot password? */}
        </Text>
        <Link to={"/restpswd"}>
          <Text
            fontFamily={"Poppins"}
            fontSize={"14px"}
            color={"#4285F4"}
            cursor={"pointer"}
          >
            Forgot password?
          </Text>
        </Link>
      </Flex>
    );
  };
  return (
    <>
      <Background />
      <Center
        zIndex={99}
        h="100vh"
        gap={"100px"}
        position={"absolute"}
        w={"100%"}
        top={"0vh"}
      >
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

            <Flex flexDirection="column" gap={"10px"} w="300px">
              <Flex flexDirection="column">
                <Text fontFamily={"Poppins"} opacity={"0.8"}>
                  Email
                </Text>
                <Input
                  placeholder="Email"
                  id="email"
                  color={"black"}
                  style={InputStyle}
                  focusBorderColor={emailBorderColor}
                  onChange={(e) => {
                    setEmail(e.target.value.trim());
                  }}
                  value={email}
                />
              </Flex>

              <Flex flexDirection="column" flex={1}>
                <Text fontFamily={"Poppins"} opacity={"0.8"}>
                  Password
                </Text>

                <Input
                  placeholder="password"
                  style={InputStyle}
                  onChange={(e) => {
                    setPassword(e.target.value.trim());
                  }}
                  value={password}
                  color={"black"}
                  focusBorderColor={passBorderColor}
                  type="password"
                />
              </Flex>
            </Flex>

            <Flex marginTop={"20px"} flexDir={"column"}>
              <Button
                fontFamily={"Poppins"}
                bg="pmy.100"
                color={"white"}
                _hover={{ opacity: 0.8 }}
                onClick={() => {
                  if (isFormValid) {
                    CallLogin();
                  }
                }}
              >
                Login
              </Button>
              <LinkToForgot />
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
