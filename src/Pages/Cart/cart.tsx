import {
  Box,
  Center,
  Text,
  Flex,
  Divider,
  Img,
  Button,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout.tsx";
import { useSelector } from "react-redux";
import axios, { Axios } from "axios";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { ImgFromId } from "../vendor/utility/categories.ts";
import {
  DeleteIcon,
  EmailIcon,
  ExternalLinkIcon,
  LinkIcon,
  PhoneIcon,
  TimeIcon,
} from "@chakra-ui/icons";
import { ConfirmDelete } from "./confirmDelete.tsx";
import { EmptyAnimations } from "../Animations/EmptyCart.tsx";

const stripePromise = loadStripe(
  "pk_test_51P4Eq6AcN3dEzkysJxXAt6tKn1Djh3mCEhcHGxtx72N62cvf9NDhOKODbRj0SWqLeVT6ipFx5mfbS1IPtbDk5jab00bKpBN5Je"
);

interface cartItems {
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
  website: string;
  bookingDate: string;
  time: string;
}

const CheckoutItems = ({ data }) => {
  return (
    <>
      {" "}
     
      <Flex flex={3} h={"100%"} flexDir={"column"} gap={"10px"} px={"10px"}>
        <Flex flexDir={"column"}>
          <Text fontSize={"24px"} fontWeight={"600"}>
            Checkout items
          </Text>
          <Divider></Divider>
        </Flex>
        {data.length == 0 ? (
          <Center flex={1}>
            <EmptyAnimations />
          </Center>
        ) : (
          <></>
        )}
        {data.map((ele: cartItems, i) => {
          return (
            <>
              <Flex
                bg={i % 2 == 0 ? "ntl.200" : "ntl.300"}
                alignItems={"center"}
                p={"20px"}
                borderRadius={"11px"}
              >
                <Flex gap={"20px"} alignItems={"center"}>
                  <Img
                    src={ImgFromId(ele.serviceCategoryId)}
                    h="250px"
                    w="375px"
                    objectFit={"cover"}
                    borderRadius={"9px"}
                  />

                  <Flex>
                    <Flex flexDir={"column"} w="800px">
                      <ConfirmDelete data={ele} />
                      <Flex
                        justifyContent={"space-between"}
                        alignItems={"center"}
                      >
                        <Text fontSize={"26px"}>{ele.name}</Text>
                        <Text
                          fontSize={"18px"}
                          bg={"pmy.300"}
                          color={"snd.100"}
                          borderRadius={"7px"}
                          p="5px"
                          justifyContent={"center"}
                        >
                          Booking Date: {ele.time}
                        </Text>
                      </Flex>
                      <Text color={"snd.200"}>{ele.description}</Text>
                      <Flex alignItems={"center"} gap={"10px"} mt="10px">
                        <PhoneIcon />
                        <Text>{ele.phoneNumber}</Text>
                      </Flex>
                      <Flex alignItems={"center"} gap={"10px"} mt="10px">
                        <EmailIcon />
                        <Text>{ele.email}</Text>
                      </Flex>
                      <Flex alignItems={"center"} gap={"10px"} mt="10px">
                        <Text>Website: {ele.website}</Text>
                        <ExternalLinkIcon boxSize={"20px"} />
                      </Flex>
                      <Flex
                        alignItems={"center"}
                        mt="10px"
                        gap={"10px"}
                        bg={"pmy.200"}
                        color={"white"}
                        w={"fit-content"}
                        p="5px"
                        borderRadius={"5px"}
                      >
                        <TimeIcon boxSize={"20px"} />
                        <Text>Availabe: {ele.availability}</Text>
                      </Flex>
                      <Flex justifyContent={"flex-end"}>
                        <Flex
                          bg={"green.100"}
                          p="5px 12px"
                          borderRadius={"7px"}
                        >
                          <Text fontSize={"20px"}>Price: ${ele.price}</Text>
                        </Flex>
                      </Flex>
                    </Flex>
                    <Flex></Flex>
                  </Flex>
                </Flex>
              </Flex>

              {/* <Text>{ele.name}</Text> */}
            </>
          );
        })}
      </Flex>
    </>
  );
};
const CheckoutMenu = ({ data }) => {
  const [clientSecret, setClientSecret] = useState("");
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let tempTotal = 0;
    data.map((service) => {
      tempTotal = tempTotal + parseInt(service.price);
    });

    setTotal(tempTotal);
  }, [data]);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };
  return (
    <>
      <Flex
        flex={1}
        flexDir={"column"}
        // h="80%"
        // justifyContent={"space-between"}
        gap={"20px"}
        bg={"pmy.100"}
        borderRadius={"9px"}
        padding={"15px"}
        color={"white"}
      >
        <Flex flexDir={"column"}>
          <Text fontSize={"24px"} fontWeight={"600"}>
            Make Payment
          </Text>
          <Divider></Divider>
        </Flex>
        <Img
          borderRadius={"9px"}
          src="https://media.istockphoto.com/id/1282650520/vector/shopping-bag-icon-in-black-eco-paper-bag-handbag-icon-vector-on-isolated-white-background.jpg?s=612x612&w=0&k=20&c=gMzSXnbZvpJ6FywQYCftnHElWUO10rlo30Lwvrfu8mk="
        />
        <Box w="100%">
          {data.map((ele) => {
            return (
              <Flex justifyContent={"space-between"} alignItems={"center"}>
                <Flex
                  flex={1}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Text>{ele.name}</Text>
                  <Text fontSize={"18px"} fontWeight={"600"}>
                    x1
                  </Text>
                </Flex>
                <Flex ml={"20px"} fontSize={"24px"}>
                  <Text>$ {parseFloat(ele.price).toFixed(2)}</Text>
                </Flex>
              </Flex>
            );
          })}
          <Flex
            w="100%"
            mt={"20px"}
            flexDir={"column"}
            justifyContent={"flex-end"}
            alignItems={"flex-end"}
          >
            <Divider />
            <Text fontWeight={"700"} fontSize={"24px"}>
              Total Checkout
            </Text>
            <Text fontWeight={"700"} fontSize={"34px"}>
              ${total.toFixed(2)}
            </Text>
          </Flex>
          <Flex justifyContent={"flex-end"} alignItems={"flex-end"} flex={1}>
            {/* <Text fontWeight={"700"} fontSize={"34px"}>
              ${total.toFixed(2)}
            </Text> */}
          </Flex>

          <Button
            bg={"pmy.300"}
            _hover={{ bg: "pmy.300", opacity: "0.9" }}
            flex={1}
            w="100%"
            onClick={() => {
              window.open(
                "https://buy.stripe.com/test_8wM3dgca689f5NKcMN",
                "_blank"
              );
              setTimeout(()=>{
                axios.post("http://localhost:3000/services/payment-success", {
                  email: "nishchitpatel84@gmail.com",
                });
              },15000)
            }}
          >
            Make Payment
          </Button>
        </Box>
      </Flex>
    </>
  );
};

const CartContent = () => {
  const data: cartItems[] = useSelector((state: any) => {
    console.log(state);
    return state.Checkout.cart;
  });

  return (
    <>
      <Flex w="100%" p="10px">
       
        <CheckoutItems data={data} />
        <CheckoutMenu data={data} />
      </Flex>
    </>
  );
};
const LayoutWrapper = () => {
  return <Layout children={<CartContent />} />;
};

export const Checkout = () => {
  return (
    <>
      <LayoutWrapper />
    </>
  );
};
