import React from "react"
import { ThemeProvider, CSSReset, ColorModeProvider } from "@chakra-ui/core"
import theme from "../theme"
import ProfilePage from "../components/profile/profile"
import "../styles/profile_style.css"
import "../styles/fontawesome/css/font-awesome.min.css"
import "../styles/fontawesome/css/fonts.css"
import "bootstrap/dist/css/bootstrap.min.css"

export default function MyApp() {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <ProfilePage />
      </ColorModeProvider>
    </ThemeProvider>
  )
}
