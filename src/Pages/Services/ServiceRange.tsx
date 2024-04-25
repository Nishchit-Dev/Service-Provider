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
export const ServiceRangeSlider = () => {
  const [data, setData] = useState({ min: 0, max: 30 });
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
          defaultValue={[10, 30]}
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
