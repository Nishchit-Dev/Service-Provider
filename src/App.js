import { Box, Button, Center, useColorMode } from "@chakra-ui/react";

function App() {
  const { colorMode, setColorMode } = useColorMode();
  return (
    <Center h="100vh">
      <Box w="100px" h={"100px"}>
        <Button onClick={setColorMode}>
          Toggle {colorMode === "light" ? "Dark" : "Light"}
        </Button>
      </Box>
    </Center>
  );
}

export default App;
