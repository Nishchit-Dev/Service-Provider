import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Img,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout.tsx";
import { ServiceCategories } from "./serviceCategories.tsx";
import { ImgFromId } from "../vendor/utility/categories.ts";
import { CallTotalServices } from "./api.ts";
import { RequestModal } from "./Request/Request.tsx";

const padding = {
  padding: "15px",
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
  _key,
}: {
  id: string;
  data: ServiceDataType;
  _key: number;
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
          <Text color={"ntl.400"}>Availability: {formData.availability}</Text>
          <Text fontSize={"18px"}>{formData.website}</Text>
          <Text fontSize={"18px"}>Pricing: ${formData.price}</Text>
          <Text fontSize={"18px"}>Rating: 3/5</Text>
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

            <Flex
              flex={1}
              justifyContent={"space-between"}
              alignItems={"center"}
              gap={"10px"}
            >
              <Text w={"170px"}>Rating</Text>
              <Input placeholder={"Rating"} isReadOnly={editFlag} value={"3"} />
            </Flex>
          </Flex>
        </Flex>
      </>
    );
  };
  useEffect(() => {
    console.log(_key);
    console.log();
  }, [formData]);
  const [editFlag, setEditFlag] = useState(true);
  const [discountFlag, setDiscountFlag] = useState(false);
  return (
    <>
      <Flex flex={1}>
        {discountFlag ? (
          <Flex
            position={"absolute"}
            // transform={"rotate(-25deg)"}
            // translateX={"translate(-10px)"}
            w="200px"
            h="30px"
          >
            <Img
              w={"45px"}
              h="45px"
              src="https://cdn-icons-png.freepik.com/512/726/726476.png"
            />
          </Flex>
        ) : (
          ""
        )}
        <Flex
          flex={1}
          cursor={"pointer"}
          boxShadow={"xl"}
          bg={_key % 2 == 0 ? "white" : "ntl.300"}
          borderRadius="9px"
          flexDir={"column"}
          gap={"10px"}
          style={padding}
        >
          <Flex gap={"10px"}>
            <Flex flex={1} justifyContent={"center"} alignItems={"center"}>
              <Img
                minW={"180px"}
                minH="180px"
                maxH={"190px"}
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
              <TextInData />
            </Flex>

            <Flex
              flex={1}
              flexDir={"row"}
              justifyContent={"space-between"}
              alignItems={"end"}
            >
              <Flex>
                <RequestModal
                  data={data}
                  discountFlag={discountFlag}
                  setDiscountFlag={setDiscountFlag}
                />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

const RawServiceComponent = () => {
 
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      let temp = await CallTotalServices();
      console.log(temp);
      setData(temp);
    })();
  }, []);
  return (
    <Flex w="100%" flexDir={"column"} padding={"0 40px"} gap={"20px"}>
      <Flex flexDir={"column"}>
        <Text fontSize={"24px"} fontWeight={"600"}>
          Services
        </Text>
        <Divider />
        {/* <Flex flex={1} justifyContent={"flex-end"} m="10px">
          <BasicUsage />
        </Flex> */}
      </Flex>
      <Flex flexDir={"row"}>
        <Box>
          <ServiceCategories />
        </Box>
        <Flex gap={"10px"} flexDir={"column"}>
          {data.map((data, id) => {
            return <ServiceContainer id={data.id} data={data} _key={id} />;
          })}
        </Flex>
      </Flex>
    </Flex>
  );
};

const Services = () => {
  return <Layout children={<RawServiceComponent />} />;
};

export default Services;
