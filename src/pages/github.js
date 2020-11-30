import obelisk from 'obelisk.js'
import theme from "../theme"
import { Box, ColorModeProvider, CSSReset, ThemeProvider } from "@chakra-ui/core"
import React from "react"

export default class GitHub extends React.Component{
  render() {
    return (
      <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <Box><this.GitHub/></Box>
      </ColorModeProvider>
    </ThemeProvider>
    )
  }
  GitHub = () => {
    let html = fetch('https://github.com/Akhilez').then(response => console.log(response))
    return (<Box>these ar github contributions</Box>)
  }

}
