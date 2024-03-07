import { useToast } from "@chakra-ui/react";
import React from "react";

export const SignUpErrors = ({ data, toast }) => {
  return (
    <>
      {toast({
        title: data.name,
        description: data.description,
        status: "error",
        isClosable: true,
        position: "top",
        duration: 5000,
      })}
    </>
  );
};

export const LoginSuccess = () => {
  return <></>;
};
