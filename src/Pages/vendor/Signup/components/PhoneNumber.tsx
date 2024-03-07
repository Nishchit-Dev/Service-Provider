import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList,Text } from "@chakra-ui/react";
import React, { Dispatch, SetStateAction } from "react";
let InputStyle = {
  boxShadow: "none",
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
  const onHandleClick = (props: string) => {
    setCode(props);
  };
  const optText = (prop: string) => {
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

export default PhoneOptions