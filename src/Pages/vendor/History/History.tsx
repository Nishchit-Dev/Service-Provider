import React, { useEffect, useState } from "react";
import Layout from "../../layout/Layout.tsx";
import {
  Box,
  Center,
  Text,
  Divider,
  Flex,
  Collapse,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import {
  AtSignIcon,
  CalendarIcon,
  EmailIcon,
  ExternalLinkIcon,
  PhoneIcon,
  StarIcon,
  TimeIcon,
} from "@chakra-ui/icons";
import axios, { Axios } from "axios";
import { EmptyAnimations } from "../../Animations/Empty.tsx";
interface ServiceDataType {
  address: string;
  availability: string;
  companyName: string;
  createdAt: string;
  description: string;
  email: string;
  id: string;
  name: string;
  phoneNumber: string;
  price: string;
  serviceCategoryId: string;
  updatedAt: string;
  Booking: string;
  time: string;
  website: string;
  _v: number;
  startDate:string;
}
const StaticData = [
  {
    id: "65ea6dd60d13465304f9781e",
    serviceCategoryId: "65ea366293ef4b7f14774e3d",
    name: "Smith Plumbing Services",
    companyName: "Smith and Company",
    description: "A short overview of the service been provided",
    email: "user@example.com",
    phoneNumber: "+16824458987",
    address: "413 Summit Ave, Arlington Texas 76013.",
    availability: "Add your weekly available hours and any exceptions.",
    price: "100",
    website: "www.yourWebsite.com",
    Booking: "9am-11am",
    time: "Thrusday",
    createdAt: "2024-03-08T01:45:58.494Z",
    updatedAt: "Thu Mar 28 2024 13:09:42 GMT-0500 (Central Daylight Time)",
    _v: 3,
  },
  {
    id: "65f381db7ceeb73d4453b058",
    serviceCategoryId: "65ea369a93ef4b7f14774e3e",
    name: "Cindy N",
    companyName: "Cindy.co",
    description:
      "Accusamus et iusto odio dignissie corrupti quosate dolores etolestias excepo officiale deserunt mollitia animi idendication estame laborum.",
    email: "Cindy@gmail.com",
    phoneNumber: "9827984352",
    address: "1463 Middle Byway, Mesa, CO 47393",
    availability: "11am-5pm",
    Booking: "10am-12pm",
    time: "Monday",

    price: "150",
    website: "www.Cindy.com",
    createdAt: "2024-03-14T23:01:47.854Z",
    updatedAt: "2024-03-14T23:01:47.854Z",
    _v: 0,
  },
  {
    id: "6605ab628b31bc8564535d3b",
    serviceCategoryId: "65ea379e93ef4b7f14774e44",
    name: "Service 3",
    companyName: "Petterson",
    description: "A short overview of the service been provided",
    email: "Petterson@gmail.com",
    phoneNumber: "1234567890",
    address: "address street 123",
    time: "Tuesday",
    availability: "12pm-2pm",
    Booking: "9am-11am",

    price: "250",
    website: "www.Petterson.com",
    createdAt: "2024-03-28T17:39:46.252Z",
    updatedAt: "2024-03-28T17:39:46.252Z",
    _v: 0,
  },
];

const InfoCardComponents = () => {
  return (
    <>
      <Box>
        <Flex justifyContent={"space-between"}>
          <Flex>Name</Flex>
        </Flex>
      </Box>
    </>
  );
};

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
                <Text fontWeight={"600"}>{data?.availability}</Text>
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
          <Flex
            hidden
            bg={"ntl.100"}
            justifyContent={"center"}
            alignItems={"center"}
          >
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
                setFlag(true);
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
                setFlag(true);
              }}
            >
              Decline
            </Button>
          </Flex>
          <Flex
            justifyContent={"center"}
            bg={"white"}
            alignItems={"center"}
            p="20px"
          >
            <Text fontSize={"24px"} fontWeight={"700"} color={"pmy.100"}>
              Price: ${data?.price}
            </Text>
          </Flex>
          <Flex
            justifyContent={"center"}
            bg={"pmy.300"}
            alignItems={"center"}
            flexDir={"column"}
            p="20px"
            color={"black"}
            w={"300px"}
          >
            <Text fontSize={"20px"} fontWeight={"500"} >
              Booking Date: {new Date(data?.startDate).getMonth()}/{new Date(data?.startDate).getDate()}/{new Date(data?.startDate).getFullYear()}
            </Text>
            <Text fontSize={"20px"} fontWeight={"500"} >
              Time: {data?.time}
            </Text>
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

export const RawContentHistory = () => {
  const arr = [1, 2, 3];
  const data = useSelector((state: any) => {
    return state.Checkout.cart;
  });
  const [AcceptedArray, setAcceptedArray] = useState([]);
  useEffect(() => {
    console.log(data);
  });
  return (
    <>
      <Flex flex={1} padding={"20px 40px"} flexDir={"column"}>
        <Box w="100%">
          <Text fontSize={"30px"} fontWeight={"600"}>
            Order Histroy
          </Text>
          <Divider />
        </Box>
        {data.length == 0 ? (
          <Center flex={1}>
            <EmptyAnimations />
          </Center>
        ) : (
          <></>
        )}
        <Box>
          {data?.map((ele, index) => {
            return (
              <HistoryContainer
                setAcceptedArray={setAcceptedArray}
                data={ele}
              />
            );
          })}
        </Box>
        {/* <Box w="100%">
          <Text fontSize={"24px"} fontWeight={"600"}>
            Accept
          </Text>
          <Divider />
        </Box> */}
        {/* <Box>
          {AcceptedArray?.map((ele, index) => {
            return <Accepted data={ele} setAcceptedArray={setAcceptedArray} />;
          })}
        </Box> */}
      </Flex>
    </>
  );
};

const LayoutWrapper = () => {
  return <Layout children={<RawContentHistory />} />;
};

const VendorHistory = () => {
  return (
    <>
      <LayoutWrapper />
    </>
  );
};

export default VendorHistory;
