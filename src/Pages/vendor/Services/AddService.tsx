import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Button,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Flex,
  Img,
  Input,
  Text,
  Center,
} from "@chakra-ui/react";

import React, { useEffect, useState } from "react";

const padding = {
  padding: "15px 30px",
  borderRadius: "9px",
  boxShadow: "xl",
};

const ServiceContainer = ({ formData, setFormData }) => {
  const handleInputChange = (e, field) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      [field]: value,
    });
  };
  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <>
      <Flex
        // boxShadow={"xl"}
        bg={"white"}
        flex={1}
        flexDir={"column"}
        gap={"10px"}
        style={padding}
      >
        <Flex gap={"10px"} flexDir={"column"}>
          <Flex flex={1}>
            <Img
              objectFit={"cover"}
              src="https://media.istockphoto.com/id/1485512746/photo/plumbers-tool-bag-on-floor-under-kitchen-sink.jpg?s=1024x1024&w=is&k=20&c=I7noVy8Sse6mrgWFUHzpI-deY2-ToGl14P8-DSwFa78="
              borderRadius={"9px"}
            />
          </Flex>
          <Flex
            flexDir={"row"}
            gap={"5px"}
            flex={4}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Flex flexDir={"row"} flex={1} gap={"5px"} justifyContent={"space-between"}>
              <Flex flexDir={"column"} gap={"3px"} flex={1}>
                <Text color={"ntl.400"}>Name</Text>
                <Input
                  placeholder={"Name"}
                  value={formData.name}
                  onChange={(e) => handleInputChange(e, "name")}
                />
                <Text color={"ntl.400"}>CompanyName</Text>
                <Input
                  placeholder={"companyName"}
                  value={formData.companyName}
                  onChange={(e) => handleInputChange(e, "companyName")}
                />
                <Text color={"ntl.400"}>Description</Text>
                <Input
                  placeholder={"description"}
                  value={formData.description}
                  onChange={(e) => handleInputChange(e, "description")}
                />
                <Text color={"ntl.400"}>Email</Text>
                <Input
                  placeholder={"email"}
                  value={formData.email}
                  onChange={(e) => handleInputChange(e, "email")}
                />
                <Text color={"ntl.400"}>PhoneNumber</Text>
                <Input
                  placeholder={"phoneNumber"}
                  value={formData.phoneNumber}
                  onChange={(e) => handleInputChange(e, "phoneNumber")}
                />
              </Flex>
              <Flex flexDir={"column"} gap={"3px"} flex={1}>
                <Text color={"ntl.400"}>Address</Text>
                <Input
                  placeholder={"address"}
                  value={formData.address}
                  onChange={(e) => handleInputChange(e, "address")}
                />
                <Text color={"ntl.400"}>Availability</Text>
                <Input
                  placeholder={"availability"}
                  value={formData.availability}
                  onChange={(e) => handleInputChange(e, "availability")}
                />
                <Text color={"ntl.400"}>Price</Text>
                <Input
                  placeholder={"price"}
                  value={formData.price}
                  onChange={(e) => handleInputChange(e, "price")}
                />
                <Text color={"ntl.400"}>Website</Text>
                <Input
                  placeholder={"website"}
                  value={formData.website}
                  onChange={(e) => handleInputChange(e, "website")}
                />
              </Flex>
            </Flex>
          </Flex>

          <Flex
            flex={1}
            flexDir={"row"}
            justifyContent={"space-between"}
            alignItems={"stretch"}
          >
            <Flex></Flex>
          </Flex>
        </Flex>

      </Flex>
    </>
  );
};

function BasicUsage() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    description: "",
    email: "",
    phoneNumber: "",
    address: "",
    availability: "",
    price: "",
    website: "",
  });

  return (
    <>
      <Button
        onClick={onOpen}
        bg={"#A1DD70"}
        color={"white"}
        _hover={{ bg: "#81C54A" }}
      >
        Add New Services
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size={"2xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Center>Add New Services</Center>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ServiceContainer formData={formData} setFormData={setFormData} />
          </ModalBody>

          <ModalFooter>
            <Button borderRadius={"full"} bg={"#A1DD70"} color={"white"} _hover={{ bg: "#81C54A" }}>
              Add Service
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default BasicUsage;
