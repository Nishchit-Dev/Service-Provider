import {
  Box,
  Button,
  Flex,
  Icon,
  Input,
  useStatStyles,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <>
      <Box w={"500px"} m={"0 20px"}>
        <Flex
          flex={1}
          borderRadius={"999px"}
          flexDir={"row"}
          alignItems={"center"}
          bg={"ntl.150"}
          paddingLeft={"20px"}
          paddingRight={"2px"}
        >
          <SearchIcon />
          <Input
            placeholder="Search Services"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            value={searchText}
            fontFamily={"Poppins"}
            border={"transparent"}
            focusBorderColor="transparent"
          />
          <Button
            borderRadius={"full"}
            w="120px"
            m="4px"
            bg={"pmy.300"}
            _hover={{ bg: "#FFD101", opacity: "0.8" }}
          >
            Search
          </Button>
        </Flex>
      </Box>
    </>
  );
};

export default SearchBar;
