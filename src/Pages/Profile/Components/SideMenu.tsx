import { Box, Flex, Img, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";

let InputStyle = {
  boxShadow: "none",
  fontSize: "24",
  fontFamily: "Poppins",
  padding: "5px 15px",
  transition: "1s",
  margin: "5px",
};
let HeadingInputStyle = {
  boxShadow: "none",
  fontSize: "24",
  fontFamily: "Poppins",
  padding: "0 10px",
  color: "ntl.400",
};

const _Text = ({ text, extra }: { text: string; extra?: object | null }) => {
  return (
    <Text
      width={"fit-content"}
      cursor={"pointer"}
      style={{ ...InputStyle, ...extra }}
      _hover={{ bg: `ntl.200`, borderRadius: "999" }}
    >
      {text}
    </Text>
  );
};

const SideMenuContent = () => {
  return (
    <Box padding={"20px 30px"} gap={"10px"}>
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

const MenuContent = () => {
  return (
    <>
      <Box padding={"20px 30px"}>
        <Box>
          <Text style={InputStyle} fontWeight={"700"} fontSize={"28px"}>
            My profile
          </Text>
        </Box>

        <Box
          border={"1px solid"}
          borderColor="ntl.200"
          borderRadius={"10px"}
          m="10px 0"
        >
          <Flex flexDir={"row"} padding={"20px 30px"} alignItems={"center"}>
            <Box>
              <Img
                src="/Assets/profile.svg"
                borderRadius={"full"}
                maxW={"120px"}
              />
            </Box>
            <Box>
              <Text style={InputStyle} fontSize={"24px"} fontWeight={"600"}>
                Nishchit Malasana
              </Text>
              <Text style={InputStyle}>Role or Business name</Text>
              <Text style={InputStyle}>Location</Text>
            </Box>
          </Flex>
        </Box>

        <Flex
          border={"1px solid"}
          borderColor="ntl.200"
          borderRadius={"10px"}
          m="10px 0"
          w={"100%"}
        >
          <Flex
            flexDir={"row"}
            padding={"20px 30px"}
            alignItems={"center"}
            gap={"10px"}
            flex={1}
            w={"100%"}
          >
            <Flex flexDir={"column"} w="100%">
              <Box margin={"10px 0"}>
                <Text style={InputStyle} fontWeight={"700"} fontSize={"18px"}>
                  Personal Information
                </Text>
              </Box>
              <Flex
                flex={1}
                flexDirection={"column"}
                columnGap={"150px"}
                wrap={"wrap"}
                justifyContent={"space-between"}
              >
                <Flex
                  flex={1}
                  justifyContent={"space-between"}
                  flexWrap={"wrap"}
                >
                  <Flex flexDir={"column"} flex={"1 1 500px"}>
                    <Text style={HeadingInputStyle} color={"ntl.400"}>
                      FirstName
                    </Text>
                    <Text style={InputStyle}>Nishchit</Text>
                  </Flex>
                  <Flex flexDir={"column"} flex={"1 1 500px"}>
                    <Text style={HeadingInputStyle} color={"ntl.400"}>
                      LastName
                    </Text>
                    <Text style={InputStyle}>Malasana</Text>
                  </Flex>
                  <Flex flexDir={"column"} flex={"1 1 500px"}>
                    <Text style={HeadingInputStyle} color={"ntl.400"}>
                      Email
                    </Text>
                    <Text style={InputStyle}>Email@gmail.com</Text>
                  </Flex>
                  <Flex flexDir={"column"} flex={"1 1 500px"}>
                    <Text style={HeadingInputStyle} color={"ntl.400"}>
                      Phone
                    </Text>
                    <Text style={InputStyle}>+1123456789</Text>
                  </Flex>
                  <Flex flexDir={"column"} flex={"1 1 500px"}>
                    <Text style={HeadingInputStyle} color={"ntl.400"}>
                      Bio
                    </Text>
                    <Text style={InputStyle}>+1123456789</Text>
                  </Flex>
                </Flex>

                <Flex flex={2} wrap={"wrap"}></Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        <Flex
          border={"1px solid"}
          borderColor="ntl.200"
          borderRadius={"10px"}
          m="10px 0"
          w={"100%"}
        >
          <Flex
            flexDir={"row"}
            padding={"20px 30px"}
            alignItems={"center"}
            gap={"10px"}
            flex={1}
            w={"100%"}
          >
            <Flex flexDir={"column"} w="100%">
              <Box margin={"10px 0"}>
                <Text style={InputStyle} fontWeight={"700"} fontSize={"18px"}>
                  Address
                </Text>
              </Box>
              <Flex
                flex={1}
                flexDirection={"column"}
                columnGap={"150px"}
                wrap={"wrap"}
                justifyContent={"space-between"}
              >
                <Flex
                  flex={1}
                  justifyContent={"space-between"}
                  flexWrap={"wrap"}
                >
                  <Flex flexDir={"column"} flex={"1 1 500px"}>
                    <Text style={HeadingInputStyle} color={"ntl.400"}>
                      Address line 1
                    </Text>
                    <Text style={InputStyle}>417 Summit Ave</Text>
                  </Flex>
                  <Flex flexDir={"column"} flex={"1 1 500px"}>
                    <Text style={HeadingInputStyle} color={"ntl.400"}>
                      Address line 2
                    </Text>
                    <Text style={InputStyle}>Apt no 213</Text>
                  </Flex>
                  <Flex flexDir={"column"} flex={"1 1 500px"}>
                    <Text style={HeadingInputStyle} color={"ntl.400"}>
                      Country
                    </Text>
                    <Text style={InputStyle}>United States</Text>
                  </Flex>
                  <Flex flexDir={"column"} flex={"1 1 500px"}>
                    <Text style={HeadingInputStyle} color={"ntl.400"}>
                      City/State
                    </Text>
                    <Text style={InputStyle}>Arlington</Text>
                  </Flex>
                  <Flex flexDir={"column"} flex={"1 1 500px"}>
                    <Text style={HeadingInputStyle} color={"ntl.400"}>
                      Zip code
                    </Text>
                    <Text style={InputStyle}>76013</Text>
                  </Flex>
                </Flex>
                <Flex flex={2} wrap={"wrap"}></Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export const ProfileTabs = () => {
  return (
    <>
      <Flex
        flexDir={"column"}
        // padding={"20px"}
        flex={1}
        // bg={"ntl.150"}
        h={"auto"}
        // margin={"30px"}
        borderRadius={"10px"}
      >
        <Flex flex={1} bg="ntl.100" padding={"20px 10px"} borderRadius={"9px"}>
          <Box flex={1}>
            <MenuContent />
          </Box>
        </Flex>
      </Flex>
    </>
  );
};
