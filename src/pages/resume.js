import React from "react"
import Resume from "../components/resume"
import "../styles/profile_style.css"
import "../styles/fontawesome/css/font-awesome.min.css"
import "../styles/fontawesome/css/fonts.css"
import "bootstrap/dist/css/bootstrap.min.css"
import {theme} from "../theme"
import { ChakraProvider } from "@chakra-ui/react"

export default function() {
  return (
    <ChakraProvider theme={theme}>
      <Resume />
    </ChakraProvider>
  )
}
