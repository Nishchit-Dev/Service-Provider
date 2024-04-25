import React from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
export const EmptyAnimations = () => {
  return (
    <>
      <Player
        autoplay
        loop
        src="/Animations/empty.json"
        style={{ height: "500px", width: "500px" }}
      >
        {/* <Controls
          visible={true}
          buttons={["play", "repeat", "frame", "debug"]}
        /> */}
      </Player>
    </>
  );
};
