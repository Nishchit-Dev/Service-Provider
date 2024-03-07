import { Divider, Flex, Text, Input, Button, Box, Img } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Layout from "../../layout/Layout.tsx";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import BasicUsage from "./AddService.tsx";

const padding = {
  padding: "15px 30px",
  borderRadius: "9px",
  boxShadow: "xl",
};

const ServiceContainer = ({ id }) => {
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
  const handleInputChange = (e, field) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      [field]: value,
    });
  };
  useEffect(() => {
    console.log(formData);
    console.log(id);
  }, [formData]);
  const [editFlag, setEditFlag] = useState(true);

  return (
    <>
      <Flex
        boxShadow={"xl"}
        bg={"white"}
        flex={1}
        flexDir={"column"}
        gap={"10px"}
        style={padding}
      >
        <Flex flex={1} justifyContent={"flex-end"} gap={"10px"}>
          <Flex
            cursor={"pointer"}
            padding={"10px"}
            bg={!editFlag ? "#A1DD70" : "ntl.200"}
            borderRadius={"full"}
            _hover={{
              bg: "ntl.150",
            }}
          >
            <EditIcon
              onClick={() => {
                setEditFlag(!editFlag);
              }}
            />
          </Flex>

          <Flex
            padding={"10px"}
            bg={"red.200"}
            borderRadius={"full"}
            _hover={{ bg: "#EB5248" }}
          >
            <DeleteIcon
              cursor={"pointer"}
              color={"white"}
              onClick={() => {
                setEditFlag(!editFlag);
              }}
            />
          </Flex>
        </Flex>
        <Flex gap={"10px"}>
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
            <Flex flexDir={"row"} gap={"5px"}>
              <Flex flexDir={"column"} gap={"3px"}>
                <Input
                  placeholder={"Name"}
                  isReadOnly={editFlag}
                  value={formData.name}
                  onChange={(e) => handleInputChange(e, "name")}
                />
                <Input
                  placeholder={"companyName"}
                  isReadOnly={editFlag}
                  value={formData.companyName}
                  onChange={(e) => handleInputChange(e, "companyName")}
                />
                <Input
                  placeholder={"description"}
                  isReadOnly={editFlag}
                  value={formData.description}
                  onChange={(e) => handleInputChange(e, "description")}
                />
                <Input
                  placeholder={"email"}
                  isReadOnly={editFlag}
                  value={formData.email}
                  onChange={(e) => handleInputChange(e, "email")}
                />
                <Input
                  placeholder={"phoneNumber"}
                  isReadOnly={editFlag}
                  value={formData.phoneNumber}
                  onChange={(e) => handleInputChange(e, "phoneNumber")}
                />
              </Flex>
              <Flex flexDir={"column"} gap={"3px"}>
                <Input
                  placeholder={"address"}
                  isReadOnly={editFlag}
                  value={formData.address}
                  onChange={(e) => handleInputChange(e, "address")}
                />
                <Input
                  placeholder={"availability"}
                  isReadOnly={editFlag}
                  value={formData.availability}
                  onChange={(e) => handleInputChange(e, "availability")}
                />
                <Input
                  placeholder={"price"}
                  isReadOnly={editFlag}
                  value={formData.price}
                  onChange={(e) => handleInputChange(e, "price")}
                />
                <Input
                  placeholder={"website"}
                  isReadOnly={editFlag}
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
        <Flex flex={1} justifyContent={"flex-end"}>
          <Button borderRadius={"full"}>Apply Changes</Button>
        </Flex>
      </Flex>
    </>
  );
};

const RawContentManageService = () => {
  return (
    <Flex
      // m="0 5px"
      borderRadius={"9px"}
      flex={1}
      style={padding}
      flexDir={"column"}
      gap={"10px"}
    >
      <Flex flexDir={"column"}>
        <Text fontSize={"24px"} fontWeight={"600"}>
          Services
        </Text>
        <Divider />
        <Flex flex={1} justifyContent={"flex-end"} m="10px">
         
          <BasicUsage />
        </Flex>
      </Flex>
      <ServiceContainer id={2} />
      <ServiceContainer id={1} />
      <ServiceContainer id={4} />
    </Flex>
  );
};

const LayoutWrapper = () => {
  return <Layout children={<RawContentManageService />} />;
};

const ManageVendorService = () => {
  return (
    <>
      <LayoutWrapper />
    </>
  );
};
export default ManageVendorService;
