import React from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { Text } from "@chakra-ui/react";
export const EmptyAnimations = () => {
  return (
    <>
      <Player
        autoplay
        loop
        src="/Animations/emptyCart.json"
        style={{ height: "350px", width: "350px" }}
      >
        <Text fontSize={"30px"} color={"ntl.400"} textAlign={"center"}>
            Your Cart is Empty 
        </Text>
      </Player>
    </>
  );
};
