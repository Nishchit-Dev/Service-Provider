import {
  Box,
  Button,
  Center,
  Flex,
  Input,
  Text,
  useStatStyles,
} from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
let InputStyle = {
  boxShadow: "none",
  border: "transparent",
  backgroundColor: "#F7F7F7",
  fontFamily: "Poppins",
};
let _opacity = { opacity: 0.7 };

const PhoneOptions: React.FC = () => {
  const [code, setCode] = useState("+91");
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
              SignUp
            </Text>

            <Flex
              flexDirection="column"
              gap={"10px"}
              marginTop={"30px"}
              maxW={"400px"}
            >
              <Flex gap={"10px"}>
                <Flex flexDirection="column">
                  <Text fontFamily={"Poppins"} opacity={"0.8"}>
                    First Name
                  </Text>
                  <Input
                    placeholder="first name"
                    _placeholder={_opacity}
                    color={"black"}
                    style={InputStyle}
                  />
                </Flex>
                <Flex flexDirection="column">
                  {" "}
                  <Text fontFamily={"Poppins"} opacity={"0.8"}>
                    Last Name
                  </Text>
                  <Input
                    placeholder="last name"
                    _placeholder={_opacity}
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
                  style={InputStyle}
                  _placeholder={_opacity}
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
                  color={"black"}
                  type="password"
                />
              </Flex>
            </Flex>
            <Flex flexDirection="column" flex={1}>
              <Text fontFamily={"Poppins"} opacity={"0.8"}>
                Phone no.
              </Text>
              <Flex gap={"10px"}>
                <PhoneOptions />
                <Input
                  placeholder="password"
                  style={InputStyle}
                  _placeholder={_opacity}
                  color={"black"}
                  type="Phone no."
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
                Sign up
              </Button>
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
