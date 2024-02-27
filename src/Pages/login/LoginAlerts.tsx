import { Toast, useToast } from "@chakra-ui/react";
import React, { useCallback, useEffect } from "react";

export const LoginsErrors = ({ data, toast }) => {
  console.log(data);
  return (
    <>
      {toast({
        title: data.error,
        description: data.discription,
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
