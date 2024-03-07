import {
  Box,
  Button,
  Center,
  Flex,
  FormLabel,
  Input,
  Text,
  useStatStyles,
  useToast,
} from "@chakra-ui/react";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Signup } from "./RequestSignup.ts";
import { Background } from "../../ChakraComponents/background/Background.tsx";
import useSignupValidation from "./useSignupValidation.tsx";
import PhoneOptions from "./components/PhoneNumber.tsx";
import { SignUpErrors } from "./SignupAlerts.tsx";

let InputStyle = {
  boxShadow: "none",
  backgroundColor: "#F7F7F7",
  fontFamily: "Poppins",
  min: "2",
};
let _opacity = { opacity: 0.7 };

const SignUp: React.FC = () => {
  const toast = useToast({ position: "top" });

  const [fName, setFName] = useState("");
  const [pswd, setPswd] = useState("");
  const [email, setEmail] = useState("");
  const [lName, setLName] = useState("");
  const [Phone, setPhone] = useState("");
  const [code, setCode] = useState("+91");
  const { isFormValid, borderColor } = useSignupValidation(
    fName,
    lName,
    pswd,
    Phone,
    email
  );
  // validation
  const [isEmailValid, setEmailValid] = useState(true);
  const [errorFlag, setErrorFlag] = useState(false);
  useEffect(() => {
    console.log(fName);
  }, [fName]);

  useEffect(() => {
    let Regex =
      /^((?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,})$/;
    let flag = !Regex.test(pswd);
    console.log(flag);

    if (flag) {
      setEmailValid(!flag);
    }
  }, [pswd]);
  const CallForRequest = async () => {
    setErrorFlag(false);
    let info = {
      firstName: fName,
      lastName: lName,
      userType: "customer",
      email: email,
      password: pswd,
      phoneNumber: Phone,
      countryCode: code,
    };

    const examplePromise = Signup(info)
      .then((res) => {
        if (res.status) {
          setErrorFlag(false);
          setTimeout(() => {
            window.location.replace("http://localhost:3001/login");
          }, 5000);
          return res;
        } else {
          setErrorFlag(true);
          throw new Error(res.error?.message);
        }
      })
      .catch((error) => {
        setErrorFlag(true);
        throw error;
      });

    toast.promise(examplePromise, {
      success: {
        title: "Signup Success",
        description: "Redirecting to login page...",
      },
      error: {
        title: "Signup Error",
        description: "Email Already Exist",
      },
      loading: {
        title: "Signing up",
        description: "Please wait while we process your request",
      },
    });
  };
  const LinkToSignup: React.FC = () => {
    return (
      <Flex gap={"5px"} marginTop={"10px"}>
        <Text fontFamily={"Poppins"} fontSize={"14px"}>
          Already have an account?
        </Text>
        <Link to={"/login"}>
          <Text
            fontFamily={"Poppins"}
            fontSize={"14px"}
            color={"#4285F4"}
            cursor={"pointer"}
          >
            Login
          </Text>
        </Link>
      </Flex>
    );
  };
  return (
    <>
      <Background />

      <Center
        h="100vh"
        gap={"100px"}
        position={"absolute"}
        w={"100%"}
        top={"0vh"}
      >
        <Center borderRadius={"12px"} bg={"white"} boxShadow={"2xl"}>
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
              SignUp
            </Text>

            <Flex flexDirection="column" gap={"10px"} maxW={"400px"}>
              <Flex gap={"10px"}>
                <Flex flexDirection="column">
                  <Text fontFamily={"Poppins"} opacity={"0.8"}>
                    First Name
                  </Text>
                  <Input
                    placeholder="first name"
                    focusBorderColor={borderColor.fName}
                    borderColor={"#EDF2F7"}
                    _placeholder={_opacity}
                    color={"black"}
                    onChange={(e) => {
                      setFName(e.target.value);
                    }}
                    value={fName}
                    style={InputStyle}
                  />
                </Flex>
                <Flex flexDirection="column">
                  {" "}
                  <Text fontFamily={"Poppins"} opacity={"0.8"}>
                    Last Name
                  </Text>
                  <Input
                    focusBorderColor={borderColor.lName}
                    placeholder="last name"
                    borderColor={"#EDF2F7"}
                    _placeholder={_opacity}
                    onChange={(e) => {
                      setLName(e.target.value);
                    }}
                    value={lName}
                    color={"black"}
                    style={InputStyle}
                  />
                </Flex>
              </Flex>

              <Flex flexDirection="column" flex={1}>
                <Text fontFamily={"Poppins"} opacity={"0.8"}>
                  Email
                </Text>

                <Input
                  placeholder="Email"
                  isRequired
                  borderColor={"#EDF2F7"}
                  style={InputStyle}
                  _placeholder={_opacity}
                  focusBorderColor={borderColor.email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                  color={"black"}
                />
              </Flex>
              <Flex flexDirection="column" flex={1}>
                <Text fontFamily={"Poppins"} opacity={"0.8"}>
                  Password
                </Text>

                <Input
                  placeholder="password"
                  style={InputStyle}
                  borderColor={"#EDF2F7"}
                  _placeholder={_opacity}
                  focusBorderColor={borderColor.pswd}
                  isInvalid={isEmailValid}
                  color={"black"}
                  onChange={(e) => {
                    setPswd(e.target.value);
                  }}
                  value={pswd}
                  type="password"
                />
              </Flex>
            </Flex>
            <Flex flexDirection="column" flex={1}>
              <Text fontFamily={"Poppins"} opacity={"0.8"}>
                Phone no.
              </Text>
              <Flex gap={"10px"}>
                <PhoneOptions code={code} setCode={setCode} />
                <Input
                  placeholder="Phone no."
                  style={InputStyle}
                  borderColor={"#EDF2F7"}
                  focusBorderColor={borderColor.phone}
                  _placeholder={_opacity}
                  color={"black"}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  value={Phone}
                  type="Phone no."
                />
              </Flex>
            </Flex>

            <Flex marginTop={"20px"} flexDir={"column"}>
              {/* <Box> */}
              <Button
                fontFamily={"Poppins"}
                bg="pmy.100"
                color={"white"}
                onClick={() => {
                  if (isFormValid) {
                    CallForRequest();
                  }
                }}
                opacity={isFormValid ? 1 : 0.7}
                _hover={{ opacity: 0.8 }}
              >
                Sign up
              </Button>
              <LinkToSignup />
              {/* </Box> */}
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

export default SignUp;
