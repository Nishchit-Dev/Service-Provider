import React from "react";
import Layout from "../layout/Layout.tsx";
import {
  Box,
  Center,
  Text,
  Divider,
  Flex,
  Collapse,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { RawContentHistory } from "../vendor/History/History.tsx";

const LayoutWrapper = () => {
  return <Layout children={<RawContentHistory />} />;
};

const HistoryPage = () => {
  return (
    <>
      <LayoutWrapper />
    </>
  );
};

export default HistoryPage;
