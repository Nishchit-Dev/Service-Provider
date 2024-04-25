import { TimeIcon, CalendarIcon, EmailIcon, PhoneIcon, AtSignIcon, ExternalLinkIcon, StarIcon } from "@chakra-ui/icons";
import { useDisclosure, Flex, Button, Collapse } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

import React from "react";
const HistoryContainer = ({
    data,
    setAcceptedArray,
  }: {
    data?: ServiceDataType | null;
    setAcceptedArray: any;
  }) => {
    const { isOpen, onToggle } = useDisclosure();
    const [loadingFlag, setLoadingFlag] = useState(false);
    const [flag, setFlag] = useState(false);
    return (
      <>
        <Flex
          m={"10px"}
          flexDir={"column"}
          cursor={"pointer"}
          bg={"transparent"}
          backdropFilter={"blur(2px)"}
          hidden={flag}
        >
          <Flex
            flex={1}
            borderRadius={"9px"}
            bg={"snd.100"}
            color={"pmy.300"}
            justifyContent={"space-between"}
          >
            <Flex
              flex={1}
              p="10px"
              justifyContent={"space-between"}
              alignItems={"center"}
              onClick={onToggle}
            >
              <Text fontSize={"26px"} fontWeight={"600"}>
                {data?.name}
              </Text>
              <Flex gap={"10px"} flexDirection={"column"} color={"white"}>
                <Flex
                  gap={"5px"}
                  flexDir={"row"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <TimeIcon />
                  <Text fontWeight={"600"}>{data?.Booking}</Text>
                </Flex>
                <Flex
                  alignItems={"center"}
                  justifyContent={"center"}
                  gap={"10px"}
                >
                  <CalendarIcon />
                  <Text fontWeight={"600"}>{data?.time}</Text>
                </Flex>
              </Flex>
            </Flex>
            <Flex bg={"ntl.100"} justifyContent={"center"} alignItems={"center"}>
              <Button
                bg={"green.100"}
                color={"white"}
                flex={1}
                h={"100%"}
                borderRadius={"0px"}
                onClick={() => {
                  setFlag(true);
                  console.log(data);
                  axios.post(
                    "http://localhost:3000/services/send-service-status",
                    {
                      email: "nishchitpatel84@gmail.com",
                      status: "Accepted",
                    }
                  );
                  setFlag(true)
                  setAcceptedArray((_data) => {
                    return [..._data, data];
                  });
                }}
              >
                {" "}
                Accept
              </Button>
              <Button
                bg={"red.100"}
                color={"white"}
                flex={1}
                h={"100%"}
                borderRadius={"0px"}
                onClick={() => {
                  axios.post(
                    "http://localhost:3000/services/send-service-status",
                    {
                      email: "nishchitpatel84@gmail.com",
                      status: "declined",
                    }
                  );
                  setFlag(true)
  
                }}
              >
                Decline
              </Button>
            </Flex>
          </Flex>
          <Collapse in={isOpen} animateOpacity>
            <Flex p="10px" flex={1}>
              <Flex gap={"30px"}>
                <Flex flexDirection={"column"} gap={"5px"}>
                  <Text fontWeight={"700"} fontSize={"20px"}>
                    {data?.name}
                  </Text>
                  <Text color={"ntl.400"}>{data?.companyName}</Text>
                  <Flex gap={"10px"} flexDir={"row"} alignItems={"center"}>
                    <TimeIcon />
                    <Text color={"ntl.400"}>
                      {data?.time} {data?.Booking}
                    </Text>
                  </Flex>
  
                  <Flex gap={"10px"} flexDir={"row"} alignItems={"center"}>
                    <EmailIcon />
                    <Text color={"ntl.400"}> {data?.email}</Text>
                  </Flex>
  
                  <Flex gap={"10px"} flexDir={"row"} alignItems={"center"}>
                    <PhoneIcon />
                    <Text color={"ntl.400"}> {data?.phoneNumber}</Text>
                  </Flex>
                </Flex>
                <Flex flexDirection={"column"} gap={"5px"}>
                  <Flex gap={"10px"} flexDir={"row"} alignItems={"center"}>
                    <AtSignIcon />
                    <Text color={"ntl.400"}>{data?.address}</Text>
                  </Flex>
                  <Flex
                    gap={"10px"}
                    flexDir={"row"}
                    alignItems={"center"}
                    cursor={"pointer"}
                  >
                    <ExternalLinkIcon />
                    <Text fontSize={"18px"}>{data?.website}</Text>
                  </Flex>
                  <Flex gap={"10px"} flexDir={"row"} alignItems={"center"}>
                    <StarIcon color={"#FFD101"} />
                    <StarIcon color={"#FFD101"} />
  
                    <StarIcon color={"#FFD101"} />
                    <StarIcon color={"#FFD101"} />
                  </Flex>
                  <Text fontSize={"18px"}>Pricing Mentioned: ${data?.price}</Text>
                </Flex>
              </Flex>
            </Flex>
          </Collapse>
        </Flex>
      </>
    );
  };
  
  const Accepted = ({
    data,
    setAcceptedArray,
  }: {
    data?: ServiceDataType | null;
    setAcceptedArray: any;
  }) => {
    const { isOpen, onToggle } = useDisclosure();
    const [loadingFlag, setLoadingFlag] = useState(false);
  
    const [flag, setFlag] = useState(false);
    return (
      <>
        <Flex
          m={"10px"}
          flexDir={"column"}
          cursor={"pointer"}
          bg={"transparent"}
          backdropFilter={"blur(2px)"}
        >
          <Flex
            flex={1}
            borderRadius={"9px"}
            bg={"snd.100"}
            color={"pmy.300"}
            justifyContent={"space-between"}
          >
            <Flex
              flex={1}
              p="10px"
              justifyContent={"space-between"}
              alignItems={"center"}
              onClick={onToggle}
            >
              <Text fontSize={"26px"} fontWeight={"600"}>
                {data?.name}
              </Text>
              <Flex gap={"10px"} flexDirection={"column"} color={"white"}>
                <Flex
                  gap={"5px"}
                  flexDir={"row"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <TimeIcon />
                  <Text fontWeight={"600"}>{data?.Booking}</Text>
                </Flex>
                <Flex
                  alignItems={"center"}
                  justifyContent={"center"}
                  gap={"10px"}
                >
                  <CalendarIcon />
                  <Text fontWeight={"600"}>{data?.time}</Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Collapse in={isOpen} animateOpacity>
            <Flex p="10px" flex={1}>
              <Flex gap={"30px"}>
                <Flex flexDirection={"column"} gap={"5px"}>
                  <Text fontWeight={"700"} fontSize={"20px"}>
                    {data?.name}
                  </Text>
                  <Text color={"ntl.400"}>{data?.companyName}</Text>
                  <Flex gap={"10px"} flexDir={"row"} alignItems={"center"}>
                    <TimeIcon />
                    <Text color={"ntl.400"}>
                      {data?.time} {data?.Booking}
                    </Text>
                  </Flex>
  
                  <Flex gap={"10px"} flexDir={"row"} alignItems={"center"}>
                    <EmailIcon />
                    <Text color={"ntl.400"}> {data?.email}</Text>
                  </Flex>
  
                  <Flex gap={"10px"} flexDir={"row"} alignItems={"center"}>
                    <PhoneIcon />
                    <Text color={"ntl.400"}> {data?.phoneNumber}</Text>
                  </Flex>
                </Flex>
                <Flex flexDirection={"column"} gap={"5px"}>
                  <Flex gap={"10px"} flexDir={"row"} alignItems={"center"}>
                    <AtSignIcon />
                    <Text color={"ntl.400"}>{data?.address}</Text>
                  </Flex>
                  <Flex
                    gap={"10px"}
                    flexDir={"row"}
                    alignItems={"center"}
                    cursor={"pointer"}
                  >
                    <ExternalLinkIcon />
                    <Text fontSize={"18px"}>{data?.website}</Text>
                  </Flex>
                  <Flex gap={"10px"} flexDir={"row"} alignItems={"center"}>
                    <StarIcon color={"#FFD101"} />
                    <StarIcon color={"#FFD101"} />
  
                    <StarIcon color={"#FFD101"} />
                    <StarIcon color={"#FFD101"} />
                  </Flex>
                  <Text fontSize={"18px"}>Pricing Mentioned: ${data?.price}</Text>
                </Flex>
              </Flex>
            </Flex>
          </Collapse>
        </Flex>
      </>
    );
  };
  