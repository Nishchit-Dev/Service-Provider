import { Box, Button, Center, Flex, IconButton, Text } from "@chakra-ui/react";
import React from "react";
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
import { HamburgerIcon } from "@chakra-ui/icons";
import Profile from "./profile.tsx";
import { _Cookies, useAuth } from "../../Hooks/useAuth.ts";
const NavMenu: React.FC = () => {
  const auth = useAuth().flag;
  return (
    <>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="outline"
        >
          Menu
        </MenuButton>
        <MenuList>
          <MenuItem
            onClick={() => {
              window.location.replace("http://localhost:3001/signup");
            }}
          >
            <Text>Signup</Text>
          </MenuItem>

          <MenuItem
            onClick={() => {
              _Cookies().resetCookies();
              window.location.replace("http://localhost:3001/login");
            }}
          >
            {!auth ? <Text>Login</Text> : <Text color={"red.100"}>Logout</Text>}
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};
const NavComponents: React.FC = () => {
  const auth = useAuth().flag;

  return (
    <>
      <Center w={"100%"} p="18px 10px">
        <Flex
          w="99%"
          p={"0 15px"}
          //   bg={"ntl.200"}
          borderRadius={"9px"}
          h="50px"
          justifyContent={auth ? "space-between" : "flex-start"}
          alignItems={"center"}
        >
          <NavMenu />
          {auth ? <Profile /> : null}
        </Flex>
      </Center>
    </>
  );
};

export default NavComponents;
