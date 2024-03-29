import React from "react";
import Layout, { VendorLayout } from "../../layout/Layout.tsx";
import { Box, Center, Divider, Flex, Icon, Img, Text } from "@chakra-ui/react";
import { ArrowUpIcon, CalendarIcon } from "@chakra-ui/icons";

const padding = {
  padding: "15px",
};
const RawContentVendorDashboard = () => {
  return (
    <>
      <Flex flex={1} style={padding}>
        <Flex alignItems={"baseline"} flexDir={"column"} flex={1}>
          <Flex flexDir={"column"} alignItems={"flex-start"}>
            <Text fontSize={"18px"}>Welcome Back</Text>
            <Text fontSize={"24px"} fontWeight={"700"}>
              Nishchit Malasana
            </Text>
          </Flex>
          <Divider m={"30px 10px"} />
          <Flex gap={"10px"} w={"100%"} flexWrap={"wrap"} >
            <Flex >
              <Flex
                flexDirection={"column"}
                flex={1}
                style={padding}
                bg={"white"}
                boxShadow={"xl"}
                minWidth={"250px"}
                borderRadius={"14px"}
              >
                <Flex
                  bg={"#E7F8F5"}
                  padding={"40px"}
                  borderRadius={"full"}
                  w={"fit-content"}
                >
                  <CalendarIcon boxSize={9} color={"#18b99b"} />
                </Flex>
                <Flex m={"30px 0px"} flexDir={"column"}>
                  <Text fontWeight={"600"} fontSize={"32px"}>
                    23,325
                  </Text>
                  <Text>Total Appointments</Text>
                </Flex>
                <Divider />

                <Flex
                  flexDir={"column"}
                  flex={1}
                  cursor={"pointer"}
                  m={"5px 0 0 0 "}
                  _hover={{ bg: "#E7F8F5", borderRadius: "10px" }}
                >
                  <Text m="10px" textAlign={"center"}>
                    Check Appointments
                  </Text>
                </Flex>
              </Flex>
            </Flex>
            <Flex
              flexDirection={"column"}
              style={padding}
              bg={"white"}
              boxShadow={"xl"}
              minWidth={"250px"}
              borderRadius={"14px"}
            >
              <Flex
                bg={"#F1EEFF"}
                padding={"40px"}
                borderRadius={"full"}
                w={"fit-content"}
              >
                <ArrowUpIcon
                  style={{ transform: "rotate(45deg)" }}
                  boxSize={9}
                  color={"#7357FB"}
                />
              </Flex>
              <Flex m={"30px 0"} flexDir={"column"}>
                <Text fontWeight={"600"} fontSize={"32px"}>
                  186
                </Text>
                <Text>Total Posted Services</Text>
              </Flex>
              <Divider />

              <Flex
                flexDir={"column"}
                flex={1}
                cursor={"pointer"}
                m={"5px 0 0 0 "}
                _hover={{ bg: "#F1EEFF", borderRadius: "10px" }}
              >
                <Text m="10px" textAlign={"center"}>
                  Check Services
                </Text>
              </Flex>
            </Flex>
            <Flex
              flexDirection={"column"}
              style={padding}
              bg={"white"}
              boxShadow={"xl"}
              minWidth={"250px"}
              borderRadius={"14px"}
            >
              <Flex bg={"#F1EEFF"} borderRadius={"full"} w={"fit-content"}>
                <Img w={"115px"} src="/Assets/discount.svg" color={"#7357FB"} />
              </Flex>
              <Flex m={"30px 0"} flexDir={"column"}>
                <Text fontWeight={"600"} fontSize={"32px"}>
                  Discount
                </Text>
                <Text>
                  Give Discounts on special
                  {/* <br /> events */}
                </Text>
              </Flex>
              <Divider />

              <Flex
                flexDir={"column"}
                m={"5px 0 0 0 "}
                _hover={{ bg: "#FFF2D2", borderRadius: "10px" }}
                flex={1}
                cursor={"pointer"}
              >
                <Text m="10px" textAlign={"center"}>
                  Check Discounts
                </Text>
              </Flex>
            </Flex>

            <Flex
              flexDirection={"column"}
              style={padding}
              bg={"white"}
              boxShadow={"xl"}
              minWidth={"250px"}
              borderRadius={"14px"}
            >
              <Flex
                bg={"#F1EEFF"}
                padding={"28px"}
                borderRadius={"full"}
                w={"fit-content"}
              >
                <Flex bg={"#F1EEFF"} borderRadius={"full"} w={"fit-content"}>
                  <Img w={"60px"} src="/Assets/invoice.svg" color={"#7357FB"} />
                </Flex>
              </Flex>
              <Flex m={"30px 0"} flexDir={"column"}>
                <Text fontWeight={"600"} fontSize={"32px"}>
                  Invoices
                </Text>
                <Text>See all Invoices</Text>
              </Flex>
              <Divider />

              <Flex
                flexDir={"column"}
                flex={1}
                cursor={"pointer"}
                m={"5px 0 0 0 "}
                _hover={{ bg: "#E0DFFF", borderRadius: "10px" }}
              >
                <Text m="10px" textAlign={"center"}>
                  Check Invoices
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

const LayoutWrapper = () => {
  return <Layout children={<RawContentVendorDashboard />} />;
};

const VendorDashboard = () => {
  return (
    <>
      <LayoutWrapper />
    </>
  );
};

export default VendorDashboard;
