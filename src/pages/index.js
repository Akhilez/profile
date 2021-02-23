import React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import ProfilePage from "../components/profile/profile"
import "../styles/profile_style.css"
import "../styles/fontawesome/css/font-awesome.min.css"
import "../styles/fontawesome/css/fonts.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { theme } from "../theme"

export default function MyApp() {
  return (
    <ChakraProvider theme={theme}>
      <ProfilePage />
    </ChakraProvider>
  )
}
