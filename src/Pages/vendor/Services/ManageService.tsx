import {
  Divider,
  Flex,
  Text,
  Input,
  Button,
  Box,
  Img,
  FormLabel,
  Spinner,
  Center,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Layout from "../../layout/Layout.tsx";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import BasicUsage from "./AddService.tsx";
import { CallAddService, CallMyService } from "./api/Api.ts";

const padding = {
  padding: "15px 30px 25px 25px",
  
};

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
  website: string;
  _v: number;
}

const ServiceContainer = ({
  id,
  data,
}: {
  id: string;
  data: ServiceDataType;
}) => {
  const [formData, setFormData] = useState(data);
  const handleInputChange = (e, field) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      [field]: value,
    });
  };
  const TextInData = () => {
    return (
      <Flex flexDirection={"row"} gap={"20px"}>
        <Flex flexDirection={"column"} gap={"5px"}>
          <Text fontWeight={"700"} fontSize={"20px"}>
            {formData.name}
          </Text>
          <Text color={"ntl.400"}>{formData.companyName}</Text>
          <Text color={"ntl.400"}>{formData.description}</Text>
          <Text color={"ntl.400"}>{formData.address}</Text>
          <Text color={"ntl.400"}>{formData.email}</Text>
          <Text color={"ntl.400"}> {formData.phoneNumber}</Text>
        </Flex>
        <Flex flexDirection={"column"} gap={"5px"}>
          {" "}
          <Text color={"ntl.400"}>{formData.availability}</Text>
          <Text fontSize={"18px"}>{formData.website}</Text>
          <Text fontSize={"18px"}>Pricing: ${formData.price}</Text>
        </Flex>
      </Flex>
    );
  };
  const InputInData = () => {
    return (
      <>
        {" "}
        <Flex flexDir={"row"} gap={"25px"} flex={2}>
          <Flex flexDir={"column"} gap={"10px"} flex={1}>
            <Flex
              justifyContent={"space-between"}
              flex={1}
              alignItems={"center"}
              gap={"10px"}
            >
              <Text w={"170px"} wordBreak={"break-all"}>
                Service name
              </Text>
              <Input
                placeholder={"Name"}
                isReadOnly={editFlag}
                value={formData.name}
                onChange={(e) => handleInputChange(e, "name")}
              />
            </Flex>

            <Flex
              flex={1}
              justifyContent={"space-between"}
              alignItems={"center"}
              gap={"10px"}
            >
              <Text w={"170px"}>Company</Text>

              <Input
                placeholder={"companyName"}
                isReadOnly={editFlag}
                value={formData.companyName}
                onChange={(e) => handleInputChange(e, "companyName")}
              />
            </Flex>
            <Flex
              flex={1}
              justifyContent={"space-between"}
              alignItems={"center"}
              gap={"10px"}
            >
              <Text w={"170px"}>Description</Text>
              <Input
                placeholder={"description"}
                isReadOnly={editFlag}
                value={formData.description}
                onChange={(e) => handleInputChange(e, "description")}
              />
            </Flex>
            <Flex
              flex={1}
              justifyContent={"space-between"}
              alignItems={"center"}
              gap={"10px"}
            >
              <Text w={"170px"}>Email</Text>

              <Input
                placeholder={"email"}
                isReadOnly={editFlag}
                value={formData.email}
                onChange={(e) => handleInputChange(e, "email")}
              />
            </Flex>
            <Flex
              flex={1}
              justifyContent={"space-between"}
              alignItems={"center"}
              gap={"10px"}
            >
              <Text w={"170px"}>PhoneNumber</Text>
              <Input
                placeholder={"phoneNumber"}
                isReadOnly={editFlag}
                value={formData.phoneNumber}
                onChange={(e) => handleInputChange(e, "phoneNumber")}
              />
            </Flex>
          </Flex>
          <Flex flexDir={"column"} gap={"3px"} flex={1}>
            <Flex
              flex={1}
              justifyContent={"space-between"}
              alignItems={"center"}
              gap={"10px"}
            >
              <Text w={"170px"}>Address</Text>
              <Input
                placeholder={"address"}
                isReadOnly={editFlag}
                value={formData.address}
                onChange={(e) => handleInputChange(e, "address")}
              />
            </Flex>

            <Flex
              flex={1}
              justifyContent={"space-between"}
              alignItems={"center"}
              gap={"10px"}
            >
              <Text w={"170px"}>Availability</Text>
              <Input
                placeholder={"availability"}
                isReadOnly={editFlag}
                value={formData.availability}
                onChange={(e) => handleInputChange(e, "availability")}
              />
            </Flex>

            <Flex
              flex={1}
              justifyContent={"space-between"}
              alignItems={"center"}
              gap={"10px"}
            >
              <Text w={"170px"}>Price</Text>
              <Input
                placeholder={"price"}
                isReadOnly={editFlag}
                value={formData.price}
                onChange={(e) => handleInputChange(e, "price")}
              />
            </Flex>

            <Flex
              flex={1}
              justifyContent={"space-between"}
              alignItems={"center"}
              gap={"10px"}
            >
              <Text w={"170px"}>Website</Text>
              <Input
                placeholder={"website"}
                isReadOnly={editFlag}
                value={formData.website}
                onChange={(e) => handleInputChange(e, "website")}
              />
            </Flex>
          </Flex>
        </Flex>
      </>
    );
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
        borderRadius="9px"
        flexDir={"column"}
        gap={"10px"}
        style={padding}
      >
        <Flex
          justifyContent={"flex-end"}
          gap={"10px"}
          position={"relative"}
          right={""}
        >
          <Flex
            cursor={"pointer"}
            onClick={() => {
              setEditFlag(!editFlag);
            }}
            padding={"10px"}
            color={!editFlag ? "white" : ""}
            bg={!editFlag ? "#000" : "ntl.200"}
            borderRadius={"full"}
            _hover={{
              bg: !editFlag ? "#000" : "ntl.200",
            }}
          >
            <EditIcon />
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
            {!editFlag ? <InputInData /> : <TextInData />}
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
        {!editFlag ? (
          <>
            <Flex
              flex={1}
              justifyContent={"flex-end"}
              alignItems={"center"}
              gap={"10px"}
            >
              <Button borderRadius={"full"}>Apply Changes</Button>

              <Flex
                w={"min-content"}
                justifyContent={"flex-end"}
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
          </>
        ) : null}
      </Flex>
    </>
  );
};

const RawContentManageService = () => {
  const [ServiceData, setServicesData] = useState<ServiceDataType[]>([]);
  useEffect(() => {
    CallMyService().then((response) => {
      setTimeout(() => {
        setServicesData(response);
      }, 2000);
    });
  }, []);
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
      {ServiceData.length == 0 ? (
        <>
          <Center flex={1}>
            <Spinner size={"lg"} thickness="3px" stroke={"black"} />
          </Center>
        </>
      ) : (
        <></>
      )}
      {ServiceData.map((data, id) => {
        return <ServiceContainer id={data.id} data={data} />;
      })}
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
