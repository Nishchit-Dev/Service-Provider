import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Button,
  ModalBody,
  Text,
  Flex,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { findAndDelete } from "../../Store/Checkout.ts";

export const ConfirmDelete = ({ data }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();

  return (
    <>
      <Flex
        justifyContent={"flex-end"}
        position={"relative"}
        top={"-10px"}
        cursor={"pointer"}
      >
        <Flex bg={"red.100"} borderRadius={"999"} onClick={onOpen}>
          <Flex m="10px">
            <DeleteIcon />
          </Flex>
        </Flex>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete Action</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex flexDir={"column"} gap={"20px"}>
              <Text>Are you Sure you want to Delete Service</Text>
              <Flex justifyContent={"center"} gap={"20px"}>
                <Button
                  bg={"red.100"}
                  color={"white"}
                  onClick={() => {
                    dispatch(findAndDelete(data.id));
                    onClose()
                  }}
                >
                  Confirm
                </Button>
                <Button onClick={onClose}>No</Button>
              </Flex>
            </Flex>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
