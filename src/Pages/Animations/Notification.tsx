import React from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
export const NotificationAnimations = () => {
    return (
      <>
        <Player
          autoplay
          loop
          src="/Animations/notification.json"
          style={{ height: "200px", width: "200px" }}
        >
          {/* <Controls
            visible={true}
            buttons={["play", "repeat", "frame", "debug"]}
          /> */}
        </Player>
      </>
    );
  };
  