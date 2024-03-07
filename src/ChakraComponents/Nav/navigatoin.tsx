import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  IconButton,
  Text,
} from "@chakra-ui/react";
import React, { Children } from "react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Profile from "./profile.tsx";
import { _Cookies, useAuth } from "../../Hooks/useAuth.ts";
import SearchBar from "./SearchBar/SearchBar.tsx";
import { Link } from "react-router-dom";
const NavMenu: React.FC = () => {
  const auth = useAuth().flag;
  return (
    <>
      <Menu>
        <Flex flexDir={"row"}>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
          >
            Menu
          </MenuButton>
          <Text
            marginLeft={"30px"}
            fontFamily={"Poppins"}
            fontWeight={"700"}
            fontSize={"24px"}
          >
            ServiceGennie
          </Text>
        </Flex>

        <SearchBar />
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

interface NavProps {
  Kids: any;
}

let InputStyle = {
  boxShadow: "none",
  fontSize: "24",
  fontFamily: "Poppins",
  padding: "5px 15px",
  transition: "1s",
  margin: "5px",
};

const routerSwitch = (input: string) => {
  switch (input) {
    case "My profile":
      return "/profile";
      break;
    case "Dashboard":
      return "/";
      break;
    case "Change password":
      return "/profile/changepassword";
      break;
  }
};

const _Text = ({ text, extra }: { text: string; extra?: object | null }) => {
  return (
    <Text
      width={"fit-content"}
      cursor={"pointer"}
      style={{ ...InputStyle, ...extra }}
      _hover={{ bg: `ntl.200`, borderRadius: "999" }}
    >
      <Link to={`${routerSwitch(text)}`}>{text}</Link>
    </Text>
  );
};

const SideMenuContent = () => {
  return (
    <Box padding={"20px 0px"} gap={"10px"}>
      <Box>
        <_Text text={"Dashboard"} />
      </Box>
      <Box>
        <_Text text={"My profile"} />
      </Box>
      <Box>
        <_Text text={"Notifications"} />
      </Box>
      <Box>
        <_Text text={"History"} />
      </Box>
      <Box>
        <_Text text={"Billings"} />
      </Box>
      <Box>
        <_Text text={"Change password"} />
      </Box>
      <Box>
        <_Text text={"Billings"} />
      </Box>

      <Box>
        <_Text text={"Logout"} />
      </Box>
      <Box>
        <_Text
          text={"Delete Account"}
          extra={{ color: "#FF6868", marginTop: "20px" }}
        />
      </Box>
    </Box>
  );
};
const NavComponents: React.FC<NavProps> = ({ Kids }) => {
  const auth = useAuth().flag;

  return (
    <>
      <Center w={"100%"} p="18px 10px">
        <Flex flex={1} w={"100%"}>
          <Flex
            w="99%"
            flex={1}
            p={"0 15px"}
            borderRadius={"9px"}
            h="50px"
            flexDirection={"column"}
          >
            <Flex
              flex={1}
              w={"100%"}
              justifyContent={auth ? "space-between" : "flex-start"}
              alignItems={"center"}
            >
              <NavMenu />
              {auth ? <Profile /> : null}
            </Flex>

            <Flex m="20px 0">
              {auth ? (
                <Flex flexDir={"row"}>
                  <SideMenuContent />
                </Flex>
              ) : (
                <></>
              )}

              <Flex flex={1}>
                {auth ? (
                  <Divider size={"10px"} orientation="vertical" m="0 10px" />
                ) : (
                  <></>
                )}
                {Kids}
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Center>
    </>
  );
};

const VendorSideMenuContent = () => {
  const routerSwitch = (input: string) => {
    switch (input) {
      case "My profile":
        return "/profile";
        break;
      case "Dashboard":
        return "/vendor/dashboard";
        break;
      case "Services":
        return "/vendor/services";
        break;
      case "Change password":
        return "/vendor/change-password";
        break;
      case "History":
        return "/vendor/history";
        break;
      default:
        return "/";
        break;
    }
  };
  const _Text = ({ text, extra }: { text: string; extra?: object | null }) => {
    return (
      <Text
        width={"fit-content"}
        cursor={"pointer"}
        style={{ ...InputStyle, ...extra }}
        _hover={{ bg: `ntl.200`, borderRadius: "999" }}
      >
        <Link to={`${routerSwitch(text)}`}>{text}</Link>
      </Text>
    );
  };
  return (
    <Box padding={"20px 0px"} gap={"10px"}>
      <Box>
        <_Text text={"Vendor"} />
      </Box>
      <Box>
        <_Text text={"My profile"} />
      </Box>
      <Box>
        <_Text text={"Services"} />
      </Box>
      <Box>
        <_Text text={"Notifications"} />
      </Box>
      <Box>
        <_Text text={"History"} />
      </Box>
      <Box>
        <_Text text={"Billings"} />
      </Box>
      <Box>
        <_Text text={"Change password"} />
      </Box>
      <Box>
        <_Text text={"Billings"} />
      </Box>

      <Box>
        <_Text text={"Logout"} />
      </Box>
      <Box>
        <_Text
          text={"Delete Account"}
          extra={{ color: "#FF6868", marginTop: "20px" }}
        />
      </Box>
    </Box>
  );
};
export const VendorNavComponent = ({ Kids }) => {
  const auth = useAuth().flag;
  return (
    <>
      <Center w={"100%"} p="18px 10px">
        <Flex flex={1} w={"100%"}>
          <Flex
            w="99%"
            flex={1}
            p={"0 15px"}
            borderRadius={"9px"}
            h="50px"
            flexDirection={"column"}
          >
            <Flex
              flex={1}
              w={"100%"}
              justifyContent={auth ? "space-between" : "flex-start"}
              alignItems={"center"}
            >
              <NavMenu />
              {auth ? <Profile /> : null}
            </Flex>

            <Flex m="20px 0">
              {auth ? (
                <Flex flexDir={"row"}>
                  <VendorSideMenuContent />
                </Flex>
              ) : (
                <></>
              )}

              <Flex flex={1}>
                {auth ? (
                  <Divider size={"10px"} orientation="vertical" m="0 10px" />
                ) : (
                  <></>
                )}
                {Kids}
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Center>
    </>
  );
};

export default NavComponents;
