import React from "react"
import Resume from "../lib/resume"
import { theme } from "../theme"
import { ChakraProvider } from "@chakra-ui/react"

export default function () {
  return (
    <ChakraProvider theme={theme}>
      <Resume />
    </ChakraProvider>
  )
}
