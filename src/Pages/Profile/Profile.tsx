import React from "react";
import useFetchProfile from "../../Hooks/useFetchProfile.ts";
import {
  Box,
  Flex,
  Text,
  Input,
  StepIndicatorProps,
  Center,
} from "@chakra-ui/react";
import NavComponents from "../../ChakraComponents/Nav/navigatoin.tsx";
let InputStyle = {
  boxShadow: "none",
  border: "transparent",
  backgroundColor: "#F7F7F7",
  fontFamily: "Poppins",
};
let _opacity = { opacity: 0.7 };
interface profile {
  countryCode: string;
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  phoneNumber: number;
  userType: string;
}
const ProfileTab: React.FC = () => {
  const userData: profile | null = useFetchProfile().userData;
  return (
    <>
      <NavComponents />
      <Center h="100vh"  >
        <Flex padding={"40px 50px"} bg={"ntl.200"} borderRadius={"9px"}> 
          <Box>
            <Flex flexDirection="column" flex={1}>
              <Text fontFamily={"Poppins"} opacity={"0.8"}>
                Id
              </Text>

              <Input
                placeholder="Email"
                style={InputStyle}
                disabled
                _placeholder={_opacity}
                value={userData?.id}
                color={"black"}
              />
            </Flex>
            <Flex flexDirection="column" flex={1}>
              <Text fontFamily={"Poppins"} opacity={"0.8"}>
                Email
              </Text>

              <Input
                placeholder="Email"
                style={InputStyle}
                disabled
                _placeholder={_opacity}
                value={userData?.email}
                color={"black"}
              />
            </Flex>
            <Flex flexDirection="column" flex={1}>
              <Text fontFamily={"Poppins"} opacity={"0.8"}>
                First Name
              </Text>

              <Input
                placeholder="Email"
                style={InputStyle}
                disabled
                _placeholder={_opacity}
                value={userData?.firstName}
                color={"black"}
              />
            </Flex>
            <Flex flexDirection="column" flex={1}>
              <Text fontFamily={"Poppins"} opacity={"0.8"}>
                Last Name
              </Text>

              <Input
                placeholder="Email"
                style={InputStyle}
                disabled
                _placeholder={_opacity}
                value={userData?.lastName}
                color={"black"}
              />
            </Flex>
            <Flex flexDirection="column" flex={1}>
              <Text fontFamily={"Poppins"} opacity={"0.8"}>
                Phone no
              </Text>

              <Input
                placeholder="Email"
                style={InputStyle}
                disabled
                _placeholder={_opacity}
                value={`${userData?.countryCode}${userData?.phoneNumber}`}
                color={"black"}
              />
            </Flex>
            <Flex flexDirection="column" flex={1}>
              <Text fontFamily={"Poppins"} opacity={"0.8"}>
                User Type
              </Text>

              <Input
                placeholder="Email"
                style={InputStyle}
                disabled
                _placeholder={_opacity}
                value={userData?.userType}
                color={"black"}
              />
            </Flex>
          </Box>
        </Flex>
      </Center>
    </>
  );
};

export default ProfileTab;
