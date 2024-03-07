import { Box, Center, Flex, Img } from "@chakra-ui/react";
import React from "react";

export const Background: React.FC = () => {
  return (
    <> 
      <Box position={"relative"} h="100vh"  backgroundImage={"url('/Assets/webEffectBg1.svg')"}
>
        <Box pos={"absolute"} top={"65%"} left={"5%"} className="parallex">
          <Img src="/Assets/Login/broken.png" />
        </Box>

        <Box pos={"absolute"} top={"7%"} right={"9%"} className="parallex">
          <Img src="/Assets/Login/dresser.png" />
        </Box>

        <Box pos={"absolute"} bottom={"5%"} left={"36%"} className="parallex">
          <Img src="/Assets/Login/fix.png" />
        </Box>

        <Box pos={"absolute"} right={"35%"} top={"5%"} className="parallex">
          <Img src="/Assets/Login/hey.png" w={"51px"} />
        </Box>

        <Box pos={"absolute"} left={"10%"} top={"27%"} className="parallex" zIndex={100}>
          <Img src="/Assets/Login/how.png" />
        </Box>
        <Box pos={"absolute"} bottom={"55%"} right={"25%"} className="parallex">
          <Img src="/Assets/Login/need.png" />
        </Box>
        <Box pos={"absolute"} bottom={"20%"} right={"12%"}>
          <Img src="/Assets/Login/tutor.png" />
        </Box>
      </Box>
    </>
  );
};
