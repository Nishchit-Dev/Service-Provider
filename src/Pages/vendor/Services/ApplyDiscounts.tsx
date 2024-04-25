import {
  Button,
  Divider,
  Flex,
  HStack,
  Img,
  Input,
  Tag,
  TagCloseButton,
  TagLabel,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Box,
  ModalCloseButton,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const DiscountTags = ({ setDiscount }) => {
  const discountData = [
    { color: "orange", d: 5 },
    { color: "blue", d: 10 },
    { color: "red", d: 15 },
    { color: "yellow", d: 20 },
    { color: "green", d: 25 },
  ];

  return (
    <HStack spacing={4}>
      {discountData.map((data) => (
        <Tag
          cursor={"pointer"}
          alignItems={"center"}
          size={"md"}
          key={data.d}
          borderRadius="full"
          variant="solid"
          colorScheme={data.color}
          onClick={() => {
            setDiscount(data.d);
          }}
        >
          <TagLabel>
            <Text> {data.d + "%"}</Text>
          </TagLabel>
          <TagCloseButton />
        </Tag>
      ))}
    </HStack>
  );
};
const ApplyDiscount = ({ data }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  useEffect(() => {
    console.log(data);
  }, [isOpen]);
  const [orgPrice, setOrgPrice] = useState(100);
  const [discount, setDiscount] = useState(10);

  return (
    <>
      <Button
        borderRadius={"full"}
        bg={"red.200"}
        color={"white"}
        onClick={onOpen}
        _hover={{
          bg: "red.100",
        }}
      >
        Discount Apply
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Discount Management</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Img src={"/Assets/Discounts/discount.svg"} />
            </Box>
            <Flex>
              <DiscountTags setDiscount={setDiscount} />
            </Flex>
            <Flex my="20px">
              <Divider size={"md"} />
            </Flex>
            <Flex flexDir={"column"} gap={"10px"}>
              <Flex flexDir={"column"} outline={""}>
                <Text>Original Price</Text>
                <NumberInput
                  step={5}
                  defaultValue={100}
                  min={10}
                  value={orgPrice}
                  onChange={(snum, num) => {
                    setOrgPrice(num);
                  }}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </Flex>
              <Flex flexDir={"column"} outline={""}>
                <Text>Discount</Text>
                <NumberInput
                  step={5}
                  value={discount}
                  defaultValue={10}
                  onChange={(snum, num) => {
                    setDiscount(num);
                  }}
                >
                  <NumberInputField fontSize={"22px"} fontWeight={"600"} />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </Flex>
              <Flex flexDir={"column"} outline={""}>
                <Text>Discounted Price</Text>
                <NumberInput
                  value={(orgPrice - (discount / orgPrice) * 100).toFixed(2)}
                  step={5}
                  min={10}
                >
                  <NumberInputField fontSize={"32px"} fontWeight={"700"} />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </Flex>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Flex flex={1} justifyContent={"end"}>
              <Button
                colorScheme="green"
                mr={3}
                onClick={onClose}
                borderRadius={"full"}
              >
                Apply
              </Button>
              <Button
                colorScheme="blue"
                mr={3}
                onClick={onClose}
                borderRadius={"full"}
              >
                Close
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export const Reviews = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <Button
        borderRadius={"full"}
        // color={"white"}
        onClick={onOpen}
      >
        Review & Rating
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Review and Ratings</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex flexDir={"column"} gap={"10px"}>
              <Flex
                bg="snd.400"
                flex={1}
                padding={"10px"}
                borderRadius={"9px"}
                flexDir={"column"}
              >
                <Flex flexDir={"row"} gap={"20px"}>
                  <StarIcon color={"#FFD101"} />
                  <StarIcon color={"#FFD101"} />
                  <StarIcon color={"#FFD101"} />
                  <StarIcon color={"#FFD101"} />
                </Flex>
                <Flex mt={"10px"}>
                  <Text>This is my rating....</Text>
                </Flex>
              </Flex>
              <Flex
                bg="snd.400"
                flex={1}
                padding={"10px"}
                borderRadius={"9px"}
                flexDir={"column"}
              >
                <Flex flexDir={"row"} gap={"20px"}>
                  <StarIcon color={"#FFD101"} />
                  <StarIcon color={"#FFD101"} />
                  <StarIcon color={"#FFD101"} />
                </Flex>
                <Flex mt={"10px"}>
                  <Text>This is Service is Awesome....</Text>
                </Flex>
              </Flex>
              <Flex
                bg="snd.400"
                flex={1}
                padding={"10px"}
                borderRadius={"9px"}
                flexDir={"column"}
              >
                <Flex flexDir={"row"} gap={"20px"}>
                  <StarIcon color={"#FFD101"} />
                  <StarIcon color={"#FFD101"} />
                  <StarIcon color={"#FFD101"} />
                  <StarIcon color={"#FFD101"} />
                </Flex>
                <Flex mt={"10px"}>
                  <Text>Loved the Service from the service provider...</Text>
                </Flex>
              </Flex>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Flex flex={1} justifyContent={"end"}>
              <Button
                colorScheme="blue"
                mr={3}
                onClick={onClose}
                borderRadius={"full"}
              >
                Close
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default ApplyDiscount;
