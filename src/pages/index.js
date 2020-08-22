import React from "react"
import { ThemeProvider, CSSReset, ColorModeProvider } from "@chakra-ui/core";
import theme from '../theme'
import ProfilePage from "../components/profile/profile";

export default function MyApp() {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <ProfilePage/>
      </ColorModeProvider>
    </ThemeProvider>
  );
}
