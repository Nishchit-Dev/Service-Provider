import React, { useState } from "react";
import {
  RangeSlider,
  Box,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Flex,
  Text,
} from "@chakra-ui/react";
export const ServiceRangeSlider = ({ setData, data }) => {
  return (
    <>
      <Box w="100%">
        <Flex
          flex={1}
          justifyContent={"space-between"}
          alignItems={"center"}
          w={"100%"}
        >
          <Text>{data.min}</Text>
          <Text>{data.max}</Text>
        </Flex>
        <RangeSlider
          onChange={(e) => {
            console.log(e);
            setData({ min: e[0], max: e[1] });
          }}
          w="100%"
          aria-label={["min", "max"]}
          colorScheme="pink"
          max={4000}
          defaultValue={[120, 2500]}
          min={100}
        >
          <RangeSliderTrack>
            <RangeSliderFilledTrack />
          </RangeSliderTrack>
          <RangeSliderThumb index={0} />
          <RangeSliderThumb index={1} />
        </RangeSlider>
      </Box>
    </>
  );
};
