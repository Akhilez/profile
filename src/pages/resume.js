import React from "react"
import Resume from "../components/resume"
import "../styles/profile_style.css"
import "../styles/fontawesome/css/font-awesome.min.css"
import "../styles/fontawesome/css/fonts.css"
import "bootstrap/dist/css/bootstrap.min.css"
import theme from "../theme"
import { ColorModeProvider, CSSReset, ThemeProvider } from "@chakra-ui/core"

export default function () {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <Resume />
      </ColorModeProvider>
    </ThemeProvider>
  )
}
