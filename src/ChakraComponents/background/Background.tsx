import { Box, Center, Flex, Img } from "@chakra-ui/react";
import React from "react";

export const Background: React.FC = () => {
  return (
    <>
      <Box position={"relative"} h="100vh" zIndex={0}>
        <Box pos={"absolute"} top={"65%"} left={"10%"} className="parallex">
          <Img src="/Assets/Login/broken.png" />
        </Box>

        <Box pos={"absolute"} top={"20%"} right={"10%"} className="parallex">
          <Img src="/Assets/Login/dresser.png" />
        </Box>

        <Box pos={"absolute"} bottom={"10%"} left={"36%"} className="parallex">
          <Img src="/Assets/Login/fix.png" />
        </Box>

        <Box pos={"absolute"} right={"35%"} top={"10%"} className="parallex">
          <Img src="/Assets/Login/hey.png" w={"51px"} />
        </Box>

        <Box pos={"absolute"} left={"13%"} top={"27%"} className="parallex">
          <Img src="/Assets/Login/how.png" />
        </Box>
        <Box pos={"absolute"} bottom={"55%"} right={"25%"} className="parallex">
          <Img src="/Assets/Login/need.png" />
        </Box>
        <Box pos={"absolute"} bottom={"24%"} right={"12%"}>
          <Img src="/Assets/Login/tutor.png" />
        </Box>
      </Box>
    </>
  );
};
