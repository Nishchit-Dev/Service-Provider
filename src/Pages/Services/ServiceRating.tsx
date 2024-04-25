import { StarIcon } from "@chakra-ui/icons";
import { Checkbox, CheckboxGroup, Flex, Stack } from "@chakra-ui/react";
import React from "react";

const ratingRange = [1, 2, 3, 4, 5];
export const ServiceRating = () => {
  return (
    <>
      <Flex>
        <CheckboxGroup>
          <Stack>
            <Flex flexDir={"column"} gap={"15px"} padding={"9px"}>
              <Checkbox value={5} key={5}>
                <Stack flexDir={"row"}>
                  <StarIcon color={"#FFD101"} />
                  <StarIcon color={"#FFD101"} />
                  <StarIcon color={"#FFD101"} />
                  <StarIcon color={"#FFD101"} />
                  <StarIcon color={"#FFD101"} />
                </Stack>
              </Checkbox>

              <Checkbox value={4} key={4}>
                <Stack flexDir={"row"}>
                  <StarIcon color={"#FFD101"} />
                  <StarIcon color={"#FFD101"} />
                  <StarIcon color={"#FFD101"} />
                  <StarIcon color={"#FFD101"} />
                </Stack>
              </Checkbox>

              <Checkbox value={3} key={3}>
                <Stack flexDir={"row"}>
                  <StarIcon color={"#FFD101"} />
                  <StarIcon color={"#FFD101"} />
                  <StarIcon color={"#FFD101"} />
                </Stack>
              </Checkbox>

              <Checkbox value={2} key={2}>
                <Stack flexDir={"row"}>
                  <StarIcon color={"#FFD101"} />
                  <StarIcon color={"#FFD101"} />
                </Stack>
              </Checkbox>

              <Checkbox value={1} key={1}>
                <Stack flexDir={"row"}>
                  <StarIcon color={"#FFD101"} />
                </Stack>
              </Checkbox>
            </Flex>
          </Stack>
        </CheckboxGroup>
      </Flex>
    </>
  );
};
