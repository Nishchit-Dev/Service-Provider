import { ChakraBaseProvider } from "@chakra-ui/react"
import App from "../App"
import React from "react"

const ChakraWrapper =()=>{
    return(
        <ChakraBaseProvider>
            <App/>
        </ChakraBaseProvider>
    )
}

export default ChakraWrapper