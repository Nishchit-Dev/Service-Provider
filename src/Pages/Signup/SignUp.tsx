import {
  Box,
  Button,
  Center,
  Flex,
  FormLabel,
  Input,
  Text,
  useStatStyles,
} from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Signup } from "./RequestSignup.ts";
import { Background } from "../../ChakraComponents/background/Background.tsx";

let InputStyle = {
  boxShadow: "none",
  border: "transparent",
  backgroundColor: "#F7F7F7",
  fontFamily: "Poppins",
  min: "2",
};
let _opacity = { opacity: 0.7 };

interface PhoneOptionsProps {
  code: string;
  setCode: Dispatch<SetStateAction<string>>;
}
const PhoneOptions: React.FC<PhoneOptionsProps> = ({ code, setCode }) => {
  const onHandleClick = (props) => {
    setCode(props);
  };
  const optText = (prop) => {
    return (
      <Text textAlign={"center"} fontFamily={"Poppins"}>
        {prop}
      </Text>
    );
  };
  return (
    <>
      <Menu isLazy>
        <MenuButton
          as={Button}
          style={InputStyle}
          rightIcon={<ChevronDownIcon />}
        >
          {code}
        </MenuButton>

        <MenuList border={"none"}>
          <MenuItem
            onClick={() => {
              onHandleClick("+91");
            }}
          >
            {optText("+91")}
          </MenuItem>
          <MenuItem
            onClick={() => {
              onHandleClick("+1");
            }}
          >
            {optText("+1")}
          </MenuItem>
          <MenuItem
            onClick={() => {
              onHandleClick("+81");
            }}
          >
            {optText("+81")}
          </MenuItem>
          <MenuItem
            onClick={() => {
              onHandleClick("+72");
            }}
          >
            {optText("+72 ")}
          </MenuItem>
          <MenuItem
            onClick={() => {
              onHandleClick("+102");
            }}
          >
            {optText("+102")}
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};
const SignUp: React.FC = () => {
  const [fName, setFName] = useState("");
  const [pswd, setPswd] = useState("");
  const [email, setEmail] = useState("");
  const [lName, setLName] = useState("");
  const [Phone, setPhone] = useState("");
  const [code, setCode] = useState("+91");

  // validation
  const [isEmailValid, setEmailValid] = useState(true);

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
    console.log(fName);
    console.log(lName);
    console.log(email);
    console.log(pswd);
    console.log(Phone);
    console.log(code);
    let info = {
      firstName: fName,
      lastName: lName,
      userType: "customer",
      email: email,
      password: pswd,
      phoneNumber: Phone,
      countryCode: code,
    };
    await Signup(info).then(() => {
      setTimeout(() => {
        window.location.replace("http://localhost:3001/login");
      }, 5000);
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
              SignUp
            </Text>

            <Flex flexDirection="column" gap={"10px"} maxW={"400px"}>
              <Flex gap={"10px"}>
                <Flex flexDirection="column">
                  <Text fontFamily={"Poppins"} opacity={"0.8"}>
                    First Name
                  </Text>
                  <Input
                    isRequired
                    isInvalid
                    placeholder="first name"
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
                    isInvalid
                    minLength={2}
                    errorBorderColor="red.100"
                    placeholder="last name"
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
                {/* {!isEmailValid ? (
                  <FormLabel color={"red.100"}>Invalid Password</FormLabel>
                ) : (
                  <FormLabel color={".100"}>Invalid Password</FormLabel>
                )} */}

                <Input
                  placeholder="Email"
                  isRequired
                  style={InputStyle}
                  _placeholder={_opacity}
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
                  _placeholder={_opacity}
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
                onClick={CallForRequest}
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
