import { Box, Flex, Img, Text } from "@chakra-ui/react";
import React from "react";
import { CallProfile } from "../../Pages/Profile/CallProfile.ts";
const Profile: React.FC = () => {
  return (
    <>
      <Flex
        p="5px 7px"
        flexDir={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"10px"}
        bg={"#FFD101"}
        boxShadow={"md"}
        cursor={"pointer"}
        borderRadius={"999px"}
        onClick={() => {
          // CallProfile();
          window.location.replace("http://localhost:3001/profile");
        }}
      >
        <Box>
          <Img src="/Assets/profile.svg" borderRadius={"999px"} w="30px" />
        </Box>
        <Box>
          <Text fontFamily={"Poppins"}>Profile</Text>
        </Box>
      </Flex>
    </>
  );
};

export default Profile;
