import React from "react";
import Layout, { VendorLayout } from "../../layout/Layout.tsx";
import { Text } from "@chakra-ui/react";

const RawContentHistory = () => {
  return (
    <>
      <Text>History</Text>
    </>
  );
};

const LayoutWrapper = () => {
  return <Layout children={<RawContentHistory />} />;
};

const VendorHistory = () => {
  return (
    <>
      <LayoutWrapper />
    </>
  );
};

export default VendorHistory;
