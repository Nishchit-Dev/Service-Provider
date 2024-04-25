import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Flex,
  Tag,
  Divider,
  Text,
  Img,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import { addData } from "../../../Store/RequestStore.ts";
import { addData as addDataToCart } from "../../../Store/Checkout.ts";
import axios from "axios";

const TimeDatePicker = ({ startDate, setStartDate }) => {
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => {
        console.log(date);
        setStartDate(date);
      }}
    />
  );
};

const TimeTags = ({ time, setTime }) => {
  const timeArray = ["9am-11am", "11am-1pm", "1pm-3pm", "3am-5pm", "5am-7pm"];
  return (
    <>
      {timeArray.map((data, i) => {
        return (
          <>
            <Tag
              cursor={"pointer"}
              bg={time == data ? "green.100" : "ntl.200"}
              onClick={() => setTime(data)}
            >
              {data}
            </Tag>
          </>
        );
      })}
    </>
  );
};
export const RequestModal = ({ data, discountFlag, setDiscountFlag }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [startDate, setStartDate] = useState(new Date());
  const [time, setTime] = useState("9am-11am");
  const dispatch = useDispatch();

  return (
    <>
      <Button onClick={onOpen} bg={"pmy.300"} gap={"10px"}>
        Add to Cart
        <Img src="/Assets/Services/icons/cart.svg" w="24px" />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Request Service</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex gap={"10px"} flexWrap={"wrap"} flexDir={"row"}>
              <Flex flexWrap={"wrap"} gap={"10px"}>
                <Text fontSize={"20px"} fontWeight={"700"}>
                  Select time{" "}
                </Text>
                <Divider m="10px" />
                <TimeTags time={time} setTime={setTime} />
              </Flex>

              <Flex
                flex={1}
                fontSize={"20px"}
                flexDir={"column"}
                fontWeight={"700"}
              >
                <Text>Select Date</Text>
                <Divider m="10px" />
                <TimeDatePicker
                  setStartDate={setStartDate}
                  startDate={startDate}
                />
              </Flex>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              onClick={() => {
                console.log({ ...data, startDate: startDate, time: time });
                dispatch(
                  addDataToCart({ ...data, startDate: startDate, time: time })
                );

                // setTimeout(() => {}, 15000);
                onClose();
              }}
            >
              Add to Cart
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
