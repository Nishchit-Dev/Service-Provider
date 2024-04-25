import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Collapse,
  Flex,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import services from "../vendor/utility/categories.ts";
import { ServiceRangeSlider } from "./ServiceRange.tsx";
import { ServiceRating } from "./ServiceRating.tsx";
const ServiceCategoriesCheckBox = ({ setFilterCate }) => {
  return (
    <>
      <Flex flex={1} padding={"0px 10px"}>
        <CheckboxGroup>
          <Stack>
            {services.map((ele, i) => {
              return (
                <Checkbox
                  value={ele.name}
                  onChange={(e) => {
                    console.log(e.target.checked);
                    if (e.target.checked) {
                      setFilterCate((e) => {
                        let temp = e;
                        temp.push(ele.id);
                        console.log(temp);
                        return temp;
                      });
                    } else {
                      setFilterCate((e) => {
                        let temp = e;
                        let finalData = temp.filter((id: string) => {
                          if (id != ele.id) {
                            return id;
                          }
                        });
                        console.log(temp);
                        return finalData;
                      });
                    }

                    console.log(ele.name);
                  }}
                  key={i}
                >
                  <Text fontSize={"18px"}>{ele.name}</Text>
                </Checkbox>
              );
            })}
          </Stack>
        </CheckboxGroup>
      </Flex>
    </>
  );
};
export const ServiceCategories = ({
  setFilterCategoriesOptions,
  filterCategoriesOptions,
  ResetFilters,
  ApplyFilter,
  FilterPrice,
  setFilterPrice
}) => {
  const { isOpen: categoriesIsOpen, onToggle: categoriesOnToggle } =
    useDisclosure();
  const { isOpen: rangeIsOpen, onToggle: rangeOnToggle } = useDisclosure();
  const { isOpen: ratingIsOpen, onToggle: ratingOnToggle } = useDisclosure();

  return (
    <>
      <Box
        w="300px"
        m={"0px 10px"}
        p={"10px"}
        bg={"white"}
        boxShadow={"2xl"}
        borderRadius={"9px"}
      >
        <Flex flexDir={"column"} padding={"10px"} gap={"10px"}>
          <Flex
            flexDirection={"column"}
            // justifyContent={"space-between"}
            // alignItems={"center"}
          >
            <Flex
              flexDir={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              w={"-webkit-fill-available"}
            >
              <Text fontWeight={"600"} fontSize={"22px"}>
                Categories
              </Text>
              <Button
                size={"sm"}
                onClick={categoriesOnToggle}
                bg={"#FFD101"}
                _hover={{ bg: "#FFD101", opacity: "0.8" }}
              >
                {categoriesIsOpen ? "-" : "+"}
              </Button>
            </Flex>
            <Collapse in={categoriesIsOpen}>
              <ServiceCategoriesCheckBox
                setFilterCate={setFilterCategoriesOptions}
              />
            </Collapse>
          </Flex>
          <Flex
            flexDirection={"column"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Flex
              flexDir={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              w={"-webkit-fill-available"}
            >
              <Text fontWeight={"600"} fontSize={"22px"}>
                {" "}
                Price range
              </Text>
              <Button
                size={"sm"}
                onClick={rangeOnToggle}
                bg={"#FFD101"}
                _hover={{ bg: "#FFD101", opacity: "0.8" }}
              >
                {rangeIsOpen ? "-" : "+"}
              </Button>
            </Flex>
            <Collapse in={rangeIsOpen} style={{ width: "100%" }}>
              <Box>
                <ServiceRangeSlider
                  setData={setFilterPrice}
                  data={FilterPrice}
                />
              </Box>
            </Collapse>
          </Flex>
          <Flex
            flexDirection={"column"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Flex
              flexDir={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              w={"-webkit-fill-available"}
            >
              <Text fontWeight={"600"} fontSize={"22px"}>
                {" "}
                Rating
              </Text>
              <Button
                size={"sm"}
                onClick={ratingOnToggle}
                bg={"#FFD101"}
                _hover={{ bg: "#FFD101", opacity: "0.8" }}
              >
                {ratingIsOpen ? "-" : "+"}
              </Button>
            </Flex>
            <Collapse in={ratingIsOpen} style={{ width: "100%" }}>
              <ServiceRating />
            </Collapse>
          </Flex>
        </Flex>
        <Flex flex={1} w={"100%"} flexDir={"column"} gap={"10px"}>
          <Button
            w={"100%"}
            bg={"#FFD101"}
            _hover={{ bg: "#FFD101", opacity: "0.8" }}
            onClick={ApplyFilter}
          >
            Apply Filter
          </Button>
          <Button
            w={"100%"}
            bg={"snd.100"}
            color={"whitesmoke"}
            _hover={{ opacity: "0.8" }}
            onClick={ResetFilters}
          >
            Rest Filters
          </Button>
        </Flex>
      </Box>
    </>
  );
};
