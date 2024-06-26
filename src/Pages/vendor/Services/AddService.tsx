import { EditIcon, DeleteIcon, ChevronDownIcon } from "@chakra-ui/icons";
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
  useToast,
  Toast,
} from "@chakra-ui/react";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { CallAddService, CallFetchServiceCategories } from "./api/Api.ts";
import services from "../utility/categories.ts";

const padding = {
  padding: "15px 30px",
  borderRadius: "9px",
  boxShadow: "xl",
};

const OptionContainer = ({ formData, setFormData, setImg }) => {
  const [serviceName, setServiceName] = useState("");

  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          {serviceName == "" ? "choose" : serviceName}
        </MenuButton>
        <MenuList>
          {services.map((data, id) => {
            return (
              <MenuItem
                key={id}
                onClick={() => {
                  console.log(data.id);
                  setServiceName(data.name);
                  setImg(data.img);
                  setFormData({ ...formData, serviceCategoryId: data.id });
                }}
              >
                {data.name}
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
    </>
  );
};
const ServiceContainer = ({ formData, setFormData }) => {
  const [img, setImg] = useState("https://www.shutterstock.com/image-photo/working-man-plumber-repairs-washing-600nw-1051194281.jpg");
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
              src={img}
              w="700px" h={"350px"}
              objectPosition={"contain"}
              borderRadius={"9px"}
            />
          </Flex>
          <Flex justifyContent={"flex-start"} alignItems={"center"} gap={"5px"}>
            <Text>Category</Text>
            <OptionContainer
              formData={formData}
              setFormData={setFormData}
              setImg={setImg}
            />
          </Flex>
          <Flex
            flexDir={"row"}
            gap={"5px"}
            flex={4}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Flex
              flexDir={"row"}
              flex={1}
              gap={"5px"}
              justifyContent={"space-between"}
            >
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
  const Toast = useToast({ position: "top" });
  const [formData, setFormData] = useState({
    serviceCategoryId: "",
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
  const handleClick = (e) => {
    CallAddService(formData)
      .then((res) => {
        Toast({ status: "success", title: "Service Added Successfully" });
        onClose();
      })
      .catch((err) => {
        Toast({ status: "error", title: "failed to add service" });
      });
  };
  useEffect(() => {
    CallFetchServiceCategories();
  }, []);
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
            <Button
              onClick={handleClick}
              borderRadius={"full"}
              bg={"#A1DD70"}
              color={"white"}
              _hover={{ bg: "#81C54A" }}
            >
              Add Service
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default BasicUsage;
