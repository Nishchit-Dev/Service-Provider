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
  Toast,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Layout from "../../layout/Layout.tsx";
import {
  AtSignIcon,
  DeleteIcon,
  EditIcon,
  EmailIcon,
  ExternalLinkIcon,
  PhoneIcon,
  StarIcon,
  TimeIcon,
} from "@chakra-ui/icons";
import BasicUsage from "./AddService.tsx";
import {
  CallAddService,
  CallDeleteService,
  CallMyService,
  CallUpdateServices,
} from "./api/Api.ts";
import ApplyDiscount, { Reviews } from "./ApplyDiscounts.tsx";
import { ImgFromId } from "../utility/categories.ts";

const padding = {
  padding: "15px 30px 25px 25px",
};

interface ServiceDataType {
  serviceId: string;
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
  const toast = useToast({ position: "top" });
  const [formData, setFormData] = useState<ServiceDataType>(data);
  const handleInputChange = (e, field) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      [field]: value,
    });
  };
  const TextInData = () => {
    return (
      <>
        <Flex flexDir={"column"}>
          <Flex flexDirection={"row"} gap={"20px"} key={id}>
            <Flex flexDirection={"column"} gap={"5px"}>
              <Text fontWeight={"700"} fontSize={"20px"}>
                {formData.name}
              </Text>
              <Text color={"ntl.400"}>{formData.companyName}</Text>
              <Flex gap={"10px"} flexDir={"row"} alignItems={"center"}>
                <TimeIcon />
                <Text color={"ntl.400"}>{formData.availability}</Text>
              </Flex>

              <Flex gap={"10px"} flexDir={"row"} alignItems={"center"}>
                <EmailIcon />
                <Text color={"ntl.400"}> {formData.email}</Text>
              </Flex>

              <Flex gap={"10px"} flexDir={"row"} alignItems={"center"}>
                <PhoneIcon />
                <Text color={"ntl.400"}> {formData.phoneNumber}</Text>
              </Flex>
            </Flex>
            <Flex flexDirection={"column"} gap={"5px"}>
              <Flex gap={"10px"} flexDir={"row"} alignItems={"center"}>
                <AtSignIcon />
                <Text color={"ntl.400"}>{formData.address}</Text>
              </Flex>
              <Flex
                gap={"10px"}
                flexDir={"row"}
                alignItems={"center"}
                cursor={"pointer"}
              >
                <ExternalLinkIcon />
                <Text fontSize={"18px"}>{formData.website}</Text>
              </Flex>
              <Flex gap={"10px"} flexDir={"row"} alignItems={"center"}>
                <StarIcon color={"#FFD101"} />
                <StarIcon color={"#FFD101"} />

                <StarIcon color={"#FFD101"} />
                <StarIcon color={"#FFD101"} />
              </Flex>
              <Text fontSize={"18px"}>Pricing: ${formData.price}</Text>
            </Flex>
          </Flex>
          <Text color={"ntl.400"}>{formData.description}</Text>
        </Flex>
      </>
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
                value={formData.website}
                onChange={(e) => handleInputChange(e, "website")}
              />
            </Flex>

            <Flex
              flex={1}
              justifyContent={"space-between"}
              alignItems={"center"}
              gap={"10px"}
            >
              <Text w={"170px"}>Rating</Text>
              <Input
                placeholder={"Rating"}
                value={"3"}
                onChange={(e) => console.log("onchange")}
              />
            </Flex>
          </Flex>
        </Flex>
      </>
    );
  };
  useEffect(() => {
    // console.log(formData);
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
          <Reviews />
          <ApplyDiscount data={data} />

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
              src={ImgFromId(data.serviceCategoryId)}
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
              <Button
                borderRadius={"full"}
                onClick={() => {
                  console.log(formData);

                  CallUpdateServices({ ...formData, serviceId: formData.id })
                    .then((result) => {
                      console.log(result);
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }}
              >
                Apply Changes
              </Button>

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
                    console.log("delete");
                    setEditFlag(!editFlag);

                    CallDeleteService({ serviceId: id })
                      .then((status) => {
                        toast({
                          status: "success",
                          title: "Service Deleted Successfully!",
                          duration: 3000,
                        });
                      })
                      .catch((err) => {
                        toast({
                          status: "error",
                          title: "Error occred",
                          description: "Couldn't delete Service.",
                        });
                      });
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
    setTimeout(() => {
      CallMyService().then((response) => {
        console.log("timer");
        console.log(response);
        setServicesData(response);
      });
    }, 2000);
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
        if (data != null) {
          return <ServiceContainer id={data.id} data={data} />;
        }
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
